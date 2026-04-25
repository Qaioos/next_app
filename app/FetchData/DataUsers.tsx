export async function getData() {
    const res = await fetch("https://randomuser.me/api/?results=10",{next :{revalidate:3000}});
    const data = await res.json();
    return data.results;
}

export async function getToDos(UserId: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${UserId}`, {next :{revalidate:3000}});
    const ToDos = await res.json();
    return ToDos;
}

