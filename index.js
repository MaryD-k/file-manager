import { homedir } from 'node:os';
import { chdir, exit } from 'node:process';
import { createInterface } from 'node:readline';
import { getEnteredCommand, getCommandArgs } from './utils/index.js';
import { upHandler, cdHandler, lsHandler, catHandler, addHandler, rnHandler, rmHandler, osHandler, hashHandler, cpHandler, mvHandler, compressHandler, decompressHandler } from './commands-handlers/index.js';

chdir(homedir());

const args = getCommandArgs(process.argv.slice(2));

console.log(`Welcome to the File Manager, ${args['--username'] || 'stranger'}!`);
console.log(`You are currently in ${process.cwd()}`);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', async (line) => {
    const command = getEnteredCommand(line.trim());
    try {
      switch(command.operation) {
        case 'up':
          upHandler();
          break;
        case 'cd':
          cdHandler(command.parameters[0]);
          break;
        case 'ls':
          await lsHandler();
          break;
        case 'cat':
          await catHandler(command.parameters[0]);
          break;
        case 'add':
          await addHandler(command.parameters[0]);
          break;
        case 'rn':
          await rnHandler(command.parameters[0], command.parameters[1]); 
          break;
        case 'cp':
          cpHandler(command.parameters[0], command.parameters[1]);
          break;
        case 'mv':
          await mvHandler(command.parameters[0], command.parameters[1]);
          break;
        case 'rm':
          await rmHandler(command.parameters[0]);
          break;
        case 'os':
          await osHandler(command.parameters[0]);
          break;
        case 'hash':
          await hashHandler(command.parameters[0]);
          break;
        case 'compress':
          await compressHandler(command.parameters[0], command.parameters[1]);
          break;
        case 'decompress':
          await decompressHandler(command.parameters[0], command.parameters[1]);
          break;
        default: console.log('Command not exist');
      }
    }
    catch(_error) {
      console.error('Operation failed');
    }
    console.log(`You are currently in ${process.cwd()}`);
  })
  .on('SIGINT', () => {
    rl.close();
  })
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${args['--username'] || 'stranger'}, goodbye!`)
    exit();
  });
