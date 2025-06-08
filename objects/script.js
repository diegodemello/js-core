let personInfo = {
    firstName: 'Diego',
    lastName: 'Mello',
    fullName(){
        console.log(`Seu nome é ${this.firstName} ${this.lastName}`);
    }
}
personInfo.fullName();

// ----------------

let dog = {
    breed: 'Labrador',
    age: 10,
    color: 'brown',
    bark(pessoa){
        if(pessoa == 'homem'){
            return 'Latir';
        }else{
            return 'Nada';
        }
    }
}

console.log(dog.bark('mulher'));

// ----------------

let btn = document.querySelector(".btn");

let x = 'Diego';
x.length;
x.toLowerCase();
x.toLowerCase(3);
