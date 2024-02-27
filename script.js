
/*let veri;
let ogrenci = {
    adi: "Ahmet",
    soyAdi: "Yilmaz",
    age: 37,
    sinif: 10
}

veri = ogrenci;
veri = ogrenci.adi;
veri = ogrenci.age;



console.log(veri);
console.log(typeof ogrenci)
*/

//let ogrenciler=["Ahmet", "Mehmet", "Hasan", "Ali", "Ayşe"];

// for (let i=0; i<ogrenciler.length; i++){
//     console.log(ogrenciler[i])
// };

// ogrenciler.forEach(function(item){
//     console.log(item);
// });

// let students=[
//     {Adi:"Eylül", Sinifi: 10, Dersler:["Matematik", "Fizik", "Kimya", "Biyoloji"]},
//     {Adi:"Ekim", Sinifi: 11, Dersler:["Türkçe", "Tarih", "İngilizce",]},
//     {Adi:"Bahar", Sinifi: 12, Dersler:["Matematik", "Türkçe",]},
//     {Adi:"Kasim", Sinifi: 9, Dersler:["Sosyoloji", "Fizik", "Felsefe", "Biyoloji",]},
//     {Adi:"Hazan", Sinifi: 9, Dersler:["Matematik", "Sosyoloji", "Felsefe", "Tarih", ]}
// ];

// for (let i=0; i<students.length; i++){
//     console.log(`index: ${i} value: ${students[i].Dersler[1]}`);
// }

// let veri = students.map(function(item){
//     return item.Adi + ": " + item.Dersler;
// });

// console.log(veri);

// function merhaba(){
//     console.log("Merhaba")
// }

// merhaba();
// merhaba();
// merhaba();

// function ogrenci(firstName,lastName,grade){
//     console.log(`Adi: ${firstName} Soyadi: ${lastName} Sinifi: ${grade}`);
// }

// ogrenci("Ayşe", "Yilmaz", 10)

/************************************************************************************/

let ogrenciler = [
    {isim: "Eylül", soyisim: "Yilmaz", sinif: 1, dersler: ["Türkçe", "Matematik", "Sosyal Bilgiler", "Resim"]},

    {isim: "Ekim", soyisim: "Yigit", sinif: 2, dersler: ["Türkçe", "Matematik", "İngilizce", "Müzik"]},

    {isim: "Hazan", soyisim: "Aslan", sinif: 3, dersler: ["Türkçe", "Matematik", "Sosyal Bilgiler", "Müzik"]},

    {isim: "Sema", soyisim: "Mavi", sinif: 4, dersler: ["Türkçe", "Matematik", "Fen Bilimleri", "İngilizce"]},

    {isim: "Çetin", soyisim: "Ceviz", sinif: 5, dersler: ["Türkçe", "Matematik", "Sosyal Bilgiler", "Fen Bilimleri"]},

    {isim: "Berra", soyisim: "Dönmez", sinif: 1, dersler: ["Türkçe", "Matematik", "Sosyal Bilgiler", "Resim"]},
];

let dersler = [
    {ders_adi: "Türkçe", öğrt_adi: "Asli", notlar:[55, 80, 65, 75, 100, 45]},
    {ders_adi: "Matematik", öğrt_adi: "Seda", notlar:[60, 70, 90, 50, 80, 70]},
    {ders_adi: "Sosyal Bilgiler", öğrt_adi: "Asude", notlar:[30, 40, 50, 60]},
    {ders_adi: "Fen Bilimleri", öğrt_adi: "Okan", notlar:[50, 80]},
    {ders_adi: "İngilizce", öğrt_adi: "Emma", notlar:[85, 95]},
    {ders_adi: "Resim", öğrt_adi: "Seher", notlar:[90, 100]},
    {ders_adi: "Müzik", öğrt_adi: "Emel", notlar:[80, 90]}
];

/*************************************************************************************/

// function yeniDersEkle(ogrenciAdi, kaydolunacakDersler) {
//     // Öğrenciyi adına göre bul
//     let ogrenci = ogrenciler.find(item => item.isim === ogrenciAdi);

//     if (!ogrenci) {
//         console.log("Öğrenci bulunamadi.");
//         return;
//     }

//     // Kaydolunacak dersleri öğrencinin mevcut ders listesine ekle
//     kaydolunacakDersler.forEach(ders => {
//         if (!ogrenci.dersler.includes(ders)) {
//             ogrenci.dersler.push(ders);
//         } else {
//             console.log(`${ogrenciAdi} zaten ${ders} dersine kayitli.`);
//         }
//     });

//     return ogrenci; // Güncellenmiş öğrenci bilgilerini döndür
// }

//     console.log(yeniDersEkle("Sema", ["Resim"]));




/***********************************************************************************/

let secilenOgrenciAdi = "Ekim"; // Örnek olarak "Eylül" isimli öğrenciyi seçiyoruz

// Seçilen öğrenciyi bul
let secilenOgrenci = ogrenciler.find(ogrenci => ogrenci.isim === secilenOgrenciAdi);

// Seçilen öğrencinin ders ve notlarını içeren bir dizi oluştur
let secilenOgrenciDersNotlari = [];

if (secilenOgrenci) {
    secilenOgrenci.dersler.forEach(dersAdi => {
        // Dersin notlarını bul
        let ders = dersler.find(item => item.ders_adi === dersAdi);
        if (ders) {
            // Öğrencinin ders indeksini bul
            let ogrenciIndex = ogrenciler.indexOf(secilenOgrenci);
            // Sadece isim, ders adı ve notu içeren bir nesne oluştur
            secilenOgrenciDersNotlari.push({
                isim: secilenOgrenci.isim,
                ders: dersAdi,
                not: ders.notlar[ogrenciIndex] // Öğrencinin ders notu
            });
        }
    });
}

// Oluşturulan diziyi göster
console.log(secilenOgrenciDersNotlari);

//! ********************************************************************************

/*let ogrenciDersNotlariSade = [];

ogrenciler.forEach((ogrenci, index) => {
    ogrenci.dersler.forEach(dersAdi => {
        // Dersin notlarını bul
        let dersNotlari = dersler.find(ders => ders.ders_adi === dersAdi);
        if (dersNotlari) {
            // Sadece isim, ders adı ve notu içeren bir nesne oluştur
            let notBilgisiSade = {
                isim: ogrenci.isim,
                ders: dersAdi,
                not: dersNotlari.notlar[index] // Öğrencinin indeksine göre notu al
            };
            // Oluşturulan nesneyi dizimize ekleyelim
            ogrenciDersNotlariSade.push(notBilgisiSade);
        }
    });
});

// Oluşturulan diziyi göster
console.log(ogrenciDersNotlariSade);*/

/***********************************************************************************/

// function dersNotOrtalamasi(dersAdi) {
//     let ders = dersler.find(item => item.ders_adi === dersAdi); // Dersi bul
//     if (!ders) {
//         console.log("Ders bulunamadi.");
//         return;
//     }
//     let toplamNot = ders.notlar.reduce((acc, current) => acc + current, 0); // Notların toplamını hesapla
//     let notOrtalamasi = toplamNot / ders.notlar.length; // Ortalamayı hesapla
//     return notOrtalamasi;
// }

// // Örnek kullanım:
// console.log(dersNotOrtalamasi("Türkçe"));

    


