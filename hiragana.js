var dictionary = [
	{
		"jap": "あ",
		"roman": "a"
	},
	{
		"jap": "い",
		"roman": "i"
	},
	{
		"jap": "う",
		"roman": "u"
	},
	{
		"jap": "え",
		"roman": "e"
	},
	{
		"jap": "お",
		"roman": "o"
	},
	{
		"jap": "か",
		"roman": "ka"
	},
	{
		"jap": "き",
		"roman": "ki"
	},
	{
		"jap": "く",
		"roman": "ku"
	},
	{
		"jap": "け",
		"roman": "ke"
	},
	{
		"jap": "こ",
		"roman": "ko"
	},
	{
		"jap": "が",
		"roman": "ga"
	},
	{
		"jap": "ぎ",
		"roman": "gi"
	},
	{
		"jap": "ぐ",
		"roman": "gu"
	},
	{
		"jap": "げ",
		"roman": "ge"
	},
	{
		"jap": "ご",
		"roman": "go"
	},
	{
		"jap": "さ",
		"roman": "sa"
	},
	{
		"jap": "し",
		"roman": "shi"
	},
	{
		"jap": "す",
		"roman": "su"
	},
	{
		"jap": "せ",
		"roman": "se"
	},
	{
		"jap": "そ",
		"roman": "so"
	},
	{
		"jap": "ざ",
		"roman": "za"
	},
	{
		"jap": "じ",
		"roman": "ji"
	},
	{
		"jap": "ず",
		"roman": "zu"
	},
	{
		"jap": "ぜ",
		"roman": "ze"
	},
	{
		"jap": "ぞ",
		"roman": "zo"
	},
	{
		"jap": "た",
		"roman": "ta"
	},
	{
		"jap": "ち",
		"roman": "chi"
	},
	{
		"jap": "つ",
		"roman": "tsu"
	},
	{
		"jap": "て",
		"roman": "te"
	},
	{
		"jap": "と",
		"roman": "to"
	},
	{
		"jap": "だ",
		"roman": "da"
	},
	{
		"jap": "ぢ",
		"roman": "ji"
	},
	{
		"jap": "づ",
		"roman": "zu"
	},
	{
		"jap": "で",
		"roman": "de"
	},
	{
		"jap": "ど",
		"roman": "do"
	},
	{
		"jap": "な",
		"roman": "na"
	},
	{
		"jap": "に",
		"roman": "ni"
	},
	{
		"jap": "ぬ",
		"roman": "nu"
	},
	{
		"jap": "ね",
		"roman": "ne"
	},
	{
		"jap": "の",
		"roman": "no"
	},
	{
		"jap": "は",
		"roman": "ha"
	},
	{
		"jap": "ひ",
		"roman": "hi"
	},
	{
		"jap": "ふ",
		"roman": "fu"
	},
	{
		"jap": "へ",
		"roman": "he"
	},
	{
		"jap": "ほ",
		"roman": "ho"
	},
	{
		"jap": "ば",
		"roman": "ba"
	},
	{
		"jap": "び",
		"roman": "bi"
	},
	{
		"jap": "ぶ",
		"roman": "bu"
	},
	{
		"jap": "べ",
		"roman": "be"
	},
	{
		"jap": "ぼ",
		"roman": "bo"
	},
	{
		"jap": "ぱ",
		"roman": "pa"
	},
	{
		"jap": "ぴ",
		"roman": "pi"
	},
	{
		"jap": "ぷ",
		"roman": "pu"
	},
	{
		"jap": "ぺ",
		"roman": "pe"
	},
	{
		"jap": "ぽ",
		"roman": "po"
	},
	{
		"jap": "ま",
		"roman": "ma"
	},
	{
		"jap": "み",
		"roman": "mi"
	},
	{
		"jap": "む",
		"roman": "mu"
	},
	{
		"jap": "め",
		"roman": "me"
	},
	{
		"jap": "も",
		"roman": "mo"
	},
	{
		"jap": "や",
		"roman": "ya"
	},
	{
		"jap": "ゆ",
		"roman": "yu"
	},
	{
		"jap": "よ",
		"roman": "yo"
	},
	{
		"jap": "ら",
		"roman": "ra"
	},
	{
		"jap": "り",
		"roman": "ri"
	},
	{
		"jap": "る",
		"roman": "ru"
	},
	{
		"jap": "れ",
		"roman": "re"
	},
	{
		"jap": "ろ",
		"roman": "ro"
	},
	{
		"jap": "わ",
		"roman": "wa"
	},
	{
		"jap": "を",
		"roman": "wo"
	},
	{
		"jap": "ん",
		"roman": "n/m"
	}
];

var tracker = 0;
var language = 'jap';
var character;

//write function to grab a hiragana elememt object to review
function nextHiragana(array, element){
    return array[element].jap;
}

//Toggle current from Japanese to Romanji
function showAnswer(){
  if ( language === 'jap' ){
    character = dictionary[tracker].roman;
    document.getElementById('title').innerHTML = character;
  } else {
    character = dictionary[tracker].jap;
    document.getElementById('title').innerHTML = character;
  }
}


$(document).ready(function() {

  $(document).on("keypress", (function(event) {

//add in arrows from key board to change hiragana scroll: left / right, flip: up / down

    if ( (event.which === 39) ) {
        tracker++;
        character = nextHiragana(dictionary, tracker);  //Right arrow
        document.getElementById('title').innerHTML = character;
    } else if ( (event.which === 37) ){
        tracker--;
        character = nextHiragana(dictionary, tracker);  //Left arrow
        document.getElementById('title').innerHTML = character;
    } else if ( (event.which === 38 || event.which === 40) ){
      showAnswer();
    }

  }));

});
