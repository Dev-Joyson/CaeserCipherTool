# Caesar Cipher Tool

## Description
The Caesar Cipher Tool is a web-based application that allows users to encrypt and decrypt text using the Caesar cipher technique. The tool provides an easy-to-use interface with Bootstrap styling and interactive JavaScript functionality.

## Features
- **Encryption:** Convert plaintext into ciphertext by shifting letters.
- **Decryption:** Convert ciphertext back into plaintext using the same shift value.
- **User-Friendly Interface:** Simple and responsive design with Bootstrap.
- **Reset Function:** Easily clear input and output fields.
- **Error Handling:** Alerts for missing input values.

## Technologies Used
- **HTML5** - Structure of the web application.
- **CSS3 & Bootstrap 5** - Styling and responsiveness.
- **JavaScript** - Caesar cipher logic and interaction.

## Installation
No installation required. Simply clone or download the project and open the `index.html` file in a web browser.

### Clone the repository
```bash
git clone https://github.com/yourusername/caesar-cipher-tool.git
cd caesar-cipher-tool
```

### Open the application
Simply open `index.html` in your preferred web browser.

## Usage

1. **Enter Text:**
   - Type the text you want to encrypt or decrypt in the input text area.
2. **Enter Shift Value:**
   - Provide an integer value to shift the characters.
3. **Encrypt/Decrypt:**
   - Click on `Encrypt` to encode the text.
   - Click on `Decrypt` to decode the text.
4. **Reset Fields:**
   - Click `Reset` to clear all fields.

## File Structure
```
caesar-cipher-tool/
├── index.html       # Main HTML file
├── style.css        # Custom CSS file
├── script.js        # JavaScript file for cipher logic
└── README.md        # Project documentation
```

## Code Explanation

### HTML Structure
- Contains a centered container with input fields for text and shift value.
- Buttons for encryption, decryption, and reset operations.

### CSS Styling
- Light theme design.
- Centered box with padding and shadow.
- Responsive layout using Bootstrap grid system.

### JavaScript Logic
- Handles encryption and decryption using ASCII values.
- Validates input fields and shows alerts for empty inputs.

## Example

### Encryption Example
Input:
```
HELLO
```
Shift: `3`
Output:
```
KHOOR
```

### Decryption Example
Input:
```
KHOOR
```
Shift: `3`
Output:
```
HELLO
```

## Limitations
- Only works with alphabetic characters (A-Z, a-z).
- No special character encryption.

## Future Enhancements
- Support for special characters and spaces.
- Option to choose decryption/encryption method.
- Dark mode toggle.

## Contributing
If you want to contribute, feel free to fork this repository and submit a pull request with your improvements.

## License
This project is licensed under the MIT License.
