let lotteryNumbers = [];
let firstGame = [50, 47, 3, 16, 33, 22];

for (let index = 0; index < 6; index += 1) {
    let randomNumber = Math.ceil(Math.random() * 60);
    if (!lotteryNumbers.includes(randomNumber)) {
        lotteryNumbers.push(randomNumber);
    } else {
        index -= 1;
    }
}
let numberOfHits =0;
let hits = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
       if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
        numberOfHits += 1;
        hits.push(lotteryNumbers[indexLottery])
       }
    }
}
console.log("Números sorteados:", lotteryNumbers);
console.log("Jogo:", firstGame);
console.log("Quantidade de acertos", numberOfHits);
console.log("Números acertados", hits);