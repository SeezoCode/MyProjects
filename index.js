
let div = document.getElementById('links')

let links = [{
        text: 'Hangman - GitHub',
        link: 'https://github.com/SeezoCode/Hangman'
    },
    {
        text: 'First year\'s project - Website',
        // link: 'https://github.com/SeezoCode/Website-FirstYearsProject',
        link: 'https://seezocode.github.io/Website-FirstYearsProject'
    },
    {
        text: 'True Multiplayer Snake Game - GitHub',
        link: 'https://github.com/SeezoCode/MultiplayerSnakeGame'
    },
    {
        text: 'Dice Game - Website',
        // link: 'https://github.com/SeezoCode/DiceGame',
        link: 'https://seezocode.github.io/DiceGame/'
    },
    {
        text: 'BMI Calculator - GitHub',
        link: 'https://github.com/SeezoCode/FormsAndSizes'
    },
    {
        text: 'RGB to HEX and reverse - Website',
        // link: 'https://github.com/SeezoCode/RGB-to-Hex',
        link: 'https://seezocode.github.io/RGB-to-Hex'
    },
]

logicWrapper()
function logicWrapper () {
    addLinks()
    setTimeout(() => localStorage[0] = JSON.stringify(links), 5000)
}




function addLinks() {
    if (localStorage[0] !== JSON.stringify(links)) {
        console.log('no match')
        let storageItems = JSON.parse(localStorage[0])
        for (let link of links) {
            if (!findCommonElementObject(link, storageItems)) { // new entry
                createLink(div, link, 'new')
            } else {
                createLink(div, link, link.link)
            }
        }
    } else {
        console.log('matches')
        for (let link of links) {
            createLink(div, link)
        }
    }
}


function createLink(elem, obj, superscript) {
    let a = document.createElement('a');
    if (superscript) {
        a.innerHTML = '<sup style="color: limegreen">new</sup>' + `<a>${obj.text}</a> <br>`
    }
    else a.innerHTML = obj.text + '<br>'

    a.target = '_blank'
    a.href = obj.link;
    elem.appendChild(a);
}


function findCommonElementObject(obj, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(obj) === JSON.stringify(arr[i])) {
            return true
        }
    }
    return false
}