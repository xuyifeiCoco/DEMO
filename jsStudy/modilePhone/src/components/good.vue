<template>
	<div>
		goods
		<div v-show="flag">
			Toast('提示信息');
		</div>
		<input type="button" value="确定" @click="toast">
		<mt-loadmore :top-method="loadTop" :topDistance='70' ref="loadmore">
			<ul>
				<li v-for="item in list">{{ item }}</li>
			</ul>
		</mt-loadmore>
	</div>
</template>
<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import { Loadmore } from 'mint-ui'
export default {
	components:{
		Loadmore
	},
	data () {
		return {
			flag :false,
			list:[8,9,6,9,6,9,6,9,6,9,6,9,6,9,6,9,6,9,6]
		}
	},
	methods:{
		loadTop() {
			setTimeout(() => {
		         for(var i=0;i<10;i++){
		 			this.list.push(i)
				}
				this.allLoaded = true;
				this.$refs.loadmore.onTopLoaded();
        	}, 2000)
		   
		},
		toast(){
			Toast({
			  message: 'Upload Complete',
			  position: 'middle',
			  duration: 3000
			});
		}
	}
}

</script>
<style >

</style>
