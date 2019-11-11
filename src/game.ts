module Game {
    export class Game {
        runInterval = 0;
        context: CanvasRenderingContext2D;
        constructor(private host: HTMLCanvasElement) {
            this.context = host.getContext("2d");
            this.context.fillStyle = "#ff0000";
            this.context.fillRect(0, 0, 100, 100);
        }
        run() {
            this.runInterval = window.setInterval(() => {

            }, 30);
        }
    }
}
new Game.Game(<HTMLCanvasElement>document.getElementById('canvas')).run();