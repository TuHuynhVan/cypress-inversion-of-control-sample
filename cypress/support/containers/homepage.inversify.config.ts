import {Container} from 'inversify'
import {DIRECTORY_TYPES} from './homepage.symbols'
import {HomePageUtil} from '../../models/pages/HomePageUtil'
import {HomePageImpl} from '../../models/pages/HomePageImpl'
import {HomePageVariantImpl} from "../../models/pages/HomePageVariantImpl";
import {GreetingUtil} from "../../models/utils/GreetingUtil";
import {EnglishGreeting} from "../../models/utils/EnglishGreeting";

export const homePageContainer = new Container()
export const homePageVariantContainer = new Container()

homePageContainer
    .bind<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil)
    .to(HomePageImpl);

homePageContainer
    .bind<GreetingUtil>(DIRECTORY_TYPES.GreetingUtil)
    .to(EnglishGreeting);

homePageVariantContainer
    .bind<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil)
    .to(HomePageVariantImpl);