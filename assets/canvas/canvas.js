(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("EguyAjtMAAAhHZMBdlAAAMAAABHZg");
	this.shape.setTransform(299.5,228.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,599,457), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEOAAQAACThPBoQhPBohwAAQhvAAhPhoQhPhoAAiTQAAiSBPhoQBPhoBvAAQBwAABPBoQBPBoAACSg");
	this.shape.setTransform(27,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai+D7QhPhoAAiTQAAiSBPhoQBPhoBvAAQBwAABPBoQBPBoAACSQAACThPBoQhPBohwAAQhvAAhPhog");
	this.shape_1.setTransform(27,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1,-1,56,73), null);


// stage content:
(lib.canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Щелкните заданный экземпляр символа, чтобы выполнить функцию.
		*/
		_this.player.on('click', function(){
		/*
		Воспроизвести фрагмент ролика/видео или текущей временной шкалы.
		Воспроизводит указанный фрагмент ролика или видео.
		*/
		_this.play();
		});
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Остановить фрагмент ролика/видео
		Останавливает воспроизведение указанного фрагмента ролика или видео.
		*/
		_this.stop();
	}
	this.frame_30 = function() {
		var _this = this;
		/*
		Остановить фрагмент ролика/видео
		Останавливает воспроизведение указанного фрагмента ролика или видео.
		*/
		_this.stop();
	}
	this.frame_65 = function() {
		var _this = this;
		/*
		Остановить фрагмент ролика/видео
		Останавливает воспроизведение указанного фрагмента ролика или видео.
		*/
		_this.stop();
	}
	this.frame_83 = function() {
		var _this = this;
		/*
		Остановить фрагмент ролика/видео
		Останавливает воспроизведение указанного фрагмента ролика или видео.
		*/
		_this.stop();
	}
	this.frame_112 = function() {
		var _this = this;
		/*
		Остановить фрагмент ролика/видео
		Останавливает воспроизведение указанного фрагмента ролика или видео.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(35).call(this.frame_65).wait(18).call(this.frame_83).wait(29).call(this.frame_112).wait(20));

	// Слой_2
	this.player = new lib.Символ2();
	this.player.name = "player";
	this.player.parent = this;
	this.player.setTransform(267.5,189.6,1,1,0,0,0,299.4,228.5);

	this.timeline.addTween(cjs.Tween.get(this.player).wait(132));

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(33.1,149.6,1,1,0,0,0,27,35.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:472,y:254.6},29).to({x:33.1,y:149.6},35).to({x:463,y:56.6},18).to({x:33.1,y:149.6},29).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(243.1,161.1,599,457);
// library properties:
lib.properties = {
	id: '141A854BFF424043B11A028FEAB7A621',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['141A854BFF424043B11A028FEAB7A621'] = {
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