const { spawn } = require('child_process');
const child = spawn("./node_modules/qunit-puppeteer/bin/qunit-puppeteer.js", ["file://" + __dirname + "/tests/unit/index.html"]);

child.stdout.setEncoding('utf8');

child.stdout.on('data', (chunk) => {
    process.stdout.write(chunk);
});

child.stderr.on('data', (chunk) => {
     process.stderr.write(chunk);
});

// since these are streams, you can pipe them elsewhere
// child.stdout.pipe(process.stdout);
// child.stderr.pipe(process.stderr);

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
