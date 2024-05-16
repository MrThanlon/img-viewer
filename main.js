import './style.css'
import { draw } from './2d'
import * as formats from './formats/export'

const widthInput = document.getElementById('width')
const heightInput = document.getElementById('height')
const formatInput = document.getElementById('format')
const fileInput = document.getElementById('file')
const canvas = document.getElementById('img')

for (let f in formats) {
    const ele = document.createElement('option')
    ele.value = f
    ele.innerText = f
    formatInput.appendChild(ele)
}

formatInput.value = localStorage.getItem('format') || 'RGB24'
widthInput.value = localStorage.getItem('width') || '1920'
heightInput.value = localStorage.getItem('height') || '1080'
canvas.width = widthInput.value
canvas.height = heightInput.value

fileInput?.addEventListener('change', async () => {
    // load & run
    const file = fileInput.files[0]
    if (!file) {
        return
    }
    localStorage.setItem('width', widthInput.value)
    localStorage.setItem('height', heightInput.value)
    localStorage.setItem('format', formatInput.value)
    canvas.width = widthInput.value
    canvas.height = heightInput.value
    const data = await file.arrayBuffer()
    const ctx = canvas.getContext('2d')
    draw(ctx, new Uint8Array(data), formats[formatInput.value])
})

const ctx = canvas.getContext('2d')
draw(ctx, new Uint8Array(0), (x, y, w, h, d) => {
    return [
        x / w * 255,
        y / h * 255,
        0
    ]
})
