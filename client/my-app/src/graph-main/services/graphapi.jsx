export async function calculateScore(data){
    const response = await fetch(`/calcScore`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({scoreData:data})
    })
    return await response.json();
}

export async function resetScore(){
    const response = await fetch(`/resetScore`,{
        method:'GET',
        headers:{'Content-Type':'application/json'}
    })
    return await response.json();
}