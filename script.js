document.addEventListener('DOMContentLoaded', function() {
    const donorForm = document.getElementById('donorForm');

    donorForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        // You can add code here to handle form submission, like sending data to a server
        alert('Thank you for your donation!');
        donorForm.reset(); // Reset the form after submission
    });
});
