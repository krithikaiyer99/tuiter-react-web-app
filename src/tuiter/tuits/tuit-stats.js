import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faShareFromSquare,
  faCommentAlt,
  faThumbsDown
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { updateTuitThunk } from "../../services/tuits-thunks"
import { useDispatch } from "react-redux";

const TuitStats = ({ post }) => {
  const dispatch = useDispatch();
  const like = () => {
    dispatch(
      updateTuitThunk({
        ...post,
        likes: post.likes + 1,
        liked: true
      })
    );
  };
  const unlike = () => {
    dispatch(
      updateTuitThunk({
        ...post,
        likes: post.likes - 1,
        liked: false
      })
    );
  };
  const dislike = () => {
    console.log(post);
    dispatch(
      updateTuitThunk({
        ...post,
        dislike: post.dislike + 1,
        disliked: true
      })
    );
  };
  const undislike = () => {
    dispatch(
      updateTuitThunk({
        ...post,
        dislike: post.dislike - 1,
        disliked: false
      })
    );
  };
  return (
    <div class="row pt-2 ps-2">
      <div class="col-2 text-gray">
        <FontAwesomeIcon icon={faComment} />
        &nbsp;{post.replies}
      </div>
      <div class="col-2 text-gray">
        <FontAwesomeIcon icon={faCommentAlt} />
        &nbsp;{post.retuits}
      </div>
      <div class="col-2 text-gray">
        {post.liked ? (
          <FontAwesomeIcon onClick={unlike} icon={faHeartSolid} color="red" />
        ) : (
          <FontAwesomeIcon onClick={like} icon={faHeart} />
        )}
        &nbsp;{post.likes}
      </div>
      <div class="col-2 text-gray">
        {post.disliked ? (
          <FontAwesomeIcon onClick={undislike} icon={faThumbsDown} color="red" />
        ) : (
          <FontAwesomeIcon onClick={dislike} icon={faThumbsDown} />
        )}
        &nbsp;{post.dislike}
      </div>
      <div class="col-2 text-gray">
        <FontAwesomeIcon icon={faShareFromSquare} />
      </div>
    </div>
  );
};
export default TuitStats;
