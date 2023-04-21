const {
    getEmployee,
    getSalary,
    returnDouble
} = require("../app/N3");


jest.mock('../app/data.json', () => {
    {
        employees = [{
                id: 1,
                name: 'Linux Torvalds'
            }, {
                id: 2,
                name: 'Bill Gates'
            }, {
                id: 3,
                name: 'Jeff Bezos'
            }],
            salaries = [{
                id: 1,
                salary: 4000
            }, {
                id: 2,
                salary: 1000
            }, {
                id: 3,
                salary: 2000
            }]
    }

});


describe(" Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2", () => {
    test("Promise getEmployee resolve", () => {

        return expect(getEmployee(1)).resolves.toEqual({
            id: 1,
            name: 'Linux Torvalds'
        })
    })

    test("Promise getEmployee reject", () => {
        const value = 5;
        return expect(getEmployee(value)).rejects.toEqual(`El id ${value} introducido no existe`);
    })

    test("Promise getSalary resolve", () => {
        const object = {
            id: 2,
            name: 'Bill Gates'
        };
        return expect(getSalary(object)).resolves.toEqual(1000);

    })

    test("Promise getSalary reject", () => {
        const object = {
            id: 5,
            name: 'Bill Gates'
        };
        return expect(getSalary(object)).rejects.toEqual("El objecto introducido no se encuentra");

    })
});

describe("Exercici Async / Await, crea tests que forcin errors", () => {
    test("Given the number -4 as the parameter, when we call the function using the jest fake timers, then we expect an error.", async () => {
        const value = -4;

        jest.useFakeTimers();
        const result = returnDouble(value);
        const expectedResult = "Error, introduzca un numero positivo";
        jest.runAllTimers();

        await expect(result).rejects.toEqual(expectedResult);
    })

    test("Given the string as the parameter, when we call the function using the jest fake timers, then we expect an error.", async () => {

        const value = "string";

        jest.useFakeTimers();
        const result = returnDouble(value);
        const expectedResult = "Error, introduzca un numero";
        jest.runAllTimers();

        await expect(result).rejects.toEqual(expectedResult);
    })
});