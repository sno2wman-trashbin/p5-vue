const width = 600
const height = width
const cellSize = width / 200
const cellsW = width / cellSize
const cellsH = height / cellSize
let cells
const cellsReverb = new Array(3).fill(null)

export default {
	width,
	height,
	setup(p) {
		p.frameRate(30)
		p.colorMode(p.HSB, 1, 1, 1, 1)
		p.noStroke()
		cells = []
		for (let x = 0; x < cellsW; x++) {
			const vArray = []
			for (let y = 0; y < cellsH; y++) {
				vArray.push(
					p.noise(x * 0.1, y * 0.1) > 0.52 && Math.random() > 0.3
				)
			}
			cells.push(vArray)
		}
	},
	draw(p) {
		p.background(0.6, 0.05, 0.95)
		const next = []
		for (let i = 0; i < cellsReverb.length; i++) {
			if (!cellsReverb[i]) {
				continue
			}
			for (let x = 0; x < cellsW; x++) {
				for (let y = 0; y < cellsH; y++) {
					if (!cells[x][y] && cellsReverb[i][x][y]) {
						p.fill(
							0.8 - (x / cellsW) * (y / cellsH) * 0.4,
							0.7,
							1 - i * 0.1,
							0.5
						)
						p.rect(x * cellSize, y * cellSize, cellSize, cellSize)
					}
				}
			}
		}
		for (let x = 0; x < cellsW; x++) {
			const nextvArray = []
			for (let y = 0; y < cellsH; y++) {
				if (cells[x][y]) {
					p.fill(0, 0, 0.2, 1)
					p.rect(x * cellSize, y * cellSize, cellSize, cellSize)
				}
				let around = 0
				for (
					let dx = x === 0 ? 0 : -1;
					dx <= (x + 1 === cellsW ? 0 : 1);
					dx++
				) {
					for (
						let dy = y === 0 ? 0 : -1;
						dy <= (y + 1 === cellsH ? 0 : 1);
						dy++
					) {
						if (dx === 0 && dy === 0) {
							continue
						}
						if (cells[x + dx][y + dy]) {
							around++
						}
						if (around > 4) {
							break
						}
					}
				}
				if (cells[x][y]) {
					nextvArray.push(!(around <= 1 || around >= 3))
				} else {
					nextvArray.push(
						around === 3 - (Math.random() < 0.505 ? 1 : 0)
					)
				}
			}
			next.push(nextvArray)
		}
		for (let i = 0; i < cellsReverb.length - 1; i++) {
			cellsReverb[i] = cellsReverb[i + 1]
		}
		if (p.frameCount > 1) {
			cellsReverb[cellsReverb.length - 1] = cells
		}
		cells = next
	},
}
