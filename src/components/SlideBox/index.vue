<template>
    <div :class="getClass(widgetObj)" @click="onSlideBoxClick(widgetObj)">
        <img :src="require('@/assets/images/transparent_image.jpg')" alt=""/>
        <span class="delete" @click="(e)=> handleDelete(e,widgetObj.id)"><i class='far fa-trash-alt'></i></span>
        <!-- <span class="delete" @click="(e)=> handleDelete(e,widgetObj.id)"><i class='far fa-edit-alt'></i></span> -->
        <span class="edit" v-if="widgetObj.isShown" @click="(e)=>handleEdit(e,widgetObj)"><i class='far fa-edit'></i></span>
        <!-- <p>Please edit text here</p> -->
      <img v-if="widgetObj.name==='Image'" :src="require('@/assets/logo.png')" alt="Girl in a jacket" :width="width" :height="height">
      <p  :style="textStyle" v-else-if="widgetObj.name==='simpleText'">{{widgetObj.properties.content}}</p>
      <div class="ticker-text" :style="{width: width}" v-if="widgetObj.name==='textTicker'">{{widgetObj.properties.content}}</div>
    </div>
</template>

<script>
// import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  name:"SlideBox",
  props:{
    widgetObj: Object
  },
  computed:{
    textStyle(){
      return {
            fontSize: `${this.widgetObj.properties.fontSize}px`,
            color: this.widgetObj.properties.fontColor,
            backgroundColor:this.widgetObj.properties.paddingFill,
            padding: this.widgetObj.properties.paddingValue+'px',
            fontFamily: this.widgetObj.properties.fontType,
            fontWeight: this.widgetObj.properties.fontStyle,
        }
    },
  },
  data: function () {
    return {
      
    }
  },
  methods: {
    getClass(obj){
      // if(obj.isActve){
      //   return "slide-edit active"
      // } else {
      //   return "slide-edit"
      // }isShown

      if(obj.isShown){
        return "slide-edit active"
      } else {
        return "slide-edit"
      }
    },
    onSlideBoxClick(obj){
      this.$emit('selectBox',obj);
    },
    handleDelete(e,_id){
      e.stopPropagation();
      
      this.$emit('deleteWidget',_id);
    },
    handleEdit(e,obj){
      e.stopPropagation();
      this.$emit('editWidget',obj);
    },
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