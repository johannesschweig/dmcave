<template>
  <div>
    <h1>Bestiarium</h1>
    <div class='split'>
      <ul>
        <li
          v-for='c in myCreatures'
          :key='c.name'
          :class='{ "preview": c.name === preview }'
          @click='preview = c.name'>
          {{ c.name }} {{ c.sg }}
        </li>
      </ul>
      <div class='card'>
        <div class='heading'>{{ previewCreature.name }}</div>
        <div
          v-for='key in Object.keys(previewCreature.attr)'
          :key='previewCreature.name+key'>
          {{ key }}: {{ previewCreature.attr[key]}}
        </div>
        <i>{{previewCreature.info}}</i>
        <div>SG: {{previewCreature.sg}}</div>
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

.split {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.card {
  background-color: #fdf1dc;
  padding: 12px;
}

.heading {
  font-size: 24px;
  font-family: 'Bookman Old Style', sans-serif;
  color: #5F2E1F;
}


</style>