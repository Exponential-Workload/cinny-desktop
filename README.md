<div align="center">

![Cinny Desktop on GNOME 45](./cinny-desktop-promo.png)

# Cinny Desktop

Unofficial Desktop application for [Cinny](https://cinny.in/) (a browser-based [Matrix](https://matrix.org) client) - utilizing a local build of Cinny.

Supports account-switching, via ctrl+tab. This is done via an injected script & abuses Electron Protocols & localStorage context partitioning.

</div>

## Notice

This makes a single request to Github on start, to check for updates (so we can notify you about them), meaning Github could know when you open Cinny. Depending on how schizo your threat model is, this could be a downside.

They get no information other than that you opened it.

## Simple Installation

These will download binaries built by & hosted on Github servers.

### Linux

#### Arch

Run `curl -fsSL https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/linux-install-x64.sh | sh` in a terminal. For a system-wide install, run as root.

(makepkg coming sometime eventually)

#### Debian

Install the [Debian Package](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/debian-x64.deb) ([dev](https://gh.expo.moe/cinny-desktop/_build/ubunut/make/deb/x64/)).

### Windows

Use the [Windows Installer](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/windows-setup-x64.exe).

## Advanced Installation

### Prebuilt Binaries

These are built by Github.

- [Linux Binary Archive (.tar.gz)](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/linux-bin-x64.tar.gz)
- [Linux Binary Archive (.zip)](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/linux-bin-x64.zip) ([dev](https://gh.expo.moe/cinny-desktop/_build/ubunut/make/zip/linux/x64/))
- [Debian Package](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/debian-x64.deb) ([dev](https://gh.expo.moe/cinny-desktop/_build/ubunut/make/deb/x64/))
- Flatpak (soon - if someone can help me troubleshoot the electron-forge flatpak builder, it'd be greatly appreciated - [contact me](https://matrix.to/#/@3xpo:matrix.org))
- [Windows Binary Archive](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/windows-bin-x64.zip)
- [Windows Installer](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/windows-setup-x64.exe) ([dev](https://gh.expo.moe/cinny-desktop/_build/window/make/squirrel.windows/x64/))

(dev = latest master commit)

#### Setting up Start Menu

This step is only needed post-installation when using the binary archives.

##### Windows

TBA

##### Linux

Simply run the executable with the `--setup-desktop` flag; open a terminal, `cd` into the folder you extracted the binary to, and run `./Cinny --setup-desktop`.

Note that you should _NOT_ move the folder afterwards. The `.desktop` shortcut shown in the start menu will point to the path you specified. You can move it prior to running with `--setup-desktop` to anywhere on the system, and re-run with `--setup-desktop` if you did move it after already running it with the flag once before.

### Build Instructions

1. Clone Cinny, build it, and write the path to it's `dist` dir to `cinny-dist` in this repository. Make sure to update this regularly, followed by rebuilding Cinny Desktop.
2. Run `pnpm i`
3. Run `pnpm build`
4. Enjoy!

## License

        cinny-desktop
        Copyright (C) 2023  Expo

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU Affero General Public License as
        published by the Free Software Foundation, either version 3 of the
        License, or (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Affero General Public License for more details.

        You should have received a copy of the GNU Affero General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.
