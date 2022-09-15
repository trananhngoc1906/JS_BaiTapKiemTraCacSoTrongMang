function domID(id) {
  return document.getElementById(id);
}

//danh sach so nguyen
var array = [];

domID("addArray").addEventListener("click", function () {
  //nhan gia tri user nhap vao input
  //parseInt ep kieu ve so nguyen
  array.push(parseInt(domID("nhapArray").value));
  domID("hienThiArray").innerHTML = array;
});

//danh sach so thuc cau 9

domID("addSoThuc").addEventListener("click", function () {
  array.push(domID("inputAddSoThuc").value);

  //hien thi danh sach moi concat cung voi array
  domID("listNew").innerHTML = array;
});

/**
 * Cau 1
 */

domID("kiemTraCau1").addEventListener("click", function () {
  var sumSoDuong = 0;

  //duyet mang
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    //neu > 0 thi + vao sumSoDuong
    if (value > 0) {
      sumSoDuong += value;
    }
  }

  //hien thi
  domID("hienThiCau1").innerHTML = sumSoDuong;
});

/**
 * Cau 2
 */

domID("kiemTraCau2").addEventListener("click", function () {
  var soLuongSoDuong = 0;

  //duyet mang
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value > 0) {
      soLuongSoDuong++;
    }
  }

  //hien thi
  domID("hienThiCau2").innerHTML = soLuongSoDuong;
});

/**
 * Cau 3
 */

domID("kiemTraCau3").addEventListener("click", function () {
  //dat gia tri index 0 la min
  var min = array[0];

  //duyet mang
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value < min) {
      min = value;
    }
  }

  //hien thi
  domID("hienThiCau3").innerHTML = min;
});

/**
 * Cau 4:
 */
domID("kiemTraCau4").addEventListener("click", function () {
  var arraySoDuong = [];
  var ketQua = "";
  //duyet mang array
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value > 0) {
      arraySoDuong.push(value);
    }
  }
  //dat gia tri index 0 cua arraySoDuong la min
  var min = arraySoDuong[0];
  //duyet mang arraySoDuong de tim so duong nho nhat
  for (var i = 0; i <= arraySoDuong.length; i++) {
    var valueSoDuong = arraySoDuong[i];
    if (valueSoDuong < min) {
      min = valueSoDuong;
    }
  }

  //lập điều kiện nếu arraySoDuong chứa giá trị thì lengh sẽ lớn hơn 0, ngược lại là không có
  if (arraySoDuong.length > 0) {
    ketQua = min;
  } else {
    ketQua = "Không có số dương nào";
  }

  //hien thi

  domID("hienThiCau4").innerHTML = ketQua;
});

/**
 * Cau 5
 */
domID("kiemTraCau5").addEventListener("click", function () {
  var arraySoChan = [];
  var ketQua = -1;
  //duyet mang
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value % 2 === 0) {
      arraySoChan.push(value);
    }
  }

  if (arraySoChan.length > 0) {
    ketQua = arraySoChan[arraySoChan.length - 1];
  }

  //hien thi
  domID("hienThiCau5").innerHTML = ketQua;
});
/**
 * Cau 6
 */
domID("kiemTraCau6").addEventListener("click", function () {
  //tao function doi 2 vi tri
  function arraymove(arr, fromIndex, toIndex) {
    var firstIndex = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, firstIndex);

    // luc nay trong mang moi so sau se bi giam 1 index do co so truoc chen vao
    var secondIndex = arr[toIndex - 1];
    arr.splice(toIndex - 1, 1);
    arr.splice(fromIndex, 0, secondIndex);

    return arr;
  }
  var viTriDau = domID("viTriDau").value * 1;
  var viTriSau = domID("viTriSau").value * 1;
  var ketQua = arraymove(array, viTriDau, viTriSau);

  //hien thi
  domID("hienThiCau6").innerHTML = ketQua;
});

/**
 * Cau 7
 */
domID("kiemTraCau7").addEventListener("click", function () {
  //loop so sanh 2 so
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        //hoan vi
        var empty = array[i];
        array[i] = array[j];
        array[j] = empty;
      }
    }
  }

  //hien thi
  domID("hienThiCau7").innerHTML = array;
});
/**
 * Cau 8
 */
domID("kiemTraCau8").addEventListener("click", function () {
  var newArr = [];
  var ketQua = -1;

  for (var i = 0; i < array.length; i++) {
    //ep kieu gia tri ve so nguyen bang parseInt
    var test = checkSNT(parseInt(array[i]));

    if (test == true) {
      newArr.push(array[i]);
    }
  }

  //ham checkSNT
  function checkSNT(number) {
    let check = true;

    if (number < 2) {
      check = false;
    }
    for (var n = 2; n <= Math.sqrt(number); n++) {
      if (number % n === 0) {
        check = false;
        break;
      }
    }
    return check;
  }

  if (newArr.length > 0) {
    ketQua = newArr[0];
  }
  // hienthi
  domID("hienThiCau8").innerHTML = ketQua;
});

/**
 * Cau 9
 */

domID("kiemTraCau9").addEventListener("click", function () {
  var soDemSoNguyen = 0;
  //loop kiem tra gia tri co phai so nguyen khong
  for (var i = 0; i < array.length; i++) {
    //ep value ve so thuc
    var value = parseFloat(array[i]);

    //kiem tra gia tri co phai so nguyen khong
    var isInterger = Number.isInteger(value);

    if (isInterger == true) {
      soDemSoNguyen++;
    }
  }

  //hien thi

  domID("hienThiCau9").innerHTML = soDemSoNguyen;
});
/**
 * Cau 10
 */

domID("kiemTraCau10").addEventListener("click", function () {
  let soLuongSoDuong = 0;
  let soLuongSoAm = 0;
  let ketQua = "";

  //duyet mang array
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value > 0) {
      soLuongSoDuong++;
    } else if (value < 0) {
      soLuongSoAm++;
    }
  }
  //so sanh so duong va so am cho ra ket qua
  if (soLuongSoDuong > soLuongSoAm) {
    ketQua =
      "Số dương nhiều hơn với số lượng: " +
      soLuongSoDuong +
      " / " +
      soLuongSoAm;
  } else if (soLuongSoAm > soLuongSoDuong) {
    ketQua =
      "Số âm nhiều hơn với số lượng: " + soLuongSoAm + " / " + soLuongSoDuong;
  } else {
    ketQua = "Bằng nhau";
  }

  //hien thi

  domID("hienThiCau10").innerHTML = ketQua;
});
