const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let usersName = users.map(function(user) {
    let aName = user.name;
    if (aName.charAt(0) === 'A'){
        aName = 'Anacleto';
    }
    return aName
});

console.log(usersName);