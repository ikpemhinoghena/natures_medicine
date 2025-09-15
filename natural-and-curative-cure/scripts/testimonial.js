// Testimonial page interactive features & animations

document.addEventListener('DOMContentLoaded', function() {
  // Animate testimonial cards on scroll
  const cards = document.querySelectorAll('.testimonial-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));

  // Add hover effect for cards
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });

  // Randomize card order for freshness
  const grid = document.querySelector('.testimonials-grid');
  if (grid && cards.length > 1) {
    const shuffled = Array.from(cards).sort(() => Math.random() - 0.5);
  shuffled.forEach(card => grid.appendChild(card));
  }

  // Add confetti animation on card click
  cards.forEach(card => {
    card.addEventListener('click', () => {
      showConfetti(card);
    });
  });

  function showConfetti(card) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    card.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1200);
  }
});

// SEO: Structured data for testimonials
(function() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Natural and Curative Cure"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Customer"
    },
    "reviewBody": "See what our happy customers say about our natural herbs."
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(ldJson);
  document.head.appendChild(script);
})();

// Accessibility: Focus ring for cards
(function() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('show-focus');
    }
  });
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('show-focus');
  });
})();
