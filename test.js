function test(o = 0) {
    // let o = 90
    {
        let o = 123
    }
    console.log(o);
}
test()