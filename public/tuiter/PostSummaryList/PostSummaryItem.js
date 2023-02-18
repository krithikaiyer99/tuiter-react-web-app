const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-8">
                <div style="color: gray;">${post.topic}</div>
                <span class="fw-bolder">${post.userName} </span> <i
                    class="fa-solid fa-circle-check"></i><span style="color: gray;"> -
                    ${post.time}</span>
                <div class="fw-bolder">
                ${post.title}
                </div>
            </div>
            <div class="col-4"><img class="float-end rounded" height="100px"
                    src= ${post.image} width="100px"></div>
        </div>
    </li>    
    `
    );
  }
  export default PostSummaryItem;