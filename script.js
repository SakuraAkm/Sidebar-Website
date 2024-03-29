const arrowMenu = document.querySelector(".arrow");
const arrow = document.getElementById("arrow");
const menu = document.querySelector(".navbar");
const textMenu = document.querySelectorAll(".link-text");
const menuSections = document.querySelectorAll(".navbar .nav-item");
const sections = document.querySelectorAll("sections");
const pointers = document.querySelectorAll(".pointer");
const body = document.querySelector("body");

// SECTIONS
const home = document.getElementById("home");
const posts = document.getElementById("posts");
const game = document.getElementById("game");
const contactUs = document.getElementById("contact-us");

// NAVIGATION MENU
arrowMenu.addEventListener("click", () => {
    arrow.classList.toggle("rotate");
    menu.classList.toggle("navbar-wide");

    pointers.forEach(pointer => {
        pointer.classList.toggle("hide");
    })

    textMenu.forEach(text => {
        text.classList.toggle("hide");
    })
})

menuSections.forEach(section => {

    section.addEventListener("click", () => {

        menuSections.forEach(section => {
            section.classList.remove("selected-border");
            section.children[0].classList.remove('selected-color');
        })

        section.classList.add("selected-border");
        section.children[0].classList.add('selected-color');

        if (section.children[0].children[1].innerText == "HOME") {
            posts.classList.add("hide");
            game.classList.add("hide");
            contactUs.classList.add("hide");
            home.classList.remove("hide");
        } else if (section.children[0].children[1].innerText == "POSTS") {
            home.classList.add("hide");
            game.classList.add("hide");
            contactUs.classList.add("hide");
            posts.classList.remove("hide");
        } else if (section.children[0].children[1].innerText == "GAME") {
            home.classList.add("hide");
            posts.classList.add("hide");
            contactUs.classList.add("hide");
            game.classList.remove("hide");
        } else if (section.children[0].children[1].innerText == "CONTACT US") {
            home.classList.add("hide");
            posts.classList.add("hide");
            game.classList.add("hide");
            contactUs.classList.remove("hide");
        }

    })

})

// ENG / ITA
const langToggle = document.getElementById("language");
const eng = document.getElementById("ENG");
const ita = document.getElementById("ITA");
const homeEng = document.getElementById("home-ENG");
const homeIta = document.getElementById("home-ITA");
let count = 1;

langToggle.addEventListener("click", () => {
    ita.classList.toggle("toggle-switch");
    eng.classList.toggle("toggle-switch");
    ita.classList.toggle("opacity0");
    eng.classList.toggle("opacity0");

    count++;

    count % 2 == 0 ?
        homeEng.classList.toggle("opacity0") : homeIta.classList.toggle("opacity0");

    setTimeout(() => {
        homeEng.classList.toggle("hide");
        homeIta.classList.toggle("hide");
    }, 300);

    setTimeout(() => {
        count % 2 == 0 ?
            homeIta.classList.toggle("opacity0") : homeEng.classList.toggle("opacity0");
    }, 400);
})

// DARK / LIGHT THEME
const ying = document.querySelector(".ying");
const main = document.querySelector("main");

ying.addEventListener("click", () => {
    event.preventDefault();
    ying.children[0].children[0].classList.toggle("rotate");

    if (ying.children[0].children[1].textContent == "DARK MODE") {
        ying.children[0].children[1].textContent = "LIGHT MODE";
        main.classList.add("dark");
        main.classList.remove("light");
        body.classList.add("body-dark");
        body.classList.remove("body-light");
    } else {
        ying.children[0].children[1].textContent = "DARK MODE";
        main.classList.add("light");
        main.classList.remove("dark");
        body.classList.remove("body-dark");
        body.classList.add("body-light");
    }
})

// POSTS
const rowPosts = document.querySelector("#posts .posts-row");
const searchInput = document.getElementById("search-input");
const openCreatePost = document.getElementById("add-post");
const closeCreatePost = document.getElementById("X");
const createPost = document.getElementById("create-post");


// open and close the menu to post
openCreatePost.addEventListener("click", () => {
    createPost.classList.toggle("hide");
})
closeCreatePost.addEventListener("click", () => {
    createPost.classList.toggle("hide");
})

//get data from form and use them to make a card
const postImg = document.getElementById("post-img");
const postTitle = document.getElementById("post-title");
const postText = document.getElementById("post-text");
const submitPost = document.getElementById("submit-post");

postImg.addEventListener('change', function () {
    const fileName = this.files[0].name;
    document.getElementById('fileNameDisplay').textContent = fileName;
});

submitPost.addEventListener("click", () => {
    event.preventDefault();

    const card = document.createElement("div");
    card.classList.add("card");

    if (postImg.files.length > 0) {
        const selectedFile = postImg.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            // Create an image element
            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = "Uploaded Image";
            const div = document.createElement("div");
            div.classList.add("card-img");

            card.insertAdjacentElement("afterbegin", img);
        };

        // Read the contents of the selected file
        reader.readAsDataURL(selectedFile);
    }

    card.innerHTML += `
        <h2>${postTitle.value}</h2>
        <p>${postText.value}</p>`;

    console.log(card);
    createPost.classList.toggle("hide");
    rowPosts.insertAdjacentElement("afterbegin", card);
})



