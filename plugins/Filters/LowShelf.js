/*globals BasePlugin */
/*
    Low Shelf
    A 2nd order biquad high shelf filter
*/
var LowShelf = function (factory, owner) {

    // This attaches the base plugin items to the Object
    BasePlugin.call(this, factory, owner);

    /* USER MODIFIABLE BEGIN */
    // Only modify between this line and the end of the object!

    var inputNode = this.context.createGain(),
        outputNode = this.context.createGain(),
        filter = this.context.createBiquadFilter();

    filter.type = "lowshelf";

    inputNode.connect(filter);
    filter.connect(outputNode);

    var frequency = this.parameters.createNumberParameter("frequency", 80, 10, 20000);
    var gain = this.parameters.createNumberParameter("gain", 0, -24, +24);

    frequency.bindToAudioParam(filter.frequency);
    gain.bindToAudioParam(filter.gain);

    this.addInput(inputNode);
    this.addOutput(outputNode);
};

// Also update the prototype function here!
LowShelf.prototype = Object.create(BasePlugin.prototype);
LowShelf.prototype.constructor = LowShelf;
LowShelf.prototype.name = "LowShelf";
LowShelf.prototype.version = "1.0.0";
LowShelf.prototype.uniqueID = "JSLS";
