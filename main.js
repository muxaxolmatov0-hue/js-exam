// 1-masala sonning juft yoki toq son ekanligini aniqlovchi dastur yozing

// let son = +prompt("son kiriting");

// if (son % 2 === 0) {
//   console.log("Bu juft son");
// } else {
//   console.log("Bu toq son");
// }

//=============================================================================================================================================================

// 2-masala foydalanuvchidan 3-xonalik son oling ular ichida eng kattasi qaysi honada ekanligi aniqlovchi dastur yozing va consolega chiqaring

// let son = +prompt("3 xonali son kiriting");

// let birliklar = son % 10;
// let onliklar = Math.floor((son % 100) / 10);
// let yuzliklar = Math.floor(son / 100);

// if (yuzliklar >= onliklar && yuzliklar >= birliklar) {
//   console.log("Eng katta raqam yuzlar xonasida:", yuzliklar);
// } else if (onliklar >= yuzliklar && onliklar >= birliklar) {
//   console.log("Eng katta raqam onlar xonasida:", onliklar);
// } else {
//   console.log("Eng katta raqam birliklar xonasida:", birliklar);
// }

//===========================================================================================================================================================

//3-maslaa sonning ishorasini aniqlovchi dastur yozing bunda console.log musbat manfiy yoki nol degan stringlar qaytarsin.

// let son = +prompt("son kiriting");

// if (son > 0) {
//   console.log("musbat son");
// } else if (son < 0) {
//   console.log("manfiy son");
// } else {
//   console.log("son 0 ga teng");
// }

//===========================================================================================================================================================
//4-masala   3-xonalik son kiritilsa uni sozlarda ifodalovchi dastur yozing.

// let son = +prompt("3 xonali son kiriting");

// let yuzliklar = Math.floor(son / 100);
// let onliklar = Math.floor((son % 100) / 10);
// let birliklar = son % 10;

// let all = "";

// switch (yuzliklar) {
//   case 1:
//     all += "bir yuz";
//     break;
//   case 2:
//     all += "ikki yuz";
//     break;
//   case 3:
//     all += "uch yuz";
//     break;
//   case 4:
//     all += "to'rt yuz";
//     break;
//   case 5:
//     all += "besh yuz";
//     break;
//   case 6:
//     all += "olti yuz";
//     break;
//   case 7:
//     all += "yetti yuz";
//     break;
//   case 8:
//     all += "sakkiz yuz";
//     break;
//   case 9:
//     all += "to'qiz yuz";
//     break;
// }

// switch (onliklar) {
//   case 1:
//     all += "o'n";
//     break;
//   case 2:
//     all += "yigirma";
//     break;
//   case 3:
//     all += "o'ttiz";
//     break;
//   case 4:
//     all += "qiriq";
//     break;
//   case 5:
//     all += "ellik";
//     break;
//   case 6:
//     all += "oltimish";
//     break;
//   case 7:
//     all += "yetmish";
//     break;
//   case 8:
//     all += "sakson";
//     break;
//   case 9:
//     all += "to'qson";
//     break;
// }

// switch (birliklar) {
//   case 1:
//     all += "bir";
//     break;
//   case 2:
//     all += "ikki";
//     break;
//   case 3:
//     all += "uch";
//     break;
//   case 4:
//     all += "to'rt";
//     break;
//   case 5:
//     all += "besh";
//     break;
//   case 6:
//     all += "olti";
//     break;
//   case 7:
//     all += "yetti";
//     break;
//   case 8:
//     all += "sakkiz";
//     break;
//   case 9:
//     all += "to'qqiz";
//     break;
// }

// console.log(all);

//==============================================================================================================================================================

// 5-masala kabisa yilini aniqlovchi dastur yozing

// let year = +prompt("yilingizni kiriting");
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(year + " - Kabisa yili");
// } else {
//   console.log(year + " - Oddiy yil");
// }

//==========================================================================================================================================================================

// 6-masala  foydalanuvchi 2ta son kiritadi ulardan eng kichigini qaytaruvchi dastur yozing bunda Math dan foydalanmang  budna || && operatorlaridan foydalaning

// let son1 = +prompt("son kiriting");
// let son2 = +prompt("2 - son kiriting");

// let small = son1;

// if (son2 < son1) {
//   small = son2;
// }
// console.log("kichik");

//============================================================================================================================================================================

// 7-savol let const var kalit sozlarini bir birdan farqini yozib qoldiring

// let ozgaruvchi bu usul zamonaviy usul bolib qiymatini ozgartirib qayta elon qilish mumkin. ishlatish uchun eng yaxshi variant

// var ozgaruvchi qiymatlarni oladi bundan kop dasturchilar foydalanilmaydi kam dasturchilar ishlatishi mumkin va bu eski usul hisoblandi . ishlatmagan maqul hisoblanadi eng yaxshi variant let !

//const o'zgarmas qiymatlar uchun const ishlatiladi .
