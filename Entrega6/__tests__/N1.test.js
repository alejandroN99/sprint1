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
    
            // given
            const num1 = 2
            const num2 = 2
            const expectedResult = 4
    
            // when
            const result = add(num1, num2)
    
            // then
            expect(result).toBe(expectedResult);
        });
    
        test("Given an argument with a different type of number when the add function is called then it throws an error", () => {
            //given
            const num1 = 2;
            const num2 = "two";
            const expectedResult = "Error, both arguments have to be type number"
    
            try {
                
                //when
                const result = add(num1, num2);
    
            } catch (error) {
    
                //then
                expect(error.message).toBe(expectedResult);
            }
    
        })
    
    
    
    });
    
    describe("substract", () => {
        test("Given 2 and 2 when I call to substract function with this numbers then result should be 0", () => {
    
            //given
            const num1 = 2;
            const num2 = 2;
            const expectedResult = 0;
    
            //when
            const result = substract(num1, num2);
    
            //then
            expect(result).toBe(expectedResult);
    
        })
    
    
    });
    
    describe("multiply", () => {
        test("Given 5 and 5 when I call to multiply function with this numbers then result should be 25", () => {
    
            //given
            const num1 = 5;
            const num2 = 5;
            const expectedResult = 25;
    
            //when
            const result = multiply(num1, num2);
    
            //then
            expect(result).toBe(expectedResult);
        })
    });
    
    describe("divide", () => {
        test("Given 10 and 2 when I call to divide function with this numbers then result should be 5", () => {
    
            //given
            const num1 = 10;
            const num2 = 2;
            const expectedResult = 5;
    
            //when
            const result = divide(num1, num2);
    
            //then
            expect(result).toBe(expectedResult);
        })
    });
    
})

describe("Promises i Callbacks N1 E2.", () => {
    test("Given 5 and mockCallback when I call the functionCallback function with this parameters then recived correct message",() => {
            //given
            const mockCallback = jest.fn();
            const param = 5;

            //when
            functionCallback(param, mockCallback);

            //then
            expect(mockCallback).toHaveBeenCalledWith(`El valor es positivo:${param}`);
        })

    test("Given 5 and mockCallback when I call the functionCallback function with this parameters then recived correct message", () => {
        //given - arrange
        const mockCallback = jest.fn();
        const param = -5;

        //when - act
        functionCallback(param, mockCallback);

        //then - assert
        expect(mockCallback).toHaveBeenCalledWith(`El valor es negativo:${param}`);
    })
});

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
})

describe(" Async / Await N1 E2.",() => {
    test("", async () => {
        
        const promiseTwoSeconds = await twoSeconds();
        return expect(promiseTwoSeconds).toBe(console.log("You have waited two seconds")) 
    })
    
});

// const getEmployee = (value) => {
//     return new Promise ((resolve,reject) => {
    
//     const employeeFound = employees.find( (employee) => employee.id === value )
//     employeeFound ? resolve(employeeFound) : reject(`El id ${value} introducido no existe`)
//     })
// };
// test('myFunction llama a la callback con el mensaje correcto para un número negativo', () => {
//     const mockCallback = jest.fn();
//     myFunction(-5, mockCallback);
//     expect(mockCallback).toHaveBeenCalledWith('El parámetro -5 es menor que 0');
//   });

//   test('myFunction llama a la callback con el mensaje correcto para un número positivo', () => {
//     const mockCallback = jest.fn();
//     myFunction(5, mockCallback);
//     expect(mockCallback).toHaveBeenCalledWith('El parámetro 5 es mayor o igual que 0');
//   });