const PostItem = (post) => {
    return(`
    <li class="list-group-item">
        <div class="row">
        <div class="col-1 me-3">
            <img height="50px" src="${post.avatarIcon}" width="50px" class="rounded-circle">
        </div>
        <div class="col-10">
            <span class="fw-bolder">${post.username} </span> <i
            class="fa-solid fa-circle-check"></i><span class="text-gray"> @${post.handle} .
            ${post.time}</span>
            <span class="float-end">...</span>
            <div>
                ${post.title}
            </div>
            <div class="float-end rounded border border-secondary">
                <img src=${post.image} width="100%" class="${post.topic !=''?'border-top rounded-top border-bottom border-secondary':'border rounded'}">
                <div class="ps-2">${post.topic}</div>
                <div class="ps-2 text-gray ${post.content !=''?'pb-2':''}">${post.content}</div>
            </div>
            <div class="row pt-2 ps-2">
                <div class="col-3 text-gray"><i class="fa-regular fa-comment"></i> ${post.comment}</div>
                <div class="col-3 text-gray"><i class="fa-solid fa-retweet"></i> </i> ${post.retweet}</div>
                <div class="col-3 text-gray"><i class="fa-regular fa-heart"> </i> ${post.like}</div>
                <div class="col-3 text-gray"><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
            </div>
        </div>
        </div>
    </li>    
    `
    );
  }
  export default PostItem;