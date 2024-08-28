// Declaración de variables
const encryptButton = document.querySelector('.cis');
const decryptButton = document.querySelector('.des');
const copyButton = document.querySelector('.copy-btn');
const textAreaEncrypt = document.querySelector('.text-box-encrypt');
const textAreaDecrypt = document.querySelector('.text-box-decrypt');

// Función para encriptar texto
function encryptText() {
    let text = textAreaEncrypt.value;
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    textAreaDecrypt.value = encryptedText;
}

// Función para descifrar texto
function decryptText() {
    let text = textAreaDecrypt.value;
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    textAreaEncrypt.value = decryptedText;
}

// Función para copiar texto
function copyText() {
    textAreaDecrypt.select();
    document.execCommand('copy');
}

// Validación para permitir solo letras minúsculas sin acentos
textAreaEncrypt.addEventListener('input', () => {
    textAreaEncrypt.value = textAreaEncrypt.value.toLowerCase().replace(/[^a-z\s]/g, '');
});

// Event listeners
encryptButton.addEventListener('click', encryptText);
decryptButton.addEventListener('click', decryptText);
copyButton.addEventListener('click', copyText);
