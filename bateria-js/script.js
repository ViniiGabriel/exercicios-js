
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
})

document.querySelector('div[data-key="keyq"]').addEventListener('click', () => playSound('keyq'));
document.querySelector('div[data-key="keyw"]').addEventListener('click', () => playSound('keyw'));
document.querySelector('div[data-key="keye"]').addEventListener('click', () => playSound('keye'));

document.querySelector('div[data-key="keya"]').addEventListener('click', () => playSound('keya'));
document.querySelector('div[data-key="keys"]').addEventListener('click', () => playSound('keys'));
document.querySelector('div[data-key="keyd"]').addEventListener('click', () => playSound('keyd'));

document.querySelector('div[data-key="keyz"]').addEventListener('click', () => playSound('keyz'));
document.querySelector('div[data-key="keyx"]').addEventListener('click', () => playSound('keyx'));
document.querySelector('div[data-key="keyc"]').addEventListener('click', () => playSound('keyc'));

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
