import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
            <div class="row pb-2">
            <div class="col-11 d-flex align-items-center">
                <span class="position-absolute d-flex align-items-center ps-2"><i
                        class="fa-solid fa-magnifying-glass"></i></span>
                <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter">
            </div>
            <div class="col-1 d-flex align-items-center">
                <i class="fa-sharp fa-solid fa-gear fa-lg" style="color: blue;"></i>
            </div>
            </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
           <div class="position-relative pt-2">
                <img src="../../images/main-image.jpg" width="100%">
                <p class="position-absolute  bottom-0 left-0 text-white"
                    style="font-size: 36px; padding-left: 4px;">SpaceX's Starship</p>
            </div>        
            ${PostSummaryList()}
    `;
};
export default ExploreComponent;
