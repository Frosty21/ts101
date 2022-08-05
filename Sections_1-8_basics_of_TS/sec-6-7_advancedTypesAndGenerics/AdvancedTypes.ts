type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "joe",
  privileges: ["create-server"],
  startDate: new Date(),
};
// example of intersection type
type Combine = string | number;
type Numeric = number | boolean;

type Universal = Combine & Numeric;

function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: number, b: number): number;
function add2(a: Combine, b: Combine) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result2 = add2("Nate", " Fries");
result2.split(" ");

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name:" + emp.name);
  // one way of typeguard
  if ("privileges" in emp) {
    console.log("privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}
class Truck {
  constructor() {}
  drive() {
    console.log("Driving a truck..");
  }
  loadCargo(amt: number) {
    console.log("loading cargo..." + amt);
  }
}

type Vehicle = Car | Truck;

const veh1 = new Car();
const veh2 = new Truck();

function useVehicle(veh: Vehicle) {
  veh.drive();
  if (veh instanceof Truck) {
    veh.loadCargo(500);
  }
}
useVehicle(veh1);
useVehicle(veh2);

interface ErrorContainer {
  //{email: "not valid email", username: "Must start with a ..."}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "invalid email please use another one with @...",
  userName: "Must start with a capital letter",
};
