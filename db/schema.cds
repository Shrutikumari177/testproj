namespace mydb;

entity VoyageType{
    Key VoyageCode :String(30);
    VoyageDescription :String(255);
}

entity VesselType{
    Key VesselCode :String(30);
    VesselDescription :String(255)
}