import './style.css'
import { compile, buffer, render } from './webgl'
import yuv420sp from './formats/yuv420sp.glsl?raw'

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

const gl = canvas.getContext('webgl')
const program = compile(gl, yuv420sp)
buffer(gl, program)
render(gl)
