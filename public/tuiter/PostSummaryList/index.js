import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"

const PostSummaryList = () => {
   return (`
   <ul class="list-group pt-2">
   ${
      exploreItems.map(post => {
        return(PostSummaryItem(post));
        }).join('')
    }
   </ul>
`); }

export default PostSummaryList;
