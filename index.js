const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mostFrequent = 1 ;
let most = 0;
let item;
for (let i = 0 ; i < arr.length; i++){
    for(let j = i; j< arr.length; j++){
        if (arr[i] == arr[j]){
            most++;
        }
        if(mostFrequent < most){
            mostFrequent = most;
            item = arr[i];
        }
    }
    most = 0;
}
console.log(`${item} (${mostFrequent} times)`)


var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

var newLibrary = library.map(function(library){
    return {
        author: library.author,
        title : library.title,
        readingStatus : library.readingStatus
    }
});
console.log(newLibrary);



