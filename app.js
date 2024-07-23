// console.log("Merhaba Dünya")
// // alert("Merhaba")
// document.write("merhaba")
// // html içinde bir etikete id ile ulaşmak
// document.getElementById("kadır").innerHTML="Merhaba kadır"
// document.getElementById("yusuf").innerHTML="merhaba yusuf"
// document.getElementById("oguz").innerHTML="merhaba oguz"



// const a=5
// const b=3
// console.log(a+b)
// document.write(a+b)
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// //String= metin number=sayı boolen=true,false
// console.log(5<3)
// console.log(4<6)
// console.log("yu"+"suf")
//  function topla(sayi1,sayi2) {
//  return sayi1 + sayi2  
// }

// console.log(topla(3,2))


//sayı işlemleri
const sayi1 = document.getElementById("s1");
const sayi2 = document.getElementById("s2");
const btn = document.getElementById("btn");
const show = document.getElementById("show");
const cikar = document.getElementById("minus");
const carpma = document.getElementById("carpma");

//buttona tıklandığında fonksiyon çalışacak
btn.onclick = function(){


    const toplam = Number(sayi1.value)+Number(sayi2.value);//value değer demektir.
    //sayıların değerini aldık topladık toplam "a atma yaptık.
    show.innerHTML=toplam //toplamı div içinde yazdır.
}
//çıkarma fonksiyonu.
cikar.onclick = function(){
    const cikar = Number(sayi1.value)-Number(sayi2.value);
    show.innerHTML=cikar
}
//çarpma fonksiyonu
carpma.onclick = function(){
    const carp = Number(sayi1.value)*Number(sayi2.value);
    show.innerHTML=carp
}
bolme.onclick = function(){

    const bol = Number(sayi1.value)/Number(sayi2.value);
    show.innerHTML=bolme
} 
//çıkarma fonksiyoınu

const not = document.getElementById("not")

if(not.value >= 50){
    console.log("notunuz:" + not + " geçtiniz ")




} else {
console.log("notunuz:" + not +" kaldınız ")

}