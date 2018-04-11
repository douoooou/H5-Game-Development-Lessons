
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));

        var sp1=new cc.Sprite(res.Spider_png);
        sp1.setPosition(size.width/2,size.height*0.7);
        this.addChild(sp1);

        cc.spriteFrameCache.addSpriteFrames(res.enemy11_plist,res.enemy11_png);
        var sp2=new cc.Sprite("#11_L_at_00005.png");
        sp2.setPosition(size.width/2,size.height*0.3);
        this.addChild(sp2);

        var spriteFrame=cc.spriteFrameCache.getSpriteFrame("11_T_wk_00005.png");
        var sp3=new cc.Sprite(spriteFrame);
        sp3.setPosition(size.width/2,size.height*0.5);
        this.addChild(sp3);
        sp3.setScale(0.8);
        var menuItem = new cc.MenuItemFont("移动",function(){
             sp3.y-=2;
             var rect=sp2.getBoundingBox();
             if(cc.rectContainsPoint(rect,sp3.getPosition()))
            {
                cc.log("被扎死了");
            }
            // if(cc.rectContainsPoint(rect,sp3.getBoundingBox()))
            // {
            //     cc.log("被扎死了");
            // }
        },this);
        menuItem.setColor(cc.color.RED);
        var menu = new cc.Menu(menuItem);
        this.addChild(menu);
        menu.setPosition(size.width*0.8,size.height*0.2);

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

