
import './style.css'

const phone = '+231777676990'
const email = 'jackieghlib@gmail.com'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Jackie's Resort home">
      <span class="brand-mark">J</span>
      <span class="brand-copy">
        <strong>JACKIE'S</strong>
        <small>RESORT · GANTA, LIBERIA</small>
      </span>
    </a>

    <button class="menu-toggle" aria-label="Open navigation"
      aria-expanded="false" aria-controls="main-nav">
      <span></span><span></span>
    </button>

    <nav class="main-nav" id="main-nav">
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#facilities">Our Facilities</a>
      <a href="#gallery">Gallery</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#events">Events</a>
      <a href="#contact">Contact</a>
      <a class="nav-cta" href="https://wa.me/${phone}?text=Hello%20Jackie's%20Resort%2C%20I%20would%20like%20to%20make%20an%20enquiry.">
        Make an Enquiry <span>↗</span>
      </a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-image"></div>
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="eyebrow hero-eyebrow">
          <span></span> WELCOME TO JACKIE'S RESORT
        </div>

        <h1>More than a stay.<br />A place to <em>belong.</em></h1>

        <p class="hero-description">
          Discover comfort, exceptional hospitality, and unforgettable
          experiences — all in one destination in the heart of Ganta.
        </p>

        <div class="hero-actions">
          <a class="button button-gold"
            href="https://wa.me/${phone}?text=Hello%20Jackie's%20Resort%2C%20I%20would%20like%20to%20enquire%20about%20a%20room.">
            Explore Accommodation <span>↗</span>
          </a>
          <a class="button button-outline" href="#facilities">
            Discover the Resort <span>↓</span>
          </a>
        </div>

        <div class="hero-location">
          <span class="location-icon">⌖</span>
          Peace Community, Ganta, Nimba County, Liberia
        </div>
      </div>

      <div class="hero-side-label">HOSPITALITY · REDEFINED</div>

      <div class="hero-bottom">
        <span>YOUR DESTINATION FOR COMFORT & EXPERIENCE</span>
        <a href="#about">SCROLL TO DISCOVER ↓</a>
      </div>
    </section>

    <section class="intro section-padding" id="about">
      <div class="intro-label">
        <span class="section-number">01</span>
        <span class="eyebrow">THE JACKIE'S EXPERIENCE</span>
      </div>

      <div class="intro-content">
        <h2>Everything you need.<br />
          <em>All in one place.</em>
        </h2>

        <div class="intro-text">
          <p>
            Located in Peace Community, just a one-minute walk from the
            main street in Ganta, Jackie's Resort brings accommodation,
            dining, business, recreation, and entertainment together.
          </p>
          <p>
            Whether you're visiting for business, celebrating a special
            occasion, or simply taking time to unwind, we're here to make
            every experience welcoming and memorable.
          </p>
          <a class="text-link" href="#facilities">
            GET TO KNOW US <span>↗</span>
          </a>
        </div>
      </div>

      <div class="stats">
        <div class="stat">
          <strong>98<span>+</span></strong>
          <span>ROOMS & ACCOMMODATION</span>
        </div>
        <div class="stat">
          <strong>3,500</strong>
          <span>STATED EVENT CAPACITY</span>
        </div>
        <div class="stat">
          <strong>01</strong>
          <span>DESTINATION FOR IT ALL</span>
        </div>
        <div class="stat">
          <strong>∞</strong>
          <span>WAYS TO MAKE MEMORIES</span>
        </div>
      </div>
    </section>

    <section class="facilities section-padding" id="facilities">
      <div class="section-heading">
        <div>
          <span class="eyebrow"><span class="gold-dot"></span> DISCOVER JACKIE'S</span>
          <h2>Experiences for<br /><em>every occasion.</em></h2>
        </div>
        <p>
          From a restful night to a grand celebration, discover
          the services and spaces that make Jackie's Resort special.
        </p>
      </div>

      <div class="facility-grid">
        <article class="facility-card facility-large">
          <div class="facility-image image-rooms"></div>
          <div class="facility-number">01 / STAY</div>
          <div class="facility-info">
            <h3>Premium Accommodation</h3>
            <p>Comfort, privacy, and a welcoming place to call your own.</p>
            <a href="https://wa.me/${phone}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20accommodation.">ENQUIRE ABOUT ROOMS ↗</a>
          </div>
        </article>

        <article class="facility-card">
          <div class="facility-image image-events"></div>
          <div class="facility-number">02 / GATHER</div>
          <div class="facility-info">
            <h3>Conferences & Events</h3>
            <p>A venue for meetings, workshops, ceremonies, and major gatherings.</p>
            <a href="https://wa.me/${phone}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20event%20facilities.">PLAN YOUR EVENT ↗</a>
          </div>
        </article>

        <article class="facility-card">
          <div class="facility-image image-dining"></div>
          <div class="facility-number">03 / SAVOUR</div>
          <div class="facility-info">
            <h3>Restaurant & Catering</h3>
            <p>Dining, event catering, and convenient food delivery.</p>
            <a href="https://wa.me/${phone}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20restaurant%20and%20catering%20services.">EXPLORE DINING ↗</a>
          </div>
        </article>

        <article class="facility-card">
          <div class="facility-image image-pool"></div>
          <div class="facility-number">04 / UNWIND</div>
          <div class="facility-info">
            <h3>Swimming Pool</h3>
            <p>A relaxing space to slow down and enjoy your time.</p>
            <a href="https://wa.me/${phone}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20swimming%20pool.">POOL ENQUIRIES ↗</a>
          </div>
        </article>

        <article class="facility-card">
          <div class="facility-image image-fitness"></div>
          <div class="facility-number">05 / RECHARGE</div>
          <div class="facility-info">
            <h3>Gym & Fitness</h3>
            <p>A dedicated space for movement, training, and wellness.</p>
            <a href="https://wa.me/${phone}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20gym.">FITNESS ENQUIRIES ↗</a>
          </div>
        </article>

        <article class="facility-card">
          <div class="facility-image image-sports"></div>
          <div class="facility-number">06 / PLAY</div>
          <div class="facility-info">
            <h3>Sports Pitch</h3>
            <p>Space for football, basketball, training, and tournaments.</p>
            <a href="https://wa.me/${phone}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20sports%20pitch.">SPORTS ENQUIRIES ↗</a>
          </div>
        </article>

        <article class="facility-card facility-wide">
          <div class="facility-image image-club"></div>
          <div class="facility-number">07 / CELEBRATE</div>
          <div class="facility-info">
            <h3>Club & Entertainment</h3>
            <p>A welcoming setting for social gatherings, celebrations, and special occasions.</p>
            <a href="https://wa.me/${phone}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20club%20and%20entertainment%20services.">MAKE IT A CELEBRATION ↗</a>
          </div>
        </article>
      </div>
    </section>

    
    <!-- BOOKING INQUIRY SECTION -->
    <section class="booking section-padding" id="booking">
      <div class="booking-heading">
        <span class="eyebrow">
          <span class="gold-dot"></span>
          PLAN YOUR STAY
        </span>
        <h2>Your getaway<br /><em>starts here.</em></h2>
        <p>
          Tell us a little about your visit, and our team
          will help you plan your stay at Jackie's Resort.
        </p>
      </div>

      <form class="booking-form" id="booking-form">
        <div class="booking-field">
          <label for="guest-name">Full name</label>
          <input
            type="text"
            id="guest-name"
            name="guestName"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div class="booking-field">
          <label for="guest-phone">Your phone number</label>
          <input
            type="tel"
            id="guest-phone"
            name="guestPhone"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div class="booking-row">
          <div class="booking-field">
            <label for="check-in">Check-in date</label>
            <input
              type="date"
              id="check-in"
              name="checkIn"
              required
            />
          </div>

          <div class="booking-field">
            <label for="check-out">Check-out date</label>
            <input
              type="date"
              id="check-out"
              name="checkOut"
              required
            />
          </div>
        </div>

        <div class="booking-field">
          <label for="guest-count">Number of guests</label>
          <select id="guest-count" name="guestCount" required>
            <option value="1">1 guest</option>
            <option value="2" selected>2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5 or more">5 or more guests</option>
          </select>
        </div>

        <div class="booking-field">
          <label for="room-type">Accommodation preference</label>
          <select id="room-type" name="roomType" required>
            <option value="Any available room" selected>
              Any available room
            </option>
            <option value="Standard room">Standard room</option>
            <option value="Premium room">Premium room</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <div class="booking-field">
          <label for="booking-message">
            Additional requests (optional)
          </label>
          <textarea
            id="booking-message"
            name="message"
            rows="4"
            placeholder="Tell us about any special requests..."
          ></textarea>
        </div>

        <button class="button button-green booking-submit" type="submit">
          Send Booking Inquiry <span>↗</span>
        </button>

        <p class="booking-note">
          Your request will be sent to our team via WhatsApp.
          Your stay is not confirmed until the resort responds.
        </p>
      </form>
    </section>
    <!-- END BOOKING INQUIRY SECTION -->

    
    <!-- RESORT PHOTO GALLERY -->
    <section class="gallery section-padding" id="gallery">
      <div class="gallery-header">
        <div>
          <span class="eyebrow">
            <span class="gold-dot"></span>
            A GLIMPSE OF JACKIE'S
          </span>
          <h2>Discover your<br /><em>perfect escape.</em></h2>
        </div>

        <p>
          From relaxing stays to unforgettable celebrations,
          discover the experiences waiting for you at Jackie's Resort.
        </p>
      </div>

      <div class="gallery-grid">
        <a
          class="gallery-item gallery-large"
          href="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="${import.meta.env.BASE_URL}images/resort-exterior.jpeg"
            alt="Jackie's Resort building at sunset in Ganta, Liberia"
            loading="lazy"
          />
          <span class="gallery-caption">The Resort</span>
        </a>

        <a
          class="gallery-item"
          href="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="${import.meta.env.BASE_URL}images/resort-grounds.jpeg"
            alt="Jackie's Resort grounds and outdoor sports court"
            loading="lazy"
          />
          <span class="gallery-caption">Relax & Unwind</span>
        </a>

        <a
          class="gallery-item"
          href="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
            alt="Restaurant dining experience"
            loading="lazy"
          />
          <span class="gallery-caption">Dining</span>
        </a>

        <a
          class="gallery-item"
          href="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="${import.meta.env.BASE_URL}images/resort-event.jpeg"
            alt="Elegant event venue"
            loading="lazy"
          />
          <span class="gallery-caption">Events & Celebrations</span>
        </a>

        <a
          class="gallery-item"
          href="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="${import.meta.env.BASE_URL}images/resort-art.jpeg"
            alt="Modern architectural design"
            loading="lazy"
          />
          <span class="gallery-caption">Architecture & Ambience</span>
        </a>
      </div>
    </section>
    <!-- END RESORT PHOTO GALLERY -->

    
    <!-- GUEST TESTIMONIALS -->
    <section class="testimonials section-padding" id="testimonials">
      <div class="testimonials-heading">
        <span class="eyebrow">
          <span class="gold-dot"></span>
          THE GUEST EXPERIENCE
        </span>

        <h2>Moments that<br /><em>stay with you.</em></h2>

        <p>
          Every visit should become a memory worth keeping.
          We look forward to welcoming you to Jackie's Resort.
        </p>
      </div>

      <div class="testimonial-grid">
        <article class="testimonial-card">
          <div class="testimonial-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>

          <blockquote>
            “Add a genuine guest review here about their stay
            and experience at the resort.”
          </blockquote>

          <div class="testimonial-author">
            <span class="testimonial-avatar">G</span>
            <div>
              <h3>Guest Review</h3>
              <p>Accommodation</p>
            </div>
          </div>
        </article>

        <article class="testimonial-card">
          <div class="testimonial-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>

          <blockquote>
            “Add a genuine review here about a wedding,
            conference, or special event.”
          </blockquote>

          <div class="testimonial-author">
            <span class="testimonial-avatar">G</span>
            <div>
              <h3>Guest Review</h3>
              <p>Events & Celebrations</p>
            </div>
          </div>
        </article>

        <article class="testimonial-card">
          <div class="testimonial-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>

          <blockquote>
            “Add a genuine guest review here about the food,
            recreation, or overall hospitality.”
          </blockquote>

          <div class="testimonial-author">
            <span class="testimonial-avatar">G</span>
            <div>
              <h3>Guest Review</h3>
              <p>Dining & Hospitality</p>
            </div>
          </div>
        </article>
      </div>
    </section>
    <!-- END GUEST TESTIMONIALS -->

    <section class="events section-padding" id="events">
      <div class="events-image"></div>
      <div class="events-content">
        <span class="eyebrow"><span class="gold-dot"></span> YOUR MOMENT, YOUR WAY</span>
        <h2>Make room for<br /><em>something special.</em></h2>
        <p>
          Host a conference, organize a workshop, celebrate a milestone,
          or bring people together for an unforgettable occasion.
          Let's make your next event count.
        </p>
        <a class="button button-gold"
          href="https://wa.me/${phone}?text=Hello%20Jackie's%20Resort%2C%20I%20would%20like%20to%20discuss%20an%20event.">
          Discuss Your Event <span>↗</span>
        </a>
      </div>
    </section>

    <section class="service section-padding">
      <span class="eyebrow"><span class="gold-dot"></span> OUR PROMISE TO YOU</span>
      <h2>Hospitality is in<br /><em>the little things.</em></h2>
      <p>
        Professional service. Thoughtful attention. Cleanliness.
        Guest comfort. At Jackie's Resort, we believe that the details
        make the difference — from the moment you arrive until it's
        time to say goodbye.
      </p>
      <div class="service-points">
        <span>01 &nbsp; PERSONAL ATTENTION</span>
        <span>02 &nbsp; GUEST COMFORT</span>
        <span>03 &nbsp; QUALITY SERVICE</span>
      </div>
    </section>

    <section class="contact section-padding" id="contact">
      <div class="contact-copy">
        <span class="eyebrow"><span class="gold-dot"></span> WE'RE HERE FOR YOU</span>
        <h2>Your next experience<br /><em>starts here.</em></h2>
        <p>Have a question or planning a visit? Get in touch with our team.</p>
      </div>

      <div class="contact-details">
        <a href="tel:${phone}" class="contact-item">
          <span class="contact-icon">↗</span>
          <span><small>CALL US</small><strong>+231 77 767 6990</strong></span>
        </a>
        <a href="mailto:${email}" class="contact-item">
          <span class="contact-icon">↗</span>
          <span><small>EMAIL US</small><strong>${email}</strong></span>
        </a>
        <div class="contact-item">
          <span class="contact-icon">⌖</span>
          <span><small>FIND US</small><strong>Peace Community, Ganta, Nimba County, Liberia</strong></span>
        </div>
        <a class="button button-green"
          href="https://wa.me/${phone}?text=Hello%20Jackie's%20Resort%2C%20I%20have%20an%20enquiry.">
          Chat With Us on WhatsApp <span>↗</span>
        </a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <a class="brand footer-brand" href="#home">
      <span class="brand-mark">J</span>
      <span class="brand-copy">
        <strong>JACKIE'S</strong>
        <small>RESORT · GANTA, LIBERIA</small>
      </span>
    </a>
    <p>Accommodation. Dining. Events. Recreation. Entertainment.</p>
    <a href="#home" class="back-top">BACK TO TOP ↑</a>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Jackie's Resort. All rights reserved.</span>
      <span>GANTA, NIMBA COUNTY · LIBERIA</span>
      <span>Feel the Comfort</span>
    </div>
    <div class="power"><p>Power By: <a href="https://main-1-ddqm.onrender.com/">Cyrus Elvis Duo</a></p></div>
  </footer>

  <a class="whatsapp-float"
    href="https://wa.me/${phone}?text=Hello%20Jackie's%20Resort%2C%20I%20have%20an%20enquiry."
    aria-label="Contact Jackie's Resort on WhatsApp">✆</a>

  
    <button
      class="back-to-top"
      id="back-to-top"
      type="button"
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
`

const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.main-nav')

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav-open')
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation')
})

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
  })
})


/* ===== BOOKING FORM: WHATSAPP INTEGRATION ===== */

const bookingForm = document.querySelector('#booking-form')

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const guestName = document.querySelector('#guest-name').value.trim()
  const guestPhone = document.querySelector('#guest-phone').value.trim()
  const checkIn = document.querySelector('#check-in').value
  const checkOut = document.querySelector('#check-out').value
  const guestCount = document.querySelector('#guest-count').value
  const roomType = document.querySelector('#room-type').value
  const message = document.querySelector('#booking-message').value.trim()

  if (checkOut <= checkIn) {
    alert('Please select a check-out date after your check-in date.')
    return
  }

  const bookingMessage = `
Hello Jackie's Resort! I would like to make a booking inquiry.

Full name: ${guestName}
Phone number: ${guestPhone}
Check-in: ${checkIn}
Check-out: ${checkOut}
Number of guests: ${guestCount}
Accommodation preference: ${roomType}
Additional requests: ${message || 'None'}

Please let me know availability and rates. Thank you!
  `.trim()

  const whatsappURL = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(bookingMessage)}`

  window.open(whatsappURL, '_blank', 'noopener,noreferrer')
})


/* ===== BOOKING DATE VALIDATION ===== */

const checkInInput = document.querySelector('#check-in')
const checkOutInput = document.querySelector('#check-out')

const today = new Date()
const todayString = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0'),
].join('-')

checkInInput.min = todayString
checkOutInput.min = todayString

checkInInput.addEventListener('change', () => {
  checkOutInput.min = checkInInput.value || todayString

  if (
    checkOutInput.value &&
    checkOutInput.value <= checkInInput.value
  ) {
    checkOutInput.value = ''
  }
})


/* ===== BACK TO TOP BUTTON ===== */

const backToTopButton = document.querySelector('#back-to-top')

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopButton.classList.add('visible')
  } else {
    backToTopButton.classList.remove('visible')
  }
})

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})