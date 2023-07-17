/**
 * auther:zwqi(戚郑伟)
 */

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();

// 初始化画笔
var ctx;
var can;
var grass;
var goods;
var box;
var button;
var star;
var level;
var toast;
var startTime = Date.now();
var deltaTime = 0;

// 图片资源管理器
var picResourceMap = {};

window.onload = start;

// 游戏入口
function start() {
    init();
    //游戏循环
    gameLoop();
}


//初始化环境
function init() {
    can = document.getElementById("canvas");

    ctx = can.getContext("2d");
    // 加载图片资源
    picResourceMap = new ResourceLoader().loadPic();
    // 加载草
    grass = new Grass();
    goods = new Goods();
    // goods.init();
    box = new Box();
    button = new Button();
    star = new Star();
    star.init();
    level = new Level();
    toast = new Toast();
    can.addEventListener('click', (e) => {
        var point = getEventPosition(e);
        getGoodsOrButton(point);
    });
}

/**
 * 获取点击的点
 * @param ev
 * @returns {{x: *, y: *}}
 */
function getEventPosition(ev){
    var x, y;
    if (ev.offsetX || ev.offsetX === 0) {
        x = ev.offsetX;
        y = ev.offsetY;
    }
    return {x: x, y: y};
}

function getGoodsOrButton(point) {
    // 如果不是关卡选项
    var index;
    if (level.getLevelSwitch()) {
        index = level.getIndex(point);
        index === 1 && level.startGame();
    } else {
        index = goods.getIndex(point);
        console.log('货物位置',index);
        if (index !== -1) {
            // 是货物
            var selectGoods = goods.getGoods(index);
            if (box.addGoods(selectGoods)) {
                // 判断被当前goods盖着的货物是否要允许点击
                goods.showCoverGoods(selectGoods, index);
                box.clearSame();
            }
        } else {
            index = button.getIndex(point);
            if (index !== -1) {
                switch (index) {
                    // 是按钮
                    case 0:
                        var boxGoods = box.getThreeGoods();
                        if (boxGoods === -1) {
                            toast.showText("货架货物少于3个，不需要移动！");
                            return;
                        }
                        button.addReduce(boxGoods);
                        button.clickReduce();
                        break;
                    case 1:
                        button.clickBackStep();
                        break;
                    case 2:
                        button.clickRefresh();
                        break;
                    default:
                        break;
                }
            } else {
                index = button.getReduceIndex(point);
                if (index !== -1) {
                    // 是货物
                    var selectGoods = button.getGoods(index);
                    if (box.addGoods(selectGoods)) {
                        box.clearSame();
                    }
                }
            }
        }
    }
    console.log(index);
}

// 游戏循环
function gameLoop() {
    window.requestAnimFrame(gameLoop);
    var now = Date.now();
    deltaTime = now - startTime;
    startTime = now;
    drawBackGround();
    drawGoods();
    drawBox();
    drawButton();
    drawStar();
    drawlevel();
    drawToast();
}

// 绘制背景
function drawBackGround() {
    grass.draw();
}

// 绘制背景
function drawGoods() {
    goods.draw();
}

// 绘制盒子
function drawBox() {
    box.draw();
}
// 绘制功能按钮
function drawButton() {
    button.draw();
}
// 绘制星星
function drawStar() {
    star.draw();
}
// 绘制关卡
function drawlevel() {
    level.draw();
}

function drawToast() {
    toast.draw();
}
