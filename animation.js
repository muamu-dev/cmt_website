(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animation_atlas_1", frames: [[0,0,619,403],[0,405,550,400],[552,405,550,400],[621,0,550,400],[1104,402,550,400],[1173,0,550,400],[1104,804,550,400],[0,807,550,400],[552,807,550,400],[1104,1206,550,400],[0,1209,550,400],[552,1209,550,400],[1104,1608,550,400],[0,1611,550,400],[552,1611,550,400],[1104,2010,550,400]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CameraPic = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_10 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_11 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_12 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_14 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Loading...", "60px 'Segoe Print'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 107;
	this.text.lineWidth = 304;
	this.text.parent = this;
	this.text.setTransform(0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.7,-64.1,307.5,128.3);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AC3AAQAABMg2A1Qg1A2hMAAQhLAAg1g2Qg2g1AAhMQAAhLA2g1QA1g2BLAAQBMAAA1A2QA2A1AABLg");
	this.shape.setTransform(18.25,18.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/CEIgGgEIgFgEIgCgEIgFgEIAAgDIgCgFIAAgDIgBgEIABgEIAAgDIAAgFIACgDIACgEIADgEIADgEIAGgEIAEgCIAFgBIAJgBIAAgBIALADIAIAEIAFAEIADADIACAEIABAEIABAEIABAEIAAADIAAAFIAAADIgBAEIgBAEIgCADIgDAFIgEADIgFAEIgEADIgDABIgJABIgOgCgAA2B+IgGgDIgFgEIgCgEIgFgDIgBgFIgBgDIAAgEIgBgEIABgEIAAgEIAAgDIABgFIADgDIADgEIADgEIAGgEIAEgCIAEgCIAJAAIAAgBIAMACIAHAFIAFADIADAEIADAEIABAEIABAEIABADIAAAFIAAADIAAAEIgBAEIgBADIgCAFIgDADIgEAEIgFAEIgEACIgEABIgJACIgNgDgAhnAdIgGgEIgGgDIgDgEIgDgEIgCgEIgBgDIAAgFIgBgDIABgDIAAgEIAAgEIABgEIADgDIACgFIAEgDIAFgEIAGgDIADgBIAKgBIAAAAIALACIAHAFIAGADIACAEIADADIABAEIACAFIABADIAAAEIAAADIAAAEIgBAEIgCADIgDAFIgCADIgEAEIgFADIgEADIgDACIgJABIgNgDgABQAEIgHgEIgEgDIgDgEIgEgDIgBgFIgBgEIAAgDIgCgEIACgEIAAgEIAAgDIABgFIACgDIADgEIAEgEIAFgDIAFgDIAEgCIAIAAIABgBIAMADIAHAEIAFADIACAFIADADIACAEIABAEIABADIAAAFIAAADIAAAEIgBAEIgBAEIgDAEIgDADIgDAEIgGADIgDADIgFABIgIACIgNgDgAgVhDIgHgEIgFgDIgDgFIgDgDIgBgEIgCgEIAAgEIgBgEIABgDIAAgFIAAgDIACgEIACgEIACgDIAFgFIAEgDIAGgDIADgBIAJgBIAAgBIALADIAHAEIAGAEIACAEIADADIABAFIACADIABAEIAAAEIAAADIAAAFIgBADIgCAEIgDAEIgCAEIgEAEIgFADIgEADIgDABIgJACIgMgDg");
	this.shape_1.setTransform(16.8,16.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiACBQg2g2AAhLQAAhLA2g1QA1g2BLAAQBLAAA2A2QA2A1AABLQAABLg2A2Qg2A2hLAAQhLAAg1g2gAhAAvIgJABIgEABIgFACIgFAEIgEAEIgCAEIgDAEIgCADIAAAFIAAADIgBAEIABAEIAAADIACAFIABADIAEAEIACAEIAGAEIAGAEIANACIAJgBIADgBIAFgDIAEgEIAFgDIACgFIACgDIACgEIABgEIAAgDIAAgFIAAgDIgBgEIgCgEIgBgEIgCgEIgCgDIgGgEIgIgEIgLgDgAA0AqIgJABIgDABIgFACIgFAEIgEAEIgCAEIgDADIgCAFIAAADIAAAEIgBAEIABAEIAAAEIACADIABAFIAEADIACAEIAGAEIAGADIAMADIAJgCIAFgBIADgCIAGgEIAEgEIACgDIADgFIABgDIABgEIAAgEIAAgDIAAgFIgBgDIgBgEIgCgEIgDgEIgCgEIgGgDIgHgFIgMgCgAhpg3IgJABIgEABIgFADIgFAEIgEADIgDAFIgCADIgBAEIAAAEIAAAEIgBADIABAEIAAAFIABADIABAEIAEAEIADADIAFADIAGAEIANADIAJgBIAEgCIADgDIAGgDIADgEIADgCIADgFIABgDIABgEIAAgEIAAgEIAAgEIgBgDIgBgFIgBgEIgDgDIgDgEIgFgDIgHgFIgMgCgABOhQIgJAAIgDACIgGADIgFADIgEAEIgCAEIgDADIgBAFIAAADIAAAEIgCAEIACAEIAAADIABAEIACAFIADADIADAEIAFAEIAHAEIANADIAIgCIAEgBIAEgDIAFgEIAEgEIACgDIADgEIACgEIABgEIAAgEIAAgDIAAgFIgBgDIgCgEIgCgEIgCgDIgCgFIgGgDIgHgEIgLgDIgBABgAgXiYIgJABIgEABIgFADIgFADIgEAFIgDADIgCAEIgBAEIAAADIAAAFIgBADIABAEIAAAEIABAEIABAEIAEADIADAFIAFADIAGAEIANADIAJgCIAEgBIADgDIAFgDIADgEIADgEIACgEIACgEIABgDIAAgFIAAgDIAAgEIgBgEIgCgDIAAgFIgDgDIgDgEIgEgEIgHgEIgMgDg");
	this.shape_2.setTransform(18.25,18.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,38.5,38.5), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ACZAAQAAA/gtAtQgtAtg/AAQg+AAgtgtQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+g");
	this.shape.setTransform(15.25,15.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggB0IgGgDIgFgEIgDgEIgEgEIgBgEIgBgDIAAgFIgBgDIABgEIAAgEIAAgDIABgFIADgDIACgFIAEgDIAFgDIAFgEIAEgBIAJgBIAAAAIAMACIAHAFIAEADIADAEIADAEIABADIABAFIABADIAAAEIAAAEIAAAEIgBAEIgBADIgDAFIgCADIgEAEIgEAEIgEACIgEABIgJACIgNgDgAA2BWIgGgEIgFgEIgDgDIgEgFIgBgDIgBgFIAAgDIgBgEIABgEIAAgDIAAgFIABgDIADgEIACgEIAEgDIAFgFIAFgCIAEgBIAJgBIAAgBIAMADIAHAEIAFAEIADADIADAEIABAEIABAEIABAEIAAADIAAAFIAAADIgBAEIgBAEIgDADIgCAFIgEADIgFAEIgEADIgEABIgJABIgNgCgAhYAYIgGgDIgGgFIgCgDIgEgEIgBgEIgBgDIAAgEIgCgDIACgEIAAgEIAAgEIABgEIACgDIADgFIAEgDIAFgEIAFgCIAEgCIAJAAIAAgBIALADIAIADIAFAEIADAEIACAEIACADIABAFIABADIAAAEIAAAEIAAADIgBAEIgBADIgDAFIgDADIgEAEIgFAEIgDACIgEABIgJACIgNgDgABBgPIgHgFIgFgDIgCgEIgEgEIgCgEIgBgDIAAgEIgBgFIABgDIAAgEIAAgEIABgEIADgEIADgDIAEgEIAFgEIAFgDIADgBIAJgBIAAAAIAMACIAHAFIAGADIACAEIADADIABAFIABADIACAEIAAAEIAAAEIAAAEIgCADIgBAFIgCADIgDAEIgEAEIgFAEIgEADIgEABIgJABIgMgCgAgVgzIgHgFIgFgDIgDgEIgDgEIgCgEIgBgEIAAgDIgBgEIABgEIAAgEIAAgDIABgFIADgEIACgDIAEgEIAGgDIAFgEIADgBIAJgBIAAAAIALACIAHAFIAGADIACAEIADAEIABAEIABAEIACADIAAAFIAAADIAAAEIgCAEIgBAEIgCADIgDAEIgEAEIgFAEIgEADIgDABIgJABIgMgCg");
	this.shape_1.setTransform(14.225,14.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhrBsQgsgtgBg/QABg+AsgtQAtgsA+gBQA/ABAtAsQAsAtABA+QgBA/gsAtQgtAsg/ABQg+gBgtgsgAgdAtIgJABIgEABIgFAEIgFADIgEADIgDAFIgCADIgBAFIAAADIAAAEIgBAEIABADIAAAFIABADIABAEIAEAEIADAEIAFAEIAGADIANADIAJgCIADgBIAEgCIAFgEIAEgEIADgDIACgFIABgDIABgEIAAgEIAAgEIAAgEIgBgDIgBgFIgBgDIgCgEIgDgEIgFgDIgHgFIgMgCgAA5APIgJABIgEABIgFACIgFAFIgEADIgCAEIgDAEIgBADIAAAFIAAADIgCAEIACAEIAAADIABAFIABADIAEAFIADADIAFAEIAGAEIANACIAJgBIAEgBIADgDIAGgEIADgDIADgFIADgDIABgEIABgEIAAgDIAAgFIAAgDIgBgEIgBgEIgBgEIgDgEIgDgDIgFgEIgHgEIgMgDgAhWgtIgJAAIgDACIgFACIgFAEIgFADIgCAFIgCADIgBAEIAAAEIAAAEIgCAEIACADIAAAFIABACIABAEIADAEIADADIAFAFIAHADIAMADIAJgCIAFgBIADgCIAFgEIAEgEIACgDIAEgFIABgCIABgFIAAgDIAAgEIAAgEIgBgDIgBgFIgCgDIgDgEIgCgEIgGgEIgHgDIgMgDgABDhXIgJABIgEABIgFADIgEAEIgFAEIgDADIgCAEIgBAEIAAAEIAAAEIgBADIABAFIAAAEIABADIABAEIAEAEIADAEIAFADIAGAFIANACIAJgBIAEgBIAEgDIAFgEIAEgEIADgEIACgDIABgFIABgDIAAgEIAAgEIAAgEIgBgEIgBgDIgBgFIgDgDIgDgEIgFgDIgHgFIgMgCgAgTh7IgJABIgEABIgEAEIgGADIgEAEIgDADIgCAEIgBAFIAAADIAAAEIgBAEIABAEIAAADIABAEIABAEIAEAEIADAEIAFADIAGAFIANACIAJgBIAEgBIAEgDIADgEIAFgEIADgEIACgDIABgEIABgEIAAgEIAAgDIAAgFIgBgDIgBgEIgCgEIgCgEIgDgEIgEgDIgIgFIgLgCg");
	this.shape_2.setTransform(15.25,15.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,32.5,32.5), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.2)").s().p("A8vSqQg9gpgyg2IgFgIIgIgHIgFgIIgHgHIgFgIIgFgHIgIgIIgFgHIgFgIIgFgHIgFgIIgFgHIgFgIIgFgHIgCgIIgFgHIgFgIIgDgHIgFgIIgCgHIgFgIIgDgHIgFgIIgCgHIgDgIIgCgHIgDgIIgFgHIgCgIIgDgHIgCgIIgDgHIgCgIIAAgHIgDgIIgCgHIgDgIIgCgHIAAgIIgDgHIAAgIIgCgHIgDgIIAAgHIgCgIIAAgHIAAgIIgDgHIAAgIIAAgHIgCgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIgDgHIADgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIACgIIAAgHIAAgIIADgHIAAgIIACgHIAAgIIADgHIAAgIIACgHIAAgIIADgHIACgIIAAgHIADgIIACgHIAFgPIAFgPIAIgXIAFgPIACgHIAFgIIADgHIACgIIAFgHIADgIIAFgHIACgIIAFgHIADgIIAFgHIAFgIIAFgHIAKgPIAKgPIADgFIgBAAIgCgIIgFgHIgFgIIgDgHIgFgIIgCgHIgFgIIgDgHIgFgIIgCgHIgDgIIgCgHIgDgIIgFgHIgCgIIgDgHIgCgIIgDgHIgCgIIAAgHIgDgIIgCgHIgDgIIgCgHIAAgIIgDgHIAAgIIgCgHIgDgIIAAgHIgCgIIAAgHIAAgIIgDgHIAAgIIAAgHIgCgIIAAgGIAAgIIAAgHIAAgIIAAgHIAAgIIgDgHIADgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIACgIIAAgHIAAgIIADgHIAAgIIACgHIAAgIIADgHIAAgIIACgHIAAgIIADgHIACgIIAAgHIADgIIACgHIAFgPIAFgPIAIgXIAFgPIACgHIAFgIIADgHIACgIIAFgHIADgIIAFgHIACgIIAFgHIADgIIAFgHIAFgIIAFgHIAKgPIAKgPIAPgXIAHgHIAFgIIAFgHIAIgIIAHgHIAFgIQAmgnArgjQA/gyBKgiQBLgiBQgNIAAgHIAAgIIAAgHIACgIIAAgHIAAgIIADgHIAAgIIACgHIAAgIIADgHIAAgIIACgHIAAgIIADgHIACgIIAAgHIADgIIACgHIAFgPIAFgPIAIgXIAFgPIACgHIAFgIIADgHIACgIIAFgHIADgIIAFgHIACgIIAFgHIADgIIAFgHIAFgIIAFgHIAKgPIAKgPIAPgXIAHgHIAFgIIAFgHIAIgIIAHgHIAFgIQAmgnArgjQA/gyBKgiQB/g6CMACIAAgBQBbAABXAZQBXAZBNAxQBMAvA+BAIAFAIIAIAHIAHAIIAFAHIAFAIIAIAHIAFAIIAFAHIAFAIIAKAPIAKAPIAPAWIACAIIAFAHIADAIIAFAHIACAIIAFAHIADAIIAFAHIACAIIADAHIACAIIAFAHIADAIIACAHIADAIIACAHIADAIIABACQAlgYAqgTQB/g6CLACIAAgBQBbAABXAZQBXAZBNAxQBHArA6A7QA2gUA4gKIAHgLIAHgHIAFgIIAFgHIAIgIIAHgHIAFgIQAmgnArgjQA/gyBJgiQA2gYA3gOQA5gqBAgeQCAg6CMACIAAgBQBbAABXAZQBXAZBNAxQBMAvA+BAIAFAIIAIAHIAHAIIAFAHIAFAIIAIAHIAFAIIAFAHIAFAIIAKAPIAKAPIAPAWIACAIIAFAHIADAIIAFAHIACAIIAFAHIADAIIAFAHIACAIIADAHIACAIIAFAHIADAIIACAHIADAIIACAHIADAIIACAHIAFAPIADAIIAAAHIACAIIADAHIAAAIIACAHIADAIIAAAHIACAIIAAAHIADAIIAAAHIACAIIAAAHIAAAIIAAAHIADAIIAAAHIAAAIIAAAPIAAAPIAAAWIAAAPIAAAIIAAAHIgDAIIAAAHIAAAIIgCAHIAAAIIAAAHIgDAIIAAAHIgCAIIgDAHIAAAIIgCAHIAAAIIgDAHIgCAIIgDAHIgCAIIAAAHIgDAIIgCAHIgDAIIgCAHIgDAIIgFAHIgCAIIgDAHIgCAIIgDAHIgFAIIgCAHIgFAIIgDAHIgFAIIgCAHIgFAIIgDAHIgFAIIgFAHIgFAIIgCAHIgFAIIgFAHIgFAIIgFAHIgIAIIgFAHIgFAIIgFAHIgHAIIgFAHIgIAIIgHAHIgFAIQgZAZgaAXQA3AnAwAxIAFAIIAIAHIAHAIIAFAHIAFAIIAIAHIAFAIIAFAHIAFAIIAKAPIAKAPIAPAWIACAIIAFAHIADAIIAFAHIACAIIAFAHIADAIIAFAHIACAIIADAHIACAIIAFAHIADAIIACAHIADAIIACAHIADAIIACAHIAFAPIADAIIAAAHIACAIIADAHIAAAIIACAHIADAIIAAAHIACAIIAAAHIADAIIAAAHIACAIIAAAHIAAAIIAAAHIADAIIAAAHIAAAIIAAAPIAAAPIAAAWIAAAPIAAAIIAAAHIgDAIIAAAHIAAAIIgCAHIAAAIIAAAHIgDAIIAAAHIgCAIIgDAHIAAAIIgCAHIAAAIIgDAHIgCAIIgDAHIgCAIIAAAHIgDAIIgCAHIgDAIIgCAHIgDAIIgFAHIgCAIIgDAHIgCAIIgDAHIgFAIIgCAHIgFAIIgDAHIgFAIIgCAHIgFAIIgDAHIgFAIIgFAHIgFAIIgCAHIgFAIIgFAHIgFAIIgFAHIgIAIIgFAHIgFAIIgFAHIgHAIIgFAHIgIAIIgHAHIgFAIQhjBniEAzQk+B8kZiyQhcBYh3AuQlLCBkkjGQgugfgognQjCABizh5Qg9gpgyg2IgFgIIgIgHIgFgIIgHgHIgFgIIgFgHIgIgIIgFgHIgFAHIgFAIIgFAHIgHAIIgFAHIgIAIIgHAHIgFAIQhjBniEAzQimBBicgSIgFAGIgFAIIgFAHIgHAIIgFAHIgIAIIgHAHIgFAIQhjBniEAzQiCAzh8AAQi/AAiyh4g");
	this.shape.setTransform(211.875,131.3787);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,423.8,262.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgOA0IgKgEIgGgDIgEgEIgEgEIgEgEIgDgDIgCgFIgBgDIgCgEIgBgEIgBgEIAAgEIAAgDIgCgEIACgDIAAgEIAAgEIABgEIABgEIACgDIACgFIADgDIAEgEIADgEIAEgDIAGgFIAIgDIAIgDIAKAAIAAgBIAQADIAJADIAHAEIAEAEIAFADIACAFIACADIADAFIADADIABAEIABAEIABADIAAAFIAAADIAAADIAAAEIAAAEIgBAEIgBADIgBAFIgBADIgDAEIgDAEIgCAEIgFADIgEAEIgGAEIgPAHIgMABIgOgDg");
	this.shape.setTransform(5.45,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,10.9,11), null);


(lib.Screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#563613").ss(2,1,1).p("AAFmPIAAAKIAAJXQAlACAZAaQAcAcAAAnQAAAngcAcQgcAcgnAAQgmAAgdgcQgbgcAAgnQAAgnAbgcQAdgcAmAAQADAAACAAIAAAo");
	this.shape.setTransform(236.5,317);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("EgjJgVtMBGTAAAMAAAArRIAAAKMgjKAAAMgjJAAAIAAgKg");
	this.shape_1.setTransform(237,139);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("Egk3AAAIB4AAMAjJAAAMAjKAAAIBkAA");
	this.shape_2.setTransform(236,277);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AAAVuIAAgKIAAAKMgjJAAAIAAgKMAAAgrRMBGTAAAMAAAArRMgjKAAAMgjJAAAMAjJAAAMAjKAAAIAAAKgEAjKAVkg");
	this.shape_3.setTransform(237,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Screen, new cjs.Rectangle(-2,-1,476,359), null);


(lib.LoadingSquare5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiIiIIERAAIAAERIkRAAg");
	this.shape.setTransform(13.675,13.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiICJIAAkRIERAAIAAERg");
	this.shape_1.setTransform(13.675,13.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.4,29.4);


(lib.LoadingSquare4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiIiIIERAAIAAERIkRAAg");
	this.shape.setTransform(13.675,13.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiICJIAAkRIERAAIAAERg");
	this.shape_1.setTransform(13.675,13.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.4,29.4);


(lib.LoadingSquare3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiIiIIERAAIAAERIkRAAg");
	this.shape.setTransform(13.675,13.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiICJIAAkRIERAAIAAERg");
	this.shape_1.setTransform(13.675,13.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.4,29.4);


(lib.LoadingSquare2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiIiIIERAAIAAERIkRAAg");
	this.shape.setTransform(13.675,13.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiICJIAAkRIERAAIAAERg");
	this.shape_1.setTransform(13.675,13.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.4,29.4);


(lib.LoadingSquare1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiIiIIERAAIAAERIkRAAg");
	this.shape.setTransform(13.675,13.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiICJIAAkRIERAAIAAERg");
	this.shape_1.setTransform(13.675,13.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.4,29.4);


(lib.Legs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Aj0oMIlAQZAExn4IEEPx");
	this.shape.setTransform(56.5,52.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Legs, new cjs.Rectangle(-2,-2,117,109), null);


(lib.Camera = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CameraPic();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,619,403);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.text = new cjs.Text("END", "35px 'Segoe Script'", "#FF0000");
	this.text.lineHeight = 57;
	this.text.lineWidth = 89;
	this.text.parent = this;
	this.text.setTransform(37,10.55);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3).to({_off:false},0).wait(1));

	// Layer_2
	this.text_1 = new cjs.Text("END", "35px 'Segoe Script'", "#9966FF");
	this.text_1.lineHeight = 57;
	this.text_1.lineWidth = 89;
	this.text_1.parent = this;
	this.text_1.setTransform(37,10.55);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({_off:false},0).wait(3));

	// Layer_1
	this.text_2 = new cjs.Text("END", "35px 'Segoe Script'", "#FFFFFF");
	this.text_2.lineHeight = 57;
	this.text_2.lineWidth = 89;
	this.text_2.parent = this;
	this.text_2.setTransform(37,10.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("AsplTIZTAAIAAKnI5TAAg");
	this.shape.setTransform(81,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AspFUIAAqnIZTAAIAAKng");
	this.shape_1.setTransform(81,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_2}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,164,70);


(lib.BlackSquare = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhKhKICMAAIAKAAIAACWIiWAAIAAgFg");
	this.shape.setTransform(13.65,13.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiIiIIERAAIAAERIkRAAg");
	this.shape_1.setTransform(13.675,13.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhKBMIAAgFIAAiRICLAAIALAAIAACWg");
	this.shape_2.setTransform(13.65,13.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiICJIAAkRIERAAIAAERgAhVBHIAKAAIAAAEICWAAIAAiWIgKAAIAAgEIiWAAg");
	this.shape_3.setTransform(13.675,13.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.4,29.4);


// stage content:
(lib.animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [99,239,254];
	// timeline functions:
	this.frame_99 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btn.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(241);
		});
	}
	this.frame_239 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_254 = function() {
		var _this = this;
		/*
		Stop the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(140).call(this.frame_239).wait(15).call(this.frame_254).wait(1));

	// content
	this.instance = new lib.Image_0();
	this.instance.setTransform(117,175);

	this.instance_1 = new lib.Image_1();
	this.instance_1.setTransform(117,175);

	this.instance_2 = new lib.Image_2();
	this.instance_2.setTransform(117,175);

	this.instance_3 = new lib.Image_3();
	this.instance_3.setTransform(117,175);

	this.instance_4 = new lib.Image_4();
	this.instance_4.setTransform(117,175);

	this.instance_5 = new lib.Image_5();
	this.instance_5.setTransform(117,175);

	this.instance_6 = new lib.Image_6();
	this.instance_6.setTransform(117,175);

	this.instance_7 = new lib.Image_7();
	this.instance_7.setTransform(117,175);

	this.instance_8 = new lib.Image_8();
	this.instance_8.setTransform(117,175);

	this.instance_9 = new lib.Image_9();
	this.instance_9.setTransform(117,175);

	this.instance_10 = new lib.Image_10();
	this.instance_10.setTransform(117,175);

	this.instance_11 = new lib.Image_11();
	this.instance_11.setTransform(117,175);

	this.instance_12 = new lib.Image_12();
	this.instance_12.setTransform(117,187);

	this.instance_13 = new lib.Image_13();
	this.instance_13.setTransform(117,175);

	this.instance_14 = new lib.Image_14();
	this.instance_14.setTransform(117,162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},240).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance_8}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance_8},{t:this.instance_9}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance_8},{t:this.instance_9},{t:this.instance_10}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance_8},{t:this.instance_9},{t:this.instance_10},{t:this.instance_11}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance_8},{t:this.instance_9},{t:this.instance_10},{t:this.instance_11},{t:this.instance_12}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance_8},{t:this.instance_9},{t:this.instance_10},{t:this.instance_11},{t:this.instance_12},{t:this.instance_13}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance_8},{t:this.instance_9},{t:this.instance_10},{t:this.instance_11},{t:this.instance_12},{t:this.instance_13},{t:this.instance_14}]},1).wait(1));

	// button
	this.btn = new lib.button();
	this.btn.name = "btn";
	this.btn.setTransform(632,525);
	this.btn._off = true;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(99).to({_off:false},0).wait(140).to({_off:true},1).wait(15));

	// text3
	this.text = new cjs.Text("College Mall Theaters", "35px 'Segoe Script'", "#FF0000");
	this.text.lineHeight = 57;
	this.text.lineWidth = 428;
	this.text.parent = this;
	this.text.setTransform(537.7372,251.3341,0.0941,0.1873);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(193).to({_off:false},0).wait(1).to({scaleX:0.1353,scaleY:0.2242,x:529.1324,y:245.9576},0).wait(1).to({scaleX:0.1765,scaleY:0.2612,x:520.5309,y:240.5811},0).wait(1).to({scaleX:0.2177,scaleY:0.2981,x:511.9295,y:235.2046},0).wait(1).to({scaleX:0.2588,scaleY:0.3351,x:503.328,y:229.8281},0).wait(1).to({scaleX:0.3,scaleY:0.372,x:494.7266,y:224.4516},0).wait(1).to({scaleX:0.3412,scaleY:0.4089,x:486.1251,y:219.0751},0).wait(1).to({scaleX:0.3824,scaleY:0.4459,x:477.5237,y:213.6986},0).wait(1).to({scaleX:0.4235,scaleY:0.4828,x:468.9222,y:208.322},0).wait(1).to({scaleX:0.4647,scaleY:0.5198,x:460.3208,y:202.9455},0).wait(1).to({scaleX:0.5059,scaleY:0.5567,x:451.7193,y:197.569},0).wait(1).to({scaleX:0.5471,scaleY:0.5937,x:443.1179,y:192.1925},0).wait(1).to({scaleX:0.5882,scaleY:0.6306,x:434.5164,y:186.816},0).wait(1).to({scaleX:0.6294,scaleY:0.6675,x:425.915,y:181.4395},0).wait(1).to({scaleX:0.6706,scaleY:0.7045,x:417.3135,y:176.063},0).wait(1).to({scaleX:0.7118,scaleY:0.7414,x:408.7121,y:170.6865},0).wait(1).to({scaleX:0.7529,scaleY:0.7784,x:400.1106,y:165.31},0).wait(1).to({scaleX:0.7941,scaleY:0.8153,x:391.5092,y:159.9335},0).wait(1).to({scaleX:0.8353,scaleY:0.8522,x:382.9077,y:154.557},0).wait(1).to({scaleX:0.8765,scaleY:0.8892,x:374.3063,y:149.1805},0).wait(1).to({scaleX:0.9176,scaleY:0.9261,x:365.7048,y:143.804},0).wait(1).to({scaleX:0.9588,scaleY:0.9631,x:357.1034,y:138.4275},0).wait(1).to({scaleX:1,scaleY:1,x:348.5019,y:133.051},0).wait(24).to({_off:true},1).wait(15));

	// text2
	this.text_1 = new cjs.Text("to", "50px 'Segoe Script'");
	this.text_1.lineHeight = 81;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(581.65,119.8,0.0769,0.1587,180);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(174).to({_off:false},0).wait(1).to({scaleX:0.1255,scaleY:0.2029,rotation:170.5263,x:585.2331,y:120.415},0).wait(1).to({scaleX:0.1741,scaleY:0.2472,rotation:161.0526,x:589.049,y:119.9938},0).wait(1).to({scaleX:0.2227,scaleY:0.2915,rotation:151.5789,x:592.8485,y:118.4887},0).wait(1).to({scaleX:0.2713,scaleY:0.3358,rotation:142.1053,x:596.375,y:115.9061},0).wait(1).to({scaleX:0.3198,scaleY:0.3801,rotation:132.6316,x:599.376,y:112.3082},0).wait(1).to({scaleX:0.3684,scaleY:0.4243,rotation:123.1579,x:601.6138,y:107.8102},0).wait(1).to({scaleX:0.417,scaleY:0.4686,rotation:113.6842,x:602.8766,y:102.578},0).wait(1).to({scaleX:0.4656,scaleY:0.5129,rotation:104.2105,x:602.9885,y:96.8216},0).wait(1).to({scaleX:0.5142,scaleY:0.5572,rotation:94.7368,x:601.8177,y:90.7879},0).wait(1).to({scaleX:0.5628,scaleY:0.6015,rotation:85.2632,x:599.2844,y:84.7513},0).wait(1).to({scaleX:0.6113,scaleY:0.6458,rotation:75.7895,x:595.3651,y:79.0037},0).wait(1).to({scaleX:0.6599,scaleY:0.69,rotation:66.3158,x:590.0967,y:73.8425},0).wait(1).to({scaleX:0.7085,scaleY:0.7343,rotation:56.8421,x:583.5768,y:69.559},0).wait(1).to({scaleX:0.7571,scaleY:0.7786,rotation:47.3684,x:575.9626,y:66.426},0).wait(1).to({scaleX:0.8057,scaleY:0.8229,rotation:37.8947,x:567.4671,y:64.6867},0).wait(1).to({scaleX:0.8543,scaleY:0.8672,rotation:28.4211,x:558.3534,y:64.5431},0).wait(1).to({scaleX:0.9028,scaleY:0.9114,rotation:18.9474,x:548.9262,y:66.1468},0).wait(1).to({scaleX:0.9514,scaleY:0.9557,rotation:9.4737,x:539.5226,y:69.5905},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:530.5002,y:74.9019},0).wait(46).to({_off:true},1).wait(15));

	// text1
	this.text_2 = new cjs.Text("Welcome", "50px 'Segoe Script'");
	this.text_2.lineHeight = 81;
	this.text_2.lineWidth = 288;
	this.text_2.parent = this;
	this.text_2.setTransform(550.1,62.4,0.0274,0.0962);
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(148).to({_off:false},0).wait(1).to({scaleX:0.0648,scaleY:0.1309,x:544.6442,y:61.0269},0).wait(1).to({scaleX:0.1022,scaleY:0.1657,x:539.1885,y:59.6537},0).wait(1).to({scaleX:0.1396,scaleY:0.2005,x:533.7327,y:58.2806},0).wait(1).to({scaleX:0.177,scaleY:0.2352,x:528.277,y:56.9074},0).wait(1).to({scaleX:0.2144,scaleY:0.27,x:522.8212,y:55.5343},0).wait(1).to({scaleX:0.2518,scaleY:0.3047,x:517.3655,y:54.1612},0).wait(1).to({scaleX:0.2893,scaleY:0.3395,x:511.9097,y:52.788},0).wait(1).to({scaleX:0.3267,scaleY:0.3743,x:506.454,y:51.4149},0).wait(1).to({scaleX:0.3641,scaleY:0.409,x:500.9982,y:50.0417},0).wait(1).to({scaleX:0.4015,scaleY:0.4438,x:495.5425,y:48.6686},0).wait(1).to({scaleX:0.4389,scaleY:0.4786,x:490.0867,y:47.2955},0).wait(1).to({scaleX:0.4763,scaleY:0.5133,x:484.631,y:45.9223},0).wait(1).to({scaleX:0.5137,scaleY:0.5481,x:479.1752,y:44.5492},0).wait(1).to({scaleX:0.5511,scaleY:0.5828,x:473.7194,y:43.176},0).wait(1).to({scaleX:0.5885,scaleY:0.6176,x:468.2637,y:41.8029},0).wait(1).to({scaleX:0.6259,scaleY:0.6524,x:462.8079,y:40.4298},0).wait(1).to({scaleX:0.6633,scaleY:0.6871,x:457.3522,y:39.0566},0).wait(1).to({scaleX:0.7007,scaleY:0.7219,x:451.8964,y:37.6835},0).wait(1).to({scaleX:0.7381,scaleY:0.7567,x:446.4407,y:36.3103},0).wait(1).to({scaleX:0.7756,scaleY:0.7914,x:440.9849,y:34.9372},0).wait(1).to({scaleX:0.813,scaleY:0.8262,x:435.5292,y:33.5641},0).wait(1).to({scaleX:0.8504,scaleY:0.8609,x:430.0734,y:32.1909},0).wait(1).to({scaleX:0.8878,scaleY:0.8957,x:424.6177,y:30.8178},0).wait(1).to({scaleX:0.9252,scaleY:0.9305,x:419.1619,y:29.4446},0).wait(1).to({scaleX:0.9626,scaleY:0.9652,x:413.7062,y:28.0715},0).wait(1).to({scaleX:1,scaleY:1,x:408.2504,y:26.6984},0).wait(65).to({_off:true},1).wait(15));

	// tape2
	this.instance_15 = new lib.Symbol3();
	this.instance_15.setTransform(62.25,235.2,1,1,0,0,0,15.2,15.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(129).to({_off:false},0).wait(1).to({rotation:4.3902,y:235.15},0).wait(1).to({rotation:8.7805},0).wait(1).to({rotation:13.1707},0).wait(1).to({rotation:17.561,y:235.2},0).wait(1).to({rotation:21.9512},0).wait(1).to({rotation:26.3415,y:235.15},0).wait(1).to({rotation:30.7317,y:235.1},0).wait(1).to({rotation:35.122,x:62.3,y:235.2},0).wait(1).to({rotation:39.5122,y:235.15},0).wait(1).to({rotation:43.9024,x:62.25},0).wait(1).to({rotation:48.2927},0).wait(1).to({rotation:52.6829},0).wait(1).to({rotation:57.0732,x:62.3},0).wait(1).to({rotation:61.4634},0).wait(1).to({rotation:65.8537,y:235.1},0).wait(1).to({rotation:70.2439,y:235.15},0).wait(1).to({rotation:74.6341,x:62.35,y:235.2},0).wait(1).to({rotation:79.0244,y:235.15},0).wait(1).to({rotation:83.4146,y:235.2},0).wait(1).to({rotation:87.8049},0).wait(1).to({rotation:92.1951,x:62.3,y:235.15},0).wait(1).to({rotation:96.5854},0).wait(1).to({rotation:100.9756,x:62.35},0).wait(1).to({rotation:105.3659,x:62.3},0).wait(1).to({rotation:109.7561,x:62.35,y:235.2},0).wait(1).to({rotation:114.1463,x:62.4},0).wait(1).to({rotation:118.5366,x:62.35},0).wait(1).to({rotation:122.9268},0).wait(1).to({rotation:127.3171,y:235.25},0).wait(1).to({rotation:131.7073},0).wait(1).to({rotation:136.0976},0).wait(1).to({rotation:140.4878,y:235.2},0).wait(1).to({rotation:144.878,x:62.3},0).wait(1).to({rotation:149.2683,x:62.4,y:235.25},0).wait(1).to({rotation:153.6585,x:62.35},0).wait(1).to({rotation:158.0488,x:62.3},0).wait(1).to({rotation:162.439},0).wait(1).to({rotation:166.8293,x:62.35},0).wait(1).to({rotation:171.2195},0).wait(1).to({rotation:175.6098},0).wait(1).to({rotation:180,y:235.3},0).wait(1).to({rotation:173.7931},0).wait(1).to({rotation:167.5862,y:235.25},0).wait(1).to({rotation:161.3793},0).wait(1).to({rotation:155.1724,x:62.3},0).wait(1).to({rotation:148.9655,x:62.35,y:235.3},0).wait(1).to({rotation:142.7586,y:235.25},0).wait(1).to({rotation:136.5517,y:235.2},0).wait(1).to({rotation:130.3448,x:62.3},0).wait(1).to({rotation:124.1379},0).wait(1).to({rotation:117.931,x:62.35,y:235.25},0).wait(1).to({rotation:111.7241,y:235.15},0).wait(1).to({rotation:105.5172,y:235.2},0).wait(1).to({rotation:99.3103},0).wait(1).to({rotation:93.1034},0).wait(1).to({rotation:86.8966,x:62.3,y:235.15},0).wait(1).to({rotation:80.6897},0).wait(1).to({rotation:74.4828},0).wait(1).to({rotation:68.2759,x:62.35},0).wait(1).to({rotation:62.069,x:62.25},0).wait(1).to({rotation:55.8621,x:62.3,y:235.2},0).wait(1).to({rotation:49.6552},0).wait(1).to({rotation:43.4483,y:235.15},0).wait(1).to({rotation:37.2414,x:62.25},0).wait(1).to({rotation:31.0345,x:62.2},0).wait(1).to({rotation:24.8276,x:62.25,y:235.2},0).wait(1).to({rotation:18.6207,y:235.15},0).wait(1).to({rotation:12.4138},0).wait(1).to({rotation:6.2069,x:62.2},0).wait(1).to({rotation:0,x:62.25,y:235.2},0).wait(1).to({rotation:4.5,x:62.2},0).wait(1).to({rotation:9},0).wait(1).to({rotation:13.5,x:62.25},0).wait(1).to({rotation:18,y:235.15},0).wait(1).to({rotation:22.5},0).wait(1).to({rotation:27},0).wait(1).to({rotation:31.5},0).wait(1).to({rotation:36},0).wait(1).to({rotation:40.5,x:62.3,y:235.1},0).wait(1).to({rotation:45,y:235.15},0).wait(1).to({rotation:49.5,x:62.25,y:235.1},0).wait(1).to({rotation:54,x:62.3,y:235.15},0).wait(1).to({rotation:58.5},0).wait(1).to({rotation:63},0).wait(1).to({rotation:67.5},0).wait(1).to({rotation:72},0).wait(1).to({rotation:76.5,y:235.2},0).wait(1).to({rotation:81,x:62.35},0).wait(1).to({rotation:85.5},0).wait(1).to({rotation:90},0).wait(1).to({rotation:94.5,x:62.3,y:235.15},0).wait(1).to({rotation:99},0).wait(1).to({rotation:103.5,y:235.2},0).wait(1).to({rotation:108,x:62.35},0).wait(1).to({rotation:112.5},0).wait(1).to({rotation:117},0).wait(1).to({rotation:121.5},0).wait(1).to({rotation:126},0).wait(1).to({rotation:130.5,x:62.4,y:235.25},0).wait(1).to({rotation:135,x:62.35},0).wait(1).to({rotation:139.5,x:62.4,y:235.2},0).wait(1).to({rotation:144,x:62.35,y:235.25},0).wait(1).to({rotation:148.5},0).wait(1).to({rotation:153},0).wait(1).to({rotation:157.5},0).wait(1).to({rotation:162},0).wait(1).to({rotation:166.5,x:62.3},0).wait(1).to({rotation:171,y:235.3},0).wait(1).to({rotation:175.5},0).wait(1).to({rotation:180,x:62.35},0).to({_off:true},1).wait(15));

	// tape1
	this.instance_16 = new lib.Symbol4();
	this.instance_16.setTransform(149.2,221.25,1,1,0,0,0,18.2,18.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(129).to({_off:false},0).wait(1).to({rotation:4.3902},0).wait(1).to({rotation:8.7805,x:149.15},0).wait(1).to({rotation:13.1707,y:221.2},0).wait(1).to({rotation:17.561,x:149.2},0).wait(1).to({rotation:21.9512,y:221.25},0).wait(1).to({rotation:26.3415,x:149.15,y:221.2},0).wait(1).to({rotation:30.7317,x:149.2},0).wait(1).to({rotation:35.122,x:149.25},0).wait(1).to({rotation:39.5122,x:149.2,y:221.25},0).wait(1).to({rotation:43.9024,x:149.25,y:221.15},0).wait(1).to({rotation:48.2927,x:149.2,y:221.2},0).wait(1).to({rotation:52.6829,x:149.3},0).wait(1).to({rotation:57.0732,x:149.2,y:221.25},0).wait(1).to({rotation:61.4634,x:149.25,y:221.2},0).wait(1).to({rotation:65.8537},0).wait(1).to({rotation:70.2439,y:221.25},0).wait(1).to({rotation:74.6341,y:221.2},0).wait(1).to({rotation:79.0244},0).wait(1).to({rotation:83.4146,y:221.25},0).wait(1).to({rotation:87.8049},0).wait(1).to({rotation:92.1951},0).wait(1).to({rotation:96.5854},0).wait(1).to({rotation:100.9756,x:149.3},0).wait(1).to({rotation:105.3659},0).wait(1).to({rotation:109.7561,x:149.25},0).wait(1).to({rotation:114.1463,x:149.3},0).wait(1).to({rotation:118.5366},0).wait(1).to({rotation:122.9268,x:149.25,y:221.3},0).wait(1).to({rotation:127.3171,x:149.3,y:221.2},0).wait(1).to({rotation:131.7073,y:221.3},0).wait(1).to({rotation:136.0976,x:149.35,y:221.25},0).wait(1).to({rotation:140.4878,x:149.25,y:221.3},0).wait(1).to({rotation:144.878,x:149.3,y:221.25},0).wait(1).to({rotation:149.2683,y:221.3},0).wait(1).to({rotation:153.6585,y:221.35},0).wait(1).to({rotation:158.0488,x:149.25,y:221.3},0).wait(1).to({rotation:162.439,x:149.3},0).wait(1).to({rotation:166.8293,y:221.35},0).wait(1).to({rotation:171.2195,x:149.25},0).wait(1).to({rotation:175.6098,y:221.3},0).wait(1).to({rotation:180,x:149.3,y:221.35},0).wait(1).to({rotation:173.7931,y:221.3},0).wait(1).to({rotation:167.5862,y:221.35},0).wait(1).to({rotation:161.3793,y:221.3},0).wait(1).to({rotation:155.1724,y:221.35},0).wait(1).to({rotation:148.9655,x:149.25,y:221.3},0).wait(1).to({rotation:142.7586,x:149.3,y:221.25},0).wait(1).to({rotation:136.5517},0).wait(1).to({rotation:130.3448},0).wait(1).to({rotation:124.1379},0).wait(1).to({rotation:117.931,y:221.3},0).wait(1).to({rotation:111.7241,y:221.25},0).wait(1).to({rotation:105.5172},0).wait(1).to({rotation:99.3103,y:221.2},0).wait(1).to({rotation:93.1034},0).wait(1).to({rotation:86.8966},0).wait(1).to({rotation:80.6897},0).wait(1).to({rotation:74.4828,x:149.25},0).wait(1).to({rotation:68.2759},0).wait(1).to({rotation:62.069,x:149.2},0).wait(1).to({rotation:55.8621,x:149.25},0).wait(1).to({rotation:49.6552},0).wait(1).to({rotation:43.4483},0).wait(1).to({rotation:37.2414},0).wait(1).to({rotation:31.0345,x:149.2,y:221.25},0).wait(1).to({rotation:24.8276,x:149.15,y:221.2},0).wait(1).to({rotation:18.6207,x:149.2},0).wait(1).to({rotation:12.4138,x:149.15},0).wait(1).to({rotation:6.2069,x:149.2},0).wait(1).to({rotation:0,y:221.25},0).wait(1).to({rotation:4.5,x:149.15},0).wait(1).to({rotation:9,x:149.2},0).wait(1).to({rotation:13.5,y:221.2},0).wait(1).to({rotation:18},0).wait(1).to({rotation:22.5},0).wait(1).to({rotation:27},0).wait(1).to({rotation:31.5},0).wait(1).to({rotation:36},0).wait(1).to({rotation:40.5,x:149.25},0).wait(1).to({rotation:45,y:221.15},0).wait(1).to({rotation:49.5,x:149.2,y:221.2},0).wait(1).to({rotation:54,x:149.25},0).wait(1).to({rotation:58.5},0).wait(1).to({rotation:63},0).wait(1).to({rotation:67.5},0).wait(1).to({rotation:72},0).wait(1).to({rotation:76.5},0).wait(1).to({rotation:81,y:221.25},0).wait(1).to({rotation:85.5,x:149.3},0).wait(1).to({rotation:90},0).wait(1).to({rotation:94.5,x:149.25,y:221.2},0).wait(1).to({rotation:99,y:221.25},0).wait(1).to({rotation:103.5,x:149.3},0).wait(1).to({rotation:108},0).wait(1).to({rotation:112.5},0).wait(1).to({rotation:117},0).wait(1).to({rotation:121.5},0).wait(1).to({rotation:126},0).wait(1).to({rotation:130.5,y:221.3},0).wait(1).to({rotation:135,x:149.35},0).wait(1).to({rotation:139.5,x:149.3,y:221.25},0).wait(1).to({rotation:144,y:221.3},0).wait(1).to({rotation:148.5},0).wait(1).to({rotation:153},0).wait(1).to({rotation:157.5},0).wait(1).to({rotation:162},0).wait(1).to({rotation:166.5},0).wait(1).to({rotation:171,x:149.25},0).wait(1).to({rotation:175.5,y:221.35},0).wait(1).to({rotation:180,x:149.3},0).to({_off:true},1).wait(15));

	// screen_light
	this.instance_17 = new lib.Symbol2();
	this.instance_17.setTransform(558.3,131.85,1,1,0,0,0,211.8,131.3);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(129).to({_off:false},0).wait(1).to({regX:211.9,regY:131.4,x:558.4,y:131.95,alpha:0.0368},0).wait(1).to({alpha:0.0737},0).wait(1).to({alpha:0.1105},0).wait(1).to({alpha:0.1474},0).wait(1).to({alpha:0.1842},0).wait(1).to({alpha:0.2211},0).wait(1).to({alpha:0.2579},0).wait(1).to({alpha:0.2947},0).wait(1).to({alpha:0.3316},0).wait(1).to({alpha:0.3684},0).wait(1).to({alpha:0.4053},0).wait(1).to({alpha:0.4421},0).wait(1).to({alpha:0.4789},0).wait(1).to({alpha:0.5158},0).wait(1).to({alpha:0.5526},0).wait(1).to({alpha:0.5895},0).wait(1).to({alpha:0.6263},0).wait(1).to({alpha:0.6632},0).wait(1).to({alpha:0.7},0).wait(91).to({_off:true},1).wait(15));

	// camera_light
	this.instance_18 = new lib.Symbol1();
	this.instance_18.setTransform(65.5,279.6,1,1,0,0,0,5.5,5.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(129).to({_off:false},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9171},0).wait(1).to({alpha:0.8343},0).wait(1).to({alpha:0.7514},0).wait(1).to({alpha:0.6686},0).wait(1).to({alpha:0.5857},0).wait(1).to({alpha:0.5029},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.4689},0).wait(1).to({alpha:0.5178},0).wait(1).to({alpha:0.5667},0).wait(1).to({alpha:0.6156},0).wait(1).to({alpha:0.6644},0).wait(1).to({alpha:0.7133},0).wait(1).to({alpha:0.7622},0).wait(1).to({alpha:0.8111},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.8156},0).wait(1).to({alpha:0.7711},0).wait(1).to({alpha:0.7267},0).wait(1).to({alpha:0.6822},0).wait(1).to({alpha:0.6378},0).wait(1).to({alpha:0.5933},0).wait(1).to({alpha:0.5489},0).wait(1).to({alpha:0.5044},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.4986},0).wait(1).to({alpha:0.5371},0).wait(1).to({alpha:0.5757},0).wait(1).to({alpha:0.6143},0).wait(1).to({alpha:0.6529},0).wait(1).to({alpha:0.6914},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.7686},0).wait(1).to({alpha:0.8071},0).wait(1).to({alpha:0.8457},0).wait(1).to({alpha:0.8843},0).wait(1).to({alpha:0.9229},0).wait(1).to({alpha:0.9614},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9581},0).wait(1).to({alpha:0.9162},0).wait(1).to({alpha:0.8744},0).wait(1).to({alpha:0.8325},0).wait(1).to({alpha:0.7906},0).wait(1).to({alpha:0.7487},0).wait(1).to({alpha:0.7069},0).wait(1).to({alpha:0.665},0).wait(1).to({alpha:0.6231},0).wait(1).to({alpha:0.5813},0).wait(1).to({alpha:0.5394},0).wait(1).to({alpha:0.4975},0).wait(1).to({alpha:0.4556},0).wait(1).to({alpha:0.4137},0).wait(1).to({alpha:0.3719},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.3631},0).wait(1).to({alpha:0.3963},0).wait(1).to({alpha:0.4294},0).wait(1).to({alpha:0.4625},0).wait(1).to({alpha:0.4956},0).wait(1).to({alpha:0.5288},0).wait(1).to({alpha:0.5619},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.6281},0).wait(1).to({alpha:0.6613},0).wait(1).to({alpha:0.6944},0).wait(1).to({alpha:0.7275},0).wait(1).to({alpha:0.7606},0).wait(1).to({alpha:0.7937},0).wait(1).to({alpha:0.8269},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.8273},0).wait(1).to({alpha:0.7947},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.7293},0).wait(1).to({alpha:0.6967},0).wait(1).to({alpha:0.664},0).wait(1).to({alpha:0.6313},0).wait(1).to({alpha:0.5987},0).wait(1).to({alpha:0.566},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.5007},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.4353},0).wait(1).to({alpha:0.4027},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.454},0).wait(1).to({alpha:0.496},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.664},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.748},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(15));

	// screen
	this.instance_19 = new lib.Screen();
	this.instance_19.setTransform(553,-185.75,1,1,0,0,0,236,178.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(110).to({_off:false},0).wait(1).to({y:-166.75},0).wait(1).to({y:-147.8},0).wait(1).to({y:-128.85},0).wait(1).to({y:-109.85},0).wait(1).to({y:-90.9},0).wait(1).to({y:-71.95},0).wait(1).to({y:-53},0).wait(1).to({y:-34},0).wait(1).to({y:-15.05},0).wait(1).to({y:3.9},0).wait(1).to({y:22.85},0).wait(1).to({y:41.85},0).wait(1).to({y:60.8},0).wait(1).to({y:79.75},0).wait(1).to({y:98.7},0).wait(1).to({y:117.7},0).wait(1).to({y:136.65},0).wait(1).to({y:155.6},0).wait(1).to({y:174.55},0).wait(110).to({_off:true},1).wait(15));

	// legs
	this.instance_20 = new lib.Legs();
	this.instance_20.setTransform(118.5,321.55,0.3982,0.4095,0,0,0,56.4,52.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(99).to({_off:false},0).wait(1).to({regX:56.5,regY:52.5,scaleX:0.4529,scaleY:0.4632,x:118.55,y:328},0).wait(1).to({scaleX:0.5076,scaleY:0.5169,y:334.5},0).wait(1).to({scaleX:0.5623,scaleY:0.5706,x:118.5,y:340.95},0).wait(1).to({scaleX:0.6171,scaleY:0.6242,x:118.55,y:347.35},0).wait(1).to({scaleX:0.6718,scaleY:0.6779,y:353.85},0).wait(1).to({scaleX:0.7265,scaleY:0.7316,y:360.3},0).wait(1).to({scaleX:0.7812,scaleY:0.7853,x:118.6,y:366.8},0).wait(1).to({scaleX:0.8359,scaleY:0.839,y:373.2},0).wait(1).to({scaleX:0.8906,scaleY:0.8926,x:118.55,y:379.65},0).wait(1).to({scaleX:0.9453,scaleY:0.9463,y:386.15},0).wait(1).to({scaleX:1,scaleY:1,x:118.6,y:392.6},0).wait(129).to({_off:true},1).wait(15));

	// camera
	this.instance_21 = new lib.Camera("synched",0);
	this.instance_21.setTransform(395.05,327.1,0.097,0.097,0,0,0,309.8,201.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(54).to({_off:false},0).wait(1).to({regX:309.5,x:395,y:327.05,alpha:0.0588},0).wait(1).to({alpha:0.1176},0).wait(1).to({alpha:0.1765},0).wait(1).to({alpha:0.2353},0).wait(1).to({alpha:0.2941},0).wait(1).to({alpha:0.3529},0).wait(1).to({alpha:0.4118},0).wait(1).to({alpha:0.4706},0).wait(1).to({alpha:0.5294},0).wait(1).to({alpha:0.5882},0).wait(1).to({alpha:0.6471},0).wait(1).to({alpha:0.7059},0).wait(1).to({alpha:0.7647},0).wait(1).to({alpha:0.8235},0).wait(1).to({alpha:0.8824},0).wait(1).to({alpha:0.9412},0).wait(1).to({alpha:1},0).wait(1).to({rotation:-14.9775,x:376.1,y:327.1},0).wait(1).to({rotation:-29.955,x:357.15},0).wait(1).to({rotation:-44.9325,x:338.25},0).wait(1).to({rotation:-59.91,x:319.35,y:327.05},0).wait(1).to({rotation:-74.8875,x:300.45,y:327.1},0).wait(1).to({rotation:-89.865,x:281.5,y:327.15},0).wait(1).to({rotation:-104.8425,x:262.6},0).wait(1).to({rotation:-119.82,x:243.7,y:327.1},0).wait(1).to({rotation:-134.7975,x:224.8},0).wait(1).to({rotation:-149.775,x:205.9},0).wait(1).to({rotation:-164.7525,x:187},0).wait(1).to({rotation:-179.73,x:168.1,y:327.05},0).wait(1).to({rotation:-149.7314,x:168.05},0).wait(1).to({rotation:-119.7329,x:168,y:327.1},0).wait(1).to({rotation:-89.7343,x:168.05,y:327.15},0).wait(1).to({rotation:-59.7357,y:327.1},0).wait(1).to({rotation:-29.7372,x:168,y:327.05},0).wait(1).to({rotation:0.2614,x:167.95,y:327.1},0).wait(1).to({scaleX:0.1735,scaleY:0.1735,rotation:0.2614,x:168,y:327.05},0).wait(1).to({scaleX:0.2499,scaleY:0.2499,x:167.95},0).wait(1).to({scaleX:0.3264,scaleY:0.3264,x:167.9},0).wait(1).to({scaleX:0.4029,scaleY:0.4029,x:167.95,y:327.1},0).wait(1).to({scaleX:0.4793,scaleY:0.4793,x:167.9},0).wait(1).to({scaleX:0.5558,scaleY:0.5558,x:167.95},0).wait(1).to({x:158.2,y:312.35},0).wait(1).to({x:148.45,y:297.6},0).wait(1).to({x:138.7,y:282.85},0).wait(1).to({x:128.95,y:268.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15));

	// text
	this.instance_22 = new lib.Text("synched",0);
	this.instance_22.setTransform(417.2,281.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(41).to({startPosition:0},0).wait(1).to({x:370.8},0).wait(1).to({x:324.4},0).wait(1).to({x:278},0).wait(1).to({x:231.6},0).wait(1).to({x:185.2},0).wait(1).to({x:138.8},0).wait(1).to({x:92.4},0).wait(1).to({x:46},0).wait(1).to({x:-0.4},0).wait(1).to({x:-46.8},0).wait(1).to({x:-93.2},0).wait(1).to({x:-139.6},0).to({_off:true},1).wait(201));

	// loading_cubes
	this.instance_23 = new lib.LoadingSquare5("synched",0);
	this.instance_23.setTransform(548.7,395,1,1,0,0,0,13.7,13.7);

	this.instance_24 = new lib.LoadingSquare4("synched",0);
	this.instance_24.setTransform(483.7,395,1,1,0,0,0,13.7,13.7);

	this.instance_25 = new lib.LoadingSquare3("synched",0);
	this.instance_25.setTransform(418.7,395,1,1,0,0,0,13.7,13.7);

	this.instance_26 = new lib.LoadingSquare2("synched",0);
	this.instance_26.setTransform(353.7,395,1,1,0,0,0,13.7,13.7);

	this.instance_27 = new lib.LoadingSquare1("synched",0);
	this.instance_27.setTransform(288.7,395,1,1,0,0,0,13.7,13.7);

	this.instance_28 = new lib.BlackSquare("synched",0);
	this.instance_28.setTransform(288.7,395,1,1,0,0,0,13.7,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23}]}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_28,p:{x:288.7}}]},11).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_28,p:{x:353.7}}]},6).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_28,p:{x:418.7}}]},6).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_28,p:{x:483.7}}]},6).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_28,p:{x:548.7}}]},6).to({state:[]},6).wait(214));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(1,1,1).p("AB7g1IAABrIj1AA");
	this.shape.setTransform(820.875,610.5375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#333333","#A9A9A9","#FFFFFF"],[0.137,0.584,0.784],-571.8,251,571.8,-251).s().p("Eh1LgYLMCyshOcMA3rB+zMiyrBOcg");
	this.shape_1.setTransform(238.3,355.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},239).to({state:[]},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-111.6,-65.2,1099.8999999999999,1077.2);
// library properties:
lib.properties = {
	id: 'F5BFA32B60552342B9A4AA99DC9D118B',
	width: 800,
	height: 600,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animation_atlas_1.png", id:"animation_atlas_1"}
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
an.compositions['F5BFA32B60552342B9A4AA99DC9D118B'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;