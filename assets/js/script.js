 /*=========================ESTRUTURANDO O POST PARTE DO HTML=========================================*/
 
 function  createPostContainer (msg){

    /* Criar e organizar os conteúdos do post */
    const postCreator = document.querySelector('.post_creator')
    const postContainer = document.createElement("div")
    postContainer.classList.add("post_container")
    
    const profileDiv = createProfileRow();
    const postDescription = createPostDescription(msg);
    const postFooter = createPostFooter()

    postContainer.append(profileDiv , postDescription , postFooter);
    postCreator.after(postContainer)
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
    img.src = "./assets/img/member-3.png"

    const info = document.createElement("div")
    const usuario = document.createElement("p")
    const span = document.createElement("span")

    usuario.innerText ="Paula Bennett"
    span.innerText= `${dia} de ${mes} às ${hr}:${min}`

    info.append(usuario , span)
    userProfile.append(img , info)
    postRow.append(userProfile)

    return postRow;
   
}

function createPostDescription (msg){
    const prg = document.createElement("p")
    prg.classList.add("post_text")

    prg.innerText = msg

    return prg
}

function createPostFooter() {
    const postRow = document.createElement('div')
    postRow.classList.add('post_row')

    const numbers = createPostNumber()
    const icons = createPostIcons()

    postRow.append(numbers , icons)

    return postRow;
}

function createPostNumber() {
    const number = document.createElement('div');
    number.classList.add("numbers")

    const numberLeft = document.createElement('div')
    numberLeft.classList.add("numbers_left")

    const numberRight = document.createElement('div')
    numberRight.classList.add("numbers_right")

    const spanComents = document.createElement('span')
    const spanCompartilhamentos = document.createElement('span')

    spanComents.innerText = "0 Comments"
    spanCompartilhamentos.innerText = "0 Shares"

    numberRight.append(spanComents , spanCompartilhamentos)
    number.append(numberLeft , numberRight)

    return number
}

function createPostIcons() {
    const divLikes = document.createElement('div')
    const iconLike = document.createElement('img')
    iconLike.src = "./assets/img/like.png"

    divLikes.append(iconLike)
    divLikes.innerHTML = divLikes.innerHTML + "Like"

    const divComment = document.createElement('div')
    const iconComment = document.createElement('img')
    iconComment.src = "./assets/img/comments.png"

    divComment.append(iconComment)
    divComment.innerHTML = divComment.innerHTML + "Comments"

    const divShare = document.createElement('div')
    const iconShare = document.createElement('img')
    iconShare.src = "./assets/img/share.png"

    divShare.append(iconShare)
    divShare.innerHTML = divShare.innerHTML + "Shares"
    

    const atividadeIcons = document.createElement('div')
    atividadeIcons.classList.add('atividade_icons')

    atividadeIcons.append(divLikes , divComment , divShare)

    return atividadeIcons;
}


 /*=========================CAPTANDO A MENSAGEM DO USUARIO PARA CRIAR O POST=========================================*/

const postInput = document.querySelector('#post_input')
const btn = document.querySelector('#btn')
btn.addEventListener('click' , publicar )
postInput.addEventListener('keydown' , function (evento){
    //evento.code for igual a "Enter"
    //evento.code for igual a "NumpadEnter" terá que criar um post

    if (evento.code === "Enter" || evento.code === "NumpadEnter" ) {
        publicar()
    }
})

function publicar () {
    const msgUsuario = postInput.value
        createPostContainer(msgUsuario)

        postInput.value = ""
}

function onMenu () {
    
    const menu =document.querySelector('.menu')
    menu.classList.toggle('show')
}