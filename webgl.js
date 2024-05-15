import vss from './vertexShader.glsl?raw'
import fss from './fragmentShader.glsl?raw'

/**
 * 
 * @param {WebGLRenderingContext} gl
 * @param {string} source
 * @returns {WebGLProgram}
 */
export function compile(gl, source) {
    const program = gl.createProgram()
    const vs = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vs, vss)
    gl.compileShader(vs)
    gl.attachShader(program, vs)
    const fs = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fs, fss + source)
    gl.compileShader(fs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)
    return program
}

/**
 * 
 * @param {WebGLRenderingContext} gl
 * @param {WebGLProgram} program
 */
export function buffer(gl, program) {
    const data = new Float32Array([
        1, 1,
        1, -1,
        -1, 1,
        -1, -1
    ])
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
    const position = gl.getAttribLocation(program, 'position')
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(position)
}

/**
 * 
 * @param {WebGLRenderingContext} gl
 */
export function render(gl) {
    gl.clearColor(0, 0, 0, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
}
