// Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
// let a = prompt("Nhap vao so a: ");
// let b = prompt("Nhap vao so b: ");
// function cal(a, b){
//     if (a % b === 0){
//         console.log("a chia het cho b")
//     }
//     else{
//         console.log("a khong chia het cho b")
//     }
// }
// cal(a,b);

// Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// let a = prompt("Nhap vao so tuoi: ");
// function checkTuoi(a){
//     if (a < 16){
//         console.log("Ban khong du tuoi")
//     }
//     else{
//         console.log("Du tuoi")
//     }
// }
// checkTuoi(a)

// Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// let a = prompt("Nhap vao so a: ");
// function checkA(){
//     if(a>0){
//         console.log("So nay lon hon 0")
//     }
//     if(a<0){
//         console.log("So nay nho hon 0")
//     }
//     if (a == 0){
//         console.log("Day la so 0")
//     }
// }
// checkA();
// Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let a = prompt("Nhap vao so a: ");
// let b = prompt("Nhap vao so b: ");
// let c = prompt("Nhap vao so c: ");
// function checkmax(a,b,c){
//   let max = a;
//     if( b > max){
//         max = b;
//     }
//     if(c > max ){
//         max = c;
//     }
//
//     return max;
// }
// result=checkmax(a, b, c);
// console.log(checkmax(a, b, c));


// Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// let a = +prompt("Nhập vào điểm hệ số 1: ")
// let b = +prompt("Nhập vào điểm hệ số 2: ")
// let c = +prompt("Nhập vào điểm hệ số 3: ")
// function cal(a,b,c){
//     a = a * 1;
//     b = b * 2;
//     c = c * 3;
//     result = (a + b + c)/6
//     return result;
// }
// cal(a,b,c);
//
// if (result > 8){
//     alert("Học sinh giỏi")
// }if (result > 6 && result < 8){
//     alert("Học sinh tiên tiến")
// }
// if (result >= 5 && result < 6){
//     alert("Học sinh trung bình")
// }
// if (result >0 && result < 5){
//     alert("Học sinh kém")
// }
// Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// let doanhSo = +prompt("Nhập vào doanh số");
// let mocDoanhSo1 = 1000;
// let mocDoanhSo2 = 5000;
// let mocDoanhSo3 = 10000;
// let tiLe1 = 0.05;
// let tiLe2 = 0.1;
// let tiLe3 = 0.15;
// let tiLe4 = 0.2;
// let hoaHong = 0;
// tinhHoaHong(doanhSo);
// function tinhHoaHong(doanhSo) {
//     if (doanhSo < mocDoanhSo1) {
//         hoaHong = doanhSo * tiLe1;
//     }
//     else if (doanhSo < mocDoanhSo2) {
//         hoaHong = mocDoanhSo1 * tiLe1 + (doanhSo - mocDoanhSo1) * tiLe2;
//     }
//     else if (doanhSo < mocDoanhSo3) {
//         hoaHong = mocDoanhSo1 * tiLe1 + (mocDoanhSo2 - mocDoanhSo1) * tiLe2 + (doanhSo - mocDoanhSo2) * tiLe3;
//     }
//     else  {
//         hoaHong = mocDoanhSo1 * tiLe1 + (mocDoanhSo2 - mocDoanhSo1) * tiLe2 + (mocDoanhSo3 - mocDoanhSo2) * tiLe3 + (doanhSo - mocDoanhSo3) * tiLe4;
//     }
//     alert(`Hoa hồng nhận được cho doanh số ${doanhSo} là: ${hoaHong}`);
// }