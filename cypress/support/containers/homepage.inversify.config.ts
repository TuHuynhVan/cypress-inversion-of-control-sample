import {Container} from 'inversify'
import {DIRECTORY_TYPES} from './homepage.symbols'
import {HomePageUtil} from '../../models/pages/HomePageUtil'
import {HomePageImpl} from '../../models/pages/HomePageImpl'

export const homePageContainer = new Container()

homePageContainer
    .bind<HomePageUtil>(DIRECTORY_TYPES.HomePageUtil)
    .to(HomePageImpl);