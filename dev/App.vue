<template>
  <div>
    <h1>P5.js x Vue</h1>
    <p5
      :width="lifegame.width"
      :height="lifegame.height"
      :setup="lifegame.setup"
      :draw="lifegame.draw"
    />
  </div>
</template>

<script>
import p5 from '../index.js'

import lifegame from './sketches/lifegame'

export default {
	name: 'App',
	components: {
		p5,
	},
	data() {
		return {
			lifegame,
		}
	},
}
</script>
