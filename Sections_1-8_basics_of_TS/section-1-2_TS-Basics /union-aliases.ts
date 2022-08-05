function combination(i1: number | string, i2: string | number) {
  let result;
  if (typeof i1 === "number" && typeof i2 === "number") {
    return (result = i1 + i2);
  }
  if (typeof i1 === "string" && typeof i2 === "string") {
    return (result = i1.concat(" ", i2));
  } else {
    return (result = i1.toString().concat(" ", i2.toString()));
  }
}

console.log(combination("hmm", "qwerty"));
