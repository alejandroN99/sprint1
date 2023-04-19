const {returnDouble,
  Person,
  createObject,
  Person2,
  CreatePerson
} = require("../app/N2.js")

describe(" Async / Await N2 E1", () => {
    test ("Check the result of setTimeout() with the jest fake timers", async () => {
    //given
    jest.useFakeTimers();
    const promise = returnDouble(2);
    //when
    jest.runAllTimers();
    //then
    await expect(promise).resolves.toBe(4);

    })
});

describe("Classes & Arrow Functions - N2 E2 ", () => {
    test('Check the calls to the constructor and method of the Person class.', () => {
      //given
        const PersonaMock = jest.fn(() => ({
          sayName: jest.fn(),
        }));
        const persona = new PersonaMock('Joan');
        
        //when
        persona.sayName();
        
        //then
        expect(PersonaMock).toHaveBeenCalledTimes(1);
        expect(PersonaMock).toHaveBeenCalledWith('Joan');
        expect(persona.sayName).toHaveBeenCalledTimes(1);
      });
});

describe("Classes & Arrow Functions N3 E1.", () => {
  test("Check error in Person2 constructor", () => {
    expect(() => new Person2()).toThrow("Error en el constructor");
  })
  test("Check object creator function", () => {
    const createObj = createObject('Alejandro');
    expect(createObj).toEqual(expect.objectContaining({username: "Alejandro"}))
  })
});




