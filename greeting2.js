const greetingArray = [
    // { text: "HI! I'm Lola", color: "#FDF3DA" },
    { text: "Welcome", color: "#FFC1B2" },
    { text: "to my", color: "#DCE6E5" }
];

async function typeSentence(word, id, delay = 100) {
    const letters = word.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        document.getElementById(id).innerHTML += letters[i];
        i++
    }
    return;
}

async function deleteSentence(id) {
    const word = document.getElementById(id).innerHTML;
    const letters = word.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        document.getElementById(id).innerHTML = letters.join("");
    }
}

async function hiFunction() {
    var i = 0;
//    for (let i = 0; i < greetingArray.length; i++) {
//        updateFontColor('herro', greetingArray[i].color)
//        await typeSentence(greetingArray[i].text, 'herro');
//        await waitForMs(1500);
//        await deleteSentence('herro');
//        await waitForMs(500);
//    }
    updateFontColor('herro', '#BDD5D7');
    await typeSentence("Resume", 'herro');
}

function updateFontColor(id, color) {
    document.getElementById(id).style.color = color;
}

async function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
