
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
         this._super();

         var size=cc.winSize;
         var redLayer=new cc.LayerColor(cc.color.RED,100,100);
         redLayer.ignoreAnchor=false;
         redLayer.setAnchorPoint(0.5,0.5);

         redLayer.y=size.height/2;
         redLayer.x=size.width/2;

         this.redLayer=redLayer;
         this.addChild(this.redLayer);
         this.schedule(this.myCallBack,0.02,cc.REPEAT_FOREVER,2);
         //this.scheduleUpdate();
         return true;
    },

    update:function(dt) {
        this.redLayer.x+=1;

    },
    myCallBack:function(dt){
        this.redLayer+=10;
        if(this.redLayer.x>400){
            this.unschedule(this.myCallBack);
        }
        this.redSprite.y=this.speed;
        if(this.redSprite.y<0){
            this.speed=this.speed;
        }
    },

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

