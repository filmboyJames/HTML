'use strict';
 
// const URL = "people.json";
// const URL2 = "https://pokeapi.co/api/v2/pokemon/ditto";

// fetch(URL2)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function (err){
//     console.error(err);
// })

// axios.get(URL)
// .then(response => appendData(response.data))
// .catch(err => console.error(err));

// function appendData(data){
//     let dataList = document.getElementById("myData");
//     for(let i=0; i<data.length;i++){
//         let people = document.createElement("div");
//         let id = document.createElement("card");
//         id.innerText = "ID" + data[i].userId
//         people.appendChild(id);
//         let name = document.createElement("p");
//         name.innerText = "Name: " + data[i].name;
//         id.appendChild(name);
//         dataList.appendChild(people);
//     }
// }

const link = "https://reqres.in/api/users";

fetch(link)
.then(function(response){
   return response.json();
})
.then(function(data){
    console.log(data.data);
    appendData(data.data);
})
.catch(function(err){
    console.error(err);
})

function appendData(data){
    let dataList = document.getElementById("myData");
    for (let i=0; i<data.length;i++){
        let user = document.createElement("div");
        let id = document.createElement("card");
        id.innerText = "ID "+data[i].id;
        user.appendChild(id);
        let email = document.createElement("p");
        email.innerText = "Email: " + data[i].email;
        id.appendChild(email);
        let firstname = document.createElement("p");
        firstname.innerText = "Name: "+ data[i].first_name +" "+data[i].last_name;
        id.appendChild(firstname);
        let image = document.createElement("img");
        image.src =data[i].avatar;
        id.appendChild(image);
        dataList.appendChild(user);

    }
}
// axios.get(link)
// .then(response => appendData(response.data))
// .catch(err => console.error(err));

// function appendData(data){
//     let dataList = document.getElementById("myData");
//     for (let i=0; i<data.data.length;i++){
//         console.log(i);
//         let user = document.createElement("div");
//         let id = document.createElement("card");
//         id.innerText = "ID "+data.data[i].id;
//         console.log(id.innerText);
//         user.appendChild(id);
//         let email = document.createElement("p");
//         email.innerText = "Email: " + data.data[i].email;
//         id.appendChild(email);
//         let firstname = document.createElement("p");
//         firstname.innerText = "Name: "+ data.data[i].first_name +" "+data.data[i].last_name;
//         id.appendChild(firstname);
//         let image = document.createElement("img");
//         image.src =data.data[i].avatar;
//         id.appendChild(image);
//         dataList.appendChild(user);

//     }
// }
