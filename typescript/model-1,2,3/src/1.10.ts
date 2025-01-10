{
  //

  type Front = "badDeveloper" | "FullStack Developer";
  const Developer: Front = "badDeveloper";

  type User = {
    name: string;
    number: number;
    gender?: "male" | "female";
    email?: string;
  };

  type Address = {
    area: string;
    road: number;
  };

  type All = User & Address;

  const student: User = {
    name: "zubi",
    number: 232323,
    gender: "male",
  };

  const Data: All = {
    name: "z",
    number: 121212,
    area: "y",
    road: 123,
  };

  //
}
