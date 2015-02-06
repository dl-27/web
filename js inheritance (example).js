function Animal(name){this.name = name;}
Animal.prototype.getName = function() {return this.name;}
function Dod(name){Animal.call(this, name);}
Dog.prototype = new Animal();
Dog.prototype.bark = function(){return "Dog "+this.getName()+" is barking";}

var dog = new Dog('Aban');
dog.getName() === 'Aban';
dog.bark() === 'Dog Aban is barking';