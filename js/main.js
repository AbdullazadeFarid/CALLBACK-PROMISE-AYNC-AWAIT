// Görev 1: Hava Durumu Sorgulama
// Tanım: Bu görev, belirli bir şehir için hava durumunu sorgulamayı kapsar. Şehir adı verildiğinde, o şehre ait güncel hava durumu bilgisi getirilmelidir.



//////////////////////////////////////////////////// CALLBACK  METHOD///////////////////////////////////////////////



// function hava ( seher , successCallback ,errorCallback) {

//     setTimeout(()=>{
//         if(seher == 'Baki'){
//             successCallback('Buludlu')
//         }
//         else if(seher == "Sumqait"){
//             successCallback('alovlu')
//         }
//         else{
//             errorCallback("bele bir seher yoxdur")
//         }

//     }, 2000)
// }

// hava ("sirvan",
// function(message){
//     console.log(message)
// },

// function(error){
//     console.log(error);
// }
// );




///////////////////////////////////////////   PROMISE METHOD   //////////////////////////////////////////////////////




// //task2   hava durumu   promise usul

// function hava(seher){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             if(seher == "Baki"){
//                 resolve("buluddu")
//             }
//             else if(seher == "Sumqait"){
//                 resolve("alovlu")
//             }
//             else{
//                 reject("bele bir seherimiz yoxdur")
//             }
//         }, 2000);
//     })
// }

// hava( "sirvan")
// .then(message=> console.log(message))
// .catch(error=> console.log(error))



///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////

// function hava(seher) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (seher == "Baki") {
//                 resolve("buluddu");
//             } else if (seher == "Sumqait") {
//                 resolve("alovlu");
//             } else {
//                 reject("bele bir seherimiz yoxdur");
//             }
//         }, 2000);
//     });
// }

// async function getWeather(seher) {
//     try {
//         const result = await hava(seher);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getWeather("sirvan");













// Görev 3: Kitap Bilgisi Sorgulama
// Tanım: Bu görev, veritabanında mevcut olan kitaplar arasından belirli bir kitap adına göre sorgulama yapılmasını içerir. Kitabın yazarı ve yayın yılı gibi bilgileri getirir.



//////////////////////////////////////////////////// CALLBACK  METHOD///////////////////////////////////////////////




// function books(kitab , successCallback ,errorCallback ){

//     setTimeout(() => {

//         if(kitab=="Harry Potter"  ){
//             successCallback("Anar  - 26.07.1997")
//         }
//         else if(kitab == "UcaN Quslar"){
//             successCallback("Samir - 31.01.1999")
//         }
//         else{
//             errorCallback("Bu kitabin melumati yoxdur")
//         }
//     }, 2000);
// }

// books("UcaN Quslar",
//     function(message){
//         console.log(message)
//     },
//     function(error){
//         console.log(error);
//     }

// )



////////////////////////////////////////////////    Promise Method  ////////////////////////////////////////////////////////

// function books(kitab){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {

//             if(kitab == "Harry Potter"){
//                 resolve("Anar - 26.07.1997")
//             }
//             else if(kitab == "Ucan Quslar"){
//                 resolve("Samir - 31.69.2072")
//             }
//             else{
//                 reject("bele bir kitab yoxdur")
//             }
//         }, 2000);
//     })
// }

// books("Harry Potter")
// .then(message =>console.log(message) )
// .catch(error =>console.log(error) )




///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////


// function books(kitab){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {

//             if(kitab == "Harry Potter"){
//                 resolve("Anar Nagilbaz - 26.07.1997")
//             }
//             else if(kitab == "Ucan Quslar"){
//                 resolve("Samiraldo - 31.69.2072")
//             }
//             else{
//                 reject("bele bir kitab yoxdur")
//             }
//         }, 2000);
//     })
// }

// async function kitabiDe(kitab){
//     try {
//         const result = await books(kitab)
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }

// }


// kitabiDe("Harry Potter");







