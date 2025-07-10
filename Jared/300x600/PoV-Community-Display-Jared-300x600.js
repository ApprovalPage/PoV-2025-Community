(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"PoV_Community_Display_Jared_300x600_atlas_P_1", frames: [[0,1504,1435,42],[0,0,600,1200],[0,1202,1200,300]]},
		{name:"PoV_Community_Display_Jared_300x600_atlas_NP_1", frames: [[0,0,600,1200]]}
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
	this.initialize(ss["PoV_Community_Display_Jared_300x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Jaredbkgd300x600 = function() {
	this.initialize(ss["PoV_Community_Display_Jared_300x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Jarediso300x600 = function() {
	this.initialize(ss["PoV_Community_Display_Jared_300x600_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PoVHorizWhite = function() {
	this.initialize(ss["PoV_Community_Display_Jared_300x600_atlas_P_1"]);
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


(lib.HEAD2Jaredsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD2-Jared.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C756").s().p("AgHAHQgCgCAAgFQAAgDACgEQAEgCADAAQAFAAADADQACACAAAEQAAAEgCADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(125.725,22.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C756").s().p("AgOAhIgKgDIAAgOIALADIALACQAJAAAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgDIgSgJQgEgCgBgEQgCgEAAgFQAAgIAHgFQAHgFALAAQALAAAMAGIgFAMIgKgDQgDgBgFAAQgHgBAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIALAFIALAGIAFAFQACAEAAAEQAAAKgHAGQgHAFgNAAIgMgBg");
	this.shape_1.setTransform(121.075,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C756").s().p("AgIAjQgFgGAAgKIAAgfIgJAAIAAgIIAKgGIAFgNIALAAIAAANIASAAIAAAOIgSAAIAAAeQAAAEACACQACACADAAIABAAIALgCIAAANQgHADgKAAQgKAAgEgFg");
	this.shape_2.setTransform(115.375,19.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C756").s().p("AgZAAQAAgPAIgJQAJgJAOAAQALAAAJAFIgFANIgIgCIgHgBQgNAAAAASQAAATANAAQAFABAEgCIAJgEIAAAPIgJAEIgLABQgdAAAAgig");
	this.shape_3.setTransform(109.825,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C756").s().p("AgXAdQgFgHAAgJQAAgJAHgFQAHgEAOgCIAMAAIAAgDQAAgKgLAAQgHAAgKAFIgGgMQAMgGAMAAQAOAAAGAGQAHAFAAAMIAAArIgMAAIAAAAIgEgJIAAAAQgEAGgFACQgEACgIAAQgKAAgFgFgAAFADQgHAAgEADQgEADAAAEQAAAIAJAAQAGAAADgDQAEgEAAgGIAAgGg");
	this.shape_4.setTransform(102.825,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9C756").s().p("AgeAwIAAhdIAPAAIACAIIABAAQAGgKAMAAQALAAAHAJQAHAKAAAPQAAALgEAGQgDAIgFAEQgGAEgIAAQgKAAgHgIIgBAAIABAJIAAAbgAgJgcQgDAEAAAJIAAACQAAALADADQADAFAGAAQAMAAAAgTQAAgKgDgEQgDgFgGAAQgGAAgDAEg");
	this.shape_5.setTransform(95.825,21.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C756").s().p("AAgAhIAAglQAAgHgCgEQgDgDgFAAQgGAAgEAFQgDAEAAAJIAAAhIgRAAIAAglQAAgIgCgDQgDgDgFAAQgGAAgEAFQgDAFAAAKIAAAfIgSAAIAAhAIAOAAIADAIIABAAQACgFAFgCQAEgCAIAAQANAAAFAJIACAAQADgFAFgCQAEgCAHAAQAMAAAFAFQAGAGAAANIAAApg");
	this.shape_6.setTransform(85.925,20.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C756").s().p("AgIAtIAAhAIARAAIAABAgAgJgkQAAgIAJgBQAKABAAAIQAAAEgDADQgCACgFAAQgJAAAAgJg");
	this.shape_7.setTransform(78.225,18.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9C756").s().p("AgUAaQgJgKAAgQQAAgPAIgJQAJgJANAAQANAAAJAIQAHAIAAAOIAAAHIgpAAQAAAIAEAFQAFAEAGAAIALgCIALgDIAAANQgGADgEABIgNABQgOAAgJgIgAgHgRQgDAEgBAGIAYAAQAAgGgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_8.setTransform(69.725,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9C756").s().p("AgIAhIgZhBIATAAIAMAlIACANIADgNIAMglIATAAIgZBBg");
	this.shape_9.setTransform(62.75,20.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C756").s().p("AgIAtIAAhAIARAAIAABAgAgJgkQAAgIAJgBQAKABAAAIQAAAEgDADQgCACgFAAQgJAAAAgJg");
	this.shape_10.setTransform(57.525,18.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9C756").s().p("AgIAjQgFgFAAgLIAAgfIgJAAIAAgIIAKgGIAFgNIAKAAIAAANIATAAIAAAOIgTAAIAAAeQAAAEADACQABACAEAAIAAAAIAMgCIAAANQgHADgKAAQgKAAgEgFg");
	this.shape_11.setTransform(53.025,19.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9C756").s().p("AgIAtIAAhAIARAAIAABAgAgIgkQAAgIAIgBQAJABAAAIQAAAFgBACQgDACgFAAQgIAAAAgJg");
	this.shape_12.setTransform(48.65,18.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9C756").s().p("AgOAhIgKgDIAAgOIALADIALACQAJAAAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgDIgSgJQgEgCgBgEQgCgEAAgFQAAgIAHgFQAHgFALAAQALAAAMAGIgFAMIgKgDQgDgBgFAAQgHgBAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIALAFIALAGIAFAFQACAEAAAEQAAALgHAFQgHAFgNAAIgMgBg");
	this.shape_13.setTransform(43.875,20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9C756").s().p("AgQAeQgHgFgEgHQgEgIAAgKQAAgPAJgJQAIgJAOAAQAKAAAHAFQAGADAFAIQAEAHAAAKQAAARgJAIQgIAJgPAAQgIAAgIgEgAgJgOQgEAGAAAIQAAAJAEAGQADAEAGAAQAHAAADgEQAEgGAAgJQAAgHgEgHQgDgEgHAAQgGAAgDAEg");
	this.shape_14.setTransform(37.125,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9C756").s().p("AgeAwIAAhdIAPAAIACAIIABAAQAGgKAMAAQALAAAHAJQAHAKAAAPQAAALgEAGQgDAIgFAEQgGAEgIAAQgKAAgHgIIgBAAIABAJIAAAbgAgJgcQgDAEAAAJIAAACQAAALADADQADAFAGAAQAMAAAAgTQAAgKgDgEQgDgFgGAAIAAAAQgGAAgDAEg");
	this.shape_15.setTransform(29.825,21.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9C756").s().p("AgXAlQgHgJAAgPQAAgPAHgKQAGgJANAAQALAAAGAKIABAAIgBgiIASAAIAABaIgOAAIgEgIIAAAAQgHAJgLAAQgLAAgHgJgAgIgBQgEADAAALQAAAKAEAEQADAFAFAAQAHAAADgEQAEgFAAgIIAAgCQAAgLgEgDQgDgFgHAAQgFAAgDAFg");
	this.shape_16.setTransform(18.725,18.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9C756").s().p("AAMAhIAAglQAAgIgCgDQgDgDgFAAQgGAAgEAFQgDAFAAAKIAAAfIgSAAIAAhAIAOAAIACAIIABAAQACgEAGgDQAEgCAHAAQAMAAAFAGQAGAGAAAMIAAApg");
	this.shape_17.setTransform(11.175,20.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9C756").s().p("AgXAdQgFgHAAgJQAAgJAHgFQAHgEAOgCIAMAAIAAgDQAAgKgLAAQgHAAgKAFIgGgMQAMgGAMAAQAOAAAGAGQAHAFAAAMIAAArIgMAAIAAAAIgDgJIgBAAQgEAGgFACQgEACgIAAQgKAAgFgFgAAFADQgHAAgEADQgEADAAAEQAAAIAJAAQAGAAADgDQAEgEAAgGIAAgGg");
	this.shape_18.setTransform(3.375,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9C756").s().p("AgKAPIAFgdIAPAAIABACQgCALgIAQg");
	this.shape_19.setTransform(156.65,9.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D9C756").s().p("AgOAhIgKgDIAAgOIAMADIALACQAJAAAAgFQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgHgEIgLgFQgEgCgBgEQgCgFAAgEQAAgIAHgFQAGgFAMAAQAMAAALAGIgFAMIgKgDIgIgBQgHAAAAADQAAACADADIAKAFIALAGIAGAFQABAEAAAEQAAAKgHAGQgHAFgNAAIgMgBg");
	this.shape_20.setTransform(152.15,5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9C756").s().p("AgUAaQgJgKAAgQQAAgQAIgIQAJgJANAAQAOAAAIAIQAHAIAAAOIAAAHIgpAAQAAAIAEAFQAFAEAHAAIAKgCQAFAAAGgDIAAANQgGADgEABIgMABQgQAAgIgIgAgHgRQgDAFgBAFIAZAAQgBgGgDgEQgEgDgFAAQgFAAgDADg");
	this.shape_21.setTransform(145.6,5.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D9C756").s().p("AgIAtIAAhAIARAAIAABAgAgJgkQAAgIAJgBQAKABAAAIQAAAEgDADQgCACgFAAQgJAAAAgJg");
	this.shape_22.setTransform(140.225,4.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9C756").s().p("AgIAjQgFgGAAgKIAAgfIgJAAIAAgIIAKgGIAFgNIALAAIAAAOIASAAIAAANIgSAAIAAAfQAAADACACQACACADAAIAAAAIAMgCIAAANQgHADgKAAQgKAAgEgFg");
	this.shape_23.setTransform(135.725,5.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D9C756").s().p("AgIAtIAAhAIARAAIAABAgAgJgkQAAgIAJgBQAKABAAAIQAAAFgDACQgCACgFAAQgJAAAAgJg");
	this.shape_24.setTransform(131.325,4.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9C756").s().p("AgIAtIAAhaIARAAIAABag");
	this.shape_25.setTransform(127.7,4.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D9C756").s().p("AgIAtIAAhAIARAAIAABAgAgJgkQAAgIAJgBQAKABAAAIQAAAEgDADQgCACgFAAQgJAAAAgJg");
	this.shape_26.setTransform(124.025,4.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D9C756").s().p("AgLAmIgCAAIgDAHIgNAAIAAhaIARAAIAAAiIAAAAQAHgKALAAIAAAAQAMAAAGAJQAHAJAAAPQAAAQgHAJQgGAJgMAAQgMAAgFgIgAgJgDQgDAEAAAJIAAACQAAALADAEQAEAEAFAAQAGAAADgEQADgGAAgJQAAgKgDgEQgDgFgGABQgGAAgDADg");
	this.shape_27.setTransform(118.6,4.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D9C756").s().p("AgIAtIAAhAIARAAIAABAgAgJgkQAAgIAJgBQAKABAAAIQAAAEgDADQgCACgFAAQgJAAAAgJg");
	this.shape_28.setTransform(112.775,4.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D9C756").s().p("AgOAhIgJgDIAAgOIALADIAKACQAJAAAAgFIgBgEIgEgDIgIgEIgLgFQgDgCgCgEQgCgEAAgFQAAgIAHgFQAGgFAMAAQALAAAMAGIgFAMIgJgDIgJgBQgHAAAAADQAAADACACIAKAFQAJADADADIAFAFQACADAAAFQAAAKgHAGQgHAFgNAAIgMgBg");
	this.shape_29.setTransform(108,5.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D9C756").s().p("AgOAhIgKgDIAAgOIAMADIALACQAIAAAAgFIgBgEIgEgDIgIgEQgIgDgDgCQgEgDgBgDQgCgEAAgFQAAgIAHgFQAHgFALAAQALAAAMAGIgFAMIgJgDIgJgBQgHAAAAADQAAADADACIAKAFQAIADADADQADABACAEQACAEAAAEQAAALgHAFQgHAFgNAAIgMgBg");
	this.shape_30.setTransform(102.025,5.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9C756").s().p("AgQAeQgHgEgEgIQgEgIAAgKQAAgPAJgJQAIgJAOAAQAKAAAHAFQAGADAFAIQAEAIAAAJIAAAAQAAARgIAIQgKAJgOAAQgIAAgIgEgAgKgOQgDAGAAAIIABAAQAAAKACAFQAEAFAGAAQAGAAAEgFQADgFABgKQgBgHgDgHQgDgEgHAAQgHAAgDAEg");
	this.shape_31.setTransform(95.3,5.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D9C756").s().p("AgeAwIAAheIAPAAIACAJIABAAQAGgKAMAAQAMABAGAIQAHAKAAAPQAAALgDAHQgFAIgEADQgGAEgIAAQgKAAgHgIIgBAAIABAJIAAAbgAgJgdQgDAFAAAJIAAACQAAALADADQADAEAGAAQAMABAAgTQAAgJgDgGQgDgEgGAAIAAAAQgFAAgEADg");
	this.shape_32.setTransform(87.975,7.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9C756").s().p("AgKAPIAGgdIAPAAIAAACQgBAGgJAVg");
	this.shape_33.setTransform(78.9,9.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D9C756").s().p("AgUAaQgJgKAAgQQAAgQAIgIQAJgJANAAQAOAAAIAIQAHAIAAAOIAAAHIgpAAQAAAIAEAFQAFAEAGAAQAGAAAGgCQADAAAIgDIAAANQgGADgEABIgOABQgOAAgJgIgAgHgRQgEAFABAFIAYAAQAAgFgEgFQgEgDgFAAQgFAAgDADg");
	this.shape_34.setTransform(73.85,5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D9C756").s().p("AgIAtIAAhaIARAAIAABag");
	this.shape_35.setTransform(68.45,4.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D9C756").s().p("AgeAwIAAheIAPAAIACAJIABAAQAGgKAMAAQAMABAGAIQAHAJAAAQQAAALgDAHQgDAIgGADQgFAEgJAAQgKAAgHgIIgBAAIABAJIAAAbgAgJgdQgDAFAAAJIAAACQAAALADADQAEAEAFAAQAMABAAgTQAAgJgDgGQgDgEgGAAIAAAAQgFAAgEADg");
	this.shape_36.setTransform(63.025,7.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D9C756").s().p("AgQAeQgGgDgFgJQgEgGAAgMQAAgPAJgJQAIgJAOAAQAKAAAHAFQAHADAEAIQAEAHAAAKQAAAQgJAJQgIAJgPAAQgIAAgIgEgAgJgOQgEAFAAAJQAAAJAEAGQADAFAGAAQAHAAADgFQADgFAAgKQAAgIgDgGQgDgEgHAAQgGAAgDAEg");
	this.shape_37.setTransform(55.325,5.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D9C756").s().p("AADAiQgOAAgJgIQgJgKAAgQQAAgPAIgJQAJgJANAAQAOAAAHAIQAIAIAAAOIAAAHIgpAAQABAIADAFQAFAEAGAAIALgCQAGAAAFgDIAAANQgGADgEABIgMABgAgHgRQgDAEgBAGIAYAAQAAgGgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_38.setTransform(48.075,5.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9C756").s().p("AgeAwIAAheIAPAAIACAJIABAAQAGgKAMAAQAMABAGAIQAHAKAAAPQAAALgEAHQgDAHgFAEQgGAEgIAAQgKAAgHgIIgBAAIABAJIAAAbgAgJgdQgDAFAAAJIAAACQAAALADADQADAEAGAAQAMABAAgTQAAgJgDgGQgDgEgGAAIAAAAQgFAAgEADg");
	this.shape_39.setTransform(40.925,7.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D9C756").s().p("AgUAaQgJgKAAgQQAAgPAIgJQAIgJAOAAQAOAAAHAIQAIAJAAANIAAAHIgpAAQABAIADAFQAFAEAGAAIALgCQAGAAAFgDIAAANQgGADgEABIgNABQgOAAgJgIgAgHgRQgDAEgBAGIAYAAQAAgGgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_40.setTransform(30.275,5.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D9C756").s().p("AgUAhIAAhAIANAAIADALIABAAQADgFAEgEQAGgEAFABIAGAAIgBARIgFAAQgJgBgEAFQgEADAAAIIAAAhg");
	this.shape_41.setTransform(24.325,5.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D9C756").s().p("AgKAOIAGgcIAPAAIAAABQgDANgHAOg");
	this.shape_42.setTransform(19.95,2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D9C756").s().p("AgUAaQgJgKAAgQQAAgPAIgJQAJgJANAAQAOAAAHAIQAIAIAAAOIAAAHIgpAAQAAAIAFAFQAEAEAGAAQAHAAAFgCQAEAAAHgDIAAANIgKAEIgNABQgPAAgJgIgAgHgRQgDAEgBAGIAZAAQAAgFgEgFQgDgDgGAAQgFAAgDADg");
	this.shape_43.setTransform(15.125,5.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D9C756").s().p("AAQArIgQhAIgPBAIgUAAIgWhVIARAAIAQBEIABgKIAPg6IARAAIAOA5IACALIAPhEIASAAIgWBVg");
	this.shape_44.setTransform(5.8,4.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.8,26.4);


(lib.HEAD1Jaredsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD1-Jared.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAHQgCgCAAgFQAAgDACgEQAEgCADAAQAFAAADADQACACAAAEQAAAEgCADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(103.525,22.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAhIgKgDIAAgOIAMADIALACQAIAAAAgFIgBgEIgEgDIgTgJQgEgDgBgDQgCgEAAgFQAAgIAHgFQAIgFAKAAQALAAAMAGIgFAMIgJgDIgJgBQgHgBAAAFQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAKAFIALAGIAFAFQACAEAAAEQAAALgHAFQgHAFgNAAIgMgBg");
	this.shape_1.setTransform(98.875,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAaQgJgKAAgQQAAgPAIgJQAJgJANAAQANAAAIAIQAIAIAAAOIAAAHIgpAAQAAAIAEAFQAFAEAGAAIALgCIALgDIAAANQgGADgEABIgNABQgOAAgJgIgAgHgRQgDAEgBAGIAYAAQAAgGgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_2.setTransform(92.325,20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAhIAAglQAAgIgCgDQgDgDgFAAQgGAAgEAFQgDAFAAAKIAAAfIgSAAIAAhAIAOAAIACAIIABAAQADgEAFgDQAEgCAHAAQAMAAAFAGQAGAGAAAMIAAApg");
	this.shape_3.setTransform(84.825,20.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAdQgFgGAAgKQAAgKAHgEQAGgEAPgCIAMAAIAAgDQAAgKgKAAQgIAAgKAFIgGgMQAMgGAMAAQAOAAAGAGQAHAFAAAMIAAArIgMAAIgEgJIAAAAQgFAGgEACQgEACgIAAQgKAAgFgFgAAEADQgGAAgEADQgEADAAAEQAAAIAJAAQAFAAAEgDQADgFABgFIAAgGg");
	this.shape_4.setTransform(77.05,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQADgGAEgDQAEgEAHABIABAAIAGAAIgCARIgFAAQgJgBgFAFQgDADAAAIIAAAhg");
	this.shape_5.setTransform(71.25,20.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAAQAAgPAIgJQAJgJAOAAQALAAAJAFIgFANIgIgCIgHgBQgNAAAAASQAAATANAAQAFABAEgCIAJgEIAAAPIgJAEIgLABQgdAAAAgig");
	this.shape_6.setTransform(65.175,20.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAlQgGgIgBgQQABgQAGgJQAHgJAMAAQAKAAAHAKIABAAIgBgNIAAgVIASAAIAABaIgOAAIgEgIIAAAAQgHAJgLAAQgLAAgHgJgAgJgBQgDAEAAAKQAAAKADAEQAEAFAGAAQAGAAAEgEQADgFAAgIIAAgCQAAgLgDgDQgEgFgHAAQgEAAgFAFg");
	this.shape_7.setTransform(54.9,18.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAhIAAglQAAgIgCgDQgDgDgFAAQgGAAgEAFQgDAFAAAKIAAAfIgSAAIAAhAIAOAAIACAIIABAAQACgEAGgDQAEgCAHAAQALAAAGAGQAGAGAAAMIAAApg");
	this.shape_8.setTransform(47.375,20.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAdQgFgGAAgKQAAgJAHgFQAGgEAPgCIAMAAIAAgDQAAgKgLAAQgHAAgKAFIgGgMQAMgGAMAAQANAAAHAGQAHAFAAAMIAAArIgMAAIAAAAIgEgJIAAAAQgEAGgFACQgEACgIAAQgKAAgFgFgAAFADQgHAAgEADQgEADAAAEQAAAIAJAAQAFAAAEgDQAEgEAAgGIAAgGg");
	this.shape_9.setTransform(39.575,20.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAeQgHgFgEgHQgEgIAAgKQAAgPAJgJQAIgJAOAAQAKAAAHAFQAIAEADAHQAEAHAAAKQAAARgIAIQgJAJgPAAQgIAAgIgEgAgJgOQgEAGAAAIIABAAQAAAKADAFQADAEAGAAQAHAAADgEQAEgFAAgKQAAgHgEgHQgDgEgHAAQgGAAgDAEg");
	this.shape_10.setTransform(29.325,20.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZArQgHgFAAgIQAAgGAEgEQAEgEAHgCIgFgEQgCgCAAgDQAAgFACgBIAGgFQgGgCgCgFQgDgEAAgHQAAgLAHgGQAHgGANAAIAKABIAXAAIAAAKIgKACQADAFAAAFQAAALgIAGQgIAFgLAAIgDAAIgDAAQgDACAAACQAAAEAKAAIAKAAQALAAAFAEQAGAFAAAJQAAALgJAHQgKAGgRAAQgOAAgHgFgAgNAWQgEADAAADIABAAQAAAEADACQADACAHAAQAIAAAGgCQAFgDAAgEQAAgEgDgCQgCgBgIAAIgIAAQgGAAgCACgAgKgYQAAAGACADQADADAFAAQAEAAACgDQACgEAAgFQAAgMgIAAQgKAAAAAMg");
	this.shape_11.setTransform(22.175,21.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQADgGAEgDQAFgEAGABIAGAAIgBARIgFAAQgJgBgFAFQgEAEAAAHIAAAhg");
	this.shape_12.setTransform(16.475,20.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAdQgFgGAAgKQAAgKAHgEQAGgEAPgCIALAAIAAgDQAAgKgKAAQgHAAgKAFIgGgMQAMgGAMAAQANAAAHAGQAHAFAAAMIAAArIgMAAIAAAAIgEgJIAAAAQgFAGgFACQgDACgIAAQgKAAgFgFgAAFADQgHAAgEADQgEADAAAEQAAAIAJAAQAFAAAEgDQADgEAAgGIAAgGg");
	this.shape_13.setTransform(9.575,20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAAQAAgPAIgJQAJgJAOAAQALAAAJAFIgFANIgIgCIgHgBQgNAAAAASQAAATANAAIAKgBIAIgEIAAAPQgDADgFABIgMABQgdAAAAgig");
	this.shape_14.setTransform(3.125,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAhIAAglQAAgHgCgEQgEgDgEAAQgHAAgDAFQgEAGAAAJIAAAfIgRAAIAAhAIANAAIADAIIABAAQACgEAGgDQAEgCAHAAQALAAAGAGQAGAFAAAMIAAAqg");
	this.shape_15.setTransform(96.125,5.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAdQgFgGAAgKQAAgKAHgEQAGgEAPgCIAMAAIAAgDQAAgKgKAAQgHAAgLAFIgGgMQAMgGAMAAQANAAAHAGQAHAFAAAMIAAArIgMAAIgEgJIAAAAQgFAGgEACQgEACgIAAQgKAAgFgFgAAEADQgGAAgEADQgEADAAAEQAAAIAJAAQAFAAAEgDQADgFABgFIAAgGg");
	this.shape_16.setTransform(88.3,5.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAMAtIAAgmQAAgNgKAAQgHAAgDAFQgDAFAAALIAAAeIgSAAIAAhaIASAAIgBAjIABAAQAGgKAMAAQALAAAGAGQAGAGAAALIAAAqg");
	this.shape_17.setTransform(80.975,4.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAjQgFgFAAgLIAAgfIgJAAIAAgIIAKgGIAFgNIALAAIAAAOIASAAIAAANIgSAAIAAAfQAAACACADQACACAEAAIAAAAIALgCIAAANQgHADgJAAQgKAAgFgFg");
	this.shape_18.setTransform(74.325,5.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAaQgIgKAAgQQAAgQAIgIQAJgJANAAQAOAAAIAIQAHAIAAAOIAAAHIgpAAQAAAIAFAFQAEAEAGAAQAHAAAEgCQAEAAAHgDIAAANQgFADgFABIgMABQgPAAgKgIgAgHgRQgDAFgBAFIAZAAQgBgFgDgFQgEgDgFAAQgFAAgDADg");
	this.shape_19.setTransform(65.15,5.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQADgFAEgEQAGgEAFABIAAAAIAHAAIgCARIgFAAQgJgBgFAFQgDADAAAIIAAAhg");
	this.shape_20.setTransform(59.2,5.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAeQgGgDgFgJQgEgGAAgMQAAgQAJgIQAIgJAOAAQAKAAAHAFQAHADAEAIQAEAHAAAKQAAAQgJAJQgIAJgPAAQgIAAgIgEgAgJgOQgEAFAAAJQAAAJAEAGQADAFAGAAQAHAAADgFQADgFAAgKQAAgIgDgGQgDgEgHAAQgGAAgDAEg");
	this.shape_21.setTransform(52.425,5.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAgAhIAAglQAAgHgDgEQgCgDgFAAQgHAAgDAFQgDAEAAAJIAAAhIgRAAIAAglQAAgHgCgEQgDgDgFAAQgGAAgEAFQgDAFAAAKIAAAfIgSAAIAAhAIAOAAIACAIIABAAQAEgFAEgCQAEgCAHAAQAOAAAFAJIACAAQADgFAFgCQAEgCAHAAQAMAAAFAFQAGAGAAANIAAApg");
	this.shape_22.setTransform(42.825,5.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAaQgJgKAAgQQAAgPAIgJQAIgJAOAAQAOAAAHAIQAIAJAAANIAAAHIgpAAQABAIADAFQAFAEAGAAIALgCQAGAAAFgDIAAANQgGADgEABIgNABQgOAAgJgIgAgHgRQgDAEgBAGIAYAAQAAgGgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_23.setTransform(30.275,5.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIANAAIADALIABAAQADgFAEgEQAGgEAFABIAGAAIgBARIgFAAQgJgBgEAFQgEADAAAIIAAAhg");
	this.shape_24.setTransform(24.325,5.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAOIAGgcIAPAAIAAABQgDANgHAOg");
	this.shape_25.setTransform(19.95,2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAaQgJgKAAgQQAAgPAIgJQAJgJANAAQAOAAAHAIQAIAIAAAOIAAAHIgpAAQAAAIAFAFQAEAEAGAAQAHAAAFgCQAEAAAHgDIAAANIgKAEIgNABQgPAAgJgIgAgHgRQgDAEgBAGIAZAAQAAgFgEgFQgDgDgGAAQgFAAgDADg");
	this.shape_26.setTransform(15.125,5.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAQArIgQhAIgPBAIgUAAIgWhVIARAAIAQBEIABgKIAPg6IARAAIAOA5IACALIAPhEIASAAIgWBVg");
	this.shape_27.setTransform(5.8,4.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.6,26.4);


(lib.HEADbkgdbluesvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD-bkgd-blue.svg
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
	this.shape_4.graphics.f("#0C5FA3").s().p("A1uFSQijg4ivALIAAubMA2BAAAIAATrMgqcAABQiojTjrhRg");
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
	this.shape.graphics.f("#0C5FA3").s().p("AADAgQgOAAgIgIQgIgJAAgOQgBgOAJgJQAHgJANAAQAMAAAIAIQAHAHAAANIAAAHIgmAAQAAAHAEAEQADAEAHAAIALgBQAFgBAFgDIAAAOQgEACgFABIgNABgAgHgPQgCACgBAHIAWAAQAAgGgDgDQgDgEgFAAQgFAAgDAEg");
	this.shape.setTransform(58.1,4.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5FA3").s().p("AgTAfIAAg8IANAAIADAKIABAAQABgDAFgFQAEgDAHAAIAFAAIgBAQIgFgBQgIAAgFAFQgDAEAAAGIAAAfg");
	this.shape_1.setTransform(52.8,4.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5FA3").s().p("AgPAcQgHgDgEgIQgDgIAAgJQAAgOAIgIQAIgJANAAQAIAAAIAEQAGAEAEAHQAEAHAAAJIgBAAQAAAPgHAIQgIAJgOAAQgIAAgHgEgAgJgNQgDAFAAAIQAAAJADAFQAEAFAFAAQAGAAAEgFQACgFAAgJQAAgHgCgGQgEgEgGAAQgGAAgDAEg");
	this.shape_2.setTransform(46.75,4.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5FA3").s().p("AAeAfIAAgjQAAgGgDgEQgCgDgEAAQgHAAgCAFQgEAEAAAJIAAAeIgQAAIAAgjQAAgGgCgEQgDgDgEAAQgGAAgDAFQgDAFAAAJIAAAdIgRAAIAAg8IANAAIADAIIABAAQACgFAFgCQAFgCAFAAQANAAAFAJIABAAQADgEAFgDQAFgCAFAAQAKAAAHAFQAEAFAAAMIAAAng");
	this.shape_3.setTransform(38.05,4.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5FA3").s().p("AAMAfIAAgjQAAgHgDgDQgCgDgFAAQgGAAgEAFQgDAEAAAKIAAAdIgRAAIAAg8IAOAAIACAIIABAAQACgEAGgDQAEgCAFAAQAMAAAFAGQAGAGAAAKIAAAng");
	this.shape_4.setTransform(26.45,4.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5FA3").s().p("AgTAfIAAg8IANAAIACAKIABAAQACgEAFgEQAFgDAFAAIAGAAIgBAQIgFgBQgIAAgEAFQgEAEAAAGIAAAfg");
	this.shape_5.setTransform(20.8,4.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5FA3").s().p("AgVAbQgFgFAAgJQAAgLAGgDQAIgFAMAAIALAAIAAgDQAAgKgKAAQgGAAgKAFIgGgLQAKgFANgBQAMAAAHAGQAGAFAAALIAAAoIgLAAIAAAAIgEgJIAAAAQgEAGgFACQgDABgHAAQgJAAgFgEgAAEADQgGgBgEADQgDACAAAGQAAAGAIABQAFAAADgEQAEgDAAgGIAAgFg");
	this.shape_6.setTransform(14.625,4.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5FA3").s().p("AgTAYQgIgIAAgPQAAgPAHgIQAJgJAMAAQANAAAHAIQAHAIAAAMIAAAHIgmAAQAAAHAEAEQADAEAHAAIAKgBIALgEIAAAOQgFACgFABIgMABQgOAAgIgIgAgHgPQgCACgBAHIAWAAQAAgGgDgDQgDgEgFAAQgFAAgDAEg");
	this.shape_7.setTransform(8.375,4.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5FA3").s().p("AgYAoIAAhPIARAAIAABBIAgAAIAAAOg");
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5FA3").s().p("AgGAHQgCgDAAgEQAAgEACgCQACgCAEAAQAEAAACACQADADAAADQAAADgDAEQgCACgEAAQgDAAgDgCg");
	this.shape.setTransform(66.1,13.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5FA3").s().p("AgeAwIAAgLIAHAAQAMAAADgMIACgGIgbhCIAAgBIAQAAIAOAnQADAJAAAFIABAAIABgHIAQgtIAPAAIgcBLQgHAVgTAAIgJgBg");
	this.shape_1.setTransform(61.3,12.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5FA3").s().p("AgMAVIAAgkIgJAAIAAgHIAKgEIAFgPIAIAAIAAAPIATAAIAAALIgTAAIAAAjQAAAFACADQAEACADABIALgCIAAAKIgGACIgIABQgUAAAAgVg");
	this.shape_2.setTransform(55.175,9.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5FA3").s().p("AgGAuIAAhCIANAAIAABCgAgFggQgCgDAAgCQAAgEACgDQACgBADAAQAEAAACABQACACAAAFQAAADgCACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(51,9.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5FA3").s().p("AgdAjIAAhDIAMAAIACAIIAAAAQADgEAGgDQAGgCAFgBQAZAAAAAZIAAArIgPAAIAAgoQAAgIgDgEQgDgEgHAAQgIABgEAFQgEAGAAALIAAAig");
	this.shape_4.setTransform(45.325,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5FA3").s().p("AgXAcQgGgFAAgNIAAgrIAPAAIAAAoQAAAIADAEQADAEAHAAQAIAAAEgGQAEgFAAgMIAAghIAPAAIAABCIgMAAIAAAAIgCgJIgBAAQgDAFgFADQgGACgGAAQgMAAgGgGg");
	this.shape_5.setTransform(37.375,10.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5FA3").s().p("AgxAjIAAhDIAMAAIACAIIAAAAQAEgEAFgDQAFgCAGgBQAPAAAFALIABAAQADgGAFgCQAGgCAHgBQAMAAAFAHQAGAFgBANIAAArIgNAAIAAgoQAAgIgDgEQgEgEgFAAQgJAAgEAGQgEAFAAALIAAAiIgNAAIAAgoQAAgIgDgEQgDgEgGAAQgJABgEAFQgEAGAAALIAAAig");
	this.shape_6.setTransform(27.45,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5FA3").s().p("AgwAjIAAhDIALAAIABAIIABAAQADgEAFgDQAGgCAGgBQAPAAAFALIABAAQADgFAFgDQAGgCAGgBQANAAAFAHQAGAFAAANIAAArIgPAAIAAgoQAAgIgCgEQgDgEgHAAQgIAAgEAGQgEAFAAALIAAAiIgNAAIAAgoQAAgHgDgFQgDgEgGAAQgJABgDAFQgFAGAAALIAAAig");
	this.shape_7.setTransform(15.5,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5FA3").s().p("AgQAfQgHgFgFgIQgDgHAAgLQAAgQAIgJQAJgJAOAAQAPAAAIAKQAJAIAAAQIAAAAQAAAQgIAJQgKAKgOAAQgJAAgHgEgAgMgQQgFAGAAAKQAAAYARAAQARAAAAgYQAAgWgRAAQgIAAgEAGg");
	this.shape_8.setTransform(5.7,10.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5FA3").s().p("AgRAaQgIgIAAgSQAAgPAIgKQAJgJAPAAQALAAAIAEIgFALQgIgDgHAAQgQAAAAAWQAAAMAEAFQAFAGAHAAQAJAAAJgFIAAANIgIADIgLABQgOAAgIgJg");
	this.shape_9.setTransform(-1.125,10.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5FA3").s().p("AgUAiIAAhCIAMAAIACAMIABAAQACgGAFgEQAFgDAHAAIAHAAIgBAOIgHgBQgJAAgEAGQgFAFAAAJIAAAig");
	this.shape_10.setTransform(79.45,-3.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5FA3").s().p("AgXAdQgGgHAAgMIAAgrIAPAAIAAAoQAAAJADADQAEAEAGAAQAIAAAEgGQAEgFAAgMIAAghIAPAAIAABCIgMAAIgCgJIAAAAQgDAFgGADQgGADgFgBQgNAAgGgFg");
	this.shape_11.setTransform(72.375,-3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5FA3").s().p("AgPAeQgJgEgDgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAQAAAHAJQAJAKAAAPQAAARgJAJQgIAJgPAAQgJAAgGgFgAgMgQQgEAGAAAKQAAAXAQAAQASAAgBgXQAAgWgRgBQgHAAgFAHg");
	this.shape_12.setTransform(64.6,-3.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5FA3").s().p("AgZAtQgHgGAAgJQAAgGAEgEQAEgFAHgBQgDgBgCgDQgCgDAAgDIACgFIAHgFQgGgDgDgFQgDgGAAgGQAAgKAHgHQAHgFANgBIAFABIAEABIAYAAIAAAHIgMADQACABABAEIABAGQAAAMgHAFQgIAGgLAAIgGgBQgFADAAADQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQACABAGAAIAKAAQAMAAAFAEQAGAGAAAJQAAALgJAGQgLAHgPgBQgNAAgJgEgAgPAWQgEADAAAFQAAAFAEACQAEACAIAAQALABAFgEQAGgDAAgGQAAgEgDgCQgEgCgIAAIgKAAQgGAAgDADgAgKgkQgDAEAAAGQAAAHADADQAEADAGAAQALAAAAgNQAAgHgDgCQgDgEgFgBQgFAAgFAEg");
	this.shape_13.setTransform(54.025,-1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5FA3").s().p("AAPAiIAAgoQAAgIgDgEQgDgEgHAAQgIAAgEAGQgFAFAAAMIAAAhIgOAAIAAhCIALAAIACAJIABAAQADgFAGgDQAGgCAFAAQAZAAAAAYIAAArg");
	this.shape_14.setTransform(46.675,-3.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C5FA3").s().p("AgGAvIAAhDIAOAAIAABDgAgFggQgCgDAAgDQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(40.9,-4.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0C5FA3").s().p("AgUAiIAAhCIAMAAIACAMIAAAAQADgGAFgEQAFgDAGAAIAIAAIgCAOIgHgBQgIAAgEAGQgFAFAAAJIAAAig");
	this.shape_16.setTransform(36.9,-3.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0C5FA3").s().p("AgPAeQgJgEgDgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAQAAAIAJQAIAKAAAPQAAARgIAJQgJAJgPAAQgJAAgGgFgAgMgQQgEAGAAAKQAAAXAQAAQARAAAAgXQAAgWgRgBQgIAAgEAHg");
	this.shape_17.setTransform(29.95,-3.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0C5FA3").s().p("AAPAwIAAgqQAAgGgDgEQgEgFgGAAQgIABgEAFQgEAEAAANIAAAiIgPAAIAAhfIAPAAIgBAlIABAAQADgFAFgDQAGgCAFAAQAZAAAAAYIAAAsg");
	this.shape_18.setTransform(22.225,-4.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0C5FA3").s().p("AgRAaQgIgIAAgRQAAgQAJgKQAIgJAPAAQALAAAIAEIgEAMQgJgEgGAAQgRAAAAAXQAAAKAEAHQAFAFAHAAQAKAAAIgEIAAAMQgEACgEABIgKABQgOAAgJgJg");
	this.shape_19.setTransform(15.225,-3.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0C5FA3").s().p("AAPAiIAAgoQAAgIgDgEQgDgEgHAAQgIAAgEAGQgEAFAAAMIAAAhIgPAAIAAhCIAMAAIACAJIAAAAQADgFAGgDQAGgCAGAAQAYAAAAAYIAAArg");
	this.shape_20.setTransform(8.075,-3.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0C5FA3").s().p("AAaAtIgJgZIghAAIgJAZIgPAAIAhhZIAPAAIAhBZgAgMAIIAZAAIgLgfIgCgIg");
	this.shape_21.setTransform(-0.025,-4.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CAMPAIGN, new cjs.Rectangle(-4.1,-9.5,85.6,26.5), null);


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
	this.instance = new lib.HEAD2Jaredsvg("synched",0);
	this.instance.setTransform(71.2,15.3,1,1,0,0,0,71.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,2.1,157.8,26.4), null);


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
	this.instance = new lib.HEAD1Jaredsvg("synched",0);
	this.instance.setTransform(65.8,15.65,1,1,0,0,0,65.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,2.5,104.6,26.3), null);


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


// stage content:
(lib.PoVCommunityDisplayJared300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [175];
	// timeline functions:
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(175).call(this.frame_175).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,300.0216,1,2.4056);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(176));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(199.8,575.75,1.35,1.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(165).to({scaleX:1.5659,scaleY:1.5659},2).to({scaleX:1.35,scaleY:1.35},6).wait(3));

	// CTA arrow
	this.instance_1 = new lib.CTAarrow();
	this.instance_1.setTransform(270.75,573.2,1.35,1.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(961.1,449,1.7251,1.7251,0,0,0,446.3,208.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:446.2,x:786.75,alpha:1},19,cjs.Ease.quadOut).wait(156));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(331.65,197.25,1.7252,1.7252,0,0,0,77.4,29.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({regX:77.3,x:150.35,alpha:1},19,cjs.Ease.quadOut).wait(98));

	// CAMPAIGN
	this.instance_4 = new lib.CAMPAIGN();
	this.instance_4.setTransform(20.85,599.65,1.35,1.35,0,0,0,105,23.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131).to({_off:false},0).to({x:162.55},16,cjs.Ease.quintOut).wait(29));

	// FOOTER-bkgd
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8C652").s().p("A3bEsIAApXMAu3AAAIAAJXg");
	this.shape_1.setTransform(150,573);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(176));

	// LOGO
	this.instance_5 = new lib.LOGO();
	this.instance_5.setTransform(30.05,40.05,0.2,0.2,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(176));

	// PIC-iso
	this.instance_6 = new lib.Jarediso300x600();
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(176));

	// HEAD-bkgd
	this.instance_7 = new lib.HEADbkgdbluesvg("synched",0);
	this.instance_7.setTransform(127.05,188.1,1,1,0,0,0,172.9,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(176));

	// ALERT
	this.instance_8 = new lib.ALERT();
	this.instance_8.setTransform(-361,532.5,1,1,0,0,0,0,-10.5);
	this.instance_8.alpha = 0.3008;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(114).to({_off:false},0).to({x:-51.25},16,cjs.Ease.quintOut).wait(46));

	// PIC-bkgd
	this.instance_9 = new lib.Jaredbkgd300x600();
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(176));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-569.7,299.5,1040.1,303.5);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/PoV_Community_Display_Jared_300x600_atlas_P_1.png", id:"PoV_Community_Display_Jared_300x600_atlas_P_1"},
		{src:"images/PoV_Community_Display_Jared_300x600_atlas_NP_1.jpg", id:"PoV_Community_Display_Jared_300x600_atlas_NP_1"}
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