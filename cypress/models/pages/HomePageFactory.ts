import {inject, injectable, named} from "inversify";
import {HomePageUtil} from "./HomePageUtil";
import {DIRECTORY_TYPES} from "../../support/containers/homepage.symbols";

@injectable()
export class HomePageFactory {

    private readonly _homePageX: HomePageUtil
    private readonly _homePageY: HomePageUtil

    public constructor(
        @inject(DIRECTORY_TYPES.HomePageUtil) @named(DIRECTORY_TYPES.HomePageX) homePageX : HomePageUtil,
        @inject(DIRECTORY_TYPES.HomePageUtil) @named(DIRECTORY_TYPES.HomePageY) homePageY : HomePageUtil
    ) {
        this._homePageX = homePageX;
        this._homePageY = homePageY;
    }

    public get homePageX(): HomePageUtil {
        return this._homePageX
    }

    public get homePageY(): HomePageUtil {
        return this._homePageY
    }

}