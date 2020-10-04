const SETTING = {
    name : "LUCKY LOTTO!",
    count : 6,
    maxumber : 45
}

function getRandomNumber(maxNumber) {
    const arrRanNum = new Set();
    const {count, maxNum} = SETTING;

    while(arrRanNum.size < count){
        const num = Math.floor(Math.random() * maxNum) + 1;
        console.log(num); // 랜덤 확인
        arrRanNum.add(num);
    }

    return Array.from(arrRanNum);
}

for(let i=0; i<count; i++) {
    getRandomNumber(maxNumber);
}
console.log(colorSet.value());