import {Container} from 'inversify'
import {DIRECTORY_TYPES} from './homepage.symbols'
import {HomePageUtil} from '../../models/pages/HomePageUtil'
import {HomePageImpl} from '../../models/pages/HomePageImpl'
import {HomePageImpl} from '../../models/pages/HomePageImpl'
import {HomePageVariantImpl} from "../../models/pages/HomePageVariantImpl";

export const homePageContainer = new Container()
export const homePageVariantContainer = new Container()

homePageContainer
    .bind<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil)
    .to(HomePageImpl);

homePageVariantContainer
    .bind<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil)
    .to(HomePageVariantImpl);