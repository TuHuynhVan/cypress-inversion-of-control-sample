import {plainToClass} from 'class-transformer';
import {CountyDataModel} from '../data/CountyDataModel';

describe('class-transformer exploring', () => {
    const dummyRes = [
        {
            "CountyFIPS": "29189",
            "CountyName": "St. Louis",
            "State": "MO"
        },
        {
            "CountyFIPS": "2918999",
            "CountyName": "St. Louisss",
            "State": "MOOO"
        }
    ]
    dummyRes.forEach(countyDataJSON => {
        it('should be able to convert a DUMMY content response to object ', () => {
            const countyDataObj = plainToClass(CountyDataModel, countyDataJSON);
            cy.log('CountyFIPS: ' + countyDataObj.CountyFIPS)
            cy.log('CountyName: ' + countyDataObj.CountyName)
            cy.log('State: ' + countyDataObj.State)
        });
    })

    it('should be able to convert a REAL content response to object ', () => {
        const REQ_URL = 'https://p-gsg.digitaledge.cigna.com/igse/connecturedrx2?action=fip-finder&zip=63043';
        const REQ_OBJECT = {
            method: 'GET',
            url: REQ_URL
        }
        cy.request(REQ_OBJECT).then(response => {
            expect(response.body).to.have.length(1, 'Verifying county data length')
            const theOnlyCounty = response.body[0];
            const countyDataObj = plainToClass(CountyDataModel, theOnlyCounty);
            cy.log('CountyFIPS: ' + countyDataObj.CountyFIPS)
            cy.log('CountyName: ' + countyDataObj.CountyName)
            cy.log('State: ' + countyDataObj.State)
        })
    });

});

