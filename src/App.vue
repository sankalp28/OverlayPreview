<template>
  <div style="height: 700px; width: 100%; border: 1px solid red; position: relative;">
    <vue-draggable-resizable :w="500" :h="200" @dragging="onDrag" @resizing="onResize" :parent="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vue-draggable-resizable>

    
    <vue-draggable-resizable :w="300" :h="200" @dragging="onDrag" @resizing="onResize" :parent="true">
      <img :src="require('@/assets/logo.png')" alt="Girl in a jacket" :width="width" :height="height">
    </vue-draggable-resizable>
  </div>
</template>

<script>
// import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>
<style scoped>
.drg {
  cursor: move;
  position: absolute;
  display: inline-block;
}
.ticker-text {
    white-space: pre-wrap;
  background: white;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px;
  text-align: center;
  font-size: 13px;
  color: #000;
  vertical-align: middle;
  width: 100% !important;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.ticker-text marquee{
    height: 100%;
    display: flex;
    align-items: center;
}


.simple-text {
  white-space: pre-wrap;
  display: flex;
  justify-content: center;
  width: 100% !important;
  height: 100% !important;
  align-items: center;
}
</style>