var p = document.getElementById('text_en');
var j = document.getElementById('text_jp')

//日本語の内容
let quiz_jp = [
    'おはよう',
    'さようなら',
    'ようこそ',
    'おしまい'
];

//英語の内容
let quiz_en = [
    'ohayou',
    'sayounara',
    'youkoso',
    'osimai'
];

let checkText = [];

createText();

function createText() {

    //ランダムに文字列を取得する
    let rnd = Math.floor(Math.random() * quiz_en.length);

    //前の文字列を消去する
    p.textContent = '';
    j.textContent = '';

    //日本語の表示
    j.textContent = quiz_jp[rnd];

//一文字づつで区切る　書き出し
checkText = quiz_en[rnd].split('').map(function(value) {
    let span = document.createElement('span');

    span.textContent = value;
    p.appendChild(span);
    return span;
});

}

document.addEventListener('keydown' ,keyDown);

//入力判定の設定
function keyDown(e) {
    if(e.key === checkText[0].textContent) {
        checkText[0].className = 'add-bule';

        checkText.shift();

        if(!checkText.length) createText();
    }
}

//ここまでで英語の問題の表示は終了—————————————————————————
