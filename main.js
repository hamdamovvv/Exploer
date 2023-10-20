const play = document.querySelector("button")
const music = document.querySelector("#audio")
let a = 1

play.addEventListener('click', (e) => {
    a++
    e.preventDefault()
    if (a % 2 === 0) {
        music.play()
    }
    else {
        music.pause()
    }
})

console.log("Hello world")