var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'index';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.win = Ti.UI.createWindow(
	{ id: "win", backgroundColor: "white", layout: "vertical", exitOnClose: true });

	$.__views.win && $.addTopLevelView($.__views.win);
	$.__views.picker = Ti.UI.createPicker(
	{ id: "picker", top: 50, backgroundColor: "red", selectionIndicator: true, useSpinner: false });

	$.__views.win.add($.__views.picker);
	var __alloyId0 = [];$.__views.column1 = Ti.UI.createPickerColumn(
	{ id: "column1" });

	__alloyId0.push($.__views.column1);
	$.__views.__alloyId1 = Ti.UI.createPickerRow(
	{ title: "Bananas", id: "__alloyId1" });

	$.__views.column1.addRow($.__views.__alloyId1);
	$.__views.__alloyId2 = Ti.UI.createPickerRow(
	{ title: "Strawberries", id: "__alloyId2" });

	$.__views.column1.addRow($.__views.__alloyId2);
	$.__views.__alloyId3 = Ti.UI.createPickerRow(
	{ title: "Mangos", id: "__alloyId3" });

	$.__views.column1.addRow($.__views.__alloyId3);
	$.__views.__alloyId4 = Ti.UI.createPickerRow(
	{ title: "Grapes", id: "__alloyId4" });

	$.__views.column1.addRow($.__views.__alloyId4);
	$.__views.picker.add(__alloyId0);
	exports.destroy = function () {};




	_.extend($, $.__views);


	$.win.open();









	_.extend($, exports);
}

module.exports = Controller;