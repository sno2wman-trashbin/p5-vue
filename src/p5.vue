<template>
  <div />
</template>

<script>
import p5 from 'p5'

export default {
	name: 'P5',
	props: {
		width: { type: Number, default: 320 },
		height: { type: Number, default: 100 },
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
