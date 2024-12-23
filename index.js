'use strict';

const videoStitch = require('video-stitch');

videoStitch.concat({
    // ffmpeg_path: <path-to-ffmpeg> Optional. Otherwise it will just use ffmpeg on your $PATH
    silent: true, // optional. if set to false, gives detailed output on console
    overwrite: false // optional. by default, if file already exists, ffmpeg will ask for overwriting in console and that pause the process. if set to true, it will force overwriting. if set to false it will prevent overwriting.
  })
  .clips([
    {
      "fileName": "FILENAME"
    },
    {
      "fileName": "FILENAME"
    },
    {
      "fileName": "FILENAME"
    }
  ])
  .output("myfilename") //optional absolute file name for output file
  .concat()
  .then((outputFileName) => {
    
  });