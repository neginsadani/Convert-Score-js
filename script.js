let score = Number(prompt("Please enter your score:"));

if (score >= 90 && score <= 100) {
  console.log("A+");
} else if (score >= 80 && score <= 89) {
  console.log("A");
} else if (score >= 70 && score <= 79) {
  console.log("B+");
} else if (score >= 60 && score <= 69) {
  console.log("B");
} else if (score >= 50 && score <= 59) {
  console.log("C");
} else if (score <= 0 && score < 50) {
  console.log("D");
} else {
  console.log("you are not in class");
}
