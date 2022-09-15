class Buffalo{
    constructor(name){
        this.name = name;
    }

    tellName(){
        setTimeout( function () {
            console.log(this.name);
        }, 1000)
    }

    tellNameArrowFunction = () => {
        setTimeout(() => {
            console.log(this.name);
        }, 1000)
    }

}

const buffalo = new Buffalo("Bills Buffalo");
buffalo.tellName();
buffalo.tellNameArrowFunction();