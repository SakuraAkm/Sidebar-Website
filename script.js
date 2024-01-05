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

const langToggle = document.getElementById("language")
const eng = document.getElementById("ENG");
const ita = document.getElementById("ITA");

langToggle.addEventListener("click", () => {
    ita.classList.toggle("toggle-switch");
    eng.classList.toggle("toggle-switch");
    ita.classList.toggle("opacity0");
    eng.classList.toggle("opacity0");
})

// POINTERS MOVING 

const tl = gsap.timeline({ repeat: -1 });
tl.to(pointers, { duration: 0.75, scale: 1.2, opacity: 1, delay: 5 })
    .to(pointers, { x: -15, duration: 0.75, stagger: 0.3, scale: 1.2, delay: 0.5 })
    .to(pointers, { x: 0, duration: 1, scale: 1, opacity: 0 })
    .to(pointers, { delay: 5 });


// DARK / LIGHT THEME
const ying = document.querySelector(".ying");
const main = document.querySelector("main");

ying.addEventListener("click", () => {
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
const rowPosts = document.querySelector("#posts .posts-row")
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxH2kdGAMK6e59TL83eHWSQgZ9nQas7Ypljw&usqp=CAU"
];

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < 12; i++) {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            <div class="card">
                <div class="card-img">
                    <img src=${myImgPosts[i]} alt="image error">
                </div>
                <h2>${data[i].title}</h2>
                <p>${data[i].body}</p>
            </div>`;

            rowPosts.appendChild(card);
        }

        /* WITH THE FOREACH

        data.forEach(post => {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            <div class="card">
                <div class="card-img">
                    <img src="https://placehold.co/240x135" alt="image error">
                </div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`;

            rowPosts.appendChild(card);
        })  */

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

