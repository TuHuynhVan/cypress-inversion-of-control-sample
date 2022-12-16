import {HomePageUtil} from "./HomePageUtil";
import {injectable} from "inversify";

@injectable()
export class HomePageImpl implements HomePageUtil {

    sayHello(): void {
        cy.log('From standard hp implementation')
    }

}