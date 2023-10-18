const archiver = require('archiver');
const fs = require('fs-extra');

const output = fs.createWriteStream('dist.war');
const archive = archiver('zip', {
  zlib: { level: 9 }, // Set compression level
});

output.on('close', function () {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('warning', function (err) {
  if (err.code === 'ENOENT') {
    // log warning
  } else {
    throw err;
  }
});

archive.on('error', function (err) {
  throw err;
});



archive.pipe(output);

// Include META-INF and its contents
archive.directory('dist/META-INF', 'META-INF');

// Include the contents of the dist directory
archive.directory('dist/', '/');
archive.directory('dist/css', 'css',);
archive.directory('dist/fonts', 'fonts',);
archive.directory('dist/img', 'img',);
archive.directory('dist/js', 'js',);


archive.file('dist/index.html',{name:'index.html'});
archive.file('dist/favicon.ico',{name:'favicon.ico'});

archive.finalize();
