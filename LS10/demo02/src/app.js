
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    sprites:[],
    ctor:function () {
        this._super();
        var size=cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));
        //创建精灵数组
        // for(var i=0;i<3;i++){
        //     this.sprites[i] = new cc.Sprite("res/sprite"+(i+1)+".png");
        //     this.sprites[i].x = size.width*0.2;
        //     this.sprites[i].y = size.height*(0.3*i+0.2);
        //     this.addChild(this.sprites[i]);
        // }
        // //帧动画 方法一
        // var animation = new cc.Animation();
        // for (var i = 1; i < 15; i++) {
        //     //var frameName = "res/Animation/grossini_dance_" + ((i < 10) ? ("0" + i) : i) + ".png";
        //     var frameName = res["sp_animation_"+i];
        //     animation.addSpriteFrameWithFile(frameName);
        // }
        //for (var i = 1; i < 7; i++) {
        //    var frameName = "res/Animation3/pao_" + i + ".png";
        //    animation.addSpriteFrameWithFile(frameName);
        //}

        // animation.setDelayPerUnit(1 / 20);
        // //是否恢复到第一帧
        // animation.setRestoreOriginalFrame(true);
        // var animateAction = cc.animate(animation);
        // //重复执行
        // this.sprites[0].runAction(cc.repeatForever(animateAction));
        //
        //
        // //帧动画 方法二
        // cc.spriteFrameCache.addSpriteFrames(res.sp_animation_plist);
        // var spriteFrames = [];
        // for (var i = 1; i < 15; i++) {
        //     var frameName = "grossini_dance_generic_" + ((i < 10) ? ("0" + i) : i) + ".png";
        //     var frame = cc.spriteFrameCache.getSpriteFrame(frameName);
        //     spriteFrames.push(frame);
        // }
        // var animation = new cc.Animation(spriteFrames, 0.2, 2);
        // //animation.setDelayPerUnit(1 / 30);
        // animation.setRestoreOriginalFrame(true);
        // var animateAction = cc.animate(animation);
        // this.sprites[1].runAction(animateAction);
        // this.sprites[1].runAction(animateAction.repeatForever());
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        var land=new cc.Sprite(res.land_png);
        land.setPosition(cc.p(size.width*0.5,size.height*0.2));
        land.ScaleX(1.5);
        this.addChild(land);

        var sp=new cc.Sprite("#pao_1.png");
        sp.setPosition(cc.p(size.width*0.2,size.height*0.2));
        sp.setAnchorPoint(0.5,0);
        this.addChild(sp);
        this.runner=sp;

        var spriteFrames=[];
        for(var i=1;i<15;i--){
            var frameName="run_"+i+".png";
            var frame=cc.spriteFrameCache.getSpriteFrame(frameName);
            spriteFrames.push(frame);
        }
        var animation = new cc.Animation();
        animation.setDelayPerUnit(1 / 30);
        //是否恢复到第一帧
        animation.setRestoreOriginalFrame(true);
        var animate = cc.animate(animation);
        //重复执行
        sp.runAction(animate.repeatForever());
        sp.runAction(cc.jumpBy(2,0,0,100,1));
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

