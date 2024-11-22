// async function fet_data(){
//     let res = await fetch("http://localhost:3000/students")
//     let data = await res.json()
//     let final_data = data.map((t)=>`
    
//      <h1> ${t.id} </h1>
//      <h1> ${t.name} </h1>
//      <h1> ${t.age} </h1>
//      <h1> ${t.address} </h1>
    
    
//     `).join("")
//     document.querySelector('#showdata').innerHTML = final_data
// }

// fet_data()

async function fet_data(){
    let res = await fetch("http://localhost:3000/students")
    let data = await res.json()
    let final_data = data.map((t)=>`
    <tr>
     <td> ${t.id} </td>
     <td> ${t.name} </td>
     <td> ${t.age} </td>
     <td> ${t.address} </td>
     <td> <button onclick = "mydelete('${t.id}')"> Delete </button> </td>
     <td> <button onclick = "myedit('${t.id}')"> edit </button> </td>

    </tr>
    
    `).join("")
    document.querySelector('#showdata').innerHTML = final_data
}

fet_data()

function mydelete(id)
{
    fetch(`http://localhost:3000/students/${id}`,{
        method:'DELETE'
    })
    .then(re=>alert("delete succesfully..."))
}

// insert data.....................

function insertdata(){
    let data = {
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        address : document.querySelector('#address').value
    }

    fetch("http://localhost:3000/students",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>alert("inserted...!!!"))
}

//edit data.........................

async function myedit(id) {
    let myupdate = await fetch(`http://localhost:3000/students/${id}`)
    let redata = await myupdate.json();

    let senddata = `

        <input type="text" value="${redata.id}" id="id1" readonly> <br>
        <input type="text" value="${redata.name}" id="name1"> <br>
        <input type="text" value="${redata.age}" id="age1"> <br>
        <input type="text" value="${redata.address}" id="address1"> <br>
        <button onclick="finalupdate('${redata.id}')">Submit</button>
    `

    document.querySelector('#edittable').innerHTML = senddata;
    
}

function finalupdate(id){
    let fdata = {
        name:document.querySelector('#name1').value,
        age:document.querySelector('#age1').value,
        address:document.querySelector('#address1').value,
    }

    fetch(`http://localhost:3000/students/${id}`,{
        method:'PUT',
        headers:{
            'content' : 'application/json'
        },
        body:JSON.stringify(fdata)
    })

    .then(r=>alert("update..!!"))
}
