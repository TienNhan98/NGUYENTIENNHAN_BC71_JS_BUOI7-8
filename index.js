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
  // alert(123);
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
    if (number > 0) {
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

//Bài 7. Sắp Xếp Tăng Dần
domID("btn_7").onclick = function () {
  for (var index = 0; index < arrNumber.length; index++) {
    for (var index2 = 0; index2 < arrNumber.length - 1; index2++) {
      if (arrNumber[index2] > arrNumber[index2 + 1]) {
        var thayDoi = arrNumber[index2];
        arrNumber[index2] = arrNumber[index2 + 1];
        arrNumber[index2 + 1] = thayDoi;
      }
    }
  }
  domID("result_7").innerHTML = ` Sau khi sắp xếp: ${arrNumber}`;
};

//Bài 8. Tìm Số Nguyên Tố Đầu Tiên
domID("btn_8").onclick = function () {
  var arrSoNguyenTo = [];
  for (var index = 0; index < arrNumber.length; index++) {
    var number = arrNumber[index];
    var checkSNT = true;
    if (number <= 1) {
      checkSNT = false;
    } else {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          checkSNT = false;
          break;
        }
      }
    }
    if (checkSNT) {
      arrSoNguyenTo.push(number);
    }
    console.log("🚀 ~ arrSoNguyenTo:", arrSoNguyenTo);
  }
  domID("result_8").innerHTML = ` Số Nguyên Tố Đầu Tiên:${arrSoNguyenTo[0]}`;
};

//Bài 9. Đếm Số Nguyên
domID("btn_9").onclick = function () {
  var tongSoNguyen = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    var number = arrNumber[index];
    if (Number.isInteger(number)) {
      tongSoNguyen++;
    }
  }
  domID("result_9").innerHTML = `Tổng số nguyên: ${tongSoNguyen}`;
};

//Bài 10. So Sánh Số Âm và Số Dương
domID("btn_10").onclick = function () {
  var tongSoAm = 0;
  var tongSoDuong = 0;
  var ketQua = "";
  for (var index = 0; index < arrNumber.length; index++) {
    var number = arrNumber[index];
    if (number < 0) {
      tongSoAm++;
    } else if (number > 0) {
      tongSoDuong++;
    }
  }
  if (tongSoAm === tongSoDuong) {
    ketQua = "Số Âm = Số Dương";
  } else if (tongSoAm > tongSoDuong) {
    ketQua = "Số Âm > Số Dương";
  } else {
    ketQua = "Số Dương > Số Âm";
  }
  domID("result_10").innerHTML = `So Sánh: ${ketQua}`;
};
