/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"studentXX/sap/training/ex_12dynamicpage/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
