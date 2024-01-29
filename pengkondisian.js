var x = prompt("Masukkan Angka: ");
// alert("selamat datang" + nama);

if (x % 2 == 0) {
    alert(x + " bilangan genap");
} else if(x % 2 == 1){
    alert(x + " bilangan ganjil")
} else {
    alert("ITU BUKAN ANGKA!!");
}

if(confirm("Apakah Anda Manusia? ")) {
    location = "https://youtube.com"
} else {
    alert("anda di penjara");
}