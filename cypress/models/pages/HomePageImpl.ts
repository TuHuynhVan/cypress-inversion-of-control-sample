import {HomePageUtil} from "./HomePageUtil";
import {inject, injectable} from "inversify";
import {DIRECTORY_TYPES} from "../../support/containers/homepage.symbols";
import {GreetingUtil} from "../utils/GreetingUtil";

@injectable()
export class HomePageImpl implements HomePageUtil {

    private _greeting : GreetingUtil;

    constructor(@inject(DIRECTORY_TYPES.GreetingUtil) greeting : GreetingUtil) {
        this._greeting = greeting;
    }


    sayHello(): void {
        this._greeting.greeting();
        cy.log('From standard hp implementation')
    }

}