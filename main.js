const result = document.querySelector("#result");
let prevAtt ="";
let prevAtt2 ="";
let prevInput ="0";

$(document).ready(function() {
  $("#result").html("0"); //初期値

  //ACを押した時の初期化
  $("#all-clear").click(function() {
    $("#result").html("0");
    prevAtt ="";
    prevAtt2 ="";
    prevInput ="0";
  });

  //イコールを押した時の計算結果
  $("#equal").click(function() {
    if(prevAtt!=="number"){
        result.textContent=result.textContent.slice(0,-1);
    }
    result.textContent = eval(result.textContent);
  });

}); //JQuery記述終了

let clickbutton = (btn,att) => {
    if(btn==="00" && prevAtt!=="number"){
        btn="";
    }
    //演算子が連続で入力された場合は前回の入力分を消す
    if(att=="operator"&&prevAtt=="operator"){
        result.textContent=result.textContent.slice(0,-1);
    }

    if(btn===""){
        return;
    }else if (result.textContent == '0'&& att=="number") { // 初期状態から入力した数値で上書き
        prevAtt2=prevAtt;
        prevAtt=att;
        prevInput=btn;
        result.textContent = btn;
    }else if(prevAtt2==="operator"&&prevInput==="0"&&(btn==="0"||btn==="00")){
        return;
    }else if(prevAtt2==="operator"&&prevInput==="0"&&att=="number"){
        result.textContent=result.textContent.slice(0,-1);
        prevAtt2=prevAtt;
        prevAtt=att;
        prevInput=btn;
        result.textContent += btn;
    }else{
        prevAtt2=prevAtt;
        prevAtt=att;
        prevInput=btn;
        result.textContent += btn;
    }
};



