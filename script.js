const usuarios = document.getElementById("username");


fetch("https://crudcrud.com/api/23a9b67fe3eb49df834c5f11c8e98321/usuario")
    .then(resposta => resposta.json())
    .then(username => {
        username.forEach(usuario =>{
            const item = document.createElement("li");
                item.innerHTML = `${usuario.descricao} <button id="removeItem" onclick="deletar('${usuario._id}', this)">X</button>`;
                userList.appendChild(item);
        });
    })

document.getElementById("send").addEventListener("click", () =>{
    const user = document.getElementById("name").value ;
    const userEmail = document.getElementById("email").value ;
        fetch("https://crudcrud.com/api/23a9b67fe3eb49df834c5f11c8e98321/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({descricao: user,
                                  email: userEmail
            })
        })
        .then(resposta => resposta.json())
        .then((usuario) => {
             const item = document.createElement("li");
                item.innerHTML = `${usuario.descricao} <button id="removeItem" onclick="deletar('${usuario._id}', this)">X</button>`;
                userList.appendChild(item); 
        })
})

function deletar(_id, button) {
    fetch(`https://crudcrud.com/api/23a9b67fe3eb49df834c5f11c8e98321/usuario/${_id}`, {
        method: "DELETE"
    })
        .then(() => {
            button.parentElement.remove();
        })
        .catch((erro) => {
            console.error("Erro ao excluir o usuario: ", erro);
        })
}