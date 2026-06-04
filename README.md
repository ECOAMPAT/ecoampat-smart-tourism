# 🏝️ EcoAmpat Smart Tourism

EcoAmpat adalah platform smart tourism untuk Raja Ampat berbasis AI.

## 🌟 Fitur
- Smart Destination Explorer
- Booking Tour
- AI Travel Recommendation
- Tourism Dashboard

## 🚀 Cara Run
1. Download file
2. Buka index.html
3. Jalankan di browser

## 📌 Visi
Menjadikan Papua sebagai Smart Tourism berbasis AI
ecoampat-smart-tourism/
│
├── index.html
├── dashboard.html
├── destinations.html
├── booking.html
├── style.css
├── app.js
├── ai.js
├── README.md
<!DOCTYPE html>
<html>
<head>
  <title>EcoAmpat Smart Tourism</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1>🏝️ EcoAmpat</h1>
  <p>Smart Tourism Platform Raja Ampat</p>
</header>

<nav>
  <a href="index.html">Home</a>
  <a href="destinations.html">Destinasi</a>
  <a href="booking.html">Booking</a>
  <a href="dashboard.html">Dashboard</a>
</nav>

<section class="hero">
  <h2>Explore Raja Ampat Smartly with AI</h2>
  <button onclick="goDashboard()">Start Explore</button>
</section>

<script src="app.js"></script>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
  <title>Destinasi EcoAmpat</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>🏝️ Destinasi Wisata</h1>

<div class="card">
  <h3>Wayag Island</h3>
  <p>Iconic karst islands view</p>
</div>

<div class="card">
  <h3>Pianemo</h3>
  <p>Best viewpoint Raja Ampat</p>
</div>

<div class="card">
  <h3>Misool</h3>
  <p>Underwater paradise</p>
</div>

<a href="index.html">⬅ Back</a>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
  <title>Booking EcoAmpat</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>🚤 Booking Tour</h1>

<form>
  <input placeholder="Nama">
  <input placeholder="Tanggal Trip">
  <select>
    <option>Wayag Tour</option>
    <option>Pianemo Tour</option>
    <option>Misool Diving</option>
  </select>

  <button type="button" onclick="bookNow()">Book Now</button>
</form>

<script src="app.js"></script>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
  <title>Dashboard EcoAmpat</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>📊 AI Tourism Dashboard</h1>

<div class="card">
  <h3>Wisatawan Hari Ini</h3>
  <p>1,245 orang</p>
</div>

<div class="card">
  <h3>Pulau Terpadat</h3>
  <p>Pianemo</p>
</div>

<div class="card">
  <h3>Revenue UMKM</h3>
  <p>Rp 45.000.000</p>
</div>

<a href="index.html">⬅ Back</a>

</body>
</html>
body {
  font-family: Arial;
  margin: 0;
  background: #f0f8ff;
}

header {
  background: #0099cc;
  color: white;
  padding: 20px;
  text-align: center;
}

nav {
  background: #006680;
  padding: 10px;
  text-align: center;
}

nav a {
  color: white;
  margin: 10px;
  text-decoration: none;
}

.hero {
  text-align: center;
  padding: 50px;
}

button {
  padding: 10px 20px;
  background: green;
  color: white;
  border: none;
  cursor: pointer;
}

.card {
  background: white;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
}
function goDashboard() {
  window.location.href = "dashboard.html";
}

function bookNow() {
  alert("Booking berhasil! Tim EcoAmpat akan menghubungi Anda.");
}
function aiRecommend(budget) {
  if (budget < 3000000) {
    return "Pianemo 1 hari + homestay";
  } else if (budget < 7000000) {
    return "Wayag + Pianemo 2 hari";
  } else {
    return "Full Raja Ampat Tour (Wayag + Misool + Pianemo)";
  }
}
