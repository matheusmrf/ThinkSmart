var db_posts = {};


function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initPostApp () {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON!=null) {
        if(usuarioCorrenteJSON.length>2){
            usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
            //console.log('success parsing curr_user');
            //console.log(usuarioCorrente);
            txtGreet = document.getElementById("greet");
            txtGreet.innerHTML = `Olá, ${usuarioCorrente.nome}!`
        }
        else{
            alert('É necessário logar para fazer posts!');
            window.location.href = 'trabalho.html';
        }
    }
    else{
        alert('É necessário logar para fazer posts!');
        window.location.href = 'trabalho.html';
    }
    var postJSON = localStorage.getItem('db_posts');
    if(!postJSON)
    {
        db_posts = {posts: []}
    }
    else
    {
        db_posts = JSON.parse(localStorage.getItem('db_posts'));
    }
    //console.log(db_posts);
    
}


function addPost (postTitle,postText,postCompany,postTag){
    var d = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
    let postId = generateUUID();
    let newPost = {"id": postId, "title": postTitle, "text": postText, "author": usuarioCorrente.nome, "time": d, "company": postCompany,"tag": postTag};
    db_posts.posts.push (newPost);
    localStorage.setItem('db_posts',JSON.stringify(db_posts));
}


function submitPost (event) {                
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados de login e senha a partir do formulário de login
    var postTitle = document.getElementById('titlePost').value;
    var postText = document.getElementById('postText').value;
    var postCompany = document.getElementById('companyPost').value
    var postTag = document.getElementById('tagPost').value

    if(postTitle&&postText&&postCompany&&postTag){
        addPost(postTitle,postText,postCompany,postTag);
        alert('Post criado!');
        window.location.href="trabalho.html";
    }
    else{
        alert('Todos os campos devem ser preenchidos!');
    }
}

initPostApp();


document.getElementById ('formPost').addEventListener ('submit', submitPost);