const finalString = () => {
  let moves = ['\r|   ', '\r/   ', '\r-   ', '\r\\    ', '\r|   ', '\r/   ', '\r-   ', '\r\\    ', '\r|   '];
  let count = 100;
  for (const char of moves) {
    setTimeout(() => {
      process.stdout.write(char);
    }, count);
    count = count + 200;
  }
};

finalString();
