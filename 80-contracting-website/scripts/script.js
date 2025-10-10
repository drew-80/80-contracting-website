// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
	hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
	document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
}));
}

// Simple form handling for contact page
if (window.location.pathname.includes('contact.html') || window.location.href.includes('contact.html')) {
	const contactForm = document.getElementById('contactForm');
	if (contactForm) {
contactForm.addEventListener('submit', function(e) {
		e.preventDefault();

		// Get form data
		const formData = new FormData(this);
		const name = formData.get('name');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const message = formData.get('message');

		// Simple validation
		if (!name || !email || !phone || !message) {
			alert('Please fill in all fields');
			return;
		}

		// In a real application, you would send this to a server
		// For now, we'll just show a success message
		alert('Thank you for your message, ' + name + '! We will contact you soon.');
		this.reset();
		});
	}
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
			});
		}
	});
});