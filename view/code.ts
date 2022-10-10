import Rellax from 'rellax';

const IMG_WIDTH = 2286;
const IMG_HEIGHT = 2492;

let rellax: any = null;

const initRelax = () => {
    if(rellax) {
        rellax.destroy();
    }   
    const width = window.innerWidth;
    
	// elements that, without this script, would levitate every fucking where
    const elements = ['bgr_x4', 'bgr_x5', 'bgr_x6', 'bgr_x7', 'bgr_x8']
    const ratio = IMG_WIDTH / width;
    // 0.1 means 10% from the bottom .. 0.5 as we want the image show up 50% above the border
    const bottom = 0.1 * window.innerHeight - 0.5 * (IMG_HEIGHT / ratio);

    elements.forEach((el, index) => {
        const element = document.getElementById(el);    
        element?.style.setProperty('bottom', `${bottom}px`);

        let speed = ((index + 1) / (ratio) * 3);
        if(el === 'bgr_x7') {
			// This element is special, because it displays some text
			// why 3? Because... 3 does exactly what I want it to do
            speed *= (3 * window.innerWidth / window.innerHeight);
        }
        if(el === 'bgr_x8') {
            speed /= 1.5;
        }
        element?.setAttribute('data-rellax-speed', `${speed}`);
    });

	// initialize the god damn library... freaking useless undocumented piece of trash
    rellax = new Rellax('.rellax', {
        vertical: true,
        horizontal: false
    });
}

window.addEventListener('resize', initRelax);

initRelax();