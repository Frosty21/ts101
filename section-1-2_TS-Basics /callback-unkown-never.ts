function add1(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("result " + num);
}

// console.log(printResult(add1(12, 34)));

let combine: (n3: number, n4: number) => number;

combine = add1;
console.log(combine(3, 4));

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("An error occurred!", 500);
