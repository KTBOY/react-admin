export const getParams = () => {
  var url = location.search;
  var params = new Object();
  if (url.indexOf("?") != -1) {
    const str = url.substr(1);
    const strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      params[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return params;
};
