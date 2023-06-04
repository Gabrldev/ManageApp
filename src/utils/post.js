const URL_BASE = import.meta.env.VITE_URL_BASE;

export async function postData (data) {
    const { userId, bills,description, name,date } = data
    const response = await fetch(`${URL_BASE}/bills`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, bills,description, name,date })
    })
    const resData = await response.json()
    return resData
}