<template>
  <div>
    <div
      id="container"
      style="width:900px; height:600px"
    ></div>
  </div>
</template>
<script>
import { BJData, SHData, GZData, planePath, color, series } from "./dict.js";

let mytextStyle = {
  color: "#333", //文字颜色
  fontStyle: "normal", //italic斜体  oblique倾斜
  fontWeight: "normal", //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
  fontFamily: "sans-serif", //字体系列
  fontSize: 18 //字体大小
};
let mylineStyle = {
  color: "#333", //颜色，'rgb(128, 128, 128)'，'rgba(128, 128, 128, 0.5)'，支持线性渐变，径向渐变，纹理填充
  shadowColor: "red", //阴影颜色
  shadowOffsetX: 0, //阴影水平方向上的偏移距离。
  shadowOffsetY: 0, //阴影垂直方向上的偏移距离
  shadowBlur: 10, //图形阴影的模糊大小。
  type: "solid", //坐标轴线线的类型，solid，dashed，dotted
  width: 1, //坐标轴线线宽
  opacity: 1 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
};
let myareaStyle = {
  color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"], //分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
  shadowColor: "red", //阴影颜色
  shadowOffsetX: 0, //阴影水平方向上的偏移距离。
  shadowOffsetY: 0, //阴影垂直方向上的偏移距离
  shadowBlur: 10, //图形阴影的模糊大小。
  opacity: 1 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
};
let myitemStyle = {
  color: "#323c48", //颜色
  borderColor: "#000", //边框颜色
  borderWidth: 0, //柱条的描边宽度，默认不描边。
  borderType: "solid", //柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
  barBorderRadius: 0, //柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径。
  shadowBlur: 10, //图形阴影的模糊大小。
  shadowColor: "#000", //阴影颜色
  shadowOffsetX: 0, //阴影水平方向上的偏移距离。
  shadowOffsetY: 0, //阴影垂直方向上的偏移距离。
  opacity: 1 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
};
export default {
  name: "qianxi",
  data() {
    return {
      option: {
        backgroundColor: "#404a59",
        title: {
          text: "模拟迁徙",
          subtext: "数据纯属虚构",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          top: "bottom",
          left: "right",
          data: ["北京 Top10", "上海 Top10", "广州 Top10"],
          textStyle: {
            color: "#fff"
          },
          selectedMode: "single" // 控制图例的显示个数 multiple  single
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true, ///是否开启鼠标缩放和平移漫游。默认不开启
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#404a59"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
            // normal: myareaStyle,
            // emphasis: myitemStyle
          },
          selectedMode: "single", //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
          label: {
            //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            normal: {
              show: false //是否在普通状态下显示标签。
              // textStyle: mytextStyle //普通状态下的标签文本样式。
            },
            emphasis: {
              show: false //是否在高亮状态下显示标签。
              // textStyle: mytextStyle //高亮状态下的标签文本样式。
            }
          },
           z:900,
          regions: [
            {
              //在地图中对特定的区域配置样式。
              name: "新疆",
              itemStyle: {
                normal: {
                  areaColor: "red",
                  color: "red"
                }
              }
            }
          ],
          silent: false //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
        },
        series: series
      }
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    myChart.setOption(this.option, true);
  }
};
</script>