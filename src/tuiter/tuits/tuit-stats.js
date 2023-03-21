import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faShareFromSquare, faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'


const TuitStats = ({ post }) => {
  return (
    <div class="row pt-2 ps-2">
      <div class="col-3 text-gray">
        <FontAwesomeIcon icon={faComment} />
        &nbsp;{post.replies}
      </div>
      <div class="col-3 text-gray">
        <FontAwesomeIcon icon={faCommentAlt} />
        &nbsp;{post.retuits}
      </div>
      <div class="col-3 text-gray">
      {post.liked ? (
          <FontAwesomeIcon icon={faHeartSolid} color="red" />
        ) : (
          <FontAwesomeIcon icon={faHeart} />
        )}
        &nbsp;{post.likes}
      </div>
      <div class="col-3 text-gray">
        <FontAwesomeIcon icon={faShareFromSquare} />
      </div>
    </div>
  );
};
export default TuitStats;
