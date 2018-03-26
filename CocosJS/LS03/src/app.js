
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size=cc.winSize;

        var layer1=new cc.LayerColor(cc.color.RED,200,200);
        var layer2=new cc.LayerColor(cc.color.YELLOW,200,200);
        var layer3=new cc.LayerColor(cc.color.BLUE,200,200);


        layer1.ignoreAnchor=false;
        layer2.ignoreAnchor=false;
        layer3.ignoreAnchor=false;

        layer1.setAnchorPoint(0,0);
        layer2.setAnchorPoint(1,1);
        layer2.setAnchorPoint(1,0);

        layer1.setPosition(0,0);
        // layer1.setPosition(size.width/2,size.height/2);
        // layer2.setPosition(size.width/2,size.height/2);
        layer2.setPosition(size.width-50,size.height-50);
        layer3.setPosition(size.width-50,50);

        // 旋转
        // layer1.rotation=45;
        // layer2.rotation=45;
        //缩放
        // layer1.setScale(0.5);
        // layer2.setScale(0.5,0.2);

        this.addChild(layer1);
        this.addChild(layer2);
        this.addChild(layer3);
        // 动态旋转
        // layer2.runAction(cc.rotateBy(2,180).repeatForever());
        // layer3.runAction(cc.rotateBy(2,180).repeatForever());

        //动态缩放
        layer2.runAction(cc.scaleBy(0.5,0.5));
        layer3.runAction(cc.scaleBy(0.5,0.5));

        //坐标系转换
        // var node3 = new cc.Sprite(res.Red_png);
        // node3.setAnchorPoint(cc.p(0,1));
        // node3.x=200;
        // node3.y=200;
        // this.addChild(node3);
        //
        // var node4=new cc.Sprite(res.Yellow_png);
        // node4.setAnchorPoint(cc.p(0.5,0.5));
        // node4.x=50;
        // node4.y=50;
        // this.addChild(node4);


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

