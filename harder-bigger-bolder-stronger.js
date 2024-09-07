export const generateLetters = () => {
    let body = document.getElementsByTagName('body');
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    for (let i = 0 ; i < 120; i++) {
        let letter = createElement('div')
        letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)]
        letter.style.fontSize = `${11 + i}px`;

        if (i < 40) {
            letter.style.fontWeight = '300'
        }else if (i < 80) {
            letter.style.fontWeight = '400'
        }else {
            letter.style.fontWeight = '600'
        }
        body[0].appendChild(letter)
    }
}