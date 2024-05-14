import './style.css'

const code = document.getElementById('code')
const width = document.getElementById('width')
const height = document.getElementById('height')
const format = document.getElementById('format')
const fileElement = document.getElementById('file')

fileElement.addEventListener('change', event => {
    // load & run
    const file = fileElement.files[0]
    console.log(file)
})
