(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"PoV_Community_Display_Della_320x50_atlas_P_1", frames: [[0,302,1435,42],[0,0,1200,300]]},
		{name:"PoV_Community_Display_Della_320x50_atlas_NP_1", frames: [[0,0,600,500]]}
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



(lib.AlertStripe2x = function() {
	this.initialize(ss["PoV_Community_Display_Della_320x50_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Dellabkgd = function() {
	this.initialize(ss["PoV_Community_Display_Della_320x50_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PoVHorizWhite = function() {
	this.initialize(ss["PoV_Community_Display_Della_320x50_atlas_P_1"]);
	this.gotoAndStop(1);
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


(lib.LOGO = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PoVHorizWhite();
	this.instance.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(0,-150,1200,300), null);


(lib.HEAD2Della728x90svg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD2-Della-728x90.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAHQgCgCAAgFQAAgEACgDQADgCAEAAQAFAAACADQADACAAAEQAAAEgDADQgCADgFAAQgDAAgEgDg");
	this.shape.setTransform(225.875,8.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAhIgKgDIAAgOIALADIALACQAJAAAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgDIgSgJQgEgCgBgEQgCgDAAgGQAAgIAHgFQAHgFALAAQAMAAALAGIgFAMIgKgDQgDgCgFABQgHgBAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIALAFIALAGIAFAFQACAEAAAFQAAAJgHAGQgHAFgNAAIgMgBg");
	this.shape_1.setTransform(221.225,5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAlQgGgIgBgQQABgQAGgIQAGgJANAAQALAAAHAJIAAAAIgBgNIAAgVIASAAIAABaIgOAAIgDgIIgBAAQgHAJgLAAQgLAAgHgJgAgJgBQgDAFAAAJQAAAKADAEQAEAFAGAAQAFAAAFgEQACgEABgJIAAgCQAAgLgDgDQgEgFgHAAQgFAAgEAFg");
	this.shape_2.setTransform(214.2,4.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQACgFAFgEQAFgEAGABIAGAAIgBARIgFAAQgIgBgGAFQgDAEAAAHIAAAhg");
	this.shape_3.setTransform(208.225,5.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAtIAAhAIARAAIAABAgAgJgkQAAgJAJAAQAKAAAAAJQAAAEgDADQgCACgFAAQgJAAAAgJg");
	this.shape_4.setTransform(203.325,4.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAmIgBAAIgDAHIgOAAIAAhaIASAAIAAAiIAAAAQAGgKAMAAQALAAAHAKQAGAIABAPQgBARgGAIQgHAJgMAAQgLAAgGgIgAgJgCQgDADAAAJIAAACQAAALADAEQADAFAGAAQAGAAADgFQADgFAAgKQAAgKgDgDQgDgFgGAAQgFAAgEAEg");
	this.shape_5.setTransform(197.9,4.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAuIAAgOIAHABQAFAAADgDQADgDADgGIABgDIgahAIATAAIANAlQABAGAAAEIAAAAIADgKIAMglIATAAIgcBJQgEALgFAEQgHAFgKAAIgJgBg");
	this.shape_6.setTransform(187.375,7.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQACgFAFgEQAFgEAGABIAGAAIgBARIgFAAQgIgBgGAFQgDAEAAAHIAAAhg");
	this.shape_7.setTransform(181.575,5.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAeQgHgEgEgIQgEgIAAgKQAAgPAJgJQAIgJAOAAQAKAAAHAEQAHAFAEAHQAEAGAAALQAAAQgJAJQgIAJgPAAQgIAAgIgEgAgJgOQgEAGAAAIIABAAQAAAKADAFQADAEAGAAQAHAAAEgEQADgFAAgKQAAgJgEgFQgDgEgHAAQgGAAgDAEg");
	this.shape_8.setTransform(174.775,5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAjQgFgFAAgLIAAgfIgJAAIAAgIIAKgGIAFgNIALAAIAAAOIASAAIAAANIgSAAIAAAfQAAADACACQACACAEAAIAAAAIALgCIAAANQgGADgKAAQgLAAgEgFg");
	this.shape_9.setTransform(168.375,5.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgJQAAgLAHgEQAGgFAPgBIALAAIAAgDQAAgKgKAAQgHAAgKAFIgGgMQAMgGAMAAQANAAAHAGQAHAFAAAMIAAArIgMAAIAAAAIgEgJIAAAAQgFAGgFACQgDACgIAAQgKAAgFgGgAAFADQgHAAgEADQgEACAAAGQAAAHAJAAQAFAAAEgDQAEgEAAgGIAAgGg");
	this.shape_10.setTransform(162.025,5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQACgEAFgFQAFgEAGABIAGAAIgBARIgFAAQgIgBgGAFQgDAEAAAHIAAAhg");
	this.shape_11.setTransform(156.225,5.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZArQgHgFAAgIQAAgGAEgEQAEgEAGgCIgEgEQgDgCAAgDQAAgEADgCIAGgFQgGgCgCgFQgDgEAAgHQAAgLAHgGQAHgGANAAIAKABIAXAAIAAABIAAAJIgKACQADAFAAAFQAAALgIAGQgIAFgLAAIgEAAIgCAAQgDACAAACQAAAEAKAAIAKAAQALAAAFAEQAGAFAAAJQAAALgJAHQgKAGgRAAQgOAAgHgFgAgNAWQgEACAAAEQAAAEAEACQADACAHAAQAIAAAGgCQAFgCAAgFQAAgEgDgCIgSgBQgGAAgCACgAgKgYQAAAFACAEQADADAFAAQAEAAACgDQACgEAAgFQAAgMgIAAQgKAAAAAMg");
	this.shape_12.setTransform(149.725,7.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAtIAAhAIARAAIAABAgAgJgkQAAgJAJAAQAKAAAAAJQAAAEgDADQgDACgEAAQgJAAAAgJg");
	this.shape_13.setTransform(144.575,4.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgAhIAAglQAAgGgCgEQgCgEgGAAQgGAAgEAFQgDAFAAAJIAAAgIgRAAIAAglQAAgHgCgDQgCgEgGAAQgGAAgEAFQgDAGAAAKIAAAeIgSAAIAAhAIAOAAIADAJIABAAQACgFAFgDQAFgDAHABQANgBAFALIACAAQADgFAFgDQAGgDAFABQALAAAGAFQAGAFAAANIAAAqg");
	this.shape_14.setTransform(136.825,5.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQACgEAFgFQAFgEAGABIAGAAIgBARIgFAAQgIgBgGAFQgDAEAAAHIAAAhg");
	this.shape_15.setTransform(125.425,5.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQAeQgHgEgEgIQgEgHAAgLQAAgQAIgIQAJgJAOAAQAJAAAIAEQAHAFAEAHQAEAIAAAJQAAAQgJAJQgIAJgPAAQgJAAgHgEgAgKgOQgDAFAAAJQAAAKAEAFQADAEAGAAQAHAAADgEQADgFAAgKQAAgJgDgFQgDgEgHAAQgHAAgDAEg");
	this.shape_16.setTransform(118.675,5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAuIAAgzIgKAAIAAgJIAKgFIAAgEQAAgMAFgFQAHgFAKAAQAJAAAIADIgFANIgKgCQgEAAgCACQgBADAAAEIAAADIAPAAIAAAOIgPAAIAAAzg");
	this.shape_17.setTransform(113.025,4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAuIAAgOIAHABQAFAAADgDQADgDADgGIABgDIgahAIATAAIANAlQABAGAAAEIAAAAIADgKIAMglIATAAIgcBJQgEALgFAEQgHAFgKAAIgJgBg");
	this.shape_18.setTransform(103.775,7.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQACgFAFgEQAFgEAGABIAGAAIgBARIgFAAQgJgBgFAFQgEAEAAAHIAAAhg");
	this.shape_19.setTransform(97.975,5.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgJQAAgLAHgEQAGgFAPgBIALAAIAAgDQAAgKgKAAQgHAAgKAFIgGgMQAMgGAMAAQANAAAHAGQAHAFAAAMIAAArIgMAAIAAAAIgEgJIAAAAQgFAGgFACQgDACgIAAQgKAAgFgGgAAFADQgHAAgEADQgEACAAAGQAAAHAJAAQAFAAAEgDQAEgEAAgGIAAgGg");
	this.shape_20.setTransform(91.075,5.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAbQgGgGAAgMIAAgpIARAAIAAAlQABAHACAEQADADAFAAQAGAAAEgFQADgGABgKIAAgeIARAAIAABAIgOAAIgCgIIgBAAQgDAEgFADQgFACgGAAQgMAAgFgGg");
	this.shape_21.setTransform(83.7,5.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIAjQgFgFAAgLIAAgfIgJAAIAAgIIAKgGIAFgNIAKAAIAAAOIATAAIAAANIgTAAIAAAfQAAADADACQABACAEAAIAAAAIAMgCIAAANQgHADgKAAQgKAAgEgFg");
	this.shape_22.setTransform(77.125,5.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAEAiQgdAAAAgiQAAgQAIgIQAIgJAPAAQALAAAJAFIgFANIgIgDIgHgBQgNAAAAATQAAATANAAIAJgBQAEgBAFgDIAAAPQgFADgEABIgLABg");
	this.shape_23.setTransform(71.575,5.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMAhIAAglQAAgGgCgEQgCgEgGAAQgGAAgEAFQgDAGAAAKIAAAeIgSAAIAAhAIANAAIADAJIABAAQADgGAFgCQAFgDAGABQALAAAGAGQAGAGAAALIAAAqg");
	this.shape_24.setTransform(64.475,5.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgJQAAgLAHgEQAGgFAPgBIALAAIAAgDQAAgKgKAAQgHAAgKAFIgGgMQAMgGAMAAQANAAAHAGQAHAFAAAMIAAArIgMAAIAAAAIgEgJIAAAAQgEAGgFACQgEACgIAAQgKAAgFgGgAAFADQgHAAgEADQgEACAAAGQAAAHAJAAQAFAAAEgDQADgEAAgGIAAgGg");
	this.shape_25.setTransform(56.675,5.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAhIgJgDIAAgOIALADIAKACQAKAAgBgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgTgJQgEgCgBgEQgCgCAAgHQAAgIAHgFQAHgFALAAQAMAAALAGIgFAMIgKgDIgIgBQgHgBAAAFQAAABAAAAQAAABABAAQAAABAAAAQABABABAAIAJAFQAKAEACACIAFAFQACADAAAGQAAAJgHAGQgHAFgNAAIgMgBg");
	this.shape_26.setTransform(50.3,5.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgJQAAgLAHgEQAHgFAOgBIAMAAIAAgDQAAgKgLAAQgHAAgKAFIgGgMQAMgGAMAAQAOAAAGAGQAHAFAAAMIAAArIgMAAIAAAAIgDgJIgBAAQgEAFgFADQgEACgIAAQgJAAgGgGgAAFADQgHAAgEADQgEACAAAGQAAAHAJAAQAGAAADgDQAEgFAAgFIAAgGg");
	this.shape_27.setTransform(40.325,5.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAaQgJgKAAgQQAAgPAIgJQAIgJAOAAQANAAAIAIQAIAJAAANIAAAIIgpAAQAAAHAEAFQAFAEAGAAIALgCQAFAAAGgDIAAANQgGAEgEAAIgNABQgOAAgJgIgAgHgRQgDAEgBAGIAYAAQAAgGgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_28.setTransform(30.275,5.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQACgFAFgEQAEgEAHABIAGAAIgBARIgFAAQgJgBgEAFQgEADAAAIIAAAhg");
	this.shape_29.setTransform(24.325,5.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAOIAGgcIAPAAIAAABQgDANgHAOg");
	this.shape_30.setTransform(19.95,2.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAaQgJgKAAgQQAAgPAIgJQAJgJANAAQANAAAIAIQAIAIAAAOIAAAIIgpAAQAAAHAFAFQAEAEAGAAQAHAAAFgCIALgDIAAANIgKAEIgNABQgPAAgJgIgAgHgRQgDAEgBAGIAZAAQAAgGgEgEQgDgDgGAAQgFAAgDADg");
	this.shape_31.setTransform(15.125,5.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAQArIgQhAIgPBAIgUAAIgWhVIARAAIAQBEIABgKIAPg6IARAAIAOA5IACALIAPhEIASAAIgWBVg");
	this.shape_32.setTransform(5.8,4.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.9,12.1);


(lib.HEAD1Della728x90svg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD1-Della-728x90.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAIQgDgDAAgFQAAgEACgCQAEgDADAAQAFAAADADQACADAAADQAAAEgCAEQgDACgFAAQgEAAgCgCg");
	this.shape.setTransform(240.375,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAiIAAgmQAAgGgCgFQgDgDgFAAQgGAAgEAFQgDAFAAAKIAAAgIgSAAIAAhBIANAAIADAIIABAAQADgFAFgCQAFgCAGgBQALABAGAGQAGAGAAAMIAAAqg");
	this.shape_1.setTransform(234.775,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAuIAAhBIARAAIAABBgAgJgkQAAgJAJAAQAKAAgBAJQAAAFgCACQgCACgFAAQgJAAAAgJg");
	this.shape_2.setTransform(228.95,23.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAdQgFgGAAgKQAAgLAHgDQAHgFAOAAIAMgBIAAgDQAAgKgLAAQgHAAgKAFIgGgNQAMgFAMAAQAOAAAGAFQAHAHAAALIAAAqIgMAAIAAABIAAgBIAAAAIgEgIIAAAAQgEAFgFADQgEACgIAAQgJAAgGgFgAgGAFQgEAEAAAEQAAAIAJAAQAGAAADgEQAEgEAAgFIAAgFIgHAAQgHABgEABg");
	this.shape_3.setTransform(223.275,24.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAuIAAgnQAAgNgKAAQgHAAgDAFQgDAFAAALIAAAfIgSAAIAAhbIASAAIgBAjIABAAQAGgKAMAAQALAAAGAGQAGAGAAALIAAArg");
	this.shape_4.setTransform(215.975,23.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZABQAAgQAIgJQAJgJAOAAQALAAAJAEIgFAPIgIgEIgHgBQgNAAAAAUQAAATANAAQAFAAAEgCQAEAAAFgEIAAAPQgFADgEABIgLABQgdAAAAghg");
	this.shape_5.setTransform(208.975,24.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAvIAAgPIAHABQAFAAADgDQAEgDACgGIABgDIgahAIATAAIANAlIABALIAAAAQABgFACgGIAMglIATAAIgbBJQgFALgGAEQgGAFgKAAIgJAAg");
	this.shape_6.setTransform(199.3,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAuIAAhbIARAAIAABbg");
	this.shape_7.setTransform(194.05,23.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAvIAAhcIAPAAIACAIIABAAQAGgJAMAAQAMAAAGAIQAHAKAAAPQAAALgEAHQgDAHgFAEQgGAEgIAAQgKAAgHgJIgBAAIABAKIAAAagAgJgcQgDADAAAKIAAACQAAAKADAEQADAFAGAAQAMAAAAgUQAAgIgDgGQgDgFgGAAQgGAAgDAFg");
	this.shape_8.setTransform(188.625,26.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAvIAAhcIAPAAIACAIIABAAQAGgJAMAAQAMAAAGAIQAHAKAAAPQAAALgDAHQgFAIgEADQgGAEgIAAQgKAAgHgJIgBAAIABAKIAAAagAgJgcQgDADAAAKIAAACQAAAKADAEQADAFAGAAQAMAAAAgUQAAgIgDgGQgDgEgGgBIAAAAQgFABgEAEg");
	this.shape_9.setTransform(181.025,26.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAbQgGgGAAgMIAAgpIASAAIAAAlQAAAIACADQADADAFAAQAGAAAEgFQADgFAAgLIAAgeIASAAIAABAIgOAAIgCgIIgBAAQgDAEgFADQgEACgHAAQgLAAgGgGg");
	this.shape_10.setTransform(173.075,24.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAhIgKgCIAAgQIAMAFIALABQAJAAgBgGQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgHgEIgLgFQgEgCgBgEQgCgEAAgEQAAgKAHgEQAGgFAMAAQALAAAMAFIgFANIgKgEIgIgBQgHAAAAAFQAAABADADIAKAFQAHACAEAEIAFAFQACAEAAAEQAAALgHAFQgHAFgNAAIgMgBg");
	this.shape_11.setTransform(166.2,24.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAuQgLAAgHgJQgHgJAAgQQAAgOAHgKQAHgJAMAAQALAAAGAKIABAAIgBgNIAAgVIASAAIAABaIgOAAIgEgIIAAAAQgHAJgLAAgAgIgBQgEADAAALQAAAKAEAEQADAFAFAAQAHAAADgEQAEgFAAgIIAAgCQAAgLgDgDQgEgFgHAAQgFAAgDAFg");
	this.shape_12.setTransform(156.075,23.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAiIAAgmQAAgGgCgFQgDgDgFAAQgHAAgDAFQgEAFABAKIAAAgIgSAAIAAhBIANAAIADAIIABAAQADgFAFgCQAFgCAGgBQALABAHAGQAFAHAAALIAAAqg");
	this.shape_13.setTransform(148.55,24.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAdQgFgGAAgKQAAgLAHgDQAHgFAOAAIAMgBIAAgDQAAgKgLAAQgHAAgKAFIgGgNQAMgFAMAAQAOAAAGAFQAHAHAAALIAAAqIgMAAIAAABIgEgJIAAAAQgEAFgFADQgEACgIAAQgJAAgGgFgAgGAFQgEAEAAAEQAAAIAJAAQAGAAADgEQAEgEAAgFIAAgFIgHAAQgHABgEABg");
	this.shape_14.setTransform(140.725,24.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAhIgKgCIAAgQIALAFIAMABQAIAAAAgGQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgDIgHgEQgIgDgDgCQgEgDgBgDQgCgEAAgEQAAgKAHgEQAGgFAMAAQALAAAMAFIgFANIgJgEIgJgBQgHAAAAAFQAAABACADIALAFQAIADADADQACAAADAFQACAEAAAEQAAALgHAFQgHAFgNAAIgMgBg");
	this.shape_15.setTransform(131.275,24.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAvIAAhcIAPAAIACAIIABAAQAGgJAMAAQAMAAAGAIQAGAJABAQQAAALgDAHQgEAHgFAEQgFAEgJAAQgKAAgHgJIgBAAIABAKIAAAagAgJgcQgDADAAAKIAAACQAAAKADAEQAEAFAFAAQAMAAAAgUQAAgIgDgGQgDgFgGAAQgFAAgEAFg");
	this.shape_16.setTransform(124.65,26.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAuIAAhBIARAAIAABBgAgJgkQAAgJAJAAQAKAAAAAJQAAAEgDADQgCACgFAAQgJAAAAgJg");
	this.shape_17.setTransform(118.825,23.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMAuIAAgnQAAgNgKAAQgHAAgDAFQgDAFAAALIAAAfIgSAAIAAhbIASAAIgBAjIABAAQAGgKAMAAQALAAAGAGQAGAGAAALIAAArg");
	this.shape_18.setTransform(113.075,23.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAhIgKgCIAAgQIALAFIALABQAJAAAAgGQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgDIgHgEIgLgFQgEgCgBgEQgCgEAAgEQAAgKAHgEQAGgFAMAAQALAAAMAFIgFANIgKgEIgIgBQgHAAAAAFQAAABACADIALAFIALAGQACAAADAFQACAEAAAEQAAALgHAFQgHAFgNAAIgMgBg");
	this.shape_19.setTransform(106.175,24.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAiIAAgmQAAgGgCgFQgDgDgFAAQgHAAgDAFQgEAGAAAJIAAAgIgRAAIAAhBIANAAIADAIIABAAQADgFAFgCQAFgCAGgBQALABAGAGQAGAGAAAMIAAAqg");
	this.shape_20.setTransform(236.125,10.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAdQgFgGAAgKQAAgLAHgDQAGgFAPAAIAMgBIAAgDQAAgKgKAAQgIAAgKAFIgGgNQAMgFAMAAQAOAAAGAFQAHAGAAAMIAAAqIgMAAIgEgIIAAAAQgFAGgEACQgEACgIAAQgKAAgFgFgAgGAFQgEAEAAAEQAAAIAJAAQAFAAAEgEQADgEABgFIAAgFIgIAAQgGABgEABg");
	this.shape_21.setTransform(228.3,10.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMAuIAAgnQAAgNgKAAQgHAAgDAFQgDAFAAALIAAAfIgSAAIAAhbIASAAIgBAjIABAAQAGgKAMAAQALAAAGAGQAGAGAAALIAAArg");
	this.shape_22.setTransform(220.975,9.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAjQgFgFAAgLIAAgfIgJAAIAAgIIAKgGIAFgNIALAAIAAAOIASAAIAAANIgSAAIAAAfQAAACACADQACACAEAAIAAAAQAEAAAHgCIAAANQgHADgJAAQgKAAgFgFg");
	this.shape_23.setTransform(214.325,10.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAZQgIgJAAgPQAAgRAIgIQAJgJANAAQAOAAAIAIQAHAJAAANIAAAHIgpAAQAAAIAFAEQAEAFAGAAQAHAAAEgBQAEgBAHgEIAAAPQgFADgFAAIgMABQgPAAgKgJgAgHgQQgDAEgBAGIAZAAQgBgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_24.setTransform(205.15,10.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAiIAAhBIANAAIADALIABAAQADgFAEgEQAGgDAFgBIAAAAIAHABIgCARIgFgBQgJABgFAEQgDADAAAIIAAAig");
	this.shape_25.setTransform(199.2,10.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQAeQgGgDgFgJQgEgGAAgMQAAgPAJgJQAIgJAOAAQAKAAAHAEQAHAEAEAIQAEAGAAALQAAAPgJAKQgIAJgPAAQgIAAgIgEgAgJgNQgEADAAAKQAAAJAEAGQADAFAGAAQAHAAADgFQADgFAAgKQAAgJgDgEQgDgFgHgBQgGABgDAFg");
	this.shape_26.setTransform(192.425,10.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAgAiIAAgmQAAgGgDgFQgCgDgFAAQgHAAgDAEQgDAGAAAIIAAAiIgRAAIAAgmQAAgGgCgFQgCgDgGAAQgGAAgEAFQgDAFAAAKIAAAgIgSAAIAAhBIAOAAIACAIIABAAQADgEAFgDQAGgCAFgBQAOABAFAJIACAAQADgEAFgDQAGgCAFgBQAMAAAFAHQAGAFAAANIAAAqg");
	this.shape_27.setTransform(182.825,10.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAZQgJgIAAgQQAAgQAIgJQAIgJAOAAQAOAAAHAIQAIAJAAANIAAAHIgpAAQABAIADAEQAFAFAGAAIALgBQAGgBAFgEIAAAPQgGADgEAAIgNABQgOAAgJgJgAgHgQQgDACgBAIIAYAAQAAgHgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_28.setTransform(170.275,10.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAiIAAhBIANAAIADALIABAAQADgFAEgEQAGgDAFgBIAGABIgBARIgFgBQgJABgEAEQgEADAAAIIAAAig");
	this.shape_29.setTransform(164.325,10.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAPIAGgdIAPAAIAAABIAAABQgDAMgHAPg");
	this.shape_30.setTransform(159.95,7.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAZQgJgIAAgQQAAgQAIgJQAJgJANAAQAOAAAHAIQAIAIAAAOIAAAHIgpAAQAAAIAFAEQAEAFAGAAQAHAAAFgBQAEgBAHgEIAAAPIgKADIgNABQgPAAgJgJgAgHgQQgDACgBAIIAZAAQAAgHgEgDQgDgEgGAAQgFAAgDAEg");
	this.shape_31.setTransform(155.125,10.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAQArIgQhAIgPBAIgUAAIgWhVIARAAIAQBEIABgKIAPg6IARAAIAOA5IACALIAPhEIASAAIgWBVg");
	this.shape_32.setTransform(145.8,9.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.7,5,137.7,26);


(lib.HEADbkgdgreensvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD-bkgd-green.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("AAKAAIgTAA");
	this.shape.setTransform(201.85,117.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJsAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAIcAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAHMAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAF8AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAEsAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgADcAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgACMAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAA8AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAgTAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAnAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAhjAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAizAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAkDAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAlTAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAmjAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAnzAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgApDAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAqTAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_1.setTransform(273.8,117.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("AAKAAIgTAA");
	this.shape_2.setTransform(344.85,117.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C756").s().p("Ai0DAIgDgEQitjTj8hbQi6hDi0AKIgBgUQC8gLC7BBQECBbCtDZIR5ACIAAAVg");
	this.shape_3.setTransform(97.575,98.1959);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#698A48").s().p("A1uFSQijg4ivALIAAubMA2BAAAIAATrMgqcAABQiojTjrhRg");
	this.shape_4.setTransform(172.925,63.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,346.9,126.1);


(lib.CTAtypesvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CTA type.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8C652").s().p("AADAgQgOAAgIgIQgIgJAAgOQgBgOAJgJQAHgJANAAQAMAAAIAIQAHAHAAANIAAAHIgmAAQAAAHAEAEQADAEAHAAIALgBQAFgBAFgDIAAAOQgEACgFABIgNABgAgHgPQgCACgBAHIAWAAQAAgGgDgDQgDgEgFAAQgFAAgDAEg");
	this.shape.setTransform(58.1,4.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8C652").s().p("AgTAfIAAg8IANAAIADAKIABAAQABgDAFgFQAEgDAHAAIAFAAIgBAQIgFgBQgIAAgFAFQgDAEAAAGIAAAfg");
	this.shape_1.setTransform(52.8,4.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8C652").s().p("AgPAcQgHgDgEgIQgDgIAAgJQAAgOAIgIQAIgJANAAQAIAAAIAEQAGAEAEAHQAEAHAAAJIgBAAQAAAPgHAIQgIAJgOAAQgIAAgHgEgAgJgNQgDAFAAAIQAAAJADAFQAEAFAFAAQAGAAAEgFQACgFAAgJQAAgHgCgGQgEgEgGAAQgGAAgDAEg");
	this.shape_2.setTransform(46.75,4.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8C652").s().p("AAeAfIAAgjQAAgGgDgEQgCgDgEAAQgHAAgCAFQgEAEAAAJIAAAeIgQAAIAAgjQAAgGgCgEQgDgDgEAAQgGAAgDAFQgDAFAAAJIAAAdIgRAAIAAg8IANAAIADAIIABAAQACgFAFgCQAFgCAFAAQANAAAFAJIABAAQADgEAFgDQAFgCAFAAQAKAAAHAFQAEAFAAAMIAAAng");
	this.shape_3.setTransform(38.05,4.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D8C652").s().p("AAMAfIAAgjQAAgHgDgDQgCgDgFAAQgGAAgEAFQgDAEAAAKIAAAdIgRAAIAAg8IAOAAIACAIIABAAQACgEAGgDQAEgCAFAAQAMAAAFAGQAGAGAAAKIAAAng");
	this.shape_4.setTransform(26.45,4.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8C652").s().p("AgTAfIAAg8IANAAIACAKIABAAQACgEAFgEQAFgDAFAAIAGAAIgBAQIgFgBQgIAAgEAFQgEAEAAAGIAAAfg");
	this.shape_5.setTransform(20.8,4.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D8C652").s().p("AgVAbQgFgFAAgJQAAgLAGgDQAIgFAMAAIALAAIAAgDQAAgKgKAAQgGAAgKAFIgGgLQAKgFANgBQAMAAAHAGQAGAFAAALIAAAoIgLAAIAAAAIgEgJIAAAAQgEAGgFACQgDABgHAAQgJAAgFgEgAAEADQgGgBgEADQgDACAAAGQAAAGAIABQAFAAADgEQAEgDAAgGIAAgFg");
	this.shape_6.setTransform(14.625,4.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D8C652").s().p("AgTAYQgIgIAAgPQAAgPAHgIQAJgJAMAAQANAAAHAIQAHAIAAAMIAAAHIgmAAQAAAHAEAEQADAEAHAAIAKgBIALgEIAAAOQgFACgFABIgMABQgOAAgIgIgAgHgPQgCACgBAHIAWAAQAAgGgDgDQgDgEgFAAQgFAAgDAEg");
	this.shape_7.setTransform(8.375,4.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8C652").s().p("AgYAoIAAhPIARAAIAABBIAgAAIAAAOg");
	this.shape_8.setTransform(2.475,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,8.1);


(lib.CTAarrow = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D8C652").ss(2,1,1).p("AARgUIghAp");
	this.shape.setTransform(7.15,2.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D8C652").ss(2,1,1).p("AARAWIghgr");
	this.shape_1.setTransform(7.15,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D8C652").ss(2,1,1).p("AhRAAICjAA");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTAarrow, new cjs.Rectangle(-9.2,-5.5,19,10.8), null);


(lib.Campaigntypesvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// COMMUNITY.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgEADgCQABgCAEAAQAEAAADACQACACAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(159.55,8.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAwIAAgLIAIAAQAKAAAEgMIACgGIgbhCIAAgBIAQAAIAOAnQACAFABAJIAAAAIACgHIAQgtIAQAAIgdBLQgHAVgSAAIgKgBg");
	this.shape_1.setTransform(154.5,7.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAUIAAgjIgKAAIAAgGIAKgFIAFgPIAIAAIAAAPIATAAIAAALIgTAAIAAAjQAAAFADACQACADAEAAIAAAAIALgCIAAALIgGACIgIABQgTAAAAgWg");
	this.shape_2.setTransform(148.625,5.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAvIAAhDIANAAIAABDgAgFggQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(144.5,4.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAiIAAgoQAAgIgDgEQgEgEgGAAQgIAAgEAGQgEAEAAANIAAAhIgPAAIAAhCIALAAIACAJIABAAQADgFAGgDQAGgCAFAAQAZAAAAAYIAAArg");
	this.shape_4.setTransform(138.825,6.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAdQgGgHAAgMIAAgrIAPAAIAAAoQAAAJADADQADAEAHAAQAIAAAEgGQAEgEAAgNIAAghIAPAAIAABCIgMAAIgCgJIAAAAQgDAFgGADQgGADgFgBQgNAAgGgFg");
	this.shape_5.setTransform(130.825,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjAiIAAgoQAAgIgDgEQgDgEgGAAQgIAAgEAGQgEAFAAALIAAAiIgNAAIAAgoQAAgIgDgEQgDgDgGAAQgIAAgFAFQgDAFAAAMIAAAhIgPAAIAAhCIALAAIACAJIABAAQADgFAFgDQAGgCAGAAQAPAAAFAKIABAAQAEgFAEgCQAGgDAGAAQAMAAAGAGQAGAGAAAMIAAArg");
	this.shape_6.setTransform(120.925,6.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjAiIAAgoQAAgIgDgEQgDgEgGAAQgIAAgEAGQgEAFAAALIAAAiIgNAAIAAgoQAAgIgDgEQgDgDgGAAQgJAAgEAFQgEAGAAALIAAAhIgOAAIAAhCIALAAIACAJIABAAQACgEAGgEQAGgCAGAAQAPAAAFAKIABAAQAEgFAEgCQAGgDAGAAQAMAAAGAGQAGAGAAAMIAAArg");
	this.shape_7.setTransform(108.975,6.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAeQgHgEgEgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAOAAAKAJQAIAKAAAPQAAAQgIAKQgJAJgPAAQgIAAgIgFgAgMgQQgEAGAAAKQAAAXAQAAQARAAAAgXQAAgWgRgBQgIAAgEAHg");
	this.shape_8.setTransform(99.15,6.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAaQgIgJAAgQQAAgQAJgKQAIgJAPAAQALAAAIAEIgEAMQgJgEgGAAQgRAAAAAXQAAAKAFAHQAEAFAHAAQAKAAAIgEIAAAMQgEACgEABIgKABQgOAAgJgJg");
	this.shape_9.setTransform(92.325,6.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAiIAAhCIAMAAIACAMIABAAQACgGAFgEQAFgDAHAAIAHAAIgBAOIgHgBQgJAAgEAGQgFAFAAAJIAAAig");
	this.shape_10.setTransform(83.6,6.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAdQgGgHAAgMIAAgrIAPAAIAAAoQAAAJADADQAEAEAGAAQAIAAAEgGQAEgFAAgMIAAghIAPAAIAABCIgMAAIgCgJIAAAAQgDAFgGADQgGADgFgBQgNAAgGgFg");
	this.shape_11.setTransform(76.525,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAeQgJgEgDgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAQAAAHAJQAJAKAAAPQAAARgJAJQgIAJgPAAQgJAAgGgFgAgMgQQgEAGAAAKQAAAXAQAAQASAAgBgXQAAgWgRgBQgHAAgFAHg");
	this.shape_12.setTransform(68.75,6.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAtQgHgGAAgIQAAgHAEgEQAEgEAHgCQgDgBgCgDQgCgDAAgCIACgGIAHgFQgGgCgDgFQgDgGAAgGQAAgLAHgGQAHgGANAAIAFAAIAEABIAYAAIAAAIIgMACQACABABAEIABAHQAAALgHAFQgIAGgLAAIgGAAQgFADAAACQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACABAGAAIAKAAQAMAAAFAFQAGAFAAAJQAAALgJAGQgKAGgQAAQgOAAgIgEgAgPAWQgEADAAAFQAAAFAEACQAEADAIAAQALAAAFgEQAGgDAAgGQAAgEgDgCQgEgCgIAAIgKAAQgGAAgDADgAgKgkQgDAEAAAHQAAAGADAEQAEADAGAAQALAAAAgNQAAgHgDgDQgDgEgFAAQgFAAgFADg");
	this.shape_13.setTransform(58.175,7.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPAiIAAgoQAAgIgDgEQgDgEgHAAQgIAAgEAGQgFAFAAAMIAAAhIgOAAIAAhCIALAAIACAJIABAAQADgFAGgDQAGgCAFAAQAZAAAAAYIAAArg");
	this.shape_14.setTransform(50.825,6.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGAvIAAhDIAOAAIAABDgAgFggQgCgDAAgDQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(45.05,4.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAiIAAhCIAMAAIACAMIAAAAQADgGAFgEQAFgDAGAAIAIAAIgCAOIgHgBQgIAAgEAGQgFAFAAAJIAAAig");
	this.shape_16.setTransform(41.05,6.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAeQgJgEgDgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAQAAAIAJQAIAKAAAPQAAARgIAJQgJAJgPAAQgJAAgGgFgAgMgQQgEAGAAAKQAAAXAQAAQARAAAAgXQAAgWgRgBQgIAAgEAHg");
	this.shape_17.setTransform(34.1,6.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPAwIAAgqQAAgGgDgEQgEgFgGAAQgIABgEAFQgEAEAAANIAAAiIgPAAIAAhfIAPAAIgBAlIABAAQADgFAFgDQAGgCAFAAQAZAAAAAYIAAAsg");
	this.shape_18.setTransform(26.375,4.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAaQgIgIAAgRQAAgQAJgKQAIgJAPAAQALAAAIAEIgEAMQgJgEgGAAQgRAAAAAXQAAAKAEAHQAFAFAHAAQAKAAAIgEIAAAMQgEACgEABIgKABQgOAAgJgJg");
	this.shape_19.setTransform(19.375,6.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAiIAAgoQAAgIgDgEQgDgEgHAAQgIAAgEAGQgEAFAAAMIAAAhIgPAAIAAhCIAMAAIACAJIAAAAQADgFAGgDQAGgCAGAAQAYAAAAAYIAAArg");
	this.shape_20.setTransform(12.225,6.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaAtIgJgZIghAAIgJAZIgPAAIAhhZIAPAAIAhBZgAgMAIIAZAAIgLgfIgCgIg");
	this.shape_21.setTransform(4.125,5.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.5,12.5);


(lib.ALERT = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AlertStripe2x();
	this.instance.setTransform(-358.75,-21,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ALERT, new cjs.Rectangle(-358.7,-21,717.5,21), null);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// svg
	this.instance = new lib.HEAD2Della728x90svg("synched",0);
	this.instance.setTransform(-155.7,13.2,1,1,0,0,0,71.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-226.9,0,226.9,12.1), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// svg
	this.instance = new lib.HEAD1Della728x90svg("synched",0);
	this.instance.setTransform(-175.6,13.2,1,1,0,0,0,65.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-137.7,5,137.7,26), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// svg
	this.instance = new lib.CTAtypesvg("synched",0);
	this.instance.setTransform(-0.1,-2.65,1.15,1.15,0,0,0,27.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-31.9,-7.5,70.1,9.3), null);


(lib.CAMPAIGN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// svg
	this.instance = new lib.Campaigntypesvg("synched",0);
	this.instance.setTransform(80.2,-3.3,1,1,0,0,0,80.2,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CAMPAIGN, new cjs.Rectangle(0,-9.5,160.5,12.5), null);


// stage content:
(lib.PoVCommunityDisplayDella320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [205];
	// timeline functions:
	this.frame_205 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(205).call(this.frame_205).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(206));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(228.35,29.1,1.032,1.032,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(35).to({scaleX:1.197,scaleY:1.197},2).to({scaleX:1.032,scaleY:1.032},6).wait(8));

	// CTA arrow
	this.instance_1 = new lib.CTAarrow();
	this.instance_1.setTransform(282.7,26.8,1.032,1.032);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(155).to({_off:false},0).wait(51));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(760.2,222.1,1,1,0,0,0,446.2,208.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadOut).to({_off:true},39).wait(147));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(391.3,62.15,1,1,0,0,0,77.3,29.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadOut).wait(46).to({alpha:0},13).to({_off:true},1).wait(68));

	// CAMPAIGN
	this.instance_4 = new lib.CAMPAIGN();
	this.instance_4.setTransform(128.65,61.05,0.93,0.93,0,0,0,105,23.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143).to({_off:false},0).to({alpha:1},16,cjs.Ease.quintOut).wait(47));

	// ALERT
	this.instance_5 = new lib.ALERT();
	this.instance_5.setTransform(309.45,-360,1,1,89.9948,0,0,0,-10.5);
	this.instance_5.alpha = 0.3008;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(143).to({_off:false},0).to({y:-178},43,cjs.Ease.quintOut).wait(20));

	// FOOTER-bkgd
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8C652").s().p("AumHCIAAuDIdNAAIAAODg");
	this.shape_1.setTransform(634.5,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(206));

	// LOGO
	this.instance_6 = new lib.LOGO();
	this.instance_6.setTransform(5.05,14.85,0.15,0.15,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(206));

	// HEAD-bkgd
	this.instance_7 = new lib.HEADbkgdgreensvg("synched",0);
	this.instance_7.setTransform(89.9,26.1,1,1,0,0,0,172.9,63.1);

	this.instance_8 = new lib.HEADbkgdgreensvg("synched",0);
	this.instance_8.setTransform(187.05,26.1,1,1,0,0,0,172.9,63.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(206));

	// PIC-bkgd
	this.instance_9 = new lib.Dellabkgd();
	this.instance_9.setTransform(-198,-12,0.5,0.5);

	this.instance_10 = new lib.Dellabkgd();
	this.instance_10.setTransform(360,-49,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(206));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-693.7,766,931.7);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 320,
	height: 50,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/PoV_Community_Display_Della_320x50_atlas_P_1.png", id:"PoV_Community_Display_Della_320x50_atlas_P_1"},
		{src:"images/PoV_Community_Display_Della_320x50_atlas_NP_1.jpg", id:"PoV_Community_Display_Della_320x50_atlas_NP_1"}
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
an.compositions['0957C5EC3B874C629166840920B09671'] = {
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