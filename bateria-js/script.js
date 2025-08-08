
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
})

document.querySelector('.composer button').addEventListener('click', compose);

function compose() {
    let song = document.querySelector('#input').value;
    let songArray = [];

    if (song !== '') {
        songArray = song.split('');
        console.log(songArray);
    }

    playComposition(songArray);

}

function playComposition(songArray) {

    let wait = 0;

    for (let i of songArray) {

        setTimeout(() => {
            playSound(`key${i}`);
        }, wait);


        wait += 250;
    }
}

function playSound(key) {
    let audioElement = document.querySelector(`#s_${key}`);
    let keyElement = document.querySelector(`div[data-key="${key}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 100);
    }
}
