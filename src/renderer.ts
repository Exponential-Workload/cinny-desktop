import { Cfg, cfg, delApp, updApp } from './expose';

// MIT; https://gist.github.com/jonleighton/958841
const base64ArrayBuffer = (arrayBuffer: ArrayBuffer): string => {
  const encodings =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  const bytes = new Uint8Array(arrayBuffer);
  const byteLength = bytes.byteLength;
  const byteRemainder = byteLength % 3;
  const mainLength = byteLength - byteRemainder;

  let base64 = '';
  let a: number, b: number, c: number, d: number;
  let chunk: number;

  // Main loop deals with bytes in chunks of 3
  for (let i = 0; i < mainLength; i += 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
    d = chunk & 63; // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder === 1) {
    chunk = bytes[mainLength];

    a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3) << 4; // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + '==';
  } else if (byteRemainder === 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

    a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15) << 2; // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + '=';
  }

  return base64;
};

export default async () => {
  console.log('Hello from Cinny Desktop! 👋');
  console.log(
    'Source Code: https://github.com/Exponential-Workload/cinny-desktop',
  );

  let pfp = '';
  let binaryPfp = '';

  let first = true;
  setInterval(async () => {
    const userId = localStorage.getItem('cinny_user_id');
    let userPfp = document
      .querySelector('.avatar-container > img[src]')
      ?.getAttribute('src');

    if (!userId) delApp();
    else {
      if (!userPfp) userPfp = first ? 'cinny://app/favicon.png' : pfp;
      first = false;
      if (!binaryPfp || pfp !== userPfp) {
        const profileRs = await fetch(userPfp);
        const profilePicture = await profileRs.arrayBuffer();
        const mime = profileRs.headers.get('Content-Type') ?? 'image/png';
        binaryPfp = `data:${encodeURIComponent(
          mime,
        )};base64,${encodeURIComponent(base64ArrayBuffer(profilePicture))}`;
      }
      pfp = userPfp;
      updApp(userId, binaryPfp);
    }
  }, 1024);

  let lastContainer = null as null | HTMLDivElement;
  let conf: Cfg = await cfg();
  let selectIdx = 0;
  const redraw = () => {
    if (lastContainer) {
      lastContainer.remove();
      lastContainer = null;
    }
    const setStyle = (element: HTMLElement, props: Record<string, string>) =>
      Object.entries(props).forEach(([k, v]) =>
        element.style.setProperty(`${k}`, `${v}`),
      );
    const create = <El extends keyof HTMLElementTagNameMap>(
      tag: El,
      opt: {
        styles?: Record<string, string>;
        parent?: HTMLElement;
        children?: HTMLElement[];
        post?: (el: HTMLElementTagNameMap[El]) => void;
        textContent?: string;
      } = {},
    ) => {
      const el = document.createElement(tag);
      if (opt.styles) setStyle(el, opt.styles);
      if (opt.parent) opt.parent.appendChild(el);
      if (opt.children) opt.children.forEach(child => el.appendChild(child));
      if (opt.textContent) el.textContent = opt.textContent;
      if (opt.post) opt.post(el);
      return el;
    };
    const selectionStyles = (idx = conf.apps.length) => ({
      gap: '8px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'flex-direction': 'row',
      'text-align': 'center',
      'font-size': '1.4rem',
      padding: '10px',
      'border-radius': '12px',
      background: '#5554',
      border: '1.2px solid',
      'border-color': '#fff4',
      cursor: 'default',
      ...(selectIdx === idx
        ? {
            background: '#5557',
            'border-color': '#23D18B88',
          }
        : {}),
    });
    lastContainer = create('div', {
      styles: {
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'flex-direction': 'column',
        'text-align': 'center',
        color: '#fff',
        background: '#1a1a1a33',
        'backdrop-filter': 'blur(4px)',
        width: '100vw',
        height: '100vh',
        'z-index': '8192',
        gap: '8px',
        cursor: 'default',
      },
      parent: document.body,
      children: [
        create('span', {
          textContent: 'Select a User',
          styles: {
            'font-size': '1.6rem',
            'padding-bottom': '8px',
            display: 'block',
          },
        }),
        ...conf.apps.map((v, i) =>
          create('div', {
            children: [
              create('img', {
                styles: {
                  height: '1.2em',
                  width: '1.2em',
                  'border-radius': '8px',
                },
                post(img) {
                  img.src = v.pfp;
                },
              }),
              create('span', {
                textContent: v.userid,
              }),
            ],
            styles: selectionStyles(i),
          }),
        ),
        create('div', {
          children: [
            create('span', {
              textContent: 'New Account',
            }),
          ],
          styles: selectionStyles(),
        }),
        create('span', {
          textContent: 'Esc/Ctrl+Tab = Close',
          styles: {
            'font-size': '0.9rem',
            'padding-top': '24px',
            display: 'block',
          },
        }),
        create('span', {
          textContent: 'Up/Down = Navigate',
          styles: {
            'font-size': '0.9rem',
            display: 'block',
          },
        }),
        create('span', {
          textContent: 'Enter/Return = Select',
          styles: {
            'font-size': '0.9rem',
            display: 'block',
          },
        }),
      ],
    });
  };
  const listener = async (k: KeyboardEvent) => {
    const ctrlTab = k.key === 'Tab' && k.ctrlKey;
    if (lastContainer && (ctrlTab || k.key === 'Escape')) {
      k.preventDefault();
      k.stopPropagation();
      lastContainer.remove();
      lastContainer = null;
      return;
    }
    let performedAction = true;
    if (lastContainer) {
      switch (k.key) {
        case 's':
        case 'S':
        case 'ArrowDown':
          if (++selectIdx > conf.apps.length) selectIdx = 0;
          break;
        case 'w':
        case 'W':
        case 'ArrowUp':
          if (--selectIdx < 0) selectIdx = conf.apps.length;
          break;

        case 'Return':
        case 'Enter': {
          const isLast = selectIdx === conf.apps.length;
          if (isLast) location.replace('cinny://app-create');
          else {
            const app = conf.apps[selectIdx];
            const target = `app${app.id === null ? '' : `-${app.id}`}`;
            location.replace(`cinny://${target}/`);
          }
          break;
        }

        default:
          performedAction = false;
          break;
      }
    }
    if (ctrlTab || (performedAction && lastContainer)) {
      k.preventDefault();
      k.stopPropagation();
      if (!lastContainer) conf = await cfg();
      redraw();
    } else if (lastContainer) {
      k.preventDefault();
      k.stopPropagation();
    }
  };
  document.body.addEventListener('keydown', listener);
};
