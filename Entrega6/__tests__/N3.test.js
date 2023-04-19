const {
    getEmployee,
    getSalary,
    returnDouble
} = require("../app/N3");


jest.mock('../app/data.json',() => {
    {employees = [{
        id: 1,
        name: 'Linux Torvalds'
    }, {
        id: 2,
        name: 'Bill Gates'
    },{
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
    }]}
    
});

const fileJson = require ("../app/data.json");


describe(" Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2", () => {
    test("Promise getEmployee resolve", () => {
        // return getEmployee(1).then((value) => expect(value).toStrictEqual({
        //     id: 1,
        //     name: 'Linux Torvalds'
        // }))
        return expect(getEmployee(1)).resolves.toStrictEqual({
            id: 1,
            name: 'Linux Torvalds'
        })
    })

    test("Promise getEmployee reject", () => {
        const value = 5;
        return expect(getEmployee(value)).rejects.toStrictEqual(`El id ${value} introducido no existe`);
    })

    test("Promise getSalary resolve", () => {
        const object = {
            id: 2,
            name: 'Bill Gates'
        };
        return expect(getSalary(object)).resolves.toStrictEqual(1000);

    })

    test("Promise getSalary reject", () => {
        const object = {
            id: 5,
            name: 'Bill Gates'
        };
        return expect(getSalary(object)).rejects.toStrictEqual("El objecto introducido no se encuentra");

    })
});

describe("Exercici Async / Await, crea tests que forcin errors", () => {
    test("Given the number -4 as the parameter, when we call the function using the jest fake timers, then we expect an error.",  async () => {
        //given
        const value = -4;
        //when
        jest.useFakeTimers();
        const result = returnDouble(value);
        const expectedResult = "Error, introduzca un numero positivo";
        jest.runAllTimers();
        //then
        await expect(result).rejects.toStrictEqual(expectedResult);
    })

    test("Given the string as the parameter, when we call the function using the jest fake timers, then we expect an error.",  async () => {
        //given
        const value = "string";
        //when
        jest.useFakeTimers();
        const result = returnDouble(value);
        const expectedResult = "Error, introduzca un numero";
        jest.runAllTimers();
        //then
        await expect(result).rejects.toStrictEqual(expectedResult);
    })
});