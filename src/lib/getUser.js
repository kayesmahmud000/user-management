export default async function getUser(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    return result.json()
}