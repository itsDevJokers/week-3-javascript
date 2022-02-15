alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 5 ronde.
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!!`);

// inisialisasi awal skor 2 player dan ronde
let scoreP1 = 0;
let scoreP2 = 0;
let round = 1;

// ketika game selesai, lanjut akan menjadi false
let lanjut = true;
while (lanjut) {
    // input angka dari player
    let player1 = parseInt(prompt('Player 1: masukan angka'));
    let player2 = parseInt(prompt('Player 2: masukan angka'));

    // memanggil function untuk menebak angka
    let tebak = tebakAngka();
    // memanggil rules
    let rules = validation(player1, player2);
    // Jika ada rules yang tidak sesuai
    if(!rules) {
        lanjut = confirm("Ulangi?");
    } else {
        // Jika angka antara kedua player dan hasil tebakan tidak cocok
        if (player1 !== tebak && player2 !== tebak) {
            alert("Tidak ada yang benar. hasil SERI");
        } else {
            if (player1 === tebak) { // Jika angka antara player 1 dan hasil tebakan cocok
                alert("Player 1 Win");
                scoreP1++; // skor player 1 bertambah
            } 
            if (player2 === tebak) { // Jika angka antara player 2 dan hasil tebakan cocok
                alert("Player 2 Win");
                scoreP2++; // skor player 2 bertambah
            }
        }

        // Menampilkan angka dari hasil tebakan dan skor dari kedua player
        alert(`
        Nilai yang dicari: ${tebak}
        -----------------------------------
        - Player 1: ${scoreP1}
        - Player 2: ${scoreP2}`);

        // ronde bertambah
        round++;

        // Jika ronde belum sampai 5 kali
        if (round <= 5) {
            lanjut = confirm("Ronde " + round + "?");
        } else {
            if (scoreP1 > scoreP2) { // Jika player 1 menang
                alert("Good Jobs Player 1");
                lanjut = false;
            } else if (scoreP1 < scoreP2) { // Jika player 2 menang
                alert("Good Jobs Player 2");
                lanjut = false;
            } else { // Jika imbang
                alert(`Wow pertarungan yang sangat sengit`);
                round = 1;
                scoreP1 = 0;
                scoreP2 = 0;
                lanjut = confirm("mau main lagi?");
            }
        }
    }
}

    

// fungsi validasi untuk membuat aturan main
function validation(player1, player2) {
    if (player1 === player2) {
        alert("tebakan tidak boleh sama");
        return false;
    }

    if (player1 < 1 || player2 < 1) {
        alert("tebakan tidak boleh lebih kecil dari 1");
        return false;
    }

    if (player1 > 3 || player2 > 3) {
        alert("tebakan tidak boleh lebih besar dari 3");
        return false;
    }

    if (isNaN(player1) || isNaN(player2)) {
        alert("salah satu player belum menebak");
        return false;
    }

    return true;
}

// fungsi untuk tebak angka berdasarkan angka acak antara 1 - 3
function tebakAngka() {
    const range = [1, 2, 3];
    let notMatch = true;
    while (notMatch) {
        let random = Math.floor(Math.random() * 10);
        let ketemu = range.find((r) => r === random);
        if (ketemu) {
            notMatch = false;
            return random;
        }
    }
}