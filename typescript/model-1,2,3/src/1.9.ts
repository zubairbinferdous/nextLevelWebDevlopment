{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender?: string;
  };

  const student: Student = {
    name: "zubi",
    age: 10,
    gender: "male",
  };

  const student2: Student = {
    name: "zubi khan ",
    age: 20,
  };

  console.log(student, student2);

  type OurGroup = string;
  const group: OurGroup = "ourGroup";

  type Add = (n: number, n2: number) => number;
  const add: Add = (n, y) => n + y;
}
