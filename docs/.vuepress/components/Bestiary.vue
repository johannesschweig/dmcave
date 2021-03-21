<template>
  <div id='container'>
    <div
      v-for='c in myCreatures'
      :key='c.name'
      class='card'>
      <div class='heading'>{{ c.name }}</div>
      <div
        v-for='key in Object.keys(c.attr)'
        :key='c.name+key'>
        {{ key }}: {{ c.attr[key]}}
      </div>
      <i>{{c.info}}</i>
      <div>SG: {{c.sg}}</div>
    </div>
  </div>
</template>

<script>
import { myCreatures, alias} from '../../utils/bestiary'

export default {
  data() {
    return {
      myCreatures
    }
  }
  
}
</script>

<style scoped>

#container {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
}

.card {
  border-radius: 2px;
  /* box-shadow: 1px 2px 8px #ccc; */
  border: 1px solid hsl(0, 0%, 90%);
  padding: 12px;
}

.heading {
  font-size: 24px;

}

@media only screen and (min-width: 900px) {
  #container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1600px) {
  #container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (min-width: 1900px) {
  #container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>