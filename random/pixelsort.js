// https://gitlab.com/metagrowing/extra-shaders-for-hydra/-/tree/main/gallery/screenspace?ref_type=heads#pixel-sort

await loadScript("https://cdn.statically.io/gl/metagrowing/extra-shaders-for-hydra/main/lib/all.js")

a.show()
a.setSmooth(0)

window.frame = 0
osc(10,0.1,5).rotate(() => time/5).modulate(voronoi()).scale(() => a.fft[2]*3 + 1).out(o0)
src(o1)
    .pxsort(0.2, () => {return frame++;}, () => time % 1, () => time % 3)
    .blend(o0, 0.01)
    .contrast(1.01)
    .out(o1)
render(o1)