const { spawn } = require('child_process');
const color = require('colors');

const child1 = spawn('node',['./Bot/main.js']);
const child2 = spawn('node',['./Api/main.js']);

process.stdin.pipe(child1.stdin);
process.stdin.pipe(child2.stdin);

child1.stdout.on('data', (data) => {
  console.log(`child Bot:\n${data}`.green);
});

child1.stderr.on('data', (data) => {
    console.log(`child Bot:\n${data}`.green);
});

child2.stdout.on('data', (data) => {
    console.log(`child Api:\n${data}`.blue);
});
  
child2.stderr.on('data', (data) => {
    console.log(`child Api:\n${data}`.blue);
});