class Animation {
    constructor(element, animationType, options = {}) {
        this.element = element;
        this.animationType = animationType;
        this.options = options;
    }

    animate() {
        switch (this.animationType) {
            case 'pop':
                this.element.animate(
                    [{ transform: 'scale(1)' }, { transform: 'scale(1.2)' }],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'fadeIn':
                this.element.animate(
                    [{ opacity: 0 }, { opacity: 1 }],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'rotate':
                this.element.animate(
                    [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
                    {
                        duration: this.options.duration || 1000,
                        easing: this.options.easing || 'linear',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'bounce':
                this.element.animate(
                    [
                        { transform: 'translateY(0)' },
                        { transform: 'translateY(-30px)' },
                        { transform: 'translateY(0)' }
                    ],
                    {
                        duration: this.options.duration || 500,
                        easing: this.options.easing || 'ease-in-out',
                        iterations: this.options.iterations || 3,
                        fill: 'forwards',
                    }
                );
                break;
            case 'slideInTop':
                this.element.animate(
                    [
                        { transform: 'translateY(-100%)' },
                        { transform: 'translateY(0)' }
                    ],
                    {
                        duration: this.options.duration || 600,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'slideInBottom':
                this.element.animate(
                    [
                        { transform: 'translateY(100%)' },
                        { transform: 'translateY(0)' }
                    ],
                    {
                        duration: this.options.duration || 600,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'slideInLeft':
                this.element.animate(
                    [
                        { transform: 'translateX(-100%)' },
                        { transform: 'translateX(0)' }
                    ],
                    {
                        duration: this.options.duration || 600,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'slideInRight':
                this.element.animate(
                    [
                        { transform: 'translateX(100%)' },
                        { transform: 'translateX(0)' }
                    ],
                    {
                        duration: this.options.duration || 600,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'slideInTopLeft':
                this.element.animate(
                    [
                        { transform: 'translate(-100%, -100%)' },
                        { transform: 'translate(0, 0)' }
                    ],
                    {
                        duration: this.options.duration || 600,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'slideInTopRight':
                this.element.animate(
                    [
                        { transform: 'translate(100%, -100%)' },
                        { transform: 'translate(0, 0)' }
                    ],
                    {
                        duration: this.options.duration || 600,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'slideInBottomLeft':
                this.element.animate(
                    [
                        { transform: 'translate(-100%, 100%)' },
                        { transform: 'translate(0, 0)' }
                    ],
                    {
                        duration: this.options.duration || 600,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'slideInBottomRight':
                this.element.animate(
                    [
                        { transform: 'translate(100%, 100%)' },
                        { transform: 'translate(0, 0)' }
                    ],
                    {
                        duration: this.options.duration || 600,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'flash':
                this.element.animate(
                    [
                        { opacity: 1 },
                        { opacity: 0 },
                        { opacity: 1 }
                    ],
                    {
                        duration: this.options.duration || 500,
                        easing: this.options.easing || 'ease-in-out',
                        iterations: this.options.iterations || 2,
                        fill: 'forwards',
                    }
                );
                break;
            case 'flip':
                this.element.animate(
                    [
                        { transform: 'rotateY(0deg)' },
                        { transform: 'rotateY(180deg)' },
                        { transform: 'rotateY(360deg)' }
                    ],
                    {
                        duration: this.options.duration || 1000,
                        easing: this.options.easing || 'ease-in-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'typewrite':
                this.typewriteAnimation();
                break;
            case 'zoomIn':
                this.element.animate(
                    [{ transform: 'scale(0.5)' }, { transform: 'scale(1)' }],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'zoomOut':
                this.element.animate(
                    [{ transform: 'scale(1)' }, { transform: 'scale(0.5)' }],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'shake':
                this.element.animate(
                    [
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(-10px)' },
                        { transform: 'translateX(10px)' },
                        { transform: 'translateX(0)' },
                    ],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 3,
                        fill: 'forwards',
                    }
                );
                break;
            case 'pulse':
                this.element.animate(
                    [
                        { transform: 'scale(1)' },
                        { transform: 'scale(1.1)' },
                        { transform: 'scale(1)' },
                    ],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 3,
                        fill: 'forwards',
                    }
                );
                break;
            case 'spin':
                this.element.animate(
                    [
                        { transform: 'rotate(0deg)' },
                        { transform: 'rotate(360deg)' },
                    ],
                    {
                        duration: this.options.duration || 1000,
                        easing: this.options.easing || 'linear',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'fadeUp':
                this.element.animate(
                    [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'fadeDown':
                this.element.animate(
                    [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(20px)' }],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'blurIn':
                this.element.animate(
                    [{ filter: 'blur(10px)' }, { filter: 'blur(0px)' }],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            case 'blurOut':
                this.element.animate(
                    [{ filter: 'blur(0px)' }, { filter: 'blur(10px)' }],
                    {
                        duration: this.options.duration || 300,
                        easing: this.options.easing || 'ease-out',
                        iterations: this.options.iterations || 1,
                        fill: 'forwards',
                    }
                );
                break;
            default:
                console.error(`Unknown animation type: ${this.animationType}`);
        }
    }

    typewriteAnimation() {
        const text = this.element.textContent;
        this.element.textContent = '';
        let index = 0;
        let wordIndex = 0;
        const words = text.split(' ');

        const typingSpeed = this.options.typingSpeed || 100;
        const typeBy = this.options.typeBy || 'char'; // added option to type by char or word
        const loop = this.options.loop || false; // added loop option
        const loopDelay = this.options.loopDelay || 1000; // added loop delay option

        const type = () => {
            if (typeBy === 'char') {
                if (index < text.length) {
                    this.element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, typingSpeed);
                } else if (loop) {
                    setTimeout(() => {
                        // Start the new animation
                        const backwardType = () => {
                            if (index > 1) {
                                this.element.textContent = this.element.textContent.slice(0, -1);
                                index--;
                                setTimeout(backwardType, typingSpeed);
                            } else {
                                // Start the forward animation again
                                index = 0;
                                this.element.textContent = '';
                                type();
                            }
                        };
                        backwardType();
                    }, loopDelay);
                }
            } else if (typeBy === 'word') {
                if (wordIndex < words.length) {
                    this.element.textContent += words[wordIndex] + ' ';
                    wordIndex++;
                    setTimeout(type, typingSpeed);
                } else if (loop) {
                    setTimeout(() => {
                        // Start the new animation
                        const backwardType = () => {
                            if (wordIndex > 1) {
                                this.element.textContent = this.element.textContent.slice(0, -words[wordIndex - 1].length - 1);
                                wordIndex--;
                                setTimeout(backwardType, typingSpeed);
                            } else {
                                // Start the forward animation again
                                wordIndex = 0;
                                this.element.textContent = '';
                                type();
                            }
                        };
                        backwardType();
                    }, loopDelay);
                }
            }
        };

        type();
    }
}

export default Animation;