//case 1

var sampleInput1 = "1, 3, 7, 2, 4, 1";
var sampleInput2 = "111, 18, 5, 1";

var arrOfNums = sampleInput2.split(', ');

console.log("input: " + sampleInput2);
output(arrOfNums);

function output(arrOfNums) {
  var outputString = arrOfNums[0] + ' ';

  for (var i=1; i<arrOfNums.length; i++) {
    var firstNum = arrOfNums[i-1],
        secondNum = arrOfNums[i],
        tempSecondNum = '',
        firstNumberLength = firstNum.length,
        secondNumberLength = secondNum.length,
        trailingDigits = ''; //starts as empty in the case of single digits

    if (firstNumberLength > 1) {
      for (var p=0; p<firstNumberLength-secondNumberLength; p++) {
        trailingDigits += firstNum.charAt(p);
      }
    }

    if (parseInt(secondNum) < parseInt(firstNum)) {
      tempSecondNum = trailingDigits + secondNum;
    
      if (parseInt(tempSecondNum) < parseInt(firstNum)) {
        if (trailingDigits == '') //if empty, set to 0 so that it can be incremented
          trailingDigits = '0';
        var newTrailingDigits = parseInt(trailingDigits) + 1;
        trailingDigits = '' + newTrailingDigits;
        arrOfNums[i] = trailingDigits + secondNum;
      }
      else
        arrOfNums[i] = tempSecondNum;
    }

    if (i == arrOfNums.length-1)
      outputString += arrOfNums[i];
    else
      outputString += arrOfNums[i] + ' ';
  }

  console.log("output: " + outputString);
}