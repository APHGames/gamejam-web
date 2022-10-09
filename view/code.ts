import Rellax from 'rellax';

const IMG_WIDTH = 2286;
const IMG_HEIGHT = 2492;

let rellax = new Rellax('.rellax', {
    vertical: true,
    horizontal: false
});

const initRelax = () => {
    rellax.destroy();
    const width = window.innerWidth;
    
    const elements = ['bgr_x4', 'bgr_x5', 'bgr_x6', 'bgr_x7', 'bgr_x8']
    const ratio = IMG_WIDTH / width;
    // 0.1 means 10% from the bottom .. 0.5 as we want the image show up 50% above the border
    const bottom = 0.1 * window.innerHeight - 0.5 * (IMG_HEIGHT / ratio);

    elements.forEach((el, index) => {
        const element = document.getElementById(el);    
        element?.style.setProperty('bottom', `${bottom}px`);

        let speed = ((index + 1) / (ratio) * 3);
        if(el === 'bgr_x7') {
            speed *= (3 * window.innerWidth / window.innerHeight);
        }
        element?.setAttribute('data-rellax-speed', `${speed}`);
    });

    rellax = new Rellax('.rellax', {
        vertical: true,
        horizontal: false
    });
}

window.addEventListener('resize', initRelax);

initRelax();