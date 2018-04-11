var StartLayer=cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;
        var startlabel = new cc.LabelTTF("开 始","",50);
        startlabel.setFontFillColor(cc.color.RED);
        startlabel.enableStroke(cc.color.WHITE,5);

        var startMenuItem = new cc.MenuItemLabel(startlabel,function(){
            //过度方式
            cc.log("调到第二个");
            cc.director.runScene(new cc.TransitionFade(2.0,new MainScene(),cc.color.WHITE));
        },this);
        var menu = new cc.Menu(startMenuItem);
        menu.y = size.height*0.3;
        this.addChild(menu);

        var logo = new cc.LabelTTF("Plane Game");
        logo.setFontSize(size.width / 8);
        logo.enableStroke(cc.color.RED, 5);
        logo.x = size.width / 2;
        logo.y = size.height * 0.8;
        this.addChild(logo);
        return true;
    }

});

var StartScene= cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});