// contact.js - Enhanced contact page interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Animate contact cards on load
  document.querySelectorAll('.contact-card, .contact-method').forEach((card, i) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = 'opacity 0.7s cubic-bezier(.25,.8,.25,1), transform 0.7s cubic-bezier(.25,.8,.25,1)';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0) scale(1.04)';
      setTimeout(() => {
        card.style.transform = 'none';
      }, 700);
    }, 200 + i * 180);
  });

  // Form validation and feedback
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const feedback = document.getElementById('contact-feedback');
      if (!name || !email || !message) {
        feedback.textContent = 'Please fill in all fields.';
        feedback.style.color = '#ff6b6b';
        feedback.style.display = 'block';
        return;
      }
      // Simulate sending (replace with AJAX/serverless later)
      feedback.textContent = 'Message sent! We will reply soon.';
      feedback.style.color = '#2e7d32';
      feedback.style.display = 'block';
      form.reset();
      setTimeout(() => { feedback.style.display = 'none'; }, 4000);
    });
  }

  // WhatsApp button animation
  const waBtn = document.querySelector('.contact-method.whatsapp');
  if (waBtn) {
    waBtn.addEventListener('mouseenter', () => {
      waBtn.style.boxShadow = '0 0 24px 4px #25D36644';
    });
    waBtn.addEventListener('mouseleave', () => {
      waBtn.style.boxShadow = '';
    });
  }
});
