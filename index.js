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

const newsfeedEl = document.getElementById("news-feed")

function renderpost(){

for (let i = 0; i < posts.length; i++) { 
    let showpost = ""
   showpost += `<div class = "img-text">
                    <img class = "vangogh-img" src = ${posts[i].avatar} alt = "an avatar of vincent vangogh">
                    <div>
                        <h3 class = "img-name">${posts[i].name}</h1>
                        <p class="img-p img-name">${posts[i].location}</p>
                    </div>
                </div>
                
                <div>
                <img class = "img-post" src = ${posts[i].post}>
                 </div>
                 <footer>
                    <div class = "img-react">
                        <img class = "img-heart" src = "images/icon-heart.png" alt = "clickable emoji for likes">
                        <img class = "img-comment" src = "images/icon-comment.png" alt = " click and make a comment">
                        <img class = "img-dm" src = "images/icon-dm.png">
                        <p> <span class = "likes">${posts[i].likes} </span>likes</p>
                        <p> <span class = "likes">${posts[i].username}</span> ${posts[i].comment}</p>
                         
                    </div>
                    </footer>
                 
                
                `
    newsfeedEl.innerHTML += showpost
}

}
renderpost()
