<!--
  - CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
  -->

<template>
  <div class="tab-bar-item" @click="itemClick">

<!-- 活跃icon   -->
    <div v-if="isActive" >
      <slot name="item-icon-active"></slot>
    </div>

<!-- 非活跃ICON   -->
    <div v-else>
      <slot  name="item-icon"></slot>
    </div>

<!-- 文本   -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  computed: {
    isActive() {
        return this.$route.path === (this.path);
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: {
      type: String,
      default: ''
    },
    activeColor:{
      type: String,
      default: 'deepPink'
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch( err => '');
    }
  }
}
</script>

<style>
/*导航栏元素样式*/
.tab-bar-item{

  flex: 1;
  /*文字居中*/
  text-align: center;
  height: 49px;
  font-size: 14px;
}

/*图标*/
.tab-bar-item img{
  width:24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>
