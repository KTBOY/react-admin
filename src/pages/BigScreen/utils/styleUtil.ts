/*
 * @Author: zlc
 * @Date: 2024-11-06 17:19:30
 * @LastEditTime: 2024-11-21 19:45:41
 * @LastEditors: zlc
 * @Description:
 * @FilePath: \aipass-manage-page\src\views\bigScreen\utils\styleUtil.ts
 */
const designWidth = 1920;
const designHeight = 1080;

const styleUtil = {
  // px转vw, vh换算
  px2vw: function (_px) {
    return (_px * 100.0) / designWidth + "vw";
  },

  px2vh: function (_px) {
    return (_px * 100.0) / designHeight + "vh";
  },

  px2font: function (_px) {
    return (_px * 100.0) / designWidth + "vw";
  },
};

export default styleUtil;
