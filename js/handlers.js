import { posts } from "./data.js";
import { renderPosts } from "./render.js";

export function eventHandlers(){
   const postContainer = document.getElementById('post-container');
//    console.log(postContainer)

   postContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('like-btn')){
      const index = event.target.dataset.index;      
      posts[index].likes++;

      //instead of rerendering the whole posts
      //goal is to rerender only the likes counts
      //   renderPosts();
      const likesCount = event.target.closest('footer').querySelector('.like-count h3');
      likesCount.textContent = `${posts[index].likes} likes`
    }
   })
   
}