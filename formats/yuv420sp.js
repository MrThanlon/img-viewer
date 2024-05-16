/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 * @param {number} height 
 * @param {Uint8Array} data 
 * @returns {[number,number,number]}
 */
function color(x, y, width, height, data) {
    const luma = data[y * width + x]
    const u = data[width * height + y / 2 * width + x / 2]
    const v = data[width * height + y / 2 * width + x / 2 + 1]
    return [
        luma + 1.13983 * (v - 128),
        luma - 0.39465 * (u - 0.5806 * (v - 128)),
        luma + 2.203211 * (u - 128)
    ]
}
