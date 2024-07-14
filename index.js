var arrNumber = [];

function domID(id) {
  return document.getElementById(id);
}

function btnAddNumber() {
  //   alert(123);
  var addNumber = document.getElementById("addNumber").value * 1;
  arrNumber.push(addNumber);
  domID("resultNumber").innerHTML = arrNumber;
}
// console.log("🚀 ~ btnAddNumber ~ arrNumber:", arrNumber);

// Bài tập 1: Tính Tổng Số Dương
domID("btn_1").onclick = function () {
  //   alert(123);
  var tongSoDuong = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    var number = arrNumber[index];
    if (number >= 0) {
      tongSoDuong += number;
    }
  }
  document.getElementById(
    "result_1"
  ).innerHTML = ` Tổng Số Dương:${tongSoDuong}`;
};

//Bài Tập 2: Đếm Số Dương
domID("btn_2").onclick = function () {
  //   alert(123);
  var demSoDuong = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    var number = arrNumber[index];
    if (number >= 0) {
      demSoDuong++;
    }
  }
  domID("result_2").innerHTML = ` Số Dương:${demSoDuong}`;
};

// Bài 3. Tìm Số Nhỏ Nhất
domID("btn_3").onclick = function () {
  //   alert(123);
  var soNhoNhat = arrNumber[0];
  for (var index = 1; index < arrNumber.length; index++) {
    var number = arrNumber[index];
    if (soNhoNhat > number) {
      soNhoNhat = number;
    }
  }
  domID("result_3").innerHTML = ` Số Nhỏ Nhất: ${soNhoNhat}`;
};

// Bài 4. Tìm Số Dương Nhỏ Nhất

domID("btn_4").onclick = function () {
  var arrSoDuong = [];
  for (var index = 0; index < arrNumber.length; index++) {
    var number = arrNumber[index];
    if (number > 0) {
      arrSoDuong.push(number);
    }
  }
  var soDuongNhoNhat = arrSoDuong[0];
  for (var index2 = 1; index2 < arrSoDuong.length; index2++) {
    var number2 = arrSoDuong[index2];
    if (soDuongNhoNhat > number2) {
      soDuongNhoNhat = number2;
    }
  }
  domID("result_4").innerHTML = ` Số Dương Nhỏ Nhất: ${soDuongNhoNhat}`;
};

// Bài 5. Tìm Số Chẳn Cuối Cùng
domID("btn_5").onclick = function () {
  var arrSoChan = [];
  for (var index = 0; index < arrNumber.length; index++) {
    var number = arrNumber[index];
    if (number % 2 === 0) {
      arrSoChan.push(number);
    }
  }
  var soChanCuoiCung = 0;
  for (var index2 = 0; index2 < arrSoChan.length; index2++) {
    soChanCuoiCung = arrSoChan[index2];
  }
  domID("result_5").innerHTML = ` Số Chẳn Cuối Cùng: ${soChanCuoiCung}`;
};

//<!-- Bài 6. Đổi Chổ -->
domID("btn_6").onclick = function () {
  var viTri1 = domID("numberBt6_1").value * 1;
  var viTri2 = domID("numberBt6_2").value * 1;
  for (index = 0; index < arrNumber.length; index++) {
    if (index === viTri1) {
      var doiCho = arrNumber[viTri1];
      arrNumber[viTri1] = arrNumber[viTri2];
      arrNumber[viTri2] = doiCho;
    }
  }
  domID("result_6").innerHTML = ` Sau khi đổi chổ: ${arrNumber}`;
};
