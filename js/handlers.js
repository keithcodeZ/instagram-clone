import { posts } from "./data.js";
import { renderPosts } from "./render.js";

export function eventHandlers(){
   const postContainer = document.getElementById('post-container');
//    console.log(postContainer)

   postContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('like-btn')){
        posts[event.target.dataset.index].likes++;
        renderPosts();
    }
   })
   
}