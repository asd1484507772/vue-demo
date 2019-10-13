<template>
  <div>
    <mt-swipe :auto="3000" :show-indicators="false">
      <!-- 谁使用轮播图组件，谁为我们传递lunbotuList -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" :class = "{'full':isfull}"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbotuList","isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 400px;

  .mint-swipe-item {
    text-align: center;
    img {
      // width: 100%;
      height: 100%;
    }
  }
}
.full{
  width: 100%;
}
</style>