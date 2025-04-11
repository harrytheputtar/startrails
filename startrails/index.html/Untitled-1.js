<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Startrails Astronomical Experience</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Orbitron', sans-serif;
      background: black;
      color: white;
      overflow-x: hidden;
    }

    header {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      padding: 20px;
      background: rgba(0, 0, 0, 0.7);
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
    }

    .nav-toggle {
      font-size: 2rem;
      cursor: pointer;
      color: white;
    }

    nav {
      display: none;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.9);
      padding: 15px;
      border-radius: 8px;
      margin-top: 60px;
      position: absolute;
      top: 60px;
      right: 20px;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin: 10px 0;
    }

    .show-nav {
      display: flex;
    }

    section {
      padding: 100px 20px;
      min-height: 100vh;
      background: transparent;
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .section-bg {
      background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,1));
    }

    h1, h2 {
      margin-bottom: 20px;
      color: #ffdf00;
    }

    p, ul {
      max-width: 800px;
      margin: 15px auto;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
    }

    .booking-btn {
      display: block;
      width: fit-content;
      margin: 30px auto;
      padding: 12px 20px;
      background-color: #ffdf00;
      color: black;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
    }

    .stars, .meteors {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }

    .stars {
      background: url('stars.png') repeat;
      animation: moveStars 200s linear infinite;
    }

    .meteors {
      background: url('satrg.gif') repeat;
      background-size: cover;
      opacity: 0.4;
    }

    @keyframes moveStars {
      from {background-position: 0 0;}
      to {background-position: -10000px 5000px;}
    }

    #reviews {
      text-align: center;
      padding: 80px 20px;
      background-color: rgba(255, 255, 255, 0.05);
    }

    .review-images {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
    }

    .review-images img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
      transition: transform 0.3s ease;
    }

    .review-images img:hover {
      transform: scale(1.05);
    }

    footer {
      padding: 30px 20px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.8);
    }
  </style>
</head>
<body>

  <div class="stars"></div>
  <div class="meteors"></div>

  <header>
    <div class="logo">Startrails</div>
    <div class="nav-toggle" onclick="toggleNav()">&#9776;</div>
    <nav id="navLinks">
      <a href="#about">About</a>
      <a href="#offer">What We Offer</a>
      <a href="#why">Why Choose</a>
      <a href="#reviews">Reviews</a>
      <a href="#book">Book</a>
    </nav>
  </header>

  <section id="about">
    <h1>Welcome to Startrails Astronomical Experiences</h1>
    <p>Explore the Universe Like Never Before</p>
    <p>Escape from daily life and immerse yourself in the wonders of the night sky.</p>
    <p>Expert-led stargazing sessions for beginners and experienced astronomers alike.</p>
    <p>Discover constellations, planets, and deep-sky objects under crystal-clear skies.</p>
  </section>

  <section id="offer" class="section-bg">
    <h2>What We Offer</h2>
    <ul>
      <li><strong>⭐ Guided Stargazing Sessions</strong><br/> Expert commentary with high-quality telescopes and binoculars.</li>
      <li><strong>📸 Astrophotography Workshops</strong><br/> Capture stunning celestial images.</li>
      <li><strong>🔭 Night Sky Tours</strong><br/> Laser-guided tours of the constellations and cosmic stories.</li>
      <li><strong>🌙 Special Astronomical Events</strong><br/> Meteor showers, eclipses & planetary alignments with live Q&A.</li>
      <li><strong>🏕️ Camping Under the Stars</strong><br/> Peaceful locations and unforgettable skies.</li>
    </ul>
  </section>

  <section id="why">
    <h2>Why Choose Startrails?</h2>
    <ul>
      <li>✅ Expert Knowledge – Learn from experienced astronomers and guides.</li>
      <li>✅ Professional Equipment – High-quality telescopes and imaging tech.</li>
      <li>✅ Serene Locations – Minimal light pollution guaranteed.</li>
      <li>✅ Customized Experiences – Private and group sessions available.</li>
    </ul>
  </section>

  <section id="reviews">
    <h2>What Our Guests Say</h2>
    <div class="review-images">
      <img src="https://via.placeholder.com/300x200?text=Review+1" alt="one.jpg" />
      <img src="https://via.placeholder.com/300x200?text=Review+2" alt="two.jpg" />
      <img src="https://via.placeholder.com/300x200?text=Review+3" alt="three.jpg" />
    </div>
  </section>

  <section id="book" class="section-bg">
    <h2>Book Your Adventure</h2>
    <p>Experience the universe like never before!</p>
    <a href="#" class="booking-btn">Reserve Your Spot</a>
  </section>

  <footer>
    &copy; 2025 Startrails Astronomical Experiences. All rights reserved.
  </footer>

  <script>
    function toggleNav() {
      const nav = document.getElementById('navLinks');
      nav.classList.toggle('show-nav');
    }
  </script>

</body>
</html>






