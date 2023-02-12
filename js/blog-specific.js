// Blog specific page

const queryString = document.location.search;
console.log(queryString);

const queryParams = new URLSearchParams(queryString);
console.log(queryParams);

const postTitle = queryParams.get("postTitle");
console.log(postTitle);

const postId = queryParams.get("postId");
console.log(postId);

let nrOfBlogPostsFetched = 100;
const urlApiBlogPosts = `https://productpassion.no/Productpassion/wp-json/wc/store/products?per_page=${nrOfBlogPostsFetched}`;
const urlSpecificPost = `https://productpassion.no/Productpassion/wp-json/wc/store/products/${postId}`;

const mainPostTitle = document.querySelector(".main-nav__title");
const introNavCont = document.querySelector(".main-nav__orientation");
const mainSectionBlogPost = document.querySelector(".main-section-blog-post");
const title = document.querySelector(".page-title");

async function postCall() {
    try {
        const response = await fetch(urlSpecificPost);
        const data = await response.json();
        const blogPost = data;
        console.log(blogPost);

        let postTitle = "";
        if (blogPost.name) {
            postTitle = blogPost.name;
            console.log(postTitle);
        } else {
            postTitle = "Blog Title Unknown";
            console.log(postTitle);
        }

        let postId = "";
        if (blogPost.id) {
            postId = blogPost.id;
            console.log(postId);
        } else {
            postId = "Blog ID Unknown";
            console.log(postId);
        }

        let imageUrl = "";
        if (blogPost.images[0].src) {
            imageUrl = blogPost.images[0].src;
            console.log(imageUrl);
        } else {
            imageUrl = "";
            console.log(imageUrl);
        }

        let featuredImageDescription = "";
        if (blogPost.images[0].alt) {
            featuredImageDescription = blogPost.images[0].alt;
            console.log(featuredImageDescription);
        } else {
            featuredImageDescription = "";
            console.log(featuredImageDescription);
        }

        let postText = "";
        if (blogPost.description) {
            postText = blogPost.description;
            console.log(postText);
        } else {
            postText = "Sorry, failed to load post text.";
            console.log(postText);
        }

        title.innerHTML = `${postTitle} | Product Passion`;
        introNavCont.innerHTML = `You are here: <a href="index.html" class="product-passion-nav" title="Home">Product Passion</a> -> <a href="blog.html" class="product-passion-nav" title="Blog" >Blog</a> -> <a href="blog-post.html?postId=${postId}&postTitle=${postTitle}" class="product-passion-nav" title="${postTitle}">${postTitle}</a>`;

        mainSectionBlogPost.innerHTML += `   <div class="blog-specific-post-cont">
                                                <h2 class="blog-specific-post-title">${postTitle}</h2>
                                                <div class="bloc-specific-image-div">
                                                    <img src="${imageUrl}" alt="${featuredImageDescription}" class="blog-specific-image modal-class" id="modal-image-id">
                                                </div>
                                                <div class="blog-specific-post-text">${postText}</div>
                                            </div>`
    }
    catch (error) {
        console.log(error);
    }
};

postCall();


// Code below does not work until dynamically created HTML elements are appended to DOM. I needed more time to figure out how to do this, before I can implement the modal image dynamically. See test-blog-blog.html for modal image implemented without using dynamical HTML/JS.

// Select the modal div
// const modal = document.getElementById("modal-div-id");
// console.log(modal);

// Get the image and insert it inside the modal
// const img = document.getElementById("modal-image-id");
// const modalImg = document.getElementById("img01");
// img.onclick = function(){
// modal.style.display = "block";
// modalImg.src = this.src;
// }

// Close modal when click outside the modal image
// window.onclick = function(event) {
//     let classNameClick = event.target.className;
//     console.log(classNameClick);

//     if (classNameClick === "modal-div-class" || classNameClick === "close") {
//       modal.style.display = "none";
//     }
// };