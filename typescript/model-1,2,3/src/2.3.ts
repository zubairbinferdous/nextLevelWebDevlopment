{
  //
  type generic<t> = Array<t>;
  const rollNumber: number[] = [22, 33, 55];
  const mentors: Array<string> = ["zubi", "ma", "sao"];
  const bool: generic<boolean> = [true, false, true];

  const user: generic<object> = [
    {
      name: "zubi",
      age: 20,
    },
    {
      name: "zubi khan",
      age: 30,
    },
  ];
  const user2: generic<{ name: string; age: number }> = [
    {
      name: "zubi",
      age: 20,
    },
    {
      name: "zubi khan",
      age: 30,
    },
  ];

  //  generic tuple

  type genericTuple<t, y> = [t, y];

  const userRole: genericTuple<string, number> = ["zubi", 20];
  const userRole2: genericTuple<string, { name: string; role: number }> = [
    "zubi",
    { name: "zubi", role: 30 },
  ];

  //
}
