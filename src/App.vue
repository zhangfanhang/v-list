<template>
  <div id="app">
    <v-list :list-data="listData" :column="4" v-slot="slotProps" :item-height="30" height="500px">
      <div style="display: flex;justify-content: center;align-items: center;background-color: red;margin-right: 10px;">{{slotProps.item}}</div>
    </v-list>
  </div>
</template>

<script>
import VList from "./components/VList";
export default {
  name: "App",
  data() {
    return {
      listData:[],
      first:''
    };
  },
  created() {
     this.first=Date.now()
  },
  mounted() {
    for(let i = 0 ;i<10000;i++){
      this.listData.push(i)
    }
  },
  components: {
    VList
  }
};
</script>

<style>
html{
  height: 100%;
  }
body{
  height: 100%;
  margin:0;
  }
#app{
  height:100%;
  }
</style>
