<template>
    <div>
      <img v-if="widgetObj.name==='Image'" :src="require('@/assets/logo.png')" alt="Girl in a jacket" :width="width" :height="height">
      <span  :style="textStyle" v-else-if="widgetObj.name==='simpleText'">{{widgetObj.properties.content}}</span>
      <div class="ticker-text" :style="tickerStyle" v-if="widgetObj.name==='textTicker'">{{widgetObj.properties.content}}</div>
    </div>
</template>
<!-- X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }} -->
<script>
export default {
  name:'OutputWidgets',
  props:{
    widgetObj: Object
  },
  data: function () {
    return {
      width: 150,
      height: 150,
      x: 0,
      y: 0
    }
  },
  created(){
    this.width=this.widgetObj.properties.width;
    this.height=this.widgetObj.properties.height;
    this.x=this.widgetObj.properties.x;
    this.y=this.widgetObj.properties.y;
  },
  computed:{
    textStyle(){
      // const fontS = (this.width*15)/100;
      return {
            fontSize: `${this.widgetObj.properties.fontSize}px`,
            color: this.widgetObj.properties.textColor,
            backgroundColor:this.widgetObj.properties.backgroundColor,
            padding: this.widgetObj.properties.padding+'px',
            fontFamily: this.widgetObj.properties.fontFamily,
            fontWeight: this.widgetObj.properties.fontWeight,
        }
    },
    tickerStyle(){
            return {
            width: this.width,
            height:this.height,
            fontSize: `${this.widgetObj.properties.fontSize}px`,
            color: this.widgetObj.properties.textColor,
            backgroundColor:this.widgetObj.properties.backgroundColor,
            padding: this.widgetObj.properties.padding+'px',
            fontFamily: this.widgetObj.properties.fontFamily,
            fontWeight: this.widgetObj.properties.fontWeight,
        }
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.widgetObj.properties.width=width;
      this.widgetObj.properties.height=height;
      this.widgetObj.properties.x=x;
      this.widgetObj.properties.y=y;
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
      this.widgetObj.properties.x=x;
      this.widgetObj.properties.y=y;
      // console.log('X,Y',x+' , '+y)
    },
    onActivated(_elementObj){
       this.$emit('activeWidget',_elementObj);
        // console.log("ON ACTIVATE",);
    },
    onDeactivated(){
    //   this.$emit('activeWidget',null);
    }
  }
}
</script>
<style scoped>
 .drg{
   cursor: move;
   position: absolute;
   width: 100%;
   /* display: inline-table */
 }
.ticker-text{
	background: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 6px;
    text-align: center;
    font-size: 13px;
    color: #000;
}
</style>