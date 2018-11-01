import TextMarquee from './src/components/TextMarquee.vue';

export const VTextMarquee = TextMarquee;

export default {
  install(Vue) {
    Vue.component(TextMarquee.name, TextMarquee);
  }
};