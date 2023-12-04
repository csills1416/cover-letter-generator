document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inputForm');
    const coverLetterOutput = document.getElementById('coverLetterText');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        // Extract data from form
        const formData = {
            name: document.getElementById('name').value,
            jobTitle: document.getElementById('jobTitle').value,
            companyName: document.getElementById('companyName').value,
            additionalInfo: document.getElementById('additionalInfo').value
        };

        try {
            // Send POST request to the server
            const response = await fetch('/generate-cover-letter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();

            // Display the generated cover letter
            coverLetterOutput.textContent = result.coverLetter;
        } catch (error) {
            console.error('Error:', error);
            coverLetterOutput.textContent = 'Error generating cover letter. Please try again.';
        }
    });
});
