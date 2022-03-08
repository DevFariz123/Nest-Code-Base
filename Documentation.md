Setup :
- Langkah pertama yang dilakukan adalah setup database yang akan digunakan pada folder database/config dan buat file sesuai dengan database yang digunakan.

contoh: "ormconfig" karena menggunakan database berupa sql


- membuat base/repositori agar service dari module yang dibuat memiliki action dasar seperti (post, getById, getall, delete) untuk contoh bisa di lihat pada folder repositori base untuk user

- selanjutnya adalah membuat enitity pada komponen yang akan dibuat, entity tersebut digunakan untuk menuliskan type data apa saja yang akan di simpan ke database dan juga membuat default setting untuk data yang dibuat

- selanjutnya adalah dto (data transfer object) folder ini digunakan untuk menjadi interface data yang digunakan oleh karena itu data yang terdapat di dto tidak selengkap data yang di entity, karena dto hanya menampung data masukan yang di input oleh user

- selanjutnya adalah .service.ts pada file ini terdapat action dari module yang dibuat (post, get, edit, getbyid, delete, getall)

- setelah selesai pada .service selanjutnya module action tersebut di panggil pada .controller untuk mengelompokan action yang digunakan dan meminimalisir code yang di tulis berulang, pada file ini juga dapat membuat endpoint untuk service yang digunakan

- selanjutnya adalah membuat isi dari file .module, pada module ini diharuskan untuk mengatur dan menjaga code agar tetap teratur. 
contoh : pada user.module.ts 
    import: diisi dengan entity yang dibuat bila terdapat hubungan dengan entity lain maka sertakan juga
    provide: diisi dengan service/action yang digunakan.
    controller: diisi dengan controller yang telah dibuat sebelumnya

- Setelah satu kompenen dibuat maka selanjutnya adalah memanggil .module tiap service agar bisa dilakukan debug bila ada kesalahan pada module yang dibuat sebelumnya

- setelah module tersebut dikumpulkan pada app.module semua service akan di eksekusi oleh main.ts pada port yang disedikan/ dibuat pada file main.ts