// Görev 4: Kullanıcı Kaydı ve E-posta Bildirimi
// Tanım: Bu görev, yeni bir kullanıcı kaydı ve bu kaydı takiben bir hoş geldin e-postası
//  gönderilmesini kapsar. Kullanıcının adı ve e-posta adresi kaydedilmeli ve ona bir e-posta gönderilmelidir.


/////////////////////////////////////////////    CallBack    //////////////////////////////////////////////////

// function info ( password , mail , errorCallback , successCallback){
//     setTimeout(() => {
//         if(  password == "abc123" && mail =="abc@mail.ru" ) {
//             successCallback ("Xos geldin")
//         }
//         else {
//             errorCallback("Hatali giriş bilgileri")
//         }
//     }, 2000);
// }


// info (
//     prompt("password daxil edin: ") ,
//     prompt("mail daxil edin: "),
    // function(message){ console.log(message)},
    // function(error){console.log(error);
//     }
// )





/////////////////////////////////////////  PROMISE  ///////////////////////////////////////////////////////



// function info ( password  , mail){
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             if( password == "abc123" && mail == "abc@mail.ru"){

//                 resolve("Xos geldin ")
//             }
//             else{
//                 reject("Sef daxil edirsen")
//             }
//         },2000 );
//     })
// }


// info("abc123" , "abc@mail.ru")
// .then((message) => console.log(message))
// .catch((error)   => console.log(error))



///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////

// function info (password , mail){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             if(password=="abc123" && mail=="abc@mail.ru")
//             {
//                 resolve("Duzgun password ve mail")
//             }
//             else{
//                 reject("Hatali melumatlar")
//             }

//         }, 2000);
//     })
// }

//  async function melumat (password , mail ){
//     try
//     {
//         var message = await info(password , mail)
//         console.log(message)
//     }

//     catch(error)
//     {
//         console.log(error)
//     }
// }

// melumat("abc123" , "abc@mail.ru")











// Görev 5: Ürün Fiyat Kontrolü ve İndirim Uygulaması
// Tanım: Bu görev, belirli bir ürünün fiyatını kontrol etmeyi ve belirli koşullar
//  altında indirim uygulamayı içerir. Ürün ID'si verildiğinde, ürünün fiyatını kontrol eder ve uygunsa indirim yapar.



//////////////////////////////////////////////////// CALLBACK  METHOD///////////////////////////////////////////////



// function urun ( id , successCallback , errorCallback )  {
//     setTimeout(() => {

//         if(id=="3"){
//              successCallback ("id = 3 ucun endirim yoxdur ,qiymetide 45AZN.")
//         }
//         else{
//             errorCallback("Bele id ile olan hecne tapilmadi")
//         }
//     }, 2000);



// }

// urun("3",
// function(message){
//     console.log(message)
// },
// function(error)
// {
//     console.log(error)
// })






/////////////////////////////////////////////////////////////////      PROMISE    ///////////////////////////////////////////////////////////////////////


// function urun(id){
//     return new Promise((resolve, reject) => {


//         setTimeout(() => {
//             if(id=="3"){
//                 resolve("id = 3 ucun endirim yoxdur ,qiymetide 45AZN.")
//             }

//             else{
//                 reject("Bele bir id li hecne tapilmadi")
//             }
//         }, 2000);
//     })
// }

// urun (4)
// .then((message) => console.log(message))
// .catch((error) => console.log(error))





////////////////////////////////////////////////////////////// ASYNC AWAIT  ////////////////////////////////////////////////////////////////////////////////////




// function urun(id){
//     return new Promise((resolve, reject) => {


//         setTimeout(() => {
//             if(id=="3"){
//                 resolve("id = 3 ucun endirim yoxdur ,qiymetide 45AZN.")
//             }

//             else{
//                 reject("Bele bir id li hecne tapilmadi")
//             }
//         }, 2000);
//     })
// }

// async function mal ( id ){
//     try{
//         var message =  await urun (id)
//         console.log(message)
//     }
//     catch(error){
//         console.log(error);
// }}


// mal("3")





// Görev 7: Öğrenci Not Ortalaması Hesaplama
// Tanım: Bu görev, belirli bir öğrenci ID'si için not ortalamasını hesaplamayı kapsar. Öğrencinin notlarına göre ortalaması hesaplanır ve döndürülür.





///////////////////////////////////////////////////////////////////  CALLBACKK /////////////////////////////////////////////////////////////////////////
// function  calculateAverage (studentId , successCallback , error){
//     const studentGrades = {
//       123: [70, 85, 90],
//       456: [80, 75, 88],
//       // diğer öğrenciler...
//     };

//     setTimeout(() => {
//         if(studentGrades[studentId]){
//             const grades = studentGrades[studentId];
//             const average = grades.reduce((acc,cur)=> acc + cur, 0) / grades.length;
//             successCallback(`Öğrencinin not ortalaması: ${average}`);
//         }
//         else{
//             error('Ogrenci bulunmuyor')
//         }
//     }, 2000);

// }

// calculateAverage(123,
//     function(message){
//     console.log(message)
// },
// function(error)
// {
//     console.log(error)
// })















/////////////////////////////////////////////////////////////////////////   PROMISE     ////////////////////////////////////////////////////////////////


// function calculateAverage(studentId) {// Bir tələbənin qiymətlərini hesablamaq üçün asinxron bir funksiya təyin olunur.

//     const studentGrades = { // Tələbə qiymətlərinin olduğu bir obyekt yaradılır.
//       123: [70, 85, 90],
//       456: [80, 75, 88],

//     };


//     return new Promise((resolve, reject) => {  // Yeni bir Promise obyekti yaradılır.

//       setTimeout(() => {

//         if (studentGrades[studentId]) {// Tələbə nömrəsinə uyğun qiymətlər yoxlanılır.

//           const grades = studentGrades[studentId];   // Əgər tələbənin qiymətləri tapılırsa, qiymətlər alınır.

//           const average = grades.reduce((acc, cur) => acc + cur) / grades.length; // Qiymətlərin ortalaması hesablanır.

//           resolve(`Tələbənin qiymət ortalaması: ${average}`);    // Hesablanan ortalamaya Promise vasitəsilə resolve edilir.
//         } else {

//           reject("Tələbə tapılmadı.");            // Əgər tələbə tapılmazsa, Promise vasitəsilə reject edilir.

//         }
//       }, 2000); // 2 saniyəlik bir gecikmə əlavə olunur.
//     });
//   }

//   // Tələbənin qiymət ortalamasını hesablamaq üçün funksiya çağırılır.
//   calculateAverage(123)
//     .then(message => console.log(message)) // Promise uğurlu olduqda bu hissə işləyir.
//     .catch(error => console.log(error)); // Promise xəta ilə nəticələndiyi zaman bu hissə işləyir.






    ////////////////////////////////////////////////// ASYNC AWAIT  ////////////////////////////////////////////////////////////////////


// calculateAverage funksiyasını async funksiya ilə dəyişdiririk
async function calculateAverage(studentId) {
    const studentGrades = {
        123: [70, 85, 90],
        456: [80, 75, 88],
        // digər tələbələr...
    };

    // Yeni bir Promise obyekti yaradırıq
    return new Promise((resolve, reject) => {
        // setTimeout funksiyası ilə 2 saniyəlik gecikmə tətbiq edirik
        setTimeout(() => {
            if (studentGrades[studentId]) {
                const grades = studentGrades[studentId];
                const average = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
                resolve(`Tələbənin not ortalaması: ${average}`);
            } else {
                reject("Tələbə tapılmadı.");
            }
        }, 2000);
    });
}

// calculateAverage funksiyasını await ifadəsi ilə çağırırıq
async function calculateAndPrintAverage() {
    try {
        const result = await calculateAverage(123);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// calculateAndPrintAverage funksiyasını çağırırıq
calculateAndPrintAverage();






















