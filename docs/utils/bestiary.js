export const myCreatures = [{
    name: 'Strauchdieb',
    weapon: 'Dolch',
    info: 'e.g. Ronan',
    sg: 2.7,
    fought: true,
    attr: {
      tp: 12,
      ini: 0,
      kb: 3,
      rb: 6,
      s: -1
    }
  },
  {
    name: 'Skelett',
    weapon: 'Kurzschwert',
    info: '',
    fought: true,
    sg: 4.1,
    attr: {
      tp: 20,
      ini: 1,
      kb: 4,
      rb: 6,
      s: 1,
      magres: 1
    }
  },
  {
    name: 'Skelettfürst',
    weapon: '',
    info: '',
    fought: false,
    sg: 6.1,
    attr: {
      tp: 45,
      ini: 2,
      kb: 4,
      rb: 7,
      s: 2,
      fear: 1
    }
  },
  {
    name: 'Riesenskorpion',
    weapon: '',
    info: 'behäbig, 3x1TP Schaden. Mehrere Treffer stacken und erhöhen den Schaden 1-2-4-8-12',
    fought: true,
    sg: 3.2,
    attr: {
      tp: 16,
      ini: 0,
      kb: 2,
      rb: 6,
      s: 0,
      venom: 1
    }
  },
  {
    name: 'Schwarzer Skorpion',
    weapon: '',
    info: 'gift verursacht 1/3 tp schaden pro runde/stunde; wenn man sich nicht bewegt, nur pro tag. das gift klingt nach 4 Ticks oder 6 Stunden ab.',
    fought: false,
    sg: 2.5,
    attr: {
      tp: 4,
      ini: 0,
      kb: 0,
      rb: 6,
      s: -3,
      venom: 3
    }
  },
  {
    name: 'Geier',
    weapon: '',
    info: '',
    fought: false,
    sg: 3.3,
    attr: {
      tp: 12,
      ini: 1,
      kb: 2,
      rb: 6,
      s: 0,
      flying: 1
    }
  },
  {
    name: 'Ork',
    weapon: 'Kurzbogen(S-1)/morgenstern(S1)/Kurzschwert(S-1)/Einhand-Axt(S0)',
    info: '',
    fought: true,
    sg: 3.3,
    attr: {
      tp: 12,
      ini: 0,
      kb: 3,
      rb: 7,
      s: 0
    }
  },
  {
    name: 'Ork Schamane',
    weapon: 'Stab',
    info: 'Rang 3 Schamenmagie Heilen, Trance, Heiliger Bezirk',
    fought: true,
    sg: 5.8,
    attr: {
      tp: 20,
      ini: 0,
      kb: 4,
      rb: 6,
      s: 0,
      mp: 20,
      spelll: 3
    }
  },
  {
    name: 'Einfacher Schwertkämpfer',
    weapon: 'Kurzschwert',
    fought: true,
    sg: 2.7,
    attr: {
      tp: 12,
      ini: 0,
      kb: 3,
      rb: 6,
      s: -1
    }
  },
  {
    name: 'Einfacher Armbrustschütze',
    weapon: 'Armbrust',
    fought: true,
    sg: 3.1,
    attr: {
      tp: 10,
      ini: 0,
      kb: 3,
      rb: 6,
      s: 2
    }
  },
  {
    name: 'Paladinanführer',
    weapon: 'Langschwert',
    fought: true,
    sg: 6.8,
    attr: {
      tp: 50,
      ini: 2,
      kb: 5,
      rb: 8,
      s: 2
    }
  },
  {
    name: 'Paladin (Nahkampf)',
    weapon: 'Kurzschwert',
    fought: true,
    sg: 5.1,
    attr: {
      tp: 36,
      ini: 2,
      kb: 4,
      rb: 7,
      s: 1
    }
  },
  {
    name: 'Paladin (Fernkampf)',
    weapon: 'Armbrust',
    fought: true,
    sg: 4.9,
    attr: {
      tp: 36,
      ini: 2,
      kb: 4,
      rb: 6,
      s: 2
    }
  },
  {
    name: 'Zauberlehrling',
    fought: true,
    sg: 4.1,
    info: 'Rang 4 Weiße Magie, Rang 4 Schwarze Magie',
    attr: {
      tp: 14,
      ini: -1,
      kb: 0,
      rb: 5,
      s: -2,
      mp: 20,
      spelll: 8
    }
  },
  {
    name: 'Schwarzer Goblin (beschworen)',
    weapon: 'Dolch',
    fought: true,
    sg: 2,
    attr: {
      tp: 8,
      ini: 0,
      kb: 2,
      rb: 6,
      s: -2
    }
  },
  {
    name: 'Schwarzbär (klein)',
    fought: false,
    sg: 3.3,
    attr: {
      tp: 20,
      ini: 1,
      kb: 3,
      rb: 6,
      s: 0
    }
  },
  {
    name: 'Troll',
    fought: false,
    sg: 6.1,
    attr: {
      tp: 30,
      ini: 0,
      kb: 8,
      rb: 7,
      s: 0,
      reg: 1
    }
  },
  {
    name: 'Arabischer Wolf',
    fought: false,
    sg: 3,
    attr: {
      tp: 10,
      ini: 1,
      kb: 3,
      rb: 6,
      s: 1
    }
  },
  {
    name: 'Geist',
    fought: true,
    sg: 4.9,
    attr: {
      tp: 20,
      ini: 0,
      kb: 2,
      rb: 8,
      s: -1,
      bodiless: true
    }
  },
  {
    name: 'Rabe',
    fought: false,
    sg: 2.4,
    attr: {
      tp: 6,
      ini: 1,
      kb: 2,
      rb: 4,
      s: 0,
      flying: true
    }
  },
  {
    name: 'Wolf (allein)',
    fought: false,
    sg: 3.5,
    attr: {
      tp: 12,
      ini: 2,
      kb: 4,
      rb: 6,
      s: 1
    }
  },
  {
    name: 'Bär',
    fought: true,
    sg: 4.8,
    attr: {
      tp: 25,
      ini: 1,
      kb: 6,
      rb: 6,
      s: 1
    }
  },
  {
    name: 'Berglöwe',
    fought: false,
    sg: 5,
    attr: {
      tp: 15,
      ini: 2,
      kb: 8,
      rb: 6,
      s: 1
    }
  },
  {
    name: 'Harpyie',
    fought: false,
    sg: 9.8,
    attr: {
      tp: 30,
      ini: 2,
      kb: 10,
      rb: 7,
      s: 1,
      mp: 12,
      spelll: 3,
      flying: true,
      scream: true
    }
  },
  {
    name: 'Goblin',
    fought: true,
    sg: 1.9,
    attr: {
      tp: 4,
      ini: 0,
      kb: 2,
      rb: 6,
      s: -2
    }
  },
]

