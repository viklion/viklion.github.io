/**
 * 货物
 */
var Goods = function () {
    // 货物列表
    this.goodsList = [];

    this.tempGoodsList = "";
    this.refreshSwitch = false;
    // 每次旋转的角度
    this.angle = 0;
    // 圆心坐标
    this.dots = {
        x: 210,
        y: 200
    };
    // 半径
    this.radius = 100;
    // 圆角度
    this.angle = 0;
    this.num = 150;
    this.count = 0;
};

Goods.prototype.init = function (level) {
    var json = '';
    if (level === 1) {
        json = '{"respCode":"1000","respMsg":"成功","goodArray":{"1":[{"name":"chicken","width":60,"height":66,"x":240,"y":300,"canClick":false}],"2":[{"name":"cabbage","width":60,"height":66,"x":120,"y":240,"canClick":true},{"name":"chicken","width":60,"height":66,"x":310,"y":500,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":240,"y":330,"canClick":true}],"3":[{"name":"chicken","width":60,"height":66,"x":360,"y":400,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":310,"y":300,"canClick":true}]}}';
    } else if (level === 2) {
        json = '{"respCode":"1000","respMsg":"成功","goodArray":{"1":[{"name":"chicken","width":60,"height":66,"x":310,"y":350,"canClick":false},{"name":"chicken","width":60,"height":66,"x":250,"y":350,"canClick":false},{"name":"chicken","width":60,"height":66,"x":140,"y":230,"canClick":false},{"name":"chicken","width":60,"height":66,"x":240,"y":260,"canClick":true}],"2":[{"name":"cabbage","width":60,"height":66,"x":120,"y":280,"canClick":true},{"name":"chicken","width":60,"height":66,"x":310,"y":400,"canClick":true},{"name":"chicken","width":60,"height":66,"x":140,"y":180,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":310,"y":300,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":240,"y":330,"canClick":true}]}}';
    } else {
        json = '{"respCode":"1000","respMsg":"成功","goodArray":{"1":[{"name":"book","width":60,"height":66,"x":80,"y":126,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":140,"y":126,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":126,"canClick":false},{"name":"chicken","width":60,"height":66,"x":260,"y":126,"canClick":false},{"name":"gift","width":60,"height":66,"x":320,"y":126,"canClick":false},{"name":"bee","width":60,"height":66,"x":80,"y":192,"canClick":false},{"name":"gift","width":60,"height":66,"x":140,"y":192,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":192,"canClick":false},{"name":"chicken","width":60,"height":66,"x":260,"y":192,"canClick":false},{"name":"gift","width":60,"height":66,"x":320,"y":192,"canClick":false},{"name":"bee","width":60,"height":66,"x":80,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":140,"y":258,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":258,"canClick":false},{"name":"chicken","width":60,"height":66,"x":260,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":320,"y":258,"canClick":false},{"name":"grass","width":60,"height":66,"x":80,"y":324,"canClick":false},{"name":"tree","width":60,"height":66,"x":140,"y":324,"canClick":false},{"name":"grass","width":60,"height":66,"x":200,"y":324,"canClick":false},{"name":"tree","width":60,"height":66,"x":260,"y":324,"canClick":false},{"name":"grass","width":60,"height":66,"x":320,"y":324,"canClick":false},{"name":"gift","width":60,"height":66,"x":60,"y":394,"canClick":false},{"name":"book","width":60,"height":66,"x":330,"y":394,"canClick":false}],"2":[{"name":"milk","width":60,"height":66,"x":110,"y":159,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":170,"y":159,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":159,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":159,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":225,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":225,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":225,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":225,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":291,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":291,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":291,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":291,"canClick":false},{"name":"tree","width":60,"height":66,"x":60,"y":399,"canClick":false},{"name":"bee","width":60,"height":66,"x":330,"y":399,"canClick":false}],"3":[{"name":"milk","width":60,"height":66,"x":140,"y":192,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":200,"y":192,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":192,"canClick":false},{"name":"bee","width":60,"height":66,"x":140,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":200,"y":258,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":258,"canClick":false},{"name":"book","width":60,"height":66,"x":60,"y":404,"canClick":false},{"name":"carrot","width":60,"height":66,"x":330,"y":404,"canClick":false}],"4":[{"name":"milk","width":60,"height":66,"x":170,"y":225,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":230,"y":225,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":60,"y":409,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":330,"y":409,"canClick":true}]}}';
    }
    var result = JSON.parse(json);
    if (result.respCode === "1000") {
        var goodArray = result.goodArray;
        for (var item in goodArray) {
            this.goodsList.push(goodArray[item]);
        }
    }
    // var url = "json/level" + level + ".json"
    // $.getJSON(url, (data) => {
    //     var str = JSON.stringify(data);
    //     var result = JSON.parse(str);
    //     if (result.respCode === "1000") {
    //         var goodArray = result.goodArray;
    //         for (var item in goodArray) {
    //             this.goodsList.push(goodArray[item]);
    //         }
    //     }
    // });
}

