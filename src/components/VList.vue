<template>
  <div class="v-list-container" @scroll="scrollEvent" ref="list" :style="{height:`${height}`}">
    <div class="v-list-virtual" :style="{height:`${listHeight}px`}"></div>
    <div class="v-list" :style="transLateObj">
      <template>
        <div class="v-list-item-container" :style="{height:`${itemHeight}px`}" v-for="(item,i) in showData" :key="i">
        <div class="v-list-item" v-for="(_item,index) in item" :key="index">
          <slot :item="_item"></slot>
        </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "VList",
  data() {
    return {
      //可视区域高度
      screenHeight: 0,
      //偏移量
      startOffset: 0,
      //起始索引
      start: 0,
      //结束索引
      end: null,
    }
  },
  mounted() {
    this.screenHeight = this.$el.clientHeight
    this.start = 0
    this.end = this.start + this.showItemNum
  },
  props: {
    // 列数
    column: {
      type: Number,
      default: 1
    },
    // 渲染数据
    listData: {
      type: Array,
      required:true,
    },
    // 列表项高度
    itemHeight: {
      type: Number,
      default: 100
    },
    height:{
      type:String,
      default:'100%'
    }
  },
  methods: {
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop
      //此时的开始索引 向下取整
      this.start = Math.floor(scrollTop / this.itemHeight)
      //此时的结束索引
      this.end = this.start + this.showItemNum
      //此时的偏移量
      // TODO: 难理解
      this.startOffset = scrollTop - (scrollTop % this.itemHeight)
    }
  },
  computed: {
    _listData() {
      let newData=[]
      for(let i =0;i<this.listData.length;i+=this.column){
        newData.push(this.listData.slice(i,i+this.column))
      }
      return newData
    },
    // 列表高度
    listHeight() {
      return this._listData.length * this.itemHeight
    },
    // 真实显示的列表项数
    showItemNum() {
      // 可视区域高度 / 列表项高度 向上取整
      return Math.ceil(this.screenHeight / this.itemHeight)
    },
    // 偏移量style对象
    transLateObj() {
      return {translate: `0 ${this.startOffset}px`}
    },
    //获取真实显示列表数据
    showData() {
      return this._listData.slice(this.start, Math.min(this.end, this.listData.length))
    }
  }
}
</script>
<style scoped>
.v-list-container {
  overflow-y: auto;
  position: relative;
  }

.v-list-virtual {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  }

.v-list {
  display: flex;
  flex-direction: column;
  }
.v-list-item-container{
  display: flex;
  align-items: center;
  justify-content: center;
  }

.v-list-item {
  flex:1
  }
</style>