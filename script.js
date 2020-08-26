(function () {

    let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = innerWidth,
        h = canvas.innerHeigth,
        particles = [],
        properties = {
            bgColor: 'rgba(17,17,19,1)',
particleColor: 'rgba(255,40,40,1)',
particleRadius: 3,
particleCount: 60
        }
    document.querySelector('body').appendChild(canvas)

    window.onresize = function () {
        w = canvas.width = innerWidth,
            h = canvas.innerHeigth
    }

class Particle{
    constructor(){
        this.x = Math.random()*w
        this.y = Math.random()*h
    }
    reDraw(){
        ctx.beginPath()
       ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2)
       ctx.closePath()
        
    }
}


    function redrawBackground() {
        ctx.fillStyle = properties.bgColor
        ctx.fillRect(0, 0, w, h)
    }

    function loop() {
        redrawBackground()
        requestAnimationFrame(loop)
    }

    function init() {
        loop()
    }
}())