using { mydb} from '../db/schema';
 

service Voyage{
     entity VoyageType as projection on mydb.VoyageType;
     entity VesselType as projection on mydb.VesselType;

}