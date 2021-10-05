const calculate = require('./calculate');

// Receive the arguments from the command line or the default value
const userInput = Number(process.argv.slice(2)) | 139;

// Call the function and print the result
calculate.getData(userInput).then((data) => {
  console.log(data);
});