Goods.prototype.draw = function () {

    // if (this.refreshSwitch) {
    //     this.angle = this.angle + deltaTime * 0.5;
    // }
    for (var i = 0; i < this.goodsList.length; i++) {
        var indexGoods = this.goodsList[i];
        for (var j = 0; j < indexGoods.length; j++) {
            var goods = indexGoods[j];
            if (this.refreshSwitch) {
                // 0.9 是用来减速的
                this.angle = this.angle + deltaTime * 0.9;
                goods.x = this.dots.x + this.radius * Math.sin(this.angle * 3.14 / 180);
                goods.y = this.dots.y + this.radius * Math.cos(this.angle * 3.14 / 180);
            }
            ctx.drawImage(picResourceMap.get("blank"), goods.x, goods.y, goods.width, goods.height);
            ctx.drawImage(picResourceMap.get(goods.name), goods.x + 8, goods.y + 8, goods.width * 0.7, goods.height * 0.7);
            if (!goods.canClick) {
                ctx.drawImage(picResourceMap.get("shadow"), goods.x, goods.y, goods.width, goods.height);
            }
        }
    }
    if (this.refreshSwitch) {
        if (this.count >= this.num) {
            this.count = 0;
            this.refreshSwitch = false;
            this.goodsList = JSON.parse(this.tempGoodsList);
        }
        this.count++;
    }

}

Goods.prototype.getIndex = function (point) {
    var returnIndex = -1;
    for (var i = 0; i < this.goodsList.length; i++) {
        var indexGoods = this.goodsList[i];
        for (var j = 0; j < indexGoods.length; j++) {
            var it = indexGoods[j];
            if (it.canClick && (it.x < point.x) && (point.x  < (Number(it.x) + Number(it.width))
                && (it.y < point.y) && (point.y < (Number(it.y) + Number(it.height))))) {
                return [i,j];
            }
        }
    }
    return returnIndex;
}

Goods.prototype.getGoods = function (index) {
    var line = index[0];
    var row = index[1];
    var goods = this.goodsList[line][row];
    this.goodsList[line].splice(row, 1);
    return goods;
}

Goods.prototype.refreshGoods = function () {
    var goodListStack = [];
    for (var i = 0; i < this.goodsList.length; i++) {
        for (var j = 0; j < this.goodsList[i].length; j++) {
            goodListStack.push(this.goodsList[i][j].name);
        }
    }
    for (var i = 0; i < this.goodsList.length; i++) {
        for (var j = 0; j < this.goodsList[i].length; j++) {
            this.goodsList[i][j].name = goodListStack.pop();
        }
    }
    this.tempGoodsList = JSON.stringify(this.goodsList);
    this.refreshSwitch = true;
}

Goods.prototype.goodsClear = function () {
    for (var i = 0; i < this.goodsList.length; i++) {
        if (this.goodsList[i].length !== 0) {
            return false;
        }
    }
    return true;
}

// 判断被当前goods盖着的货物是否要允许点击
Goods.prototype.showCoverGoods = function (selectGoods, index) {
    var line = index[0];
    if (line !== 0) {
        var nextIndex = line - 1;
        var coverGoods = [];
        for (var i = 0; i < this.goodsList[nextIndex].length; i++) {
            if (goods.calLength(this.goodsList[nextIndex][i].x, this.goodsList[nextIndex][i].y, selectGoods.x, selectGoods.y) < 4356) {
                coverGoods.push({"line": nextIndex, "row": i});
            }
        }
        for (var i = 0; i < coverGoods.length; i++) {
            var currentCoverGoods = true;
            for (var j = 0; j < this.goodsList[line].length; j++) {
                if (goods.calLength(this.goodsList[nextIndex][coverGoods[i].row].x, this.goodsList[nextIndex][coverGoods[i].row].y,
                    this.goodsList[line][j].x, this.goodsList[line][j].y) < 4356) {
                    currentCoverGoods = false;
                    break;
                }
            }
            if (currentCoverGoods) {
                this.goodsList[nextIndex][coverGoods[i].row].canClick = true;
            }
        }
    }
}


// Math.pow(x,y) 方法可返回 x 的 y 次幂的值。
Goods.prototype.calLength = function (x1, y1, x2, y2) {
    return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}