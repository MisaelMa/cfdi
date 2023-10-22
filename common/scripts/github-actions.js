async function execa(command, params) {
  const { spawn } = require('child_process');
  const child = spawn(command, params);

  let data = '';
  for await (const chunk of child.stdout) {
    console.log('stdout chunk: ' + chunk);
    data += chunk;
  }
  let error = '';
  for await (const chunk of child.stderr) {
    console.error('stderr chunk: ' + chunk);
    error += chunk;
  }
  const exitCode = await new Promise((resolve, reject) => {
    child.on('close', resolve);
  });

  if (exitCode) {
    throw new Error(`subprocess error exit ${exitCode}, ${error}`);
  }
  return data;
}
function getDependences(scope) {
  const dependencies = {
    xml: {
      xml: true,
    },
    'only-complementos':{
      complementos: true,
    },
    complementos:{
      complementos: true,
      xml: true
    },
    utils: {
      pdf: true,
      utils: true,
    },
    csd: {
      csd: true,
      xml: true,
    },
    csf: {
      csf: true,
    },
    openssl: {
      openssl: true,
      csd: true,
      xml: true,
    },
    saxon: {
      saxon: true,
      xml: true,
    },
    catalogs: {
      catalogs: true,
      xml: true,
    },
    curp: {
      curp: true,
    },
    pdf: {
      pdf: true,
    },
    rfc: {
      rfc: true,
    },
    xsd: {
      xsd: true
    }
  };
  return dependencies[scope] || {};
}

function getScopes(commits = []) {
  const list = ['catalogs','csd','csf','curp','pdf','rfc','utils','xml','complementos','openssl','saxon','xsd']
  const onlys = {
    'only-complementos': 'complementos'
  }
  let scopes = {};
  for (var i = 0; i < commits.length; i++) {
    const commit = commits[i];
    const message = commit.message;
    const [type, msg] = message.split(':');
    const findScope = type.match(/\(([^)]+)\)/g);
    if (findScope) {
      const scope = findScope.pop().replace(/[{()}]/g, '');
      const onlyScope =  onlys[scope] || scope
      if (list.includes(onlyScope)) {
        scopes = {
          ...scopes,
          ...getDependences(scope)
        }
      }
    }
  }
  return Object.keys(scopes);
}
module.exports = async ({ github, context, core }) => {
  const commits = context.payload.commits || [];
  const scopes =  getScopes(commits);

  for (var i = 0; i < scopes.length; i++) {
    const scope = scopes[i];
    const data = await execa('rush', [
      'version',
      '--version-policy',
      scope,
      '--bump',
    ]);
    console.log(scope, data);
  }
};
