const sound = () => {
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i] > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, process.argv[i] * 1000);
    }
  }
};

sound();