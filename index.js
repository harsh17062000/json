async function fet_data(){
    let res = await fetch("http://localhost:3000/students")
    let data = await res.json()
    let final_data = data.map((t)=>`
    
    <h1> ${t.id} </h1>
    <h1> ${t.name} </h1>
    <h1> ${t.age} </h1>
    <h1> ${t.address} </h1>
    
    
    `).join("")
    document.querySelector('#showdata').innerHTML = final_data
}

fet_data()