// added custom img because the API didnt have them
const myImgPosts = ["https://images.theconversation.com/files/314111/original/file-20200207-43095-1kj7lht.jpg?ixlib=rb-1.1.0&rect=0%2C109%2C4331%2C3051&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SZ7M6F4ZZUF3SY6SS4L5LO4CIU.JPG&w=1200",
    "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1587641561/1587641559.jpg",
    "https://i.guim.co.uk/img/media/716c16c7b979ed86ad5ad83ef66a8c2287c9508b/0_122_3657_2194/master/3657.jpg?width=465&dpr=1&s=none",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7P1yO8PVz7U-gi6lhfHV2Vgh3f0tQeWV3BA&usqp=CAU",
    "https://i.insider.com/5d3747e88d664206a06ace65?width=700",
    "https://img.freepik.com/premium-photo/different-colour-friends-outdoor_624325-3556.jpg",
    "https://media.npr.org/assets/img/2021/04/16/gettyimages-526104024_wide-f832375b3a8aee38e1d80f9c9070bea9d2ade4bc-s1100-c50.jpg",
    "https://img.freepik.com/free-vector/people-surrounded-by-social-media-icons-concept-illustration_52683-23429.jpg",
    "https://t4.ftcdn.net/jpg/05/58/87/03/360_F_558870341_8gf7XgOOhEC0h3tvdMitWPxDs748U9zr.jpg",
    "https://st2.depositphotos.com/1177973/11036/i/450/depositphotos_110367524-stock-photo-adult-anti-stress-coloring.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxH2kdGAMK6e59TL83eHWSQgZ9nQas7Ypljw&usqp=CAU",
    "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2016%2F08%2FWomen20Holding20iPhone20620Mockup2028129.jpg&signature=22d8efb76dc578330ed9f609f8266a86",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/new-post-online-instagram-template-design-2f14b9976df6cce94b46829fae185393_screen.jpg?ts=1610973635",
    "https://media.istockphoto.com/id/1462934693/photo/architect-team-working-with-blueprints-for-architectural-plan-engineer-sketching-a.jpg?s=612x612&w=0&k=20&c=XlxveebKNMpGVxmuqCWcnPoPjt8yznjpfHlRB5daaI8="
];
let usersPosts = [];

searchInput.addEventListener("input", (i) => {
    const value = i.target.value.toLowerCase();

    usersPosts.forEach(post => {
        const isVisible = post.title.toLowerCase().includes(value) || post.body.toLowerCase().includes(value);
        post.element.classList.toggle("hide", !isVisible);
    })
})

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        count = 0;

        usersPosts = data.map(post => {

            if (count > 14) {
                return null;  // to limit the amout of post since the api has 100 posts
            }

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            <div class="card">
                <div class="card-img">
                    <img src=${myImgPosts[count]} alt="image error">
                </div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`;

            count++;

            rowPosts.appendChild(card);
            return { element: card, title: post.title, body: post.body };
        })
    })
    .catch(error => {
        console.log("ERROR: " + error);
    })


// ROCK PAPER SCISSOR ~~~~~~~~~~~
const moves = document.querySelectorAll('.RPS-select');
const player = document.getElementById('me');
const opponent = document.getElementById('opponent');
const RPSajax = document.getElementById('RPSajax');

moves.forEach(move => {
    move.addEventListener("click", () => {
        let playerDecision = move.innerText;

        player.innerText = '';
        player.classList.remove("Rock", "Paper", "Scissor");
        player.classList.add(playerDecision);

        opponent.innerText = '';
        opponent.classList.remove("Rock", "Paper", "Scissor");
        let opponentDecision = Math.floor(Math.random() * 3) + 1;

        switch (opponentDecision) {
            case 1:
                opponentDecision = "Rock";
                break;
            case 2:
                opponentDecision = "Paper";
                break;
            case 3:
                opponentDecision = "Scissor";
                break;
        }

        opponent.classList.add(opponentDecision);

        if (opponentDecision == playerDecision) {
            RPSajax.innerText = "Draw!!";
        } else if (opponentDecision == "Paper") {
            return playerDecision == "Scissor" ? RPSajax.innerText = "You Win!!" : RPSajax.innerText = "You Lose!!"
        } else if (opponentDecision == "Scissor") {
            return playerDecision == "Rock" ? RPSajax.innerText = "You Win!!" : RPSajax.innerText = "You Lose!!"
        } else if (opponentDecision == "Rock") {
            return playerDecision == "Paper" ? RPSajax.innerText = "You Win!!" : RPSajax.innerText = "You Lose!!"
        }
    });
})

// CONTACT US
const contactUsSubmit = document.querySelector("#contact-us button");
const contactInputs = document.querySelectorAll("#contact-us input");
const contactTextarea = document.querySelector("#contact-us  textarea");
const contactAjax = document.getElementById("contact-ajax");

contactUsSubmit.addEventListener("click", () => {
    event.preventDefault();
    contactAjax.classList.remove("opacity0");
    filledInput = 0;

    contactInputs.forEach(input => {
        if (input.value == "" || input.value == null) {
            input.classList.remove("green-outline");
            input.classList.add("red-outline");
        } else {
            input.classList.remove("red-outline");
            input.classList.add("green-outline");
            filledInput++;
            console.log(filledInput);
        }
    })

    if (contactTextarea.value == "" || contactTextarea.value == null) {
        contactTextarea.classList.remove("green-outline");
        contactTextarea.classList.add("red-outline");
    } else {
        contactTextarea.classList.remove("red-outline");
        contactTextarea.classList.add("green-outline");
        filledInput++;
    }

    console.log(filledInput);

    if (filledInput == 4) {
        contactAjax.classList.remove("red");
        contactAjax.classList.add("green");
        contactAjax.innerText = "Thank you for your Feedback!";
        contactInputs.forEach(input => { input.value = ""; });
        contactTextarea.value = "";

        setTimeout(() => {
            contactInputs.forEach(input => { input.classList.remove("green-outline"); });
            contactTextarea.classList.remove("green-outline");
            contactAjax.classList.add("opacity0");
        }, 3500)

    } else {
        contactAjax.classList.remove("green");
        contactAjax.classList.add("red");
        contactAjax.innerText = "Some fields are not filled";
    }

});



