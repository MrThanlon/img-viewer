/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 * @param {number} height 
 * @param {Uint8Array} data 
 * @returns {[number,number,number]}
 */
export function color(x, y, width, height, data) {
    const offset = (y * width + x) * 3
    return [
        data[offset],
        data[offset + 1],
        data[offset + 2],
    ]
}
