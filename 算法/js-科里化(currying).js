const add = (...res1) => {
    let res = res1;
    let _add = (...res2) => {
        res = [...res, ...res2];
        return _add;
    };
    _add.toString = () => {
        return res.reduce((a, b) => a + b);
    };
    return _add;
}
console.log(add(1,2,3)(2,2, 5));
console.log(add(1,3,5)(2, 2)(1, 4, 2));
console.log(add(1,2,3)(1)(2)(3)(4,5,6)(7,8)());