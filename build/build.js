var Game;
(function (Game_1) {
    var Game = (function () {
        function Game(host) {
            this.host = host;
            this.runInterval = 0;
            this.context = host.getContext("2d");
            this.context.fillStyle = "#ff0000";
            this.context.fillRect(0, 0, 100, 100);
        }
        Game.prototype.run = function () {
            this.runInterval = window.setInterval(function () {
            }, 30);
        };
        return Game;
    }());
    Game_1.Game = Game;
})(Game || (Game = {}));
new Game.Game(document.getElementById('canvas')).run();
//# sourceMappingURL=build.js.map