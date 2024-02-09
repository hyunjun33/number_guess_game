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


playButton.addEventListener("click", play);


function pickRandomNum() {
    answerNum = Math.floor(Math.random() * 100) + 1;
    console.log("생성한 정답 숫자: ", answerNum)
};

function play() {
    let userValue = userInput.value;
    if (answerNum > userValue) {
        resultArea.textContent = "Up!!"
    }
    else if (answerNum < userValue) {
        resultArea.textContent = "Down!!"
    }
    else {
        resultArea.textContent = "맞췄습니다!!"
    };
};

pickRandomNum();