s1.initVideo("file:///C:/Users/star-tower/Projects/video%20synths/media/vid/mae-fall.mp4")

shape(4).layer(src(s1).invert().luma(0.1).invert().scale(0.1)).out()

src(s1).out()
