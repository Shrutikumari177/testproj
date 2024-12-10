sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
  ], (Controller) => {
    "use strict";
  
    return Controller.extend("masterdata.controller.VesselType", {
        onInit() {
            const oViewModel = new sap.ui.model.json.JSONModel({
                VesselCode: "",
                VesselDescription: "",
                
            });
            this.getView().setModel(oViewModel, "vesselTyp");
        },
        onSave: function () {
            const oODataModel = this.getView().getModel(); 
            const oLocalData = this.getView().getModel("vesselTyp").getData(); 
            const oListBinding = oODataModel.bindList("/VesselType"); 
            oListBinding.create(oLocalData).created().then(() => {
                sap.m.MessageBox.success("Vessel details saved successfully.");
                this.getView().getModel("vesselTyp").setData({});
            }).catch((oError) => {
                sap.m.MessageToast.show("Failed to save voyage details: " + oError.message);
            });

           
           
        }
        
      
        
    });
  });