let color ={"red":"RED","blue":"BLUE","green":"GREEN","other":{"test":"test"}};
Object.freeze(color); //this is good way to make a object non mutable and making object enum also
color.other.test ="black"; 
color.other.test1 ="new text"//fails silently and child is not froozen 
//console.log(color);
delete color.other;
//console.log(Object.getOwnPropertyDescriptor(color,"red"));
console.log(Object.getOwnPropertyNames(color));
/* 
{
  value: 'RED',
  writable: false, // editable
  enumerable: true, //can be iterable sing for or anything similar
  configurable: false //can be deleted
}
*/
