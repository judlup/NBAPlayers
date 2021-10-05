# Project

The project is to write a function that searches through NBA player heights
based on user input. The raw data is taken from
[here](https://www.openintro.org/data/index.php?data=nba_heights). The data is
served in json format by the endpoint
[here](https://mach-eight.uc.r.appspot.com/).

The task is to create an application that takes a single integer input. The
application will download the raw data from the website above
(https://mach-eight.uc.r.appspot.com) and print a list of all pairs of players
whose height in inches adds up to the integer input to the application. If no
matches are found, the application will print "No matches found"

Sample output is as follows:

```
> app 139

- Brevin Knight         Nate Robinson
- Nate Robinson         Mike Wilks
```

The algorithm to find the pairs must be faster than O(n^2). All edge cases
should be handled appropriately. Though not strictly required.

## How to run

run `npm install`

This console application receives a single integer input trhoug the command line first parameter.

`npm start USER_INPUT`

Example:

`npm start 120`

It should print out the following: `No matches found`

By default if no input is provided, the application will run with the following input: `139`

Output is printed to the console:

```
[
  [ 'Brevin Knight', 'Nate Robinson' ],
  [ 'Nate Robinson', 'Mike Wilks' ]
]
```

For run testing cases, please use this command: `npm test`
