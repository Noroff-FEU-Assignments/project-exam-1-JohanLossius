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

        introNavCont.innerHTML = `You are here: <a href="index.html" class="product-passion-nav" title="Home">Product Passion</a> -> <a href="blog.html" class="product-passion-nav" title="Blog" >Blog</a> -> <a href="blog-post.html?postId=${postId}&postTitle=${postTitle}" class="product-passion-nav" title="${postTitle}">${postTitle}</a>`;

        // mainPostTitle.innerHTML = `${postTitle}`;

        mainSectionBlogPost.innerHTML = `   <div class="blog-specific-post-cont">
                                                <h2 class="blog-specific-post-title">${postTitle}</h2>
                                                <div class="bloc-specific-image-div">
                                                    <img src="${imageUrl}" alt="${featuredImageDescription}" class="blog-specific-image">
                                                </div>
                                                <div class="blog-specific-post-text">${postText}</div>
                                            </div>`
    }
    catch (error) {
        console.log(error);
    }
};

postCall();