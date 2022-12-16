import {HomePageUtil} from "../models/pages/HomePageUtil";
import {homePageContainer, homePageVariantContainer} from "../support/containers/homepage.inversify.config";
import {DIRECTORY_TYPES} from "../support/containers/homepage.symbols";

describe('Inversion demo', () => {

    let homePage: HomePageUtil;
    let homePageVariant: HomePageUtil;

    before(() => {
        homePage = homePageContainer.get<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil);
        homePageVariant = homePageVariantContainer.get<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil);
    })

    it('should be able to get the instance of standard HP', () => {
        homePage.sayHello();
    });

    it('should be able to get the instance of variant HP', () => {
        homePageVariant.sayHello();
    });

});