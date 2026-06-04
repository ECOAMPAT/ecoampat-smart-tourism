/* ==================================
   EcoAmpat Smart Tourism App
   Version 1.0
================================== */

/* ==========================
   Navigation Functions
========================== */

function goHome() {
    window.location.href = "index.html";
}

function goDestinations() {
    window.location.href = "destinations.html";
}

function goBooking() {
    window.location.href = "booking.html";
}

function goDashboard() {
    window.location.href = "dashboard.html";
}

function goHotels() {
    window.location.href = "hotels.html";
}

function goTransport() {
    window.location.href = "transport.html";
}

function goUMKM() {
    window.location.href = "umkm.html";
}

/* ==========================
   Booking System
========================== */

function bookNow() {

    const name =
        document.getElementById("name")?.value || "";

    const email =
        document.getElementById("email")?.value || "";

    const packageName =
        document.getElementById("package")?.value || "";

    if (!name || !email) {
        alert("Mohon lengkapi data booking.");
        return;
    }

    alert(
        "Booking berhasil!\n\n" +
        "Nama: " + name +
        "\nPaket: " + packageName +
        "\n\nTim EcoAmpat akan menghubungi Anda."
    );
}

/* ==========================
   AI Recommendation Engine
========================== */

function aiRecommend() {

    const budget =
        parseInt(document.getElementById("budget")?.value || 0);

    const result =
        document.getElementById("aiResult");

    let recommendation = "";

    if (budget < 3000000) {

        recommendation =
            "🏝️ Paket Hemat\n" +
            "- Piaynemo\n" +
            "- Homestay Lokal\n" +
            "- Sharing Boat";

    } else if (budget < 7000000) {

        recommendation =
            "🏝️ Paket Explorer\n" +
            "- Wayag\n" +
            "- Piaynemo\n" +
            "- Resort Lokal";

    } else {

        recommendation =
            "🏝️ Full Raja Ampat Experience\n" +
            "- Wayag\n" +
            "- Misool\n" +
            "- Piaynemo\n" +
            "- Premium Resort";
    }

    if (result) {
        result.innerHTML = recommendation;
    }
}

/* ==========================
   Dashboard Statistics
========================== */

const tourismStats = {
    visitors: 1245,
    bookings: 324,
    umkm: 156,
    revenue: "Rp 45.000.000"
};

function loadDashboard() {

    const visitors =
        document.getElementById("visitors");

    const bookings =
        document.getElementById("bookings");

    const umkm =
        document.getElementById("umkm");

    const revenue =
        document.getElementById("revenue");

    if (visitors)
        visitors.innerText =
            tourismStats.visitors;

    if (bookings)
        bookings.innerText =
            tourismStats.bookings;

    if (umkm)
        umkm.innerText =
            tourismStats.umkm;

    if (revenue)
        revenue.innerText =
            tourismStats.revenue;
}

/* ==========================
   Search Destination
========================== */

function searchDestination() {

    const input =
        document.getElementById("searchInput");

    const cards =
        document.querySelectorAll(".destination-card");

    if (!input) return;

    const keyword =
        input.value.toLowerCase();

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}

/* ==========================
   Contact Form
========================== */

function sendMessage() {

    const name =
        document.getElementById("contactName")?.value;

    if (!name) {
        alert("Silakan isi nama Anda.");
        return;
    }

    alert(
        "Terima kasih " +
        name +
        ". Pesan Anda telah diterima."
    );
}

/* ==========================
   Auto Start Dashboard
========================== */

document.addEventListener(
    "DOMContentLoaded",
    loadDashboard
);
/* ==========================
   Authentication Demo
========================== */

function registerUser() {

    const name =
        document.getElementById("registerName").value;

    const email =
        document.getElementById("registerEmail").value;

    const password =
        document.getElementById("registerPassword").value;

    const confirm =
        document.getElementById("confirmPassword").value;

    if (
        !name ||
        !email ||
        !password
    ) {
        alert("Lengkapi semua data.");
        return;
    }

    if (password !== confirm) {
        alert("Password tidak sama.");
        return;
    }

    localStorage.setItem(
        "ecoampat_user",
        JSON.stringify({
            name,
            email
        })
    );

    alert("Registrasi berhasil.");

    window.location.href =
        "login.html";
}

function loginUser() {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    if (!email || !password) {

        alert(
            "Masukkan email dan password."
        );

        return;
    }

    alert(
        "Login berhasil.\nSelamat datang di EcoAmpat."
    );

    window.location.href =
        "dashboard.html";
}
