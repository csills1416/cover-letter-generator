import { generateCoverLetter } from './utils/api.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inputForm');
    const coverLetterOutput = document.getElementById('coverLetterText');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Extract data from form
        const formData = {
            name: document.getElementById('name').value,
            jobTitle: document.getElementById('jobTitle').value,
            companyName: document.getElementById('companyName').value,
            additionalInfo: document.getElementById('additionalInfo').value
        };

        // Use the utility function to send a request to the server
        generateCoverLetter(formData)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Display the generated cover letter
                coverLetterOutput.textContent = data.coverLetter;
            })
            .catch(error => {
                console.error('Error:', error);
                coverLetterOutput.textContent = 'Error generating cover letter. Please try again.';
            });
    });
});
