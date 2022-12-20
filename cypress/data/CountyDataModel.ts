import {Expose} from "class-transformer";

export class CountyDataModel {

    @Expose({name: 'countyFIPS'})
    CountyFIPS: string;
    @Expose({name: 'countyName'})
    CountyName: string;
    @Expose({name: 'state'})
    State: string;

}