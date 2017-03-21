var React = require("react");
var locator = require("live_w_locator");

var CheckerCamera = React.createClass({
    render: function () {
       return (
            <section id="container" className="container">

        <div className="controls">
            <fieldset className="input-group">
                <button className="stop">Stop</button>
            </fieldset>
            <fieldset className="reader-config-group">
                <label>
                    <span>Barcode-Type</span>
                    <select name="decoder_readers">
                        <option value="code_128">Code 128</option>
                        <option value="code_39">Code 39</option>
                        <option value="code_39_vin">Code 39 VIN</option>
                        <option selected="selected" value="ean">EAN</option>
                        <option value="ean_extended">EAN-extended</option>
                        <option value="ean_8">EAN-8</option>
                        <option value="upc">UPC</option>
                        <option value="upc_e">UPC-E</option>
                        <option value="codabar">Codabar</option>
                        <option value="i2of5">ITF</option>
                    </select>
                </label>
                <label>
                    <span>Resolution (long side)</span>
                    <select name="input-stream_constraints">
                        <option value="320x240">320px</option>
                        <option selected="selected" value="640x480">640px</option>
                        <option value="800x600">800px</option>
                        <option value="1280x720">1280px</option>
                        <option value="1600x960">1600px</option>
                        <option value="1920x1080">1920px</option>
                    </select>
                </label>
                <label>
                    <span>Patch-Size</span>
                    <select name="locator_patch-size">
                        <option value="x-small">x-small</option>
                        <option value="small">small</option>
                        <option selected="selected" value="medium">medium</option>
                        <option value="large">large</option>
                        <option value="x-large">x-large</option>
                    </select>
                </label>
                <label>
                    <span>Half-Sample</span>
                    <input type="checkbox" checked="checked" name="locator_half-sample" />
                </label>
                <label>
                    <span>Workers</span>
                    <select name="numOfWorkers">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected="selected" value="4">4</option>
                        <option value="8">8</option>
                    </select>
                </label>
                <label>
                    <span>Camera</span>
                    <select name="input-stream_constraints" id="deviceSelection">
                    </select>
                </label>
            </fieldset>
        </div>
      <div id="result_strip">
        <ul className="thumbnails"></ul>
        <ul className="collector"></ul>
      </div>
      <div id="interactive" className="viewport"></div>
    </section>
    );
   } 
});

module.exports = CheckerCamera;
