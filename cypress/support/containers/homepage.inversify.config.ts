import {Container} from 'inversify'
import {DIRECTORY_TYPES} from './homepage.symbols'
import {HomePageUtil} from '../../models/pages/HomePageUtil'
import {GreetingUtil} from "../../models/utils/GreetingUtil";
import {EnglishGreeting} from "../../models/utils/EnglishGreeting";
import {HomePageXImpl} from "../../models/pages/HomePageXImpl";
import {HomePageYImpl} from "../../models/pages/HomePageYImpl";
import {HomePageFactory} from "../../models/pages/HomePageFactory";
import {HomePageFactoryUtil} from "../../models/pages/HomePageFactoryUtil";

export const homePageContainer = new Container()

homePageContainer
    .bind<HomePageFactory>(DIRECTORY_TYPES.HomePageFactoryImpl)
    .to(HomePageFactory)

homePageContainer
    .bind<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil)
    .to(HomePageXImpl)
    .whenTargetNamed(DIRECTORY_TYPES.HomePageX);

homePageContainer
    .bind<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil)
    .to(HomePageYImpl)
    .whenTargetNamed(DIRECTORY_TYPES.HomePageY);

homePageContainer
    .bind<GreetingUtil>(DIRECTORY_TYPES.GreetingUtil)
    .to(EnglishGreeting);
