class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello = () => {
        console.log("animal")
    }
}


class Dog extends Animal{
    /*
    *  属性也可以override
    * */
    // 把父类的属性也要写上，否则会只剩weight
    constructor(name, age,weight) {
        // 要先调用super的constructor
        super(name, age);
        this.weight = weight;
    }
    hello = () => {
        console.log(dog);
    }
}

const dog = new Dog("wulong", 18);
dog.hello();
