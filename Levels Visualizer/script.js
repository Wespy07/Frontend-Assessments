const startbtn = document.getElementById('start')
const resettbtn = document.getElementById('reset')
const stopbtn = document.getElementById('stop')
const bars = document.querySelectorAll('.bars')
const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')

let intervalId = null;

function getRandomHeight() {
    return Math.floor(Math.random() * 100) + 1;
}

startbtn.addEventListener('click', () => {
    console.log('start clicked')

    if(intervalId !== null){
        clearInterval(intervalId)
    }

    intervalId = setInterval(() => {
        level1.style.height = getRandomHeight() + '%'
        level2.style.height = getRandomHeight() + '%'
        level3.style.height = getRandomHeight() + '%'
        level4.style.height = getRandomHeight() + '%'
        level5.style.height = getRandomHeight() + '%'
    }, 500)
})


resettbtn.addEventListener('click', () => {
    console.log('reset clicked')
    clearInterval(intervalId)
    bars.forEach(e=> {
        e.style.height = '100%'
    })
    intervalId = null
})


stopbtn.addEventListener('click', () => {
    console.log('stop clicked')
    clearInterval(intervalId)
    intervalId = null
})