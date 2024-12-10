const cds = require('@sap/cds');
 
 
module.exports = async ( srv) => {

    srv.on('CREATE', 'VoyageType', async req => {
        await cds.run(INSERT.into('mydb.VoyageType').entries(req.data));
        return cds.run(SELECT.from('mydb.VoyageType').where({VoyageCode : req.data.VoyageCode}))
    });
    srv.on('CREATE', 'VesselType', async req => {
        await cds.run(INSERT.into('mydb.VesselType').entries(req.data));
        return cds.run(SELECT.from('mydb.VesselType').where({VesselCode : req.data.VesselCode}))
    });
    

}