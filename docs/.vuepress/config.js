const glob = require('glob');
let markdownFiles = glob.sync('docs/wiki/**/*.md').map(f => f.replace('docs', ''))


module.exports = {
  title: 'DM Cave',
  description: 'A dmcave',
  themeConfig: {
    sidebar: markdownFiles
  }
}