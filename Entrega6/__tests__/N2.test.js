const {
  returnDouble,
  createObject,
  Person2,
} = require("../app/N2.js")

describe(" Async / Await N2 E1", () => {
  test("Check the result of setTimeout() with the jest fake timers", async () => {

    jest.useFakeTimers();
    const promise = returnDouble(2);

    jest.runAllTimers();

    await expect(promise).resolves.toBe(4);

  })
});

describe("Classes & Arrow Functions - N2 E2 ", () => {
  test('Check the calls to the constructor and method of the Person class.', () => {

    const PersonaMock = jest.fn(() => ({
      sayName: jest.fn(() => 'Juan'),
    }));
    const persona = new PersonaMock('Juan');

    persona.sayName();

    expect(PersonaMock).toHaveBeenCalledTimes(1);
    expect(PersonaMock).toHaveBeenCalledWith('Juan');
    expect(persona.sayName).toHaveBeenCalledTimes(1);

    expect(persona.sayName()).toEqual('Juan');
  });
});

describe("Classes & Arrow Functions N3 E1.", () => {
  test("Check error in Person2 constructor", () => {
    expect(() => new Person2()).toThrow("Error en el constructor");
  })
  test("Check object creator function", () => {
    const createObj = createObject('Alejandro');
    expect(createObj).toEqual(expect.objectContaining({
      username: "Alejandro"
    }))
  })
});