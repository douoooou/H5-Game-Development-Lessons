
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    ctor:function () {

        this._super();
        var size=cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));
        //创建精灵数组
        for(var i=0;i<3;i++){
            this.sprites[i] = new cc.Sprite("res/sprite"+(i+1)+".png");
            this.sprites[i].x = size.width*0.2;
            this.sprites[i].y = size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);
        }
        //即时动作(ActionInstant)练习
        // this.sprites[0].runAction(cc.place(this.sprites[0].x+50,this.sprites[0].y));
        //
        // this.sprites[1].runAction(cc.flipX(true));
        // this.sprites[1].runAction(cc.flipY(true));
        //
        // this.sprites[2].runAction(cc.hide());
        // //this.sprites[2].runAction(cc.show());
        //
        // this.sprites[2].runAction(cc.callFunc(function(){
        //     this.sprites[2].runAction(cc.show());
        // },this));

        //间隔动作
        // var action1=cc.moveBy(5,200,0);
        // this.sprites[1].runAction(action1);
        //
        // this.sprites[2].runAction(cc.moveTo(10,400,500));
        //最高点50 跳四次
        // this.sprites[0].runAction(cc.jumpBy(10,cc.p(300,0),50,4));
        // return true;

        //旋转
        // this.sprites[2].runAction(cc.rotateBy(10,0,90,0));
        //使用节点的 暂停 继续 停止 等方法来控制节点动作
        // var node_1_MenuItem,node_2_MenuItem;
        // var isPaused = false;
        // node_1_MenuItem = new cc.MenuItemFont("Node1",function () {
        //     if(!isPaused){
        //         this.sprites[0].pause();
        //         isPaused=!isPaused;
        //         cc.log("pause sprites[0]");
        //     }else{
        //         this.sprites[0].resume();
        //         isPaused=!isPaused;
        //         cc.log("resume sprites[0]");
        //     }
        // },this);
        // node_2_MenuItem = new cc.MenuItemFont("Node2",function () {
        //     // this.sprites[1].stopAction();//需要传对应的action对象
        //     // this.sprites[1].stopActinByTag(tag);
        //     this.sprites[1].stopAllActions();
        // },this);
        //
        // var menu = new cc.Menu(node_1_MenuItem,node_2_MenuItem);
        // menu.y = size.height*0.5;
        // menu.alignItemsHorizontallyWithPadding(50);
        // this.addChild(menu);
//即时动作(ActionInstant)和间隔动作(ActionInterval)
        // 这两类动作都继承于有限时间动作类(FiniteTimeAction)。
        /*
                //间隔动作(ActionInterval)练习二 缩放 淡入淡出
                //this.sprites[0].runAction(cc.scaleBy(2.0,0.5));
                //this.sprites[0].runAction(cc.scaleBy(2.0,0.8,0.5));
                this.sprites[0].runAction(cc.scaleTo(2.0,1.2,1.2));

                this.sprites[1].runAction(cc.fadeOut(2.0));
                this.sprites[2].setOpacity(0);
                this.sprites[2].runAction(cc.fadeIn(5.0));

                var directorPauseItem,directorResumeItem;
                directorPauseItem = new cc.MenuItemFont("pause",function () {
                    cc.director.pause();
                },this);
                directorResumeItem = new cc.MenuItemFont("resume",function () {
                    cc.director.resume();
                },this);

                var menu = new cc.Menu(directorPauseItem,directorResumeItem);
                menu.y = size.height*0.5;
                menu.alignItemsHorizontallyWithPadding(50);
                this.addChild(menu);
        */

        //间隔动作(ActionInterval)练习三 闪烁 进度条 颜色
        // this.sprites[0].runAction(cc.blink(20.0,10));
        //this.sprites[0].runAction(cc.speed(cc.blink(20.0,10),5));//5倍速


        // var timer = new cc.ProgressTimer(this.sprites[1]);
        // timer.x = this.sprites[1].x+100;
        // timer.y = this.sprites[1].y;
        // this.addChild(timer);
        //timer.type = cc.ProgressTimer.TYPE_RADIAL;
        // timer.type = cc.ProgressTimer.TYPE_BAR;
        // timer.midPoint = cc.p(0,0);//控制变化起始点
        // timer.barChangeRate = cc.p(0, 1);//控制x和y方向的变化率
        //  timer.runAction(cc.progressFromTo(5.0,0,90));
        // timer.runAction(cc.progressTo(5.0,50));

        // this.sprites[2].runAction(cc.tintTo(5.0,128,0,0));
        //this.sprites[2].runAction(cc.tintBy(5.0,128,128,128));

        //变速 speed 与 ease
        // this.sprites[1].runAction(cc.speed(cc.moveBy(20,300,0),5));//5倍速
        //
        // var tempAct = cc.moveBy(5.0,200,0);
        // var tempEaseAction = tempAct.easing(cc.easeElasticInOut());//cc.easeBackIn();
        // this.sprites[2].runAction(tempEaseAction)

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

