<template>
  <div class="content-section output" id="contentSection">
    <div id="widget-area" class="widgets-inner output">
      <Widget
        v-for="element in previewWidgets"
        :widgetObj="element"
        :key="element.id"
        @activeWidget="onActiveWidget"
        @updateScene="sendSceneData"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Widget from "@/components/WidgetWrapper";
import Helper from "@/common/helper.js";
import { WebSocket } from "@/WebSocket/webSocket.js";

export default {
  components: {
    Widget,
  },
  data: function() {
    return {
      previewWidgets: [],
      activeWidgetObj: null,
      sceneId: "",
      temppreviewWidgets:[],
      resizeTimeout:0,
    };
  },
  computed: {
    ...mapState({
      previewWidget: (state) => state.WidgetModule.getWidgetResponse,
    }),
  },
  watch: {
    previewWidget() {
      if (
        this.previewWidget.fetchingSuccess &&
        this.previewWidget.widgetResponse
      ) {
        this.previewWidgets = this.previewWidget.widgetResponse.scene.preview.widgets;
        this.temppreviewWidgets = this.previewWidget.widgetResponse.scene.preview.widgets;
        this.previewWidgets.forEach((element) => {
          element.isActve = false;
        });
      }
    },
  },
  created() {
    this.sceneId = Helper.getQueryString("sceneId");
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.$store.dispatch("WidgetModule/actionGetPreviewWidget", this.sceneId);
    this.initWebSocket();
    if (this.previewWidgets.length !== 0) {
      this.updateWidgetData("INTERVAL");
    }
  },
  destroyed() {
    WebSocket.close();
  },
  methods: {
    onResize(){
      const dt = new Date();
      this.previewWidgets=[];
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(()=>{
        this.previewWidgets = this.temppreviewWidgets.map((_obj)=>{
          _obj.key = dt.getTime();
          return _obj;
        });
      },100);
    },

    initWebSocket() {
      WebSocket.initWebsocketClient(this.sceneId, (_eventName, _message) => {
         console.log(_eventName, _message);
        if (_eventName === "ON_MESSAGE") {
            if(_message.scene.action !== "preview"){
              let widgets = _message.scene.preview.widgets;
              let widgetsNum = widgets.length;
              for (let i = 0; i < widgetsNum; ++i) {
                if (widgets[i].name === 'timer' && widgets[i].isShown && widgets[i].properties.action !== null) {
                  widgets[i].properties.content = this.previewWidgets[i].properties.content;
                }
              }
              this.previewWidgets = _message.scene.preview.widgets;
              this.temppreviewWidgets = _message.scene.preview.widgets;
            }
        }
      });
    },
    
    onActiveWidget(_obj) {
      this.activeWidgetObj = _obj;
      this.previewWidgets.forEach((element) => {
        element.isActve = false;
      });
      _obj.isActve = true;
      WebSocket.sendMessage(this.getSceneObject());
    },
    updateWidgetData() {
      const sceneObj = this.getSceneObject();
      this.$store.dispatch("WidgetModule/actionUpdateWidget", sceneObj);
    },
    getSceneObject() {
      return {
        scene: {
          action: "preview",
          sceneId: this.sceneId,
          preview: {
            widgets: this.previewWidgets,
          },
          program: {
            widgets: this.previewWidgets,
          },
        },
      };
    },
    sendSceneData() {
      WebSocket.sendMessage(this.getSceneObject());
      if (this.previewWidgets.length !== 0) {
        this.updateWidgetData("INTERVAL");
      }
    },
  },
};
</script>
<style scoped>
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
}
#fill {
  width: 600px;
  height: 338px;
  position: relative;
}
</style>
