function myEach (collection, callBack){
    if (typeof(collection) !== 'object'){
        for (let element of collection){
            callBack(element);
        };
    };
    if (typeof(collection) === 'object'){
        for (let element in collection){
            callBack(collection[element]);
        };
    };
return collection
};

function myMap(collection, callBack){
    if (typeof(collection) === 'object')
        collection = Object.values(collection);
return collection.map(callBack);
}
function myReduce(collection,callBack,accumilator) {
    let keys=Object.keys(collection);
    let start=0;
    if(accumilator===undefined) {
        accumilator=collection[keys[0]];
        start=1;
    }
    for(let i=start; i<keys.length;i++){
        accumilator=callBack(accumilator,collection[keys[i]],collection)
    }
    return accumilator;
}

function myFind(collection, predicate){
    return collection.find(predicate)
}
function myFilter(collection, predicate){
    let myArray=[];
    if(typeof(collection)==="object"){
        collection=Object.values(collection)
    }
    for (let element of collection){
        if (predicate(element)){
            myArray.push(element)
        }
    }
    return myArray;
}

function mySize(collection){
    let size;
    if(typeof(collection)==="object"){
        collection=Object.keys(collection);
    };
    size=collection.length;
    return size;
}

function myFirst(array, number=1){
    if(number===1){
        return array[0]
    }
    else{
        return array.slice(0,number)
    }
}

function myLast(array, number=1){
    if(number===1){
        return array[array.length - 1]
    }
    else{
        return array.slice(-number)
    }
}

function myKeys(obj){
    return Object.keys(obj)
}
function myValues(obj){
    return Object.values(obj);
}