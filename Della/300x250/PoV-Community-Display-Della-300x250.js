(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"PoV_Community_Display_Della_300x250_atlas_P_1", frames: [[0,502,1435,42],[1202,0,600,500],[0,0,1200,300]]},
		{name:"PoV_Community_Display_Della_300x250_atlas_NP_1", frames: [[0,0,600,500]]}
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
	this.initialize(ss["PoV_Community_Display_Della_300x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Dellabkgd = function() {
	this.initialize(ss["PoV_Community_Display_Della_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Dellaiso = function() {
	this.initialize(ss["PoV_Community_Display_Della_300x250_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PoVHorizWhite = function() {
	this.initialize(ss["PoV_Community_Display_Della_300x250_atlas_P_1"]);
	this.gotoAndStop(2);
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


(lib.HEAD2Dellasvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD2-Della.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAIQgDgEAAgEQAAgEACgDQAEgCADAAQAEAAAEACQACAEAAADQAAAFgCACQgDADgFAAQgEAAgCgCg");
	this.shape.setTransform(141.425,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAhQgEAAgFgDIAAgPQAGAEAFAAQAGACAGAAQAIAAAAgGQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAgBAAQgBgBAAAAIgJgEIgKgFQgDgBgDgFQgBgDAAgGQAAgIAHgGQAHgEALAAQAMAAALAFIgFANIgJgEIgJgBQgIAAAAAFQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAIALAGIALAFIAFAGQACAEAAAEIAAAAQgBALgGAFQgHAFgOAAIgMgBg");
	this.shape_1.setTransform(137.1,20.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAlQgHgIAAgRQAAgPAHgJQAHgJAMAAQALAAAGAKIABAAIgBgNIAAgVIASAAIAABaIgOAAIgEgIIAAAAQgGAJgMAAQgLAAgHgJgAgIgBQgDAEAAAKQAAAJADAFQAEAFAEAAIAAAAQAHAAADgEQADgEABgKIAAgBQAAgKgDgFQgEgEgHAAQgFAAgDAFg");
	this.shape_2.setTransform(130.325,19.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAiIAAhCIANAAIADAMIABAAQADgGAEgDQAFgEAGAAIAGABIgBAQIgFAAQgIAAgGAFQgDAEAAAHIAAAig");
	this.shape_3.setTransform(124.625,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAuIAAhBIARAAIAABBgAgJgkQAAgJAJAAQAKAAAAAJQAAAEgDACQgCADgFAAQgJAAAAgJg");
	this.shape_4.setTransform(120.025,19.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAmIgBAAIgDAHIgOAAIAAhaIASAAIgBAiIABAAQAGgKAMAAIAAAAQAMABAGAIQAHALAAANQAAAQgHAKQgHAJgMAAQgKAAgHgJgAgJgCQgDADAAAKIAAABQAAALADAFQADAEAGAAQAGAAADgFQADgFAAgKQAAgJgDgFQgDgEgGAAQgGAAgDAEg");
	this.shape_5.setTransform(114.875,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMAuIgSgbIgIAGIAAAVIgSAAIAAhbIASAAIAAA3IAAAAIAIgKIARgTIAUAAIgaAbIAbAmg");
	this.shape_6.setTransform(105.05,19.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAhQgFAAgEgDIAAgPQAFAEAGAAQAGACAFAAQAJAAAAgGQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgCgEgBIgIgEIgLgFQgCgBgCgFQgCgDAAgGQAAgIAGgGQAIgEALAAQANAAAKAFIgGANIgJgEIgJgBQgGAAgBAFQAAACAEABIAKAGIALAFIAFAGQACAEAAAEIAAAAQAAALgIAFQgGAFgNAAIgNgBg");
	this.shape_7.setTransform(98.25,20.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAuIAAhBIARAAIAABBgAgJgkIAAAAQAAgJAJAAQAKAAAAAJQAAAEgCACQgDADgFAAQgJAAAAgJg");
	this.shape_8.setTransform(93.65,19.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAiIAAhCIANAAIADAMIABAAQADgGAEgDQAFgEAGAAIAGABIgBAQIgFAAQgIAAgGAFQgDAEAAAHIAAAig");
	this.shape_9.setTransform(89.725,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAHIAAgOIAfAAIAAAOg");
	this.shape_10.setTransform(85,20.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAjQgEgGAAgKIAAgfIgJAAIAAgIIAKgGIAFgNIALAAIAAANIASAAIAAAOIgSAAIAAAfQAAADACACQABACAEAAIAAAAQAFAAAHgCIAAAOQgGADgKAAQgKgBgGgFg");
	this.shape_11.setTransform(80.7,19.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAdQgFgGgBgKQABgLAHgDQAHgEAOgBIAMgBIAAgDQgBgKgJAAQgIAAgKAFIgGgNQAMgFAMAAQANAAAIAFQAGAHABALIAAArIgNAAIgDgJIgBAAQgEAFgFADQgEACgIAAQgKAAgFgFgAgGAFQgEADAAAFQAAAIAJAAQAEAAAFgDQAEgEAAgGIAAgFIgHAAQgJABgCABg");
	this.shape_12.setTransform(74.6,20.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAiIAAhCIAPAAIACAMIAAAAQADgGAFgDQAFgEAGAAIAHABIgCAQIgFAAQgJAAgEAFQgFAEAAAHIAAAig");
	this.shape_13.setTransform(66.25,20.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAeQgIgFgDgHQgEgIAAgKQAAgOAJgKQAIgJAOAAQAJAAAIAEQAHAEAEAIQAEAIAAAJQAAAPgJAKQgJAJgOAAQgIAAgIgEgAgKgOQgCAFAAAJQAAAKACAEQADAGAHAAQAHAAAEgGQADgEAAgKQgBgKgDgEQgDgEgHgBQgHAAgDAFg");
	this.shape_14.setTransform(59.75,20.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAuIAAg0IgKAAIAAgIIAKgFIAAgFQAAgLAGgFQAFgFALAAQALAAAGACIgFAOQgEgCgGAAQgEAAgBADQgCACAAADIAAAFIAQAAIAAAMIgQAAIAAA0g");
	this.shape_15.setTransform(54.375,19.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgAiIAAgmQAAgHgDgEQgCgDgFAAQgHAAgDAEQgDAFAAAJIAAAiIgRAAIAAgmQAAgHgCgEQgDgDgFAAQgHAAgDAFQgDAEAAALIAAAgIgSAAIAAhCIANAAIADAJIABAAQADgFAEgCQAFgDAHAAQAOAAAFAKIACAAQADgFAFgCQAEgDAHAAQAMAAAFAGQAGAGAAANIAAAqg");
	this.shape_16.setTransform(43.25,20.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAdQgGgGABgKQAAgLAHgDQAGgEAPgBIALgBIAAgDQAAgKgKAAQgHAAgLAFIgGgNQANgFAMAAQANAAAHAFQAIAHgBALIAAArIgMAAIgEgJIgBAAQgDAFgGADQgDACgIAAQgKAAgFgFgAgGAFQgEADAAAFQAAAIAJAAQAEAAAFgDQADgFAAgFIAAgFIgGAAQgIABgDABg");
	this.shape_17.setTransform(33.8,20.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAiIAAhCIANAAIADAMIABAAQADgHAEgCQAFgEAGAAIAGABIgBAQIgFAAQgJAAgFAFQgEAEAAAHIAAAig");
	this.shape_18.setTransform(28.275,20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZArQgHgFAAgIQAAgGAEgEQAEgEAHgCIgFgEQgCgCAAgEQAAgEACgBIAGgFQgFgCgDgFQgDgFAAgGQAAgLAHgGQAIgGAMAAIAKABIAXAAIAAAJIgKADQADAEAAAGQAAAKgIAGQgHAGgMAAIgDAAIgDAAQgDACAAABQAAAEAKAAIAKAAQALAAAGAFQAFAFAAAJQAAALgJAGQgKAHgRAAQgOAAgHgFgAgNAiQADACAHAAQAIAAAGgCQAGgDAAgEQAAgEgEgCQgCgBgIAAIgIAAQgFAAgDACQgDADAAADIgBAAQAAAEAEACgAgKgYQAAAFACADQADAEAFAAQAEAAACgEQACgCAAgGQAAgMgIAAQgKAAAAAMg");
	this.shape_19.setTransform(22.025,21.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAeQgHgEgEgIQgEgIAAgKQAAgOAIgKQAJgJAOAAQAJAAAIAEQAGAEAFAIQADAHAAAKIABAAQAAAPgIAKQgKAJgOAAQgIAAgIgEgAgJgOQgEAGAAAIIAAAAQABAKADAEQADAGAGAAQAHAAADgGQADgDAAgLQAAgIgDgGQgDgEgHgBQgHAAgCAFg");
	this.shape_20.setTransform(15.25,20.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAiIAAhCIANAAIADAMIABAAQADgGAEgDQAFgDAGgBIAGABIgBAQIgFAAQgIAAgGAFQgDAEAAAHIAAAig");
	this.shape_21.setTransform(9.425,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeAwIAAheIAPAAIADAJIAAAAQAHgKALAAQALAAAHAJQAGAIABARQAAALgEAGQgCAIgHAEQgFAEgIABIAAAAQgKgBgHgIIgBAAIABAKIAAAagAgJgcQgDAEAAAKIAAABQAAALADAEQAEAEAFAAQANAAAAgTQAAgJgEgGQgDgEgGAAQgGAAgDAEg");
	this.shape_22.setTransform(3.05,21.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZArQgHgFAAgIQAAgHAEgDQADgEAIgCIgGgDIgCgGQABgEACgCQABgCAFgCQgFgDgDgFQgDgEAAgHQAAgLAHgGQAHgGANAAIAGAAIAEABIAXAAIAAAJIgKAEQACADABAGQAAAKgIAHQgHAFgMAAIgEAAIgCAAQgDACAAACQAAADAKAAIAKAAQAKABAHAEQAFAGABAIQAAALgKAGQgKAHgRAAQgOAAgHgFgAgNAWQgDACgBAFQABADADACQAEACAGABQAIAAAGgDQAFgDABgFQAAgDgDgBQgEgCgHAAIgIAAQgEAAgEACgAgKgYQAAAFACAEQADADAFgBQAEABACgDQACgDABgGQAAgMgJAAQgKAAAAAMg");
	this.shape_23.setTransform(136.4,7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMAiIAAgmQAAgIgCgDQgDgEgFABQgHAAgDAEQgEAHAAAJIAAAfIgRAAIAAhBIANAAIADAJIABAAQADgFAFgCQAEgCAHgBQALAAAGAHQAGAFAAANIAAAqg");
	this.shape_24.setTransform(129.425,5.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIAuIAAhBIARAAIAABBgAgJgkIAAAAQAAgJAJAAQAKAAAAAJQAAAEgCACQgDADgFAAQgJAAAAgJg");
	this.shape_25.setTransform(123.9,4.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAjQgEgFAAgMIAAgeIgJAAIAAgIIAKgGIAFgNIALAAIAAANIASAAIAAAOIgSAAIAAAeQAAAEABADQADABAEAAQAFAAAGgCIAAANQgHAEgKAAQgJgBgGgFg");
	this.shape_26.setTransform(119.7,5.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAhIgJgDIAAgPIALAEIALACQAKAAAAgGQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgEgDIgIgEIgLgFIgGgGQgBgDAAgGQAAgJAHgEQAHgFALAAQAMAAALAFIgFANIgJgDQgEgCgFAAQgHAAAAAEQAAACACADIALAFIALAGQADABACAEQACAEAAAEIAAABQAAAJgHAGQgIAFgMAAg");
	this.shape_27.setTransform(114.5,5.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAZQgIgJAAgPQAAgRAIgIQAIgJAOAAQAOAAAHAIQAIAIAAAOIAAAHIgpAAQAAAIAEAEQAFAFAGAAIALgBIAMgFIAAAPIgLADIgNABQgPAAgJgJgAgHgRQgDADgBAIIAYAAQAAgIgDgDQgEgDgFgBQgEABgEADg");
	this.shape_28.setTransform(108.225,5.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMAiIAAgmQABgHgDgEQgDgEgFABQgHAAgDAEQgEAHAAAJIAAAfIgSAAIAAhBIAPAAIACAJIABAAQADgFAFgCQAEgCAHgBQAMAAAFAHQAHAFgBANIAAAqg");
	this.shape_29.setTransform(101,5.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAdQgFgGAAgKQAAgKAHgEQAIgGANABIALgBIAAgDQAAgKgKAAQgHAAgKAFIgGgNQAKgFAOAAQAOAAAGAFQAHAGAAAMIAAArIgMAAIgEgJIAAAAQgGAGgEACQgEACgHAAQgJAAgGgFgAgGAFQgEADAAAFQAAAIAJAAQAFAAAEgEQADgDAAgHIAAgEIgHAAQgGAAgEACg");
	this.shape_30.setTransform(90.675,5.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAeQgHgEgEgIQgEgGAAgMQAAgPAJgJQAIgJAOAAQAKAAAHAEQAHAEAEAIQAEAGAAALQAAAQgJAJQgIAJgPAAQgJAAgHgEgAgKgOQgDAGAAAIQAAAJAEAFQADAFAGABQAHgBADgFQADgEAAgKQAAgIgDgGQgDgFgHAAQgGAAgEAFg");
	this.shape_31.setTransform(80.975,5.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAjQgFgFAAgMIAAgeIgJAAIAAgIIAKgGIAFgNIALAAIAAANIASAAIAAAOIgSAAIAAAeQAAAFACACQACABAEAAQAFAAAGgCIAAANQgHAEgKAAQgKgBgEgFg");
	this.shape_32.setTransform(74.875,5.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAZQgIgIAAgQQAAgRAIgIQAIgJAOAAQAOAAAHAIQAIAIAAAOIAAAHIgpAAQAAAIAEAEQAEAFAHAAIALgBIALgFIAAAPIgKADIgNABQgPAAgJgJgAgHgRQgEAEAAAHIAYAAQAAgIgDgDQgEgDgFgBQgFABgDADg");
	this.shape_33.setTransform(66.275,5.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAgAiIAAgmQAAgHgDgEQgCgEgFABQgHgBgDAFQgDAGAAAIIAAAiIgRAAIAAgmQAAgHgCgEQgDgEgFABQgHAAgDAEQgDAGAAAKIAAAfIgSAAIAAhBIAOAAIACAJIABAAQAEgFADgCQAFgCAHgBQAOAAAFAKIACAAQADgFAFgCQAEgCAHgBQAMABAFAFQAGAGAAANIAAAqg");
	this.shape_34.setTransform(57.1,5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAeQgHgEgEgIQgEgIAAgKQAAgOAIgKQAJgJAOAAQAJAAAIAEQAGAEAFAIQAEAHAAAKIAAAAQAAAPgIAKQgKAJgOAAQgIAAgIgEgAgJgOQgEAFAAAJIABAAQAAAKADAEQACAFAHABQAHgBADgFQAEgDAAgLQAAgIgEgGQgDgFgHAAQgHAAgCAFg");
	this.shape_35.setTransform(47.75,5.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMAuIAAgnQAAgNgKAAQgGAAgEAFQgDAEAAAMIAAAfIgSAAIAAhbIASAAIgBAiIABAAQAGgJAMAAQALAAAGAGQAGAGAAALIAAArg");
	this.shape_36.setTransform(40.375,4.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUAZQgJgIAAgQQAAgQAIgJQAJgJANAAQAOAAAIAIQAHAIAAAOIAAAHIgpAAQABAJAEADQAEAFAGAAIAMgBIALgFIAAAPIgKADIgNABQgPAAgJgJgAgHgRQgDADgBAIIAZAAQAAgHgEgEQgEgDgFgBQgEABgEADg");
	this.shape_37.setTransform(30.325,5.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIAOAAIACALIABAAQADgGAEgDQAFgDAGAAIAHAAIgCARIgFgBQgJAAgEAFQgFAFAAAGIAAAhg");
	this.shape_38.setTransform(24.65,5.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAPIAGgdIAQAAIABABQgDALgIARg");
	this.shape_39.setTransform(20.6,2.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAZQgIgIgBgQQAAgQAJgJQAJgJANAAQAOAAAHAIQAJAIgBAOIAAAHIgpAAQAAAIAFAEQAEAFAGAAIAMgBIALgFIAAAPIgKADIgOABQgOAAgKgJgAgHgRQgDADgBAIIAYAAQABgHgEgEQgDgDgGgBQgEABgEADg");
	this.shape_40.setTransform(16.05,5.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAQArIgQhAIgOA/IgVAAIgWhUIASAAIAPBEIACgKQAAgGACgFIANgvIAQAAIAQBEIAPhEIASAAIgWBVg");
	this.shape_41.setTransform(6.925,4.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.5,26.5);


(lib.HEAD1Dellasvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD1-Della.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgEACgDQAEgCADAAQAEAAAEACQACAEAAADQAAAEgCADQgDADgFAAQgEAAgCgDg");
	this.shape.setTransform(130.525,22.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAhIAAglQAAgHgCgDQgDgFgFAAQgGABgEAFQgEAFAAALIAAAeIgRAAIAAhAIANAAIADAIIABAAQADgFAFgCQAEgDAHABQALAAAGAFQAGAHAAALIAAAqg");
	this.shape_1.setTransform(125.175,20.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAuIAAhBIARAAIAABBgAgJgkQAAgJAJAAQAKAAAAAJQAAAEgDACQgCADgFAAQgJAAAAgJg");
	this.shape_2.setTransform(119.675,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAcQgFgFgBgKQAAgKAIgEQAHgFAOgBIAMAAIAAgDQAAgKgLAAQgHAAgKAFIgGgMQAKgGAOAAQANAAAHAGQAIAFAAAMIAAArIgOAAIgDgJIAAAAQgEAGgFACQgEACgIAAQgKAAgFgGgAgGAGQgEACAAAGQAAAHAIAAQAFAAAEgEQAFgDAAgGIAAgGIgHAAQgJACgCACg");
	this.shape_3.setTransform(114.3,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAuIAAgnQAAgNgKAAQgHAAgDAFQgEAFAAALIAAAfIgRAAIAAhbIARAAIAAAiIABAAQAGgJAMAAQALAAAGAGQAGAHAAAKIAAArg");
	this.shape_4.setTransform(107.225,19.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAAQAAgQAIgJQAIgIAPAAQALAAAJAFIgFANIgIgDIgHAAQgNAAAAASQAAAUANgBQAFABAEgCQAEgBAFgDIAAAPIgJAEIgLABQgdAAAAgig");
	this.shape_5.setTransform(100.525,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAuIAAgOIAHABQAFAAADgDQAEgDACgGIABgDIgahAIATAAIANAlIABAKIACgKIANglIATAAIgbBJQgEAJgGAGQgHAFgKAAIgJgBg");
	this.shape_6.setTransform(91.4,21.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAuIAAhbIARAAIAABbg");
	this.shape_7.setTransform(86.425,19.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAwIAAhdIAPAAIACAIIABAAQAGgKAMAAQAMAAAGAJQAHAJAAAQQAAALgDAHQgDAHgGAEQgFAFgJgBQgKABgHgJIgBAAIABAJIAAAbgAgJgcQgDAGAAAHIAAACQAAALADADQAEAFAFAAQANAAAAgTQAAgJgDgFQgEgFgGgBQgFAAgEAFg");
	this.shape_8.setTransform(81.275,21.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAwIAAhdIAPAAIACAIIABAAQAGgKAMAAQALAAAHAJQAHAKAAAPQAAALgEAHQgDAHgFAEQgGAFgIgBQgKABgHgJIgBAAIABAJIAAAbgAgJgcQgDAEAAAJIAAACQAAALADADQADAFAGAAQAMAAAAgTQAAgJgDgFQgDgFgGgBQgGAAgDAFg");
	this.shape_9.setTransform(73.975,21.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAcQgGgHAAgLIAAgqIASAAIAAAlQAAAIACACQADAFAFAAQAGAAAEgGQADgEAAgMIAAgeIASAAIAABAIgNAAIgDgIIgBAAQgCAEgGADQgFACgGAAQgLAAgGgFg");
	this.shape_10.setTransform(66.275,20.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAhQgEAAgFgDIAAgOIALADQAFACAHAAQAIAAAAgGIgBgDIgFgDIgHgEQgIgDgDgCIgGgGQgBgDAAgGQAAgJAHgEQAIgFAKAAQALAAAMAFIgFANIgJgDQgEgCgFAAQgHAAAAAFQAAAAAAABQAAAAABABQAAABAAAAQABAAAAABIALAFQAJAEACACIAFAFQACAEAAAEQAAAKgHAGQgIAFgMAAg");
	this.shape_11.setTransform(59.7,20.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAuQgLAAgHgJQgHgJAAgPQAAgPAHgJQAHgKALABQAMAAAGAJIABAAIgBgjIASAAIAABbIgOAAIgEgJIAAAAQgHAKgLAAgAgIgBQgEAFAAAJQAAAJAEAFQADAGAFAAQAHAAADgFQAEgDAAgKIAAgCQAAgLgDgDQgEgFgHAAQgFAAgDAFg");
	this.shape_12.setTransform(50.125,19.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAhIAAglQAAgIgCgCQgDgFgFAAQgGABgEAFQgDAFAAALIAAAeIgSAAIAAhAIANAAIADAIIABAAQADgEAFgDQAEgDAHABQAMAAAGAFQAFAGAAAMIAAAqg");
	this.shape_13.setTransform(42.875,20.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAcQgFgEAAgLQAAgKAHgEQAIgFANgBIALAAIAAgDQAAgKgKAAQgHAAgKAFIgGgMQAKgGAOAAQAOAAAGAGQAHAFAAAMIAAArIgMAAIgEgJIAAAAQgFAGgFACQgDACgIAAQgKAAgFgGgAgGAGQgEABAAAHQAAAHAJAAQAEAAAFgEQADgDAAgGIAAgGIgGAAQgJACgCACg");
	this.shape_14.setTransform(35.375,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAhIgKgDIAAgOIAMADQAEACAGAAQAKAAgBgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgEgDIgIgEQgJgDgCgCIgFgGQgCgDAAgGQAAgJAHgEQAHgFALAAQALAAAMAFIgFANIgKgDQgDgCgFAAQgHAAAAAFQAAAAAAABQAAAAABABQAAABAAAAQABAAABABIAKAFIALAGIAFAFQACAEAAAEQAAAKgHAGQgIAFgMAAg");
	this.shape_15.setTransform(26.45,20.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAwIAAhdIAPAAIACAIIABAAQAHgKALAAQAMAAAGAJQAGAJAAAQQAAALgCAHQgDAHgGAEQgGAFgIgBQgJABgIgJIgBAAIABAJIAAAbgAgIgcQgDAEgBAJIAAACQABALADADQACAFAHAAQAMAAgBgTQAAgJgCgFQgEgFgGgBQgFAAgDAFg");
	this.shape_16.setTransform(20.1,21.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAuIAAhBIARAAIAABBgAgJgkQAAgJAJAAQAKAAAAAJQAAAEgDACQgCADgFAAQgJAAAAgJg");
	this.shape_17.setTransform(14.575,19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMAuIAAgnQABgNgLAAQgHAAgDAFQgDAEgBAMIAAAfIgSAAIAAhbIASAAIgBAiIABAAQAHgJALAAQANAAAFAGQAHAGgBALIAAArg");
	this.shape_18.setTransform(9.1,19.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAhQgGAAgEgDIAAgOIAMADQADACAHAAQAJAAAAgGQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgFgDIgIgEIgLgFQgDgCgBgEQgCgDAAgGQAAgJAGgEQAIgFALAAQALAAAMAFIgGANIgJgDIgJgCQgGAAgBAFQABACADACIAJAFIAMAGIAFAFQACADAAAFIgBAAQABALgIAFQgGAFgNAAg");
	this.shape_19.setTransform(2.5,20.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAiIAAgmQAAgIgCgDQgDgEgFABQgGAAgEAEQgEAGAAAKIAAAfIgRAAIAAhBIANAAIADAJIABAAQADgFAFgCQAEgCAHgBQALAAAGAHQAGAGAAAMIAAAqg");
	this.shape_20.setTransform(125.975,5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAdQgFgGAAgKQAAgLAHgDQAIgGANABIALgBIAAgDQAAgKgKAAQgHAAgKAFIgGgNQAKgFAOAAQAOAAAGAFQAHAHAAALIAAArIgMAAIgEgJIAAAAQgGAGgEACQgDACgIAAQgJAAgGgFgAgGAFQgEADAAAFQAAAIAJAAQAFAAAEgEQADgDAAgGIAAgFIgHAAQgIABgCABg");
	this.shape_21.setTransform(118.475,5.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANAuIAAgnQAAgNgLAAQgHAAgDAFQgDADAAANIAAAfIgSAAIAAhbIASAAIgBAiIABAAQAGgJAMAAQALAAAGAGQAGAHAAAKIAAArg");
	this.shape_22.setTransform(111.375,4.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAjQgFgFAAgLIAAgfIgJAAIAAgIIAKgGIAFgNIALAAIAAANIASAAIAAAOIgSAAIAAAfQAAADACADQACABAEAAIAAAAQAEABAHgDIAAANQgHAEgKAAQgKgBgEgFg");
	this.shape_23.setTransform(105.025,5.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAZQgIgJAAgPQAAgRAIgIQAIgJAOAAQAOAAAHAIQAIAHAAAPIAAAHIgpAAQAAAIAEAEQAFAFAGAAIALgBIALgFIAAAPIgKADIgNABQgOAAgKgJgAgHgQQgDACgBAIIAYAAQAAgIgDgCQgDgFgGAAQgFAAgDAFg");
	this.shape_24.setTransform(96.425,5.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQADgGAEgDQAFgDAGAAIAGAAIgBARIgFgBQgJAAgFAFQgEAFAAAGIAAAhg");
	this.shape_25.setTransform(90.775,5.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQAeQgHgEgEgIQgEgIAAgKQAAgOAJgKQAIgJAOAAQAKAAAGAEQAHAEAFAIQADAHAAAKIABAAQAAAPgJAKQgIAJgPAAQgIAAgIgEgAgKgOQgDAGAAAIQAAAKADAEQAEAFAGABQAHgBAEgFQACgEAAgKQAAgJgCgEQgEgFgHgBQgGAAgEAFg");
	this.shape_26.setTransform(84.25,5.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAgAiIAAgmQAAgHgCgEQgDgEgFABQgHAAgDAEQgDAFAAAJIAAAhIgBABIgQAAIAAgmQAAgHgDgEQgCgEgFABQgHAAgDAEQgDAGAAAKIAAAfIgSAAIAAhBIANAAIADAJIABAAQADgFAEgCQAFgCAHgBQAOAAAFAKIACAAQADgFAEgCQAFgCAHgBQALABAGAFQAGAGAAANIAAAqg");
	this.shape_27.setTransform(74.95,5.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AADAiQgOAAgJgJQgJgIAAgQQAAgQAIgJQAJgJANAAQAOAAAIAIQAHAHAAAPIAAAHIgpAAQAAAIAFAEQAEAFAGAAIAMgBIALgFIAAAPIgKADIgNABgAgHgQQgDACgBAIIAZAAQAAgHgEgDQgEgFgFAAQgFAAgDAFg");
	this.shape_28.setTransform(62.925,5.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQADgGAEgDQAFgDAGAAIAGAAIgBARIgFgBQgJAAgFAFQgEAFAAAGIAAAhg");
	this.shape_29.setTransform(57.275,5.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLAPIAGgdIAQAAIABABQgDAMgIAQg");
	this.shape_30.setTransform(53.2,2.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAZQgJgIAAgQQAAgQAIgJQAJgJANAAQAOAAAIAIQAHAHAAAPIAAAHIgpAAQAAAIAFAEQAEAFAGAAIAMgBIALgFIAAAPIgKADIgNABQgPAAgJgJgAgHgQQgDACgBAIIAZAAQAAgHgEgDQgEgFgFAAQgFAAgDAFg");
	this.shape_31.setTransform(48.625,5.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAQArIgOg2IgCgKIgOBAIgVAAIgWhVIASAAIAPBEIACgKQAAgGACgFIANgvIAQAAIAQBEIAPhEIASAAIgWBVIABAAg");
	this.shape_32.setTransform(39.525,4.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.6,26.5);


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
	this.shape.graphics.f("#0C5FA3").s().p("AALAfIAAgBIgLgvIAAAAIgKAvIgTAAIgRg8IARAAIAHAbQABAGACANIAAAAIALguIARAAIAHAeIADAQIAEgTIAIgbIAQAAIgRA9g");
	this.shape.setTransform(51.1,5.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5FA3").s().p("AgPAcQgHgEgDgHQgEgIAAgJQAAgOAIgIQAJgJAMAAQAJAAAHAEQAHAEADAHQAEAHAAAJQAAAPgIAIQgHAJgPAAQgIAAgHgEgAgJgNQgDAFAAAIIAAAAQAAAJADAFQAEAFAFAAQAGAAAEgFQADgFAAgJQAAgIgDgFQgDgEgHAAQgGAAgDAEg");
	this.shape_1.setTransform(43.075,5.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5FA3").s().p("AALArIAAgkQAAgMgJAAQgGAAgDAFQgDADgBALIAAAdIgQAAIAAhVIAQAAIgBAgIABAAQAHgJAKAAQAMAAAEAGQAHAGAAAKIAAAog");
	this.shape_2.setTransform(36.2,4.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5FA3").s().p("AAMAfIAAgiQAAgIgDgCQgCgEgFAAQgGAAgEAFQgDAEAAAKIAAAdIgRAAIAAg8IAOAAIACAIIAAAAQAEgFAFgCQAEgCAFAAQALAAAGAGQAGAGAAAKIAAAng");
	this.shape_3.setTransform(26.45,5.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5FA3").s().p("AgTAfIAAg8IANAAIACAKIABAAQADgFADgDQAFgDAGAAIAGAAIgBAQIgFAAQgJAAgDAEQgEAEAAAGIAAAfg");
	this.shape_4.setTransform(20.8,5.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5FA3").s().p("AgVAbQgFgFAAgJQAAgLAGgDQAHgEANgBIALAAIAAgDQAAgKgKAAQgGAAgKAFIgGgLQAKgFANgBQAMAAAHAGQAGAGAAAKIAAAoIgMAAIABAAIgEgJIAAAAQgEAFgFADQgDACgHgBQgJAAgFgEgAAEADQgGgBgEADQgDACAAAGQAAAHAIAAQAFgBADgDQAEgDAAgGIAAgFg");
	this.shape_5.setTransform(14.625,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5FA3").s().p("AgTAYQgIgIAAgPQAAgPAHgIQAJgJAMAAQANAAAHAIQAHAIAAAMIAAAHIgmAAQAAAHAEAEQADAEAHAAIAKgBIALgEIAAAOIgKADIgMABQgOAAgIgIgAgHgPQgCACgBAHIAWAAQAAgGgDgDQgDgEgFAAQgFAAgDAEg");
	this.shape_6.setTransform(8.375,5.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5FA3").s().p("AgYAoIAAhPIARAAIAABBIAgAAIAAAOg");
	this.shape_7.setTransform(2.475,4.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.8,8.7);


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
	this.shape.graphics.f().s("#0C5FA3").ss(2,1,1).p("AARgUIghAp");
	this.shape.setTransform(7.15,2.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C5FA3").ss(2,1,1).p("AARAWIghgr");
	this.shape_1.setTransform(7.15,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0C5FA3").ss(2,1,1).p("AhRAAICjAA");
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
	this.shape.graphics.f("#0C5FA3").s().p("AgFAHQgDgDAAgEQAAgEADgCQABgCAEAAQAEAAADACQACACAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(159.55,8.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5FA3").s().p("AgeAwIAAgLIAIAAQAKAAAEgMIACgGIgbhCIAAgBIAQAAIAOAnQACAFABAJIAAAAIACgHIAQgtIAQAAIgdBLQgHAVgSAAIgKgBg");
	this.shape_1.setTransform(154.5,7.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5FA3").s().p("AgLAUIAAgjIgKAAIAAgGIAKgFIAFgPIAIAAIAAAPIATAAIAAALIgTAAIAAAjQAAAFADACQACADAEAAIAAAAIALgCIAAALIgGACIgIABQgTAAAAgWg");
	this.shape_2.setTransform(148.625,5.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5FA3").s().p("AgGAvIAAhDIANAAIAABDgAgFggQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(144.5,4.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5FA3").s().p("AAPAiIAAgoQAAgIgDgEQgEgEgGAAQgIAAgEAGQgEAEAAANIAAAhIgPAAIAAhCIALAAIACAJIABAAQADgFAGgDQAGgCAFAAQAZAAAAAYIAAArg");
	this.shape_4.setTransform(138.825,6.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5FA3").s().p("AgXAdQgGgHAAgMIAAgrIAPAAIAAAoQAAAJADADQADAEAHAAQAIAAAEgGQAEgEAAgNIAAghIAPAAIAABCIgMAAIgCgJIAAAAQgDAFgGADQgGADgFgBQgNAAgGgFg");
	this.shape_5.setTransform(130.825,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5FA3").s().p("AAjAiIAAgoQAAgIgDgEQgDgEgGAAQgIAAgEAGQgEAFAAALIAAAiIgNAAIAAgoQAAgIgDgEQgDgDgGAAQgIAAgFAFQgDAFAAAMIAAAhIgPAAIAAhCIALAAIACAJIABAAQADgFAFgDQAGgCAGAAQAPAAAFAKIABAAQAEgFAEgCQAGgDAGAAQAMAAAGAGQAGAGAAAMIAAArg");
	this.shape_6.setTransform(120.925,6.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5FA3").s().p("AAjAiIAAgoQAAgIgDgEQgDgEgGAAQgIAAgEAGQgEAFAAALIAAAiIgNAAIAAgoQAAgIgDgEQgDgDgGAAQgJAAgEAFQgEAGAAALIAAAhIgOAAIAAhCIALAAIACAJIABAAQACgEAGgEQAGgCAGAAQAPAAAFAKIABAAQAEgFAEgCQAGgDAGAAQAMAAAGAGQAGAGAAAMIAAArg");
	this.shape_7.setTransform(108.975,6.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5FA3").s().p("AgQAeQgHgEgEgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAOAAAKAJQAIAKAAAPQAAAQgIAKQgJAJgPAAQgIAAgIgFgAgMgQQgEAGAAAKQAAAXAQAAQARAAAAgXQAAgWgRgBQgIAAgEAHg");
	this.shape_8.setTransform(99.15,6.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5FA3").s().p("AgRAaQgIgJAAgQQAAgQAJgKQAIgJAPAAQALAAAIAEIgEAMQgJgEgGAAQgRAAAAAXQAAAKAFAHQAEAFAHAAQAKAAAIgEIAAAMQgEACgEABIgKABQgOAAgJgJg");
	this.shape_9.setTransform(92.325,6.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5FA3").s().p("AgUAiIAAhCIAMAAIACAMIABAAQACgGAFgEQAFgDAHAAIAHAAIgBAOIgHgBQgJAAgEAGQgFAFAAAJIAAAig");
	this.shape_10.setTransform(83.6,6.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5FA3").s().p("AgXAdQgGgHAAgMIAAgrIAPAAIAAAoQAAAJADADQAEAEAGAAQAIAAAEgGQAEgFAAgMIAAghIAPAAIAABCIgMAAIgCgJIAAAAQgDAFgGADQgGADgFgBQgNAAgGgFg");
	this.shape_11.setTransform(76.525,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5FA3").s().p("AgPAeQgJgEgDgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAQAAAHAJQAJAKAAAPQAAARgJAJQgIAJgPAAQgJAAgGgFgAgMgQQgEAGAAAKQAAAXAQAAQASAAgBgXQAAgWgRgBQgHAAgFAHg");
	this.shape_12.setTransform(68.75,6.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5FA3").s().p("AgZAtQgHgGAAgIQAAgHAEgEQAEgEAHgCQgDgBgCgDQgCgDAAgCIACgGIAHgFQgGgCgDgFQgDgGAAgGQAAgLAHgGQAHgGANAAIAFAAIAEABIAYAAIAAAIIgMACQACABABAEIABAHQAAALgHAFQgIAGgLAAIgGAAQgFADAAACQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACABAGAAIAKAAQAMAAAFAFQAGAFAAAJQAAALgJAGQgKAGgQAAQgOAAgIgEgAgPAWQgEADAAAFQAAAFAEACQAEADAIAAQALAAAFgEQAGgDAAgGQAAgEgDgCQgEgCgIAAIgKAAQgGAAgDADgAgKgkQgDAEAAAHQAAAGADAEQAEADAGAAQALAAAAgNQAAgHgDgDQgDgEgFAAQgFAAgFADg");
	this.shape_13.setTransform(58.175,7.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5FA3").s().p("AAPAiIAAgoQAAgIgDgEQgDgEgHAAQgIAAgEAGQgFAFAAAMIAAAhIgOAAIAAhCIALAAIACAJIABAAQADgFAGgDQAGgCAFAAQAZAAAAAYIAAArg");
	this.shape_14.setTransform(50.825,6.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C5FA3").s().p("AgGAvIAAhDIAOAAIAABDgAgFggQgCgDAAgDQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(45.05,4.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0C5FA3").s().p("AgUAiIAAhCIAMAAIACAMIAAAAQADgGAFgEQAFgDAGAAIAIAAIgCAOIgHgBQgIAAgEAGQgFAFAAAJIAAAig");
	this.shape_16.setTransform(41.05,6.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0C5FA3").s().p("AgPAeQgJgEgDgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAQAAAIAJQAIAKAAAPQAAARgIAJQgJAJgPAAQgJAAgGgFgAgMgQQgEAGAAAKQAAAXAQAAQARAAAAgXQAAgWgRgBQgIAAgEAHg");
	this.shape_17.setTransform(34.1,6.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0C5FA3").s().p("AAPAwIAAgqQAAgGgDgEQgEgFgGAAQgIABgEAFQgEAEAAANIAAAiIgPAAIAAhfIAPAAIgBAlIABAAQADgFAFgDQAGgCAFAAQAZAAAAAYIAAAsg");
	this.shape_18.setTransform(26.375,4.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0C5FA3").s().p("AgRAaQgIgIAAgRQAAgQAJgKQAIgJAPAAQALAAAIAEIgEAMQgJgEgGAAQgRAAAAAXQAAAKAEAHQAFAFAHAAQAKAAAIgEIAAAMQgEACgEABIgKABQgOAAgJgJg");
	this.shape_19.setTransform(19.375,6.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0C5FA3").s().p("AAPAiIAAgoQAAgIgDgEQgDgEgHAAQgIAAgEAGQgEAFAAAMIAAAhIgPAAIAAhCIAMAAIACAJIAAAAQADgFAGgDQAGgCAGAAQAYAAAAAYIAAArg");
	this.shape_20.setTransform(12.225,6.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0C5FA3").s().p("AAaAtIgJgZIghAAIgJAZIgPAAIAhhZIAPAAIAhBZgAgMAIIAZAAIgLgfIgCgIg");
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
	this.instance = new lib.HEAD2Dellasvg("synched",0);
	this.instance.setTransform(-74.05,15.3,1,1,0,0,0,71.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-145.2,2.1,142.39999999999998,26.5), null);


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
	this.instance = new lib.HEAD1Dellasvg("synched",0);
	this.instance.setTransform(-68.7,15.65,1,1,0,0,0,65.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-134.5,2.5,131.6,26.4), null);


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

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-31.9,-7.5,64.1,10), null);


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
	this.instance.setTransform(76.05,-3.3,1,1,0,0,0,80.2,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CAMPAIGN, new cjs.Rectangle(-4.1,-9.5,160.4,12.5), null);


// stage content:
(lib.PoVCommunityDisplayDella300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [187];
	// timeline functions:
	this.frame_187 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(187).call(this.frame_187).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(188));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(234.55,239);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(177).to({scaleX:1.16,scaleY:1.16},2).to({scaleX:1,scaleY:1},6).wait(3));

	// CTA arrow
	this.instance_1 = new lib.CTAarrow();
	this.instance_1.setTransform(281.1,237.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(846.2,247.1,1,1,0,0,0,446.2,208.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:742.2,alpha:1},19,cjs.Ease.quadOut).wait(168));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(477.3,101.2,1,1,0,0,0,77.3,29.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({x:373.3,alpha:1},19,cjs.Ease.quadOut).wait(98));

	// CAMPAIGN
	this.instance_4 = new lib.CAMPAIGN();
	this.instance_4.setTransform(-65,264.7,1,1,0,0,0,105,23.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143).to({_off:false},0).to({x:123.5},16,cjs.Ease.quintOut).wait(29));

	// FOOTER-bkgd
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8C652").s().p("A3bCHIAAkNMAu3AAAIAAENg");
	this.shape_1.setTransform(150,236.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(188));

	// LOGO
	this.instance_5 = new lib.LOGO();
	this.instance_5.setTransform(12.05,18.05,0.15,0.15,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(188));

	// PIC-iso
	this.instance_6 = new lib.Dellaiso();
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(188));

	// HEAD-bkgd
	this.instance_7 = new lib.HEADbkgdgreensvg("synched",0);
	this.instance_7.setTransform(127.05,63.1,1,1,0,0,0,172.9,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(188));

	// ALERT
	this.instance_8 = new lib.ALERT();
	this.instance_8.setTransform(-265.95,212.5,1,1,0,0,0,0,-10.5);
	this.instance_8.alpha = 0.3008;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(126).to({_off:false},0).to({x:-51.25},16,cjs.Ease.quintOut).wait(46));

	// PIC-bkgd
	this.instance_9 = new lib.Dellabkgd();
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(188));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-474.7,120.5,871.9,130);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/PoV_Community_Display_Della_300x250_atlas_P_1.png", id:"PoV_Community_Display_Della_300x250_atlas_P_1"},
		{src:"images/PoV_Community_Display_Della_300x250_atlas_NP_1.jpg", id:"PoV_Community_Display_Della_300x250_atlas_NP_1"}
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