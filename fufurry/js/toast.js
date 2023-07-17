/**
 * 弹窗
 */
var Toast = function () {
    // 波纹帧数
    this.num = 150;
    this.alive = false;
    this.blob = "";
    this.count = 0;
};


Toast.prototype.draw = function () {
    if (this.alive) {
        ctx.save();
        ctx.font="17px Arial";
        // 设置阴影
        ctx.shadowBlur = 20;
        ctx.strokeStyle = "#ED1C24";
        ctx.strokeText(this.blob,20, 60);
        this.count++;
        if (this.count >= this.num) {
            this.alive = false;
            this.count = 0;
        }
    }
    ctx.restore();

}

Toast.prototype.showText = function (blob) {
    this.blob = blob;
    this.alive = true;
}