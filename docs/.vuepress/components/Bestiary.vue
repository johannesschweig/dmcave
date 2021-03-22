<template>
  <div>
    <h1>Bestiarium</h1>
    <div id='split'>
      <div id='left'>
        <ul>
          <li
            v-for='c in myCreatures'
            :key='c.name'
            :class='{ "preview": c.name === preview }'
            @click='preview = c.name'>
            {{ c.name }} {{ c.sg }}
          </li>
        </ul>
      </div>
      <div id='right'>
        <!-- Heading -->
        <div class='heading'>
          <span class='name'>{{ previewCreature.name }}</span>
          <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text :x="Math.round(previewCreature.sg) > 9 ? 4 : 12" y="26">
                {{ Math.round(previewCreature.sg) }}
              </text>
            <path d="M1 4.48117C13.3076 -0.487465 26.2631 0.175561 37 4.49115V21.494C36.1789 27.4535 30.5658 37.2902 19 39.5157C7.43425 37.2902 1.82114 27.4536 1 21.494V4.48117Z" stroke="#9B5E2A" stroke-width="2"/>
          </svg>
        </div>
        <!-- Main attributes (red banner) -->
        <div class='main-attr'>
          <div
            class='attr'
            v-for='key in Object.keys(previewCreature.attr).slice(0, 5)'
            :key='previewCreature.name+key'>
            <div>{{ previewCreature.attr[key]}}</div>
            <div>{{ key.toUpperCase() }}</div>
          </div>
        </div>
        <!-- Tags -->
        <div class='tags'>
          <p
            v-for='key in Object.keys(previewCreature.attr).slice(5)'
            class='tag'
            :key='previewCreature.name+key'>
            {{ key }}: {{ previewCreature.attr[key]}}
          </p>
        </div>
        <!-- Info -->
        <div class='info'><p>{{ previewCreature.weapon }}, {{previewCreature.info}}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import { myCreatures, alias} from '../../utils/bestiary'

export default {
  data() {
    return {
      myCreatures,
      preview: myCreatures[0].name
    }
  },
  computed: {
    previewCreature() {
      return this.myCreatures.filter(c => c.name === this.preview)[0]
    }
  }
  
}
</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/bookman-old-style');

li {
  list-style: none;
  padding-left: 8px;
}

li:hover {
  color: #3eaf7c;
  cursor: pointer;
}

li.preview {
  border-left: 2px solid #3eaf7c;
  font-weight: bold;
  color: #3eaf7c;
}

#left {
  display: inline-block;
  margin-right: 48px;
}

#right {
  display: inline-block;
  min-width: 300px;
  min-height: 400px;
  vertical-align: top;
  background: #FCF6EA;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  padding: 16px;
}

#right p {
  max-width: 300px;
}

.heading {
  margin-bottom: 16px;
}

.heading svg,
.sg {
  float: right;
}

svg text {
  fill: #4D1301;
}

svg text,
.name,
.sg {
  font-size: 24px;
  font-family: 'Bookman Old Style', sans-serif;
}

.name {
  color: #69220C;
  text-decoration: underline;
  text-decoration-color: #9B5E2A;
  margin-right: 24px;
}

.sg {
  color: #4D1301;
}

.main-attr {
  background: #F8DBCE;
  margin: 0 -16px;
  padding: 16px;
  color: #860900;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
}

.attr > *:first-child {
  font-size: 18px;
}

.attr > *:nth-child(2) {
  font-size: 12px;
  text-align: center;
}

.tags {
  margin: 16px 0;
  font-size: 14px;
}

.tag {
  border: 1px solid #A26C3D;
  border-radius: 10px;
  padding: 0 8px;
  line-height: 24px;
  display: inline-block;
  margin-right: 12px;
}

.info {
  font-style: italic;
  opacity: .7;
  font-size: 12px;
}
</style>