// coverLetterController.js

async function generateCoverLetter(openai, name, jobTitle, companyName, additionalInfo) {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003", // Update to the latest model if needed
            prompt: `Write a professional cover letter for a person named ${name}, applying for the position of ${jobTitle} at ${companyName}. Additional information: ${additionalInfo}`,
            max_tokens: 500
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('OpenAI Error:', error);
        throw new Error('Error generating cover letter');
    }
}

module.exports = { generateCoverLetter };
