process.stdout.write('hello from spinner1.js... \rheyyy\n');

const finalString = () => {
  let count = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 100);
    count = count + 200;
  }

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);

  setTimeout(() => {
    process.stdout.write('\r\\    ');
  }, 700);

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 900);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 1100);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 1300);

  setTimeout(() => {
    process.stdout.write('\r\\    ');
  }, 1500);

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 1700);


  const finalString = () => {
    let count = 0;
    for (const char of sentence) {
      setTimeout(() => {
        process.stdout.write(char);
      }, count * 50);
      count++;
    }

    setTimeout(() => {
      process.stdout.write('\n');
    }, sentence.length * 50);
  };