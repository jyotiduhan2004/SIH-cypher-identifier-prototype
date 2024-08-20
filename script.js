function showResults() {
    const ciphertext = document.getElementById('ciphertext').value.trim();
    const ciphertextLength = ciphertext.length;
    const resultsList = document.getElementById('resultsList');
    const lengthDisplay = document.getElementById('ciphertextLength');

    // Clear previous results
    resultsList.innerHTML = '';
    lengthDisplay.textContent = `Ciphertext Length: ${ciphertextLength} chars`;

    if (!ciphertext) {
        resultsList.innerHTML = '<p>Please enter ciphertext to see results.</p>';
        return;
    }

    // Simulated results for demonstration purposes
    const results = [
        { cipher: 'Polyphonic Substitution', probability: '92.68%' },
        { cipher: 'Key Phrase', probability: '92.68%' },
        { cipher: 'Fractionated Substitution', probability: '2.16%' },
        { cipher: 'Fractionated Morse', probability: '2.16%' }
    ];

    // Display results
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `<strong>${result.cipher}</strong>: ${result.probability}`;
        resultsList.appendChild(resultItem);
    });
}
