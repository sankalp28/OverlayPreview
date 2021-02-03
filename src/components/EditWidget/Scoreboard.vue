<template>
  <div class='scoreboard'>
    
    <div   :class="
            widgetData.properties.styleType ==='Light' ?  'scoreBoardwidgetLight' : 'scoreBoardwidgetDark'
          " :style="{width:widgetData.properties.widgetWidth+'vw'}">
          
		<div class="teamScoreBoard" :style="{height:widgetData.properties.widgetHeight+'vh'}">
			<div class="teamName" :style="{fontSize:widgetData.properties.fontSize+'px'}"><font id="teamName1" >{{widgetData.properties.player1Name}}</font></div>
			<div class="teamScore" :style="{fontSize:widgetData.properties.fontSize+'px'}"><font>{{widgetData.properties.score1}}</font></div>
		</div>
		<div class="teamScoreBoard" :style="{height:widgetData.properties.widgetHeight+'vh'}">
			<div class="teamName" :style="{fontSize:widgetData.properties.fontSize+'px'}"><font id="teamName2" >{{widgetData.properties.player2Name}}</font></div>
			<div class="teamScore" :style="{fontSize:widgetData.properties.fontSize+'px'}"><font>{{widgetData.properties.score2}}</font></div>
		</div>
		<div class="gameClock"  v-if="widgetData.properties.isGameClockEnabled">
			<font>{{widgetData.properties.content}}</font>
		</div>
		
    </div>



  </div>    
    
</template>

<script>


export default {
  name: "ScoreBoard",
  props: {
    widgetData: Object,
	  
  },
  
  
  
};
</script>
