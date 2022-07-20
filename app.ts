class department {
  constructor(n: string) {
    this.name = n;
  }
  name: string;
  describe(this: department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new department("Accounting");

accounting.describe();

const acctCopy = { name: "hello", describe: accounting.describe };

acctCopy.describe();
