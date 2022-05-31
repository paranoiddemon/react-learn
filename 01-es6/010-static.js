class Test{

    static name = "tom";

    static foo = () => {
        // 静态方法的this指向类而不是实例对象
        console.log(this);
    }
}

Test.foo(); // [class tom] { name: 'tom', foo: [Function: foo] }
console.log(Test.name);

