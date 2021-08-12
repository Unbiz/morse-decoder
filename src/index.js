const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    function chunkArray(myArray, chunk_size) {
        let index = 0;
        const arrayLength = myArray.length;
        const tempArray = [];
        for (index = 0; index < arrayLength; index += chunk_size) {
            myChunk = myArray.slice(index, index + chunk_size);
            tempArray.push(myChunk);
        }
        return tempArray;
    }

    const arr = expr.split('**********');
    const result = arr.map(word => {
        const newWord = chunkArray(word, 10);
        const morseWord = newWord.map(item => {
            const newItem = [];
            for (let i = 0; i < item.length; i += 2) {
                if (item[i] != '0') {
                    newItem.push(item.slice(i, i + 2) === '10' ? '.' : '-');
                }
            }
            return MORSE_TABLE[newItem.join('')];
        });
        return morseWord.join('');
    });
    return result.join(' ');
}

module.exports = {
    decode
}