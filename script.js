const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || '';
  const business = data.get('business') || '';
  const phone = data.get('phone') || '';
  const type = data.get('type') || 'General enquiry';
  const message = data.get('message') || '';

  const subject = encodeURIComponent(`Prozivo Sports Enquiry - ${type}`);
  const body = encodeURIComponent(
`Name: ${name}
Business: ${business}
Phone: ${phone}
Enquiry: ${type}

Requirement:
${message}`
  );

  // Replace with your real business email.
  window.location.href = `mailto:hello@prozivosports.in?subject=${subject}&body=${body}`;
  status.textContent = 'Opening your email app…';
});
