const glob = require('glob');
let wikiFiles = glob.sync('docs/wiki/**/*.md').map(f => f.replace('docs', ''))
let questFiles = glob.sync('docs/quest/**/*.md').map(f => f.replace('docs', ''))
let oneshotFiles = glob.sync('docs/oneshot/**/*.md').map(f => f.replace('docs', ''))


module.exports = {
  title: 'DM Cave',
  description: 'A dmcave',
  themeConfig: {
    logo: '/book.png',
    sidebarDepth: 0,
    sidebar: [
        {
          title: 'Wiki',
          children: wikiFiles
        },
        {
          title: 'Quests',
          children: questFiles
        },
        {
          title: 'Oneshots',
          children: oneshotFiles
        }
    ],
    nextLinks: false,
    prevLinks: false
  }
}