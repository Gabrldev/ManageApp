export async function postData (data) {
    const response = await fetch('http://localhost:4001/bills',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const resData = await response.json()
    return resData
}