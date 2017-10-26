//OBJECT DESTRUCTURING 
const person = {
    name: 'Joey',
    age: 29,
    location: {
        city: 'New YOrk',
        temp: 80
    }
}

const book = {
    title: 'Lord of the rings',
    author: 'Who knows',
    publisher: {
        name: 'Penguin'
    }
}

const book = {
    title: 'Lord of the rings',
    author: 'Who knows',
    publisher: {
        name: 'Penguin'
    }
}
const {title,author,publisher} = book;
const {name: publisherName = 'Self Published'} = publisher

console.log(publisherName)

//ARRAY DESTRUCTURING

const item = ['coffee(hot)','$2.00','$2.50','$2.75'];
const [coffee,,medium] = item;
console.log(`A medium ${coffee} is ${medium}`)
