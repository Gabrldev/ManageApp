export async function postData (data) {
    const { userId, bills,description, name } = data
    const response = await fetch('http://localhost:4001/bills',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, bills,description, name })
    })
    const resData = await response.json()
    return resData
}