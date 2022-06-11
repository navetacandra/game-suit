// import dependencies
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

// show "SUIT" to console
console.clear();
console.log(
  chalk.yellow(figlet.textSync("Suit", { horizontalLayout: "full" }))
);

// get random suit for bot
function bot_suit() {
  const pilihan = ["batu", "gunting", "kertas"];
  const out = pilihan[Math.floor(Math.random() * pilihan.length)];
  return out;
}

// check condition
function cek_menang(p, b) {
  const convert = {
    batu: 0,
    gunting: 1,
    kertas: 2,
  };

  const cp = convert[p];
  const cb = convert[b];

  // seri
  if (cp == cb) return 2;

  // player pilih batu
  if (cp == 0 && cb == 1) return 1;
  if (cp == 0 && cb == 2) return 0;

  // player pilih gunting
  if (cp == 1 && cb == 0) return 0;
  if (cp == 1 && cb == 2) return 1;

  // player pilih kertas
  if (cp == 2 && cb == 0) return 1;
  if (cp == 2 && cb == 1) return 0;
}

// show prompt
inquirer
  .prompt([
    {
      // prompt name
      name: "suit",
      // prompt list
      type: "list",
      // question
      message: "Silahkan pilih",
      // options
      choices: ["batu", "gunting", "kertas"],
      // validate option
      validate: (val) => {
        if (val.length) return true;
        else "Silahkan pilih terlebih dahulu!";
      },
    },
  ])
  .then(({ suit }) => {
    // get bot result
    const bs = bot_suit();
    // get conditon
    const res = cek_menang(suit, bs);
    // logging picked fromuser and bot
    console.log("\n");
    console.log(`Kamu : ${suit}
Bot : ${bs}\n`);
    // show condition
    // kalah
    if (res == 0) console.log("Kamu kalah :p");
    if (res == 1) console.log("Yeay! Kamu menang");
    if (res == 2) console.log("Woah! Hasilnya seri");
  })
  // lgging on error
  .catch((err) => console.log(err));
