/**
 * 星星
 */
var Star = function () {
    // 星星列表列表
    this.starList = [];
    // 波纹帧数
    this.num = 150;
    this.alive = 0;
    this.r = 0;
    this.count = 0;
};

Star.prototype.init = function() {
    this.alive = false;
    this.r = 0;
}

Star.prototype.draw = function () {
    ctx.save();
    ctx.lineWidth = 5;
    // 设置阴影
    ctx.shadowBlur = 10;
    ctx.shadowColor = "white";
    if (this.alive) {
        this.r += deltaTime * 0.03;
        var alpha = 1 - this.r / 50;
        ctx.beginPath();
        ctx.arc((Number(this.starList[0]) * 60) + 20 + 30, 605 + 33, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255," + alpha + ")";
        // alpha值，制定了色彩的透明度/不透明度，它的范围为0.0到1.0之间,0.5为半透明。数字越大越透明
        // 比如，如果你想要纯粹的红色作为背景色，你就可以设置为100%红，0%绿和0%蓝。
        ctx.stroke();
        ctx.beginPath();
        ctx.arc((Number(this.starList[1]) * 60) + 20 + 30, 605 + 33, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255," + alpha + ")";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc((Number(this.starList[2]) * 60) + 20 + 30, 605 + 33, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255," + alpha + ")";
        ctx.stroke();

        this.count++;
        if (this.count >= this.num) {
            this.alive = false;
            this.count = 0;
        }
    }
    ctx.restore();

}

Star.prototype.pushStar = function (starList) {
    this.starList = starList;
    //born
    this.alive = true;
    this.r = 20;
}