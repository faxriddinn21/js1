// brgin-1 

// let a = +prompt("a tomonini kiriting: ");
// let b = +prompt("b tomonini kiriting: ");

// let S = a * b;
// let P = 2 * (a + b);

// console.log("To'g'ri to'rtburchakning yuzasi:", S);
// console.log("To'g'ri to'rtburchakning perimetri:", P);

// begin-2

// let d = +prompt("Aylananing diametrini kiriting: ");
// let pi = 3.14;

// let L = pi * d;
// let r = d / 2;
// let S = pi * r ** 2;

// console.log("Aylananing uzunligi:", L);
// console.log("Aylananing yuzasi:", S);

// begin-3

// let a = +prompt("kubning yon tomonini kiriting: ");

// let V = a ^ 3;
// let S = 6 * a ** 2

// console.log("kubning hajmi:", V);
// console.log("kubning tola sirti:", S);

// begin-4

// let a = +prompt("paralapepetning tomonlarini kiriting: ");
// let b = +prompt("paralapepetning tomonlarini kiriting: ");
// let c = +prompt("paralapepetning tomonlarini kiriting: ");

// let V = a * b * c;
// let S = 2 * (a * b + b * c + a * c);

// console.log("paralapepetning hajmi:", V);
// console.log("paralapepetning tola sirti:", S);

// begin-5

// let a = +prompt("sonning orta arifmetigini kiriting: ");
// let b = +(prompt("arifmetikni kiriting: ");

// let M = (a + b)/2;

// console.log("sonning orta arifmetigi aniq landi:", M);

// begin-8

// let L = +prompt("Aylananing uzunligini kiriting: ");

// let pi = 3.14;
// let R = 2 * pi * L;
// let S = pi * R ** 2;

// console.log("aylananing radiusi:", R);
// console.log("aylananing yuzasi:", S);

// begin-10

// let A = +prompt("A sonini kiriting:");
// let B = +prompt("B sonini kiriting:");
// let C = +prompt("C sonini kiriting:");

// let son = A;
// A = B;
// B = C;
// C = son;

// console.log("Yangi A qiymati: " + A);
// console.log("Yangi B qiymati: " + B);
// console.log("Yangi C qiymati: " + C);

// begin-11

// let x = +prompt("x ni kiriting: ");

// let y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;

// console.log(y);


// begin-13

// let Tf = +prompt("Tf ni kiriting: ");

// let Tc = (Tf - 32) * 5/9;

// console.log(Tc);

// begin-14

// let X = +prompt("Shokoladning og'irligini kiriting (kg):");
// let A = +prompt("Shokoladning narxini kiriting (so'm):");
// let Y = +prompt("Konfetning og'irligini kiriting (kg):");
// let B = +prompt("Konfetning narxini kiriting (so'm):");

// let narxShokoladKg = A / X; 
// let narxKonfetKg = B / Y; 

// console.log("1 kg shokolad", narxShokoladKg, "so'm.");
// console.log("1 kg konfet", narxKonfetKg, "so'm.");


// begin-15

// let X = +prompt("X kg ni kiriting:");
// let A = +prompt("A so'mni kiriting:");
// let Y = +prompt("Y kg ni kiriting:");
// let B = +prompt("B so'mni kiriting:");

// let natija = X * A + Y * B;

// console.log("Abdulaziz jami", natija, "so'm savdo qildi.");


// integr-1

// // Foydalanuvchidan uch xonali sonni olish
// let uchXonaliSon = parseInt(prompt("Uch xonali sonni kiriting:"));

// // Birliklar xonasidagi raqamni aniqlash
// let birliklarRaqami = uchXonaliSon % 10;

// // O'nliklar xonasidagi raqamni aniqlash
// let onliklarRaqami = Math.floor((uchXonaliSon % 100) / 10);

// // Natijani chiqarish
// console.log("Birliklar xonasidagi raqam:", birliklarRaqami);
// console.log("O'nliklar xonasidagi raqam:", onliklarRaqami);

// integr-7

// let N = +prompt("secoundni kiriting: ");

// let minut = N / 60;
// console.log("kun boshidan boshlab:", minut );

// integr-8

// let N = +prompt("skondni kiriting: ");

// let hour = N / 3600;
// console.log("kun boshidan boshlab:", hour);

// integr-9

let sekundlar = parseInt(prompt("Sekundlarni kiriting:"));


let kun = Math.floor(sekundlar / 86400); 
let minut = Math.floor((sekundlar % 86400) / 60);
let qolganSekundlar = sekundlar % 60;


console.log("Kunlar:", kun);
console.log("Minutlar:", minut);
console.log("Qolgan sekundlar:", qolganSekundlar);
