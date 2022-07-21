class department {
  static fiscalYear = 2020;
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    console.log(department.fiscalYear);
  }
  //   name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

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
class AccountingDepartment extends department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass in a valid value!");
    }
    this.addReport(value);
  }

  addEmployee(name: string) {
    if (name === "nath") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

class ITDepartment extends department {
  admins: string[];
  constructor(id: string, admins: string[], private reports: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const employee1 = department.createEmployee("Beep");
console.log(employee1);
const accounting = new AccountingDepartment("foo", []);

accounting.addEmployee("nath");
accounting.addEmployee("Bar");
accounting.addEmployee("Foo");
accounting.printEmployeeInfo();

accounting.mostRecentReport = "YER";
console.log(accounting.mostRecentReport);
accounting.addReport("Some report");
accounting.printReports();
// // this will careate and error if employees is private making in unaccesable unless within the class
// accounting.employees[2] = "BAHAH...";

// accounting.describe();
// accounting.printEmployeeInfo();
// accounting.describe();

// const acctCopy = { name: "hello", describe: accounting.describe };

// acctCopy.describe();
