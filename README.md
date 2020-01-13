# Signati

[![N|Solid](https://avatars1.githubusercontent.com/u/52678977?s=400&u=040aa07fa564985892d0fd115a2764579845502d&v=4)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)]('')

Signati NestJS
# Dependeces
  - JDK
  - Openssl
  --Debian/Ubuntu: sudo apt-get install openssl
  --CentOS, Red Hat: yum install openssl
  --Archlinux: sudo pacman -S openssl
  - Saxon-HE >=9.9.1.6J
    --Archlinux:  https://aur.archlinux.org/packages/saxon-he
    --Debian/Ubuntu:

# Getting started!




### Tech

Signati uses a number of open source projects to work properly:


* [Express] - fast node.js network app framework [@tjholowaychuk]



### Installation

Signati requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd signati
$ npm install
$ npm run start:dev
```

For production environments...

```sh
$ npm run start:prod
```

### Plugins

Signati is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!
