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
            <img src="${post.post}" alt="Post image" class="post-image">
            <div class="post-footer">
                <p><strong>${post.likes} likes</strong></p>
                <p><strong>${post.username}</strong> ${post.comment}</p>
            </div>
        </div>
    
    `;

}

















































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