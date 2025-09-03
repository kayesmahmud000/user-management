export default async function getAllUserData(){
    const result = await fetch('https://jsonplaceholder.typicode.com/users')

    return result.json()
}