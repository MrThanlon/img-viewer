/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 * @param {number} height 
 * @param {Uint8Array} data 
 * @returns {[number,number,number]}
 */
export function color(x, y, width, height, data) {
    const luma = data[y * width + x]
    const uvIdx = height * width + 2 * ((y >> 1) * (width >> 1) + (x >> 1))
    const u = data[uvIdx + 1]
    const v = data[uvIdx]
    return [
        luma + (140 * (v - 128)) / 100,
        luma - (34 * (u - 128)) / 100 - (71 * (v - 128)) / 100,
        luma + (177 * (u - 128)) / 100
    ]
}
