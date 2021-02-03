<template>
  <nav>
   <div class="add-menu"><button class="add-bn"><i class="fas fa-plus"></i> Add</button>
   <ul class="nav">
    <li><img :src="require('@/assets/images/img-icon.png')" alt=""/>Image</li>    
    <li class="submenu"><img :src="require('@/assets/images/text-icon.png')" alt=""/> Text    
    <ul>
    <li @click="$emit('selectMenu','SIMPLE_TEXT')">Simple Text</li>
    <li @click="$emit('selectMenu','TEXT_TICKER')">Text Ticker</li>
    </ul>
    </li>
    </ul>
    </div>    
  </nav>
</template>

<script>
// import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  name: "MultiLevelMenu",
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
nav {
  display: block;
  text-align: center;
  position: relative;
}
nav ul {
    margin: 0;
    padding: 10px 0;
    list-style: none;
    position: absolute;
    top: 38px;
    left: 0;
    width: 156px;
    background: #1a1b1e;
    z-index: 999;
    color: #fff;
    display:none;
}

nav ul li{
    margin: 1px 0px;
    padding: 12px 12px;
    list-style: none;
    display: block;
    text-align: left;
    background: #1a1b1e;
    cursor:pointer;
    position:relative;
    font-weight:normal;
        font-size: 13px;
}
nav ul li > img{
  margin:1px 10px 0 0;
  float:left;
}

nav ul li:hover{
  background:#212224;
}
nav ul li:hover ul{
 display:block;
}
nav ul li ul{
    position: absolute;
    top: 0;
    left: 156px;
    display:none;
}

.add-menu:hover .nav{
  display:block;
}

nav ul .submenu{
position:relative;
}
nav ul .submenu:after{
    content: "";
    position: absolute;
    right: 14px;
    top: 18px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 2px;
}

</style>





