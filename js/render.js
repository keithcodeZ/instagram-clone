import { posts } from "./data.js";

export function renderPosts(){
    const postContainer = document.getElementById('post-container');

    // postContainer.innerHTML = 'hi'
    // console.log(postContainer)

    postContainer.innerHTML = posts.map((post, index) =>
    `<article>
        <div class="article-header">
            <img class="user-avatar" src="${post.avatar}" alt="${post.avatarAlt}">
            <div class="user-details">
                <h2>${post.name}</h2>
                <p>${post.location}</p>
            </div>
        </div>
        <figure>
            <img class="post-image" src="${post.post}" alt="${post.postAlt}">
        </figure>
        <footer>
            <div class="buttons">
                <img class="btn like-btn" data-index="${index}" src="images/icon-heart.png" alt="">
                <img class="btn" src="images/icon-comment.png" alt="">
                <img class="btn" src="images/icon-dm.png" alt="">
            </div>
            <div class="like-count">
                <h3>${post.likes} likes</h3>
            </div>
            <div class="post-details">
                <p><span class="post-username">${post.username}</span>${post.comment}</p>
            </div>
        </footer>
    </article>
    `).join('')

}