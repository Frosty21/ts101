class department {
  constructor(n: string) {
    this.name = n;
  }
  name: string;
  private employees: string[] = [];

  describe(this: department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new department("Accounting");

accounting.addEmployee("Bar");
accounting.addEmployee("Foo");

// // this will careate and error if employees is private making in unaccesable unless within the class
// accounting.employees[2] = "BAHAH...";

accounting.describe();
accounting.printEmployeeInfo();
// accounting.describe();

// const acctCopy = { name: "hello", describe: accounting.describe };

// acctCopy.describe();
