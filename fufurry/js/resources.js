/**
 * 资源加载器
 * @constructor
 */
var ResourceLoader = function() {
    this.resourceMap = {};
    // 资源常量
    this.Resources = [
        ['bg', 'img/bg.png'],
        ['dot', 'img/29.png'],
        ['blank', 'img/1.png'],
        ['shadow', 'img/2.png'],
        ['tree', 'img/3.png'],
        ['grass', 'img/4.png'],
        ['fire', 'img/5.png'],
        ['brush', 'img/6.png'],
        ['corn', 'img/7.png'],
        ['shears', 'img/8.png'],
        ['moon', 'img/9.png'],
        ['chestnut', 'img/10.png'],
        ['book', 'img/11.png'],
        ['cabbage', 'img/12.png'],
        ['carrot', 'img/13.png'],
        ['chicken', 'img/14.png'],
        ['gift', 'img/15.png'],
        ['bee', 'img/16.png'],
        ['milk', 'img/17.png'],
        ['railBootom', 'img/18.png'],
        ['box', 'img/19.png'],
        ['railLeft', 'img/20.png'],
        ['grassland', 'img/21.png'],
        ['left', 'img/22.png'],
        ['box2', 'img/24.png'],
        ['right', 'img/23.png'],
        ['button', 'img/25.png'],
        ['refresh', 'img/26.png'],
        ['reduce', 'img/27.png'],
        ['backStep', 'img/28.png'],
        ['nextLevel', 'img/30.png'],
        ['blackBlock', 'img/31.png'],
        ['toast', 'img/toast.png']
    ];
}

ResourceLoader.prototype.loadPic = function createPic() {
    this.resourceMap = new Map(this.Resources);
    for (let [key, value] of this.resourceMap) {
        const image = new Image();
        image.src = value;
        this.resourceMap.set(key, image);
    }
    return this.resourceMap;
}

ResourceLoader.prototype.loadMusic = function createMusic() {

}