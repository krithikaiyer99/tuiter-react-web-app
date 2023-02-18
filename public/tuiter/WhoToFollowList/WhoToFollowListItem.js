const WhoToFollowItem = (todo) => {
    return(`
    <li class="list-group-item override-border override-bg-color">
        <div class="row">
            <div class="col-2">
                <img height="50px" src="${todo.avatarIcon}" width="50px" class="rounded-circle">
            </div>
            <div class="col-7">
                <span class="fw-bolder">${todo.userName}</span> <i class="fa-solid fa-circle-check override-blue-text"></i>
                <p>@${todo.handle}</p>
            </div>
            <div class="col-2">
                <button class="btn btn-primary color-grey rounded-pill d-flex align-items-center">Follow</button>
            </div>
        </div>
    </li>      
    `
    );
  }
  export default WhoToFollowItem;