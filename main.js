import './style.css'
import { draw } from './2d'

const code = document.getElementById('code')
const width = document.getElementById('width')
const height = document.getElementById('height')
const format = document.getElementById('format')
const fileElement = document.getElementById('file')
const canvas = document.getElementById('img')

fileElement?.addEventListener('change', event => {
    // load & run
    const file = fileElement.files[0]
    console.log(file)
})

const ctx = canvas.getContext('2d')
draw(ctx, new Uint8Array(0), (x, y, w, h, d) => {
    return [
        x / w * 255,
        y / h * 255,
        0
    ]
})
