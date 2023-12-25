# Cinny Desktop

Desktop application for [Cinny](https://cinny.in/) - a browser-based Matrix client.

Includes a local build of Cinny; no need to worry about the feds modifying the post-install application & gaining access to your shit.

## Notice

This makes a single request to github on start, to check for updates (so we can notify you about them), meaning github knows when you opened Cinny. They get no information other than that you opened it.

## Prebuilt Binaries

These are built by github.

- [Linux Binary Archive](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/linux-bin-x64.tar.gz)
- [Debian Package](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/debian-x64.deb)
- Flatpak (soon - if someone can help me troubleshoot, it'd be greatly appreciated - [contact me](https://matrix.to/#/@3xpo:matrix.org))
- [Windows Binary Archive](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/windows-bin-x64.zip)
- [Windows Installer](https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/windows-setup-x64.exe)

## Build Instructions

1. Clone Cinny, build it, and write the path to it's `dist` dir to `cinny-dist` in this repository.
2. Run `pnpm i`
3. Run `pnpm build`
4. Enjoy!
