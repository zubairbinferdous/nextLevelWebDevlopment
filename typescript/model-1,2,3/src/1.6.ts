function add(one: number, two: number): number {
  return one + two;
}
add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object -> function -> method

const poorUser = {
  name: "zubi",
  balance: 0,
  addBalance(balance: number): string {
    return `this is our amount ${this.balance + balance}`;
  },
};

const arr: number[] = [10, 11, 15];
const newArray: number[] = arr.map((e: number): number => e * e);
