const postsObjArr = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


/* 

- Nel file js avete un array di oggetti che rappresentano ciascun post.

- Ogni post contiene le informazioni necessarie per stampare la relativa card:
    - id del post (numero progressivo da 1 a n),
    - nome autore,
    - foto autore,
    - data in formato americano (mm-gg-yyyy),
    - testo del post,
    - immagine (non tutti i post devono avere una immagine),
    - numero di likes.

- Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, 
                stampiamo i post del nostro feed.

- Milestone 2   - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del 
                    bottone e incrementiamo il counter dei likes relativo.
                - Salviamo in un secondo array gli id dei post ai quali abbiamo 
                    messo il like.

*/


const postsList = document.querySelector('.posts-list');


for (i = 0; i < postsObjArr.length; i++) {

    /* --- CONTENITORE MADRE ----------------------------- */
    let post = document.createElement('div');
    post.classList.add('post');
    postsList.append(post);
   
   /* --- CONTENITORE HEADER ----------------------------- */
   
    let postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    post.append(postHeader);

     
    /* --- CONTENITORE HEADER.META ------------------------ */

    let postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.append(postMeta);

    /* --- CONTENITORE HEADER.META-ICON -------------------- */

    let postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');
    postMeta.append(postMetaIcon);

    /* --- CONTENITORE HEADER.PROFILE-PIC ------------------ */

    let profilePic = document.createElement('img');
    profilePic.classList.add('profile-pic');
    postMetaIcon.append(profilePic);

    profilePic.src = 
    `
    ${postsObjArr[i].author.image}
    `

    /* --- CONTENITORE HEADER.META-DATA -------------------- */

    let postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMeta.append(postMetaData);

    /* --- CONTENITORE HEADER.META-AUTHOR -------------------- */

    let postMetaAutor = document.createElement('div');
    postMetaAutor.classList.add('post-meta__author');
    postMetaData.append(postMetaAutor);

    postMetaAutor.innerHTML =  ` ${postsObjArr[i].author.name} `

    /* --- CONTENITORE HEADER.META-TIME -------------------- */

    let postMetaTime = document.createElement('div');
    postMetaTime.classList.add('post-meta__time');
    postMetaData.append(postMetaTime);

    postMetaTime.innerHTML =  ` ${postsObjArr[i].created} `

    /* --- CONTENITORE POST-TEXT -------------------- */

    let postText = document.createElement('div');
    postText.classList.add('post__text');
    post.append(postText);

    postText.innerHTML =  ` ${postsObjArr[i].content} `

    /* --- CONTENITORE POST-IMAGE -------------------- */

    let postImage = document.createElement('div');
    postImage.classList.add('post__image');
    post.append(postImage);

    postImage.innerHTML =
    `
    <img src= ${postsObjArr[i].media}>
    `

    /* --- CONTENITORE FOOTER -------------------- */

    let postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    post.append(postFooter);

    /* --- CONTENITORE FOOTER.LIKES -------------------- */

    let postLikes = document.createElement('div');
    postLikes.classList.add('likes', 'js-likes');
    postFooter.append(postLikes);

    /* --- CONTENITORE FOOTER.LIKES-CTA -------------------- */

    let postLikesCta = document.createElement('div');
    postLikesCta.classList.add('likes__cta');
    postLikes.append(postLikesCta);

    /* --- CONTENITORE FOOTER.LIKES-BUTTON -------------------- */

    let postLikesButton = document.createElement('a');
    postLikesButton.classList.add('like-button', 'js-like-button');
    postLikesCta.append(postLikesButton);







    /* --- CONTENITORE FOOTER.LIKES-BUTTON: SEZIONE LOGICA -------------------- */

    /*Potevo fare l'hover semplicemente con CSS ma essendo che
      non posso toccarlo, faccio tutto con JS*/
    postLikesButton.addEventListener("mouseover", function(){
        this.style.cursor='pointer'
    });

    //Stato del bottone per incrementare o decrementare like
    let buttonToggleStatus = true;

    let likesCounterNum = postsObjArr[i].likes;
    
    
    postLikesButton.addEventListener("click", function(){

        //Colore verde al click
        postLikesButton.classList.toggle('like-button--liked'); 
        
        
        buttonToggleStatus = !buttonToggleStatus;
        
        console.log(buttonToggleStatus);
        
        if(buttonToggleStatus == true) {
            likesCounterNum = likesCounterNum-1;
            postLikesCounter.innerHTML =' Piace a ' + `<b>`+ likesCounterNum + `</b>` + ' persone.'
        } else {
            likesCounterNum = likesCounterNum+1;
            postLikesCounter.innerHTML =' Piace a ' + `<b>`+ likesCounterNum + `</b>` + ' persone.'
        }
        console.log(likesCounterNum)
    });









    /* --- CONTENITORE FOOTER.LIKES-BUTTON-ICON -------------------- */

    let postLikesButtonIcon = document.createElement('i');
    postLikesButtonIcon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');
    postLikesButton.append(postLikesButtonIcon);

    /* --- CONTENITORE FOOTER.LIKES-BUTTON-LABEL-------------------- */

    let postLikesButtonLabel = document.createElement('span');
    postLikesButtonLabel.classList.add('like-button__label');
    postLikesButton.append(postLikesButtonLabel);

    postLikesButtonLabel.innerHTML =` Mi piace `
    
    /* --- CONTENITORE FOOTER.LIKES-COUNTER-------------------- */
    
    let postLikesCounter = document.createElement('div');
    postLikesCounter.classList.add('likes__counter');
    postLikes.append(postLikesCounter);
    
    

    postLikesCounter.innerHTML =' Piace a ' + `<b>${postsObjArr[i].likes}</b>` + ' persone.'

}


/* ---------------- DATE CHANGER -------------------- */

const dateConverter = [];
let dateConverterSpliced = []

for(let i = 0 ; i < postsObjArr.length; i++){
    dateConverter.push(postsObjArr[i].created);
}

console.log(dateConverter)

for (let i = 0; i < 5; i++) {
    dateConverterSpliced.push(dateConverter.splice(0, 1));
}


console.log(dateConverterSpliced)
 