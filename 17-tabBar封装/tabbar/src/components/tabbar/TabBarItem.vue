<!--
  - CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
  -->

<template>
  <div class="tab-bar-item">

    <div v-if="!isActive" >
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot  name="item-icon-active"></slot>
    </div>


    <div :class="{active: isActive}">
      <slot  name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return{
      isActive: true
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

.active{
  color: red;
}
</style>
