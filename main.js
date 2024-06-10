
function handleButtonClick() {
    const translator = document.getElementById('inputText');
    const result = document.getElementById('outputText');
    const radioButtons = document.querySelectorAll('input[name="action"]');
    const encodeButton = document.getElementById('encode');
    const translateButton = document.getElementById('translate');
    const madlibButton = document.getElementById('madlib');
    const searchButton = document.getElementById('search');
    const randomButton = document.getElementById('random');

  const radioButtons = document.querySelectorAll('[name="translation-section"]')
console.log(radioButtons)

    for (let choice of radioButtons) {
        if (encodeButton.checked) {
            result.innerText = `${encode(translator.value)}`;
        } else if (translateButton.checked) {
            result.innerText = `${translate(translator.value)}`;
        } else if (madlibButton.checked) {
            result.innerText = `${madlib(translator.value)}`;
        } else if (searchButton.checked) {
            result.innerText = '';
            let objArr = search(translator.value);
            for (let obj of objArr) {
                let str = document.createElement('p');
                str.innerText = obj.symbol;
                result.appendChild(str);
            }
            if (objArr.length === 0) {
                result.innerText = 'emoji does not exist';
            }
        } else if (randomButton.checked) {
            let randomNum = Math.floor(Math.random() * 4 + 1);
            if (randomNum === 1) {
                result.innerText = encode(translator.value);
            } else if (randomNum === 2) {
                result.innerText = translate(translator.value);
            } else if (randomNum === 3) {
                result.innerText = madlib(translator.value);
            } else if (randomNum === 4) {
                result.innerText = '';
                let objArr = search(translator.value);
                for (let obj of objArr) {
                    let str = document.createElement('p');
                    str.innerText = obj.symbol;
                    result.appendChild(str);
                }
                if (objArr.length === 0) {
                    result.innerText = 'emoji does not exist';
                }
            }
        }
    }
}
