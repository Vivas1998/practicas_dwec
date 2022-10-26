let array1 = [
    {
        name: 'Pablo',
        surname: 'Vivas',
        //nickname: '',
    },
    {
        name: 'Diego',
        surname: 'Freile',
        //nickname: '',
    }
]
function generateUsername(arr) {
    
    arr.forEach(item => {
        //let a = strMinusName.split('',1);
        Object.assign(item, {nickname:item.name.toLowerCase().charAt(0) + item.surname.toLowerCase() + Math.trunc(Math.random()*10).toString() + Math.trunc(Math.random()*10).toString()});
    }
    );
}
generateUsername(array1);
console.log(array1);

/* function generateUsername(arr) {
    arr.forEach(item => {
        let strMinusName = item.name.toLowerCase();
        let strMinusSurname = item.surname.toLowerCase();
        let a = strMinusName.split('',1);
        let nickname = a+strMinusSurname;
        //console.log(a);
        //console.log(strMinusSurname);
        //console.log(nickname);
        //arr['nickname'] = nickname;
        let array2 = {nickname:nickname};
        Object.assign(user1, array2);
        console.log(arr);
    }); */