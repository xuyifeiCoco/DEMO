<template>
  <div class="mailList">
    <Second v-if="second" @close="close" :data="secondList"></Second>
    <template v-if="first">
      <div
        id="alphabet"
        ref="alphabet"
        @touchstart.stop.prevent="_letterTouchStartEvent"
        @touchend.stop.prevent="_letterTouchEndEvent"
        class="alphabet"
        :style="{
          'line-height': letterHeight + 'px',
          'background-color': startTouchAlphabet
            ? 'rgba(0, 0, 0, 0.2)'
            : 'transparent'
        }"
      >
        <div class="letter" v-for="(item, index) in alphabet" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="data-list">
        <div v-for="(item, index) in list" :key="index">
          <div class="letter-tag scroll_title">
            {{ item.tag == "PoundSign" ? "#" : item.tag }}
          </div>
          <div v-for="(i, inde) in item.data" :key="inde">
            <div class="tag-item" @click="() => listClick(i)">
              <!-- <img src="" alt=""> -->
              <div class="item-text">{{ i.name }}</div>
            </div>
            <div class="divide-line" v-if="item.data.length - 1 != inde"></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import list from "./dict.js";
import Second from "./Second";
export default {
  name: "maillist",
  components: {
    Second
  },
  data() {
    return {
      first: true,
      second: false,
      alphabet: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      letterHeight: 0,
      startTouchAlphabet: false,
      list: [],
      touchLetter: "",
      scroList: [],
      step: 40,
      stepTime: 10,
      secondList: []
    };
  },
  mounted() {
    this.list = this._groupby(list);
    this.scroList = this.list.map(item => {
      return item.tag;
    });
    this.$nextTick(() => {
      const $alphabet = this.$refs.alphabet;
      const height = $alphabet.offsetHeight;
      this.letterHeight = height / this.alphabet.length;
    });
  },
  methods: {
    close(){
      // this.first = true
      this.second = false
    },
    listClick(item) {
      this.second = true;
      // this.first = false;
      this.secondList = item.children;
    },
    _letterTouchStartEvent(e) {
      this.startTouchAlphabet = true;
      this.touchLetter = this.alphabet[
        parseInt(e.changedTouches[0].clientY / this.letterHeight)
      ];
    },
    _letterTouchEndEvent(e) {
      this.startTouchAlphabet = false;
      const index = parseInt(e.changedTouches[0].clientY / this.letterHeight);
      this.toScroll(index);
    },
    _compare: function(key) {
      return function(o, p) {
        if (typeof o === "object" && typeof p === "object" && o && p) {
          var a = o[key];
          var b = p[key];
          if (a == "" || a == null || a == undefined) {
            a = String.fromCharCode(91);
          } else if (a[0] >= "a" && a[0] <= "z") {
            a = a.replace(a[0], String.fromCharCode(a[0].charCodeAt() - 32));
          } else if (a[0] < "A" || a[0] > "Z") {
            a = a.replace(a[0], String.fromCharCode(a[0].charCodeAt() + 91));
          }
          if (b == "" || b == null || b == undefined) {
            b = String.fromCharCode(91);
          } else if (b >= "a" && b <= "z") {
            b = b.replace(b[0], String.fromCharCode(b[0].charCodeAt() - 32));
          } else if (b[0] < "A" || b[0] > "Z") {
            b = b.replace(b[0], String.fromCharCode(b[0].charCodeAt() + 91));
          }
          if (a === b) {
            return 0;
          }
          if (typeof a === typeof b) {
            return a < b ? -1 : 1;
          }
          return typeof a < typeof b ? -1 : 1;
        }
        throw "Error type.";
      };
    },
    _sort: function(array, key) {
      return array.sort(this._compare(key));
    },
    _sortByCh: function(arr, key) {
      // 根据汉字的拼音进行排序
      return arr.sort((item1, item2) => item1.name.localeCompare(item2.name));
    },
    toScroll(index) {
      // 用 class="scroll_title" 添加锚点

      let jump = document.querySelectorAll(".scroll_title");
      let scroll_content = document.querySelector(".data-list");
      let scroll_index = this.scroList.indexOf(this.touchLetter);
      if (scroll_index < 0) {
        return;
      }
      let total = jump[scroll_index].offsetTop; //当前需要滚动的元素的高度
      let distance = scroll_content.scrollTop; //滚动的距离
      var smoothDown = () => {
        if (distance < total) {
          distance += step;
          scroll_content.scrollTop = distance;
          setTimeout(smoothDown, this.stepTime);
        } else {
          scroll_content.scrollTop = total;
        }
      };
      var smoothUp = () => {
        if (distance > total) {
          distance -= step;
          scroll_content.scrollTop = distance;
          setTimeout(smoothUp, this.stepTime);
        } else {
          scroll_content.scrollTop = total;
        }
      };
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / this.step;
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / this.step;
        smoothUp();
      }
    },
    _groupby: function(array) {
      if (!array || array.length == 0) {
        return;
      }
      var key = "pinyin";
      array = this._sort(array, key);
      var tag = array[0][key][0];
      if (tag >= "a" && tag <= "z") {
        tag = String.fromCharCode(tag.charCodeAt() - 32);
      }
      var results = [
        {
          tag: tag >= "A" && tag <= "Z" ? tag : "PoundSign",
          data: [array[0]]
        }
      ];
      for (var i = 1, j = 0; i < array.length; i++) {
        var tag = array[i][key][0];
        if (tag >= "a" && tag <= "z") {
          tag = String.fromCharCode(tag.charCodeAt() - 32);
        }
        if (tag >= "A" && tag <= "Z") {
          if (tag == results[j]["tag"]) {
            results[j]["data"].push(array[i]);
          } else {
            j++;
            results.push({
              tag: tag,
              data: [array[i]]
            });
          }
        } else {
          if (results[j]["tag"] != "PoundSign") {
            j++;
            results.push({
              tag: "PoundSign",
              data: [array[i]]
            });
          } else {
            results[j]["data"].push(array[i]);
          }
        }
      }
      return results;
    }
  }
};
</script>
<style lang="scss" scoped>
.mailList {
  /* components/alphabet-order-list/alphabet-order-list.wxss */
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 100;
  overflow-x: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fafafa;

  .alphabet {
    position: fixed;
    z-index: 1000;
    text-align: center;
    right: 0;
    top: 0;
    overflow-x: none;
    bottom: 0;
    color: #333;
    font-size: 28rpx;
    display: flex;
    flex-direction: column;
  }

  .letter {
    flex: 1;
    padding: 0 8px;
  }

  .letter-toast {
    position: absolute;
    z-index: 1000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 30rpx;
    border-radius: 15rpx;
    text-align: center;
    font-size: 96rpx;
    line-height: 96rpx;
    width: 96rpx;
  }

  .data-list {
    text-align: left;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: scroll;
  }

  .letter-tag {
    background-color: whitesmoke;
    font-size: 14px;
    line-height: 14px;
    padding: 8px 15px;
    color: #888;
  }
  .tag-item {
    padding: 8px 15px;
    background-color: white;
    color: #333;
    display: flex;
    flex-direction: row;
  }

  .tag-item:active {
    background-color: #d8d8d8;
  }
  .divide-line {
    margin: 0 15px;
    height: 1px;
    width: auto;
    background-color: whitesmoke;
  }
  .item-image {
    width: 36px;
    height: 36px;
    background-color: whitesmoke;
    margin-right: 15px;
  }
  .item-text {
    font-size: 15px;
    line-height: 36px;
    flex: 1;
    min-height: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

