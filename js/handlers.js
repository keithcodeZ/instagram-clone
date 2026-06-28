import { posts } from "./data.js";
import { renderPosts } from "./render.js";

export function eventHandlers(){
   const postContainer = document.getElementById('post-container');

   postContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('like-btn')){
      const index = event.target.dataset.index;      
      posts[index].likes++;
      localStorage.setItem('posts', JSON.stringify(posts));

      //instead of rerendering the whole posts
      //goal is to rerender only the likes counts
      const likesCount = event.target.closest('footer').querySelector('.like-count h3');
      likesCount.textContent = `${posts[index].likes} likes`
    }
   })
   
}