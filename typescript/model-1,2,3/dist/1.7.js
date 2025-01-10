"use strict";
{
    const bro = ["meo", "tai", "jai"];
    const sis = ["jai", "hai", "vai"];
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
    const sirList = Object.assign(Object.assign({}, sir), sirTwo);
    const data = (...friend) => {
        friend.forEach((data) => console.log(`hi ${data}`));
    };
    data("mani", "cha", "tio");
}
