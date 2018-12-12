function displayPosts() {
  fetch('/getPost').then(function(response){
return response.json()


})
.then(function(result){
  console.log(result);
  var postsArea = document.getElementById('cont');
  result.forEach(function(post) {
    var postElement = document.createElement('div');
    var user_name = document.createElement('h2');
    var text_post = document.createElement('p');
    var time_post = document.createElement('TIMESTAMP');
    user_name.innerText = post.user_name;
    text_post.innerText = post.text_post;
    time_post.innerText = post.time_post;
    postElement.appendChild(user_name);
    postElement.appendChild(text_post);
    postElement.appendChild(time_post);
    postsArea.appendChild(postElement);

})
})

}
displayPosts();
