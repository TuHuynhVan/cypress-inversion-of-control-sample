import {HomePageUtil} from "./HomePageUtil";
import {injectable} from "inversify";

@injectable()
export class HomePageYImpl implements HomePageUtil {

    sayHello(): void {
        cy.log('From variant hp implementation')
    }

}