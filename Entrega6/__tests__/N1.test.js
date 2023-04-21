const {
    add,
    substract,
    multiply,
    divide,
    functionCallback,
    getEmployee,
    getSalary,
    twoSeconds
} = require("../app/N1");
describe('calculator', () => {

    describe("add", () => {
        test("Given 2 and 2 when I call to add function with this numbers then result should be 4", () => {

            const num1 = 2
            const num2 = 2
            const expectedResult = 4

            const result = add(num1, num2)

            expect(result).toBe(expectedResult);
        });

        test("Given an argument with a different type of number when the add function is called then it throws an error", () => {

            const num1 = 2;
            const num2 = "two";
            const expectedResult = "Error, both arguments have to be type number"

            try {
                add(num1, num2);

            } catch (error) {

                expect(error.message).toBe(expectedResult);
            }

        })



    });

    describe("substract", () => {
        test("Given 2 and 2 when I call to substract function with this numbers then result should be 0", () => {

            const num1 = 2;
            const num2 = 2;
            const expectedResult = 0;

            const result = substract(num1, num2);

            expect(result).toBe(expectedResult);

        })


    });

    describe("multiply", () => {
        test("Given 5 and 5 when I call to multiply function with this numbers then result should be 25", () => {

            const num1 = 5;
            const num2 = 5;
            const expectedResult = 25;

            const result = multiply(num1, num2);

            expect(result).toBe(expectedResult);
        })
    });

    describe("divide", () => {
        test("Given 10 and 2 when I call to divide function with this numbers then result should be 5", () => {

            const num1 = 10;
            const num2 = 2;
            const expectedResult = 5;

            const result = divide(num1, num2);

            expect(result).toBe(expectedResult);
        })

        test("Given a parameter with number 0 when I call function divide then it trows an error", () => {

            const num1 = 5;
            const num2 = 0;
            const expectResult = ('Error, no sepuede dividir entre 0');

            try {
                const result = divide(num1, num2);
            } catch (error) {
                expect(error.message).toEqual(expectResult);
            }
        })
    });

})

describe("Promises i Callbacks N1 E2.", () => {
    test("Given 5 and mockCallback when I call the functionCallback function with this parameters then recived correct message", () => {

        const mockCallback = jest.fn();
        const param = 5;

        functionCallback(param, mockCallback);

        expect(mockCallback).toHaveBeenCalledWith(`El valor es positivo:${param}`);
    })

    test("Given 5 and mockCallback when I call the functionCallback function with this parameters then recived correct message", () => {

        const mockCallback = jest.fn();
        const param = -5;

        functionCallback(param, mockCallback);

        expect(mockCallback).toHaveBeenCalledWith(`El valor es negativo:${param}`);
    })
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
})

describe(" Async / Await N1 E2.", () => {
    test("When I call and wait the function twoSeconds() then recived correct message of the promise", async () => {

        const promiseTwoSeconds = await twoSeconds();
        return expect(promiseTwoSeconds).toBe(console.log("You have waited two seconds"))
    })

});