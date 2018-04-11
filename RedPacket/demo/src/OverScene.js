var OverLayer=cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;
        // this.addChild(new cc.LayerColor(cc.color.YELLOW));
        //添加背景
        var bg=new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.x=size.width/2;
        bg.y=size.height/2;
        // bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);
        //添加显示框
        var kuang=new cc.Sprite(res.JieShuKuang);
        kuang.x=size.width/2;
        kuang.y=size.height/2;
        this.addChild(kuang);
        //添加菜单
        var startMenuItem=new cc.MenuItemImage(res.ZaiLaiAnNiu_png,res.ZaiLaiAnNiuB_png,function(){
            cc.director.runScene(new StartScene());
        },this);
        startMenuItem.x=size.width/2;
        startMenuItem.y=size.height*0.25;
        var menu=new cc.Menu(startMenuItem);
        menu.x=0;
        menu.y = 0;
        this.addChild(menu);
        //读取并展示分数
        var scoreLabel=new cc.LabelTTF("","",size.width/12);
        scoreLabel.x=size.width*0.46;
        scoreLabel.y=size.width*1.02;
        scoreLabel.setFontFillColor(cc.color.YELLOW);
        kuang.addChild(scoreLabel);

        var score=cc.sys.localStorage.getItem("currentScore");
        scoreLabel.setString(score);
        scoreLabel.scale=0;
        var scaleAction=cc.scaleTo(0.5,1.0).easing(cc.easeElasticOut(0.5));
        var seq=cc.sequence(cc.delayTime(0.2),scaleAction);
        scoreLabel.runAction(seq);
        return true;
    }

});

var OverScene= cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});