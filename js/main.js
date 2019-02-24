var game = new Phaser.Game(1200, 560, Phaser.CANVAS, 'game', null, true);



//备注：飞板，钻石弹簧都要设置上边界的碰撞检测(已完成)
//关于用代码生成箱子对象，然后设置水和地图与箱子的碰撞检测(已完成)
//加入多线程进行地板的自动升降//更正一下，可以使用Tween来实现（已完成）

//弹簧动画效果（已完成）
//得分（已完成）
//还需完成音乐的加入
//还有游戏时间的计时（已完成）
//人物动画效果(已完成)
//都比较简单

//game.plugins.add(PhaserInput.Plugin);

//使用服务器端制作排行榜
//状态2起码生成12个对象，star可以用group+tween+animation去做。

var map;

var name;
var input;
//var layer1
var layer;
var p;
var cursors;
var stopline_player;

var text;
var scores = 0; //得分

var startTime;
var timerText;
var time = 0;
var result;

var box_cases;
//var box2;
var block3;


var diamonds;
var coins;
var lines;
//var door_top;

var spring; //钻石弹簧
var spring2;
var spring3;

var fly_floor;

var elevator;
var tween_elevator;

var isFly;
var ifDrag;
var red_flag;

/////////////////////////////////////////////////////////
//状态2的一系列变量
var map2;
var _layer;

var triangles;  //地图对象组
var stars;   //代码对象组

var ladder_small;
var deadline2;

var door;
var fires;
var translator1;
var translator2;
var translator3;
var translator4;
var block1;
var block2;
var wheel1;
var wheel2;

var ray;

var text2;

var startTime2;
var timerText2;
var time2 = 0;
var result2;

var result_time = 0;     //time可以使用sum_time去做

var isFlag;
var isAlong;
var isLadder_small;

/////////////////////////////////////////////////////////
//场景3的一些变量
var map3;
var _layer1;

var flowers;    //地图对象组
var mashrooms;

var bridge1;
var bridge2;
var bridge3;


var dinosaur_boss;  //the boss
var ladder;
var dinosaur1;  //dinosaur group()  //3
var dinosaur2;
var dinosaur3;

var ladder_bigs; //group    //5
var bridges;    //group     //3
var stoplines;  //group     //3

var text3;

var startTime3;
var timerText3;
var time3 = 0;
var result3;

var isLadder_bigs;

//////////////////////////////////////////////////////////
var map4;
var _layer2;

var fire_pond;
var stone1;
var stone2;
var waterfall;
var firefall;
var water_pond;
var stairs;
var hidden;
var rotate1;
var rotate2;
var ice;
var ice_block;

var text4;

var startTime4;
var timerText4;
var time4 = 0;
var result4;

var collideTime1;
var collideTime2;
var isStairs;
var isStone1;
var isStone2;

var goals;
var goal1s;

var hidden_star;

var transport2;
var transport3;
var transport4;

var isVectory = false;

//music
var chapter1;
var chapter2;
var chapter3;
var chapter4;
var getcoin;
var getcoin2;
var getcoin3;
var spring_music;
var stone_music;
var death_music;
var vectory_music;
var click_music;
var translator_music;
var jump_music;
var jump_music2;
var powerup;


var award;
game.States = {};


//第一个game状态state，boot
game.States.boot = function() {

    this.init = function(){
        game.scale.pageAlignHorizontally = true; //水平居中
        game.scale.pageAlignVertically = true; //垂直居中
       
    };

    this.preload = function() {
    game.load.image('loading', 'assets/progressbar.png');
    game.load.image('boot_bg', 'assets/boot_bg.png');
    };
    this.create = function() {
    game.state.start('preload');//执行完boot以后执行preload
  };
};
//////////////////////////////////////////
game.States.over = function(){
  this.create = function() {
    // 背景
    var bg = game.add.tileSprite(0, 0, game.width, game.height, 'boot_bg');
    click_music = game.add.audio('click_music', 1, false);
    // 版权
    //this.copyright = game.add.image(12, game.height - 16, 'copyright');
    // 我的飞机
    //this.myplane = game.add.sprite(405, 180, 'myplane');
    //this.myplane.animations.add('fly');
    //this.myplane.animations.play('fly', 12, true);
    // 分数

    var text_game = game.add.bitmapText(460, 250, 'carrier_command','Game Over',32);
    var text_over = game.add.bitmapText(490, 310, 'carrier_command','scores:'+scores,24);

    award = game.add.sprite(400, 0, 'award');
    award.animations.add('win', null, 15, true);
    award.animations.play('win');

    if(time2<time){
        result_time = time;
        var time_over = game.add.bitmapText(485, 370, 'carrier_command','time:'+result,24);
    }
    else if(time3 < time2){
        result_time = time2;
        var time_over = game.add.bitmapText(485, 370, 'carrier_command','time:'+result2,24);
    }
    else if(time4 < time3){
        result_time = time3;
        var time_over = game.add.bitmapText(485, 370, 'carrier_command','time:'+result3,24);
    }
    else{
        result_time = time4;
        var time_over = game.add.bitmapText(485, 370, 'carrier_command','time:'+result4,24);
    }
    

    
    // 重来按钮
    this.replaybutton = game.add.button(420, 430, 'replaybutton', this.onReplayClick, this, 0, 0, 1);
    // 分享按钮
    this.sharebutton = game.add.button(640, 430, 'startbutton', this.onShareClick, this, 0, 0, 1);
    // 背景音乐
    //this.normalback = game.add.audio('normalback', 0.2, true);
    //this.normalback.play();
    /////////////* <input  id="msg" name="msg" value="" style="display:inline"/>*/
  
  /*  <input id="kkk" name="msg" value="" style="display:inline"/>*/
  };
  // 重来
  this.onReplayClick = function() {
    //this.normalback.stop();
    game.state.start('main');
    try{
        click_music.play();
    }catch (e){}
    
    //得分
  };

  this.onShareClick = function(){
    document.getElementById('yyy').value = name;
    document.getElementById('msg').value = result_time;
    document.getElementById('kkk').value = scores;//时间，秒
    document.getElementById('table').submit();

    try{
        click_music.play();
    }catch (e){}
  };

  this.update = function(){
  }
};

