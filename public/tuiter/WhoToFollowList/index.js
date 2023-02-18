import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
   return (`
   <ul class="list-group override-border-radius me-2">
   <li class="list-group-item d-flex align-items-center override-border override-bg-color"><span class="fw-bolder">Who to follow</span>
   </li>
   ${
        who.map(todo => {
        return(WhoToFollowListItem(todo));
        }).join('')
    }
   </ul>
`); }

export default WhoToFollowList;
