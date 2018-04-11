var StartLayer=cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.RED));
        var label = new cc.LabelTTF("情长纸短，还吻你万千","",50);
        label.x = size.width*0.5;
        label.y = size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("欢迎进入",function(){
            //过度方式
            // cc.director.runScene(new MainScene());
            // cc.director.runScene(new cc.TransitionPageTurn(1.0,new MainScene(),false));
            cc.director.runScene(new cc.TransitionFade(2.0,new MainScene(),cc.color.WHITE));
            // cc.director.runScene(new cc.TransitionCrossFade(2.0,new MainScene()));
            // cc.director.runScene(new cc.TransitionMoveInL(2.0,new MainScene()));
        },this);
        var menu = new cc.Menu(menuItem);
        this.addChild(menu);
        menu.y = size.height*0.3;
    }

});
// var StartScene=cc.Scene.extend({
//     ctor:function (){
//         this._super();
//         var bgLayer=new BgLayer();
//         this.addChild(bgLayer);
//     }
// });
var StartScene= cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});