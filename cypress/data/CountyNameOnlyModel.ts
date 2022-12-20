import {Expose} from "class-transformer";

export class CountyNameOnlyModel {
    @Expose()
    CountyName: string;
}