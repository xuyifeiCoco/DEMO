<template>
  <div>
    <div class="ratingselect">
        <div class="rating-type">
          <span class="block positive" @click="select(2,$event)" :class="{'active': selectType2 === 2}">
            {{desc.all}}
            <span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive" @click="select(0,$event)" :class="{'active': selectType2 === 0}">
            {{desc.positive}}
            <span class="count">{{positives.length}}</span>
          </span>
          <span class="block negative" @click="select(1,$event)" :class="{'active': selectType2 === 1}">{{desc.negative}}
              <span class="count">{{negatives.length}}</span>
          </span>
        </div>
      <div class="switch" :class="{'on':onlyContent2}" @click="toggleContent($event)">
        <i class="icon-check_circle"></i>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
export default{
  props:{
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: true
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    },
  data(){
    return {
      selectType2: this.selectType,
      onlyContent2: this.onlyContent
    }
  },
  methods: {
    select(type, event) {
      if (!event._constructed) {
        return;
      }
      this.selectType2= type;
      this.$emit('ratingtype', type);
    },
    toggleContent(event) {
      if (!event._constructed) {
        return;
      }
      this.onlyContent2 = !this.onlyContent2;
      this.$emit('contenttoggle', this.onlyContent2);
    }
  },
  computed: {
    positives() {
        //数组的filter方法，过滤出来符合条件的选项
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE
      });
    },
    negatives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE
      });
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/styles/common";
  .ratingselect {
    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      @include border-1px(rgba(7, 17, 27, .1));
      font-size: 0;
      .block {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        border-radius: 1px;
        line-height: 16px;
        color: rgb(77, 85, 93);
        font-size: 12px;
        &.active {
          color: #fff;
        }
        &.positive {
          background: rgba(0, 160, 220, .2);
          &.active {
            background: rgb(0, 160, 220);
          }
        }
        &.negative {
          background: rgba(77, 85, 93, .2);
          &.active {
            background: rgb(77, 85, 93);
          }
        }
        .count {
          font-size: 8px;
          margin-left: 2px;
        }
      }
    }
    .switch {
      padding: 12px 18px;
      line-height: 24px;
      border-bottom: 1px solid rgba(7, 17, 27, .1);
      color: rgb(147, 153, 159);
      font-size: 0;
      &.on {
        .icon-check_circle {
          color: #00c850;
        }
      }
      .icon-check_circle {
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        font-size: 24px;
      }
      .text {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
      }
    }
  }
</style>
