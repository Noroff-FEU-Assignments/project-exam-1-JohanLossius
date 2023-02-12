// Home page

const postSlidesContainerId = document.getElementById("post-slides-container");
const slide = document.querySelector(".slide");

const leftButton = document.getElementById("slide-arrow-left");
const leftButtonDiv = document.querySelector(".carousel-section-arrow-left");

const rightButton = document.getElementById("slide-arrow-right");
const rightButtonDiv = document.querySelector(".carousel-section-arrow-right");

const carouselDivHome = document.querySelector(".carousel-container-home");
const carouselSection = document.querySelector(".carousel-section");

const seeAllBlogPostsButton = document.querySelector(".see-more-div-blog");

// rightButton.addEventListener("click", (event) => {
//     const slideWidth = slide.clientWidth;
//     postSlidesContainerId.scrollLeft += slideWidth;
// });

// leftButton.addEventListener("click", (event) => {
//     const slideWidth = slide.clientWidth;
//     postSlidesContainerId.scrollLeft -= slideWidth;
// });

/** Blog post preview code */

let nrOfBlogPostsFetched = 100;
const urlApiBlogPosts = `https://productpassion.no/Productpassion/wp-json/wc/store/products?per_page=${nrOfBlogPostsFetched}`;

let indexStart = 0;
let breakIndex = 3;

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

            carouselDivHome.innerHTML += `   <a href="blog-post.html?postId=${postId}&postTitle=${postTitle}" title="${postTitle}" class="blog-preview-slide">
                                                <h3 class="blog-preview-title-slide">${postTitle}</h3>
                                                <img src="${imageUrl}" alt="${featuredImageDescription}" class="blog-preview-image-slide">
                                                <p class="blog-preview-paragraph-slide">${postExcerpt}</p>
                                                <h4 class="read-full-blog-preview-slide">[... Click to read full ...]</h4>
                                            </a>`

            // postSlidesContainerId.innerHTML += `    <li class="post-slide">
            //                                             <a href="blog-post.html?postId=${postId}&postTitle=${postTitle}" title="${postTitle}" class="blog-preview-slide">
            //                                                 <h3 class="blog-preview-title-slide">${postTitle}</h3>
            //                                                 <img src="${imageUrl}" alt="${featuredImageDescription}" class="blog-preview-image-slide">
            //                                                 <p class="blog-preview-paragraph-slide">${postExcerpt}</p>
            //                                                 <div class="read-full-blog-preview-slide">[... Click to read full ...]</div>
            //                                             </a>
            //                                         </li>`

            // postSlidesContainerId.innerHTML += `    <a href="blog-post.html?postId=${postId}&postTitle=${postTitle}" title="${postTitle}" class="blog-preview">
            //                                             <h3 class="blog-preview-title">${postTitle}</h3>
            //                                             <img src="${imageUrl}" alt="${featuredImageDescription}" class="blog-preview-image">
            //                                             <p class="blog-preview-paragraph">${postExcerpt}</p>
            //                                             <div class="read-full-blog-preview">[... Click to read full ...]</div>
            //                                         </a>`

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

leftButton.addEventListener("click", () => {
    indexStart -= 4;
    breakIndex -= 4;

    if (indexStart <= 0) {
        indexStart = 0;
        breakIndex = 3;
    }

    carouselDivHome.innerHTML = "";
    blogPostCall();
});

rightButton.addEventListener("click", () => {
    indexStart += 4;
    breakIndex += 4;

    if (breakIndex >= 12) {
        indexStart = 8;
        breakIndex = 11;
    }

    carouselDivHome.innerHTML = "";
    blogPostCall();
});