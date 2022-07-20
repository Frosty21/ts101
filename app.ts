class department {
  constructor(n: string) {
    this.name = n;
  }
  name: string;
  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new department("Accounting");

accounting.describe();

const acctCopy = { describe: accounting.describe };

acctCopy.describe();
