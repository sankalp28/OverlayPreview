<template>
    <vue-draggable-resizable
      w="auto" h="auto"
      :x="x"
      :y="y"
      :style="dragResizeStyle"
      @dragging="onDrag"
      @resizing="onResize"
      @deactivated="onDeactivated"
      @activated="onActivated(widgetObj)"
      class-name="drg"
      :active="widgetObj.isActve"
      v-if='widgetObj.isShown'
    >
      <img class="simple-text" v-if="widgetObj.name==='Image' && widgetObj.isShown" :src="require('@/assets/logo.png')" alt="Girl in a jacket" :width="width" :height="height">
      <div class="simple-text" :style="textStyle" v-else-if="widgetObj.name ==='simpleText' && widgetObj.isShown">{{widgetObj.properties.content}}</div>
      <div class="ticker-text" :style="tickerStyle" v-if="widgetObj.name==='textTicker' && widgetObj.isShown">{{widgetObj.properties.content}}</div>
    </vue-draggable-resizable>
</template>
<script>
export default {
  name:'Widget',
  props:{
    widgetObj: Object
  },
  data: function () {
    return {
      width: 150,
      height: 150,
      x: 0,
      y: 0,
      percX:0,
      percY:0,
      previewBoxSize:{ width:0,height:0},
    }
  },
  created(){
    console.log("created", this.widgetObj.properties);
    this.width = this.widgetObj.properties.width;
    this.height = this.widgetObj.properties.height;
  },
  watch: {
      widgetObj() {
        this.width = this.widgetObj.properties.width;
        this.height = this.widgetObj.properties.height;

        const widgetBoundArea = document.getElementById("widget-area").getBoundingClientRect();
        this.previewBoxSize.width = widgetBoundArea.width;
        this.previewBoxSize.height = widgetBoundArea.height;
        this.x=(this.previewBoxSize.width * this.widgetObj.properties.xCoordinate)/100;
        this.y=(this.previewBoxSize.height * this.widgetObj.properties.yCoordinate)/100;
      }
  },
  computed:{
    dragResizeStyle(){
      console.log("dragResizeStyle");
      return {
            width: this.width+'%',
            height:this.height+'%',
        }
    },
    textStyle(){
      console.log("textStyle");
      const { textShadows,textBorder } = this.widgetObj.properties;
      const txtShdwArr = textShadows.split(" ");
      const textShadowValue = `${txtShdwArr[0]}px ${txtShdwArr[1]}px ${txtShdwArr[2]}px ${txtShdwArr[3]}`;
      const txtBorderArr = textBorder.split(" ");
      const textBorderValue = `${txtBorderArr[0]}px solid ${txtBorderArr[2]}`;
      return {
            fontSize: `${this.widgetObj.properties.fontSize}px`,
            color: this.widgetObj.properties.fontColor ? this.widgetObj.properties.fontColor : 'transparent',
            backgroundColor:this.widgetObj.properties.paddingFill,
            padding: this.widgetObj.properties.paddingValue+'px',
            fontFamily: this.widgetObj.properties.fontType,
            fontWeight: this.widgetObj.properties.fontStyle,
            textShadow: this.widgetObj.isTextShadowEnabled ? textShadowValue : null,
            border: this.widgetObj.isTextBorderEnabled ? textBorderValue: null,
        }
    },
    tickerStyle(){
      console.log("tickerStyle");
            const { textShadows,textBorder } = this.widgetObj.properties;
            const txtShdwArr = textShadows.split(" ");
            const textShadowValue = `${txtShdwArr[0]}px ${txtShdwArr[1]}px ${txtShdwArr[2]}px ${txtShdwArr[3]}`;
            const txtBorderArr = textBorder.split(" ");
            const textBorderValue = `${txtBorderArr[0]}px solid ${txtBorderArr[2]}`;
            return {
            fontSize: `${this.widgetObj.properties.fontSize}px`,
            color: this.widgetObj.properties.fontColor ? this.widgetObj.properties.fontColor : 'transparent',
            backgroundColor: this.widgetObj.properties.paddingFill,
            padding: this.widgetObj.properties.paddingValue+'px',
            fontFamily: this.widgetObj.properties.fontType,
            fontWeight: this.widgetObj.properties.fontStyle,
            textShadow: this.widgetObj.isTextShadowEnabled ? textShadowValue : null,
            border: this.widgetObj.isTextBorderEnabled ? textBorderValue: null,
        }
    }
  },
  mounted(){
    console.log("mounted");
    const widgetBoundArea = document.getElementById("widget-area").getBoundingClientRect();
    this.previewBoxSize.width = widgetBoundArea.width;
    this.previewBoxSize.height = widgetBoundArea.height;
    this.x=(this.previewBoxSize.width * this.widgetObj.properties.xCoordinate)/100;
    this.y=(this.previewBoxSize.height * this.widgetObj.properties.yCoordinate)/100;
  },
  methods: {
    onResize: function (x, y, width, height) {
      console.log("onResize");
      console.log("x-->", x, ",  this.x --> ", this.x);
      console.log("y-->", y, ",  this.y --> ", this.y);
      console.log("width -->", width, ", this.width --> ", this.width);
      console.log("height --> ", height, ", this.height --> ", this.height);
      this.x = x
      this.y = y
      this.width = (width/this.previewBoxSize.width)*100;
      this.height = (height/this.previewBoxSize.height)*100;
      this.widgetObj.properties.width=this.width;
      this.widgetObj.properties.height=this.height;
      this.percX = (x/this.previewBoxSize.width)*100;
      this.percY = (y/this.previewBoxSize.height)*100;
      this.widgetObj.properties.xCoordinate = this.percX;
      this.widgetObj.properties.yCoordinate = this.percY;
    },
    onDrag: function (x, y) {
      console.log("onDrag");
      console.log("x --> ", x, ",  this.x --> ", this.x);
      console.log("y --> ", y, ",  this.y --> ", this.y);
      this.x = x
      this.y = y
      this.percX = (x/this.previewBoxSize.width)*100;
      this.percY = (y/this.previewBoxSize.height)*100;
      this.widgetObj.properties.xCoordinate=this.percX;
      this.widgetObj.properties.yCoordinate=this.percY;
    },
    onActivated(_elementObj){
      console.log("onActivated");
       this.$emit('activeWidget',_elementObj);
    },
    onDeactivated(){
    // this.$emit('activeWidget',null);
    },
  }
}
</script>

<style scoped>
 .drg{
   cursor: move;
   position: absolute;
   display: inline-block;
 }
.ticker-text{
	background: white;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 6px;
    text-align: center;
    font-size: 13px;
    color: #000;
    vertical-align: middle;
    width:100%!important;
    height:100%!important;
    display: flex;
    align-items: center;
    justify-content: center;
}
  .simple-text{
    white-space: pre-wrap;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    width:100%!important;
    height:100%!important;
    align-items: center;
    
  }
</style>
