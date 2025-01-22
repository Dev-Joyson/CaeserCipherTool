// Function to show an error message in a Bootstrap modal
function showErrorModal(message) {
    document.getElementById("errorModalMessage").innerText = message;
    let errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
    errorModal.show();
}

// Function to encrypt text using Caesar Cipher
function encryptText() {
    let text = document.getElementById("inputText").value.trim();
    let shift = document.getElementById("shiftValue").value.trim();

    if (text === "") {
        showErrorModal("Please enter some text to encrypt.");
        return;
    }
    if (shift === "" || isNaN(shift)) {
        showErrorModal("Please enter a valid shift value.");
        return;
    }

    shift = parseInt(shift);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-zA-Z]/)) {
            let base = char === char.toUpperCase() ? 65 : 97;
            let newChar = String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
            result += newChar;
        } else {
            result += char;
        }
    }

    document.getElementById("resultText").value = result;
}

// Function to decrypt the text
function decryptText() {
    let text = document.getElementById("inputText").value.trim();
    let shift = document.getElementById("shiftValue").value.trim();

    if (text === "") {
        showErrorModal("Please enter some text to decrypt.");
        return;
    }
    if (shift === "" || isNaN(shift)) {
        showErrorModal("Please enter a valid shift value.");
        return;
    }

    shift = parseInt(shift);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-zA-Z]/)) {
            let base = char === char.toUpperCase() ? 65 : 97;
            let newChar = String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
            result += newChar;
        } else {
            result += char;
        }
    }

    document.getElementById("resultText").value = result;
}

// Function to reset fields
function resetFields() {
    document.getElementById("inputText").value = "";
    document.getElementById("shiftValue").value = "";
    document.getElementById("resultText").value = "";
}
