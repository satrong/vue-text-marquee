
> [Online Demo](https://satrong.github.io/vue-text-marquee/dist/index.html)

## Global Usage

```js
import Vue from 'vue';
import VTextMarquee from 'vue-text-marquee';
Vue.use(VMarquee);
```

## Use in `.vue` file

```js
import { VTextMarquee } from 'vue-text-marquee';
export default {
    component: {
        VTextMarquee: VTextMarquee
    }
}
```

## Prop

- `speed` `{Number}` , scrolling speed,  default `50`
- `content` `{String}` , scrolling content, you can also use default slot instead.
- `animate` `{Boolean}` , control the animation is running or pause, default `true`.
