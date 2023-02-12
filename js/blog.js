// Blog Preview Display

let nrOfBlogPostsFetched = 100;
const urlApiBlogPosts = `https://productpassion.no/Productpassion/wp-json/wc/store/products?per_page=${nrOfBlogPostsFetched}`;

const mainSectionBlog = document.querySelector(".main-section-blog");
const seeMoreButton = document.querySelector(".see-more-div-blog");

let indexStart = 0;
let breakIndex = 9;

async function blogPostCall() {
    try {
        const response = await fetch(urlApiBlogPosts);
        const data = await response.json();
        const blogPosts = data;
        console.log(blogPosts);
        
        for (let i = indexStart; i < blogPosts.length; i++) {

            console.log(blogPosts[i].name);

            let postTitle = "";
            if (blogPosts[i].name) {
                postTitle = blogPosts[i].name;
                console.log(postTitle);
            } else {
                postTitle = "Blog Title Unknown";
                console.log(postTitle);
            }

            console.log(blogPosts[i].id);

            let postId = "";
            if (blogPosts[i].id) {
                postId = blogPosts[i].id;
                console.log(postId);
            } else {
                postId = "Blog ID Unknown";
                console.log(postId);
            }

            console.log(blogPosts[i].images[0].src);

            let imageUrl = "";
            if (blogPosts[i].images[0].src) {
                imageUrl = blogPosts[i].images[0].src;
                console.log(imageUrl);
            } else {
                imageUrl = "";
                console.log(imageUrl);
            }

            console.log(blogPosts[i].images[0].alt);

            let featuredImageDescription = "";
            if (blogPosts[i].images[0].alt) {
                featuredImageDescription = blogPosts[i].images[0].alt;
                console.log(featuredImageDescription);
            } else {
                featuredImageDescription = "";
                console.log(featuredImageDescription);
            }

            console.log(blogPosts[i].short_description);

            let postExcerpt = "";
            if (blogPosts[i].short_description) {
                postExcerpt = blogPosts[i].short_description;
                console.log(postExcerpt);
            } else {
                postExcerpt = "...";
                console.log(postExcerpt);
            }

            mainSectionBlog.innerHTML += ` <a href="blog-post.html?postId=${postId}&postTitle=${postTitle}" title="${postTitle}" class="blog-preview">
                                                <h3 class="blog-preview-title">${postTitle}</h3>
                                                <img src="${imageUrl}" alt="${featuredImageDescription}" class="blog-preview-image">
                                                <p class="blog-preview-paragraph">${postExcerpt}</p>
                                                <div class="read-full-blog-preview">[... Click to read full ...]</div>
                                            </a>`

            if (i >= breakIndex) {
                break;
            }
        }
    }
    catch (error) {
        console.log(error);
    }
};

blogPostCall();

seeMoreButton.addEventListener("click", seeMoreFunction);

function seeMoreFunction () {
    indexStart += 10;
    breakIndex += 10;
    blogPostCall();
};