alert('Selamat datang di Data Nilai Mahasiswa');

let kembali = true;

while(kembali) {
    let nama = prompt('Nama anda: ');
    let nilai = prompt("Input nilai: ");

    if (nilai >= 80 && nilai <= 100) {
        alert(`Selamat ${nama}, anda lulus dengan nilai A. Pertahankan prestasi`);
    } else if (nilai >= 60 && nilai < 80) {
        alert(`Selamat ${nama}, anda lulus dengan nilai B. Berusaha lebih baik`);
    } else if (nilai >= 40 && nilai < 60) {
        alert(`Selamat ${nama}, anda hanya lulus dengan nilai C. Lebih diperbaiki lagi`);
    } else if (nilai >= 20 && nilai < 60) {
        alert(`Mohon maaf ${nama}, anda tidak lulus dengan nilai D`);
    } else if (nilai >= 0 && nilai < 20) {
        alert(`Mohon maaf ${nama}, anda tidak lulus dengan nilai E`);
    } else {
        alert("Silahkan input data dengan benar!!")
    }

    kembali = confirm("Apakah ingin kembali dari awal? ")
}

alert('Terima kasih, sampai bertemu kembali');