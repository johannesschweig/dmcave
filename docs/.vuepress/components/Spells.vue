<template>
  <div>
    <div class='tabcontainer'>
      <div
        class='tabarrow'
        @click='shiftTab(-1)'>
        ᐊ
      </div>
      <div class='tabs'>
        <div
          v-for="tab in tabs"
          :ref='tab'
          :class='["tab", { "active": activeTab === tab}]'
          @click='setTab(tab)'>
          {{ tab }}
        </div>
      </div>
      <div
        class='tabarrow'
        @click='shiftTab(1)'>
        ᐅ
      </div>
    </div>
    <div
      v-for='(spell, i) in list'
      class='spell'
      @click='visibleAdd = i'>
      <div class='spellheader'>
        <div class='spellrank'>{{ spell.rang }}</div>
        <span class='spellname'>{{ spell.spruch }}</span>
        <span>{{ getIndicatorIcons(spell.hinweise) }}</span>
        <div
          v-if='(spell.red || spell.black) && visibleAdd != i'
          class='showAdd'>+</div>
      </div>
      <div class='desc'>{{ spell.beschreibung }}</div>
      <div
        v-show='i === visibleAdd'
        class='add'>
        <div
          v-for='b in spell.black'
          class='black'>
          {{ getBlackIcons(b) }}
        </div>
        <div
          v-for='r in spell.red'
          class='red'>
          {{ getRedIcons(r) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './spells.json'

export default {
  data () {
      return {
          items: data,
          replIcons: [ ['Gezielt', '🎯'], [ 'Berührung', '✋' ], [ 'Sichtweite', '👁️' ], [ 'Hörweite', '🎵' ], ['Speziell', '🕸️'], [ ',', ''] ],
          blackIcons: [ ['Effekt,', '⚡'], ['Dauer,', '🕑'], [ 'Betroffen,', '💀'], [ 'Reichweite,', '📶'] ],
          redIcons: [ ['Verst,', '⬆️'], [ 'Erw,', '💎'] ],
          activeTab: 'Weiße Magie',
          visibleAdd: -1
      }
  },
  computed: {
    tabs() {
      return this.items.map(i => Object.keys(i)[0])
    },
    list() {
      for (let i = 0; i < this.items.length; i++) {
        if (Object.keys(this.items[i])[0] === this.activeTab) {
          return this.items[i][this.activeTab]
          break
        }
      }
    }
  },
  methods: {
    replaceArr(str, arr) {
      arr.forEach(i => {
        str = str.replace(i[0], i[1])
      })
      return str
    },
    getIndicatorIcons(str) {
      return this.replaceArr(str, this.replIcons)
    },
    getBlackIcons(str) {
      return this.replaceArr(str, this.blackIcons)
    },
    getRedIcons(str) {
      return this.replaceArr(str, this.redIcons)
    },
    setTab(tab) {
      this.activeTab = tab
    },
    shiftTab(i) {
      let pos = this.tabs.indexOf(this.activeTab)
      // don't scroll out of view
      if (pos + i >= 0 && pos + i < this.tabs.length) {
        this.activeTab = this.tabs[pos + i]
        // TODO scrollinto view
        // this.$refs[this.activeTab].scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
.legend {
  font-size: 16px;
}

.spell {
  margin-bottom: 24px;
}

.desc,
.add {
  margin-bottom: 12px;
}

.add {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
}

.black,
.red {
  display: inline-block;
  padding: 4px;
  font-size: 16px;
}

.black {
  background-color: rgba(0, 0, 0, 0.05);
  grid-column: 1 / 2;
}

.red {
  background-color: rgba(255, 0, 0, 0.05);
  color: rgb(132, 11, 11);
  grid-column: 2 / 3;
}

.spellrank,
.showAdd {
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(0, 0, 0, 0.1);
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  display: inline-block;
  color: rgba(0, 0, 0, 0.7);
}

.spellname {
  font-size: 20px;
}

.spellheader {
  margin-bottom: 18px;
}

.tabcontainer,
.tabs {
  display: inline-block;
  max-height: 56px;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
}

.tabcontainer {
  margin: 24px 0 32px 0;
  width: 100%;
  position: relative;
}

.tabs {
  max-width: calc(100% - 124px);
  margin-left: 62px;
}

.tab {
  height: 32px;
  line-height: 32px;
  font-size: 1.1em;
  display: inline-block;
  padding: 12px 24px 8px 24px;
  border-bottom: 0.25rem solid white;
}

.tabarrow {
  height: 32px;
  line-height: 32px;
  font-size: 1.1em;
  display: inline-block;
  padding: 12px 24px 8px 24px;
  border-bottom: 0.25rem solid white;
  user-select: none;
  position: absolute;
}

.tabarrow:hover,
.tabarrow:active {
  color: #3eaf7c;
  cursor: pointer;
}

.tabarrow:first-child {
  left: 0px;
}

.tabarrow:not(:first-child) {
  right: 0px;
}

.tab:hover {
  color: #3eaf7c;
  cursor: pointer;
}

.tab.active {
  border-bottom: 0.25rem solid #3eaf7c;
  color: #3eaf7c;
}

.showAdd:hover,
.showAdd:active {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>