<img src="https://thedesk.top/img/top.png" width="300" align="left">
<img src="https://thedesk.top/img/desk.png" width="150" align="right">

# TheDesk
 
[![Build Status](https://travis-ci.org/cutls/TheDesk.svg?branch=master)](https://travis-ci.org/cutls/TheDesk)
[![Crowdin](https://d322cqt584bo4o.cloudfront.net/thedesk/localized.svg)](https://translate.thedesk.top/project/thedesk)
[![Version](https://flat.badgen.net/github/release/cutls/TheDesk)](https://github.com/cutls/TheDesk/releases)
[![Download](https://flat.badgen.net/github/assets-dl/cutls/TheDesk)](https://github.com/cutls/TheDesk/releases)
![Contributors](https://flat.badgen.net/github/contributors/cutls/TheDesk)  
Mastodon/Misskey client for PC(Windows/Linux/macOS)  
オープンソースSNSマストドン/MisskeyのPC向けクライアント[日本語はこちら](README_ja.md)  
  
Download:[TheDesk](https://thedesk.top) [![check](https://status.cutls.com/badge/?site=thedesk.top)](https://status.cutls.com)    

<a href="https://www.patreon.com/cutls"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" alt="Become a Patron!" width="160"></a>  
![Screenshots1](https://thedesk.top/img/scr1.png)  

## License

[GNU General Public License v3.0](https://github.com/cutls/TheDesk/blob/master/LICENSE)  

The icon is provided under [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[Press Kit](https://dl.thedesk.top/press/TheDesk+PressKit.zip)  

* [PNG](https://dl.thedesk.top/press/TheDesk.png)
* [Monotone SVG](https://dl.thedesk.top/press/TheDesk.svg)
* [ico](https://dl.thedesk.top/press/TheDesk.ico)
* [icns](https://dl.thedesk.top/press/TheDesk.icns)

The default sounds of notifications is provided [Creative Commons BY](https://creativecommons.org/licenses/by/4.0/)

## Terms of Use

* [利用規約(Terms of Use(ja))](https://thedesk.top/tos.html)
* [プライバシーポリシー(Privacy Policy(ja))](https://thedesk.top/priv.html)

## Language

* 日本語(Japanese)
* English

### Translation

Crowdin project is available! Visit: https://translate.thedesk.top

## Requirement

* Electron 4.2 or above(install yourself)
* electron-dl(in package.json)
* Jimp(in package.json)
* font-manager(in package.json)
  * Python 2.x(install yourself)
  * VisualC++(Windows)(install yourself)
* itunes-nowplaying-mac(for macOS)(in package.json)
* node-notifier(in package.json)
* sumchecker(in package.json)
* Ability to read unformated files!(install yourself)

## Contributors

Build for macOS  

* [toneji](https://minohdon.jp/@toneji)

Build for Linux  

* [popn_ja](https://popon.pptdn.jp/@popn_ja)

Fellow coder

* [kPherox](https://www.kr-kp.com/)

## Build

```sh
git clone https://github.com/cutls/TheDesk
cd TheDesk/app
npm install
npm install --only=dev
```

### electron-builder(Recommended)
Use npm scripts.  

```sh
# Build for current platform
npm run build

# Select build target
## Windows
npm run build:win

## Windows and Linux (The macOS target should run on macOS. So, this option hasn't include the build for macOS)
npm run build:all
```

Config is all on package.json  

### electron-packager
`npm install --save-dev electron-rebuild`  
  
Linux/macOS  
`./node_modules/.bin/electron-rebuild`  
Windows  
`.\node_modules\.bin\electron-rebuild.cmd`  
  
To install Python 2.x and Visual C++ for Windows, before running `npm install --save-dev electron-rebuild`  
`npm install --global windows-build-tools`  

Windows  
`electron-packager ./app TheDesk --executable-name="TheDesk" --app-copyright="Copyright (c) TheDesk 2018 Cutls.com 2015 All Right Reserved" --win32metadata.CompanyName="TheDesk&Cutls.com" --win32metadata.FileDescription="TheDesk" --win32metadata.OriginalFilename="TheDesk" --win32metadata.InternalName="TheDesk" --win32metadata.ProductName="TheDesk" --platform=win32 --arch=all --electron-version=4.0.5 --icon=.\app\thedesk.ico --overwrite`  
Linux  
`electron-packager ./app TheDesk --executable-name="TheDesk" --app-copyright="Copyright (c) TheDesk 2018 Cutls.com 2015 All Right Reserved" --platform=linux --arch=x64,ia32 --electron-version=4.0.5 --overwrite`  
macOS  
`electron-packager ./app TheDesk --executable-name="TheDesk" --app-copyright="Copyright (c) TheDesk 2018 Cutls.com 2015 All Right Reserved" --platform=darwin --arch=all --electron-version=4.0.5 --icon=./app/icon.icns --overwrite`  

## Pleroma support

Did you find a bug with Pleroma accounts?  
Pleroma **does not** follow Mastodon API rules completely although Pleroma developers say so.  
Please write issues to improve TheDesk affinity with Pleroma.  
