var fs = require('fs');
var inline = require('inline-html');

inline.file('./dist/index.html').then((str) => {

  console.info(str);
});