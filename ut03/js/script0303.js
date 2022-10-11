let user1 = {
    username : "diego",
    password : 9876,
};
let user2 = {
    user : "pablo",
    password : 1234,
};


function intersectObjects (obj,obj1) {
   let int = {}
   for(let key in obj){
    if(key in obj1){
        int[key]=0;
    }
   }
   return int;
}

console.log(intersectObjects(user1,user2));