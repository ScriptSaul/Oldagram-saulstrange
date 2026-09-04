const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsContainer = document.getElementById("posts-container");

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    postsContainer.innerHTML +=
        `
        <div class="post">
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.name}'s avatar" class="avatar">
                <div class="user-info">
                    <h2>${post.name}</h2>
                    <p>${post.location}</p>
                </div>
            </div>
            <img src="${post.post}" alt="Post image" class="post-image" data-index="${i}">
            <div class="caption-icons">
                <button><img src="images/icon-heart.png" alt="Like"></button>
                <button><img src="images/icon-comment.png" alt="Comment"></button>
                <button><img src="images/icon-dm.png" alt="Share"></button>
            </div>
            <div class="post-footer">
                <p><strong class="likes-count">${post.likes} likes</strong></p>
                <p><strong>${post.username}</strong> ${post.comment}</p>
            </div>
        </div>
    
    `;

}

const postImages = document.querySelectorAll(".post-image");

for (let i = 0; i < postImages.length; i++) {
    const image = postImages[i];
    image.addEventListener("dblclick", function(){
        const index = image.getAttribute("data-index");
        posts[index].likes++
        const likesElement = image.parentElement.querySelector(".likes-count");
        likesElement.textContent = `${posts[index].likes} likes`;
        console.log(posts[index].likes)
    })

}













































// postImages.forEach((image) => {
//     image.addEventListener("dblclick", () => {
//         const index = image.getAttribute("data-index");
//         posts[index].likes++;
//         const likesElement = image.parentElement.querySelector(".post-footer p strong");
//         likesElement.textContent = `${posts[index].likes} likes`;
//     }








// function renderPosts() {
//     const postsContainer = document.getElementById("posts-container");
//     postsContainer.innerHTML = "";

//     posts.forEach((post, index) => {
//         const postElement = document.createElement("div");
//         postElement.classList.add("post");

//         postElement.innerHTML = `
//             <div class="post-header">
//                 <img src="${post.avatar}" alt="${post.name}'s avatar" class="avatar">
//                 <div class="user-info">
//                     <h2>${post.name}</h2>
//                     <p>${post.location}</p>
//                 </div>
//             </div>
//             <img src="${post.post}" alt="Post image" class="post-image">
//             <div class="post-footer">
//                 <p><strong>${post.likes} likes</strong></p>
//                 <p><strong>${post.username}</strong> ${post.comment}</p>
//             </div>
//         `;

//         postsContainer.appendChild(postElement);
//     });
// }

// document.addEventListener("DOMContentLoaded", renderPosts);