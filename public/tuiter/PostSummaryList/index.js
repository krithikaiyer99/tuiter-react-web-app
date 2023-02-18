import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"

const PostSummaryList = () => {
   return (`
   <ul class="list-group override-border-radius me-2">
   ${
      exploreItems.map(post => {
        return(PostSummaryItem(post));
        }).join('')
    }
   </ul>
`); }

export default PostSummaryList;
