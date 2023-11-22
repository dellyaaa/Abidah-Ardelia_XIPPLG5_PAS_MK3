// Mendapatkan referensi ke elemen input dan daftar tugas
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Fungsi untuk menambahkan to-do list baru
function addTask() {
    // Memeriksa apakah input box kosong
    if (inputBox.value === '') {
        alert("Kamu harus menulis sesuatu!");
    } else {
        // Membuat elemen li baru untuk tugas
        let li = document.createElement("li");

        // Menetapkan teks to-do list ke elemen li
        li.innerHTML = inputBox.value;

        // Menambahkan elemen li ke dalam daftar tugas
        listContainer.appendChild(li);

        // Membuat elemen span (untuk tombol hapus)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Tambahkan simbol 'x'

        // Menambahkan elemen span ke dalam elemen li
        li.appendChild(span);
    }

    // Membersihkan nilai input box setelah menambahkan tugas
    inputBox.value = "";

    // Menyimpan data ke local storage
    saveData();
}

// Menangani klik pada daftar tugas
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // Toggle class 'checked' pada elemen li
        e.target.classList.toggle("checked");

        // Menyimpan data ke local storage setelah perubahan
        saveData();
    } else if (e.target.tagName == "SPAN") {
        // Menghapus elemen li jika tombol hapus (span) diklik
        e.target.parentElement.remove();

        // Menyimpan data ke local storage setelah perubahan
        saveData();
    }
}, false);

// Fungsi untuk menyimpan data ke local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Fungsi untuk menampilkan tugas dari local storage saat memuat halaman
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Memanggil fungsi showTask untuk menampilkan tugas saat memuat halaman
showTask();
