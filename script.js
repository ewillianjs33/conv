// Subscription function
function subscribe(plan) {
    alert(`Thank you for choosing the ${plan}! Our team will contact you soon for further details.`);
}

// Form submission function
function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Thank you for your message! We will get back to you shortly.');
    document.querySelector('.contact-form').reset(); // Reset form fields
}