export const alias = [{
    short: 'tp',
    long: 'Trefferpunkte',
    mod: 3,
    emoji: '❤️',
    help: 'Trefferpunkte der Kreatur'
  },
  {
    short: 'ini',
    long: 'Initiative',
    mod: 5,
    help: 'Der Initiative-Wert inklusive aller Bonusse und Malusse (insbesondere die durch Waffen). Maximaler negative Initiative -3.'
  },
  {
    short: 'kb',
    long: 'Kampfbonus',
    mod: 20,
    help: 'Der Kampfbonus inklusive aller Bonusse und Malusse. Mehrfachangriffe werden aufsummiert.'
  },
  {
    short: 'rb',
    long: 'Rüstungsbonus',
    mod: [10, 20, 30, 40, 50, 75, 100, 125],
    emoji: '🛡️',
    help: 'Der Rüstungswert der Kreatur. Dieser kann auch durch Magie oder durch seine Art/Konstruktion zustande kommen.'
  },
  {
    short: 's',
    long: 'Schaden',
    mod: 10,
    emoji: '🗡️',
    help: 'Der Schadensbonus inklusive aller Bonusse und Malusse (insbesondere die durch Waffen). Maximaler negativer Schaden -3.'
  },
  {
    short: 'mp',
    long: 'Magiepunkte',
    mod: 5,
    help: 'Magiepunkte, die der Kreatur zur Verfügung stehen'
  },
  {
    short: 'spelll',
    long: 'Spruchliste',
    mod: 10,
    help: 'Diese sind mit Rang angegeben'
  },
  {
    short: 'targetedspells',
    long: 'Gezielte Sprüche',
    mod: 20,
    help: 'Auch die Kreaturen brauchen für Gezielte Sprüche ein Manöver - analog zum Kampf.'
  },
  {
    short: 'magres',
    long: 'Zauberresistenz',
    mod: [15, 30, 45, 60, 75, 95, 115, 135, 155, 175, 195],
    help: 'Wenn eine Kreatur gegen Zauber resistent ist, dann erhält sie einen Bonus in der angegebenen Höhe auf ihre Rüstung gegen gezielte Zauber.'
  },
  {
    short: 'reg',
    long: 'Regeneration',
    mod: [15, 30, 45, 60, 75, 95, 115, 135, 155, 175, 195],
    help: 'Die Fähigkeit einer Kreatur, Trefferpunkte von Natur aus wiederzuerhalten. Üblicherweise gewinnt die Kreatur so viele TP pro Runde wieder, wie dort als Zahl angegeben sind. Beispielsweise würde Regeneration 2 bedeuten, dass die Kreatur 2TP pro Runde regeneriert.'
  },
  {
    short: 'reload',
    long: 'Nachladen',
    mod: [30, 60, 90, 120, 150, 200, 250, 300, 350, 400, 500],
    help: 'Diese besondere Eigenschaft regeneriert Magiepunkte pro Runde.'
  },
  {
    short: 'elemenatt',
    long: 'Elementare Angriffe',
    mod: [15, 30, 45, 60, 75, 95, 115, 135, 155, 175, 195],
    help: 'Eine Kreatur, die über diese Besondere Eigenschaft verfügt, richtet zusätzlich zum normalen Schaden - der ebenfalls dem Element schon entspringt, noch einen Schaden in Höhe des hier angegeben Wertes an. Elementarangriffe können Sekundärschäden verursachen. Ein Feuerschaden kann beispielsweise auch Entzünden.'
  },
  {
    short: 'fear',
    long: 'Angst',
    mod: 20,
    help: 'Die Kreatur löst Angst aus, die mit Einflussnahme oder einem Intelligenzmanöver überwunden werden kann. Der SG ist der jeweiligen Beschreibung zu entnehmen. Ansonsten flieht der Verängstigte und wird einen Würfelwurf in Stunden nicht zurückkehren können.'
  },
  {
    short: 'venom',
    long: 'Gift',
    mod: [30, 60, 90, 120, 150, 210, 270, 330, 390, 450, 650],
    help: 'Der Biss einiger Tiere oder der Verzehr bestimmter Pflanzen kann giftig sein.'
  },
  {
    short: 'flying',
    long: 'Fliegend',
    mod: 40,
    bool: true,
    help: 'Eine fliegende Kreatur kann sich über Hindernisse hinwegbewegen usw. Für sie gelten ansonsten die gleichen Regeln zur Bewegung (analog), Deckung und Entfernung.'
  },
  {
    short: 'bodiless',
    long: 'Körperlos',
    mod: 60,
    bool: true,
    help: 'Körperlose Kreaturen können nur durch Magie (Artefakte, Zauber oder Wunder) wirkungsvoll bekämpft werden. Alle anderen Einwirkungen richten nur den halben Schaden an.'
  },
  {
    short: 'scream',
    long: 'Schrei',
    mod: 40,
    bool: true,
    help: 'Der Schrei kann ein Opfer eine Runde lang lähmen, in der Zeit ist es handlungsunfähig (keine Manöver, Bewegungen, Angriffe oder Zauber). Einflussnahme oder Intelligenz-Manöver MS 12 können dies vermeiden.'
  },
  {
    short: 'pack',
    long: 'Jagdrudel',
    mod: 60,
    bool: true,
    help: 'Diese Kreaturen sind meistens im Rudel unterwegs und erhalten dann ein +1 auf die Initative und ein +1 auf den Kampfbonus.'
  },
  {
    short: 'reborn',
    long: 'Wiederauferstehung',
    mod: 120,
    bool: true,
    help: 'Die Kreatur wird beliebig oft wieder innerhalb eines Tages auferstehen, sofern sie nicht tatsächlich "zerstört" wird. Die tastächlich Zerstörung kann eine spezielle Handlung erfordern, wie beispielsweise das (restlose) Verbrennen des leblosen Körpers.'
  },
  {
    short: 'doesnotdie',
    long: 'Stirbt nicht',
    mod: 240,
    bool: true,
    help: 'Die Kreatur wird beliebig oft wieder innerhalb 1w10 Runden auferstehen, sofern sie nicht tatsächlich "zerstört" wird. Die tastächlich Zerstörung kann eine spezielle Handlung erfordern, wie beispielsweise das (restlose) Verbrennen des leblosen Körpers.'
  },
  {
    short: 'yielding',
    long: 'Nachgiebig',
    mod: 30,
    bool: true,
    help: 'Stumpfe Waffen und Einwirkungen verursachen nur halben Schaden.'
  },
  {
    short: 'spread',
    long: 'Ausbreitung',
    mod: 360,
    bool: true,
    help: 'Die Kreatur wird, wenn sie die Hälfte ihrer Trefferpunkte verloren hat, ihre Brut abwerfen. Diese besteht aus sechs kleineren Kreaturen der Spezies: TP 6, INI +1, KB +2, Schaden -1, Rüstung 1. Die Kreatur wird erneut acht kleinere Kreaturen abwerfen, wenn sie kurz vor dem Tod ist.'
  },
  {
    short: 'sensitive',
    long: 'Verletzlich',
    mod: -60,
    bool: true,
    help: 'Die Kreatur ist gegenüber einer bestimmten Sache verletzlich und erhält bei Einwirkungen mit der bestimmten Sache doppelten Schaden. (Beispielsweise Wasser bei einem Feuerwesen.)'
  },
  {
    short: 'vulnerable',
    long: 'Verwundbar',
    mod: -180,
    bool: true,
    help: 'Die Kreatur ist gegenüber einer bestimmten Sache extrem empfindlich und erhält bei Einwirkungen mit der bestimmten Sache vierfachen Schaden. (Beispielsweise Wasser bei einem Feuerwesen.)'
  }
]