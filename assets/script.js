/* ==========================================================================
   INTERAKSI & ANIMASI PORTFOLIO GOMAS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  /* ==========================================
     1. STICKY NAVBAR ON SCROLL
     Menambahkan efek glassmorphism saat di-scroll
     ========================================== */
  const navbar = document.querySelector(".navbar");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* ==========================================
     2. RESPONSIVE MOBILE MENU
     Membuka dan menutup menu navigasi pada layar HP
     ========================================== */
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  // Toggle buka/tutup saat tombol hamburger diklik
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    // Mengubah simbol hamburger (☰) menjadi tanda silang (✕)
    if (mobileMenu.classList.contains("open")) {
      menuBtn.innerHTML = "&#10005;"; // Simbol '✕'
    } else {
      menuBtn.innerHTML = "&#9776;"; // Simbol '☰'
    }
  });

  // Menutup menu mobile saat salah satu link diklik
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.innerHTML = "&#9776;";
    });
  });

  /* ==========================================
     3. ACTIVE NAVIGATION LINK ON SCROLL
     Menyorot menu navigasi sesuai dengan section yang sedang aktif dilayar
     ========================================== */
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const mobLinks = document.querySelectorAll(".mobile-menu a");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Menghitung batas offset agar pergantian link terasa responsif
      if (window.scrollY >= (sectionTop - 250)) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Perbarui status kelas active untuk link desktop
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    // Perbarui status kelas active untuk link mobile
    mobLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  /* ==========================================
     4. SCROLL REVEAL ANIMATION
     Memberikan efek animasi kemunculan elemen saat di-scroll ke bawah
     ========================================== */
  const revealElements = document.querySelectorAll(".reveal");

  const checkReveal = () => {
    const triggerBottom = window.innerHeight * 0.85; // Elemen muncul saat 85% layar di-scroll

    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("active");
      } else {
        // Hapus baris di bawah ini jika Anda ingin animasi hanya berjalan sekali (once: true)
        // element.classList.remove("active");
      }
    });
  };

  // Jalankan pemeriksaan pertama kali saat halaman dimuat
  checkReveal();
  // Jalankan pemeriksaan setiap kali layar di-scroll
  window.addEventListener("scroll", checkReveal);

});
