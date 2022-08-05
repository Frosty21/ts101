function add(n1: number, n2: number, showR?: boolean, phrase?: string) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("incorrect input");
  }
  const result = n1 + n2;
  if (showR && phrase!) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const num1 = 5;
const num2 = 2.8;
const showR = true;
const phrase = "qwerty... ";

const result = add(num1, num2, true, phrase);
console.log(result);

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "foo",
  age: 12,
  hobbies: ["bar", "brr"],
  role: [21, "poolboy"],
};

person.role.push("admin");
console.log(person);