//第二个game状态state，preload
game.States.preload = function() {
  this.preload = function() {
    //var boot_bg = game.add.tileSprite(0, 0, game.width, game.height, 'boot_bg');
    var preloadSprite = game.add.sprite(game.width/2-300, game.height/2, 'loading');
    game.load.setPreloadSprite(preloadSprite);
    var style = { font: "32px Arial", fill: "#ffff00", align: "center" };
    var text_process = game.add.text(200, 290, '0%', style);
    game.load.image('bg', 'assets/bg.png'); //  main状态的背景
    
    //game.load.image('copyright', 'assets/copyright.png');
    //game.load.spritesheet('myplane', 'assets/myplane.png', 40, 40, 4);
    game.load.spritesheet('startbutton', 'assets/startbutton.png', 196, 70, 2);//开始按钮
    game.load.spritesheet('playbutton', 'assets/play_button.png', 198, 70, 2);
    game.load.spritesheet('replaybutton', 'assets/replaybutton.png', 196, 70, 2);
    //game.load.image('gameover', 'assets/gameover.png');
    game.load.image('boot1', 'assets/boot1.png');

    //加载游戏地图，在main状态出现
    game.load.tilemap('man', 'assets/latest_map.json', null, Phaser.Tilemap.TILED_JSON);// super_mario.json //mario
    game.load.tilemap('man2', 'assets/cave.json', null, Phaser.Tilemap.TILED_JSON); //加载状态2的地图信息
    game.load.tilemap('man3', 'assets/desert.json', null, Phaser.Tilemap.TILED_JSON); //加载场景3的地图信息
    game.load.tilemap('man4', 'assets/latest4.json', null, Phaser.Tilemap.TILED_JSON);


    //加载状态1和状态2地图文件中的图片
    game.load.image('tile0', 'assets/kenney.png');
    game.load.image('background', 'assets/background_1.png');//super_mario.png//状态1的背景
    game.load.image('background2', 'assets/bg2.png'); //状态2的背景
    game.load.image('background3', 'assets/background3.png');
    game.load.image('background4', 'assets/background4.png');
    game.load.image('tile2', 'assets/kenny_platformer_64x64.png');
    game.load.image('Tile0', 'assets/blocks.png');  //  状态2都是用一张砖块图搭建起来的

    //状态3，json地图里面的图片
    game.load.image('_Tile0', 'assets/land.png');
    game.load.image('_Tile1', 'assets/flower.png');
    game.load.image('_Tile2', 'assets/mashroom.png');

    game.load.image('witchcraft', 'assets/witchcraft.png');


    //加载状态1和状态2地图文件中对象图片
    //game.load.image('flag', 'assets/flag.png');
    //game.load.image('oblique_flag', 'assets/oblique_flag.png');
    game.load.image('triangle', 'assets/triangle.png');//状态2的对象

    game.load.image('case', 'assets/case.png');
    game.load.image('coin', 'assets/coin.png');
    game.load.image('diamond', 'assets/diamond.png');
    game.load.image('line', 'assets/deadline.png');
    game.load.image('stat1_door', 'assets/stat1_door.png');

    //game.load.image('door', 'assets/door.png');
    //game.load.spritesheet('spring','assets/spring.png',100,40,2);
    //把图片资源加载进去
    game.load.bitmapFont('carrier_command', 'assets/carrier_command.png', 'assets/carrier_command.xml');

    //场景4的图片资源
    game.load.spritesheet('fire_pond', 'assets/fire_pond.png', 665, 90, 3);
    game.load.spritesheet('firefall', 'assets/firefall.png', 35, 490, 3);
    game.load.image('stone', 'assets/stone.png');
    game.load.image('stair1', 'assets/stair1.png');
    game.load.image('stair2', 'assets/stair2.png');
    game.load.spritesheet('water_pond', 'assets/water_pond.png', 420, 90, 3);
    game.load.spritesheet('waterfall', 'assets/waterfall.png', 35, 492, 3);
    game.load.image('hidden', 'assets/hidden.png');
    game.load.image('rotate1', 'assets/rotate1.png');
    game.load.image('rotate2', 'assets/rotate2.png');
    game.load.image('ice', 'assets/ice.png');
    game.load.image('ice_block', 'assets/ice_block.png');
    game.load.image('goal', 'assets/goal.png');
    game.load.image('goal1', 'assets/goal1.png');

    //场景3的图片资源
    game.load.image('ladder', 'assets/ladder.png');
    game.load.image('ladder_big', 'assets/ladder_big.png');
    game.load.image('ladder_big2', 'assets/ladder_big2.png');
    game.load.image('ladder_small2', 'assets/ladder_small2.png');
    game.load.image('bridge', 'assets/bridge.png');
    game.load.spritesheet('dinosaur', 'assets/dinosaur.png', 89, 65, 8);
    game.load.spritesheet('dinosaur_boss', 'assets/dinosaur_big.png', 338, 245, 8);
    game.load.image('stopline', 'assets/stopline.png');

    //场景2的图片资源
    game.load.spritesheet('star', 'assets/starts.png', 71, 67, 10);
    game.load.spritesheet('dot_button', 'assets/dot_button.png', 81, 20, 2);
    game.load.spritesheet('fire', 'assets/firesheet.png', 76, 103, 6);
    game.load.spritesheet('ray_long', 'assets/ray_long.png', 52, 365, 4);
    game.load.spritesheet('ray_short', 'assets/ray_short.png', 52, 240, 4);
    game.load.spritesheet('wheel1', 'assets/wheel1.png', 156, 55, 3);
    game.load.spritesheet('award', 'assets/award.png', 400, 300, 60);
    game.load.image('translator_right', 'assets/translator_right.png');
    game.load.image('translator_left', 'assets/translator_left.png');
    game.load.image('block', 'assets/block.png');
    game.load.image('wheel', 'assets/wheel.png');
    game.load.image('door', 'assets/door.png');
    game.load.image('deadline2', 'assets/deadline2.png');

    //场景1的图片资源
    game.load.image('player', 'assets/phaser-dude.png');
    game.load.image('fly_floor', 'assets/move_land.png');
    game.load.spritesheet('spring', 'assets/bounce.png', 35, 26, 2);//弹簧按钮
    game.load.spritesheet('hero', 'assets/character3.png', 28, 35, 16, 0, 2);

    game.load.image('transport2', 'assets/transport2.png');
    game.load.image('transport3', 'assets/transport3.png');
    game.load.image('transport4', 'assets/transport4.png');
    game.load.image('liness', 'assets/liness.png');
    
    game.load.audio('chapter1', 'assets/chapter1.mp3');
    game.load.audio('chapter2', 'assets/chapter2.mp3');
    game.load.audio('chapter3', 'assets/chapter3.mp3');
    game.load.audio('chapter4', 'assets/chapter4.MP3');
    game.load.audio('getcoin', 'assets/getcoin.mp3');//5
    game.load.audio('getcoin2', 'assets/getcoin2.mp3');//10
    game.load.audio('getcoin3', 'assets/getcoin3.mp3');//15
    game.load.audio('spring_music', 'assets/spring.mp3');
    game.load.audio('stone_music', 'assets/stone_music.mp3');
    game.load.audio('death_music', 'assets/death_music.mp3');
    game.load.audio('vectory_music', 'assets/vectory_music.mp3');
    game.load.audio('click_music', 'assets/click_music.mp3');
    game.load.audio('translator_music', 'assets/translator_music.mp3');
    game.load.audio('jump_music', 'assets/jump_music.mp3');
    game.load.audio('jump_music2', 'assets/jump_music2.mp3');
    game.load.audio('powerup', 'assets/powerup.mp3');


    game.load.onFileComplete.add(function(process){
        text_process.setText(process+"%");
    });
  };
  this.create = function() {
    game.state.start('main');//执行完preload以后，执行main
  };
};

///////////////////////////////////////////

