'use strict'

let calculator = {
    
   read: function () {
       this.a =+prompt('Введите первое число');
       this.b =+prompt('Введите второе число');
       
       if (isNaN(this.a) || isNaN(this.b)) throw new Error('Вы введи не число')
       
   },
   
   sum:function (){
      return this.a + this.b;
   },
    mul:function () {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );