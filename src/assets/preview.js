export const previewElement = [];

export const SimpleText = {
  id: "",
  isActve: true,
  name: "simpleText",
  properties: {
    content: "Enter the Text",
    width: "150",
    height: "50",
    xCoordinate: "200",
    yCoordinate: "100",
    fontColor: "#ffffff",
    fontSize: "20",
    paddingFill: "none",
    paddingValue: "5",
    fontType: "Arial",
    fontStyle: "Normal",
  },
};

export const TextTicker = {
  id: "",
  isActve: false,
  name: "textTicker",
  properties: {
    content: "Enter the Text",
    width: "400",
    height: "40",
    xCoordinate: "10",
    yCoordinate: "200",
    fontColor: "#000",
    fontSize: "",
    paddingFill: "#ffffff",
    paddingValue: "10",
    fontType: "Arial",
    fontStyle: "Normal",
    textDirection: "Left",
    spacing: "10",
    crawlSpeed: "5",
  },
};

export const fontFamilyArray = [
  "Arial-",
  "Brush-Script-MT",
  "Copperplate-Gothic",
  "Impact-",
  "Lucida-Sans",
  "Sans-serif",
  "Tahoma-",
  "Verdana-",
];

export const fontWeightArray = ["Normal", "Bold"];

export const fontSizeArray = function() {
  const data = [];
  const length = 20;
  for (var i = 1; i <= length; i++) {
    data.push(i * 2);
  }
  return data;
};

export const direction = ["Left", "Right", "Up", "Down"];
