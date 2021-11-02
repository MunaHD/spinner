const sentence = "|/-\|/-\|\n";

let time = 100
sentence.split('').forEach((letter) => {
  setTimeout(() => {
    process.stdout.write (`\r${letter}`)
  }, time);
  time += 200
})
