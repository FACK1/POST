function displayPosts() {
  fetch('/getPost', {
  credentials: "same-origin",
  credentials: 'include',
  method:"POST",
  headers:{'cookie':document.cookie}

}).then(function(response){
return response.json()


})
.then(function(result){
  console.log(result);
    var postsArea = document.getElementById('cont');
    result.forEach(function(post) {
    var postElement = document.createElement('div');
    postElement.setAttribute('class', 'postElement');
    var user_name = document.createElement('h2');
    user_name.setAttribute('class', 'user_name');
    var text_post = document.createElement('p');
    text_post.setAttribute('class', 'text_post');
    var time_post = document.createElement('TIMESTAMP');
    time_post.setAttribute('class', 'time_post');
    user_name.innerText = 'username: ' +post.user_name;
    text_post.innerText ='text: ' +post.text_post;
    time_post.innerText = 'time: ' +post.time_post;
    postElement.appendChild(user_name);
    postElement.appendChild(text_post);
    postElement.appendChild(time_post);
    postsArea.appendChild(postElement);

})
})

}
displayPosts();
