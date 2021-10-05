var axios = require('axios');

exports.getData = async (userInput) => {
  // Create a request to the API
  const data = await axios.get('https://mach-eight.uc.r.appspot.com');
  // Catch the data from the API
  const players = data.data.values;
  // Call the calculate function
  const result = calculate(players, userInput);
  // Print the result;
  return result;
};

const calculate = (arr, input) => {
  let sum = [];
  let hashTable = {};
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // input - current element
    let sumDifference = input - arr[i].h_in;

    // validate if input exist in hash table, if it exist, we have a pair that sums to input
    if (hashTable[`${sumDifference}`] !== undefined) {
      sum.push([hashTable[`${sumDifference}`], `${arr[i].first_name} ${arr[i].last_name}`]);
    }

    // add current input to hash table
    hashTable[arr[i].h_in.toString()] = `${arr[i].first_name} ${arr[i].last_name}`;
  }

  // return all values that sum to input
  return sum.length === 0 ? 'No matches found' : sum;
};
