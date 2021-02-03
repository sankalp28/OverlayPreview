/**
 * Summary: Helper
 * Description: common methods added at Helper utility
 * @author Pawan Gupta
 */  
const Helper = (function() {
    /**
  * Description: get Object By Single Key from Object Array
  * @param {Array} _arrayObj
  * @param {string} key
  * @param {string || numeric} id
  * @param {Boolean} compareNumber
  * @return {Object}
  */
  const getObjectByKeySearch = (_arrayObj, keys, value) => {
    const data = _arrayObj.filter((item) => {
        return item[keys].toString().toUpperCase().includes(value.toString().toUpperCase());
    });
    if (data.length > 0) {
        return data;
    } else {
        return false;
    }
  }

  /**
  * Description: get Object By Multiple Key from Object Array
  * @param {Array} _arrayObj
  * @param {Array} keys 
  * @param {string || numeric} id
  * @param {Boolean} compareNumber
  * @return {Object}
  */
function getArrayObjectByMultipleKeySearch(_arrayObj, keys, value) {
    const data = _arrayObj.filter((item) => {
        return item[keys[0]].toUpperCase().includes(value.toUpperCase()) || item[keys[1]].toString().toUpperCase().includes(value.toUpperCase())
            || item[keys[2]].toUpperCase().includes(value.toUpperCase()) || item[keys[3]].toUpperCase().includes(value.toUpperCase());
    });
    if (data.length > 0) {
        return data;
    } else {
        return false;
    }
}

function getQueryString ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
}

function rgb2hex(rgb){
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function ConverttoHHMMSS(timeValue,_format) {
    let sec_num = parseInt(timeValue, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;

    hours = this.addZero(hours);
    minutes = this.addZero(minutes);
    seconds = this.addZero(seconds);
    if (_format === "HH:MM:SS") {
      return hours + ":" + minutes + ":" + seconds;
    } else if (_format === "MM:SS") {
      return minutes + ":" + seconds;
    }
  }
    
  return {
      getObjectByKeySearch: getObjectByKeySearch,
      getArrayObjectByMultipleKeySearch: getArrayObjectByMultipleKeySearch,
      getQueryString:getQueryString,
      rgb2hex:rgb2hex,
      ConverttoHHMMSS,
    };
  })();
  
  export default Helper;
  