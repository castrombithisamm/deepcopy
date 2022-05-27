function deepClone(object){
    // Check if the object passed is indeed an object
    if (!object || typeof object !== 'object') return null

    // We have two types of objects: Array [] & Object {}
    // Here we check whether we are working with an Array or an Object
    const newObject = Array.isArray(object) ? [] : {};

    // Here we iterate the object using a for in expression to get all...
    //...the keys that belong to the object 
    // for in will also iterate all the keys that lie along the prototype chain of the object
    for(const key in object){

        // Use hasOwnProperty to ensure that the key indeed belongs to the object itself and
        //...not the prototype
        if (object.hasOwnProperty(key)){

            // copying a reference object: Array & Object types            
            if (typeof object[key] === 'object'){
                //Here, deepCopy runs recursively so that the properties of 
                //...the old object is copied and put into the newObject
                newObject[key] = deepClone(object[key]); 
            }

            // copying a primitive value: int, char, boolean
            else{
                // 1, false, 'c'
                newObject[key] = object[key];
            }        
        }
    }
return newObject;
}
const origObj = {a:1, b:{c:2}};
const clone = deepClone(origObj);

clone.a = 2;
clone.b.c = 3;

console.log("This is the old object", origObj)
console.log("This is the new object", clone)

