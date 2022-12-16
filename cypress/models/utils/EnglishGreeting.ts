import {GreetingUtil} from "./GreetingUtil";
import {injectable} from "inversify";

@injectable()
export class EnglishGreeting implements GreetingUtil {

    greeting(): void {
        cy.log("Hello there!")
    }

}

