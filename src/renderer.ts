import { Cfg, cfg, delApp, updApp } from './expose';

export default async () => {
  console.log('Hello from Cinny Desktop! 👋');
  console.log(
    'Source Code: https://github.com/Exponential-Workload/cinny-desktop',
  );

  setInterval(() => {
    const userId = localStorage.getItem('cinny_user_id');
    let userPfp = document.querySelector('.sticky-container .sidebar-avatar .avatar-container img')?.getAttribute('src')

    if (!userId)
      delApp();
    else {
      if (!userPfp)
        userPfp = 'cinny://app/favicon.png'
      updApp(userId, userPfp)
    }
  }, 1024)

  let lastContainer = null as null | HTMLDivElement
  let conf: Cfg = await cfg();
  let selectIdx = 0;
  const redraw = () => {
    if (lastContainer) {
      lastContainer.remove()
      lastContainer = null
    }
    const setStyle = (element: HTMLElement, props: Record<string, string>) => Object.entries(props).forEach(([k, v]) =>
      element.style.setProperty(`${k}`, `${v}`))
    const create = <El extends keyof HTMLElementTagNameMap>(tag: El, opt: {
      styles?: Record<string, string>;
      parent?: HTMLElement;
      children?: HTMLElement[];
      post?: (el: HTMLElementTagNameMap[El]) => void;
      textContent?: string;
    } = {}) => {
      const el = document.createElement(tag);
      if (opt.styles)
        setStyle(el, opt.styles)
      if (opt.parent)
        opt.parent.appendChild(el)
      if (opt.children)
        opt.children.forEach(child => el.appendChild(child))
      if (opt.textContent)
        el.textContent = opt.textContent
      if (opt.post)
        opt.post(el)
      return el;
    }
    const selectionStyles = (idx = conf.apps.length) => ({
      gap: '8px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'flex-direction': 'row',
      'text-align': 'center',
      'font-size': '1.4rem',
      'padding': '10px',
      'border-radius': '12px',
      'background': '#5554',
      'border': '1.2px solid',
      'border-color': '#fff4',
      'cursor': 'default',
      ...(selectIdx === idx ? {
        'background': '#5557',
        'border-color': '#23D18B88',
      } : {})
    })
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
        'color': '#fff',
        'background': '#1a1a1a33',
        'backdrop-filter': 'blur(4px)',
        width: '100vw',
        height: '100vh',
        'z-index': '8192',
        'gap': '8px',
        'cursor': 'default',
      },
      parent: document.body,
      children: [
        create('span', {
          textContent: 'Select a User',
          styles: {
            'font-size': '1.6rem',
            'padding-bottom': '8px',
            'display': 'block',
          }
        }),
        ...conf.apps.map((v, i) => create('div', {
          children: [
            create('img', {
              styles: {
                height: '1.2em',
                width: '1.2em',
                'border-radius': '8px',
              },
              post(img) {
                img.src = v.pfp
              }
            }),
            create('span', {
              textContent: v.userid
            }),
          ],
          styles: selectionStyles(i)
        })),
        create('div', {
          children: [
            create('span', {
              textContent: 'New Account'
            })
          ],
          styles: selectionStyles()
        }),
        create('span', {
          textContent: 'Esc/Ctrl+Tab = Close',
          styles: {
            'font-size': '0.9rem',
            'padding-top': '24px',
            'display': 'block',
          }
        }),
        create('span', {
          textContent: 'Up/Down = Navigate',
          styles: {
            'font-size': '0.9rem',
            'display': 'block',
          }
        }),
        create('span', {
          textContent: 'Enter/Return = Select',
          styles: {
            'font-size': '0.9rem',
            'display': 'block',
          }
        }),
      ],
    })
  }
  const listener = async (k: KeyboardEvent) => {
    const ctrlTab = k.key === 'Tab' && k.ctrlKey;
    if (lastContainer && (ctrlTab || k.key === 'Escape')) {
      k.preventDefault();
      k.stopPropagation();
      lastContainer.remove()
      lastContainer = null
      return
    }
    let performedAction = true;
    if (lastContainer) {
      switch (k.key) {
        case 's':
        case 'S':
        case 'ArrowDown':
          if (++selectIdx > conf.apps.length)
            selectIdx = 0;
          break;
        case 'w':
        case 'W':
        case 'ArrowUp':
          if (--selectIdx < 0)
            selectIdx = conf.apps.length;
          break;

        case 'Return':
        case 'Enter': {
          const isLast = selectIdx === conf.apps.length
          if (isLast) location.replace('cinny://app-create')
          else {
            const app = conf.apps[selectIdx];
            const target = `app${app.id === null ? '' : `-${app.id}`}`
            location.replace(`cinny://${target}/`)
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
      if (!lastContainer)
        conf = await cfg();
      redraw();
    } else if (lastContainer) {
      k.preventDefault();
      k.stopPropagation();
    }
  }
  document.body.addEventListener('keydown', listener)
}