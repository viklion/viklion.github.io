/**
 * 货架
 */
var Box = function () {
    // 货物列表
    this.boxList = [];

    // {
    //     "name": "cabbage",
    //     "zIndex": 1,
    //     "width": 60,
    //     "height": 66,
    //     "x": 100,
    //     "y": 300,
    //     "canClick": false
    // },{
    //     "name": "carrot",
    //         "zIndex": 1,
    //         "width": 60,
    //         "height": 66,
    //         "x": 100,
    //         "y": 300,
    //         "canClick": false
    // },{
    //     "name": "chicken",
    //         "zIndex": 1,
    //         "width": 60,
    //         "height": 66,
    //         "x": 100,
    //         "y": 300,
    //         "canClick": false
    // },{
    //     "name": "cabbage",
    //         "zIndex": 1,
    //         "width": 60,
    //         "height": 66,
    //         "x": 100,
    //         "y": 300,
    //         "canClick": false
    // }
};

Box.prototype.draw = function () {

    // 槽左边
    ctx.drawImage(picResourceMap.get("left") , 10, 599, 15, 80);
    // 槽底
    ctx.drawImage(picResourceMap.get("box2") , 25, 596, 410, 81);
    // 槽右
    ctx.drawImage(picResourceMap.get("right") , 435, 597, 15, 80);
    // 栏杆左边
    ctx.drawImage(picResourceMap.get("railLeft") , 2, 588, 14, 110);
    // 栏杆右边
    ctx.drawImage(picResourceMap.get("railLeft") , 443, 588, 14, 110);
    // ------------------------------------------------------------
    // 绘制货物
    for (var i = 0; i < this.boxList.length; i++) {
        var goods =  this.boxList[i];
        var startLocation = 21;
        if (i !== 0) {
            startLocation = startLocation + goods.width * i;
        }
        ctx.drawImage(picResourceMap.get("blank") , startLocation, 605, goods.width, goods.height);
        ctx.drawImage(picResourceMap.get(goods.name) , startLocation + 8, 605 + 8,
            goods.width * 0.7, goods.height * 0.7);
    }
    // ------------------------------------------------------------
    // 栏杆底边
    ctx.drawImage(picResourceMap.get("railBootom") , 1, 665, 455, 35);
}

Box.prototype.addGoods = function (goods) {
    this.boxList.push(goods);
    if (this.boxList.length >= 7) {
        toast.showText("货架已满，不能放了！");
        return false;
    }
    return true;
}
// 这块是一个算法，计算一个队列里有3个相同元素的货物，然后删除掉
// 消除数量超过3个相同的
Box.prototype.clearSame = function () {
    if (this.boxList.length === 0 && goods.goodsClear) {
        var nextLevel = level.addLevel();
        goods.init(nextLevel);
        return;
    }
    var boxArray = {};
    this.boxList.forEach((it, index) => {
        boxArray[it.name] = (boxArray[it.name] ? boxArray[it.name] : 0) + 1;
    });
    console.log('boxArray'+ JSON.stringify(boxArray));
    // 消除目标
    var target;
    for (var item in boxArray) {
        if (boxArray[item] >= 3) {
            target = item;
        }
    }
    console.log("消除", target);
    if (!target) return;
    // 删除列表，用来显示星星
    var removeList = [];
    // 临时盒子列表，用来替换旧的盒子列表
    var tempBoxList = [];
    this.boxList.forEach((it, index) => {
        if (it.name === target) {
            removeList.push(index);
        } else {
            tempBoxList.push(it);
        }
    });
    this.boxList = tempBoxList;
    star.pushStar(removeList);
    if (this.boxList.length === 0 && goods.goodsClear()) {
        level.addLevel();
        level.showLevelSwitch();
    }
}

// 减少货架上的货物3个，移动到减少列表里
Box.prototype.getThreeGoods = function () {
    if(this.boxList.length < 3) {
        return -1;
    }
    var reduceList = [];
    var tempBoxList = [];
    for (var i = 0; i < this.boxList.length; i++) {
        if (i < 3) {
            reduceList.push(this.boxList[i]);
        } else {
            tempBoxList.push(this.boxList[i]);
        }
    }
    this.boxList = tempBoxList;
    return reduceList;
}