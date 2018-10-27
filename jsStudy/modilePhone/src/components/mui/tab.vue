<template>
	<div>
		选中的id：{{selected}}
		<mt-tab-container v-model="active">
			<mt-tab-container-item id="tab-container1">
				<mt-cell v-for="n in 10" title="tab-container 1" :key="22"></mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab-container2">
				<mt-cell v-for="n in 5" title="tab-container 2" :key="33"></mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab-container3">
				<mt-cell v-for="n in 7" title="tab-container 3" :key="44"></mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab-container3">
				<mt-cell v-for="n in 7" title="tab-container 3" :key="66"></mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>
		<mt-tabbar v-model="selected">
			<mt-tab-item id="外卖">
				外卖
			</mt-tab-item>
			<mt-tab-item id="订单">
				订单
			</mt-tab-item>
			<mt-tab-item id="发现">
				发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script type="text/ecmascript-6">
import { TabContainer, TabContainerItem } from 'mint-ui';
export default {
	components:{
		TabContainer,
		TabContainerItem
	},
	data () {
		return {
			active:'tab-container1',
			selected:'外卖',
			value:''
		}
	},
	watch: {
	    selected: function (val, oldVal) {
	        // 这里就可以通过 val 的值变更来确定
	        console.log(val)
	        if (true) {}
	    }
	},
	methods:{
		aa(){
			console.log(1)
		}
	}
}

</script>
<style >

</style>
