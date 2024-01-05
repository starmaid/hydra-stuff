#!/bin/bash

for f in ./*.gif; do
	a="${f##*/}"
	readarray -d "." -t arrout <<< "$a";
	b=${arrout[0]};
	ffmpeg -i "$a" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "./vid/""$b"".mp4";
done