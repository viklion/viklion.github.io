/**
 * 货架
 */
var Button = function () {
    this.buttonList = [{
        "name": "reduce",
        "x": 35,
        "y": 705,
        "width": 85,
        "height": 74
    },{
        "name": "backStep",
        "x": 180,
        "y": 705,
        "width": 85,
        "height": 74
    },{
        "name": "refresh",
        "x": 325,
        "y": 705,
        "width": 85,
        "height": 74
    }];
    this.reduceList = [];
    // 减少槽内货物功能次数
    this.reduce = 10;
    // 回退一步功能次数
    this.backStep = 10;
    // 刷新功能次数
    this.refresh = 10;
};

Button.prototype.init = function () {
    this.reduce = 10;
    this.backStep = 10;
    this.refresh = 10;
};

Button.prototype.draw = function () {
    for (var i = 0; i < this.reduceList.length; i++) {
        var goods = this.reduceList[i];
        ctx.drawImage(picResourceMap.get("blank"), goods.x, goods.y, goods.width, goods.height);
        ctx.drawImage(picResourceMap.get(goods.name), goods.x + 8, goods.y + 8, goods.width * 0.7, goods.height * 0.7);
    }
    for (var i = 0; i < this.buttonList.length; i++) {
        var button = this.buttonList[i];
        var startLocation = 35;
        if (i !== 0) {
            startLocation = startLocation + 145 * i;
        }
        var currentBut = picResourceMap.get(button.name);
        this.buttonList[i].x = startLocation;
        this.buttonList[i].y = 705;
        this.buttonList[i].width = 85;
        this.buttonList[i].height = 74;
        ctx.drawImage(picResourceMap.get("button"), startLocation, 705, 85, 74);
        ctx.drawImage(currentBut, startLocation + 20, 705 + 8, 48, 52);
        ctx.drawImage(picResourceMap.get("dot"), startLocation + 70, 700, 30, 30);
        ctx.save();
        ctx.font="17px Arial";
        ctx.strokeStyle = "#fff";
        var text;
        if (i === 0) {
            text = this.reduce;
        }
        if (i === 1) {
            text = this.backStep;
        }
        if (i === 2) {
            text = this.refresh;
        }
        ctx.strokeText(text,startLocation + 78, 720);
    }
    ctx.restore();
};

Button.prototype.getIndex = function (point) {
    var returnIndex = -1;
    this.buttonList.forEach((it, index) => {
        if ((it.x < point.x) && (point.x  < (Number(it.x) + Number(it.width))
            && (it.y < point.y) && (point.y < (Number(it.y) + Number(it.height))))) {
            returnIndex = index;
            return;
        }
    });
    return returnIndex;
};

/**
 * 减少卡片
 */
Button.prototype.clickReduce = function () {
    if (this.reduce <= 0) return;
    this.reduce --;
};


Button.prototype.addReduce = function (goods) {
    var reduceStartLocation = 140;
    for (var i = 0; i < goods.length; i++) {
        goods[i].x = reduceStartLocation + 60 * i;
        goods[i].y = 530;
        this.reduceList.push(goods[i]);
    }
};

// 获取减少列表的货物索引
Button.prototype.getReduceIndex = function (point) {
    var returnIndex = -1;
    this.reduceList.forEach((it, index) => {
        if ((it.x < point.x) && (point.x  < (Number(it.x) + Number(it.width))
            && (it.y < point.y) && (point.y < (Number(it.y) + Number(it.height))))) {
            returnIndex = index;
            return;
        }
    });
    return returnIndex;
};
/**
 * 回退一个步骤
 */
Button.prototype.clickBackStep = function () {
    if (this.backStep <= 0) return;
    toast.showText("偷懒了哈，这个不做了！");
    this.backStep --;
};

/**
 * 刷新一个步骤
 */
Button.prototype.clickRefresh = function () {
    if (this.refresh <= 0) return;
    this.refresh --;
    // 刷新货物
    goods.refreshGoods();
};

// 后去货物
Button.prototype.getGoods = function (index) {
    var goods = this.reduceList[index];
    this.reduceList.splice(index, 1);
    return goods;
}