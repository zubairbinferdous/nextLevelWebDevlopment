{
  type U = {
    name: string;
    number: number;
  };
  interface U2 {
    name: string;
    number: number;
  }
  const user: U = {
    name: "hello",
    number: 1231,
  };
  const user2: U2 = {
    name: "hello",
    number: 1231,
  };

  type RoleAdd = U & { role: number };

  interface userHug extends U {
    role: string;
  }

  const baba: RoleAdd = {
    name: "tum",
    number: 123,
    role: 23123,
  };

  type A = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const data: Roll2 = [1, 2, 3, 4];

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
}
