/**
 * 
 * @param {CanvasRenderingContext2D} ctx
 * @param {Uint8Array} data
 */
export function draw(ctx, data, color) {
    const w = ctx.canvas.width
    const h = ctx.canvas.height
    const imgData = new Uint8ClampedArray(w * h * 4)
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const pixel = color(x, y, w, h, data)
            const offset = (y * w + x) * 4
            imgData[offset] = pixel[0]
            imgData[offset + 1] = pixel[1]
            imgData[offset + 2] = pixel[2]
            imgData[offset + 3] = 255
        }
    }
    const img = new ImageData(imgData, w, h)
    ctx.putImageData(img, 0, 0)
}
