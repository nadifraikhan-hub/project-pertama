let interval;
let sedangBerjalan = false;

let tahap = 0;
let waktu = 0;

// Urutan lampu
const lampu = [{
        id: "merah",
        nama: "Lampu Merah",
        durasi: 10
    },
    {
        id: "kuning",
        nama: "Lampu Kuning",
        durasi: 3
    },
    {
        id: "hijau",
        nama: "Lampu Hijau",
        durasi: 10
    }
];

function tampilkanLampu() {

    // Matikan semua lampu
    document.getElementById("merah").classList.remove("aktif");
    document.getElementById("kuning").classList.remove("aktif");
    document.getElementById("hijau").classList.remove("aktif");

    // Aktifkan lampu sesuai tahap
    let lampuSekarang = lampu[tahap];

    document
        .getElementById(lampuSekarang.id)
        .classList.add("aktif");

    waktu = lampuSekarang.durasi;

    document.getElementById("waktu").textContent = waktu;

    document.getElementById("status").textContent =
        lampuSekarang.nama;
}

function mulaiSimulasi() {

    if (sedangBerjalan) {
        return;
    }

    sedangBerjalan = true;

    tampilkanLampu();

    interval = setInterval(function() {

        waktu--;

        document.getElementById("waktu").textContent = waktu;

        if (waktu <= 0) {

            tahap++;

            if (tahap >= lampu.length) {
                tahap = 0;
            }

            tampilkanLampu();
        }

    }, 1000);
}

function berhentiSimulasi() {

    clearInterval(interval);

    sedangBerjalan = false;

    document.getElementById("status").textContent =
        "Simulasi berhenti";
}

function resetSimulasi() {

    clearInterval(interval);

    sedangBerjalan = false;
    tahap = 0;
    waktu = 0;

    document.getElementById("merah").classList.remove("aktif");
    document.getElementById("kuning").classList.remove("aktif");
    document.getElementById("hijau").classList.remove("aktif");

    document.getElementById("waktu").textContent = "0";

    document.getElementById("status").textContent =
        "Simulasi berhenti";
}