//第三个game状态state，main
game.States.main = function() {
  this.create = function() {
    // 背景
    //game.add.plugin(PhaserInput.Plugin);
    game.plugins.add(PhaserInput.Plugin);
    //var bg = game.add.tileSprite(0, 0, game.width, game.height, 'boot_bg');

    click_music = game.add.audio('click_music', 1, false);

    game.physics.startSystem(Phaser.Physics.ARCADE);

    input = game.add.inputField(660, 385,{
    
    font: '18px Arial',
    fill: '#61B329',
    fontWeight: 'bold',
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor:'#ffffff',
    cursorColor: '#ff8c00',

    //font: '18px Arial',
    //fill: '#ffffff',
    //fillAlpha: 0,
    //fontWeight: 'bold',
    //width: 400,
    //min: 10,
    //max: 20,
    //padding: 2,
    //borderWidth: 1,
    //borderColor: '#000',
    //borderRadius: 6,
    //textAlign: 'left',
    //zoom: true,
    //cursorColor : '#ffffff'
    
});
    
    //input.setText("input your name: ");
    input.startFocus();

    // 版权
    //this.copyright = game.add.image(12, game.height - 16, 'copyright');
    // 我的飞机
    //this.myplane = game.add.sprite(100, 100, 'myplane');

    //帧动画，spritesheet的动态显示
    //this.myplane.animations.add('fly');
    //this.myplane.animations.play('fly', 12, true);

    var game_name_text = game.add.bitmapText(400, 100, 'carrier_command','ALICE\'s',64);
    var game_name_text1 = game.add.bitmapText(350, 230, 'carrier_command','ADVENTURE',64);
    var game_name_text2 = game.add.bitmapText(420, 400, 'carrier_command','input your name:',12);
    // 开始按钮
    this.playbutton = game.add.button(580, 450, 'playbutton', this.onStartClick, this, 1, 1, 0);
    // 背景音乐
    //this.normalback = game.add.audio('normalback', 0.2, true);
    //this.normalback.play();
    stopline_player = game.add.group();
    stopline_player.enableBody = true;
    var stopline_player1 = stopline_player.create(100, 250, 'stopline');
    stopline_player1.body.immovable = true;

    var stopline_player2 = stopline_player.create(330, 250,'stopline');
    stopline_player2.body.immovable = true;

    p = game.add.sprite(150, 250, 'hero');
    game.physics.enable(p);
    p.body.gravity.y = 0;
    p.body.bounce.x = 1;
    p.body.velocity.x = 70;
    p.body.collideWorldBounds = true;
    p.animations.add('right', [0, 1, 2, 3, 4, 5], 12, true);
    p.animations.add('left', [11, 10, 9, 8, 7, 6], 12, true);

  };
  this.onStartClick = function() {
    try{
        click_music.play();
    }catch (e){}
    input.endFocus();
    name = input.value;
    //console.log(name);
    game.state.start('start');//执行完main以后执行start，游戏开始
    //this.normalback.stop();
  };

  this.update = function(){
    game.physics.arcade.collide(p, stopline_player);
    if(p.body.velocity.x >=0){
        p.animations.play('right');
    }
    if(p.body.velocity.x <0){
        p.animations.play('left');
    }
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////

game.States.start2 = function() {
  this.create = function(){

    var background = game.add.tileSprite(0, 0, 4200, 560, 'background2');


    chapter2 = game.add.audio('chapter2', 0.03, true);
    try{
        chapter2.play();
    }catch(e){}

    getcoin = game.add.audio('getcoin', 1, false);
    getcoin2 = game.add.audio('getcoin2', 1, false);
    getcoin3 = game.add.audio('getcoin3', 1, false);

    jump_music = game.add.audio('jump_music', 0.05, false);
    //jump_music2 = game.add.audio('jump_music2', 1, false);

    translator_music = game.add.audio('translator_music', 1, false);

    death_music = game.add.audio('death_music', 1, false);
    powerup = game.add.audio('powerup', 1, false);
    
    //start状态开启物理引擎
    game.physics.startSystem(Phaser.Physics.ARCADE);
   

    ///////////////////////////
    map2 = game.add.tilemap('man2'); //mario
    // 此处的SuperMarioBros-World1-1与json中tilesets的name对应


    map2.addTilesetImage('blocks', 'Tile0');
    map2.addTilesetImage('triangle', 'triangle');
   
    
    _layer = map2.createLayer('_layer');
    // resizeWorld会根据tilemap重新设置world的大小
    _layer.resizeWorld();
    //layer.debugSettings.forceFullRedraw = true;
    //var _objLayer = map2.createLayer('_OBJlayer');
  
    
    map2.setCollisionBetween(1, 18, true, _layer, true);

    triangles = game.add.group();
    triangles.enableBody = true;
    map2.createFromObjects('_OBJlayer', 19, 'triangle', 0, true, false, triangles);

    

    ////////////////////////////////////////////////////////////////////////////////////////
    //加入组与对象
    //加入火动画
    fires = game.add.group();
    var fire1 = fires.create(724, 115, 'fire');
    fire1.animations.add('booom', [0, 1, 2, 3, 4, 5], 12, true);
    fire1.animations.play('booom');

    var fire2 = fires.create(1535, 115, 'fire');
    fire2.animations.add('booom', [0, 1, 2, 3, 4, 5], 12, true);
    fire2.animations.play('booom');

    var fire3 = fires.create(2491, 115, 'fire');
    fire3.animations.add('booom', [0, 1, 2, 3, 4, 5], 12, true);
    fire3.animations.play('booom');

    var fire4 = fires.create(3315, 115, 'fire');
    fire4.animations.add('booom', [0, 1, 2, 3, 4, 5], 12, true);
    fire4.animations.play('booom');



    door = game.add.sprite(2890, 433, 'door');
    game.physics.enable(door);
    //加入3块砖
    block1 = game.add.sprite(400, 488, 'block');
    game.physics.enable(block1);
    block1.body.collideWorldBounds = true;
    block1.body.gravity.y = 1100;

    deadline2 = game.add.sprite(815, 540, 'deadline2');
    game.physics.enable(deadline2);

    ladder_small = game.add.sprite(2580, 175, 'ladder_small2');
    game.physics.enable(ladder_small);
    ladder_small.body.immovable = true;

    block2 = game.add.sprite(2030, 490, 'block');
    game.physics.enable(block2);
    block2.body.collideWorldBounds = true;
    block2.body.gravity.y = 1100;
   

    wheel1 = game.add.sprite(815, 491, 'wheel1');
    game.physics.enable(wheel1, Phaser.Physics.ARCADE); //1290 
    wheel1.body.bounce.x = 1;
    wheel1.body.velocity.x = 80;
    wheel1.body.immovable = true;
    wheel1.animations.add('run', [0, 1, 2], 12, true);
    wheel1.animations.play('run');


    wheel2 = game.add.sprite(4045, 500, 'wheel1');
    game.physics.enable(wheel2, Phaser.Physics.ARCADE);
    wheel2.body.collideWorldBounds = true;
    wheel2.animations.add('run', [0, 1, 2], 12, true);
    //wheel2.body.setSize(140, 10, 0, 0);

    transport2 =  game.add.sprite(4120, 30, 'translator_left');
    game.physics.enable(transport2);
    transport2.body.setSize(75, 40, 0, 0);
    transport2.body.immovable = true;
    transport2.anchor.setTo(0.5, 0.5);
    transport2.angle = 270;

    translator1 = game.add.sprite(1825, 415, 'translator_left');
    game.physics.enable(translator1, Phaser.Physics.ARCADE);
    translator1.body.immovable = true;

    translator2 = game.add.sprite(1959, 35, 'translator_right');
    translator3 = game.add.sprite(3080, 63, 'translator_right');

    translator4 = game.add.sprite(3676, 375, 'translator_left');
    game.physics.enable(translator4, Phaser.Physics.ARCADE);
    translator4.body.setSize(75, 40, 0, 0);
    translator4.body.immovable = true;
    translator4.anchor.setTo(0.5, 0.5);
    translator4.angle = 270;

    text2 = game.add.bitmapText(980, 12, 'carrier_command','Scores: '+scores,16);
    text2.fixedToCamera = true;
   
    startTime2 = game.time.totalElapsedSeconds();
    time2 = Math.floor(game.time.totalElapsedSeconds() - startTime2)+time;
    timerText2 = game.add.bitmapText(12, 12, 'carrier_command','TIME:' +time2, 16);
    timerText2.fixedToCamera = true;

    stars = game.add.group();
    stars.enableBody = true;

    var star1 = stars.create(150, 200, 'star');
    var tween_star1 = game.add.tween(star1).to({ x: 270 }, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);
    star1.animations.add('turn', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
    star1.animations.play('turn');

    var star2 = stars.create(1028, 282, 'star');
    var tween_star2 = game.add.tween(star2).to({ x: 1148 }, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);
    star2.animations.add('turn', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
    star2.animations.play('turn');

    var star3 = stars.create(2040, 70, 'star');
    var tween_star3 = game.add.tween(star3).to({ x: 2160 }, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);
    star3.animations.add('turn', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
    star3.animations.play('turn');

    var star4 = stars.create(2685, 105, 'star');
    var tween_star4 = game.add.tween(star4).to({ x: 2805 }, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);
    star4.animations.add('turn', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
    star4.animations.play('turn');

    var star5 = stars.create(2905, 0, 'star');
    var tween_star5 = game.add.tween(star5).to({ x: 3025 }, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);
    star5.animations.add('turn', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
    star5.animations.play('turn');

    ray = game.add.sprite(2625, 210, 'ray_long');
    var tween_ray = game.add.tween(ray).to({ x: 3250 }, 6000, Phaser.Easing.Linear.None, true, 0, -1, true);
    game.physics.enable(ray);
    ray.body.setSize(10, 300, 22, 65);
    ray.animations.add('go', [0, 1, 2, 3], 20, true);
    ray.animations.play('go');
  
    
    ////////////////////////////////////////////////////////////////////////////////////////
    p = game.add.sprite(132, 132, 'hero');
    game.physics.enable(p);
    p.body.gravity.y = 1100;
    p.body.bounce.y = 0;
    p.body.linearDamping = 1.2;
    p.body.collideWorldBounds = true;
    p.animations.add('right', [0, 1, 2, 3, 4, 5], 12, false);
    p.animations.add('left', [11, 10, 9, 8, 7, 6], 12, false);
    // camera
    //镜头随人物移动？
    game.camera.follow(p);
    cursors = game.input.keyboard.createCursorKeys();
  }
 


  this.update = function(){


    
    updateTimerText2();

    if(wheel2.y<150){
      wheel2.body.velocity.y = 0;
      wheel2.body.immovable = true;
      wheel2.animations.stop('run');

    }

    game.physics.arcade.collide(p, _layer, nothing, null, this);
    game.physics.arcade.collide(p, triangles, collectTriangle, null, this);

    game.physics.arcade.collide(p, wheel1, collectWheel1,null, this);

    game.physics.arcade.collide(p, transport2, nextState,null, this);
    

  
    game.physics.arcade.collide(p, deadline2, beKilled, null, this);

    game.physics.arcade.collide(p, wheel2, getWheel2,null, this);

    game.physics.arcade.collide(p, translator1, getTranslator1,null, this);
    game.physics.arcade.collide(p, translator4, getTranslator4,null, this);


    game.physics.arcade.overlap(p, stars, collectStar,null, this);

    game.physics.arcade.overlap(p, ray, beKilled,null, this);


    game.physics.arcade.collide(wheel1, _layer);
    game.physics.arcade.collide(wheel1, deadline2);

    isLadder_small = game.physics.arcade.overlap(p, ladder_small);
    if(isLadder_small && cursors.up.isDown){
        p.body.gravity.y = 0;
        p.body.y = p.body.y + 5;
    }
    else{
        p.body.gravity.y = 1100;
    }
    


    isFlag =  game.physics.arcade.collide(door, ray);
    if(isFlag==true){
      ray.body.setSize(10, 170, 22, 65);
    }
    if(isFlag==false){
      ray.body.setSize(10, 300, 22, 65);
    }
    


    isDrag =  game.physics.arcade.collide(p, block1, collectBlock,null, this);
    if(isDrag==true){
      block1.body.drag.setTo(5000);
    }
    if(isDrag==false){
      block1.body.drag.setTo(0);
    }
    game.physics.arcade.collide(_layer, block1);


    isDrag =  game.physics.arcade.collide(p, block2, collectBlock,null, this);
    if(isDrag==true){
      block2.body.drag.setTo(5000);
    }
    if(isDrag==false){
      block2.body.drag.setTo(0);
    }
    game.physics.arcade.collide(_layer, block2);




    p.body.velocity.x = 0;
    if (cursors.up.isDown) {
        // onFloor才能往上跳
        if (p.body.onFloor()) {
            try{
                jump_music.play();
            }catch(e){}
            p.body.velocity.y = -500;
        }
    }
    if (cursors.left.isDown) {
        p.animations.play('left');
        p.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        p.animations.play('right');
        p.body.velocity.x = 150;
    }


  }

  this.render = function() {

    //game.debug.body(ray);
    //game.debug.bodyInfo(wheel1);
    //game.debug.body(translator4);
   

}

  function collectTriangle(p, triangle) {

    scores = scores + 20;
    try{
        getcoin3.play();
    }catch(e){}
    updateText();
    triangle.kill();
  }
  function nothing(p, _layer) {
    
  }       
   
  function collectBlock(p, block) {
    if (cursors.up.isDown) {
        try{
            jump_music.play();
        }catch(e){}
    p.body.velocity.y = -500;        
    }
  }

  function collectWheel1(p, wheel1) {
    p.body.velocity.x = wheel1.body.velocity.x;
    
    if (cursors.up.isDown) {
        try{
        jump_music.play();
    }catch(e){}
    p.body.velocity.y = -500;        
    }
  }


  function getWheel2(p, wheel2){

    if(p.body.y<505){
       wheel2.body.velocity.y = -100;
       wheel2.animations.play('run');
    }
    if (cursors.up.isDown) {
        try{
            jump_music.play();
        }catch(e){}
    p.body.velocity.y = -500;        
    }
    if(wheel2.y<150){
      wheel2.body.velocity.y = 0;
      wheel2.body.immovable = true;

    }
  }

  function getTranslator1(p, translator1){
    try{
        translator_music.play();
    }catch(e){}
    p.body.x = 1995;
    p.body.y = 35;
  }

  function getTranslator4(p, translator4){
    try{
        translator_music.play();
    }catch(e){}
    p.body.x = 3110;
    p.body.y = 70;
  }

  function collectStar(p, star) {
    scores = scores + 15;
    try{
        getcoin2.play();
    }catch (e){}

    updateText();
    star.kill();
  }

  function nextState(p, transport2) {
    try{
        powerup.play();
    }catch(e){}
    game.state.start('start3');
    chapter2.stop();
  }

  function updateText() {
    text2.setText("Scores: " + scores);
  }

  function  updateTimerText2() {
    time2 = Math.floor(game.time.totalElapsedSeconds() - startTime2)+time;
    //Convert seconds into minutes and seconds
    var minutes = Math.floor(time2 / 60);
    var seconds = Math.floor(time2) - (60 * minutes);
 
    //Display minutes, add a 0 to the start if less than 10
    result2 = (minutes < 10) ? "0" + minutes : minutes;
 
    //Display seconds, add a 0 to the start if less than 10
    result2 += (seconds < 10) ? ":0" + seconds : ":" + seconds;
 
    timerText2.text = 'time:' + result2;
 }

  function beKilled(p, ray) {
    chapter2.stop();
    try{
        death_music.play();
    }catch (e){}
    p.kill();
    game.state.start('over'); //进入游戏结束状态
    
  }

};


//////////////////////////////////////////////////////////////////////////////////////////////////

game.States.start4 = function() {
  this.create = function(){

    
    var background = game.add.tileSprite(0, 0, 4200, 560, 'background4');
    chapter4 = game.add.audio('chapter4', 0.05, true);
    try{
        chapter4.play();
    }catch(e){}

    getcoin = game.add.audio('getcoin', 1, false);
    getcoin2 = game.add.audio('getcoin2', 1, false);
    getcoin3 = game.add.audio('getcoin3', 1, false);


    jump_music = game.add.audio('jump_music', 0.05, false);

    stone_music = game.add.audio('stone_music', 1, false);
    death_music = game.add.audio('death_music', 1, false);
    vectory_music = game.add.audio('vectory_music', 1, false);



    //start状态开启物理引擎
    game.physics.startSystem(Phaser.Physics.ARCADE);
   

    ///////////////////////////
    map4 = game.add.tilemap('man4'); //mario
    // 此处的SuperMarioBros-World1-1与json中tilesets的name对应


    map4.addTilesetImage('witchcraft', 'witchcraft');
    map4.addTilesetImage('goal', 'goal');
    map4.addTilesetImage('goal1','goal1');
   
    
    _layer2 = map4.createLayer('_layer2');
    // resizeWorld会根据tilemap重新设置world的大小
    _layer2.resizeWorld();
    //layer.debugSettings.forceFullRedraw = true;
    //var _objLayer = map2.createLayer('_OBJlayer');
  
    
    map4.setCollisionBetween(1, 672, true, _layer2, true);

    goals = game.add.group();
    goals.enableBody = true;
    map4.createFromObjects('_OBJlayer2', 674, 'goal', 0, true, false, goals);

    goal1s = game.add.group();
    goal1s.enableBody = true;
    map4.createFromObjects('_OBJlayer2', 673, 'goal1', 0, true, false, goal1s);

   


    ////////////////////////////////////////////////////////////////////////////////////////
    //加入组与对象
    //加入火动画
    fire_pond = game.add.sprite(525, 470, 'fire_pond');
    game.physics.enable(fire_pond);
    fire_pond.body.immovable = true;
    fire_pond.animations.add('run', [0, 1, 2], 6, true);
    fire_pond.animations.play('run');

    stone1 = game.add.sprite(595, 245, 'stone');
    game.physics.enable(stone1);

    stone2 = game.add.sprite(1260, 420, 'stone');
    game.physics.enable(stone2);

    collideTime1 = 0;
    firefall = game.add.sprite(840, 0, 'firefall');//未标注，角色与石头，还有瀑布的互动
    game.physics.enable(firefall);
    firefall.body.immovable = true;
    firefall.animations.add('run', [0, 1, 2], 6, true);
    firefall.animations.play('run');


    stairs = game.add.group();
    stairs.enableBody = true;

    var stair1 = stairs.create(1505, 350, 'stair1');
    stair1.body.immovable = true;

    var stair2 = stairs.create(1715, 175, 'stair2');
    stair2.body.immovable = true;

    water_pond = game.add.sprite(1575, 470, 'water_pond');
    game.physics.enable(water_pond);
    water_pond.body.immovable = true;
    water_pond.animations.add('run', [0, 1, 2], 6, true);
    water_pond.animations.play('run');

    collideTime2 = 0;
    waterfall = game.add.sprite(1890, 0, 'waterfall');//未标注，角色与石头，还有瀑布的互动
    game.physics.enable(waterfall);
    waterfall.body.immovable = true;
    waterfall.animations.add('run', [0, 1, 2], 6, true);
    waterfall.animations.play('run');

    hidden_star = game.add.sprite(2370, 180, 'goal1');
    game.physics.enable(hidden_star);

    hidden = game.add.sprite(2205, 140, 'hidden');
    game.physics.enable(hidden);
    hidden.visible = true;


    rotate1 = game.add.sprite(2187.5, 350, 'rotate1');
    game.physics.enable(rotate1);
    rotate1.body.setSize(35, 70);
    rotate1.body.immovable = true;
    rotate1.anchor.setTo(0.5, 0.5);

    rotate2 = game.add.sprite(2572.5, 350, 'rotate2');
    game.physics.enable(rotate2);
    rotate2.body.setSize(35, 70);
    rotate2.body.immovable = true;
    rotate2.anchor.setTo(0.5, 0.5);

    ice = game.add.sprite(3430, 315, 'ice');
    game.physics.enable(ice);
    ice.body.immovable = true;
    

    ice_block = game.add.sprite(3430, 285, 'ice_block');
    game.physics.enable(ice_block, Phaser.Physics.ARCADE); //1290 
    ice_block.body.bounce.x = 1;
    ice_block.body.velocity.x = 80;
    ice_block.body.immovable = true;

    transport4 = game.add.sprite(4140, 203, 'transport4');
    game.physics.enable(transport4);
    transport4.body.immovable = true;


    text4 = game.add.bitmapText(980, 12, 'carrier_command','Scores: '+scores,16);
    text4.fixedToCamera = true;
   
    startTime4 = game.time.totalElapsedSeconds();
    time4 = Math.floor(game.time.totalElapsedSeconds() - startTime4)+time3;
    timerText4 = game.add.bitmapText(12, 12, 'carrier_command','TIME:' +time4, 16);
    timerText4.fixedToCamera = true;
    
    ////////////////////////////////////////////////////////////////////////////////////////
    p = game.add.sprite(132, 132, 'hero');
    game.physics.enable(p);
    p.body.gravity.y = 1100;
    p.body.bounce.y = 0;
    p.body.linearDamping = 1.2;
    p.body.collideWorldBounds = true;
    p.animations.add('right', [0, 1, 2, 3, 4, 5], 12, false);
    p.animations.add('left', [11, 10, 9, 8, 7, 6], 12, false);
    // camera
    //镜头随人物移动？
    game.camera.follow(p);
    cursors = game.input.keyboard.createCursorKeys();
  }
 


  this.update = function(){

    updateTimerText4();

    rotate1.angle -= 1;
    //console.log(rotate1.angle);
    rotate2.angle -= 1;

    if((rotate1.angle<=-120 && rotate1.angle >= -180) ||(rotate1.angle>=120 && rotate1.angle<=180) || (rotate1.angle <= 0 && rotate1.angle >= -60) || (rotate1.angle >= 0 && rotate1.angle <= 60)){
        rotate1.body.setSize(35, 140);
    }
    else{
        rotate1.body.setSize(35, 70);
    }

    if((rotate2.angle<=-120 && rotate2.angle >= -180) ||(rotate2.angle>=120 && rotate2.angle<=180) || (rotate2.angle <= 0 && rotate2.angle >= -60) || (rotate2.angle >= 0 && rotate2.angle <= 60)){
        rotate2.body.setSize(35, 140);
    }
    else{
        rotate2.body.setSize(35, 70);
    }

    game.physics.arcade.collide(p, rotate1);
    game.physics.arcade.collide(p, rotate2);

    game.physics.arcade.collide(p, goals, collectGoal, null, this);
    game.physics.arcade.collide(p, goal1s, collectGoal1, null, this);

    game.physics.arcade.collide(p, hidden_star, collectStar, null, this);

    game.physics.arcade.collide(p, transport4, nextState, null, this);

    game.physics.arcade.collide(ice_block, _layer2);
    game.physics.arcade.collide(p, ice_block, getIceblock, null, this);

    game.physics.arcade.collide(p, _layer2);
    game.physics.arcade.collide(p, fire_pond, beKilled, null, this);
    game.physics.arcade.collide(p, ice, beKilled, null, this);
    game.physics.arcade.collide(p, water_pond, beKilled, null, this);
    game.physics.arcade.collide(stone1, _layer2);

    game.physics.arcade.collide(p, stone1);
    if(stone1.body.velocity.y<0){
        try{
        stone_music.play();
        }catch (e){}
    }
    if(stone1.body.y<=210){
        collideTime1 = collideTime1 + 1;
        firefall.visible = false;
    }

    game.physics.arcade.collide(p, stone2, hiddWaterfall, null, this);
    if(stone2.body.velocity.y>0 && stone2.body.y<=455){
        try{
        stone_music.play();
        }catch (e){}
    }
    if(stone2.body.y>=455){
        collideTime2 = collideTime2 + 1;
        waterfall.visible = false;
    }
    game.physics.arcade.collide(stone2, _layer2);

    game.physics.arcade.overlap(p, hidden, beHidden, null, this);
    game.physics.arcade.overlap(p, firefall, countCollide1, null, this);
    game.physics.arcade.overlap(p, waterfall, countCollide2, null, this);

    isStairs = game.physics.arcade.overlap(p, stairs);
    if(isStairs && cursors.up.isDown){
        p.body.gravity.y = 0;
        p.body.y = p.body.y + 5;
    }
    else{
        p.body.gravity.y = 1100;
    }

    
    
    p.body.velocity.x = 0;
    if (cursors.up.isDown) {
        // onFloor才能往上跳
        if (p.body.onFloor()) {
            try{
                jump_music.play();
            }catch(e){}
            p.body.velocity.y = -500;
        }
    }
    if (cursors.left.isDown) {
        p.animations.play('left');
        p.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        p.animations.play('right');
        p.body.velocity.x = 150;
    }


  }

  this.render = function() {

    //game.debug.body(rotate1);
    //game.debug.body(rotate2);
    //game.debug.body(firefall);
    //game.debug.body(translator4);
   

}


  function beKilled(p, deadthing) {
    chapter4.stop();
    try{
        death_music.play();
    }catch (e){}
    p.kill();
    
    game.state.start('over'); //进入游戏结束状态
  }

  function beHidden(p, hidden) {
    hidden.visible = false;
  }


  function getIceblock(p, ice_block) {
    p.body.velocity.x = ice_block.body.velocity.x;
    if (cursors.up.isDown) {
        try{
            jump_music.play();
        }catch(e){}
    p.body.velocity.y = -500;        
    }
  }

  function countCollide1(p, firefall){
   
    if(collideTime1==0){
         chapter4.stop();
        try{
            death_music.play();
        }catch (e){}
        p.kill();
        
        game.state.start('over');
    }
  }

  function countCollide2(p, waterfall){
    if(collideTime2==0){
        chapter4.stop();
         try{
            death_music.play();
        }catch (e){}
        p.kill();
        
        game.state.start('over');
    }
  }

  function hiddWaterfall(p, stone2){
    if (cursors.up.isDown) {
        try{
            jump_music.play();
        }catch(e){}
    p.body.velocity.y = -500;        
    }
  }

  function collectGoal(p, goal) {
    scores = scores + 15;
    try{
        getcoin.play();
    }catch(e){}

    updateText();
    goal.kill();
  }

  function collectStar(p, hidden_star) {
    try{
        getcoin3.play();
    }catch(e){}
    scores = scores + 15;
    updateText();
    hidden_star.kill();
  }

  function collectGoal1(p, goal1) {
    try{
        getcoin3.play();
    }catch(e){}
    scores = scores + 15;
    updateText();
    goal1.kill();
  }

  function  updateTimerText4() {
    time4 = Math.floor(game.time.totalElapsedSeconds() - startTime4)+time3;
    //Convert seconds into minutes and seconds
    var minutes = Math.floor(time4 / 60);
    var seconds = Math.floor(time4) - (60 * minutes);
 
    //Display minutes, add a 0 to the start if less than 10
    result4 = (minutes < 10) ? "0" + minutes : minutes;
 
    //Display seconds, add a 0 to the start if less than 10
    result4 += (seconds < 10) ? ":0" + seconds : ":" + seconds;
 
    timerText4.text = 'time:' + result4;
 }

 function updateText() {
    text4.setText("Scores: " + scores);
  }

  function nextState(p, transport4){
    isVectory = true;
    chapter4.stop();
    try{
        vectory_music.play();
    }catch(e){}
    game.state.start('over');
  }
};





//////////////////////////////////////////////////////////////////////////////////////////////////

game.States.start3 = function() {
  this.create = function(){

    var background = game.add.tileSprite(0, 0, 4200, 560, 'background3');
    chapter3 = game.add.audio('chapter3', 0.05, true);
    try{
        chapter3.play();
    }catch(e){}
    getcoin = game.add.audio('getcoin', 1, false);
    getcoin2 = game.add.audio('getcoin2', 1, false);
    getcoin3 = game.add.audio('getcoin3', 1, false);

    death_music = game.add.audio('death_music', 1, false);

    jump_music = game.add.audio('jump_music', 0.05, false);

    powerup = game.add.audio('powerup', 1, false);


    //start3状态开启物理引擎
    game.physics.startSystem(Phaser.Physics.ARCADE);
   

    ///////////////////////////
    map3 = game.add.tilemap('man3'); //mario
    
    // 此处的SuperMarioBros-World1-1与json中tilesets的name对应


    map3.addTilesetImage('land', '_Tile0');
    map3.addTilesetImage('flower', '_Tile1');
    map3.addTilesetImage('mashroom', '_Tile2');
    //map2.addTilesetImage('triangle', 'triangle');
   
    
    _layer1 = map3.createLayer('_layer1');
    // resizeWorld会根据tilemap重新设置world的大小
    _layer1.resizeWorld();
    //game.physics.arcade.enable(_layer1);
    //layer.debugSettings.forceFullRedraw = true;
    //var _objLayer = map3.createLayer('_OBJlayer');
  
    
    map3.setCollisionBetween(1, 32, true, _layer1, true);

    

    flowers = game.add.group();
    flowers.enableBody = true;
    map3.createFromObjects('_OBJlayer1', 34, '_Tile1', 0, true, false, flowers);

    mashrooms = game.add.group();
    mashrooms.enableBody = true;
    map3.createFromObjects('_OBJlayer1', 33, '_Tile2', 0, true, false, mashrooms);

    ////////////////////////////////////////////////////////////
    //加入组与对象
    //加入梯子对象
    
    //ladder.body.setSize(15, 210, 20, 0);


    bridges = game.add.group();
    bridges.enableBody = true;
  

    bridge1 = bridges.create(358, 65, 'bridge');
    bridge1.body.setSize(200, 20, 30, 40);
    bridge1.body.immovable = true;

    bridge2 = bridges.create(1125, 415, 'bridge');
    bridge2.body.setSize(200, 20, 30, 40);
    bridge2.body.immovable = true;

    bridge3 = bridges.create(3365, 100, 'bridge');
    bridge3.body.setSize(200, 20, 30, 40);
    bridge3.body.immovable = true;

    ladder_bigs = game.add.group();
    ladder_bigs.enableBody = true;

    ladder = ladder_bigs.create(840, 105, 'ladder');
    ladder.body.immovable = true;

    var ladder1 = ladder_bigs.create(2275, 105, 'ladder_big');
    ladder1.body.immovable = true;

    var ladder2 = ladder_bigs.create(2975, 70, 'ladder_big2');
    ladder2.body.immovable = true;

    var ladder3 = ladder_bigs.create(3275, 140, 'ladder_big2');
    ladder3.body.immovable = true;

    var ladder4 = ladder_bigs.create(3675, 140, 'ladder_big2');
    ladder4.body.immovable = true;

    var ladder5 = ladder_bigs.create(4045, 70, 'ladder_big2');
    ladder5.body.immovable = true;



    dinosaur_boss = game.add.sprite(3100, 210, 'dinosaur_boss');
    game.physics.enable(dinosaur_boss);
    dinosaur_boss.body.setSize(158, 245, 90, 0);
    dinosaur_boss.body.bounce.x = 1;
    //dinosaur_boss.body.bounce.y = 0;
    //dinosaur_boss.body.gravity.y = 0;
    dinosaur_boss.body.velocity.x = 300;
    dinosaur_boss.animations.add('big_dinosaur_right', [0, 1, 2, 3], 8, true);
    dinosaur_boss.animations.add('big_dinosaur_left', [7, 6, 5, 4], 8, true);
    dinosaur_boss.body.collideWorldBounds = true;
    //var tween_dinosaur_boss = game.add.tween(dinosaur_boss).to({ x: 3495 }, 4000, Phaser.Easing.Linear.None, true, 0, -1, true);

    dinosaur1 = game.add.sprite(300, 388, 'dinosaur');
    game.physics.enable(dinosaur1);
    dinosaur1.body.bounce.x = 1;
    dinosaur1.body.velocity.x = 120;
    dinosaur1.animations.add('dinosaur_right', [0, 1, 2, 3], 6, true);
    dinosaur1.animations.add('dinosaur_left', [7, 6, 5, 4], 6, true);
    dinosaur1.body.collideWorldBounds = true;

    dinosaur2 = game.add.sprite(1070, 388, 'dinosaur');
    game.physics.enable(dinosaur2);
    dinosaur2.body.bounce.x = 1;
    dinosaur2.body.velocity.x = 120;
    dinosaur2.animations.add('dinosaur_right', [0, 1, 2, 3], 6, true);
    dinosaur2.animations.add('dinosaur_left', [7, 6, 5, 4], 6, true);
    dinosaur2.body.collideWorldBounds = true;

    dinosaur3 = game.add.sprite(2085, 40, 'dinosaur');
    game.physics.enable(dinosaur3);
    dinosaur3.body.bounce.x = 1;
    dinosaur3.body.velocity.x = 120;
    dinosaur3.animations.add('dinosaur_right', [0, 1, 2, 3], 6, true);
    dinosaur3.animations.add('dinosaur_left', [7, 6, 5, 4], 6, true);
    dinosaur3.body.collideWorldBounds = true;

    


    stoplines = game.add.group();
    stoplines.enableBody = true;
    var stopline1 = stoplines.create(260, 385, 'stopline');
    stopline1.body.immovable = true;

    var stopline2 = stoplines.create(2045, 35, 'stopline');
    stopline2.body.immovable = true;

    var stopline3 = stoplines.create(2625, 35, 'stopline');
    stopline3.body.immovable = true;

    game.add.image(4140, 15, 'transport3');
    transport3 = game.add.sprite(4195, 20, 'liness');
    game.physics.enable(transport3);
    transport3.body.immovable = true;

    text3 = game.add.bitmapText(980, 12, 'carrier_command','Scores: '+scores,16);
    text3.fixedToCamera = true;
   
    startTime3 = game.time.totalElapsedSeconds();
    time3 = Math.floor(game.time.totalElapsedSeconds() - startTime3)+time2;
    timerText3 = game.add.bitmapText(12, 12, 'carrier_command','TIME:' +time3, 16);
    timerText3.fixedToCamera = true;

    /*
    fires = game.add.group();
    var fire1 = fires.create(724, 115, 'fire');
    fire1.animations.add('booom', [0, 1, 2, 3, 4, 5], 12, true);
    fire1.animations.play('booom');

    var fire2 = fires.create(1535, 115, 'fire');
    fire2.animations.add('booom', [0, 1, 2, 3, 4, 5], 12, true);
    fire2.animations.play('booom');

    var fire3 = fires.create(2491, 115, 'fire');
    fire3.animations.add('booom', [0, 1, 2, 3, 4, 5], 12, true);
    fire3.animations.play('booom');

    var fire4 = fires.create(3315, 115, 'fire');
    fire4.animations.add('booom', [0, 1, 2, 3, 4, 5], 12, true);
    fire4.animations.play('booom');
    */
   
  
    
    ////////////////////////////////////////////////////////////
    p = game.add.sprite(35, 280, 'hero');
    game.physics.enable(p);
    p.body.gravity.y = 1100;
    p.body.bounce.y = 0;
    p.body.linearDamping = 1.2;
    p.body.collideWorldBounds = true;
    p.animations.add('right', [0, 1, 2, 3, 4, 5], 12, false);
    p.animations.add('left', [11, 10, 9, 8, 7, 6], 12, false);
    // camera
    //镜头随人物移动？
    game.camera.follow(p);
    cursors = game.input.keyboard.createCursorKeys();
  }
 


  this.update = function(){

    updateTimerText3();
    
    game.physics.arcade.collide(p, _layer1, nothing, null, this);
    game.physics.arcade.collide(p, flowers, collectFlower, null, this);
    game.physics.arcade.collide(p, mashrooms, collectMashroom, null, this);

    game.physics.arcade.collide(p, transport3, nextState, null, this);


    if(p.body.y>=505){
        chapter3.stop();
        try{
            death_music.play();
        }catch(e){}
        p.kill();
        game.state.start('over');
    }
    //判断人是否与梯子发生碰撞检测
    /*
    isLadder = game.physics.arcade.overlap(p, ladder);
    if(isLadder && cursors.up.isDown){
        p.body.gravity.y = 0;
        p.body.y = p.body.y + 5;
    }
    else{
        p.body.gravity.y = 1100;
    }
    */
    game.physics.arcade.collide(dinosaur_boss, _layer1, nothing2, null, this);
    if(dinosaur_boss.body.velocity.x >=0){
        dinosaur_boss.animations.play('big_dinosaur_right');
    }
    if(dinosaur_boss.body.velocity.x <0){
        dinosaur_boss.animations.play('big_dinosaur_left');
    }

    game.physics.arcade.collide(dinosaur1, _layer1);
    game.physics.arcade.collide(dinosaur1, stoplines);
    if(dinosaur1.body.velocity.x >=0){
        dinosaur1.animations.play('dinosaur_right');
    }
    if(dinosaur1.body.velocity.x <0){
        dinosaur1.animations.play('dinosaur_left');
    }

    game.physics.arcade.collide(dinosaur2, _layer1);
    if(dinosaur2.body.velocity.x >=0){
        dinosaur2.animations.play('dinosaur_right');
    }
    if(dinosaur2.body.velocity.x <0){
        dinosaur2.animations.play('dinosaur_left');
    }

    game.physics.arcade.collide(dinosaur3, _layer1);
    game.physics.arcade.collide(dinosaur3, stoplines);
    if(dinosaur3.body.velocity.x >=0){
        dinosaur3.animations.play('dinosaur_right');
    }
    if(dinosaur3.body.velocity.x <0){
        dinosaur3.animations.play('dinosaur_left');
    }

    
    isLadder_bigs = game.physics.arcade.overlap(p, ladder_bigs);
    if(isLadder_bigs && cursors.up.isDown){
        p.body.gravity.y = 0;
        p.body.y = p.body.y + 5;
    }
    else{
        p.body.gravity.y = 1100;
    }


    game.physics.arcade.collide(p, bridges, collideBridge, null, this);
    game.physics.arcade.collide(p, dinosaur1, beKilled, null, this);
    game.physics.arcade.collide(p, dinosaur2, beKilled, null, this);
    game.physics.arcade.collide(p, dinosaur3, beKilled, null, this);
    game.physics.arcade.collide(p, dinosaur_boss, beKilled, null, this);



    p.body.velocity.x = 0;
    if (cursors.up.isDown) {
        // onFloor才能往上跳
        if (p.body.onFloor()) {
            try{
                jump_music.play();
            }catch(e){}
            p.body.velocity.y = -500;
        }
    }
    if (cursors.left.isDown) {
        p.animations.play('left');
        p.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        p.animations.play('right');
        p.body.velocity.x = 150;
    }


  }

  this.render = function() {
    //game.debug.body(transport3);
    /*
    game.debug.body(ladder);
    game.debug.body(bridge1);
    game.debug.body(bridge2);
    game.debug.body(bridge3);
    
    game.debug.body(dinosaur1);
    game.debug.body(dinosaur2);
    game.debug.body(dinosaur3);
    //game.debug.body(translator4);
   */

}

function nothing(p, _layer1) {
    
  }      

function nothing2(dinosaur_boss, _layer1) {

  }  

function collideBridge(){
    if (cursors.up.isDown) {
        try{
            jump_music.play();
        }catch(e){}
    p.body.velocity.y = -500;        
    }
}

function  updateTimerText3() {
    time3 = Math.floor(game.time.totalElapsedSeconds() - startTime3)+time2;
    //Convert seconds into minutes and seconds
    var minutes = Math.floor(time3 / 60);
    var seconds = Math.floor(time3) - (60 * minutes);
 
    //Display minutes, add a 0 to the start if less than 10
    result3 = (minutes < 10) ? "0" + minutes : minutes;
 
    //Display seconds, add a 0 to the start if less than 10
    result3 += (seconds < 10) ? ":0" + seconds : ":" + seconds;
 
    timerText3.text = 'time:' + result3;
 }

 function updateText() {
    text3.setText("Scores: " + scores);
  }

  function beKilled(p, dinosaur) {
    chapter3.stop();
    try{
        death_music.play();
    }catch(e){}
    p.kill();
    
    game.state.start('over'); //进入游戏结束状态
  }

  function collectFlower(p, flower) {
    try{
        getcoin.play();
    }catch(e){}
    scores = scores + 5;
    updateText();
    flower.kill();
  }

  function collectMashroom(p, mashroom) {
    scores = scores + 10;
    try{
        getcoin3.play();
    }catch(e){}
    updateText();
    mashroom.kill();
  }

  function nextState(p, transport3){
    chapter3.stop();
    try{
        powerup.play();
    }catch(e){}
    game.state.start('start4');
  }
};



/////////////////////////////////////////////////////////////////////////////////////////////////

game.States.start = function() {
  this.create = function(){
   

    /////////////////////////////////////////////////////////
    //加入时间
   

    var background = game.add.tileSprite(0, 0, 4200, 560, 'background');
    
    chapter1 = game.add.audio('chapter1', 0.03, true);
    getcoin = game.add.audio('getcoin', 1, false);
    getcoin2 = game.add.audio('getcoin2', 1, false);
    getcoin3 = game.add.audio('getcoin3', 1, false);

    jump_music = game.add.audio('jump_music', 0.05, false);

    powerup = game.add.audio('powerup', 1, false);

    spring_music = game.add.audio('spring_music', 1, false);
    death_music = game.add.audio('death_music', 1, false);
    try{
        chapter1.play();
    }catch(e){}

    //var text_time = game.add.bitmapText(0, 0, 'Elapsed seconds: ' + game.time.totalElapsedSeconds().toFixed(3), 32);
    
    ///////////////////////////////////////////////////////


    //start状态开启物理引擎
    game.physics.startSystem(Phaser.Physics.ARCADE);
    scores = 0;
   // game.stage.backgroundColor = '#787878';//如果地图太小，则多余部分设置背景色

    ///////////////////////////
    map = game.add.tilemap('man'); //mario
    // 此处的SuperMarioBros-World1-1与json中tilesets的name对应


   
    //map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
    map.addTilesetImage('kenney', 'tile0');
    map.addTilesetImage('wall', 'background');
    map.addTilesetImage('kenny_platformer_64x64', 'tile2');
    map.addTilesetImage('coinxd', 'coin');
    map.addTilesetImage('diamondxd', 'diamond');
    map.addTilesetImage('linexd', 'line');
    
    
    //设置13~17号物品的碰撞检测
    
    //map.setCollisionBetween(27, 29);
   // map.setCollision(40);
   //查阅json的data数组
   //我需要知道需设置碰撞检测的物品的id号
   
    // 此处与json中layer的name对应
    //layer = map.createLayer('World1');

    //var layer1 = map.createLayer('ckck');
    layer = map.createLayer('layer');
    // resizeWorld会根据tilemap重新设置world的大小
    layer.resizeWorld();
    //layer.debugSettings.forceFullRedraw = true;
      //var objLayer = map.createLayer('OBJlayer');
  

    diamonds = game.add.group();
    diamonds.enableBody = true;
    map.createFromObjects('OBJlayer', 229, 'diamond', 0, true, false, diamonds);
    //
    //可以移动的箱子类
    box_cases = game.add.group();
    box_cases.enableBody = true;

    block3 = game.add.sprite(3173, 105, 'block');
    game.physics.enable(block3);
    //box2.body.mass = 1;
    //box2.body.drag.setTo(10000);
    block3.body.gravity.y = 1100;
    //map.createFromObjects('OBJlayer', 168, 'case', 0, true, false, box_cases);
    //
    //
    coins = game.add.group();
    coins.enableBody = true;
    map.createFromObjects('OBJlayer', 228, 'coin', 0, true, false, coins);
    //
    lines = game.add.sprite(0, 555, 'line');
    game.physics.enable(lines);
    lines.body.immovable = true;
    lines.visible = false;
    
   
    map.setCollisionBetween(1, 148, true, layer, true);
    map.setCollisionBetween(150, 167, true, layer, true);
    map.setCollisionBetween(169, 227, true, layer, true);

    startTime = game.time.totalElapsedSeconds();
    time = Math.floor(game.time.totalElapsedSeconds() - startTime);
    timerText = game.add.bitmapText(12, 12, 'carrier_command', '00：00' + time, 16);
    timerText.fixedToCamera = true;
 

    text = game.add.bitmapText(980, 12, 'carrier_command','Scores: 0',16);
    //text.font = '#1E90FF';
    text.fixedToCamera = true;
    


    //spring = game.add.sprite(200, 500, 'spring');
    //game.physics.enable(spring, Phaser.Physics.ARCADE);
    //spring.body.immovable = true;
    //spring.body.setSize(15, 5, 10, 0);

    spring2 = game.add.sprite(1350, 500, 'spring');
    game.physics.enable(spring2, Phaser.Physics.ARCADE);
    spring2.body.immovable = true;
    spring2.body.setSize(15, 5, 10, 0);

    spring3 = game.add.sprite(3000, 500, 'spring');
    game.physics.enable(spring3, Phaser.Physics.ARCADE);
    spring3.body.immovable = true;
    spring3.body.setSize(15, 5, 10, 0);
    //spring.body.bounce.setTo(1, 1);

    fly_floor = game.add.sprite(800, 350, 'fly_floor');
    game.physics.enable(fly_floor, Phaser.Physics.ARCADE);
    fly_floor.body.setSize(140, 10, 0, 0);

    elevator = game.add.sprite(1800, 300, 'fly_floor');
    game.physics.enable(elevator, Phaser.Physics.ARCADE);
    elevator.body.immovable = true;
    elevator.body.setSize(140, 10, 0, 0);
    tween_elevator = game.add.tween(elevator).to({ y: 100 }, 4000, Phaser.Easing.Linear.None, true, 0, -1, true);

    red_flag = game.add.sprite(3955, 470, 'stat1_door');
    game.physics.enable(red_flag);

    p = game.add.sprite(132, 132, 'hero');
    game.physics.enable(p);
    p.body.gravity.y = 1100;
    p.body.bounce.y = 0;
    p.body.linearDamping = 1.2;
    p.body.collideWorldBounds = true;
    p.animations.add('right', [0, 1, 2, 3, 4, 5], 12, false);
    p.animations.add('left', [11, 10, 9, 8, 7, 6], 12, false);
    p.animations.add('jump_right', [12, 13], 8, false);
    p.animations.add('jump_left', [15, 14], 8, false);

    // camera
    //镜头随人物移动？
    game.camera.follow(p);
    cursors = game.input.keyboard.createCursorKeys();
  }
 


  this.update = function(){
  
    //////////////////////////////////////////////////
    updateTimerText();


    ////////////////////////////////////////////////
    if(fly_floor.y<100){
      fly_floor.body.velocity.y = 0;
      fly_floor.body.immovable = true;

    }
    //木板的顶点

    game.physics.arcade.collide(p, layer, disBounce, null, this);
    game.physics.arcade.collide(p, elevator, nonGravity, null, this);


    //game.physics.arcade.collide(p, spring, springTo, null, this);
    game.physics.arcade.collide(p, spring2, spring_To, null, this);
    game.physics.arcade.collide(p, spring3, spring_To_To, null, this);


    isDrag =  game.physics.arcade.collide(p, block3, collectCase,null, this);
    if(isDrag==true){
      block3.body.drag.setTo(5000);
    }
    if(isDrag==false){
      block3.body.drag.setTo(0);
    }

    game.physics.arcade.collide(layer, block3);
    game.physics.arcade.collide(lines, block3, killBox, null, this);


    game.physics.arcade.collide(p, fly_floor, getFloor,null, this);


    game.physics.arcade.overlap(p, diamonds, collectDiamond,null, this);
    game.physics.arcade.overlap(p, coins, collectCoin,null, this);
    game.physics.arcade.overlap(p, lines, beKilled,null, this);
    game.physics.arcade.overlap(p, red_flag, victory,null, this);
    //game.physics.arcade.overlap(p, 181, drown,null, this);
    p.body.velocity.x = 0;
    if (cursors.up.isDown) {
        // onFloor才能往上跳
        if (p.body.onFloor()&&p.body.velocity.x==0) {
            try{
                jump_music.play();
            }catch(e){}
            p.body.velocity.y = -500;
        }
        if (p.body.onFloor()&&p.body.velocity.x>0) {
             try{
                jump_music.play();
            }catch(e){}
            p.animations.play('jump_right');
            p.body.velocity.y = -500;
        }
        if (p.body.onFloor()&&p.body.velocity.x<0) {
             try{
                jump_music.play();
            }catch(e){}
            p.animations.play('jump_left');
            p.body.velocity.y = -500;
        }
    }
    if (cursors.left.isDown) {
        //p.animations.add('left', [15,14,13,12,11,10], 60, false);
        //p.animations.play('left');
        p.animations.play('left');
        p.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        p.animations.play('right');
        p.body.velocity.x = 150;
    }
  }

  this.render = function() {

    //game.debug.bodyInfo(box1);
    //game.debug.body(fly_floor);
    
    //game.debug.bodyInfo(elevator);

}
     
  function  updateTimerText() {
    time = Math.floor(game.time.totalElapsedSeconds() - startTime);
    //Convert seconds into minutes and seconds
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time) - (60 * minutes);
 
    //Display minutes, add a 0 to the start if less than 10
    result = (minutes < 10) ? "0" + minutes : minutes;
 
    //Display seconds, add a 0 to the start if less than 10
    result += (seconds < 10) ? ":0" + seconds : ":" + seconds;
 
    timerText.text = 'time:' + result;
 }

  function updateText() {
    text.setText("Scores: " + scores);
  }

  /////////////////////////////////////////////////////////////////////////////

  function nonGravity(p, elevator){
    //p.body.velocity.y = elevator.body.velocity.y;
    if (cursors.up.isDown) {
         try{
                jump_music.play();
            }catch(e){}
    p.body.velocity.y = -500;        
    }
  }


  function getFloor(p, fly_floor){
    fly_floor.body.velocity.y = -100;

    if (cursors.up.isDown) {
        try{
                jump_music.play();
            }catch(e){}
    p.body.velocity.y = -500;        
    }
    if(fly_floor.y<100){
      fly_floor.body.velocity.y = 0;
      fly_floor.body.immovable = true;

    }
  }

  /*
  function springTo(p, spring){

    spring.animations.add('booo',[0, 1, 0], 25);
    spring.animations.play('booo');
    //if (cursors.up.isDown) {
    p.body.velocity.y = -1000;
    game.state.start('start2');
            
    
  }
  */
  function spring_To(p, spring){
    try{
        spring_music.play();
    }catch(e){}

    spring.animations.add('booo_1',[0, 1, 0], 25);
    spring.animations.play('booo_1');
    p.body.velocity.y = -900;
             
  }

  function spring_To_To(p, spring){
    try{
        spring_music.play();
    }catch(e){}

    spring.animations.add('booo_2',[0, 1, 0], 25);
    spring.animations.play('booo_2');
    p.body.velocity.y = -900;
  }

  function disBounce(p, layer){
    p.body.bounce.y = 0;
  }
  function collectDiamond(p, diamond) {
    diamond.kill();
    scores = scores + 15;
    try{
        getcoin2.play();
    }catch(e){}
    updateText();
  }

  function collectCase(p, box_case) {
    //box_case.kill();
    if (cursors.up.isDown) {
         try{
                jump_music.play();
            }catch(e){}
    p.body.velocity.y = -500;        
    }
  }
  function collectCoin(p, coin) {
    coin.kill();
    scores = scores + 5;
    try{
        getcoin.play();
    }catch(e){}
    updateText();
  }
  function beKilled(p, line) {
    chapter1.stop();
    try{
        death_music.play();
    }catch(e){}
    p.kill();
    game.state.start('over'); //进入游戏结束状态
   
  }
  function victory(p, red_flag){
    game.state.start('start2');
    chapter1.stop();
    try{
        powerup.play();
    }catch(e){}
  }

  function killBox(line, block3){
    block3.kill();
  }

 
};

////////////////////////////////////////
game.state.add('boot', game.States.boot);
game.state.add('preload', game.States.preload);
game.state.add('main', game.States.main);
game.state.add('start', game.States.start);
game.state.add('start2', game.States.start2);
game.state.add('start3', game.States.start3);
game.state.add('start4', game.States.start4);
game.state.add('over', game.States.over);

game.state.start('boot');//游戏从boot状态启航