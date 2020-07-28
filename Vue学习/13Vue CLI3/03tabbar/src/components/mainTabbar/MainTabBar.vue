<template>
    <TabBar>
      <TabBarItem path="/home" active-color="grey">
        <template #item-icon><img src="@assets/img/tabbar/shouye.svg" alt=""></template>
        <template #item-icon-active><img src="@assets/img/tabbar/shouye-hover.svg" alt=""></template>
        <template #item-text><div>首页</div></template>
      </TabBarItem>
      <TabBarItem path="/category">
        <template #item-icon><img src="@assets/img/tabbar/fenlei.svg" alt=""></template>
        <template #item-icon-active><img src="@assets/img/tabbar/fenlei-hover.svg" alt=""></template>
        <template #item-text><div>分类</div></template>
      </TabBarItem>
      <TabBarItem path="/cart" active-color="red">
        <template #item-icon><img src="@assets/img/tabbar/gouwuche.svg" alt=""></template>
        <template #item-icon-active><img src="@assets/img/tabbar/gouwuche-hover.svg" alt=""></template>
        <template #item-text><div>购物车</div></template>
      </TabBarItem>
      <TabBarItem path="/profile" active-color="green">
        <template #item-icon><img src="@assets/img/tabbar/wode.svg" alt=""></template>
        <template #item-icon-active><img src="@assets/img/tabbar/wode-hover.svg" alt=""></template>
        <template #item-text><div>我的</div></template>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from '@components/tabbar/TabBar'
import TabBarItem from '@components/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  data() {
    return {}
  },
  components: {
    TabBar,
    TabBarItem
  },
  computed:{},
  methods: {},
};
</script>

<style scoped>

</style>
