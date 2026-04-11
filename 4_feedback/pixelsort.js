// https://gitlab.com/metagrowing/extra-shaders-for-hydra/-/tree/main/gallery/screenspace?ref_type=heads#pixel-sort

await loadScript("https://metagrowing.org/extra-shaders-for-hydra/all.js")

window.frame = 0
osc(20).modulateRotate(noise().scale(20)).colorama(0.5).out(o0)
src(o1)
    .pxsort(0.01, () => {return frame++;})
    .blend(o0, 0.01)
    .contrast(1.01)
    .out(o1)
render(o1)
