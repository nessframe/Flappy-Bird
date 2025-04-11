export class Game {
    SPEED = 3;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.getContext('2d');
        const height = window.visualViewport ? 
            window.visualViewport.height : window.innerHeight;
        const width = window.visualViewport ? 
            Math.min(window.visualViewport.width, height * 0.6) :
            Math.min(window.innerWidth, height * 0.6);
        
    }
}