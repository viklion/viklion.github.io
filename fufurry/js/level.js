/**
 * 关卡控制
 */
var Level = function () {
    this.levelLocation = {
        "x": 160,
        "y": 390,
        "width": 150,
        "height": 60
    };
    // 总共定义8朵草
    this.level = 1;
    this.levelSwitch = true;
    // 开始关卡按钮偏移量
    this.offset = 460;
}

Level.prototype.draw = function () {
    if (this.levelSwitch) {
        ctx.drawImage(picResourceMap.get("shadow"), -50, -50, 540, 890);
        ctx.drawImage(picResourceMap.get("blackBlock"), 20 + this.offset, 300, 420, 200);
        ctx.save();
        ctx.font="50px Arial";
        ctx.strokeStyle = "#000";
        ctx.strokeText("第  " + this.level + "  关",140 + this.offset, 365);
        ctx.font="20px Arial";
        ctx.strokeStyle = "#fff";
        ctx.drawImage(picResourceMap.get("nextLevel"), 160 + this.offset, 390, 150, 60);
        ctx.strokeText("开始关卡",200 + this.offset, 425);
        ctx.restore();
        if (this.offset >= 0) {
            this.offset -= 3;
        }
    }
}

Level.prototype.getLevelSwitch = function () {
    return this.levelSwitch;
}

Level.prototype.showLevelSwitch = function () {
     this.levelSwitch = true;
     this.offset = 460;
}

Level.prototype.addLevel = function () {
    this.level = this.level + 1;
}

Level.prototype.getIndex = function (point) {
    var returnIndex = -1;
        if ((this.levelLocation.x < point.x) && (point.x  < (Number(this.levelLocation.x) + Number(this.levelLocation.width))
            && (this.levelLocation.y < point.y) && (point.y < (Number(this.levelLocation.y) + Number(this.levelLocation.height))))) {
            return 1;
        }
    return returnIndex;
}

Level.prototype.startGame = function () {
    this.levelSwitch = false;
    goods.init(this.level);
    button.init();
}