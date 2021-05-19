let  classRoom = [
    {name: 'Yehor', surname: 'Rudenko'},
    {name: 'Alex', surname: 'Fish'},
    {name: 'Andrey', surname: 'Timoshenko'},
];

let mirror = classRoom;



mirror.name = 1;

console.log('classroom:', classRoom);
console.log('mirror:', mirror);


let copy = classRoom.map(obj => {
    let rObj = {}
    rObj['name'] = obj.name;
    rObj['surname'] = obj.surname;
    return rObj
});
console.log(copy)