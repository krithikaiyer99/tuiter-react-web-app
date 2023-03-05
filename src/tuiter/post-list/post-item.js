import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faShareFromSquare, faCommentAlt } from '@fortawesome/free-regular-svg-icons'


const PostItem = ({post}) => {
    return(
        <li class="list-group-item">
        <div class="row">
        <div class="col-1 me-3">
            <img height="50px" src={`../../images/${post.avatarIcon}`} width="50px" class="rounded-circle"/>
        </div>
        <div class="col-10">
            <span class="fw-bolder">{post.username} </span> <i
            class="fa-solid fa-circle-check"></i><span class="text-gray"> @{post.handle} - &nbsp; 
            {post.time}</span>
            <span class="float-end">...</span>
            <div>
                {post.title}
            </div>
            <div class="float-end rounded">
                <img src={`../../images/${post.image}`} width="100%" class="mb-2"/>
                <div>{post.topic}</div>
                <div>{post.content}</div>
            </div>
            <div class="row pt-2 ps-2">
                <div class="col-3 text-gray"><FontAwesomeIcon icon={faComment}/>&nbsp;{post.comment}</div>
                <div class="col-3 text-gray"><FontAwesomeIcon icon={faCommentAlt} />&nbsp;{post.retweet}</div>
                <div class="col-3 text-gray"><FontAwesomeIcon icon={faHeart} />&nbsp;{post.like}</div>
                <div class="col-3 text-gray"><FontAwesomeIcon icon={faShareFromSquare} /></div>
            </div>
        </div>
        </div>
    </li>    
    );
  }
  export default PostItem;