/**
 * 草
 */
var Grass = function () {
    // 总共定义8朵草
    this.num = 8;
    // 存储每个草的坐标
    this.x = [80, 330, 230, 330, 90, 270, 305, 120];
    this.y = [80, 95, 195, 395, 300, 485, 755, 545];
    // y轴偏移量
    this.alpha = 10;
    this.delay = 45;
    this.count = 0;
}


Grass.prototype.draw = function () {
    ctx.drawImage(picResourceMap.get("bg") , 0, 0, 460, 800);
    ctx.save();
    ctx.strokeStyle = "#000";
    ctx.font="20px Arial";
    // var text = can.width + "*" + can.height + " fps:" + Math.trunc(1000 / deltaTime);
    // ctx.strokeText(text,10,30);
    // 小草跳动延迟
    this.count = this.count + 1;
    var l = this.alpha;
    if (this.count > this.delay) {
        l = 1.5 * this.alpha;
        this.count = 0;
    }
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#54951A";
    for (var i = 0; i < this.num; i++) {
        ctx.beginPath();
        // 控制点
        ctx.moveTo(this.x[i], this.y[i]);
        // 二次贝塞尔曲线，结束点
        ctx.quadraticCurveTo(this.x[i] + 2, this.y[i] - (this.alpha + l), this.x[i] + 8, this.y[i]);
        ctx.moveTo(this.x[i] + 5, this.y[i]);
        ctx.quadraticCurveTo(this.x[i] + 8 + 2, this.y[i] - (this.alpha + l), this.x[i] + 16, this.y[i]);
        ctx.moveTo(this.x[i] + 11, this.y[i]);
        ctx.quadraticCurveTo(this.x[i] + 11 + 2, this.y[i] - (this.alpha + l * 2 ), this.x[i] + 24, this.y[i]);
        ctx.stroke();
    }
    ctx.restore();
}