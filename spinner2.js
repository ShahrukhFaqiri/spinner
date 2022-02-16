//Refactored Spinner

  let spinner = '|/-\\|/-\\|' + '\n';
  let time = 0;
  for (const n of spinner) {
    setTimeout(() => {
      process.stdout.write(`\r${n}`)
    }, time);
    time += 200;
  }

