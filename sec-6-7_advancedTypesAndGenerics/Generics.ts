// Generics
function merge<T extends object, U extends object>(obA: T, obB: U) {
  return Object.assign(obA, obB);
}

const mergedObj = merge({ name: "nate" }, { age: 30 });
// const mergedObj = merge({ name: "nate", hobbies: ["sports", "coding"] }, 30);

// This 30 will fail silently because 30 isn't object assigned. if we put extends object with T and U 30 will now give an error at compile time
// const mergedObj = merge({ name: "nate", hobbies: ["sports", "coding"] }, 30);

console.log(mergedObj);

type Lengths = {
  length: number;
};

// Generic Function
function countAndDescribe<T extends Lengths>(element: T): [T, string] {
  let descTxt = "Got no value";
  if (element.length === 1) {
    descTxt = `Got ` + element.length + ` element`;
  } else if (element.length > 1) {
    descTxt = `Got ` + element.length + ` elements`;
  }
  return [element, descTxt];
}

console.log(countAndDescribe(["Sports", "cooking", "camping"]));

// keyof example
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value " + obj[key];
}

console.log(extractAndConvert({ name: "nath" }, "name"));

// Generic Classes
// T extends with primitive types allows only primitive types to be used not non primitive
class DataStorage<T extends string | number | boolean> {
  constructor(private data: T[] = []) {}
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("nath");
textStorage.addItem("lukas");
textStorage.removeItem("nath");
console.log(textStorage.getItems());

// const objectStorage = new DataStorage<object>();

// Generics Utility types
type CourseGoal = {
  title: string;
  description: string;
  completeUntil: Date;
};

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partial skips certain checks
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // you know that you will get that type CourseGoal hence type casting to convert the Partial
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Foo", "Bar"];
// names.push('Manu');
// names.pop()''
