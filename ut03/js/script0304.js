let user1 = {
    user : "diego",
    password : 9876,
};

let user2 = {
    user : "diego",
    password : 1234,
    email: "diego@gmail.com",
};

function containsObject(a,b) {
    for(let key in b) {
        if(!key in a) {
            return false;
        }
        return true;
    }
}

console.log(containsObject(user1,user2));