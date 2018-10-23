 // 删除url中某些参数,并返回url name为字符串或者数组
 funcUrlDel(name){  
  if(typeof name ==='string'){
    name=[name]
  }
  var loca = window.location;
  var baseUrl = loca.origin + loca.pathname + "?";
  var query = loca.search.substr(1);
  if (query.indexOf(name[0])>-1) {
      var obj = {}
      var arr = query.split("&");
      for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].split("=");
          obj[arr[i][0]] = arr[i][1];
      };
      for(let j=0;j<name.length;j++){
        delete obj[name[j]]
      }
      var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
      return url
  };
}