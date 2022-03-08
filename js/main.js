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


const postsList = document.querySelector('#posts-list');

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

    let profilePic = document.createElement('div');
    profilePic.classList.add('profile-pic');
    postMetaIcon.append(profilePic);

    profilePic.innerHTML = 
    `
    <img src= ${postsObjArr[i].media}>
    `

    /* --- CONTENITORE HEADER.META-DATA -------------------- */

    let postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMeta.append(postMetaData);

    /* --- CONTENITORE HEADER.META-ICON -------------------- */

    /* let postMetaAutor = document.createElement('div');
    postMetaData.classList.add('post-meta__author');
    postMetaData.append(postMetaAutor);
 */

}