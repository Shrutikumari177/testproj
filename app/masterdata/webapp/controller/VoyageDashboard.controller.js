sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("masterdata.controller.VoyageDashboard", {
        onInit() {
        },
        onPressVoyageType: function(){
            const pathFuel = this.getOwnerComponent().getRouter();
            pathFuel.navTo("RouteVoyage");
        },
        onPressVesselType: function(){
            const pathFuel = this.getOwnerComponent().getRouter();
            pathFuel.navTo("RouteVessel");
        },
    });
});