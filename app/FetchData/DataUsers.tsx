import { User } from "../Types/Types";

export async function getData() {
    const res = await fetch("https://randomuser.me/api/?results=10&seed=myProject",{next :{revalidate:3000000} });
    const data = await res.json();
     getNames(data.results);
    return data.results;
}



function getNames(users: User[]) {
    return users.map((user) => user.name?.first);
}

export let userArry = getNames(await getData());




export async function getToDos(UserId: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${UserId}`, {next :{revalidate:3000}});
    const ToDos = await res.json();
    return ToDos;
}

