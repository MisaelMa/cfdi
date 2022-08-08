const myArgs = process.argv.slice(2);
var namePackage = 'package.json';
var nameIndex = 'package.index.json';
const fs = require('fs');
const path = require('path');
const acepts = [
  '@cfdi/xml',
  '@cfdi/catalogos',
  '@cfdi/csd',
  '@cfdi/pdf',
  '@cfdi/rfc',
  '@cfdi/curp',
  '@cfdi/utils',
  '@clir/openssl',
  '@clir/saxon-he',
];
const args = ['merge', 'apart'];
const cfdi = {
  '@cfdi/xml': '../../packages/cfdi/xml',
  '@cfdi/catalogos': '../../packages/cfdi/catalogos',
  '@cfdi/csd': '../../packages/cfdi/csd',
  '@cfdi/pdf': './packages/cfdi/pdf',
  '@cfdi/rfc': '../../packages/cfdi/rfc',
  '@cfdi/curp': '../../packages/cfdi/curp',
  '@cfdi/utils': '../../packages/cfdi/utils',
};
const clir = {
  '@clir/openssl': '../../packages/clir/openssl',
  '@clir/saxon-he': '../../packages/clir/saxon-he',
};

const projects = {
  ...cfdi,
  ...clir,
};

if (acepts.includes(myArgs[0])) {
  if (!myArgs[1]) {
    console.log('args requires', `merge or apart`);
    return;
  }
  if (myArgs[1] && !args.includes(myArgs[1])) {
    console.log('args requires', `merge or apart`);
    return;
  }
  const pathLibrary = projects[myArgs[0]];
  const action = myArgs[1];
  console.log('ruta: ', pathLibrary);
  console.log('action', action);
  if (action === 'merge') {
    mergeJson(pathLibrary);
  }
  if (action === 'apart') {
    apartJson(pathLibrary);
  }
} else {
  console.log('no exite proyectos');
}

function mergeJson(route) {
  console.log('ruta de merge', route);

  const package = fs.readFileSync(
    path.resolve(`${route}/${namePackage}`),
    'utf-8'
  );
  const index = fs.readFileSync(path.resolve(`${route}/${nameIndex}`), 'utf-8');
  const mezcla = Object.assign(JSON.parse(package), JSON.parse(index));
  fs.writeFileSync(`${route}/${namePackage}`, JSON.stringify(mezcla, null, 2));
}
function apartJson(route) {
  const package = fs.readFileSync(
    path.resolve(`${route}/${namePackage}`),
    'utf-8'
  );
  const pack = JSON.parse(package);
  delete pack.main;
  delete pack.typings;
  delete pack.module;
  fs.writeFileSync(`${route}/${namePackage}`, JSON.stringify(pack, null, 2));
}
