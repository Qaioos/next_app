export async function getData() {
    const res = await fetch("https://randomuser.me/api/?results=10",{next :{revalidate:3000}});
    const data = await res.json();
    return data.results;
}