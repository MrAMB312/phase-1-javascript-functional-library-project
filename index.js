function myEach(collection, callback) {
    const inputArray = Array.isArray(collection)
    ? collection
    : Object.values(collection);

    inputArray.forEach((element) => {
        callback(element);
    })

    return collection;
}

function myMap(collection, callback) {
    const inputArray = Array.isArray(collection)
    ? collection
    : Object.values(collection);

    return inputArray.map(callback);
}

function myReduce(collection, callback, acc) {
    const inputArray = Array.isArray(collection)
    ? collection
    : Object.values(collection);

    const hasInitialValue = acc !== undefined;

    return inputArray.reduce(
        (currentAcc, currentValue, index) => {
            if (!hasInitialValue && index === 0) {
                return currentValue;
            }
            return callback(currentAcc, currentValue, collection);
        },
        hasInitialValue ? acc : inputArray[0]
    );
}

function myFind(collection, predicate) {
    const inputArray = Array.isArray(collection)
    ? collection
    : Object.values(collection);

    return inputArray.find(
        (element) => predicate(element)   
    );
}

function myFilter(collection, predicate) {
    const inputArray = Array.isArray(collection)
    ? collection
    : Object.values(collection);

    return inputArray.filter(
        (element) => predicate(element)
    );
}

function mySize(collection) {
    const inputArray = Array.isArray(collection)
    ? collection
    : Object.values(collection);

    return inputArray.length;
}

// Array Functions

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

// // BONUS: mySortBy

function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        const valueA = callback(a);
        const valueB = callback(b);

        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
    });
}

// BONUS: myFlatten

function myFlatten(array, shallow, newArr=[]) {
    for (let item of array) {
        if (Array.isArray(item)) {
            if (shallow) {
                newArr.push(...item);
            } else {
                myFlatten(item, shallow, newArr);
            }
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

// Object Functions

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}