import {HomePageUtil} from "../models/pages/HomePageUtil";
import {homePageContainer} from "../support/containers/homepage.inversify.config";
import {DIRECTORY_TYPES} from "../support/containers/homepage.symbols";

describe('Inversion demo', () => {

    let homePageUtil: HomePageUtil

    before(() => {
        homePageUtil = homePageContainer.get<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil);
    })

    it('should be able to get the instance', () => {
        homePageUtil.sayHello();
    });

});