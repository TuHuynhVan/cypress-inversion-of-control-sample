import {homePageContainer} from "../support/containers/homepage.inversify.config";
import {DIRECTORY_TYPES} from "../support/containers/homepage.symbols";
import {HomePageFactory} from "../models/pages/HomePageFactory";

describe('Inversion demo', () => {

    let homePageFactory: HomePageFactory;

    before(() => {
        homePageFactory = homePageContainer.get<HomePageFactory>(DIRECTORY_TYPES.HomePageFactoryImpl)
    })

    it('should be able to get the instance of standard HP', () => {
        homePageFactory.homePageX.sayHello();
    });

    it('should be able to get the instance of variant HP', () => {
        homePageFactory.homePageY.sayHello();
    });

});