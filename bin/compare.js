/**
* Author: Lenny Zeitoun
* Github: @ZeitounCorp
* Date: 11/03/20
*/

const fs = require('fs');
const { exit } = require('process');
// Extract arguments passed to the script
const args = process.argv.slice(2);

// Define Colors for the output
let reset = "\x1b[0m";
let red = "\x1b[31m";
let green = "\x1b[32m";
let yellow = "\x1b[33m";

if (args.length > 2) {
  console.log(`${red}%s${reset}`, 'You can only pass two relative paths to this script');
  exit(0);
}

if (args[0].includes('client')) {
  console.log(`${red}%s${reset}`, 'First arg should be server file');
  exit(0);
} else if (args[1].includes('server')) {
  console.log(`${red}%s${reset}`, 'Second arg should be client file');
  exit(0);
}

console.log(`${green}%s${reset}`, `\nComparing files: \nServer file: ${args[0]}\nClient file: ${args[1]}\n`)

const server_file = fs.readFileSync(args[0].toString(),
  { encoding: 'utf8', flag: 'r' }).toString().split("\n");

const client_file = fs.readFileSync(args[1].toString(),
  { encoding: 'utf8', flag: 'r' }).toString().split("\n");

const server_file_nb_line = server_file.length;
const client_file_nb_line = client_file.length;

console.log(`${yellow}%s${reset}`, `\nNumber of lines in server file: ${green}${server_file_nb_line}\n${yellow}Number of lines in client file: ${green}${client_file_nb_line}${reset}\n`);

const biggerFile = server_file_nb_line > client_file_nb_line ? 'server' : 'client';
const limit_index = biggerFile === 'server' ? client_file_nb_line : server_file_nb_line;

let index = 0;
const comp_table = [];
let resting_lines = [];

do {
  if (client_file[index] != server_file[index]) {
    comp_table.push({ server: server_file[index].substring(0, 52), client: client_file[index].substring(0, 52)});
  }
  if (index + 1 === limit_index) {
    switch (biggerFile) {
      case 'server':
        resting_lines = server_file.slice(index + 1);
        break;
      case 'client':
        resting_lines = client_file.slice(index + 1);
        break;
    }
  }
  index++;
} while (index < limit_index)

comp_table.map((line, index) => console.log(`${yellow}%s${reset}`, `\nLine ${index + 1}: \n${green}  Server: '${line.server.trimStart()}'\n  Client: '${line.client.trimStart()}'`));
console.log(`${yellow}%s${reset}`, `\nLines not included in the table ${green}(from ${biggerFile} file):\n`);
console.log(resting_lines);
