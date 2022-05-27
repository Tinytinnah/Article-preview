const share = document.querySelector('#share');
const absolute = document.querySelector('#talkbubble');

share.addEventListener('click', (e) => {

    if (absolute.style.display === 'flex') {
        absolute.style.display = 'none';
    }else {
        absolute.style.display = 'flex';
    }
});


separate.addEventListener('click', (e) => {

    if (absolute.style.display === 'none') {
        absolute.style.display = 'flex';
    }else {
        absolute.style.display = 'none';
    }
});
