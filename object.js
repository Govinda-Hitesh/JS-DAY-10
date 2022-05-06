//objects

//objects are collecting of properties and methods
//objects have keys which are converted to string types, the properties and methods donot follow the insertion order

//create an object
let mobile = {
    brand : 'hello',
    weigth : 20,
    isworking : true,
    displayInfo : function (){
        console.log('the big ${mobile.brand}')

    }
}

console.log(mobile);
console.log(mobile.displayInfo());
mobile.camera = '32px';

console.log(mobile);

//another method
let mobile1 = {};

mobile1.brand = 'oneplus';
mobile1.weight = 190;
mobile1.isworking = false;
console.log(mobile1);

//another one .....
function mobile(brand,weight,camera){
    this.brand = brand;
    this.weight = weight;
    this.camera = camera;

}

let apple = new mobile('apple',190,'13px');
let vivo = new mobile('vivo',190,'13px');
console.log(apple);
console.log(vivo);

//
console.log(object.keys(apple));
console.log(object.values(apple));

for(const [key, value] of object.entries(apple)){
    console.log(key, value);
}

//this keyword...

//in an object this refers to the object
//in a function , this refers to parent object
//when we use keyword alone, then it points to global object


//.........................................
//spread operator

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,5,4];
console.log(arr1.concat(arr2));
let arr3 = [...arr1,...arr2];
console.log(arr3);
