const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const inputFilter = Array.from(document.querySelectorAll('[name="filter"]'));
/* eslint-disable */ const funkyLetters = {
    '-': '₋',
    '!': 'ᵎ',
    '?': 'ˀ',
    '(': '⁽',
    ')': '₎',
    '+': '⁺',
    '=': '₌',
    '0': '⁰',
    '1': '₁',
    '2': '²',
    '4': '₄',
    '5': '₅',
    '6': '₆',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
    a: 'ᵃ',
    A: 'ᴬ',
    B: 'ᴮ',
    b: 'ᵦ',
    C: '𝒸',
    d: 'ᵈ',
    D: 'ᴰ',
    e: 'ₑ',
    E: 'ᴱ',
    f: '𝒻',
    F: 'ᶠ',
    g: 'ᵍ',
    G: 'ᴳ',
    h: 'ʰ',
    H: 'ₕ',
    I: 'ᵢ',
    i: 'ᵢ',
    j: 'ʲ',
    J: 'ᴶ',
    K: 'ₖ',
    k: 'ₖ',
    l: 'ˡ',
    L: 'ᴸ',
    m: 'ᵐ',
    M: 'ₘ',
    n: 'ₙ',
    N: 'ᴺ',
    o: 'ᵒ',
    O: 'ᴼ',
    p: 'ᵖ',
    P: 'ᴾ',
    Q: 'ᵠ',
    q: 'ᑫ',
    r: 'ʳ',
    R: 'ᵣ',
    S: 'ˢ',
    s: 'ˢ',
    t: 'ᵗ',
    T: 'ₜ',
    u: 'ᵘ',
    U: 'ᵤ',
    v: 'ᵛ',
    V: 'ᵥ',
    w: '𝓌',
    W: 'ʷ',
    x: 'ˣ',
    X: 'ˣ',
    y: 'y',
    Y: 'Y',
    z: '𝓏',
    Z: 'ᶻ'
};
/* eslint-enable */ function transformText(text) {
    // const filter = document.querySelector('[name="filter"]:checked').value;
    // Array.from(inputFilter).find(input => input.checked)
    // const filter = Array.from(inputFilter).find(input => input.checked);
    const filter = inputFilter.find((input)=>input.checked
    ).value;
    // console.log(text);
    // take text and loop over each letter
    // const modifiedText = Array.from(text).map(filters.filter) ===> b/c its a varible you need to use [ ] to access it 
    const modifiedText = Array.from(text).map(filters[filter]);
    result.textContent = modifiedText.join('');
}
const filters = {
    sarcastic (letter, index) {
        // if 1 is leftover than the letter is odd and will be uppercased
        if (index % 2) return letter.toUpperCase();
        else // if nothing is leftover the letter is even and will be lowercased
        return letter.toLowerCase();
    },
    funky (letter) {
        // check if there is a funky letter 
        let funkyLetter = funkyLetters[letter];
        if (funkyLetter) return funkyLetter;
        // if there is not check if there is a lowercase version
        funkyLetter = funkyLetters[letter.toLowerCase()];
        if (funkyLetter) return funkyLetter;
        // if there is nothing, return the regular letter
        return letter;
    },
    unable (letter) {
        const random = Math.floor(Math.random() * 3);
        if (letter === ' ' && random === 2) return '...';
        return letter;
    }
};
textArea.addEventListener('input', (e)=>transformText(e.target.value)
);
inputFilter.forEach((input)=>input.addEventListener('input', ()=>transformText(textArea.value)
    )
);

//# sourceMappingURL=index.4ad88b2b.js.map
