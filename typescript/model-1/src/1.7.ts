{
  const bro: string[] = ["meo", "tai", "jai"];
  const sis: string[] = ["jai", "hai", "vai"];
  bro.push(...sis);

  const sir = {
    javascript: "mir",
    react: "pro",
    sql: "zubi",
  };

  const sirTwo = {
    typeC: "mir",
    C: "prot",
    prisma: "zbi",
  };

  const sirList = {
    ...sir,
    ...sirTwo,
  };

  const data = (...friend: string[]) => {
    friend.forEach((data) => console.log(`hi ${data}`));
  };

  data("mani", "cha", "tio");
}
