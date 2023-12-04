// utils/api.js

export const generateCoverLetter = (formData) => {
    return fetch('/api/cover-letter/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };
  
  // Add any other utility functions related to your application here
  