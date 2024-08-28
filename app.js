function encrypt(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        encrypted += String.fromCharCode(text.charCodeAt(i) + 3); // Shift ASCII value
    }
    return encrypted;
}

function decrypt(text) {
    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
        decrypted += String.fromCharCode(text.charCodeAt(i) - 3); // Reverse shift
    }
    return decrypted;
}

document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('outputText').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('inputText').value = decryptedText;
});