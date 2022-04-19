function  createPostContainer (msg){
    const main = document.querySelector('.cont_principal')
    const postContainer = document.createElement("div")
    postContainer.classList.add("post_container")
    
    const profileDiv = createProfileRow();
    const postDescription = createPostDescription(msg)

    postContainer.append(profileDiv , postDescription);
    main.append(postContainer)
}


function createPostDescription (msg){
    const prg = document.createElement("p")
    prg.classList.add("post_text")

    prg.innerText = msg

    return prg
}

function createProfileRow() {

    /* Manipulando data e hora */
    let data = new Date()
    let dia = String(data.getDate()).padStart(2 , '0')
    let mes = data.toLocaleDateString('default' , {month:'long'})
    let hr = data.getHours()
    let min = data.getMinutes()

    /* Criando elementos HTML e organizando posições desses elementos */
    const postRow = document.createElement("div")
    postRow.classList.add("post_row")

    const userProfile = document.createElement("div")
    userProfile.classList.add("user_profile")

    const img = document.createElement("img")
    img.src = "./assets/img/perfil.jpeg"

    const info = document.createElement("div")
    const usuario = document.createElement("p")
    const span = document.createElement("span")

    usuario.innerText ="Nicolas Fernando"
    span.innerText= `${dia} de ${mes} às ${hr}:${min}`

    info.append(usuario , span)
    userProfile.append(img , info)
    postRow.append(userProfile)

    return postRow;
   
}

