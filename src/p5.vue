<template>
    <div></div>
</template>

<script>
import p5 from 'p5'

export default {
  name: 'p5',
  props: {
    width: Number,
    height: Number,
    setup: { type: Function, default: () => {} },
    draw: { type: Function, default: () => {} },
  },
  mounted() {
    this.$nextTick(function() {
      const $container = this.$el

      const width = this.width || $container.clientWidth
      const height = this.height || $container.clientHeight

      new p5(p => {
        p.setup = () => {
          p.createCanvas(width, height)
          this.setup(p)
        }
        p.draw = () => {
          this.draw(p)
        }
      }, $container)
    })
  },
}
</script>