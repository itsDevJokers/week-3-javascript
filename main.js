// Mengambil hasil input dari nama dan nilai.
//  Setelah itu tag html dengan id modal ditangkap dan diisi dengan return dari function lulus
getData = () => {
    nama = document.getElementById('input-nama').value;
    nilai = parseInt(document.getElementById('input-nilai').value);
    document.getElementById('modal').innerHTML = lulus();
}

// Kondisi dicek berdasarkan input nilai yang dimasukkan menggunakan switch case
lulus = () => {
    switch(true) {
        // Jika case bernilai true maka akan dikembalikan tag html
        case nilai >= 80 && nilai <= 100:
            return `<img class="mx-auto mb-3" src="success.svg" alt="success" width="150px" />
            <h1 class="text-2xl font-semibold" > Selamat ${nama}, anda lulus dengan nilai <span class="text-green-700">A</span>. Pertahankan prestasi </h1>`
        case nilai >= 60 && nilai < 80:
            return `<img class="mx-auto mb-3" src="success.svg" alt="success" width="150px" />
            <h1 class="text-2xl font-semibold" > Selamat ${nama}, anda lulus dengan nilai <span class="text-green-700">B</span>. Berusaha lebih baik </h1>`
        case nilai >= 40 && nilai < 60:
            return `<img class="mx-auto mb-3" src="warning.svg" alt="success" width="150px" />
            <h1 class="text-2xl font-semibold" > Mohon maaf ${nama}, anda hanya lulus dengan nilai <span class="text-yellow-400">C</span>. Lebih diperbaiki lagi </h1>`
        case nilai >= 20 && nilai < 60:
            return `<img class="mx-auto mb-3" src="danger.svg" alt="success" width="150px" />
            <h1 class="text-2xl font-semibold" > Mohon maaf ${nama}, anda tidak lulus dengan nilai <span class="text-red-700">D</span></h1>`
        case nilai >= 0 && nilai < 20:
            return `<img class="mx-auto mb-3" src="danger.svg" alt="success" width="150px" />
            <h1 class="text-2xl font-semibold" > Mohon maaf ${nama}, anda tidak lulus dengan nilai <span class="text-red-700">E</span></h1>`
        // Jika tidak true berarti akan ke default
        default:
            return `<h1 class="text-2xl font-semibold" > Mohon maaf, data yang anda masukkan <span class="text-red-700">Salah</span>. Silahkan input data dengan benar</h1>`
    }
}