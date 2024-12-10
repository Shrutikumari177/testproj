sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
  ], (Controller) => {
    "use strict";
  
    return Controller.extend("masterdata.controller.VoyageType", {
        onInit() {
            const oViewModel = new sap.ui.model.json.JSONModel({
                VoyageCode: "",
                VoyageDescription: "",
                
            });
            this.getView().setModel(oViewModel, "voyTyp");
        },
        onSave: function () {
            const oODataModel = this.getView().getModel(); 
            const oLocalData = this.getView().getModel("voyTyp").getData(); 
            const oListBinding = oODataModel.bindList("/VoyageType"); 
            oListBinding.create(oLocalData).created().then(() => {
                sap.m.MessageBox.success("Voyage Type details saved successfully.");
                this.getView().getModel("voyTyp").setData({});
            }).catch((oError) => {
                sap.m.MessageToast.show("Failed to save voyage details: " + oError.message);
            });

           
           
        }
        
      
        
    });
  });