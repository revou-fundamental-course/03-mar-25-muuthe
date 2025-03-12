// Mendapatkan nama pengunjung dari localStorage
const nama = localStorage.getItem('nama');

// Jika nama pengunjung tidak ada, maka tampilkan prompt untuk memasukkan nama
if (!nama) {
const namaInput = prompt('Silakan masukkan nama Anda:');
localStorage.setItem('nama', namaInput);
}

// Mengisi nama pengunjung ke dalam elemen HTML
document.getElementById('nama-sambutan').innerHTML = `Hi ${nama}!`;

// Validasi form
document.getElementById("form-kontak").addEventListener("submit", function(event) {
event.preventDefault();
const nama = document.getElementById("nama").value.trim();
const email = document.getElementById("email").value.trim();
const pesan = document.getElementById("pesan").value.trim();

if (nama === "" || email === "" || pesan === "") {
console.error("Mohon isi semua field!");
} else {
// Kirim data ke server atau lakukan aksi lainnya
console.log("Data terkirim!");
}
});