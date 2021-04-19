
      //function to add sent messages to history once Send button is clicked
      function submitItem(){
        var submittedItem = document.getElementById('toSend').value; //grab text in textbox
        const createElem = document.createElement("p"); //variable to contain text
        createElem.innerHTML = submittedItem; //add the typed text into text container 
        smsList.appendChild(createElem); //add the text "createElem" to the history box "smsList"
        }
        
        const smsList = document.getElementById("sms-list");
  
  // When the user clicks on div, open the popup
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  
  
  var engage_result1 = document.getElementById("overall_engagement").rows[2].cells.item(1).innerHTML;
  var engage_result2 = document.getElementById("overall_engagement").rows[2].cells.item(2).innerHTML;
  var engage_result3 = document.getElementById("overall_engagement").rows[2].cells.item(3).innerHTML;
  var engage_result4 = document.getElementById("overall_engagement").rows[2].cells.item(4).innerHTML;
  var engage_result5 = document.getElementById("overall_engagement").rows[2].cells.item(5).innerHTML;
  var engage_result6 = document.getElementById("overall_engagement").rows[2].cells.item(6).innerHTML;
  var engage_result7 = document.getElementById("overall_engagement").rows[2].cells.item(7).innerHTML;
  var engage_result8 = document.getElementById("overall_engagement").rows[2].cells.item(8).innerHTML;
  var engage_result9 = document.getElementById("overall_engagement").rows[2].cells.item(9).innerHTML;
  var engage_result10 = document.getElementById("overall_engagement").rows[2].cells.item(10).innerHTML;
  var engage_result11 = document.getElementById("overall_engagement").rows[2].cells.item(11).innerHTML;
  var engage_result12 = document.getElementById("overall_engagement").rows[2].cells.item(12).innerHTML;
  var engage_result13 = document.getElementById("overall_engagement").rows[2].cells.item(13).innerHTML;
  var engage_result14 = document.getElementById("overall_engagement").rows[2].cells.item(14).innerHTML;
  var engage_result15 = document.getElementById("overall_engagement").rows[2].cells.item(15).innerHTML;
  var engage_result16 = document.getElementById("overall_engagement").rows[2].cells.item(16).innerHTML;
  var engage_result17 = document.getElementById("overall_engagement").rows[2].cells.item(17).innerHTML;
  var engage_result18 = document.getElementById("overall_engagement").rows[2].cells.item(18).innerHTML;
  var engage_result19 = document.getElementById("overall_engagement").rows[2].cells.item(19).innerHTML;
  var engage_result20 = document.getElementById("overall_engagement").rows[2].cells.item(20).innerHTML;
  var engage_result21 = document.getElementById("overall_engagement").rows[2].cells.item(21).innerHTML;
  var engage_result22 = document.getElementById("overall_engagement").rows[2].cells.item(22).innerHTML;
  var engage_result23 = document.getElementById("overall_engagement").rows[2].cells.item(23).innerHTML;
  var engage_result24 = document.getElementById("overall_engagement").rows[2].cells.item(24).innerHTML;
  var engage_result25 = document.getElementById("overall_engagement").rows[2].cells.item(25).innerHTML;
  var engage_result26 = document.getElementById("overall_engagement").rows[2].cells.item(26).innerHTML;
  var engage_result27 = document.getElementById("overall_engagement").rows[2].cells.item(27).innerHTML;
  var engage_result28 = document.getElementById("overall_engagement").rows[2].cells.item(28).innerHTML;
  var engage_result29 = document.getElementById("overall_engagement").rows[2].cells.item(29).innerHTML;
  var engage_result30 = document.getElementById("overall_engagement").rows[2].cells.item(30).innerHTML;
  var engage_result31 = document.getElementById("overall_engagement").rows[2].cells.item(31).innerHTML;
  var engage_result32 = document.getElementById("overall_engagement").rows[2].cells.item(32).innerHTML;
  var engage_result33 = document.getElementById("overall_engagement").rows[2].cells.item(33).innerHTML;
  var engage_result34 = document.getElementById("overall_engagement").rows[2].cells.item(34).innerHTML;
  var engage_result35 = document.getElementById("overall_engagement").rows[2].cells.item(35).innerHTML;
  var engage_result36 = document.getElementById("overall_engagement").rows[2].cells.item(36).innerHTML;
  var engage_result37 = document.getElementById("overall_engagement").rows[2].cells.item(37).innerHTML;
  var engage_result38 = document.getElementById("overall_engagement").rows[2].cells.item(38).innerHTML;
  var engage_result39 = document.getElementById("overall_engagement").rows[2].cells.item(39).innerHTML;
  var engage_result40 = document.getElementById("overall_engagement").rows[2].cells.item(40).innerHTML;
  var engage_result41 = document.getElementById("overall_engagement").rows[2].cells.item(41).innerHTML;
  var engage_result42 = document.getElementById("overall_engagement").rows[2].cells.item(42).innerHTML;
  var engage_result43 = document.getElementById("overall_engagement").rows[2].cells.item(43).innerHTML;
  var engage_result44 = document.getElementById("overall_engagement").rows[2].cells.item(44).innerHTML;
  var engage_result45 = document.getElementById("overall_engagement").rows[2].cells.item(45).innerHTML;
  var engage_result46 = document.getElementById("overall_engagement").rows[2].cells.item(46).innerHTML;
  var engage_result47 = document.getElementById("overall_engagement").rows[2].cells.item(47).innerHTML;
  var engage_result48 = document.getElementById("overall_engagement").rows[2].cells.item(48).innerHTML;
  var engage_result49 = document.getElementById("overall_engagement").rows[2].cells.item(49).innerHTML;
  var engage_result50 = document.getElementById("overall_engagement").rows[2].cells.item(50).innerHTML;
  var engage_result51 = document.getElementById("overall_engagement").rows[2].cells.item(51).innerHTML;
  var engage_result52 = document.getElementById("overall_engagement").rows[2].cells.item(52).innerHTML;
  
  
  //week1 overall engagement
  if (engage_result1 == "H") {
    greenDot();
  } else if (engage_result1 == "L") {
    redDot();
  }
  
  function greenDot() {
    var x1 = document.getElementById("overall_engagement").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDot() {
    var x1 = document.getElementById("overall_engagement").rows[1].cells;
    x1[1].innerHTML = "🔴";
  }
  
  
  
  //week2 overall engagement
  if (engage_result2 == "H") {
    greenDot2();
  } else if (engage_result2 == "L") {
    redDot2();
  }
  
  function greenDot2() {
    var x2 = document.getElementById("overall_engagement").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDot2() {
    var x2 = document.getElementById("overall_engagement").rows[1].cells;
    x2[2].innerHTML = "🔴";
  }
  
  
  
  //week3 overall engagement
  if (engage_result3 == "H") {
    greenDot3();
  } else if (engage_result3 == "L") {
    redDot3();
  }
  
  function greenDot3() {
    var x3 = document.getElementById("overall_engagement").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDot3() {
    var x3 = document.getElementById("overall_engagement").rows[1].cells;
    x3[3].innerHTML = "🔴";
  }
  
  //week4 overall engagement
  if (engage_result4 == "H") {
    greenDot4();
  } else if (engage_result4 == "L") {
    redDot4();
  }
  
  function greenDot4() {
    var x4 = document.getElementById("overall_engagement").rows[1].cells;
    x4[4].innerHTML = "🟢";
  }
  
  function redDot4() {
    var x4 = document.getElementById("overall_engagement").rows[1].cells;
    x4[4].innerHTML = "🔴";
  }
  
  
  //week5 overall engagement
  if (engage_result5 == "H") {
    greenDot5();
  } else if (engage_result5 == "L") {
    redDot5();
  }
  
  function greenDot5() {
    var x5 = document.getElementById("overall_engagement").rows[1].cells;
    x5[5].innerHTML = "🟢";
  }
  
  function redDot5() {
    var x5 = document.getElementById("overall_engagement").rows[1].cells;
    x5[5].innerHTML = "🔴";
  }
  
  //week6 overall engagement
  if (engage_result6 == "H") {
    greenDot6();
  } else if (engage_result6 == "L") {
    redDot6();
  }
  
  function greenDot6() {
    var x6 = document.getElementById("overall_engagement").rows[1].cells;
    x6[6].innerHTML = "🟢";
  }
  
  function redDot6() {
    var x6 = document.getElementById("overall_engagement").rows[1].cells;
    x6[6].innerHTML = "🔴";
  }
  
  
  //week7 overall engagement
  if (engage_result7 == "H") {
    greenDot7();
  } else if (engage_result7 == "L") {
    redDot7();
  }
  
  function greenDot7() {
    var x7 = document.getElementById("overall_engagement").rows[1].cells;
    x7[7].innerHTML = "🟢";
  }
  
  function redDot7() {
    var x7 = document.getElementById("overall_engagement").rows[1].cells;
    x7[7].innerHTML = "🔴";
  }
  
  
  //week8 overall engagement
  if (engage_result8 == "H") {
    greenDot8();
  } else if (engage_result8 == "L") {
    redDot8();
  }
  
  function greenDot8() {
    var x8 = document.getElementById("overall_engagement").rows[1].cells;
    x8[8].innerHTML = "🟢";
  }
  
  function redDot8() {
    var x8 = document.getElementById("overall_engagement").rows[1].cells;
    x8[8].innerHTML = "🔴";
  }
  
  
  //week9 overall engagement
  if (engage_result9 == "H") {
    greenDot9();
  } else if (engage_result9 == "L") {
    redDot9();
  }
  
  function greenDot9() {
    var x9 = document.getElementById("overall_engagement").rows[1].cells;
    x9[9].innerHTML = "🟢";
  }
  
  function redDot9() {
    var x9 = document.getElementById("overall_engagement").rows[1].cells;
    x9[9].innerHTML = "🔴";
  }
  
  
  //week10 overall engagement
  if (engage_result10 == "H") {
    greenDot10();
  } else if (engage_result10 == "L") {
    redDot6();
  }
  
  function greenDot10() {
    var x10 = document.getElementById("overall_engagement").rows[1].cells;
    x10[10].innerHTML = "🟢";
  }
  
  function redDot10() {
    var x10 = document.getElementById("overall_engagement").rows[1].cells;
    x10[10].innerHTML = "🔴";
  }
  
  
  
  //week11 overall engagement
  if (engage_result11 == "H") {
    greenDot11();
  } else if (engage_result11 == "L") {
    redDot11();
  }
  
  function greenDot11() {
    var x11 = document.getElementById("overall_engagement").rows[1].cells;
    x11[11].innerHTML = "🟢";
  }
  
  function redDot11() {
    var x11 = document.getElementById("overall_engagement").rows[1].cells;
    x11[11].innerHTML = "🔴";
  }
  
  
  //week12 overall engagement
  if (engage_result12 == "H") {
    greenDot12();
  } else if (engage_result12 == "L") {
    redDot12();
  }
  
  function greenDot12() {
    var x12 = document.getElementById("overall_engagement").rows[1].cells;
    x12[12].innerHTML = "🟢";
  }
  
  function redDot12() {
    var x12 = document.getElementById("overall_engagement").rows[1].cells;
    x12[12].innerHTML = "🔴";
  }
  
  
  //week13 overall engagement
  if (engage_result11 == "H") {
    greenDot13();
  } else if (engage_result13 == "L") {
    redDot13();
  }
  
  function greenDot13() {
    var x13 = document.getElementById("overall_engagement").rows[1].cells;
    x13[13].innerHTML = "🟢";
  }
  
  function redDot13() {
    var x13 = document.getElementById("overall_engagement").rows[1].cells;
    x13[13].innerHTML = "🔴";
  }
  
  
  //week14 overall engagement
  if (engage_result14 == "H") {
    greenDot14();
  } else if (engage_result14 == "L") {
    redDot14();
  }
  
  function greenDot14() {
    var x14 = document.getElementById("overall_engagement").rows[1].cells;
    x14[14].innerHTML = "🟢";
  }
  
  function redDot14() {
    var x14 = document.getElementById("overall_engagement").rows[1].cells;
    x14[14].innerHTML = "🔴";
  }
  
  
  //week15 overall engagement
  if (engage_result15 == "H") {
    greenDot15();
  } else if (engage_result15 == "L") {
    redDot15();
  }
  
  function greenDot15() {
    var x15 = document.getElementById("overall_engagement").rows[1].cells;
    x15[15].innerHTML = "🟢";
  }
  
  function redDot15() {
    var x15 = document.getElementById("overall_engagement").rows[1].cells;
    x15[15].innerHTML = "🔴";
  }
  
  
  
  //week16 overall engagement
  if (engage_result16 == "H") {
    greenDot16();
  } else if (engage_result16 == "L") {
    redDot16();
  }
  
  function greenDot16() {
    var x16 = document.getElementById("overall_engagement").rows[1].cells;
    x16[16].innerHTML = "🟢";
  }
  
  function redDot16() {
    var x16 = document.getElementById("overall_engagement").rows[1].cells;
    x16[16].innerHTML = "🔴";
  }
  
  
  //week17 overall engagement
  if (engage_result17 == "H") {
    greenDot17();
  } else if (engage_result17 == "L") {
    redDot17();
  }
  
  function greenDot17() {
    var x17 = document.getElementById("overall_engagement").rows[1].cells;
    x17[17].innerHTML = "🟢";
  }
  
  function redDot17() {
    var x17 = document.getElementById("overall_engagement").rows[1].cells;
    x17[17].innerHTML = "🔴";
  }
  
  
  //week18 overall engagement
  if (engage_result18 == "H") {
    greenDot18();
  } else if (engage_result18 == "L") {
    redDot18();
  }
  
  function greenDot18() {
    var x18 = document.getElementById("overall_engagement").rows[1].cells;
    x18[18].innerHTML = "🟢";
  }
  
  function redDot18() {
    var x18 = document.getElementById("overall_engagement").rows[1].cells;
    x18[18].innerHTML = "🔴";
  }
  
  
  //week19 overall engagement
  if (engage_result19 == "H") {
    greenDot19();
  } else if (engage_result19 == "L") {
    redDot19();
  }
  
  function greenDot19() {
    var x19 = document.getElementById("overall_engagement").rows[1].cells;
    x19[19].innerHTML = "🟢";
  }
  
  function redDot19() {
    var x19 = document.getElementById("overall_engagement").rows[1].cells;
    x19[19].innerHTML = "🔴";
  }
  // function myFunction1() {
  //   var x = document.getElementById("overall_engagement").rows[2].cells;
  //   x[3].innerHTML = "NEW CONTENT";
  // }
  
  var m1 = document.getElementById("meals").rows[2].cells.item(1).innerHTML;
  var m2 = document.getElementById("meals").rows[2].cells.item(2).innerHTML;
  var m3 = document.getElementById("meals").rows[2].cells.item(3).innerHTML;
  var m4 = document.getElementById("meals").rows[2].cells.item(4).innerHTML;
  var m5 = document.getElementById("meals").rows[2].cells.item(5).innerHTML;
  var m6 = document.getElementById("meals").rows[2].cells.item(6).innerHTML;
  var m7 = document.getElementById("meals").rows[2].cells.item(7).innerHTML;
  var m8 = document.getElementById("meals").rows[2].cells.item(8).innerHTML;
  var m9 = document.getElementById("meals").rows[2].cells.item(9).innerHTML;
  var m10 = document.getElementById("meals").rows[2].cells.item(10).innerHTML;
  var m11 = document.getElementById("meals").rows[2].cells.item(11).innerHTML;
  var m12 = document.getElementById("meals").rows[2].cells.item(12).innerHTML;
  var m13 = document.getElementById("meals").rows[2].cells.item(13).innerHTML;
  var m14 = document.getElementById("meals").rows[2].cells.item(14).innerHTML;
  var m15 = document.getElementById("meals").rows[2].cells.item(15).innerHTML;
  var m16 = document.getElementById("meals").rows[2].cells.item(16).innerHTML;
  var m17 = document.getElementById("meals").rows[2].cells.item(17).innerHTML;
  var m18 = document.getElementById("meals").rows[2].cells.item(18).innerHTML;
  var m19 = document.getElementById("meals").rows[2].cells.item(19).innerHTML;
  var m20 = document.getElementById("meals").rows[2].cells.item(20).innerHTML;
  var m21 = document.getElementById("meals").rows[2].cells.item(21).innerHTML;
  var m22 = document.getElementById("meals").rows[2].cells.item(22).innerHTML;
  var m23 = document.getElementById("meals").rows[2].cells.item(23).innerHTML;
  var m24 = document.getElementById("meals").rows[2].cells.item(24).innerHTML;
  var m25 = document.getElementById("meals").rows[2].cells.item(25).innerHTML;
  var m26 = document.getElementById("meals").rows[2].cells.item(26).innerHTML;
  var m27 = document.getElementById("meals").rows[2].cells.item(27).innerHTML;
  var m28 = document.getElementById("meals").rows[2].cells.item(28).innerHTML;
  var m29 = document.getElementById("meals").rows[2].cells.item(29).innerHTML;
  var m30 = document.getElementById("meals").rows[2].cells.item(30).innerHTML;
  var m31 = document.getElementById("meals").rows[2].cells.item(31).innerHTML;
  var m32 = document.getElementById("meals").rows[2].cells.item(32).innerHTML;
  var m33 = document.getElementById("meals").rows[2].cells.item(33).innerHTML;
  var m34 = document.getElementById("meals").rows[2].cells.item(34).innerHTML;
  var m35 = document.getElementById("meals").rows[2].cells.item(35).innerHTML;
  var m36 = document.getElementById("meals").rows[2].cells.item(36).innerHTML;
  var m37 = document.getElementById("meals").rows[2].cells.item(37).innerHTML;
  var m38 = document.getElementById("meals").rows[2].cells.item(38).innerHTML;
  var m39 = document.getElementById("meals").rows[2].cells.item(39).innerHTML;
  var m40 = document.getElementById("meals").rows[2].cells.item(40).innerHTML;
  var m41 = document.getElementById("meals").rows[2].cells.item(41).innerHTML;
  var m42 = document.getElementById("meals").rows[2].cells.item(42).innerHTML;
  var m43 = document.getElementById("meals").rows[2].cells.item(43).innerHTML;
  var m44 = document.getElementById("meals").rows[2].cells.item(44).innerHTML;
  var m45 = document.getElementById("meals").rows[2].cells.item(45).innerHTML;
  var m46 = document.getElementById("meals").rows[2].cells.item(46).innerHTML;
  var m47 = document.getElementById("meals").rows[2].cells.item(47).innerHTML;
  var m48 = document.getElementById("meals").rows[2].cells.item(48).innerHTML;
  var m49 = document.getElementById("meals").rows[2].cells.item(49).innerHTML;
  var m50 = document.getElementById("meals").rows[2].cells.item(50).innerHTML;
  var m51 = document.getElementById("meals").rows[2].cells.item(51).innerHTML;
  var m52 = document.getElementById("meals").rows[2].cells.item(52).innerHTML;
  
  
  //week1 meals engagement
  if (m1 == "H") {
    greenDotM1();
  } else if (m1 == "L") {
    redDotM1();
  }
  
  function greenDotM1() {
    var x1 = document.getElementById("meals").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotM1() {
    var x1 = document.getElementById("meals").rows[1].cells;
    x1[1].innerHTML = "🔴";
  }
  
  //week2 meals engagement
  if (m2 == "H") {
    greenDotM2();
  } else if (m2 == "L") {
    redDotM2();
  }
  
  function greenDotM2() {
    var x2 = document.getElementById("meals").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotM2() {
    var x2 = document.getElementById("meals").rows[1].cells;
    x2[2].innerHTML = "🔴";
  }
  
  
  //week3 meals engagement
  if (m3 == "H") {
    greenDotM3();
  } else if (m3 == "L") {
    redDotM3();
  }
  
  function greenDotM3() {
    var x3 = document.getElementById("meals").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotM3() {
    var x3 = document.getElementById("meals").rows[1].cells;
    x3[3].innerHTML = "🔴";
  }
  
  
  //week4 meals engagement
  if (m4 == "H") {
    greenDotM4();
  } else if (m4 == "L") {
    redDotM4();
  }
  
  function greenDotM4() {
    var x4 = document.getElementById("meals").rows[1].cells;
    x4[4].innerHTML = "🟢";
  }
  
  function redDotM4() {
    var x4 = document.getElementById("meals").rows[1].cells;
    x4[4].innerHTML = "🔴";
  }
  
  //week5 meals engagement
  if (m5 == "H") {
    greenDotM5();
  } else if (m5 == "L") {
    redDotM5();
  }
  
  function greenDotM5() {
    var x5 = document.getElementById("meals").rows[1].cells;
    x5[5].innerHTML = "🟢";
  }
  
  function redDotM5() {
    var x5 = document.getElementById("meals").rows[1].cells;
    x5[5].innerHTML = "🔴";
  }
  
  //week6 meals engagement
  if (m6 == "H") {
    greenDotM6();
  } else if (m6 == "L") {
    redDotM6();
  }
  
  function greenDotM6() {
    var x6 = document.getElementById("meals").rows[1].cells;
    x6[6].innerHTML = "🟢";
  }
  
  function redDotM6() {
    var x6 = document.getElementById("meals").rows[1].cells;
    x6[6].innerHTML = "🔴";
  }
  
  //week7 meals engagement
  if (m7 == "H") {
    greenDotM7();
  } else if (m7 == "L") {
    redDotM7();
  }
  
  function greenDotM7() {
    var x7 = document.getElementById("meals").rows[1].cells;
    x7[7].innerHTML = "🟢";
  }
  
  function redDotM7() {
    var x7 = document.getElementById("meals").rows[1].cells;
    x7[7].innerHTML = "🔴";
  }
  
  //week8 meals engagement
  if (m8 == "H") {
    greenDotM8();
  } else if (m8 == "L") {
    redDotM8();
  }
  
  function greenDotM8() {
    var x8 = document.getElementById("meals").rows[1].cells;
    x8[8].innerHTML = "🟢";
  }
  
  function redDotM8() {
    var x8 = document.getElementById("meals").rows[1].cells;
    x8[8].innerHTML = "🔴";
  }
  
  //week9 meals engagement
  if (m9 == "H") {
    greenDotM9();
  } else if (m9 == "L") {
    redDotM9();
  }
  
  function greenDotM9() {
    var x9 = document.getElementById("meals").rows[1].cells;
    x9[9].innerHTML = "🟢";
  }
  
  function redDotM9() {
    var x9 = document.getElementById("meals").rows[1].cells;
    x9[9].innerHTML = "🔴";
  }
  
  //week10 meals engagement
  if (m10 == "H") {
    greenDotM10();
  } else if (m10 == "L") {
    redDotM10();
  }
  
  function greenDotM10() {
    var x10 = document.getElementById("meals").rows[1].cells;
    x10[10].innerHTML = "🟢";
  }
  
  function redDotM10() {
    var x10 = document.getElementById("meals").rows[1].cells;
    x10[10].innerHTML = "🔴";
  }
  
  //week11 meals engagement
  if (m11 == "H") {
    greenDotM11();
  } else if (m11 == "L") {
    redDotM11();
  }
  
  function greenDotM11() {
    var x11 = document.getElementById("meals").rows[1].cells;
    x11[11].innerHTML = "🟢";
  }
  
  function redDotM11() {
    var x11 = document.getElementById("meals").rows[1].cells;
    x11[11].innerHTML = "🔴";
  }
  
  //week12 meals engagement
  if (m12 == "H") {
    greenDotM12();
  } else if (m12 == "L") {
    redDotM12();
  }
  
  function greenDotM12() {
    var x12 = document.getElementById("meals").rows[1].cells;
    x12[12].innerHTML = "🟢";
  }
  
  function redDotM12() {
    var x12 = document.getElementById("meals").rows[1].cells;
    x12[12].innerHTML = "🔴";
  }
  
  //week13 meals engagement
  if (m13 == "H") {
    greenDotM13();
  } else if (m13 == "L") {
    redDotM13();
  }
  
  function greenDotM13() {
    var x13 = document.getElementById("meals").rows[1].cells;
    x13[13].innerHTML = "🟢";
  }
  
  function redDotM13() {
    var x13 = document.getElementById("meals").rows[1].cells;
    x13[13].innerHTML = "🔴";
  }
  
  //week14 meals engagement
  if (m14 == "H") {
    greenDotM14();
  } else if (m14 == "L") {
    redDotM14();
  }
  
  function greenDotM14() {
    var x14 = document.getElementById("meals").rows[1].cells;
    x14[14].innerHTML = "🟢";
  }
  
  function redDotM14() {
    var x14 = document.getElementById("meals").rows[1].cells;
    x14[14].innerHTML = "🔴";
  }
  
  
  
  var s1 = document.getElementById("steps").rows[2].cells.item(1).innerHTML;
  var s2 = document.getElementById("steps").rows[2].cells.item(2).innerHTML;
  var s3 = document.getElementById("steps").rows[2].cells.item(3).innerHTML;
  var s4 = document.getElementById("steps").rows[2].cells.item(4).innerHTML;
  var s5 = document.getElementById("steps").rows[2].cells.item(5).innerHTML;
  var s6 = document.getElementById("steps").rows[2].cells.item(6).innerHTML;
  var s7 = document.getElementById("steps").rows[2].cells.item(7).innerHTML;
  var s8 = document.getElementById("steps").rows[2].cells.item(8).innerHTML;
  var s9 = document.getElementById("steps").rows[2].cells.item(9).innerHTML;
  var s10 = document.getElementById("steps").rows[2].cells.item(10).innerHTML;
  var s11 = document.getElementById("steps").rows[2].cells.item(11).innerHTML;
  var s12 = document.getElementById("steps").rows[2].cells.item(12).innerHTML;
  var s13 = document.getElementById("steps").rows[2].cells.item(13).innerHTML;
  var s14 = document.getElementById("steps").rows[2].cells.item(14).innerHTML;
  var s15 = document.getElementById("steps").rows[2].cells.item(15).innerHTML;
  var s16 = document.getElementById("steps").rows[2].cells.item(16).innerHTML;
  var s17 = document.getElementById("steps").rows[2].cells.item(17).innerHTML;
  var s18 = document.getElementById("steps").rows[2].cells.item(18).innerHTML;
  var s19 = document.getElementById("steps").rows[2].cells.item(19).innerHTML;
  var s20 = document.getElementById("steps").rows[2].cells.item(20).innerHTML;
  var s21 = document.getElementById("steps").rows[2].cells.item(21).innerHTML;
  var s22 = document.getElementById("steps").rows[2].cells.item(22).innerHTML;
  var s23 = document.getElementById("steps").rows[2].cells.item(23).innerHTML;
  var s24 = document.getElementById("steps").rows[2].cells.item(24).innerHTML;
  var s25 = document.getElementById("steps").rows[2].cells.item(25).innerHTML;
  var s26 = document.getElementById("steps").rows[2].cells.item(26).innerHTML;
  var s27 = document.getElementById("steps").rows[2].cells.item(27).innerHTML;
  var s28 = document.getElementById("steps").rows[2].cells.item(28).innerHTML;
  var s29 = document.getElementById("steps").rows[2].cells.item(29).innerHTML;
  var s30 = document.getElementById("steps").rows[2].cells.item(30).innerHTML;
  var s31 = document.getElementById("steps").rows[2].cells.item(31).innerHTML;
  var s32 = document.getElementById("steps").rows[2].cells.item(32).innerHTML;
  var s33 = document.getElementById("steps").rows[2].cells.item(33).innerHTML;
  var s34 = document.getElementById("steps").rows[2].cells.item(34).innerHTML;
  var s35 = document.getElementById("steps").rows[2].cells.item(35).innerHTML;
  var s36 = document.getElementById("steps").rows[2].cells.item(36).innerHTML;
  var s37 = document.getElementById("steps").rows[2].cells.item(37).innerHTML;
  var s38 = document.getElementById("steps").rows[2].cells.item(38).innerHTML;
  var s39 = document.getElementById("steps").rows[2].cells.item(39).innerHTML;
  var s40 = document.getElementById("steps").rows[2].cells.item(40).innerHTML;
  var s41 = document.getElementById("steps").rows[2].cells.item(41).innerHTML;
  var s42 = document.getElementById("steps").rows[2].cells.item(42).innerHTML;
  var s43 = document.getElementById("steps").rows[2].cells.item(43).innerHTML;
  var s44 = document.getElementById("steps").rows[2].cells.item(44).innerHTML;
  var s45 = document.getElementById("steps").rows[2].cells.item(45).innerHTML;
  var s46 = document.getElementById("steps").rows[2].cells.item(46).innerHTML;
  var s47 = document.getElementById("steps").rows[2].cells.item(47).innerHTML;
  var s48 = document.getElementById("steps").rows[2].cells.item(48).innerHTML;
  var s49 = document.getElementById("steps").rows[2].cells.item(49).innerHTML;
  var s50 = document.getElementById("steps").rows[2].cells.item(50).innerHTML;
  var s51 = document.getElementById("steps").rows[2].cells.item(51).innerHTML;
  var s52 = document.getElementById("steps").rows[2].cells.item(52).innerHTML;
  
  //week1 steps engagement
  if (s1 == "H") {
    greenDotS1();
  } else if (s1 == "L") {
    redDotS1();
  }
  
  function greenDotS1() {
    var x1 = document.getElementById("steps").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotS1() {
    var x1 = document.getElementById("steps").rows[1].cells;
    x1[1].innerHTML = "🔴";
  }
  
  //week2 steps engagement
  if (s2 == "H") {
    greenDotS2();
  } else if (s2 == "L") {
    redDotS2();
  }
  
  function greenDotS2() {
    var x2 = document.getElementById("steps").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotS2() {
    var x2 = document.getElementById("steps").rows[1].cells;
    x2[2].innerHTML = "🔴";
  }
  
  
  //week3 steps engagement
  if (s3 == "H") {
    greenDotS3();
  } else if (s3 == "L") {
    redDotS3();
  }
  
  function greenDotS3() {
    var x3 = document.getElementById("steps").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotS3() {
    var x3 = document.getElementById("steps").rows[1].cells;
    x3[3].innerHTML = "🔴";
  }
  
  
  //week4 meals engagement
  if (s4 == "H") {
    greenDotS4();
  } else if (s4 == "L") {
    redDotS4();
  }
  
  function greenDotS4() {
    var x4 = document.getElementById("steps").rows[1].cells;
    x4[4].innerHTML = "🟢";
  }
  
  function redDotS4() {
    var x4 = document.getElementById("steps").rows[1].cells;
    x4[4].innerHTML = "🔴";
  }
  
  //week5 meals engagement
  if (s5 == "H") {
    greenDotS5();
  } else if (s5 == "L") {
    redDotS5();
  }
  
  function greenDotS5() {
    var x5 = document.getElementById("steps").rows[1].cells;
    x5[5].innerHTML = "🟢";
  }
  
  function redDotS5() {
    var x5 = document.getElementById("steps").rows[1].cells;
    x5[5].innerHTML = "🔴";
  }
  
  //week6 meals engagement
  if (s6 == "H") {
    greenDotS6();
  } else if (s6 == "L") {
    redDotS6();
  }
  
  function greenDotS6() {
    var x6 = document.getElementById("steps").rows[1].cells;
    x6[6].innerHTML = "🟢";
  }
  
  function redDotS6() {
    var x6 = document.getElementById("steps").rows[1].cells;
    x6[6].innerHTML = "🔴";
  }
  
  //week7 meals engagement
  if (s7 == "H") {
    greenDotS7();
  } else if (s7 == "L") {
    redDotS7();
  }
  
  function greenDotS7() {
    var x7 = document.getElementById("steps").rows[1].cells;
    x7[7].innerHTML = "🟢";
  }
  
  function redDotS7() {
    var x7 = document.getElementById("steps").rows[1].cells;
    x7[7].innerHTML = "🔴";
  }
  
  //week8 overall engagement
  if (s8 == "H") {
    greenDotS8();
  } else if (s8 == "L") {
    redDotS8();
  }
  
  function greenDotS8() {
    var x8 = document.getElementById("steps").rows[1].cells;
    x8[8].innerHTML = "🟢";
  }
  
  function redDotS8() {
    var x8 = document.getElementById("steps").rows[1].cells;
    x8[8].innerHTML = "🔴";
  }
  
  
  //week9 overall engagement
  if (s9 == "H") {
    greenDotS9();
  } else if (s9 == "L") {
    redDotS9();
  }
  
  function greenDotS9() {
    var x9 = document.getElementById("steps").rows[1].cells;
    x9[9].innerHTML = "🟢";
  }
  
  function redDotS9() {
    var x9 = document.getElementById("steps").rows[1].cells;
    x9[9].innerHTML = "🔴";
  }
  
  
  //week10 overall engagement
  if (s10 == "H") {
    greenDotS10();
  } else if (s10 == "L") {
    redDotS10();
  }
  
  function greenDotS10() {
    var x10 = document.getElementById("steps").rows[1].cells;
    x10[10].innerHTML = "🟢";
  }
  
  function redDotS10() {
    var x10 = document.getElementById("steps").rows[1].cells;
    x10[10].innerHTML = "🔴";
  }
  
  
  
  //week11 overall engagement
  if (s11 == "H") {
    greenDotS11();
  } else if (s11 == "L") {
    redDotS11();
  }
  
  function greenDotS11() {
    var x11 = document.getElementById("steps").rows[1].cells;
    x11[11].innerHTML = "🟢";
  }
  
  function redDotS11() {
    var x11 = document.getElementById("steps").rows[1].cells;
    x11[11].innerHTML = "🔴";
  }
  
  
  //week12 overall engagement
  if (s12 == "H") {
    greenDotS12();
  } else if (s12 == "L") {
    redDotS12();
  }
  
  function greenDotS12() {
    var x12 = document.getElementById("steps").rows[1].cells;
    x12[12].innerHTML = "🟢";
  }
  
  function redDotS12() {
    var x12 = document.getElementById("steps").rows[1].cells;
    x12[12].innerHTML = "🔴";
  }
  
  
  //week13 overall engagement
  if (s11 == "H") {
    greenDotS13();
  } else if (s13 == "L") {
    redDotS13();
  }
  
  function greenDotS13() {
    var x13 = document.getElementById("steps").rows[1].cells;
    x13[13].innerHTML = "🟢";
  }
  
  function redDotS13() {
    var x13 = document.getElementById("steps").rows[1].cells;
    x13[13].innerHTML = "🔴";
  }
  
  
  //week14 overall engagement
  if (s14 == "H") {
    greenDotS14();
  } else if (s14 == "L") {
    redDotS14();
  }
  
  function greenDotS14() {
    var x14 = document.getElementById("steps").rows[1].cells;
    x14[14].innerHTML = "🟢";
  }
  
  function redDotS14() {
    var x14 = document.getElementById("steps").rows[1].cells;
    x14[14].innerHTML = "🔴";
  }
  
  
  
  var l1 = document.getElementById("learn").rows[2].cells.item(1).innerHTML;
  var l2 = document.getElementById("learn").rows[2].cells.item(2).innerHTML;
  var l3 = document.getElementById("learn").rows[2].cells.item(3).innerHTML;
  var l4 = document.getElementById("learn").rows[2].cells.item(4).innerHTML;
  var l5 = document.getElementById("learn").rows[2].cells.item(5).innerHTML;
  var l6 = document.getElementById("learn").rows[2].cells.item(6).innerHTML;
  var l7 = document.getElementById("learn").rows[2].cells.item(7).innerHTML;
  var l8 = document.getElementById("learn").rows[2].cells.item(8).innerHTML;
  var l9 = document.getElementById("learn").rows[2].cells.item(9).innerHTML;
  var l10 = document.getElementById("learn").rows[2].cells.item(10).innerHTML;
  var l11 = document.getElementById("learn").rows[2].cells.item(11).innerHTML;
  var l12 = document.getElementById("learn").rows[2].cells.item(12).innerHTML;
  var l13 = document.getElementById("learn").rows[2].cells.item(13).innerHTML;
  var l14 = document.getElementById("learn").rows[2].cells.item(14).innerHTML;
  var l15 = document.getElementById("learn").rows[2].cells.item(15).innerHTML;
  var l16 = document.getElementById("learn").rows[2].cells.item(16).innerHTML;
  var l17 = document.getElementById("learn").rows[2].cells.item(17).innerHTML;
  var l18 = document.getElementById("learn").rows[2].cells.item(18).innerHTML;
  var l19 = document.getElementById("learn").rows[2].cells.item(19).innerHTML;
  var l20 = document.getElementById("learn").rows[2].cells.item(20).innerHTML;
  var l21 = document.getElementById("learn").rows[2].cells.item(21).innerHTML;
  var l22 = document.getElementById("learn").rows[2].cells.item(22).innerHTML;
  var l23 = document.getElementById("learn").rows[2].cells.item(23).innerHTML;
  var l24 = document.getElementById("learn").rows[2].cells.item(24).innerHTML;
  var l25 = document.getElementById("learn").rows[2].cells.item(25).innerHTML;
  var l26 = document.getElementById("learn").rows[2].cells.item(26).innerHTML;
  var l27 = document.getElementById("learn").rows[2].cells.item(27).innerHTML;
  var l28 = document.getElementById("learn").rows[2].cells.item(28).innerHTML;
  var l29 = document.getElementById("learn").rows[2].cells.item(29).innerHTML;
  var l30 = document.getElementById("learn").rows[2].cells.item(30).innerHTML;
  var l31 = document.getElementById("learn").rows[2].cells.item(31).innerHTML;
  var l32 = document.getElementById("learn").rows[2].cells.item(32).innerHTML;
  var l33 = document.getElementById("learn").rows[2].cells.item(33).innerHTML;
  var l34 = document.getElementById("learn").rows[2].cells.item(34).innerHTML;
  var l35 = document.getElementById("learn").rows[2].cells.item(35).innerHTML;
  var l36 = document.getElementById("learn").rows[2].cells.item(36).innerHTML;
  var l37 = document.getElementById("learn").rows[2].cells.item(37).innerHTML;
  var l38 = document.getElementById("learn").rows[2].cells.item(38).innerHTML;
  var l39 = document.getElementById("learn").rows[2].cells.item(39).innerHTML;
  var l40 = document.getElementById("learn").rows[2].cells.item(40).innerHTML;
  var l41 = document.getElementById("learn").rows[2].cells.item(41).innerHTML;
  var l42 = document.getElementById("learn").rows[2].cells.item(42).innerHTML;
  var l43 = document.getElementById("learn").rows[2].cells.item(43).innerHTML;
  var l44 = document.getElementById("learn").rows[2].cells.item(44).innerHTML;
  var l45 = document.getElementById("learn").rows[2].cells.item(45).innerHTML;
  var l46 = document.getElementById("learn").rows[2].cells.item(46).innerHTML;
  var l47 = document.getElementById("learn").rows[2].cells.item(47).innerHTML;
  var l48 = document.getElementById("learn").rows[2].cells.item(48).innerHTML;
  var l49 = document.getElementById("learn").rows[2].cells.item(49).innerHTML;
  var l50 = document.getElementById("learn").rows[2].cells.item(50).innerHTML;
  var l51 = document.getElementById("learn").rows[2].cells.item(51).innerHTML;
  var l52 = document.getElementById("learn").rows[2].cells.item(52).innerHTML;
  
  
  
  //week1 engagement
  if (l1 == "H") {
    greenDotL1();
  } else if (l1 == "L") {
    redDotL1();
  }
  
  function greenDotL1() {
    var x1 = document.getElementById("learn").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotL1() {
    var x1 = document.getElementById("learn").rows[1].cells;
    x1[1].innerHTML = "🔴";
  }
  
  //week2 engagement
  if (l2 == "H") {
    greenDotL2();
  } else if (l2 == "L") {
    redDotL2();
  }
  
  function greenDotL2() {
    var x2 = document.getElementById("learn").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotL2() {
    var x2 = document.getElementById("learn").rows[1].cells;
    x2[2].innerHTML = "🔴";
  }
  
  
  //week3 engagement
  if (l3 == "H") {
    greenDotL3();
  } else if (l3 == "L") {
    redDotL3();
  }
  
  function greenDotL3() {
    var x3 = document.getElementById("learn").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotL3() {
    var x3 = document.getElementById("steps").rows[1].cells;
    x3[3].innerHTML = "🔴";
  }
  
  
  //week4 engagement
  if (l4 == "H") {
    greenDotL4();
  } else if (s4 == "L") {
    redDotL4();
  }
  
  function greenDotL4() {
    var x4 = document.getElementById("learn").rows[1].cells;
    x4[4].innerHTML = "🟢";
  }
  
  function redDotL4() {
    var x4 = document.getElementById("learn").rows[1].cells;
    x4[4].innerHTML = "🔴";
  }
  
  //week5 engagement
  if (l5 == "H") {
    greenDotL5();
  } else if (l5 == "L") {
    redDotL5();
  }
  
  function greenDotL5() {
    var x5 = document.getElementById("learn").rows[1].cells;
    x5[5].innerHTML = "🟢";
  }
  
  function redDotL5() {
    var x5 = document.getElementById("learn").rows[1].cells;
    x5[5].innerHTML = "🔴";
  }
  
  //week6 engagement
  if (l6 == "H") {
    greenDotL6();
  } else if (l6 == "L") {
    redDotL6();
  }
  
  function greenDotL6() {
    var x6 = document.getElementById("learn").rows[1].cells;
    x6[6].innerHTML = "🟢";
  }
  
  function redDotL6() {
    var x6 = document.getElementById("learn").rows[1].cells;
    x6[6].innerHTML = "🔴";
  }
  
  //week7 engagement
  if (l7 == "H") {
    greenDotL7();
  } else if (l7 == "L") {
    redDotL7();
  }
  
  function greenDotL7() {
    var x7 = document.getElementById("learn").rows[1].cells;
    x7[7].innerHTML = "🟢";
  }
  
  function redDotL7() {
    var x7 = document.getElementById("learn").rows[1].cells;
    x7[7].innerHTML = "🔴";
  }
  
  
  //week8 overall engagement
  if (l8 == "H") {
    greenDotL8();
  } else if (l8 == "L") {
    redDotL8();
  }
  
  function greenDotL8() {
    var x8 = document.getElementById("learn").rows[1].cells;
    x8[8].innerHTML = "🟢";
  }
  
  function redDotL8() {
    var x8 = document.getElementById("learn").rows[1].cells;
    x8[8].innerHTML = "🔴";
  }
  
  
  //week9 overall engagement
  if (l9 == "H") {
    greenDotL9();
  } else if (l9 == "L") {
    redDotL9();
  }
  
  function greenDotL9() {
    var x9 = document.getElementById("learn").rows[1].cells;
    x9[9].innerHTML = "🟢";
  }
  
  function redDotL9() {
    var x9 = document.getElementById("learn").rows[1].cells;
    x9[9].innerHTML = "🔴";
  }
  
  
  //week10 overall engagement
  if (l10 == "H") {
    greenDotL10();
  } else if (l10 == "L") {
    redDotL10();
  }
  
  function greenDotL10() {
    var x10 = document.getElementById("learn").rows[1].cells;
    x10[10].innerHTML = "🟢";
  }
  
  function redDotL10() {
    var x10 = document.getElementById("learn").rows[1].cells;
    x10[10].innerHTML = "🔴";
  }
  
  
  
  //week11 overall engagement
  if (l11 == "H") {
    greenDotL11();
  } else if (l11 == "L") {
    redDotL11();
  }
  
  function greenDotL11() {
    var x11 = document.getElementById("learn").rows[1].cells;
    x11[11].innerHTML = "🟢";
  }
  
  function redDotL11() {
    var x11 = document.getElementById("learn").rows[1].cells;
    x11[11].innerHTML = "🔴";
  }
  
  
  //week12 overall engagement
  if (l12 == "H") {
    greenDotS12();
  } else if (l12 == "L") {
    redDotL12();
  }
  
  function greenDotL12() {
    var x12 = document.getElementById("learn").rows[1].cells;
    x12[12].innerHTML = "🟢";
  }
  
  function redDotL12() {
    var x12 = document.getElementById("learn").rows[1].cells;
    x12[12].innerHTML = "🔴";
  }
  
  
  //week13 overall engagement
  if (l13 == "H") {
    greenDotL13();
  } else if (l13 == "L") {
    redDotL13();
  }
  
  function greenDotL13() {
    var x13 = document.getElementById("learn").rows[1].cells;
    x13[13].innerHTML = "🟢";
  }
  
  function redDotL13() {
    var x13 = document.getElementById("learn").rows[1].cells;
    x13[13].innerHTML = "🔴";
  }
  
  
  //week14 overall engagement
  if (l14 == "H") {
    greenDotL14();
  } else if (l14 == "L") {
    redDotL14();
  }
  
  function greenDotL14() {
    var x14 = document.getElementById("learn").rows[1].cells;
    x14[14].innerHTML = "🟢";
  }
  
  function redDotL14() {
    var x14 = document.getElementById("learn").rows[1].cells;
    x14[14].innerHTML = "🔴";
  }
  
  
  var i1 = document.getElementById("weigh").rows[2].cells.item(1).innerHTML;
  var i2 = document.getElementById("weigh").rows[2].cells.item(2).innerHTML;
  var i3 = document.getElementById("weigh").rows[2].cells.item(3).innerHTML;
  var i4 = document.getElementById("weigh").rows[2].cells.item(4).innerHTML;
  var i5 = document.getElementById("weigh").rows[2].cells.item(5).innerHTML;
  var i6 = document.getElementById("weigh").rows[2].cells.item(6).innerHTML;
  var i7 = document.getElementById("weigh").rows[2].cells.item(7).innerHTML;
  var i8 = document.getElementById("weigh").rows[2].cells.item(8).innerHTML;
  var i9 = document.getElementById("weigh").rows[2].cells.item(9).innerHTML;
  var i10 = document.getElementById("weigh").rows[2].cells.item(10).innerHTML;
  var i11 = document.getElementById("weigh").rows[2].cells.item(11).innerHTML;
  var i12 = document.getElementById("weigh").rows[2].cells.item(12).innerHTML;
  var i13 = document.getElementById("weigh").rows[2].cells.item(13).innerHTML;
  var i14 = document.getElementById("weigh").rows[2].cells.item(14).innerHTML;
  var i15 = document.getElementById("weigh").rows[2].cells.item(15).innerHTML;
  var i16 = document.getElementById("weigh").rows[2].cells.item(16).innerHTML;
  var i17 = document.getElementById("weigh").rows[2].cells.item(17).innerHTML;
  var i18 = document.getElementById("weigh").rows[2].cells.item(18).innerHTML;
  var i19 = document.getElementById("weigh").rows[2].cells.item(19).innerHTML;
  var i20 = document.getElementById("weigh").rows[2].cells.item(20).innerHTML;
  var i21 = document.getElementById("weigh").rows[2].cells.item(21).innerHTML;
  var i22 = document.getElementById("weigh").rows[2].cells.item(22).innerHTML;
  var i23 = document.getElementById("weigh").rows[2].cells.item(23).innerHTML;
  var i24 = document.getElementById("weigh").rows[2].cells.item(24).innerHTML;
  var i25 = document.getElementById("weigh").rows[2].cells.item(25).innerHTML;
  var i26 = document.getElementById("weigh").rows[2].cells.item(26).innerHTML;
  var i27 = document.getElementById("weigh").rows[2].cells.item(27).innerHTML;
  var i28 = document.getElementById("weigh").rows[2].cells.item(28).innerHTML;
  var i29 = document.getElementById("weigh").rows[2].cells.item(29).innerHTML;
  var i30 = document.getElementById("weigh").rows[2].cells.item(30).innerHTML;
  var i31 = document.getElementById("weigh").rows[2].cells.item(31).innerHTML;
  var i32 = document.getElementById("weigh").rows[2].cells.item(32).innerHTML;
  var i33 = document.getElementById("weigh").rows[2].cells.item(33).innerHTML;
  var i34 = document.getElementById("weigh").rows[2].cells.item(34).innerHTML;
  var i35 = document.getElementById("weigh").rows[2].cells.item(35).innerHTML;
  var i36 = document.getElementById("weigh").rows[2].cells.item(36).innerHTML;
  var i37 = document.getElementById("weigh").rows[2].cells.item(37).innerHTML;
  var i38 = document.getElementById("weigh").rows[2].cells.item(38).innerHTML;
  var i39 = document.getElementById("weigh").rows[2].cells.item(39).innerHTML;
  var i40 = document.getElementById("weigh").rows[2].cells.item(40).innerHTML;
  var i41 = document.getElementById("weigh").rows[2].cells.item(41).innerHTML;
  var i42 = document.getElementById("weigh").rows[2].cells.item(42).innerHTML;
  var i43 = document.getElementById("weigh").rows[2].cells.item(43).innerHTML;
  var i44 = document.getElementById("weigh").rows[2].cells.item(44).innerHTML;
  var i45 = document.getElementById("weigh").rows[2].cells.item(45).innerHTML;
  var i46 = document.getElementById("weigh").rows[2].cells.item(46).innerHTML;
  var i47 = document.getElementById("weigh").rows[2].cells.item(47).innerHTML;
  var i48 = document.getElementById("weigh").rows[2].cells.item(48).innerHTML;
  var i49 = document.getElementById("weigh").rows[2].cells.item(49).innerHTML;
  var i50 = document.getElementById("weigh").rows[2].cells.item(50).innerHTML;
  var i51 = document.getElementById("weigh").rows[2].cells.item(51).innerHTML;
  var i52 = document.getElementById("weigh").rows[2].cells.item(52).innerHTML;
  
  
  //week1 engagement
  if (i1 == "H") {
    greenDotI1();
  } else if (i1 == "L") {
    redDotI1();
  }
  
  function greenDotI1() {
    var x1 = document.getElementById("weigh").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotI1() {
    var x1 = document.getElementById("weigh").rows[1].cells;
    x1[1].innerHTML = "🔴";
  }
  
  //week2 engagement
  if (i2 == "H") {
    greenDotI2();
  } else if (i2 == "L") {
    redDotI2();
  }
  
  function greenDotI2() {
    var x2 = document.getElementById("weigh").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotI2() {
    var x2 = document.getElementById("weigh").rows[1].cells;
    x2[2].innerHTML = "🔴";
  }
  
  
  //week3 engagement
  if (i3 == "H") {
    greenDotI3();
  } else if (i3 == "L") {
    redDotI3();
  }
  
  function greenDotI3() {
    var x3 = document.getElementById("weigh").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotI3() {
    var x3 = document.getElementById("weigh").rows[1].cells;
    x3[3].innerHTML = "🔴";
  }
  
  
  //week4 engagement
  if (i4 == "H") {
    greenDotI4();
  } else if (i4 == "L") {
    redDotI4();
  }
  
  function greenDotI4() {
    var x4 = document.getElementById("weigh").rows[1].cells;
    x4[4].innerHTML = "🟢";
  }
  
  function redDotI4() {
    var x4 = document.getElementById("weigh").rows[1].cells;
    x4[4].innerHTML = "🔴";
  }
  
  //week5 engagement
  if (i5 == "H") {
    greenDotI5();
  } else if (i5 == "L") {
    redDotI5();
  }
  
  function greenDotI5() {
    var x5 = document.getElementById("weigh").rows[1].cells;
    x5[5].innerHTML = "🟢";
  }
  
  function redDotI5() {
    var x5 = document.getElementById("weigh").rows[1].cells;
    x5[5].innerHTML = "🔴";
  }
  
  //week6 engagement
  if (i6 == "H") {
    greenDotI6();
  } else if (i6 == "L") {
    redDotI6();
  }
  
  function greenDotI6() {
    var x6 = document.getElementById("weigh").rows[1].cells;
    x6[6].innerHTML = "🟢";
  }
  
  function redDotI6() {
    var x6 = document.getElementById("weigh").rows[1].cells;
    x6[6].innerHTML = "🔴";
  }
  
  //week7 engagement
  if (i7 == "H") {
    greenDotI7();
  } else if (i7 == "L") {
    redDotI7();
  }
  
  function greenDotI7() {
    var x7 = document.getElementById("weigh").rows[1].cells;
    x7[7].innerHTML = "🟢";
  }
  
  function redDotI7() {
    var x7 = document.getElementById("weigh").rows[1].cells;
    x7[7].innerHTML = "🔴";
  }
  
  
  //week8 overall engagement
  if (i8 == "H") {
    greenDotI8();
  } else if (i8 == "L") {
    redDotI8();
  }
  
  function greenDotI8() {
    var x8 = document.getElementById("weigh").rows[1].cells;
    x8[8].innerHTML = "🟢";
  }
  
  function redDotI8() {
    var x8 = document.getElementById("weigh").rows[1].cells;
    x8[8].innerHTML = "🔴";
  }
  
  
  //week9 overall engagement
  if (i9 == "H") {
    greenDotI9();
  } else if (i9 == "L") {
    redDotI9();
  }
  
  function greenDotI9() {
    var x9 = document.getElementById("weigh").rows[1].cells;
    x9[9].innerHTML = "🟢";
  }
  
  function redDotI9() {
    var x9 = document.getElementById("weigh").rows[1].cells;
    x9[9].innerHTML = "🔴";
  }
  
  
  //week10 overall engagement
  if (i10 == "H") {
    greenDotI10();
  } else if (i10 == "L") {
    redDotI10();
  }
  
  function greenDotI10() {
    var x10 = document.getElementById("weigh").rows[1].cells;
    x10[10].innerHTML = "🟢";
  }
  
  function redDotI10() {
    var x10 = document.getElementById("weigh").rows[1].cells;
    x10[10].innerHTML = "🔴";
  }
  
  
  
  //week11 overall engagement
  if (i11 == "H") {
    greenDotI11();
  } else if (i11 == "L") {
    redDotI11();
  }
  
  function greenDotI11() {
    var x11 = document.getElementById("weigh").rows[1].cells;
    x11[11].innerHTML = "🟢";
  }
  
  function redDotI11() {
    var x11 = document.getElementById("weigh").rows[1].cells;
    x11[11].innerHTML = "🔴";
  }
  
  
  //week12 overall engagement
  if (i12 == "H") {
    greenDotI12();
  } else if (i12 == "L") {
    redDotI12();
  }
  
  function greenDotI12() {
    var x12 = document.getElementById("weigh").rows[1].cells;
    x12[12].innerHTML = "🟢";
  }
  
  function redDotI12() {
    var x12 = document.getElementById("weigh").rows[1].cells;
    x12[12].innerHTML = "🔴";
  }
  
  
  //week13 overall engagement
  if (i13 == "H") {
    greenDotI13();
  } else if (i13 == "L") {
    redDotI13();
  }
  
  function greenDotI13() {
    var x13 = document.getElementById("weigh").rows[1].cells;
    x13[13].innerHTML = "🟢";
  }
  
  function redDotI13() {
    var x13 = document.getElementById("weigh").rows[1].cells;
    x13[13].innerHTML = "🔴";
  }
  
  
  //week14 overall engagement
  if (i14 == "H") {
    greenDotI14();
  } else if (i14 == "L") {
    redDotI14();
  }
  
  function greenDotI14() {
    var x14 = document.getElementById("weigh").rows[1].cells;
    x14[14].innerHTML = "🟢";
  }
  
  function redDotI14() {
    var x14 = document.getElementById("weigh").rows[1].cells;
    x14[14].innerHTML = "🔴";
  }
  
  
  var e1 = document.getElementById("exerc").rows[2].cells.item(1).innerHTML;
  var e2 = document.getElementById("exerc").rows[2].cells.item(2).innerHTML;
  var e3 = document.getElementById("exerc").rows[2].cells.item(3).innerHTML;
  var e4 = document.getElementById("exerc").rows[2].cells.item(4).innerHTML;
  var e5 = document.getElementById("exerc").rows[2].cells.item(5).innerHTML;
  var e6 = document.getElementById("exerc").rows[2].cells.item(6).innerHTML;
  var e7 = document.getElementById("exerc").rows[2].cells.item(7).innerHTML;
  var e8 = document.getElementById("exerc").rows[2].cells.item(8).innerHTML;
  var e9 = document.getElementById("exerc").rows[2].cells.item(9).innerHTML;
  var e10 = document.getElementById("exerc").rows[2].cells.item(10).innerHTML;
  var e11 = document.getElementById("exerc").rows[2].cells.item(11).innerHTML;
  var e12 = document.getElementById("exerc").rows[2].cells.item(12).innerHTML;
  var e13 = document.getElementById("exerc").rows[2].cells.item(13).innerHTML;
  var e14 = document.getElementById("exerc").rows[2].cells.item(14).innerHTML;
  var e15 = document.getElementById("exerc").rows[2].cells.item(15).innerHTML;
  var e16 = document.getElementById("exerc").rows[2].cells.item(16).innerHTML;
  var e17 = document.getElementById("exerc").rows[2].cells.item(17).innerHTML;
  var e18 = document.getElementById("exerc").rows[2].cells.item(18).innerHTML;
  var e19 = document.getElementById("exerc").rows[2].cells.item(19).innerHTML;
  var e20 = document.getElementById("exerc").rows[2].cells.item(20).innerHTML;
  var e21 = document.getElementById("exerc").rows[2].cells.item(21).innerHTML;
  var e22 = document.getElementById("exerc").rows[2].cells.item(22).innerHTML;
  var e23 = document.getElementById("exerc").rows[2].cells.item(23).innerHTML;
  var e24 = document.getElementById("exerc").rows[2].cells.item(24).innerHTML;
  var e25 = document.getElementById("exerc").rows[2].cells.item(25).innerHTML;
  var e26 = document.getElementById("exerc").rows[2].cells.item(26).innerHTML;
  var e27 = document.getElementById("exerc").rows[2].cells.item(27).innerHTML;
  var e28 = document.getElementById("exerc").rows[2].cells.item(28).innerHTML;
  var e29 = document.getElementById("exerc").rows[2].cells.item(29).innerHTML;
  var e30 = document.getElementById("exerc").rows[2].cells.item(30).innerHTML;
  var e31 = document.getElementById("exerc").rows[2].cells.item(31).innerHTML;
  var e32 = document.getElementById("exerc").rows[2].cells.item(32).innerHTML;
  var e33 = document.getElementById("exerc").rows[2].cells.item(33).innerHTML;
  var e34 = document.getElementById("exerc").rows[2].cells.item(34).innerHTML;
  var e35 = document.getElementById("exerc").rows[2].cells.item(35).innerHTML;
  var e36 = document.getElementById("exerc").rows[2].cells.item(36).innerHTML;
  var e37 = document.getElementById("exerc").rows[2].cells.item(37).innerHTML;
  var e38 = document.getElementById("exerc").rows[2].cells.item(38).innerHTML;
  var e39 = document.getElementById("exerc").rows[2].cells.item(39).innerHTML;
  var e40 = document.getElementById("exerc").rows[2].cells.item(40).innerHTML;
  var e41 = document.getElementById("exerc").rows[2].cells.item(41).innerHTML;
  var e42 = document.getElementById("exerc").rows[2].cells.item(42).innerHTML;
  var e43 = document.getElementById("exerc").rows[2].cells.item(43).innerHTML;
  var e44 = document.getElementById("exerc").rows[2].cells.item(44).innerHTML;
  var e45 = document.getElementById("exerc").rows[2].cells.item(45).innerHTML;
  var e46 = document.getElementById("exerc").rows[2].cells.item(46).innerHTML;
  var e47 = document.getElementById("exerc").rows[2].cells.item(47).innerHTML;
  var e48 = document.getElementById("exerc").rows[2].cells.item(48).innerHTML;
  var e49 = document.getElementById("exerc").rows[2].cells.item(49).innerHTML;
  var e50 = document.getElementById("exerc").rows[2].cells.item(50).innerHTML;
  var e51 = document.getElementById("exerc").rows[2].cells.item(51).innerHTML;
  var e52 = document.getElementById("exerc").rows[2].cells.item(52).innerHTML;
  
  
  //week1 engagement
  if (e1 == "H") {
    greenDotE1();
  } else if (e1 == "L") {
    redDotE1();
  }
  
  function greenDotE1() {
    var x1 = document.getElementById("exerc").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotE1() {
    var x1 = document.getElementById("exerc").rows[1].cells;
    x1[1].innerHTML = "🔴";
  }
  
  //week2 engagement
  if (e2 == "H") {
    greenDotE2();
  } else if (e2 == "L") {
    redDotE2();
  }
  
  function greenDotE2() {
    var x2 = document.getElementById("exerc").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotE2() {
    var x2 = document.getElementById("exerc").rows[1].cells;
    x2[2].innerHTML = "🔴";
  }
  
  
  //week3 engagement
  if (e3 == "H") {
    greenDotE3();
  } else if (e3 == "L") {
    redDotE3();
  }
  
  function greenDotE3() {
    var x3 = document.getElementById("exerc").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotE3() {
    var x3 = document.getElementById("exerc").rows[1].cells;
    x3[3].innerHTML = "🔴";
  }
  
  
  //week4 engagement
  if (e4 == "H") {
    greenDotE4();
  } else if (e4 == "L") {
    redDotE4();
  }
  
  function greenDotE4() {
    var x4 = document.getElementById("exerc").rows[1].cells;
    x4[4].innerHTML = "🟢";
  }
  
  function redDotE4() {
    var x4 = document.getElementById("exerc").rows[1].cells;
    x4[4].innerHTML = "🔴";
  }
  
  //week5 engagement
  if (e5 == "H") {
    greenDotE5();
  } else if (e5 == "L") {
    redDotE5();
  }
  
  function greenDotE5() {
    var x5 = document.getElementById("exerc").rows[1].cells;
    x5[5].innerHTML = "🟢";
  }
  
  function redDotE5() {
    var x5 = document.getElementById("exerc").rows[1].cells;
    x5[5].innerHTML = "🔴";
  }
  
  //week6 engagement
  if (e6 == "H") {
    greenDotE6();
  } else if (e6 == "L") {
    redDotE6();
  }
  
  function greenDotE6() {
    var x6 = document.getElementById("exerc").rows[1].cells;
    x6[6].innerHTML = "🟢";
  }
  
  function redDotE6() {
    var x6 = document.getElementById("exerc").rows[1].cells;
    x6[6].innerHTML = "🔴";
  }
  
  //week7 engagement
  if (e7 == "H") {
    greenDotE7();
  } else if (e7 == "L") {
    redDotE7();
  }
  
  function greenDotE7() {
    var x7 = document.getElementById("exerc").rows[1].cells;
    x7[7].innerHTML = "🟢";
  }
  
  function redDotE7() {
    var x7 = document.getElementById("exerc").rows[1].cells;
    x7[7].innerHTML = "🔴";
  }
  
  //week8 overall engagement
  if (e8 == "H") {
    greenDotE8();
  } else if (e8 == "L") {
    redDotE8();
  }
  
  function greenDotE8() {
    var x8 = document.getElementById("exerc").rows[1].cells;
    x8[8].innerHTML = "🟢";
  }
  
  function redDotE8() {
    var x8 = document.getElementById("exerc").rows[1].cells;
    x8[8].innerHTML = "🔴";
  }
  
  
  //week9 overall engagement
  if (e9 == "H") {
    greenDotE9();
  } else if (e9 == "L") {
    redDotE9();
  }
  
  function greenDotE9() {
    var x9 = document.getElementById("exerc").rows[1].cells;
    x9[9].innerHTML = "🟢";
  }
  
  function redDotE9() {
    var x9 = document.getElementById("exerc").rows[1].cells;
    x9[9].innerHTML = "🔴";
  }
  
  
  //week10 overall engagement
  if (e10 == "H") {
    greenDotE10();
  } else if (e10 == "L") {
    redDotE10();
  }
  
  function greenDotE10() {
    var x10 = document.getElementById("exerc").rows[1].cells;
    x10[10].innerHTML = "🟢";
  }
  
  function redDotE10() {
    var x10 = document.getElementById("exerc").rows[1].cells;
    x10[10].innerHTML = "🔴";
  }
  
  
  
  //week11 overall engagement
  if (e11 == "H") {
    greenDotE11();
  } else if (e11 == "L") {
    redDotE11();
  }
  
  function greenDotE11() {
    var x11 = document.getElementById("exerc").rows[1].cells;
    x11[11].innerHTML = "🟢";
  }
  
  function redDotE11() {
    var x11 = document.getElementById("exerc").rows[1].cells;
    x11[11].innerHTML = "🔴";
  }
  
  
  //week12 overall engagement
  if (e12 == "H") {
    greenDotE12();
  } else if (e12 == "L") {
    redDotE12();
  }
  
  function greenDotE12() {
    var x12 = document.getElementById("exerc").rows[1].cells;
    x12[12].innerHTML = "🟢";
  }
  
  function redDotE12() {
    var x12 = document.getElementById("exerc").rows[1].cells;
    x12[12].innerHTML = "🔴";
  }
  
  
  //week13 overall engagement
  if (e13 == "H") {
    greenDotE13();
  } else if (e13 == "L") {
    redDotE13();
  }
  
  function greenDotE13() {
    var x13 = document.getElementById("exerc").rows[1].cells;
    x13[13].innerHTML = "🟢";
  }
  
  function redDotE13() {
    var x13 = document.getElementById("exerc").rows[1].cells;
    x13[13].innerHTML = "🔴";
  }
  
  
  //week14 overall engagement
  if (e14 == "H") {
    greenDotE14();
  } else if (e14 == "L") {
    redDotE14();
  }
  
  function greenDotE14() {
    var x14 = document.getElementById("exerc").rows[1].cells;
    x14[14].innerHTML = "🟢";
  }
  
  function redDotE14() {
    var x14 = document.getElementById("exerc").rows[1].cells;
    x14[14].innerHTML = "🔴";
  }
  
  
  
  var j1 = document.getElementById("messg").rows[2].cells.item(1).innerHTML;
  var j2 = document.getElementById("messg").rows[2].cells.item(2).innerHTML;
  var j3 = document.getElementById("messg").rows[2].cells.item(3).innerHTML;
  var j4 = document.getElementById("messg").rows[2].cells.item(4).innerHTML;
  var j5 = document.getElementById("messg").rows[2].cells.item(5).innerHTML;
  var j6 = document.getElementById("messg").rows[2].cells.item(6).innerHTML;
  var j7 = document.getElementById("messg").rows[2].cells.item(7).innerHTML;
  var j8 = document.getElementById("messg").rows[2].cells.item(8).innerHTML;
  var j9 = document.getElementById("messg").rows[2].cells.item(9).innerHTML;
  var j10 = document.getElementById("messg").rows[2].cells.item(10).innerHTML;
  var j11 = document.getElementById("messg").rows[2].cells.item(11).innerHTML;
  var j12 = document.getElementById("messg").rows[2].cells.item(12).innerHTML;
  var j13 = document.getElementById("messg").rows[2].cells.item(13).innerHTML;
  var j14 = document.getElementById("messg").rows[2].cells.item(14).innerHTML;
  var j15 = document.getElementById("messg").rows[2].cells.item(15).innerHTML;
  var j16 = document.getElementById("messg").rows[2].cells.item(16).innerHTML;
  var j17 = document.getElementById("messg").rows[2].cells.item(17).innerHTML;
  var j18 = document.getElementById("messg").rows[2].cells.item(18).innerHTML;
  var j19 = document.getElementById("messg").rows[2].cells.item(19).innerHTML;
  var j20 = document.getElementById("messg").rows[2].cells.item(20).innerHTML;
  var j21 = document.getElementById("messg").rows[2].cells.item(21).innerHTML;
  var j22 = document.getElementById("messg").rows[2].cells.item(22).innerHTML;
  var j23 = document.getElementById("messg").rows[2].cells.item(23).innerHTML;
  var j24 = document.getElementById("messg").rows[2].cells.item(24).innerHTML;
  var j25 = document.getElementById("messg").rows[2].cells.item(25).innerHTML;
  var j26 = document.getElementById("messg").rows[2].cells.item(26).innerHTML;
  var j27 = document.getElementById("messg").rows[2].cells.item(27).innerHTML;
  var j28 = document.getElementById("messg").rows[2].cells.item(28).innerHTML;
  var j29 = document.getElementById("messg").rows[2].cells.item(29).innerHTML;
  var j30 = document.getElementById("messg").rows[2].cells.item(30).innerHTML;
  var j31 = document.getElementById("messg").rows[2].cells.item(31).innerHTML;
  var j32 = document.getElementById("messg").rows[2].cells.item(32).innerHTML;
  var j33 = document.getElementById("messg").rows[2].cells.item(33).innerHTML;
  var j34 = document.getElementById("messg").rows[2].cells.item(34).innerHTML;
  var j35 = document.getElementById("messg").rows[2].cells.item(35).innerHTML;
  var j36 = document.getElementById("messg").rows[2].cells.item(36).innerHTML;
  var j37 = document.getElementById("messg").rows[2].cells.item(37).innerHTML;
  var j38 = document.getElementById("messg").rows[2].cells.item(38).innerHTML;
  var j39 = document.getElementById("messg").rows[2].cells.item(39).innerHTML;
  var j40 = document.getElementById("messg").rows[2].cells.item(40).innerHTML;
  var j41 = document.getElementById("messg").rows[2].cells.item(41).innerHTML;
  var j42 = document.getElementById("messg").rows[2].cells.item(42).innerHTML;
  var j43 = document.getElementById("messg").rows[2].cells.item(43).innerHTML;
  var j44 = document.getElementById("messg").rows[2].cells.item(44).innerHTML;
  var j45 = document.getElementById("messg").rows[2].cells.item(45).innerHTML;
  var j46 = document.getElementById("messg").rows[2].cells.item(46).innerHTML;
  var j47 = document.getElementById("messg").rows[2].cells.item(47).innerHTML;
  var j48 = document.getElementById("messg").rows[2].cells.item(48).innerHTML;
  var j49 = document.getElementById("messg").rows[2].cells.item(49).innerHTML;
  var j50 = document.getElementById("messg").rows[2].cells.item(50).innerHTML;
  var j51 = document.getElementById("messg").rows[2].cells.item(51).innerHTML;
  var j52 = document.getElementById("messg").rows[2].cells.item(52).innerHTML;
  
  
  //week1 engagement
  if (j1 == "H") {
    greenDotJ1();
  } else if (j1 == "L") {
    redDotJ1();
  }
  
  function greenDotJ1() {
    var x1 = document.getElementById("messg").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotJ1() {
    var x1 = document.getElementById("messg").rows[1].cells;
    x1[1].innerHTML = "🔴";
  }
  
  //week2 engagement
  if (j2 == "H") {
    greenDotJ2();
  } else if (j2 == "L") {
    redDotJ2();
  }
  
  function greenDotJ2() {
    var x2 = document.getElementById("messg").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotJ2() {
    var x2 = document.getElementById("messg").rows[1].cells;
    x2[2].innerHTML = "🔴";
  }
  
  
  //week3 engagement
  if (j3 == "H") {
    greenDotJ3();
  } else if (j3 == "L") {
    redDotJ3();
  }
  
  function greenDotJ3() {
    var x3 = document.getElementById("messg").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotJ3() {
    var x3 = document.getElementById("messg").rows[1].cells;
    x3[3].innerHTML = "🔴";
  }
  
  
  //week4 engagement
  if (j4 == "H") {
    greenDotJ4();
  } else if (j4 == "L") {
    redDotJ4();
  }
  
  function greenDotJ4() {
    var x4 = document.getElementById("messg").rows[1].cells;
    x4[4].innerHTML = "🟢";
  }
  
  function redDotJ4() {
    var x4 = document.getElementById("messg").rows[1].cells;
    x4[4].innerHTML = "🔴";
  }
  
  //week5 engagement
  if (j5 == "H") {
    greenDotJ5();
  } else if (e5 == "L") {
    redDotJ5();
  }
  
  function greenDotJ5() {
    var x5 = document.getElementById("messg").rows[1].cells;
    x5[5].innerHTML = "🟢";
  }
  
  function redDotJ5() {
    var x5 = document.getElementById("messg").rows[1].cells;
    x5[5].innerHTML = "🔴";
  }
  
  //week6 engagement
  if (j6 == "H") {
    greenDotJ6();
  } else if (j6 == "L") {
    redDotJ6();
  }
  
  function greenDotJ6() {
    var x6 = document.getElementById("messg").rows[1].cells;
    x6[6].innerHTML = "🟢";
  }
  
  function redDotJ6() {
    var x6 = document.getElementById("messg").rows[1].cells;
    x6[6].innerHTML = "🔴";
  }
  
  //week7 engagement
  if (j7 == "H") {
    greenDotJ7();
  } else if (j7 == "L") {
    redDotJ7();
  }
  
  function greenDotJ7() {
    var x7 = document.getElementById("messg").rows[1].cells;
    x7[7].innerHTML = "🟢";
  }
  
  function redDotJ7() {
    var x7 = document.getElementById("messg").rows[1].cells;
    x7[7].innerHTML = "🔴";
  }
  
  
  //week8 overall engagement
  if (j8 == "H") {
    greenDotJ8();
  } else if (j8 == "L") {
    redDotJ8();
  }
  
  function greenDotJ8() {
    var x8 = document.getElementById("messg").rows[1].cells;
    x8[8].innerHTML = "🟢";
  }
  
  function redDotJ8() {
    var x8 = document.getElementById("messg").rows[1].cells;
    x8[8].innerHTML = "🔴";
  }
  
  
  //week9 overall engagement
  if (j9 == "H") {
    greenDotJ9();
  } else if (j9 == "L") {
    redDotJ9();
  }
  
  function greenDotJ9() {
    var x9 = document.getElementById("messg").rows[1].cells;
    x9[9].innerHTML = "🟢";
  }
  
  function redDotJ9() {
    var x9 = document.getElementById("messg").rows[1].cells;
    x9[9].innerHTML = "🔴";
  }
  
  
  //week10 overall engagement
  if (j10 == "H") {
    greenDotJ10();
  } else if (j10 == "L") {
    redDotJ10();
  }
  
  function greenDotJ10() {
    var x10 = document.getElementById("messg").rows[1].cells;
    x10[10].innerHTML = "🟢";
  }
  
  function redDotJ10() {
    var x10 = document.getElementById("messg").rows[1].cells;
    x10[10].innerHTML = "🔴";
  }
  
  
  
  //week11 overall engagement
  if (j11 == "H") {
    greenDotJ11();
  } else if (j11 == "L") {
    redDotJ11();
  }
  
  function greenDotJ11() {
    var x11 = document.getElementById("messg").rows[1].cells;
    x11[11].innerHTML = "🟢";
  }
  
  function redDotJ11() {
    var x11 = document.getElementById("messg").rows[1].cells;
    x11[11].innerHTML = "🔴";
  }
  
  
  //week12 overall engagement
  if (j12 == "H") {
    greenDotJ12();
  } else if (j12 == "L") {
    redDotJ12();
  }
  
  function greenDotJ12() {
    var x12 = document.getElementById("messg").rows[1].cells;
    x12[12].innerHTML = "🟢";
  }
  
  function redDotJ12() {
    var x12 = document.getElementById("messg").rows[1].cells;
    x12[12].innerHTML = "🔴";
  }
  
  
  //week13 overall engagement
  if (j13 == "H") {
    greenDotJ13();
  } else if (j13 == "L") {
    redDotJ13();
  }
  
  function greenDotJ13() {
    var x13 = document.getElementById("messg").rows[1].cells;
    x13[13].innerHTML = "🟢";
  }
  
  function redDotJ13() {
    var x13 = document.getElementById("messg").rows[1].cells;
    x13[13].innerHTML = "🔴";
  }
  
  
  //week14 overall engagement
  if (j14 == "H") {
    greenDotJ14();
  } else if (j14 == "L") {
    redDotJ14();
  }
  
  function greenDotJ14() {
    var x14 = document.getElementById("messg").rows[1].cells;
    x14[14].innerHTML = "🟢";
  }
  
  function redDotJ14() {
    var x14 = document.getElementById("messg").rows[1].cells;
    x14[14].innerHTML = "🔴";
  }
  
  
  var g1 = document.getElementById("chat").rows[2].cells.item(1).innerHTML;
  var g2 = document.getElementById("chat").rows[2].cells.item(2).innerHTML;
  var g3 = document.getElementById("chat").rows[2].cells.item(3).innerHTML;
  var g4 = document.getElementById("chat").rows[2].cells.item(4).innerHTML;
  var g5 = document.getElementById("chat").rows[2].cells.item(5).innerHTML;
  var g6 = document.getElementById("chat").rows[2].cells.item(6).innerHTML;
  var g7 = document.getElementById("chat").rows[2].cells.item(7).innerHTML;
  var g8 = document.getElementById("chat").rows[2].cells.item(8).innerHTML;
  var g9 = document.getElementById("chat").rows[2].cells.item(9).innerHTML;
  var g10 = document.getElementById("chat").rows[2].cells.item(10).innerHTML;
  var g11 = document.getElementById("chat").rows[2].cells.item(11).innerHTML;
  var g12 = document.getElementById("chat").rows[2].cells.item(12).innerHTML;
  var g13 = document.getElementById("chat").rows[2].cells.item(13).innerHTML;
  var g14 = document.getElementById("chat").rows[2].cells.item(14).innerHTML;
  var g15 = document.getElementById("chat").rows[2].cells.item(15).innerHTML;
  var g16 = document.getElementById("chat").rows[2].cells.item(16).innerHTML;
  var g17 = document.getElementById("chat").rows[2].cells.item(17).innerHTML;
  var g18 = document.getElementById("chat").rows[2].cells.item(18).innerHTML;
  var g19 = document.getElementById("chat").rows[2].cells.item(19).innerHTML;
  var g20 = document.getElementById("chat").rows[2].cells.item(20).innerHTML;
  var g21 = document.getElementById("chat").rows[2].cells.item(21).innerHTML;
  var g22 = document.getElementById("chat").rows[2].cells.item(22).innerHTML;
  var g23 = document.getElementById("chat").rows[2].cells.item(23).innerHTML;
  var g24 = document.getElementById("chat").rows[2].cells.item(24).innerHTML;
  var g25 = document.getElementById("chat").rows[2].cells.item(25).innerHTML;
  var g26 = document.getElementById("chat").rows[2].cells.item(26).innerHTML;
  var g27 = document.getElementById("chat").rows[2].cells.item(27).innerHTML;
  var g28 = document.getElementById("chat").rows[2].cells.item(28).innerHTML;
  var g29 = document.getElementById("chat").rows[2].cells.item(29).innerHTML;
  var g30 = document.getElementById("chat").rows[2].cells.item(30).innerHTML;
  var g31 = document.getElementById("chat").rows[2].cells.item(31).innerHTML;
  var g32 = document.getElementById("chat").rows[2].cells.item(32).innerHTML;
  var g33 = document.getElementById("chat").rows[2].cells.item(33).innerHTML;
  var g34 = document.getElementById("chat").rows[2].cells.item(34).innerHTML;
  var g35 = document.getElementById("chat").rows[2].cells.item(35).innerHTML;
  var g36 = document.getElementById("chat").rows[2].cells.item(36).innerHTML;
  var g37 = document.getElementById("chat").rows[2].cells.item(37).innerHTML;
  var g38 = document.getElementById("chat").rows[2].cells.item(38).innerHTML;
  var g39 = document.getElementById("chat").rows[2].cells.item(39).innerHTML;
  var g40 = document.getElementById("chat").rows[2].cells.item(40).innerHTML;
  var g41 = document.getElementById("chat").rows[2].cells.item(41).innerHTML;
  var g42 = document.getElementById("chat").rows[2].cells.item(42).innerHTML;
  var g43 = document.getElementById("chat").rows[2].cells.item(43).innerHTML;
  var g44 = document.getElementById("chat").rows[2].cells.item(44).innerHTML;
  var g45 = document.getElementById("chat").rows[2].cells.item(45).innerHTML;
  var g46 = document.getElementById("chat").rows[2].cells.item(46).innerHTML;
  var g47 = document.getElementById("chat").rows[2].cells.item(47).innerHTML;
  var g48 = document.getElementById("chat").rows[2].cells.item(48).innerHTML;
  var g49 = document.getElementById("chat").rows[2].cells.item(49).innerHTML;
  var g50 = document.getElementById("chat").rows[2].cells.item(50).innerHTML;
  var g51 = document.getElementById("chat").rows[2].cells.item(51).innerHTML;
  var g52 = document.getElementById("chat").rows[2].cells.item(52).innerHTML;
  
  
  
  //week1 engagement
  if (g1 == "H") {
    greenDotG1();
  } else if (g1 == "L") {
    redDotG1();
  }
  
  function greenDotG1() {
    var x1 = document.getElementById("chat").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotG1() {
    var x1 = document.getElementById("chat").rows[1].cells;
    x1[1].innerHTML = "🔴";
  }
  
  //week2 engagement
  if (g2 == "H") {
    greenDotG2();
  } else if (g2 == "L") {
    redDotG2();
  }
  
  function greenDotG2() {
    var x2 = document.getElementById("chat").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotG2() {
    var x2 = document.getElementById("chat").rows[1].cells;
    x2[2].innerHTML = "🔴";
  }
  
  
  //week3 engagement
  if (g3 == "H") {
    greenDotG3();
  } else if (g3 == "L") {
    redDotG3();
  }
  
  function greenDotG3() {
    var x3 = document.getElementById("chat").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotG3() {
    var x3 = document.getElementById("chat").rows[1].cells;
    x3[3].innerHTML = "🔴";
  }
  
  
  //week4 engagement
  if (g4 == "H") {
    greenDotG4();
  } else if (g4 == "L") {
    redDotG4();
  }
  
  function greenDotG4() {
    var x4 = document.getElementById("chat").rows[1].cells;
    x4[4].innerHTML = "🟢";
  }
  
  function redDotG4() {
    var x4 = document.getElementById("chat").rows[1].cells;
    x4[4].innerHTML = "🔴";
  }
  
  //week5 engagement
  if (g5 == "H") {
    greenDotG5();
  } else if (g5 == "L") {
    redDotG5();
  }
  
  function greenDotG5() {
    var x5 = document.getElementById("chat").rows[1].cells;
    x5[5].innerHTML = "🟢";
  }
  
  function redDotG5() {
    var x5 = document.getElementById("chat").rows[1].cells;
    x5[5].innerHTML = "🔴";
  }
  
  //week6 engagement
  if (g6 == "H") {
    greenDotG6();
  } else if (g6 == "L") {
    redDotG6();
  }
  
  function greenDotG6() {
    var x6 = document.getElementById("chat").rows[1].cells;
    x6[6].innerHTML = "🟢";
  }
  
  function redDotG6() {
    var x6 = document.getElementById("chat").rows[1].cells;
    x6[6].innerHTML = "🔴";
  }
  
  //week7 engagement
  if (g7 == "H") {
    greenDotG7();
  } else if (g7 == "L") {
    redDotG7();
  }
  
  function greenDotG7() {
    var x7 = document.getElementById("chat").rows[1].cells;
    x7[7].innerHTML = "🟢";
  }
  
  function redDotG7() {
    var x7 = document.getElementById("chat").rows[1].cells;
    x7[7].innerHTML = "🔴";
  }
  
  //week8 overall engagement
  if (g8 == "H") {
    greenDotG8();
  } else if (g8 == "L") {
    redDotG8();
  }
  
  function greenDotG8() {
    var x8 = document.getElementById("chat").rows[1].cells;
    x8[8].innerHTML = "🟢";
  }
  
  function redDotG8() {
    var x8 = document.getElementById("chat").rows[1].cells;
    x8[8].innerHTML = "🔴";
  }
  
  
  //week9 overall engagement
  if (g9 == "H") {
    greenDotG9();
  } else if (g9 == "L") {
    redDotG9();
  }
  
  function greenDotG9() {
    var x9 = document.getElementById("chat").rows[1].cells;
    x9[9].innerHTML = "🟢";
  }
  
  function redDotG9() {
    var x9 = document.getElementById("chat").rows[1].cells;
    x9[9].innerHTML = "🔴";
  }
  
  
  //week10 overall engagement
  if (g10 == "H") {
    greenDotG10();
  } else if (g10 == "L") {
    redDotG10();
  }
  
  function greenDotG10() {
    var x10 = document.getElementById("chat").rows[1].cells;
    x10[10].innerHTML = "🟢";
  }
  
  function redDotG10() {
    var x10 = document.getElementById("chat").rows[1].cells;
    x10[10].innerHTML = "🔴";
  }
  
  
  
  //week11 overall engagement
  if (g11 == "H") {
    greenDotG11();
  } else if (g11 == "L") {
    redDotG11();
  }
  
  function greenDotG11() {
    var x11 = document.getElementById("chat").rows[1].cells;
    x11[11].innerHTML = "🟢";
  }
  
  function redDotG11() {
    var x11 = document.getElementById("chat").rows[1].cells;
    x11[11].innerHTML = "🔴";
  }
  
  
  //week12 overall engagement
  if (g12 == "H") {
    greenDotG12();
  } else if (g12 == "L") {
    redDotG12();
  }
  
  function greenDotG12() {
    var x12 = document.getElementById("chat").rows[1].cells;
    x12[12].innerHTML = "🟢";
  }
  
  function redDotG12() {
    var x12 = document.getElementById("chat").rows[1].cells;
    x12[12].innerHTML = "🔴";
  }
  
  
  //week13 overall engagement
  if (g13 == "H") {
    greenDotG13();
  } else if (g13 == "L") {
    redDotG13();
  }
  
  function greenDotG13() {
    var x13 = document.getElementById("chat").rows[1].cells;
    x13[13].innerHTML = "🟢";
  }
  
  function redDotG13() {
    var x13 = document.getElementById("chat").rows[1].cells;
    x13[13].innerHTML = "🔴";
  }
  
  
  //week14 overall engagement
  if (g14 == "H") {
    greenDotG14();
  } else if (g14 == "L") {
    redDotG14();
  }
  
  function greenDotG14() {
    var x14 = document.getElementById("chat").rows[1].cells;
    x14[14].innerHTML = "🟢";
  }
  
  function redDotG14() {
    var x14 = document.getElementById("chat").rows[1].cells;
    x14[14].innerHTML = "🔴";
  }