<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Startrails Astronomical Experience</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Orbitron', sans-serif;
      background: black;
      color: white;
      overflow-x: hidden;
    }

    header {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      padding: 20px;
      background: rgba(0, 0, 0, 0.7);
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-img {
      height: 40px;
      margin-right: 10px;
    }

    .logo-wrapper {
      display: flex;
      align-items: center;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
    }

    .center-title {
      font-size: 2rem;
      font-weight: bold;
      color: #ffdf00;
      flex: 1;
      text-align: center;
    }

    .nav-toggle {
      font-size: 2rem;
      cursor: pointer;
      color: white;
    }

    nav {
      display: none;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.9);
      padding: 15px;
      border-radius: 8px;
      margin-top: 60px;
      position: absolute;
      top: 60px;
      right: 20px;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin: 10px 0;
    }

    .show-nav {
      display: flex;
    }

    section {
      padding: 100px 20px;
      min-height: 100vh;
      background: transparent;
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .section-bg {
      background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,1));
    }

    h1, h2 {
      margin-bottom: 20px;
      color: #ffdf00;
    }

    p, ul {
      max-width: 800px;
      margin: 15px auto;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
    }

    .booking-btn {
      display: block;
      width: fit-content;
      margin: 30px auto;
      padding: 12px 20px;
      background-color: #ffdf00;
      color: black;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
    }

    .stars, .meteors {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }

    .stars {
      background: url('stars.jpg') repeat;
      animation: moveStars 200s linear infinite;
    }

    .meteors {
      background: url('satrg.gif') repeat;
      background-size: cover;
      opacity: 0.4;
    }

    @keyframes moveStars {
      from {background-position: 0 0;}
      to {background-position: -10000px 5000px;}
    }

    #reviews {
      text-align: center;
      padding: 80px 20px;
      background-color: rgba(255, 255, 255, 0.05);
    }

    .review-images {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
    }

    .review-images img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
      transition: transform 0.3s ease;
    }

    .review-images img:hover {
      transform: scale(1.05);
    }

    footer {
      padding: 30px 20px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.8);
    }

    form input, form textarea {
      width: 100%;
      max-width: 400px;
      padding: 10px;
      margin: 10px 0;
      border-radius: 6px;
      border: none;
      font-family: 'Orbitron', sans-serif;
    }

    form button {
      background: #ffdf00;
      color: black;
      border: none;
      padding: 12px 25px;
      font-weight: bold;
      border-radius: 30px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="stars"></div>
  <div class="meteors"></div>

  <header>
    <div class="logo-wrapper">
      <img src="logo.png" class="logo-img" alt="Logo" />
      <span class="logo-text">Startrails</span>
    </div>
    <div class="center-title">Startrails</div>
    <div class="nav-toggle" onclick="toggleNav()">&#9776;</div>
    <nav id="navLinks">
      <a href="#about">About</a>
      <a href="#offer">What We Offer</a>
      <a href="#why">Why Choose</a>
      <a href="#reviews">Reviews</a>
      <a href="#book">Book</a>
    </nav>
  </header>

  <section id="about">
    <h1>Welcome to Startrails Astronomical Experiences</h1>
    <p>Explore the Universe Like Never Before</p>
    <p>Escape from daily life and immerse yourself in the wonders of the night sky.</p>
    <p>Expert-led stargazing sessions for beginners and experienced astronomers alike.</p>
    <p>Discover constellations, planets, and deep-sky objects under crystal-clear skies.</p>
  </section>

  <section id="offer" class="section-bg">
    <h2>What We Offer</h2>
    <ul>
      <li><strong>⭐ Guided Stargazing Sessions</strong><br/> Expert commentary with high-quality telescopes and binoculars.</li>
      <li><strong>📸 Astrophotography Workshops</strong><br/> Capture stunning celestial images.</li>
      <li><strong>🔭 Night Sky Tours</strong><br/> Laser-guided tours of the constellations and cosmic stories.</li>
      <li><strong>🌙 Special Astronomical Events</strong><br/> Meteor showers, eclipses & planetary alignments with live Q&A.</li>
      <li><strong>🏕️ Camping Under the Stars</strong><br/> Peaceful locations and unforgettable skies.</li>
    </ul>
  </section>

  <section id="why">
    <h2>Why Choose Startrails?</h2>
    <ul>
      <li>✅ Expert Knowledge – Learn from experienced astronomers and guides.</li>
      <li>✅ Professional Equipment – High-quality telescopes and imaging tech.</li>
      <li>✅ Serene Locations – Minimal light pollution guaranteed.</li>
      <li>✅ Customized Experiences – Private and group sessions available.</li>
    </ul>
  </section>

  <section id="reviews">
    <h2>What Our Guests Say</h2>
    <div class="review-images">
      <img src="https://one.jpg/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Review 1" />
      <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Review 2" />
      <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80" alt="Review 3" />
    </div>
  </section>

  <section id="book" class="section-bg">
    <h2>Book Your Adventure</h2>
    <p>Experience the universe like never before!</p>
    <form onsubmit="saveBooking(event)">
      <input type="text" id="name" placeholder="Your Name" required />
      <input type="email" id="email" placeholder="Your Email" required />
      <input type="date" id="date" required />
      <textarea id="message" rows="4" placeholder="Any special requests?"></textarea>
      <button type="submit">Reserve Your Spot</button>
    </form>
  </section>

  <footer>
    &copy; 2025 Startrails Astronomical Experiences. All rights reserved.
  </footer>

  <script>
    function toggleNav() {
      const nav = document.getElementById('navLinks');
      nav.classList.toggle('show-nav');
    }

    function saveBooking(e) {
      e.preventDefault();
      const booking = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        message: document.getElementById('message').value
      };
      localStorage.setItem('bookingInfo', JSON.stringify(booking));
      alert('Your booking has been saved locally!');
      e.target.reset();
    }
  </script>

</body>
</html>