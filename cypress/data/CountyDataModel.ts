export class CountyDataModel {
    CountyFIPS: string;
    CountyName: string;
    State: string;

    get countyFIPS(){
        return this.CountyFIPS;
    }
}