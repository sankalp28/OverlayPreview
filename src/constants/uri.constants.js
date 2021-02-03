// export default {
//   baseUrl: "https://ovbyyskdhe.execute-api.ap-south-1.amazonaws.com/",
//   previewWidget: "overlays/nativeoverlays/scene",
//   notifyClient: "overlays/nativeoverlays/notifyclients"
// };


// // TEST API's
//  export default {
//   socketUrl:
//     "wss://04xn23y0uc.execute-api.ap-south-1.amazonaws.com/nativeoverlaystest",
//   baseUrl: "https://3tsnmv0saf.execute-api.ap-south-1.amazonaws.com/",
//   previewWidget: "overlaystest/nativeoverlays/scene",
//   notifyClient: "overlaystest/nativeoverlays/notifyclients",
//   producerGraphics:
//     "https://producer-a-test.tvunetworks.com/newppapi/graphic/add",
//   liveHtml: "overlaystest/nativeoverlays/liveoverlayshtml",
//   previewHtml: "overlaystest/nativeoverlays/overlayshtml",
// };

// PRODUCER API's
// export default {
//   socketUrl:"wss://jzrqy3ibnl.execute-api.ap-south-1.amazonaws.com/nativeoverlays",
//   baseUrl: "https://odnoavck2i.execute-api.ap-south-1.amazonaws.com/",
//   previewWidget: "overlays/nativeoverlays/scene",
//   notifyClient: "overlays/nativeoverlays/notifyclients",
//   producerGraphics: "https://producer-a-test.tvunetworks.com/newppapi/graphic/add",
//   liveHtml: "overlays/nativeoverlays/liveoverlayshtml",
//   previewHtml: "overlays/nativeoverlays/overlayshtml",
// };

// PRODUCTION API's
// export default {
//   socketUrl:"wss://kkpheyxqa8.execute-api.us-west-2.amazonaws.com/Prod",
//   baseUrl: "https://gateway-test.tvunetworks.com/",
//   previewWidget: "overlay/nativeoverlays/scene",
//   notifyClient: "overlay/nativeoverlays/notifyclients",
//   producerGraphics: "https://producer-a-test.tvunetworks.com/newppapi/graphic/add",
//   liveHtml: "overlay/nativeoverlays/liveoverlayshtml",
//   previewHtml: "overlay/nativeoverlays/overlayshtml",
// };

let urlConstant = window.APIUrls;

export default {
  socketUrl: urlConstant.socketUrl,
  baseUrl: urlConstant.baseUrl,
  previewWidget: urlConstant.previewWidget,
  notifyClient: urlConstant.notifyClient,
  producerGraphics: urlConstant.producerGraphics,
  liveHtml: urlConstant.liveHtml,
  previewHtml: urlConstant.previewHtml,
};