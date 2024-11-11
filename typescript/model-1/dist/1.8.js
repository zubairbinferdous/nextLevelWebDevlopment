"use strict";
{
    const user = {
        userName: "zubi",
        role: {
            main: "hello",
            address: "hello me",
        },
        number: 12131313,
    };
    const { userName, number, role: { main }, } = user;
    const manList = ["jo", "keno", "mane", "jan"];
    const [, , best, ...rest] = manList;
}
