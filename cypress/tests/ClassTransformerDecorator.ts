import {plainToClass} from 'class-transformer';
import {CountyDataModel} from '../data/CountyDataModel';
import {CountyNameOnlyModel} from '../data/CountyNameOnlyModel';

describe('class-transformer exploring', () => {

    // Contains 2 object with the properties are sightly different for start letters
    const dummyRes = [
        {
            "countyFIPS": "29189",
            "countyName": "St. Louis",
            "state": "MO"
        },
        {
            "CountyFIPS": "29189",
            "CountyName": "St. Louis",
            "State": "MO"
        }
    ]

    it('should be able to compare 2 data objects', () => {
        const lowerCaseData = dummyRes[0];
        const upperCaseData = dummyRes[1];
        const lowerCaseDataObj = plainToClass(CountyDataModel, lowerCaseData);
        const upperCaseDataObj = plainToClass(CountyDataModel, upperCaseData, {ignoreDecorators: true});
        expect(lowerCaseDataObj).to.be.deep.eq(upperCaseDataObj);
    });

    it('should be able to expose some data from long response data', () => {
        const REQ_URL = 'https://p-gsg.digitaledge.cigna.com/igse/connecturedrx2?action=fip-finder&zip=63043';
        const REQ_OBJECT = {
            method: 'GET',
            url: REQ_URL
        }
        cy.request(REQ_OBJECT).then(response => {
            expect(response.body).to.have.length(1, 'Verifying county data length');
            const theOnlyCounty = response.body[0];
            const countyDataObj = plainToClass(CountyNameOnlyModel, theOnlyCounty, {excludeExtraneousValues: true});
            expect(countyDataObj).have.property('CountyName');
            expect(countyDataObj).have.not.property('CountyFIPS');
            expect(countyDataObj).have.not.property('State');
        })
    });

});

