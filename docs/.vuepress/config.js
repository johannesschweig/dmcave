const glob = require('glob');
let wikiFiles = glob.sync('docs/wiki/**/*.md').map(f => f.replace('docs', ''))
let questFiles = glob.sync('docs/quest/**/*.md').map(f => f.replace('docs', ''))


module.exports = {
  title: 'DM Cave',
  description: 'A dmcave',
  themeConfig: {
    sidebar: [
        {
          title: 'Wiki',
          children: wikiFiles
        },
        {
          title: 'Quests',
          children: questFiles
        }
    ],
    nextLinks: false,
    prevLinks: false
  }
}