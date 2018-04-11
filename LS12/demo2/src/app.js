
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        //控制按钮
        // var recordItem=new cc.MenuItemFont("纪录",function () {
        //     var ls=cc.sys.localStorage;
        //     ls.setItem("currentScore",this.score);
        //     if(this.score>ls.getItem("bestScore")){
        //         ls.setItem("bestScore",this.score);
        //     }
        //     cc.director.runScene(new SecondScene());
        // },this);
        //
        // recordItem.setFontSize(80);
        // recordItem.setColor(cc.color.ORANGE);
        //
        // var menu=new cc.Menu(recordItem);
        // menu.y=size.height*0.5;
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

