let scoreP1 = 0;
let scoreP2 = 0;
let round = 0;

// Ketika menekan tombol Play Now di modal maka tombol akan dihilangkan dan permainan dimulai
const playGame = () => {
    let divStart = document.getElementById('divStart');
    let start = document.getElementById('start');
    divStart.removeChild(start);
    document.getElementById('game').classList.remove('hidden');
}

// Melakukan action setelah kedua player menembak angka
const getData = () => {
    // mengambil nilai input dari kedua player
    let player1 = parseInt(document.getElementById('input-player1').value);
    let player2 = parseInt(document.getElementById('input-player2').value);
    // melakukan validasi atas nilai input
    let rules = validation(player1, player2);
    // nilai random dari tebak angka diambil
    let tebak = tebakAngka();
    // Jika rules berhasil dilewati
    if(rules) {
        // Jika nilai dari kedua player tidak sama dengan hasil tebakan
        if (player1 !== tebak && player2 !== tebak) {
            swal({title: "Tidak ada yang benar. hasil SERI"}).then(() => {
                swal({title: `Nilai yang dicari: ${tebak}`, text:`
                Player 1: ${scoreP1}
                Player 2: ${scoreP2}`})
            });
        } else {
            if (player1 === tebak) { // Jika angka antara player 1 dan hasil tebakan cocok
                swal({title: "Player 1 Win"}).then(() => {
                swal({title: `Nilai yang dicari: ${tebak}`, text:`
                Player 1: ${scoreP1}
                Player 2: ${scoreP2}`})
                });
                scoreP1++; // skor player 1 bertambah

            } 
            if (player2 === tebak) { // Jika angka antara player 2 dan hasil tebakan cocok
                swal({title: "Player 2 Win"}).then(() => {
                    swal({title: `Nilai yang dicari: ${tebak}`, text:`
                    Player 1: ${scoreP1}
                    Player 2: ${scoreP2}`})
                });
                scoreP2++; // skor player 2 bertambah
            }
        }
        round++;
    }
    // Jika round sudah sampai kelima
    if(round === 5){
        // tombol tebak dimanipulasi agar tidak bisa ditekan
        document.getElementById('tebak').setAttribute('disabled', 'disabled');
        document.getElementById('tebak').classList.add('cursor-not-allowed');
        // Jika player 1 menang
        if (scoreP1 > scoreP2) { 
            setTimeout(() => {
                swal({title: "Congratulations Player 1"});
                let divGame = document.getElementById('divGame');
                let game = document.getElementById('game');
                divGame.removeChild(game);
                
            }, 3500)
            // Jika player 2 menang
        } else if (scoreP1 < scoreP2) { 
            setTimeout(() => {
                swal({title: "Congratulations Player 2"});
                let divGame = document.getElementById('divGame');
                let game = document.getElementById('game');
                divGame.removeChild(game);
            }, 3500)
        } else 
        // Jika imbang
        { 
            setTimeout(() => {
                swal({title: `Wow pertarungan yang sangat sengit`});
                let divGame = document.getElementById('divGame');
                let game = document.getElementById('game');
                divGame.removeChild(game);
                
            }, 3500)
        }
    }
}

// fungsi validasi untuk membuat aturan main
function validation(player1, player2) {
    if (player1 === player2) {
        swal("Error!", "Tebakan tidak boleh sama!", "error");
        return false;
    }

    if (player1 < 1 || player2 < 1) {
        swal("Error!", "Tebakan tidak boleh kurang dari 1!", "error");
        return false;
    }

    if (player1 > 3 || player2 > 3) {
        swal("Error!", "Tebakan tidak boleh lebih dari 3!", "error")
        return false;
    }

    if (isNaN(player1) || isNaN(player2)) {
        swal("Error!", "Salah satu player belum menebak!", "error")
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
