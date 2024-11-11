{
  //

  const age: number = 12;
  const ageBro: number = 50;

  if (age > 19) {
    console.log("hello world this is me ");
  } else {
    console.log("hello there is nothing happen ");
  }

  const a = ageBro > 40 ? "good boy" : "not good";
  console.log(a);

  const res = null;
  const rs1 = res ?? "guest";
  console.log(rs1);

  type User = {
    name: string;
    role: number;
    address: {
      per: string;
      pse?: string;
    };
  };

  const user: User = {
    name: "zubi",
    role: 12,
    address: {
      per: "54 fin",
    },
  };

  const per = user?.address?.pse ?? "there is no address";
  console.log(per);

  //
}
