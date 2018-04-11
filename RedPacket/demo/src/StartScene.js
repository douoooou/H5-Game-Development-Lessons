var StartLayer=cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;
        // this.addChild(new cc.LayerColor(cc.color.YELLOW));
        //添加背景
        var bg=new cc.Sprite(res.KaiShiBeiJing_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);
        //添加logo
        var logo=new cc.Sprite(res.Logo);
        logo.x=size.width*0.5;
        logo.y=size.height*1.5;
        this.addChild(logo);

        //logo弹出
        var moveTo=cc.moveTo(0.5,logo.x,size.height*0.65).easing(cc.easeElasticOut(0.5));
        logo.runAction(moveTo);
        //添加菜单
        var startMenuItem=new cc.MenuItemImage(res.KaiShiAnNiu_png,res.KaiShiAnNiuB_png,function(){
            cc.director.runScene(new MainScene());
        },this);
        startMenuItem.x=size.width/2;
        startMenuItem.y=size.height*0.25;
        var menu=new cc.Menu(startMenuItem);
        menu.x=0;
        menu.y = 0;
        this.addChild(menu);
        //菜单的动画
        startMenuItem.scale=0;
        var scaleAction=cc.scaleTo(0.5,1.0);
        var seq=cc.sequence(cc.delayTime(0.5),scaleAction);
        startMenuItem.runAction(seq);
        // var menuItem = new cc.MenuItemFont("欢迎进入",function(){
        // cc.director.runScene(new cc.TransitionFade(2.0,new MainScene(),cc.color.WHITE));
        // },this);
        // var menu = new cc.Menu(menuItem);
        // this.addChild(menu);
        // menu.y = size.height*0.3;
    }

});
var StartScene= cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});