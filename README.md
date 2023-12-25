<div align="center">

![Cinny Desktop on GNOME 45](./cinny-desktop-promo.png)

# Cinny Desktop

Unofficial Desktop application for [Cinny](https://cinny.in/) (a browser-based [Matrix](https://matrix.org) client) - utilizing a local build of Cinny.

</div>

## Notice

This makes a single request to Github on start, to check for updates (so we can notify you about them), meaning Github could know when you open Cinny. Depending on how schizo your threat model is, this could be a downside.

They get no information other than that you opened it.

## Prebuilt Binaries

These are built by Github.

- [Linux Binary Archive](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/linux-bin-x64.tar.gz)
- [Debian Package](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/debian-x64.deb)
- Flatpak (soon - if someone can help me troubleshoot the electron-forge flatpak builder, it'd be greatly appreciated - [contact me](https://matrix.to/#/@3xpo:matrix.org))
- [Windows Binary Archive](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/windows-bin-x64.zip)
- [Windows Installer](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/windows-setup-x64.exe)

## Build Instructions

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
