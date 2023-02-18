const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
   <a class="list-group-item" href="/">
      <i class="fab fa-twitter"></i></a>
      <li class="list-group-item ${active=='home'?'active':''} d-flex align-items-center"><i class="fa-solid fa-house"></i> <a
              class="d-none d-xl-block text-decoration-none text-reset ps-2" href="../HomeScreen/index.html">Home</a>
      </li>
      <li class="list-group-item ${active=='explore'?'active':''} d-flex align-items-center"><i class="fas fa-hashtag"></i><a
              class="d-none d-xl-block text-decoration-none text-reset ps-2" href="../explore/index.html">Explore</a></li>
      <li class="list-group-item ${active=='notifications'?'active':''} d-flex align-items-center"><i class="fa-solid fa-bell"></i><a
              class="d-none d-xl-block text-decoration-none text-reset ps-2" href="#">Notifications</a></li>
      <li class="list-group-item ${active=='messages'?'active':''} d-flex align-items-center"><i class="fa-solid fa-envelope"></i><a
              class="d-none d-xl-block text-decoration-none text-reset ps-2 href="#"">Messages</a></li>
      <li class="list-group-item ${active=='bookmarks'?'active':''} d-flex align-items-center"><i class="fa-solid fa-bookmark"></i><a
              class="d-none d-xl-block text-decoration-none text-reset ps-2" href="#">Bookmarks</a></li>
      <li class="list-group-item ${active=='lists'?'active':''} d-flex align-items-center"><i class="fa-solid fa-list"></i><a
              class="d-none d-xl-block text-decoration-none text-reset ps-2" href="#">Lists</a></li>
      <li class="list-group-item ${active=='profile'?'active':''} d-flex align-items-center"><i class="fa-solid fa-user"></i><a
              class="d-none d-xl-block text-decoration-none text-reset ps-2" href="#">Profile</a></li>
      <li class="list-group-item ${active=='more'?'active':''} d-flex align-items-center"><i class="fa-solid fa-ellipsis-h"></i><a
              class="d-none d-xl-block text-decoration-none text-reset ps-2" href="#">More</a></li>      
      
 </div>
 <div class="d-grid mt-2">
   <a href="tweet.html"
      class="btn btn-primary btn-block rounded-pill">
      Tweet</a>
 </div>
    `);
   }
   export default NavigationSidebar;
   
   