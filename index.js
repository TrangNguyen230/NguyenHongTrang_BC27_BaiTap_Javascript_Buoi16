//================================= Bài 1 =======================================
function minNumb() {
  // B1: Đặt biến sum tổng các số nguyên dương
  var sum = 0;

  // B2: tính toán
  // Sử dụng vòng lặp để tính toán
  for (var i = 1; i < 10000; i++) {
    sum += i;
    // Lặp lại phép cộng cho đến khi sum > 10000 thì dừng
    if (sum > 10000) {
      break;
    }
  }

  // B3: Hiển thị kết quả
  var result = document.getElementById("result");
  result.style.display = "block";
  result.innerHTML = `Số nguyên dương nhỏ nhất là: ${i}`;
}

//================================== Bài 2 ====================================
function sum() {
  // B1: DOM giá trị nhập
  var xValue = +document.getElementById("inputX").value;
  var nValue = +document.getElementById("inputN").value;

  // B2: tính toán
  var sum = 0;
  for (var i = 1; i <= nValue; i++) {
    sum += xValue ** i;
  }

  // B3: Hiển thị kết quả
  var result = document.getElementById("sumResult");
  result.style.display = "block";
  result.innerHTML = `Tổng các số mũ là: ${sum}`;
}

//================================== Bài 3 ====================================
function sumFactorial() {
  // B1: DOM giá trị nhập
  var factorialValue = +document.getElementById("inputFactorial").value;

  //B2: tính toán
  var factorial = 1;
  for (var i = 1; i <= factorialValue; i++) {
    factorial *= i;
    console.log(factorial);
  }

  // B3: Hiển thị kết quả
  var result = document.getElementById("factorialResult");
  result.style.display = "block";
  result.innerHTML = `Giai thừa là: ${factorial}`;
}

//================================== Bài 4 ====================================
function createDiv() {
  // B1: DOM
  var divBox = document.getElementById("divBox");

  // B2: tạo div sử dụng vòng lặp và if
  for (var i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      var div = document.createElement("div");
      var node = document.createTextNode(`Div lẻ ${i}`);
      div.appendChild(node);
      div.style.backgroundColor = "blue";
      div.style.color = "white";
      divBox.appendChild(div);
    } else {
      var div = document.createElement("div");
      var node = document.createTextNode(`Div chẵn ${i}`);
      div.appendChild(node);
      div.style.backgroundColor = "red";
      div.style.color = "white";
      divBox.appendChild(div);
    }
  }
}

//================================== Bài 5 ====================================
function getPrimeNumb() {
  // B1: DOM giá trị nhập
  var n = +document.getElementById("inputPrimeNumb").value;
  var result = document.getElementById("primeNumbResult");

  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      result.style.display = "block";
      result.innerHTML += i + " ";
    }
  }
}

function isPrime(x) {
  if (x < 2) {
    return false;
  }

  for (var j = 2; j <= Math.sqrt(x); j++) {
    if (x % j === 0) {
      return false;
    }
  }
  return true;
}
