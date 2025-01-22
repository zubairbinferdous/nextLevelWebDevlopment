{
  //

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  });

  const addCourseToStudent = <T>(student: T): {} => {
    const course = "Next Level Web Development";
    return {
      student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr zubi",
    email: "x@gmail.com",
    devType: "front_end",
  });

  const student2 = addCourseToStudent({
    name: "Mr nen",
    email: "y@gmail.com",
    hasWatch: "full stack",
  });

  //
}
