// interface Credentials{
//     email: string,
//     password: string
// }
// class User implements Credentials{
//     email: string;
//     password: string;
//     nickname: string
// }
// let Amy = new User();
// Amy = {
//     email: "abc@gmail.com",
//     password: "abc",
//     nickname: "Amyyyyy"
// }
// //

// type Role = "admin" | "user" | "editor"

// function performAction(action: string | number, role: Role){
//     if(role === "admin" && typeof action === "string"){
//         // do something here ...
//     }
// }

// //

// type DataStorage<T> = {
//     storage: T[];
//     add: (data: T) => void;
// }

// const textStorage: DataStorage<string> = {
//     storage: [],
//     add(data){
//         this.storage.push(data);
//     }
// }

// const userStorage: DataStorage<User> = {
//     storage: [{
//         email: "abc@gmail.com",
//         password: "abc",
//         nickname: "Amyyy"
//     }],
//     add(data){
//         this.storage.push(data);
//     }
// }

//

interface Credentials{
    email: string,
    password: string
}
class User implements Credentials{
    email: string;
    password: string;
    nickname: string
}
//定義generic type
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
}

//使用generic type
const userStorage: DataStorage<User> = {
    storage: [{
        email: "abc@gmail.com",
        password: "abc",
        nickname: "Amyyy"
    }],
    add(data){
        this.storage.push(data);
    }
}

//

function merge<T, U>(a: T, b: U){
    return{
        ...a,
        ...b
    }
}

const newUser = merge<{name: string}, {age: number}>({name: "Max"}, {age: 20})