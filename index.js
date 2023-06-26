let arr = [
    [{ a: { price: 20 } }],
    [{ a: { price: 35 } }],
    [{ a: { price: 44 } }]
]
let total = arr.reduce(
    (total, num) => total + num.reduce(
        (total, num) => total + num.a.price, 0), 0)

console.log(
    total
)


// let total = arr[0].reduce((total, all) => total + all.a.price ,0);


// let total = arr.reduce(
//     (total, all) => total + all.reduce(
//         (total, all) => total + all.a.price, 0), 0)
