/*globals BasePlugin */
/*
    High Shelf
    A 2nd order biquad high shelf filter
*/
var HighShelf = function (factory, owner) {

    // This attaches the base plugin items to the Object
    BasePlugin.call(this, factory, owner);

    /* USER MODIFIABLE BEGIN */
    // Only modify between this line and the end of the object!

    var inputNode = this.context.createGain(),
        outputNode = this.context.createGain(),
        filter = this.context.createBiquadFilter();

    filter.type = "highshelf";

    inputNode.connect(filter);
    filter.connect(outputNode);

    var frequency = this.parameters.createNumberParameter("frequency", 8000, 10, 20000);
    var gain = this.parameters.createNumberParameter("gain", 0, -24, +24);

    frequency.bindToAudioParam(filter.frequency);
    gain.bindToAudioParam(filter.gain);

    this.addInput(inputNode);
    this.addOutput(outputNode);
};

// Also update the prototype function here!
HighShelf.prototype = Object.create(BasePlugin.prototype);
HighShelf.prototype.constructor = HighShelf;
HighShelf.prototype.name = "HighShelf";
HighShelf.prototype.version = "1.0.0";
HighShelf.prototype.uniqueID = "JSHS";
