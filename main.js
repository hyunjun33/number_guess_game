// 랜덤번호를 지정
// 사용자가 번호를 하나 입력한다. 그리고 go 라는 버튼을 누름
// 만약 사용자가 랜덤번호를 맞추면, 맞췄습니다. 알려주기
// 만약 랜덤번호가 < 유저번호 Down 알려주기
// 만약 랜덤번호가 > 유저번호 Up 알려주기
// RESET 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다 (추측 불가, 버튼 disable)
// 사용자가 1 ~ 100 범위 밖 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 사용자가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다.

let answerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => {userInput.value = ""});


function pickRandomNum() {
    answerNum = Math.floor(Math.random() * 100) + 1;
    console.log("생성한 정답 숫자: ", answerNum)
};

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1 과 100 사이 숫자를 입력 해주세요"
        return
    };

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력 해주세요"
        return
    };



   chances--;
   chanceArea.textContent = `남은 기회: ${chances}번 남았습니다`;
   console.log("chance", chances);

    if (answerNum > userValue) {
        resultArea.textContent = "Up!!"
    }
    else if (answerNum < userValue) {
        resultArea.textContent = "Down!!"
    }
    else {
        resultArea.textContent = "맞췄습니다!!"
        gameOver = true
    };

    history.push(userValue);
    console.log(history);


    if (chances < 1) {
        gameOver = true
    };

    if (gameOver === true) {
        playButton.disabled = true
    }
};

function reset() {
    // 사용자 입력 창이 깨끗하게 비워져 있어야 함
    // 새로운 번호가 생성 되어야 함
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "결과 값이 여기 나옵니다!"

}

pickRandomNum();