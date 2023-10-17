# React & Electron Example

## 使用ライブラリ及びバージョン
```
react-electron-app@1.0.0 C:\Jobs\WebUIDev\example-react-electron-app
├── @babel/core@7.23.0
├── @babel/preset-env@7.22.20
├── @babel/preset-react@7.22.15
├── @electron-forge/cli@6.4.2
├── @electron-forge/maker-deb@6.4.2
├── @electron-forge/maker-rpm@6.4.2
├── @electron-forge/maker-squirrel@6.4.2
├── @electron-forge/maker-zip@6.4.2
├── @electron-forge/plugin-auto-unpack-natives@6.4.2
├── @types/fs-extra@9.0.13 extraneous
├── @types/glob@7.2.0 extraneous
├── @types/minimatch@5.1.2 extraneous
├── asar@3.2.0 extraneous
├── babel-loader@9.1.3
├── chromium-pickle-js@0.2.0 extraneous
├── css-loader@6.8.1
├── electron-installer-common@0.10.3 extraneous
├── electron-reload@2.0.0-alpha.1
├── electron-squirrel-startup@1.0.0
├── electron@26.4.0
├── react-dom@18.2.0
├── react@18.2.0
├── sass-loader@13.3.2
├── sass@1.68.0
├── style-loader@3.3.3
├── tmp-promise@3.0.3 extraneous
├── tmp@0.2.1 extraneous
├── webpack-cli@5.1.4
├── webpack@5.88.2
└── word-wrap@1.2.5 extraneous
```

## スタート
クローンした後にルートフォルダで下記コマンドを実行する

```
$ npm install
$ npm run start
```

## ホットリロードの有効化
バックグラウンドでシェルを起動して下記コマンドをルートで実行する
```
$ npm run watch
```
上記コマンドを実行した後に
```
$ npm run start
```
を実行することで以降は編集内容が即座に反映される

## ビルド
Electron-Forgeを使用している
```
$ npm run make
```
でoutフォルダ内部に実行ファイルのexeが生成される

## 各種ファイル

### /main.js
バックエンド側のnode.jsの操作はこっち
### /index.html
本質的に表示されるページはこれ

### /src
フロントエンドで描写する内容のプログラムやアセットなどはこっち