class Employee {
    constructor(firstName, familyName) {
        // ES7 enkapsulacija primjenom # ispred naziva atributa
        // nrp. this.#firstName = firstName
        // Ne preporucujem da ovo radite jos, rano je, nije dovoljno stabilno
        // https://github.com/tc39/proposal-private-methods

        // Jedan nacin, ali ovo nije klasicno sakrivanje atributa!
        this._firstName = firstName;
        this._familyName = familyName;
    }

    getFullName() {
        return `${this._firstName} ${this._familyName}`;
    }
}

class Manager extends Employee {
    constructor(firstName, familyName) {
        super(firstName, familyName);
        this._managedEmployees = [];
    }

    addEmployee(employee) {
        this._managedEmployees.push(employee);
    }
}

let e1 = new Employee("abc", "def")
console.log(e1);

