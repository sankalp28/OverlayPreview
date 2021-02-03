<template>
  <div class='scoreboard'>
    <div   :class="
            widgetData.properties.styleType ==='Light' ?  'scoreBoardwidgetLight' : 'scoreBoardwidgetDark'
          ">
		<div class="teamScoreBoard">
			<div class="teamName"><font >{{widgetData.properties.player1Name}}</font></div>
			<div class="teamScore"><font>{{widgetData.properties.score1}}</font></div>
		</div>
		<div class="teamScoreBoard">
			<div class="teamName"><font>{{widgetData.properties.player2Name}}</font></div>
			<div class="teamScore"><font>{{widgetData.properties.score2}}</font></div>
		</div>
		<div class="gameClock"  v-if="widgetData.properties.isGameClockEnabled">
			{{widgetData.properties.content}}
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
  created(){
	  
  },
  watch: {
    widgetData() {
      
	}
  }
  
};
</script>

<style >
body {
  margin: 0;
  /*margin-top: 100px; /* simulating a header */
  font-family:Arial, Helvetica, sans-serif;
  background:#000;
}
</style>
