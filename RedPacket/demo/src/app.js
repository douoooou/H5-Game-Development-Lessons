var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        // this.addChild(new cc.LayerColor(cc.color.WHITE));
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

