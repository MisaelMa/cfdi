

module.exports = async ({github, context, core, execa}) => {
  const commits = github.event.commits
  // const list = ['catalogs','csd','curp','pdf','rfc','utils','xml','openssl','saxon']
  const list = ['catalogs','csd','utils','xml','openssl','saxon']
  for (const commit of commits) {
    const commit = commit.message;
    const [type, msg] = commit.split(':')
    const scope = type.match(/\(([^)]+)\)/g).pop().replace(/[{()}]/g, '')
    if (list.includes(scope)){
      const { stdout } = await execa('rush', ['version', '--version-policy', scope, '--bump' ])
      console.log(scope, stdout);
    }
  }
}
