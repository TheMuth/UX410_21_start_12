sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
    "studentXX/sap/training/ex_12dynamicpage/model/models",
    "studentXX/sap/training/ex_12dynamicpage/controller/ListSelector"
], function (UIComponent, Device, models, ListSelector) {
	"use strict";

	return UIComponent.extend("studentXX.sap.training.ex_12dynamicpage.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
            this.oListSelector = new ListSelector();
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			// enable routing
			this.getRouter().initialize();
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});