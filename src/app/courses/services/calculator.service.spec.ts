import { TestBed } from "@angular/core/testing";
import { any } from "cypress/types/bluebird";
import { CoursesCardListComponent } from "../courses-card-list/courses-card-list.component";
import { CalculatorService } from "./calculator.service";
import { CoursesService } from "./courses.service";
import { LoggerService } from "./logger.service";

describe('Calculator', () => {

    let calculator: CalculatorService;
    let loggerSpy: any;
    beforeEach( () => {
        //console.log('BeforeEach Calculator')
        loggerSpy = jasmine.createSpyObj('Logger', ["log"]);
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        });
        calculator = TestBed.get(CalculatorService);
    });

    it('shoud add two numbers', () => {
        //console.log('add test')
        const result = calculator.add(2,2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('shoud add two numbers', () => {
        //console.log('subtract test')
        const result = calculator.subtract(2,2);
        expect(result).toBe(0, "unexpecte subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

});