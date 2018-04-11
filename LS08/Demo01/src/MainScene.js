var MainLayer=cc.Layer.extend({
    ctor:function(){
        this._super();

        var layer = new cc.LayerColor(cc.color.ORANGE);
        this.addChild(layer);
        var size = cc.winSize;
        var label = new cc.LabelTTF(" 我寻了半生的春天，你一笑，便是了 ","",50);
        label.x = size.width*0.5;
        label.y = size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("退出界面",function(){
            cc.director.runScene(new OverScene());
            // cc.director.runScene(new cc.TransitionPageTurn(1.0,new OverScene(),false));
            // cc.director.runScene(new cc.TransitionFade(2.0,new OverScene(),cc.color.BLACK));
            cc.director.runScene(new cc.TransitionCrossFade(2.0,new OverScene()));
            // cc.director.runScene(new cc.TransitionMoveInB(2.0,new OverScene()));
        },this);
        var menu = new cc.Menu(menuItem);
        this.addChild(menu);
        menu.y = size.height*0.3;
        return true;
    }

});


var MainScene= cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});
