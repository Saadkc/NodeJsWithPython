const { spawn } = require('child_process');

const name = 'My name is Saad';
// Spawn a Python process and execute a script
const pythonProcess = spawn('python', ['script.py',name]);


// Handle the output from the Python script
pythonProcess.stdout.on('data', (data) => {
    const result = data.toString().trim();
  console.log(`Python script output: ${result}`);
});

// Handle any errors that occur during execution
pythonProcess.on('error', (error) => {
  console.error(`Error executing Python script: ${error}`);
});

// Handle the process exit
pythonProcess.on('exit', (code) => {
  console.log(`Python script exited with code ${code}`);
});