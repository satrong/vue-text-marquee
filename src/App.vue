<template>
  <div id="app">
    <h4>Demo1:</h4>
    <VTextMarquee :speed="speed">Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</VTextMarquee>
    <div>Speed:
      <select v-model="speed">
        <option v-for="n in [10,30,50,70,90]" :key="n" :value="n">{{n}}</option>
      </select>
    </div>
    <hr>
    <h4>Demo2:</h4>
    <VTextMarquee :speed="40" :content="message"></VTextMarquee>
    <div>
      <div><textarea v-model="content" rows="4" cols="20" placeholder="Input content"></textarea></div>
      <div><button @click="sub">Start</button></div>
    </div>
  </div>
</template>

<script>
import VTextMarquee from './components/TextMarquee.vue'

export default {
  name: 'app',
  components: {
    VTextMarquee
  },
  data() {
    return {
      content: '',
      message: '',
      speed: 30,
    };
  },
  methods: {
    sub() {
      this.message = this.content;
    },
  },
}
</script>

<style lang="scss" scoped>
textarea {
    border: 1px #ccc solid;
}
</style>
