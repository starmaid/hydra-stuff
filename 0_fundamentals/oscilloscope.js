freq = 0

shape(2).scale(0.1).modulate(osc(() => freq)).scale(() => a.fft[0]*3 + 0.01).out()

const new_meyda = Meyda.createMeydaAnalyzer({
    audioContext: a.context,
    source: a.context.createMediaStreamSource(a.stream),
    featureExtractors: [
        'spectralCentroid'
    ]
})

update = () => {
    var features = new_meyda.get()
    if (features && features !== null) {
        freq = features.spectralCentroid
    }
}