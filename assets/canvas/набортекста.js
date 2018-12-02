(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"набортекста_atlas_", frames: [[0,701,917,711],[919,701,467,388],[0,0,1083,699]]}
];


// symbols:



(lib.Растровоеизображение1 = function() {
	this.spriteSheet = ss["набортекста_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение2 = function() {
	this.spriteSheet = ss["набортекста_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.сложилось = function() {
	this.spriteSheet = ss["набортекста_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AsZoMIYzAAIAAQZI4zAAg");
	this.shape.setTransform(79.4,52.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.008)").s().p("AsZINIAAwZIYzAAIAAQZg");
	this.shape_1.setTransform(79.4,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1,-1,160.8,107.1), null);


// stage content:
(lib.набортекста = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Щелкните заданный экземпляр символа, чтобы выполнить функцию.
		*/
		_this.btn.on('click', function(){
		if(_this.timeline.position>99 && e.key == 'Enter') {
			 _this.timy.text = '10';
			 _this.gotoAndStop(1);
		 }
		 else if(_this.timeline.position>73 && _this.timeline.position<79) {
			 _this.timy.text = '10';
			 _this.gotoAndStop(120);
		 }
		 else {
			_this.play();
		 }
		});
		
		
		/*
		Дважды щелкните по заданному экземпляру символа, чтобы выполнить функцию.
		*/
		_this.btn.on('dblclick', function(){
			if(_this.timeline.position>99 ) {
			 _this.timy.text = '10';
			 _this.gotoAndStop(1);
		 }
		/*
		Перемещает точку воспроизведения на кадр с указанным номером и продолжает воспроизведение с него.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		
		});
		var _this = this;
		/*
		Щелкните заданный экземпляр символа, чтобы выполнить функцию.
		*/
		
		window.addEventListener('keydown', function(e){
			
		 if(_this.timeline.position>99 && e.key == 'Enter') {
			 _this.timy.text = '10';
			 _this.gotoAndStop(1);
		 }
		 else if(_this.timeline.position>73 && _this.timeline.position<79) {
			 _this.timy.text = '10';
			 _this.gotoAndStop(120);
		 }
		 else {
			_this.play();
		 }
		/*
		Воспроизвести фрагмент ролика/видео или текущей временной шкалы.
		Воспроизводит указанный фрагмент ролика или видео.
		*/
		}, true);
		
		//window.addEventListener("keydown", keyPressed);
		
		setInterval( function () {
			_this.timy.text--;
			if(_this.timy.text<=0) {
				_this.gotoAndPlay(100);
			}
		}, 1000);
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_2 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_3 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_4 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_5 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_6 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_7 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_10 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_12 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_13 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_16 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_17 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_18 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_19 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_20 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_21 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_22 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_23 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_24 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_25 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_26 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_27 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_28 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_29 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_30 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_31 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_32 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_33 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_34 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_35 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_36 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_37 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_38 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_39 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_40 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_41 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_42 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_43 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_44 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_45 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_46 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_47 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_48 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_49 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_50 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_51 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_52 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_53 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_54 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_55 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_56 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_57 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_58 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_59 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_60 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_61 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_62 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_63 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_64 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_65 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_66 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_67 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_68 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_69 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_70 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_71 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_72 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_73 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_74 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_75 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_76 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_77 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_78 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_79 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_80 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_81 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_82 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_83 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_84 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_85 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_86 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
		var _this = this;
		/*
		Остановить фрагмент ролика/видео
		Останавливает воспроизведение указанного фрагмента ролика или видео.
		*/
		_this.stop();
	}
	this.frame_87 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_88 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_89 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_90 = function() {
		var _this = this;
		/*
		Перемещает точку воспроизведения на кадр с указанной меткой и останавливает воспроизведение.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		*/
		_this.gotoAndStop('enterFrameLabel');
	}
	this.frame_115 = function() {
		this.stop();
	}
	this.frame_116 = function() {
		this.stop()
	}
	this.frame_137 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1).call(this.frame_42).wait(1).call(this.frame_43).wait(1).call(this.frame_44).wait(1).call(this.frame_45).wait(1).call(this.frame_46).wait(1).call(this.frame_47).wait(1).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(1).call(this.frame_53).wait(1).call(this.frame_54).wait(1).call(this.frame_55).wait(1).call(this.frame_56).wait(1).call(this.frame_57).wait(1).call(this.frame_58).wait(1).call(this.frame_59).wait(1).call(this.frame_60).wait(1).call(this.frame_61).wait(1).call(this.frame_62).wait(1).call(this.frame_63).wait(1).call(this.frame_64).wait(1).call(this.frame_65).wait(1).call(this.frame_66).wait(1).call(this.frame_67).wait(1).call(this.frame_68).wait(1).call(this.frame_69).wait(1).call(this.frame_70).wait(1).call(this.frame_71).wait(1).call(this.frame_72).wait(1).call(this.frame_73).wait(1).call(this.frame_74).wait(1).call(this.frame_75).wait(1).call(this.frame_76).wait(1).call(this.frame_77).wait(1).call(this.frame_78).wait(1).call(this.frame_79).wait(1).call(this.frame_80).wait(1).call(this.frame_81).wait(1).call(this.frame_82).wait(1).call(this.frame_83).wait(1).call(this.frame_84).wait(1).call(this.frame_85).wait(1).call(this.frame_86).wait(1).call(this.frame_87).wait(1).call(this.frame_88).wait(1).call(this.frame_89).wait(1).call(this.frame_90).wait(25).call(this.frame_115).wait(1).call(this.frame_116).wait(21).call(this.frame_137).wait(271));

	// Слой_6
	this.btn = new lib.Символ1();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(587.9,408.2,9.863,9.863,0,0,0,79.4,53.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(408));

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYBeIAAgyIAxAAIAAAygAgYgrIAAgyIAxAAIAAAyg");
	this.shape.setTransform(979.5,128.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhYCJIAAkRICvAAIAAApIh9AAIAABKIBkAAIAAAnIhkAAIAABMIB/AAIAAArg");
	this.shape_1.setTransform(964.5,124.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABbCmIgGg6IipAAIgGA6IgiAAIAAhkIAUAAIBIjnIBIAAIBBDnIAUAAIAABkgAg+BCIBzAAIgvi5IgOAAg");
	this.shape_2.setTransform(940.3,127.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhVBkQgegpAAg7QAAg7AggoQAggpA0AAQA1AAAfApQAfAoAAA7QAAA/ggAnQggAng0AAQg2AAgfgpgAg+ABQAAAxAQAaQAQAZAeAAQAaAAASgWQATgWAAg5QAAgvgPgaQgQgbggAAQg+AAAABlg");
	this.shape_3.setTransform(914.7,124.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA5CJIg8hsIhABsIguAAIBWiOIhJiDIA4AAIAyBbIA2hbIAuAAIhMB9IBUCUg");
	this.shape_4.setTransform(889.9,124.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag4B6QgYgTgNggQgNggAAgnQABg9AdgnQAegoAzAAQApAAAaAZQAbAZAIAvIguAFQgNg+grAAQgbAAgOAaQgQAZAAAxQAAAxAQAZQAQAaAbAAQAVAAAQgSQAPgRACgXIAuAFQgFApgbAbQgcAagsAAQglAAgWgTg");
	this.shape_5.setTransform(866.8,124.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA4CJIAAiNQAAglABgNQgOAdgSAZIhPBwIAAAZIgyAAIAAkRIAyAAIAACZIgCApQANgcATgaIBQhwIAAgcIAxAAIAAERg");
	this.shape_6.setTransform(841,124.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABFCJIgWhBIhoAAIgVBBIgrAAIBbkRIA7AAIBcERgAgtAgIBPAAIgnh5g");
	this.shape_7.setTransform(804.9,124.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA0CJIAAh3IhnAAIAAB3IgxAAIAAkRIAxAAIAABxIBnAAIAAhxIAxAAIAAERg");
	this.shape_8.setTransform(779.5,124.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA8CJIAAhyIhEAAIgyByIgyAAIA6h7QgygSAAgzQAAglAZgWQAYgWApAAIB3AAIAAERgAglhVQgMAKAAASQAAASAMAMQANANAZAAIA7AAIAAhSIg+AAQgXAAgMALg");
	this.shape_9.setTransform(742.1,124.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABUCJIAAjuIhMDuIgZAAIhLjuIAADuIgpAAIAAkRIBNAAIA4CvIA4ivIBOAAIAAERg");
	this.shape_10.setTransform(713.8,124.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhYCJIAAkRICvAAIAAApIh9AAIAABKIBkAAIAAAnIhkAAIAABMIB/AAIAAArg");
	this.shape_11.setTransform(687.2,124.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhmCJIAAkRIBvAAQAwAAAXAZQAXAYAAAhQAAAlgZAWQgZAXgnAAIhDAAIAABtgAg1gNIA6AAQAXAAAMgLQAMgLgBgTQABgRgLgMQgMgMgdAAIg1AAg");
	this.shape_12.setTransform(664.1,124.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhlCJIAAkRIBpAAQAcAAARAGQASAGANASQANARAAAYQAAAXgNARQgNAQgYAFQAeAEAOASQAPATAAAZQAAAggUAVQgWAWgqAAgAg3BgIBAAAQATAAAMgLQAMgLAAgSQAAgRgMgLQgMgLgTAAIhAAAgAg3gVIA7AAQATAAALgLQALgLAAgRQAAgTgNgIQgMgJgQAAIg7AAg");
	this.shape_13.setTransform(639.1,124.5);

	this.timy = new cjs.Text("15", "51px 'Franklin Gothic Medium'", "#FF0000");
	this.timy.name = "timy";
	this.timy.lineHeight = 58;
	this.timy.lineWidth = 60;
	this.timy.parent = this;
	this.timy.setTransform(994.1,91.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.timy,p:{x:994.1,y:91.6,text:"15",font:"51px 'Franklin Gothic Medium'",lineWidth:60}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.timy,p:{x:-154,y:506,text:"",font:"51px 'FranklinGothic-Medium'",lineWidth:6}}]},100).wait(308));

	// Слой_4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AoaLoQghgRgLggQgDgKgFgaQgDgZgFgNQgFgLgMgRQgOgVgEgIQgRghAAg9QADhFASggQANgUAagUQAQgNAhgWQAVgQAjghQAngkAQgOQAhgdBHgwQApgbATgKQAjgUAfgFQAWgFAeAAQARAAAjACQA1ACBpgDQBbAEA7AcQAgAQA7AnQAVAMA1AaQAvAYAaAQQAmAXAhAjIAnAoQAWATAvAjQAxAwAHA4QAEAegLAdQgLAdgYARQglAdhQgFQg8gCgdgZQgLgKgNgUQgPgZgHgIQgUgYgngSQgsgagfgGQgXgHguAAQhrAAgmAHQhtAOhtBDQhUA0h9B6QgYAZgQANQgYASgYAFQgLADgKAAQgXAAgWgNgAlZjpQgVgHgFgPIgDgHQgBgFgCgCQgCgCgMgFQgNgGgIgOQgIgOAAgPQAAgYATggQAdgqAsgXQAXgNASADQAdAFAQAvQAYBIgZAxQgOAdgdAPQgTAJgSAAQgLAAgLgDgABEkdQgHgHgDgNIgEgXIgIgjQgDgVAFgOQAKgPAEgIQACgFACgKIAEgPQAFgOAOgIQAPgIAOADQAHACAJAEIAPAIQAcATAJALQAQASAGAdQAFAbgHASQgEAIgOARQgSATgMAIQgLAGgXAGQgPAEgLAAQgUAAgKgLgAqWkfQgTgJgDgTQgDgUATgTQAMgKAcgRQBSgsA0hTQAzhSAFhdQABgXADgKQAFgSAMgIQANgHARAGQAQAHAIAOQAMAVgFApQgIBKgeBCQgfBEgxA0QgQAQgbAXIgsAmIgeAYQgRANgQADQgHACgHAAQgMAAgMgGgAGUniIgVgIQgNgFgigIIh0gcQgggJgLgGIgUgMIgTgOQgYgQgrgRQg7gWgMgFQghgRgagWQgYgTgDgSQgEgWAQgQQARgPAVAHQAIADAKAGIAPAOQAaAWA0AUQBEAZAQAJIAeARIAdARQAhAQArAJIBAAMQAlAIAaAJQAnAPAGAZQADARgNAQQgNAPgSAAIgCAAQgJAAgKgDg");
	this.shape_14.setTransform(913.2,287.6);

	this.text = new cjs.Text("\"Жми dubleclick\"", "67px 'Franklin Gothic Medium'", "#0099CC");
	this.text.lineHeight = 76;
	this.text.lineWidth = 574;
	this.text.parent = this;
	this.text.setTransform(40,573.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},100).to({state:[{t:this.shape_14},{t:this.text,p:{x:40,y:573.4,text:"\"Жми dubleclick\"",font:"67px 'Franklin Gothic Medium'",color:"#0099CC",lineHeight:75.95,lineWidth:574}}]},15).to({state:[{t:this.text,p:{x:307.3,y:226.1,text:"eh",font:"75px 'Franklin Gothic Medium'",color:"#000000",lineHeight:85.05,lineWidth:449}}]},1).to({state:[{t:this.text,p:{x:307.3,y:226.1,text:"eh",font:"75px 'Franklin Gothic Medium'",color:"#000000",lineHeight:85.05,lineWidth:449}}]},21).wait(271));

	// Слой_3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiAvIAAgQIAdgTQAMgJAFgGQAFgHAAgFQAAgHgFgFQgFgFgHAAQgPAAgCAUIgRgEQACgNAJgJQAKgIAOAAQAPAAAJAIQAKAJAAAOQAAAMgJAIQgIAJggATIAwAAIAAAOg");
	this.shape_15.setTransform(402.6,194.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgFACgEIAKAAIAABQIAbAAIAAANg");
	this.shape_16.setTransform(411,194.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXApQgKgIgCgKIAQgEQAEAPAQAAQAIAAAFgDQAFgFAAgFQAAgHgFgEQgEgEgIAAIgLAAIAAgNIAJAAQAGAAAGgDQAEgEABgGQAAgHgFgDQgFgEgGAAQgNAAgFAOIgPgDQACgLAKgGQAJgHANAAQAMAAAKAHQAJAGAAAMQAAAJgFAFQgFAHgHAAQAJABAFAGQAGAFAAAKQAAALgJAIQgKAIgQAAQgOAAgKgHg");
	this.shape_17.setTransform(418.7,194.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQANgJAEgGQAFgHgBgFQABgHgFgFQgFgFgHAAQgPAAgDAUIgPgEQABgNAKgJQAIgIAOAAQAQAAAJAIQAJAJAAAOQAAAMgIAIQgIAJgfATIAvAAIAAAOg");
	this.shape_18.setTransform(402.7,219.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAFAvIAAgUIgpAAIAAgNIApg8IASAAIAAA6IANAAIAAAPIgNAAIAAAUgAgTAMIAYAAIAAgZIABgHIAAgJg");
	this.shape_19.setTransform(418.8,219.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_20.setTransform(411,219.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiAvIAAhdIAjAAQAKAAAGACQAGACAEAGQAFAGAAAJQAAAHgFAGQgEAGgIABQAKABAFAGQAFAHAAAIQAAALgHAHQgHAIgPAAgAgSAhIAVAAQAHAAAEgEQAEgEAAgGQAAgGgEgDQgFgEgGAAIgVAAgAgSgGIATAAQAHAAADgEQAEgEAAgGQAAgGgEgDQgEgDgGAAIgTAAg");
	this.shape_21.setTransform(393.7,255.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHAjIAAg5IgTAAIAAgMIA1AAIAAAMIgTAAIAAA5g");
	this.shape_22.setTransform(408,256.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AANAjIAAgdIABgOIgJAMIgSAXIAAAIIgPAAIAAhFIAPAAIAAAeIAAAOIAKgMIAQgXIAAgJIAQAAIAABFg");
	this.shape_23.setTransform(401.5,256.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAeQgHgGAAgJQAAgXApAAIAEAAIAAgFQAAgLgOAAQgNAAgCALIgOgCQACgJAHgFQAIgGAOAAQAIAAAFABQAFACADADQAEADABAEQACADAAAKIAAAdQAAAIACAHIgPAAQgCgHgBgIQgGAQgQAAQgKAAgGgGgAgPAOQAAAEADADQADADAGAAQAIAAAFgGQAEgFAAgHIAAgGQgdAAAAAOg");
	this.shape_24.setTransform(414.3,256.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAPAjIgPg5IgSA5IgMAAIAWhFIARAAIAWBFg");
	this.shape_25.setTransform(421.3,256.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAPAjIAAgbIgPAAIgNAbIgRAAIARgfQgMgEAAgNQAAgKAGgFQAGgGAKAAIAiAAIAABFgAgKgMQAAAJAKAAIAPAAIAAgTIgPAAQgKAAAAAKg");
	this.shape_26.setTransform(427.5,256.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAOAjIAAgdIAAgOIgJAMIgRAYIAAAHIgQAAIAAhEIAQAAIAAAdIgBAOIAKgNIARgWIAAgIIAPAAIAABEg");
	this.shape_27.setTransform(344.2,281.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAvIAAgpIgjAAIAAApIgQAAIAAhdIAQAAIAAAnIAjAAIAAgnIAQAAIAABdg");
	this.shape_28.setTransform(335.8,280.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAZAjIAAhEIAQAAIAABEgAgoAjIAAhEIAQAAIAAAZIASAAQALAAAGAGQAFAFAAAKQAAAKgGAGQgGAGgKAAgAgYAWIAPAAQAGAAACgCQACgCAAgGQAAgKgKAAIgPAAg");
	this.shape_29.setTransform(360.8,281.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AANAjIAAgfIgaAAIAAAfIgPAAIAAhEIAPAAIAAAaIAaAAIAAgaIAQAAIAABEg");
	this.shape_30.setTransform(351.9,281.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAZQgIgLAAgOQAAgOAJgLQAJgKANAAQAPAAAIAKQAJAKAAAPQAAAQgJAKQgJAKgOAAQgPAAgIgLgAgKgQQgEAHgBAJQABALAEAGQADAGAHAAQAQAAAAgXQgBgKgDgGQgEgGgIAAQgGAAgEAGg");
	this.shape_31.setTransform(379.1,281.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIAvIAAhOIgZAAIAAgPIBDAAIAAAPIgZAAIAABOg");
	this.shape_32.setTransform(372.7,280.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAPAjIgPg5IgSA5IgMAAIAWhEIARAAIAWBEg");
	this.shape_33.setTransform(403.6,281.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AANAjIAAgdIABgOIgJAMIgSAYIAAAHIgPAAIAAhEIAPAAIAAAdIAAAOIAKgNIAQgWIAAgIIAQAAIAABEg");
	this.shape_34.setTransform(396.7,281.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAbAjIAAg5IgBAAIgTA5IgPAAIgSg5IgBAAIAAA5IgNAAIAAhEIAYAAIAQA3IATg3IAWAAIAABEg");
	this.shape_35.setTransform(387.8,281.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXAZQgIgLAAgOQAAgOAJgLQAJgKAOAAQANAAAJAKQAJAKAAAPQAAAQgJAKQgKAKgNAAQgPAAgIgLgAgKgQQgFAHAAAJQAAALAFAGQAEAGAGAAQAPAAABgXQAAgKgEgGQgEgGgHAAQgIAAgDAGg");
	this.shape_36.setTransform(410.3,281.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdAjIAAhEIAjAAQAMgBAFAGQAEAFABAHQAAALgOAEQAQADAAAOQAAAIgFAFQgGAGgKAAgAgOAWIARAAQAGAAACgCQADgDAAgEQAAgKgLAAIgRAAgAgOgFIARAAQAKAAgBgJQABgIgKAAIgRAAg");
	this.shape_37.setTransform(417.9,281.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgXAZQgIgLAAgOQAAgOAJgLQAJgKAOAAQANAAAJAKQAJAKAAAPQAAAQgJAKQgKAKgNAAQgPAAgIgLgAgKgQQgFAHAAAJQAAALAFAGQAEAGAGAAQAPAAABgXQAAgKgEgGQgEgGgHAAQgIAAgDAGg");
	this.shape_38.setTransform(410.3,281.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgIATIAIgTIgIAAIAAgSIAQAAIAAAQIgKAVg");
	this.shape_39.setTransform(438.2,285.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AANAyIAAgdIABgPIgJANIgSAYIAAAHIgPAAIAAhEIAPAAIAAAdIAAAOIAKgNIAQgVIAAgJIAQAAIAABEgAgOgjQgFgFgBgJIAJAAQACAJAKAAQAJAAACgJIAJAAQgBAIgFAGQgGAFgJAAQgIAAgGgFg");
	this.shape_40.setTransform(432.7,280);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAjQgLgNAAgVQAAgVAKgNQAKgOAQAAQAZAAAHAXIgOACQgFgNgMAAQgKAAgGALQgEAJAAAMIAAAEQAHgNAQgBQANABAJAIQAJAIAAAMQAAAOgJAJQgKAJgOAAQgRAAgKgNgAgLAFQgEAFAAAIQAAAIAEAFQAGAEAHAAQAIABAEgFQAGgEAAgKQAAgHgFgFQgFgFgIAAQgIAAgFAFg");
	this.shape_41.setTransform(447.5,280.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAFAwIAAgWIgpAAIAAgMIApg9IASAAIAAA7IANAAIAAAOIgNAAIAAAWgAgTAMIAYAAIAAgZIABgHIAAgJg");
	this.shape_42.setTransform(455.7,280.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAFAvIAAgUIgoAAIAAgNIAog8IARAAIAAA6IAPAAIAAAPIgPAAIAAAUgAgTAMIAYAAIAAgZIAAgHIACgJg");
	this.shape_43.setTransform(332.4,304.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgXApQgKgIgCgKIAQgEQAFAPAOAAQAJAAAFgDQAFgFAAgGQAAgGgEgEQgFgFgJABIgKAAIAAgNIAJAAQAGAAAFgDQAGgEAAgGQgBgHgEgDQgEgEgHAAQgNAAgFAOIgQgDQAEgLAJgGQAJgHAMAAQAOAAAJAHQAJAGAAAMQAAAJgFAFQgFAHgHAAQAJABAFAGQAGAGAAAIQAAANgKAHQgJAIgRAAQgNAAgKgHg");
	this.shape_44.setTransform(324.1,304.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgXApQgJgGgEgNIARgCQAEAOAPAAQAIAAAGgGQAEgGAAgHQAAgIgEgFQgFgFgJAAQgKAAgHAKIgPgDIAGgzIA5AAIgCAPIgrAAIgDAbQAJgKANAAQANgBAJAKQAJAIAAANQAAANgJAKQgKAKgRAAQgMgBgLgGg");
	this.shape_45.setTransform(340.7,304.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgXApQgJgIgDgKIAQgEQAEAPAQAAQAIAAAFgDQAFgFAAgGQAAgGgFgEQgEgFgIABIgLAAIAAgNIAIAAQAHAAAGgDQAEgEAAgGQABgHgFgDQgEgEgHAAQgNAAgFAOIgPgDQACgLAKgGQAJgHANAAQANAAAJAHQAJAGAAAMQAAAJgFAFQgFAHgHAAQAJABAGAGQAFAGAAAIQAAANgKAHQgJAIgQAAQgOAAgKgHg");
	this.shape_46.setTransform(356.9,304.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgWApQgLgGgDgNIARgCQAEAOAPAAQAIAAAGgGQAEgGAAgHQAAgIgEgFQgGgFgIAAQgKAAgHAKIgOgDIAFgzIA5AAIgCAPIgrAAIgDAbQAJgKANAAQANgBAJAKQAJAIAAANQAAANgJAKQgKAKgRAAQgNgBgJgGg");
	this.shape_47.setTransform(348.9,304.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgWApQgKgGgEgNIAQgCQAGAOAOAAQAJAAAFgGQAEgGABgHQgBgIgEgFQgFgFgIAAQgLAAgGAKIgPgDIAFgzIA5AAIgBAPIgsAAIgCAbQAIgKAMAAQAOgBAJAKQAKAIAAANQAAANgKAKQgKAKgRAAQgMgBgKgGg");
	this.shape_48.setTransform(373.5,304.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQAMgJAFgGQAFgHAAgFQAAgHgFgFQgFgFgHAAQgPAAgCAUIgQgEQABgNAJgJQAKgIAOAAQAPAAAJAIQAKAJAAAOQAAAMgJAIQgIAJggATIAwAAIAAAOg");
	this.shape_49.setTransform(365.2,304.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXApQgJgIgDgKIAQgEQAEAPAQAAQAIAAAFgDQAFgFAAgGQAAgGgFgEQgEgFgIABIgLAAIAAgNIAJAAQAGAAAFgDQAFgEABgGQAAgHgFgDQgFgEgGAAQgNAAgFAOIgQgDQADgLAKgGQAJgHANAAQAMAAAKAHQAJAGAAAMQAAAJgFAFQgFAHgHAAQAJABAFAGQAGAGAAAIQAAANgJAHQgKAIgQAAQgOAAgKgHg");
	this.shape_50.setTransform(381.5,304.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_51.setTransform(411,219.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgiAvIAAgQIAdgTQAMgJAFgGQAEgHABgFQgBgHgEgFQgFgFgHAAQgPAAgCAUIgRgEQACgNAJgJQAKgIAOAAQAPAAAJAIQAKAJAAAOQAAAMgJAIQgIAJggATIAwAAIAAAOg");
	this.shape_52.setTransform(414,304.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXApQgKgIgCgKIAQgEQAFAPAPAAQAIAAAFgDQAFgFAAgGQAAgGgFgEQgEgFgIABIgLAAIAAgNIAJAAQAGAAAFgDQAFgEABgGQAAgHgFgDQgFgEgGAAQgNAAgFAOIgQgDQADgLAKgGQAJgHANAAQAMAAAKAHQAJAGAAAMQAAAJgFAFQgFAHgHAAQAJABAFAGQAGAGAAAIQAAANgJAHQgKAIgQAAQgOAAgKgHg");
	this.shape_53.setTransform(405.7,304.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgWApQgKgGgEgNIAQgCQAFAOAPAAQAIAAAGgGQAEgGAAgHQAAgIgEgFQgFgFgJAAQgKAAgHAKIgOgDIAFgzIA5AAIgBAPIgsAAIgDAbQAJgKANAAQANgBAJAKQAKAIgBANQABANgKAKQgKAKgRAAQgMgBgKgGg");
	this.shape_54.setTransform(397.7,304.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgXAZQgIgLAAgOQAAgOAJgLQAJgKANAAQAOAAAJAKQAJAKAAAPQAAAQgJAKQgKAKgNAAQgPAAgIgLgAgKgQQgFAGAAAKQAAALAFAGQADAGAHAAQAQAAAAgXQgBgKgDgGQgEgGgIAAQgGAAgEAGg");
	this.shape_55.setTransform(380.3,344.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAYAqIgCgQIgrAAIgCAQIgKAAIAAgbIAGAAIAQg4IAYAAIAPA4IAGAAIAAAbgAgOAPIAaAAIgKgsIgFAAg");
	this.shape_56.setTransform(373.2,345.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_57.setTransform(411,219.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgQAGIAAgLIAhAAIAAALg");
	this.shape_58.setTransform(392.7,344.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAPAiIgRghIgNANIAAAUIgPAAIAAhDIAPAAIAAAUIAAAMIAGgIIAWgYIAQAAIgWAXIAYAsg");
	this.shape_59.setTransform(388.1,344.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgHIAIgGQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_60.setTransform(398.9,343.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQAMgJAFgGQAFgHgBgFQABgHgFgFQgEgFgIAAQgPAAgDAUIgPgEQABgNAKgJQAIgIAPAAQAPAAAJAIQAJAJAAAOQABAMgJAIQgIAJgfATIAvAAIAAAOg");
	this.shape_61.setTransform(406.8,343.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgXAvIAAgNIAGAAQAGAAACgCQADgBABgEIABgFIgBgEIgYhAIARAAIAPAuIAOguIANAAIgbBNQgDAIgDAEQgEAEgIAAIgIAAg");
	this.shape_62.setTransform(399.5,369.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgeAvIAAhcIAPAAIAAAMQAIgNAMAAQAMAAAGAKQAIAKgBAQQAAANgGALQgHALgNAAQgMAAgGgLIAAAhgAgJgcQgFAGAAAIIAAAKQAAAGAFAGQAEAEAFAAQAHABAEgHQADgGAAgJQAAgLgDgHQgEgGgHAAQgFAAgEAFg");
	this.shape_63.setTransform(393.1,369.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgXApQgIgJAAgVQAAgLACgLQACgKAFgHQAFgIAFgCQAEgDAIgBQAFgCACgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAgBIAQAAQgBAIgEADQgEAEgLACIgLADQgDACgDAEQgCAFgBAGQAGgFADgBQAEgCAEAAQANABAJAIQAIAJAAARQAAARgIAKQgJAJgPAAQgOAAgJgJgAgQAOQAAAXAQABQAQgBAAgXQAAgWgQAAQgQAAAAAWg");
	this.shape_64.setTransform(406.4,367);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAPAjIgPg5IgSA5IgMAAIAWhFIARAAIAWBFg");
	this.shape_65.setTransform(421.3,256.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAOAjIAAgdIAAgOIgJAMIgRAYIAAAHIgQAAIAAhFIAQAAIAAAeIgBAOIAKgNIARgVIAAgKIAPAAIAABFg");
	this.shape_66.setTransform(420.1,368.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgIAJIAAgRIAQAAIAAARg");
	this.shape_67.setTransform(717.5,198.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgXApQgKgIgCgKIAQgEQAFAPAOAAQAJAAAFgDQAFgFAAgFQAAgHgEgEQgFgEgJAAIgKAAIAAgNIAJAAQAGAAAFgDQAGgEAAgGQgBgHgEgDQgEgEgHAAQgNAAgFAOIgQgDQAEgLAJgGQAJgHAMAAQANAAAKAHQAJAGAAAMQAAAJgFAFQgFAHgHAAQAJABAFAGQAGAFAAAKQAAALgKAIQgJAIgRAAQgNAAgKgHg");
	this.shape_68.setTransform(711.5,194.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgFACgEIAKAAIAABQIAbAAIAAANg");
	this.shape_69.setTransform(411,194.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHAJIAAgRIAQAAIAAARg");
	this.shape_70.setTransform(737.2,198.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgXApQgJgIgDgKIAQgEQAEAPAQAAQAIAAAFgDQAFgFAAgFQAAgHgFgEQgEgEgIAAIgLAAIAAgNIAIAAQAHAAAGgDQAEgEAAgGQABgHgFgDQgEgEgHAAQgNAAgFAOIgPgDQACgLAKgGQAJgHANAAQANAAAJAHQAJAGAAAMQAAAJgFAFQgFAHgHAAQAJABAGAGQAFAFAAAKQAAALgKAIQgJAIgQAAQgOAAgKgHg");
	this.shape_71.setTransform(731.3,194.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgaAiQgJgNAAgUQAAgWAKgNQAJgNAQAAQAMAAAIAGQAIAHAEALQAEALAAAKQAAAPgDALQgFALgIAGQgIAHgMAAQgRAAgJgOgAgSAAQAAAPAEAKQAEAJAKAAQAHAAAEgDQAFgFABgIQACgIAAgMQAAgMgEgLQgEgJgLgBQgSABAAAig");
	this.shape_72.setTransform(723.2,194.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgWApQgKgGgEgNIAQgDQAFAPAPAAQAIAAAGgGQAEgFAAgIQAAgIgEgGQgFgDgJgBQgKAAgHAKIgOgDIAFgyIA5AAIgBAOIgsAAIgDAbQAJgKANAAQANgBAJAJQAKAJgBANQABANgKAKQgKAJgRAAQgMAAgKgGg");
	this.shape_73.setTransform(767.6,194.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgVAqQgIgFgCgHIAOgFQAFALAKgBQAKABAGgLQAFgKAAgQQgFAIgGADQgGADgGAAQgNAAgJgIQgJgHAAgOQAAgNAJgJQAJgJAQAAQAQAAAKALQALAMAAAWQAAAVgKAPQgLAOgRAAQgMAAgHgGgAgOgdQgFAEAAAIQAAAGAFAGQAFAFAIAAQAGAAAGgEQAGgFAAgJQAAgHgFgEQgFgFgIgBQgIABgFAFg");
	this.shape_74.setTransform(759.3,194.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgVAqQgIgFgCgHIAOgFQAFALAKgBQAKABAGgLQAFgKAAgQQgFAIgGADQgGADgGAAQgNAAgJgIQgJgHAAgOQAAgNAJgJQAJgJAQAAQAQAAAKALQALAMAAAWQAAAVgKAPQgLAOgRAAQgMAAgHgGgAgOgdQgFAEAAAIQAAAGAFAGQAFAFAIAAQAGAAAGgEQAGgFAAgJQAAgHgFgEQgFgFgIgBQgIABgFAFg");
	this.shape_75.setTransform(751.1,194.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgFACgEIAKAAIAABQIAbAAIAAANg");
	this.shape_76.setTransform(411,194.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgXApQgKgIgCgKIAQgEQAFAPAOAAQAJABAFgEQAFgFAAgGQAAgGgEgEQgFgFgJABIgKAAIAAgNIAJAAQAGAAAFgDQAGgEAAgGQgBgHgEgDQgEgEgHAAQgNAAgFAOIgQgDQAEgLAJgGQAJgHAMAAQANAAAKAHQAJAGAAAMQAAAJgFAFQgFAHgHAAQAJABAFAGQAGAGAAAIQAAANgKAHQgJAIgRAAQgNAAgKgHg");
	this.shape_77.setTransform(711.5,219.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgIAJIAAgRIAQAAIAAARg");
	this.shape_78.setTransform(717.5,198.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_79.setTransform(411,219.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgXApQgJgIgDgKIAQgEQAEAPAQAAQAIABAFgEQAFgFAAgGQAAgGgFgEQgEgFgIABIgLAAIAAgNIAIAAQAHAAAGgDQAEgEAAgGQABgHgFgDQgEgEgHAAQgNAAgFAOIgPgDQACgLAKgGQAJgHANAAQANAAAJAHQAJAGAAAMQAAAJgFAFQgFAHgHAAQAJABAGAGQAFAGAAAIQAAANgKAHQgJAIgQAAQgOAAgKgHg");
	this.shape_80.setTransform(731.3,219.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgaAiQgJgNAAgUQAAgWAKgNQAJgNAQAAQAMAAAIAGQAIAHAEAKQAEAMAAAKQAAAPgDALQgFALgIAGQgIAHgMAAQgRAAgJgOgAgSAAQAAAQAEAJQAEAJAKAAQAHABAEgEQAFgFABgIQACgIAAgMQAAgMgEgLQgEgJgLgBQgSABAAAig");
	this.shape_81.setTransform(723.2,219.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgHAJIAAgRIAQAAIAAARg");
	this.shape_82.setTransform(737.2,198.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYAjQgLgMAAgXQAAgUAKgOQAKgNAQAAQAaAAAGAWIgOADQgFgNgMAAQgKAAgGAKQgEAKAAAMIAAADQAHgMAQAAQANgBAJAJQAJAIAAAMQAAANgJAKQgKAJgPAAQgQAAgKgNgAgKAFQgGAFAAAIQAAAHAGAGQAEAEAIAAQAHAAAFgEQAGgFAAgJQAAgGgFgGQgFgFgIAAQgIAAgEAFg");
	this.shape_83.setTransform(767.6,219.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgVArQgIgGgCgIIAOgDQAFAKAKgBQAKABAGgKQAFgKAAgRQgFAJgGACQgGADgGAAQgNAAgJgIQgJgHAAgOQAAgOAJgIQAJgJAQAAQAQAAAKALQALAMAAAXQAAAVgKAOQgLAOgRAAQgMAAgHgFgAgOgdQgFAEAAAIQAAAHAFAFQAFAFAIAAQAGAAAGgEQAGgFAAgJQAAgHgFgEQgFgGgIAAQgIAAgFAGg");
	this.shape_84.setTransform(759.3,219.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgVArQgIgGgCgIIAOgDQAFAKAKgBQAKABAGgKQAFgKAAgRQgFAJgGACQgGADgGAAQgNAAgJgIQgJgHAAgOQAAgOAJgIQAJgJAQAAQAQAAAKALQALAMAAAXQAAAVgKAOQgLAOgRAAQgMAAgHgFgAgOgdQgFAEAAAIQAAAHAFAFQAFAFAIAAQAGAAAGgEQAGgFAAgJQAAgHgFgEQgFgGgIAAQgIAAgFAGg");
	this.shape_85.setTransform(751.1,219.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_86.setTransform(411,219.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgWAbQgJgLAAgQQAAgPAJgKQAJgKAOAAQAPAAAIAKQAIAKAAAPIAAACIgvAAQAAAHACAEQABAEAEADQAEAEAFAAQALAAAFgMIAOADQgDAJgIAGQgIAGgMAAQgNAAgJgJgAgKgTQgEAEgBAIIAfAAQgBgIgEgEQgEgFgHAAQgFAAgFAFg");
	this.shape_87.setTransform(705.5,253.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTApQgIgGgEgLQgEgLAAgNQAAgUAKgOQAKgNARAAQANAAAKAIQAJAJACAQIgPABQgFgUgOAAQgJAAgFAIQgFAJAAAQQAAAQAFAJQAGAJAIAAQAIAAAFgGQAFgGABgIIAPACQgBAOgKAJQgJAJgPAAQgMAAgIgHg");
	this.shape_88.setTransform(697.9,252.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AANAjIAAgfIgaAAIAAAfIgPAAIAAhFIAPAAIAAAbIAaAAIAAgbIAQAAIAABFg");
	this.shape_89.setTransform(730.5,253.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAbAjIAAg4IgBAAIgTA4IgPAAIgSg4IgBAAIAAA4IgNAAIAAhFIAYAAIAQA5IATg5IAWAAIAABFg");
	this.shape_90.setTransform(714.2,253.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgWAbQgJgLAAgQQAAgPAJgKQAJgKAOAAQAPAAAIAKQAIAKAAAPIAAACIgvAAQAAAHACAEQABAEAEADQAEAEAFAAQALAAAFgMIAOADQgDAJgIAGQgIAGgMAAQgNAAgJgJgAgKgTQgEAEgBAIIAfAAQgBgIgEgEQgEgFgHAAQgFAAgFAFg");
	this.shape_91.setTransform(705.5,253.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgbAiIAAhDIAPAAIAAAZIARAAQAMgBAGAHQAFAFAAAKQAAAKgGAGQgGAGgLgBgAgMAWIAOAAQAGABADgDQACgCAAgGQAAgKgLAAIgOAAg");
	this.shape_92.setTransform(702.3,280.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgeAvIAAhbIAQAAIAAALQAHgNAMAAQAMAAAGAKQAIAKgBAQQAAANgGALQgHALgNAAQgMAAgGgLIAAAhgAgJgcQgFAGAAAIIAAAKQAAAGAFAGQAEAEAFAAQAHAAAEgGQADgGAAgJQAAgLgDgGQgEgHgHAAQgFAAgEAFg");
	this.shape_93.setTransform(695,282);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgXAZQgIgLAAgOQAAgPAJgKQAJgKANAAQAPAAAIAKQAJAKAAAPQAAAQgJAKQgJAKgOAAQgPAAgIgLgAgKgQQgEAHgBAJQABALAEAGQADAGAHAAQAQAAAAgXQgBgKgDgGQgEgGgIAAQgGAAgEAGg");
	this.shape_94.setTransform(687.3,280.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgYAvIAAhdIAxAAIAAAPIghAAIAABOg");
	this.shape_95.setTransform(682.3,279.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAPAiIgRghIgNANIAAAUIgPAAIAAhDIAPAAIAAAUIAAAMIAGgIIAWgYIAQAAIgWAXIAYAsg");
	this.shape_96.setTransform(737.8,280.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgUAZQgIgKAAgPQAAgOAJgLQAIgKANAAQAXAAAEAYIgOABQgBgMgLAAQgHAAgEAHQgDAHAAAJQAAAKADAFQAEAHAGgBQAKAAADgNIAOACQgDAMgHAHQgIAGgKAAQgNAAgIgLg");
	this.shape_97.setTransform(730.6,280.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgdAiIAAhDIAjAAQAMAAAFAEQAFAGAAAHQAAALgOAEQAQADAAANQAAAJgGAFQgFAGgKgBgAgOAWIARAAQAGABADgDQACgDAAgEQAAgKgLAAIgRAAgAgOgFIARAAQAKAAAAgJQAAgIgKAAIgRAAg");
	this.shape_98.setTransform(723.7,280.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgXAZQgIgLAAgOQAAgPAJgKQAJgKAOAAQANAAAJAKQAJAKAAAPQAAAQgJAKQgJAKgOAAQgPAAgIgLgAgLgQQgDAHAAAJQAAALADAGQAFAGAGAAQAPAAAAgXQABgKgEgGQgEgGgHAAQgHAAgFAGg");
	this.shape_99.setTransform(716.1,280.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAPAiIgRghIgNANIAAAUIgPAAIAAhDIAPAAIAAAUIAAAMIAGgIIAWgYIAQAAIgWAXIAYAsg");
	this.shape_100.setTransform(709.5,280.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgHATIAHgTIgHAAIAAgSIAQAAIAAAQIgKAVg");
	this.shape_101.setTransform(757.3,284.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAPAiIAAgbIgPAAIgNAbIgRAAIARgeQgMgEAAgNQAAgKAGgGQAGgEAKAAIAiAAIAABDgAgKgMQAAAJAKAAIAPAAIAAgTIgPAAQgKAAAAAKg");
	this.shape_102.setTransform(751.6,280.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgYAeQgHgGAAgKQAAgWApAAIAEAAIAAgFQAAgLgOAAQgNAAgCALIgOgCQACgJAHgGQAIgFAOAAQAIAAAFACQAFAAADAEQAEADABAEQACAEAAAIIAAAfQAAAGACAHIgPAAQgCgGgBgHQgGAPgQAAQgKAAgGgGgAgPAOQAAAEADADQADADAGAAQAIAAAFgFQAEgGAAgIIAAgFQgdAAAAAOg");
	this.shape_103.setTransform(744.4,280.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgXApQgJgGgDgNIAQgDQAEAPAPAAQAJAAAEgGQAGgFAAgIQAAgIgGgGQgEgDgJgBQgLAAgGAKIgPgDIAGgyIA5AAIgCAOIgrAAIgDAbQAJgKAMAAQAOgBAJAJQAJAJAAANQAAANgJAKQgKAJgRAAQgNAAgKgGg");
	this.shape_104.setTransform(774.9,279.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_105.setTransform(411,219.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgWApQgLgGgDgNIARgDQAEAPAPAAQAIAAAGgGQAEgGAAgHQAAgIgEgGQgGgDgIAAQgLAAgGAJIgOgDIAFgyIA5AAIgBAOIgsAAIgDAbQAJgLANAAQANABAJAIQAJAJAAANQAAANgJAKQgKAJgRAAQgNABgJgHg");
	this.shape_106.setTransform(691,340.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgjAwIAAgOIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgIQAGgFACgEIAKAAIAABRIAbAAIAAAOg");
	this.shape_107.setTransform(683.1,340.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgHAJIAAgRIAQAAIAAARg");
	this.shape_108.setTransform(737.2,198.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgiAvIAAgQIAdgTQANgJAEgGQAEgHAAgFQAAgHgEgFQgFgFgHAAQgPAAgDAUIgQgEQACgNAKgJQAIgIAOAAQAQAAAJAIQAJAJAAAOQAAAMgIAIQgIAJgfATIAvAAIAAAOg");
	this.shape_109.setTransform(710.7,340.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgjAwIAAgOIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgIQAGgFACgEIAKAAIAABRIAbAAIAAAOg");
	this.shape_110.setTransform(683.1,340.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgVAqQgIgFgCgHIAOgFQAFAKAKAAQAKAAAGgKQAFgJAAgRQgFAIgGAEQgGACgGAAQgNAAgJgIQgJgIAAgNQAAgNAJgKQAJgIAQAAQAQAAAKALQALANAAAVQAAAWgKAOQgLAOgRAAQgMAAgHgGgAgOgeQgFAFAAAIQAAAGAFAGQAFAFAIAAQAGAAAGgEQAGgFAAgJQAAgHgFgFQgFgEgIAAQgIAAgFAEg");
	this.shape_111.setTransform(746.5,340.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgaAiQgJgMAAgVQAAgWAKgNQAJgNAQAAQAMAAAIAGQAIAHAEALQAEALAAAJQAAAQgDALQgFAKgIAHQgHAHgNAAQgRAAgJgOgAgSAAQAAAQAEAJQAEAJAKAAQAHAAAEgDQAEgFACgIQACgIAAgNQAAgLgEgKQgEgKgLAAQgSAAAAAig");
	this.shape_112.setTransform(730.5,340.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgjAwIAAgOIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgIQAGgFACgEIAKAAIAABRIAbAAIAAAOg");
	this.shape_113.setTransform(683.1,340.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQAMgJAFgGQAFgHgBgFQABgHgFgFQgEgFgIAAQgPAAgDAUIgPgEQABgNAKgJQAIgIAPAAQAPAAAJAIQAJAJAAAOQABAMgJAIQgIAJgfATIAvAAIAAAOg");
	this.shape_114.setTransform(406.8,343.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgIAJIAAgRIAQAAIAAARg");
	this.shape_115.setTransform(717.5,198.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgHAiIAAg3IgTAAIAAgNIA1AAIAAANIgTAAIAAA3g");
	this.shape_116.setTransform(1002.7,257.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgWAaQgJgKAAgQQAAgOAJgLQAJgKAOAAQAPAAAIAKQAIALAAAOIAAACIgvAAQAAAHACAEQABAEAEADQAEAEAFAAQALgBAFgKIAOACQgDAJgIAGQgIAGgMAAQgNAAgJgKgAgKgTQgEAEgBAIIAfAAQgBgIgEgEQgEgFgHAAQgFAAgFAFg");
	this.shape_117.setTransform(996.4,257.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAQAvIAAhPIggAAIAABPIgQAAIAAhdIBBAAIAABdg");
	this.shape_118.setTransform(988.3,255.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQANgJAEgGQAFgHgBgFQABgHgFgFQgFgFgHAAQgPAAgDAUIgPgEQABgNAKgJQAIgIAOAAQAQAAAJAIQAJAJAAAOQAAAMgIAIQgIAJgfATIAvAAIAAAOg");
	this.shape_119.setTransform(402.7,219.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgHQAGgFACgEIAKAAIAABQIAbAAIAAANg");
	this.shape_120.setTransform(411,194.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgdAiIAAhEIAjAAQAMABAFAFQAEAFABAGQgBAMgNAEQAQADAAAOQAAAIgFAFQgGAFgKAAgAgOAXIARAAQAGAAACgDQADgDAAgEQAAgKgLAAIgRAAgAgOgFIARAAQAJAAAAgJQAAgIgJAAIgRAAg");
	this.shape_121.setTransform(1024.2,257.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgXAZQgIgLAAgOQAAgOAJgLQAJgKANAAQAOAAAJAKQAJAKAAAPQAAAQgJAKQgKAKgNAAQgPAAgIgLgAgKgQQgFAGAAAKQAAALAFAGQAEAGAGAAQAQAAAAgXQAAgKgEgGQgEgGgIAAQgHAAgDAGg");
	this.shape_122.setTransform(1016.5,257.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgdAvIAAhcIAPAAIAAANQAGgOANAAQAMAAAGAKQAHAKABAPQgBAOgGALQgHALgMAAQgNAAgGgLIAAAhgAgKgcQgEAFAAAKIAAAJQAAAHAEAEQAFAGAFAAQAHgBAEgGQADgGAAgKQAAgKgDgHQgEgGgHAAQgFAAgFAFg");
	this.shape_123.setTransform(1009.3,258.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AALAiIAAgaQgHAFgKABQgJgBgFgFQgGgFAAgJIAAgcIAQAAIAAAaQAAAJAKgBQAGABAFgCIAAghIAQAAIAABEg");
	this.shape_124.setTransform(1038.8,257.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AANAiIAAgcIABgOIgJAMIgSAXIAAAHIgPAAIAAhEIAPAAIAAAfIAAANIAKgMIAQgXIAAgJIAQAAIAABEg");
	this.shape_125.setTransform(1031.5,257.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AANAiIAAgcIABgOIgJAMIgSAYIAAAGIgPAAIAAhDIAPAAIAAAdIAAAOIAKgNIAQgVIAAgJIAQAAIAABDg");
	this.shape_126.setTransform(1016.8,282.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AASAvIAAgpIgjAAIAAApIgRAAIAAhdIARAAIAAAnIAjAAIAAgnIARAAIAABdg");
	this.shape_127.setTransform(1008.4,280.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAOAiIAAgeIgaAAIAAAeIgQAAIAAhDIAQAAIAAAaIAaAAIAAgaIAPAAIAABDg");
	this.shape_128.setTransform(1033.6,282.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAfAiIgUgeIgEABIAAAdIgOAAIAAgdIgFgBIgUAeIgPAAIAZgjIgWggIAQAAIASAbIADAAIAAgbIAOAAIAAAbIACAAIATgbIAPAAIgVAbIAaAog");
	this.shape_129.setTransform(1025.2,282.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AANAiIAAgcIABgOIgJAMIgSAYIAAAGIgPAAIAAhDIAPAAIAAAdIAAAOIAKgNIAQgVIAAgJIAQAAIAABDg");
	this.shape_130.setTransform(1016.8,282.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgHAiIAAg4IgTAAIAAgLIA1AAIAAALIgTAAIAAA4g");
	this.shape_131.setTransform(1058.9,282.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AANAyIAAgdIABgPIgJANIgSAYIAAAHIgPAAIAAhEIAPAAIAAAdIAAAOIAKgNIAQgVIAAgJIAQAAIAABEgAgNgjQgHgFAAgJIAJAAQABAJALAAQAJAAACgJIAJAAQgBAIgFAGQgGAFgJAAQgIAAgFgFg");
	this.shape_132.setTransform(1049,280.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgUAiIAAhDIApAAIAAALIgaAAIAAA4g");
	this.shape_133.setTransform(1072.2,282.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgYAeQgHgGAAgKQAAgWApAAIAEAAIAAgFQAAgLgOAAQgNAAgCALIgOgCQACgJAHgGQAIgFAOAAQAIAAAFACQAFAAADAEQAEADABAEQACAEAAAIIAAAfQAAAGACAHIgPAAQgCgGgBgHQgGAPgQAAQgKAAgGgGgAgPAOQAAAEADADQADADAGAAQAIAAAFgFQAEgGAAgIIAAgFQgdAAAAAOg");
	this.shape_134.setTransform(744.4,280.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAPAiIgPg4IgSA4IgMAAIAWhDIARAAIAWBDg");
	this.shape_135.setTransform(1085.1,282.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AANAiIAAgcIABgOIgJAMIgSAYIAAAGIgPAAIAAhDIAPAAIAAAdIAAAOIAKgNIAQgVIAAgJIAQAAIAABDg");
	this.shape_136.setTransform(1016.8,282.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQAMgJAFgGQAFgHgBgFQABgHgFgFQgEgFgIAAQgPAAgCAUIgQgEQABgNAJgJQAKgIAOAAQAPAAAJAIQAKAJgBAOQABAMgJAIQgIAJggATIAwAAIAAAOg");
	this.shape_137.setTransform(970.8,306);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQAMgJAFgGQAFgHgBgFQABgHgFgFQgEgFgIAAQgPAAgDAUIgPgEQABgNAKgJQAIgIAPAAQAPAAAJAIQAJAJAAAOQABAMgJAIQgIAJgfATIAvAAIAAAOg");
	this.shape_138.setTransform(962.6,306);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAFIAAgRIAPgHIAIgGQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_139.setTransform(954.7,306);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgiAvIAAgQIAdgTQANgJAEgGQAEgHABgFQgBgHgEgFQgEgFgIAAQgPAAgDAUIgQgEQACgNAJgJQAKgIANAAQAQAAAJAIQAKAJAAAOQAAAMgJAIQgIAJggATIAwAAIAAAOg");
	this.shape_140.setTransform(995,306);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAFAvIAAgUIgpAAIAAgNIApg8IARAAIAAA6IAPAAIAAAPIgPAAIAAAUgAgTAMIAYAAIAAgZIAAgHIABgJg");
	this.shape_141.setTransform(986.9,306);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAFIAAgRIAPgHIAIgGQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_142.setTransform(979.1,306);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAFIAAgRIAPgHIAIgGQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_143.setTransform(954.7,306);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgiAvIAAgQIAdgTQANgJAEgGQAEgHABgFQgBgHgEgFQgEgFgIAAQgPAAgCAUIgRgEQACgNAJgJQAKgIANAAQAQAAAJAIQAKAJAAAOQAAAMgJAIQgIAJggATIAwAAIAAAOg");
	this.shape_144.setTransform(1019.3,306);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgWApQgLgGgCgNIAPgCQAGAOAOAAQAJAAAEgGQAFgGABgHQgBgIgFgFQgFgFgHAAQgMAAgFAKIgQgDIAGgzIA5AAIgBAPIgsAAIgCAbQAIgKAMAAQAOgBAJAKQAKAIAAANQAAANgKAKQgKAKgRAAQgMgBgKgGg");
	this.shape_145.setTransform(1011.3,306.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgGA6IAAgXQgRgCgIgJQgJgKAAgNQAAgQAKgIQAJgJAPgCIAAgXIANAAIAAAXQAPACAJAJQAKAIAAAQQAAANgJAKQgJAJgQACIAAAXgAAHAYQASgDAAgVQAAgUgSgEgAgYAAQAAAVASADIAAgwQgSAEAAAUg");
	this.shape_146.setTransform(224.4,474.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgdAjIAAhFIAjAAQAMAAAFAGQAFAFgBAHQAAALgNAEQAQADAAAOQAAAIgGAFQgFAGgKAAgAgNAWIARAAQAFAAADgCQACgDAAgEQAAgKgKAAIgRAAgAgNgFIARAAQAIAAABgJQgBgIgIAAIgRAAg");
	this.shape_147.setTransform(216.3,474.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAZAjIAAhFIAQAAIAABFgAgoAjIAAhFIAQAAIAAAaIASAAQALgBAGAHQAFAFAAAKQAAAKgGAGQgGAGgKAAgAgYAWIAPAAQAGAAACgCQACgCAAgGQAAgKgKAAIgPAAg");
	this.shape_148.setTransform(207.2,474.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQANgJAEgGQAFgHAAgFQAAgHgFgFQgEgFgIAAQgPAAgCAUIgQgEQABgNAJgJQAKgIAOAAQAPAAAJAIQAJAJAAAOQAAAMgIAIQgIAJggATIAwAAIAAAOg");
	this.shape_149.setTransform(1043.8,306);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAFIAAgRIAPgHIAIgGQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_150.setTransform(979.1,306);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgjAvIAAgNIAcAAIAAg6QgOAMgLAFIAAgRIAPgHIAIgGQAGgGACgDIAKAAIAABQIAbAAIAAANg");
	this.shape_151.setTransform(954.7,306);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgdAjIAAhFIAjAAQAMAAAFAGQAFAFgBAHQAAALgNAEQAQADAAAOQAAAIgFAFQgGAGgKAAgAgNAWIARAAQAFAAACgCQADgDAAgEQAAgKgKAAIgRAAgAgNgFIARAAQAIAAABgJQgBgIgIAAIgRAAg");
	this.shape_152.setTransform(341.3,474.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgGA6IAAgXQgRgCgIgJQgJgKAAgNQAAgQAKgIQAJgJAPgCIAAgXIANAAIAAAXQAPACAJAJQAKAIAAAQQAAANgJAKQgJAJgQACIAAAXgAAHAYQASgDAAgVQAAgUgSgEgAgYAAQAAAVASADIAAgwQgSAEAAAUg");
	this.shape_153.setTransform(224.4,474.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAZAjIAAhFIAQAAIAABFgAgoAjIAAhFIAQAAIAAAaIASAAQALgBAGAHQAFAFAAAKQAAAKgGAGQgGAGgKAAgAgYAWIAPAAQAGAAACgCQACgCAAgGQAAgKgKAAIgPAAg");
	this.shape_154.setTransform(207.2,474.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgjAwIAAgOIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgIQAGgFACgEIAKAAIAABRIAbAAIAAAOg");
	this.shape_155.setTransform(416,472.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgiAvIAAgQIAdgTQANgJAEgGQAEgHABgFQgBgHgEgFQgEgFgIAAQgPAAgDAUIgQgEQACgNAKgJQAIgIAOAAQAQAAAJAIQAJAJAAAOQAAAMgIAIQgIAJgfATIAvAAIAAAOg");
	this.shape_156.setTransform(494.7,472.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgjAwIAAgOIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgIQAGgFACgEIAKAAIAABRIAbAAIAAAOg");
	this.shape_157.setTransform(416,472.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQAMgJAFgGQAFgHgBgFQABgHgFgFQgEgFgIAAQgPAAgCAUIgQgEQABgNAJgJQAKgIAOAAQAPAAAJAIQAKAJgBAOQABAMgJAIQgIAJggATIAwAAIAAAOg");
	this.shape_158.setTransform(970.8,306);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgjAwIAAgOIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgIQAGgFACgEIAKAAIAABRIAbAAIAAAOg");
	this.shape_159.setTransform(416,472.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQAMgJAFgGQAFgHAAgFQAAgHgFgFQgFgFgHAAQgPAAgCAUIgQgEQABgNAJgJQAKgIAOAAQAPAAAJAIQAKAJAAAOQAAAMgJAIQgIAJggATIAwAAIAAAOg");
	this.shape_160.setTransform(365.2,304.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgjAwIAAgOIAcAAIAAg6QgOAMgLAEIAAgQIAPgGIAIgIQAGgFACgEIAKAAIAABRIAbAAIAAAOg");
	this.shape_161.setTransform(416,472.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAFAvIAAgUIgoAAIAAgNIAog9IARAAIAAA7IAPAAIAAAPIgPAAIAAAUgAgTAMIAYAAIAAgZIABgHIABgJg");
	this.shape_162.setTransform(788.8,614.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAFAwIAAgWIgoAAIAAgMIAog9IARAAIAAA7IAPAAIAAAOIgPAAIAAAWgAgTAMIAYAAIAAgZIAAgHIACgJg");
	this.shape_163.setTransform(844.5,472.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQAMgJAFgGQAFgHgBgFQABgHgFgFQgEgFgIAAQgPAAgCAUIgQgEQABgNAJgJQAKgIAOAAQAPAAAJAIQAKAJgBAOQABAMgJAIQgIAJgfATIAvAAIAAAOg");
	this.shape_164.setTransform(836.7,472.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AghAvIAAgQIAcgTQAMgJAFgGQAFgHAAgFQAAgHgFgFQgFgFgHAAQgPAAgCAUIgQgEQABgNAJgJQAKgIAOAAQAPAAAJAIQAKAJAAAOQAAAMgJAIQgIAJggATIAwAAIAAAOg");
	this.shape_165.setTransform(365.2,304.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgdAjIAAhFIAjAAQAMAAAFAGQAFAFgBAGQAAAMgNAEQAQADAAAOQAAAIgGAFQgFAFgKABgAgNAWIARAAQAFAAADgCQACgDAAgEQAAgKgKAAIgRAAgAgNgFIARAAQAIAAABgJQgBgIgIAAIgRAAg");
	this.shape_166.setTransform(506.1,655.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgWAbQgJgKAAgRQAAgOAJgLQAJgKAOAAQAPAAAIAKQAIAKAAAPIAAACIgvAAQAAAHACAEQABAEAEADQAEADAFABQALAAAFgMIAOADQgDAJgIAGQgIAGgMAAQgNAAgJgJgAgKgTQgEAEgBAIIAfAAQgBgIgEgEQgEgFgHAAQgFAAgFAFg");
	this.shape_167.setTransform(498.4,655.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AALAjIAAgbQgHAFgKAAQgJAAgFgEQgGgGAAgJIAAgcIAQAAIAAAaQAAAJAKAAQAGgBAFgBIAAghIAQAAIAABFg");
	this.shape_168.setTransform(491.1,655.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgYAeQgHgGAAgJQAAgXApAAIAEAAIAAgFQAAgLgOAAQgNAAgCALIgOgCQACgJAHgFQAIgGAOAAQAIAAAFABQAFACADADQAEADABAEQACADAAAKIAAAdQAAAHACAIIgPAAQgCgHgBgIQgGAQgQAAQgKAAgGgGgAgPAOQAAAEADADQADADAGAAQAIAAAFgFQAEgGAAgHIAAgGQgdAAAAAOg");
	this.shape_169.setTransform(484.1,655.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAMAjIAAg6IgXAAIAAA6IgPAAIAAhFIA2AAIAABFg");
	this.shape_170.setTransform(476.8,655.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgiAvIAAhdIAlAAQAQAAAIAJQAIAIAAALQAAANgJAHQgIAIgNAAIgXAAIAAAlgAgSgEIATAAQAIAAAFgDQADgEAAgHQAAgFgDgFQgEgEgKAAIgSAAg");
	this.shape_171.setTransform(461.5,653.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AANAjIAAgdIABgOIgJAMIgSAXIAAAIIgPAAIAAhFIAPAAIAAAeIAAAOIAKgMIAQgXIAAgJIAQAAIAABFg");
	this.shape_172.setTransform(401.5,256.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgiA6IA8h0IAKAAIg8B0g");
	this.shape_173.setTransform(650,650.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAaA6Ig8h0IAKAAIA8B0g");
	this.shape_174.setTransform(644.5,650.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAOAjIAAgfIgaAAIAAAfIgQAAIAAhFIAQAAIAAAbIAaAAIAAgbIAPAAIAABFg");
	this.shape_175.setTransform(507.7,682.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AANAjIAAgdIABgOIgJAMIgRAXIAAAIIgQAAIAAhFIAQAAIAAAfIgBANIAKgMIAQgXIAAgJIAQAAIAABFg");
	this.shape_176.setTransform(500,682.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgdAvIAAhcIAPAAIAAANQAGgOAOAAQALAAAHAKQAGAKABAPQAAAOgHALQgGALgNAAQgNAAgGgLIAAAhgAgKgcQgEAFAAAKIAAAJQAAAHAEAEQAFAGAFAAQAHgBADgGQAEgGAAgKQAAgKgEgHQgDgGgHAAQgFAAgFAFg");
	this.shape_177.setTransform(492.6,683.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgXAZQgIgLAAgOQAAgOAJgLQAJgKAOAAQANAAAJAKQAJAKAAAPQAAAQgJAKQgJAKgOAAQgPAAgIgLgAgLgQQgEAGAAAKQAAALAEAGQAFAGAGAAQAPAAAAgXQAAgKgDgGQgEgGgHAAQgHAAgFAGg");
	this.shape_178.setTransform(484.9,682.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAYArIgCgRIgrAAIgCARIgKAAIAAgcIAGAAIAQg5IAYAAIAPA5IAGAAIAAAcgAgOAPIAaAAIgKgsIgFAAg");
	this.shape_179.setTransform(477.8,683.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgXAuIAAgMIAHAAQAFAAACgBQACgCACgEIABgFIgBgEIgYhAIAQAAIAQAuIAPguIAMAAIgbBOQgCAHgEAEQgEAEgIAAIgIgBg");
	this.shape_180.setTransform(463.6,684.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgYAvIAAhdIAxAAIAAAPIghAAIAABOg");
	this.shape_181.setTransform(682.3,279.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AANAjIAAgfIgaAAIAAAfIgPAAIAAhFIAPAAIAAAbIAaAAIAAgbIAQAAIAABFg");
	this.shape_182.setTransform(730.5,253.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgiA7IA8h0IAKAAIg9B0g");
	this.shape_183.setTransform(647.9,678.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAaA7Ig8h0IAKAAIA8B0g");
	this.shape_184.setTransform(642.4,678.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgYAeQgHgGAAgJQAAgXApAAIAEAAIAAgFQAAgLgOAAQgNAAgCALIgOgCQACgJAHgFQAIgGAOAAQAIAAAFACQAFAAADAEQAEADABAEQACAEAAAIIAAAfQAAAHACAGIgPAAQgCgGgBgHQgGAPgQAAQgKAAgGgGgAgPAOQAAAEADADQADADAGAAQAIAAAFgGQAEgFAAgIIAAgFQgdAAAAAOg");
	this.shape_185.setTransform(520,716.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgdAiIAAhDIAjAAQAMAAAFAEQAFAGgBAGQAAAMgNAEQAQADAAANQAAAJgFAFQgGAFgKAAgAgNAXIARAAQAFgBADgCQACgCAAgFQAAgKgKAAIgRAAgAgNgFIARAAQAIAAABgJQgBgIgIAAIgRAAg");
	this.shape_186.setTransform(512.8,716.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgXAZQgIgLAAgOQAAgOAJgLQAJgKANAAQAPAAAIAKQAJAKAAAPQAAAQgJAKQgJAKgOAAQgPAAgIgLgAgKgQQgEAGAAAKQAAALAEAGQADAGAHAAQAQAAAAgXQgBgKgDgGQgEgGgIAAQgGAAgEAGg");
	this.shape_187.setTransform(505.2,716.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAOAiIgOg3IgRA3IgNAAIAWhDIASAAIAVBDg");
	this.shape_188.setTransform(498.5,716.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAOAyIAAgdIAAgPIgJANIgRAYIAAAHIgQAAIAAhEIAQAAIAAAdIgBAOIAKgNIARgVIAAgJIAPAAIAABEgAgNgjQgHgFABgJIAJAAQAAAJAKAAQALAAABgJIAJAAQAAAIgGAGQgGAFgJAAQgIAAgFgFg");
	this.shape_189.setTransform(491.6,715.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgYAeQgHgGAAgJQAAgXApAAIAEAAIAAgFQAAgLgOAAQgNAAgCALIgOgCQACgJAHgFQAIgGAOAAQAIAAAFACQAFAAADAEQAEADABAEQACAEAAAIIAAAfQAAAHACAGIgPAAQgCgGgBgHQgGAPgQAAQgKAAgGgGgAgPAOQAAAEADADQADADAGAAQAIAAAFgGQAEgFAAgIIAAgFQgdAAAAAOg");
	this.shape_190.setTransform(483.8,716.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AANAiIgNgZIgRAZIgNAAIAXgiIgUghIASAAIAKAUIANgUIANAAIgTAeIAXAlg");
	this.shape_191.setTransform(477.2,716.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AANAiIAAgcIABgOIgJAMIgSAXIAAAHIgPAAIAAhDIAPAAIAAAeIAAANIAKgNIAQgVIAAgJIAQAAIAABDg");
	this.shape_192.setTransform(470.2,716.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAcAvIAAhRIgZBRIgIAAIgahRIAABRIgOAAIAAhdIAaAAIATA8IATg8IAbAAIAABdg");
	this.shape_193.setTransform(460.8,715.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgiA7IA8h0IAKAAIg9B0g");
	this.shape_194.setTransform(647.9,678.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAaA7Ig8h0IAKAAIA8B0g");
	this.shape_195.setTransform(642.4,678.1);

	this.text_1 = new cjs.Text("Я не успель", "75px 'Franklin Gothic Medium'");
	this.text_1.lineHeight = 85;
	this.text_1.lineWidth = 449;
	this.text_1.parent = this;
	this.text_1.setTransform(208.7,226.1);

	this.instance = new lib.сложилось();
	this.instance.parent = this;
	this.instance.setTransform(215,64,1.323,1.323);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("EAM9Ag6QhygLjNgcInehCQkSgljLgVQisgRo6gmQnOgfkYgnQjZgdlIhAIofhpQh1gVg7gVQhfgigyg9QgngugVhFQgPgygKhRQgZi+gIjvQgFiTAAkcIgCrzQgBjpAViAQAgjGBgiAQBbh5C0hfQBAghBigrIClhGQA1gYDph0QCvhWBzgqQBUgeBrgcQBHgTB6gcIKUiaQCZgiA+gNQB6gaBggNQBqgPCGgIQBQgGChgGIMxgiQDfgJB1gBQC8gBCYAOQCCAMCvAgQBlATDKAnQCyAhBEAQQCIAhBkAuQDZBlCPDNQCPDOATDvQAHBZgPDMQgOC+AOBnIALBYQADAzgOAjQgPAqgsATIAfASQEmChDZB4QAuAXALAaQAGAOgBAPQgBAQgIAMIgGAJIAAAFQABAQgIAOQgHAPgMAIQgWAPguABQiaAJjzA5IjIAvQAEANgBAPQgBAegSAoIgdBFQgXBFAOBfQAGAlAhCAQBhFuhfEWQgPArgbA9IguBmIgnBbQgXA0gYAiQhLBoiLA1Qg8AXhPANQgtAIhiALIn2A3QiLAPhHAGQh2AKheACIgmAAQiAAAibgOgAL++5QiYABksAIQjyAGiQAHQjVAKisASQkrAgltBNQjiAwmuBsQhzAchCASQhkAchPAeQhdAlibBOQiyBZhGAeQjEBNhfAtQijBNhXBjQhRBbgrCEQglBzgGCMQgEBmAMCcIATECQAGCGgIC+QgEBsgLDZQgPGMA5D2QAPA9ARAlQAYAzAlAcQAjAbA3AMQAWAEBPAKQBeAKCDAdIDfAzQHHBnLOA6QDFAQGLAcQFeAcDxAdQDjAbHHBBQGQAyEdgCQCdgBDGgQQBugKDzgaQCVgRBFgMQB4gVBagiQBwgqA0hBQAUgaATgoIAehIIA/iKQAkhSAOg7QAahwgSiUQgIg9gqjGQggicgBhsQAAh1AkhcIguAJQgeAEgSgBQgagCgRgNQgUgPgCgcQgBgdASgSQANgMAUgGQAMgEAagEQBogPEthHQC6gsCFgQImojpQhWgwgogaQhEgtgtguQglgmABgfQABgdAcgSQAbgRAcAKQAOAFAPANIAYAYQAXAXAdAWQgCgUACgcQAFhGAWjAQATilADhhQAKk4h0jEQhvi9jwhzQi6hZkXgyQk9g6lYgRQingIjLAAIhSAAg");
	this.shape_196.setTransform(432.4,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_36,p:{x:410.3}}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_36,p:{x:410.3}},{t:this.shape_37}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_20,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_51,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_20,p:{x:389.8,y:304.7}}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_51,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_20,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_25,p:{x:421.3,y:256.5}},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}}]},1).to({state:[{t:this.shape_15},{t:this.shape_16,p:{x:411,y:194.6}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_69,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_16,p:{x:703.8,y:194.6}},{t:this.shape_68},{t:this.shape_67,p:{y:198.4,x:717.5}},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_69,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_16,p:{x:703.8,y:194.6}},{t:this.shape_68},{t:this.shape_67,p:{y:198.4,x:717.5}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{y:198.4,x:737.2}},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_57,p:{x:411,y:219.7}},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_67,p:{y:198.4,x:717.5}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{y:198.4,x:737.2}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_79,p:{x:411}},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{y:198.4,x:737.2}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_57,p:{x:703.8,y:219.7}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_79,p:{x:411}},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_82,p:{y:198.4}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_57,p:{x:703.8,y:219.7}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_70,p:{y:223.5,x:737.2}},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_86,p:{x:411}},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_82,p:{y:198.4}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_79,p:{x:703.8}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_70,p:{y:223.5,x:737.2}},{t:this.shape_57,p:{x:743.3,y:219.7}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_86,p:{x:411}},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_82,p:{y:198.4}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_79,p:{x:703.8}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_70,p:{y:223.5,x:737.2}},{t:this.shape_57,p:{x:743.3,y:219.7}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_87,p:{x:705.5}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_86,p:{x:411}},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_82,p:{y:198.4}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_79,p:{x:703.8}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_70,p:{y:223.5,x:737.2}},{t:this.shape_57,p:{x:743.3,y:219.7}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_86,p:{x:411}},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_82,p:{y:198.4}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_79,p:{x:703.8}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_70,p:{y:223.5,x:737.2}},{t:this.shape_57,p:{x:743.3,y:219.7}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_86,p:{x:411}},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_82,p:{y:198.4}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_79,p:{x:703.8}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_70,p:{y:223.5,x:737.2}},{t:this.shape_57,p:{x:743.3,y:219.7}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_86,p:{x:411}},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_82,p:{y:198.4}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_79,p:{x:703.8}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_70,p:{y:223.5,x:737.2}},{t:this.shape_57,p:{x:743.3,y:219.7}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_105},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_82,p:{y:198.4}},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_70,p:{y:223.5,x:737.2}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_105},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_107,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_105},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_78,p:{y:198.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_67,p:{y:223.5,x:717.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_61,p:{x:406.8,y:343.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_110,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_107,p:{x:702.8,y:340.1}},{t:this.shape_109}]},1).to({state:[{t:this.shape_15},{t:this.shape_76,p:{x:411}},{t:this.shape_17},{t:this.shape_18,p:{x:402.7,y:219.7}},{t:this.shape_105},{t:this.shape_19},{t:this.shape_69,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_16,p:{x:743.3,y:194.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_126,p:{x:1016.8}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_130,p:{x:1016.8}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_126,p:{x:1041.3}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_103,p:{x:744.4,y:280.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_130,p:{x:1016.8}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_126,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_130,p:{x:1016.8}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_126,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_139,p:{x:954.7}},{t:this.shape_138},{t:this.shape_137,p:{x:970.8,y:306}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_143,p:{x:954.7}},{t:this.shape_138},{t:this.shape_137,p:{x:970.8,y:306}},{t:this.shape_142,p:{x:979.1}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139,p:{x:1003.4}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_143,p:{x:954.7}},{t:this.shape_138},{t:this.shape_137,p:{x:970.8,y:306}},{t:this.shape_142,p:{x:979.1}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_137,p:{x:970.8,y:306}},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_148,p:{x:207.2}},{t:this.shape_147},{t:this.shape_146,p:{x:224.4}}]},1).to({state:[{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_137,p:{x:970.8,y:306}},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}}]},1).to({state:[{t:this.shape_155,p:{x:416,y:472.9}},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_137,p:{x:970.8,y:306}},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_113,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_110,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_107,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}}]},1).to({state:[{t:this.shape_157,p:{x:416,y:472.9}},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_137,p:{x:970.8,y:306}},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_155,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_113,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_110,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_107,p:{x:486.8,y:472.9}},{t:this.shape_156}]},1).to({state:[{t:this.shape_159,p:{x:416,y:472.9}},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_49,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_157,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_155,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_113,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_110,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_107,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_160,p:{x:365.2,y:304.7}},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_49,p:{x:769.7,y:472.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_23,p:{x:401.5,y:256.5}},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_89,p:{x:730.5,y:253.9}},{t:this.shape_95,p:{x:682.3,y:279.7}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_184,p:{y:678.1}},{t:this.shape_183,p:{y:678.1}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_184,p:{y:678.1}},{t:this.shape_183,p:{y:678.1}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_161},{t:this.shape_15},{t:this.shape_120},{t:this.shape_17},{t:this.shape_119},{t:this.shape_105},{t:this.shape_19},{t:this.shape_76,p:{x:703.8}},{t:this.shape_68},{t:this.shape_115},{t:this.shape_72},{t:this.shape_71},{t:this.shape_108},{t:this.shape_69,p:{x:743.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_86,p:{x:703.8}},{t:this.shape_77},{t:this.shape_78,p:{y:223.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_82,p:{y:223.5}},{t:this.shape_79,p:{x:743.3}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_21},{t:this.shape_172},{t:this.shape_22},{t:this.shape_24},{t:this.shape_65},{t:this.shape_26},{t:this.shape_28},{t:this.shape_27},{t:this.shape_30},{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:425.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_41},{t:this.shape_42},{t:this.shape_88},{t:this.shape_91},{t:this.shape_90},{t:this.shape_87,p:{x:722.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_134},{t:this.shape_102},{t:this.shape_101},{t:this.shape_57,p:{x:767,y:279.6}},{t:this.shape_104},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_125},{t:this.shape_124},{t:this.shape_127},{t:this.shape_136},{t:this.shape_129},{t:this.shape_128},{t:this.shape_130,p:{x:1041.3}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_103,p:{x:1065.3,y:282.2}},{t:this.shape_133},{t:this.shape_126,p:{x:1078.2}},{t:this.shape_135},{t:this.shape_151},{t:this.shape_138},{t:this.shape_158},{t:this.shape_150},{t:this.shape_141},{t:this.shape_140},{t:this.shape_143,p:{x:1003.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_142,p:{x:1027.7}},{t:this.shape_139,p:{x:1035.9}},{t:this.shape_149},{t:this.shape_44},{t:this.shape_43},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46},{t:this.shape_165},{t:this.shape_48},{t:this.shape_50},{t:this.shape_51,p:{x:389.8,y:304.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_20,p:{x:422.3,y:304.7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_59},{t:this.shape_58},{t:this.shape_60},{t:this.shape_114},{t:this.shape_63},{t:this.shape_62},{t:this.shape_64},{t:this.shape_25,p:{x:413.3,y:368.4}},{t:this.shape_66},{t:this.shape_16,p:{x:765.6,y:366.5}},{t:this.shape_18,p:{x:773.5,y:366.5}},{t:this.shape_159,p:{x:683.1,y:340.1}},{t:this.shape_106},{t:this.shape_70,p:{y:344,x:696.7}},{t:this.shape_157,p:{x:702.8,y:340.1}},{t:this.shape_109},{t:this.shape_67,p:{y:344,x:716.6}},{t:this.shape_61,p:{x:722.3,y:340.1}},{t:this.shape_112},{t:this.shape_155,p:{x:738.8,y:340.1}},{t:this.shape_111},{t:this.shape_154},{t:this.shape_147},{t:this.shape_153},{t:this.shape_148,p:{x:332.2}},{t:this.shape_152},{t:this.shape_146,p:{x:349.4}},{t:this.shape_113,p:{x:486.8,y:472.9}},{t:this.shape_156},{t:this.shape_110,p:{x:549.3,y:472.9}},{t:this.shape_137,p:{x:557.2,y:472.9}},{t:this.shape_107,p:{x:761.8,y:472.9}},{t:this.shape_160,p:{x:769.7,y:472.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_49,p:{x:781,y:614.9}},{t:this.shape_162},{t:this.shape_171},{t:this.shape_23,p:{x:469.2,y:655.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_95,p:{x:458.6,y:681.6}},{t:this.shape_180},{t:this.shape_89,p:{x:470.6,y:682.8}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_174},{t:this.shape_173},{t:this.shape_195},{t:this.shape_194},{t:this.shape_184,p:{y:712.9}},{t:this.shape_183,p:{y:712.9}}]},1).to({state:[{t:this.shape_196},{t:this.instance},{t:this.text_1}]},14).to({state:[{t:this.shape_196},{t:this.instance}]},16).to({state:[]},212).wait(80));

	// Слой_1
	this.instance_1 = new lib.Растровоеизображение1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146,29,1.053,1.053);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},100).wait(308));

	// Слой_2
	this.instance_2 = new lib.Растровоеизображение2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-218,-72,3.546,3.546);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},100).wait(308));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(402,278.5,1656,1425.4);
// library properties:
lib.properties = {
	id: '1ED0752AA24E894198A15A9326D69AAA',
	width: 1240,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/набортекста_atlas_.png?1543637810251", id:"набортекста_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1ED0752AA24E894198A15A9326D69AAA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;