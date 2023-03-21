import "./index.css";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
const TuitItem = ({
  post = {
    _id: 234,
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    image: "spacex.png",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li class="list-group-item">
      <div class="row">
        <div class="col-1 me-3">
          <img
            height="50px"
            src={`../../images/${post.image}`}
            width="50px"
            class="rounded-circle"
          />
        </div>
        <div class="col-10">
          <span class="fw-bolder">{post.userName} </span>{" "}
          <img
            height="20px"
            src={`../../images/verify.png`}
            width="20px"
            class="rounded-circle"
          />
          <span class="text-gray">
            {" "}
            {post.handle} &#xb7;&nbsp;
            {post.time}
          </span>
          <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}></i>
          <div>{post.tuit}</div>
          <TuitStats post={post} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
