let Container = document.getElementsByClassName("Container")[0];
let showText = document.getElementById("show");
let BtnNo = document.getElementById("btnNo");
let img = document.getElementsByClassName("img-img")[0];
let BtnYes = document.getElementsByClassName("btnYes")[0];
const originalPosition = BtnNo.getBoundingClientRect();
let count = 0;
let SayYes = 0;
const Intro = ["L", "e", "t", "s" + " " + "P", "l", "a", "y" + " " + "A" + "  " + "G", "a", "m", "e" + " " + "😉"];
const text1 = ['H', 'a', 'a' + " " + "Y", "o", "u" + "  " + "C", "l", "i", "c", "k" + " " + "N", "o" + " " + "B", "t", "n"  + " " +  "🤔"];
const text2 = ['Y', 'o', "u" + " " + "A", "g", "a", "i", "n" + " " + "P", "r", "e", "s", "s" + " " + "N" + "o" + " " + "B", "t", "n"  + " " +  "🤨"];
const text3 = ["D", "o", "n'", "t" + " " + "M", "a", "k", "e" + " " + "M", "e" + " " + "A", "n", "g","e",  "r", "y" + " " + "👻"]
const text4 = ['O', 'k', 'h' + " " + "I", "t'", "s" + "  " + "Y", "o", "u", "r", " " + "C", "h", "o", "i", "c", "e" ];
const thanks = ["Y" , "o" , "u", "r"+" "+ "W" ,"e", "l" ,"c" , "o", "m" , "e" + "  " + "😁"];
showName(Intro);
// function to change img on saying NO 
async function ChangeImgfunc(src) {
    img.src = src;
}

// stop user for some time
function delay(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds);
    });
}

// function to check the position of No elm on saying NO
async function PositionChange() {
    const NoBtnSize = BtnNo.getBoundingClientRect();
    const btnWidth = NoBtnSize.width;
    const btnHeight = NoBtnSize.height;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const maxWidth = windowWidth - btnWidth;
    const maxHeight = windowHeight - btnHeight;
    const Width = Math.floor(Math.random() * maxWidth);
    const Height = Math.floor(Math.random() * maxHeight);
    BtnNo.style.position = "absolute"
    BtnNo.style.left = Width + "px";
    BtnNo.style.top = Height + "px";
}

function SetOrgPostion() {
    console.log("go to its original position")
    BtnNo.style.left = originalPosition.left + "px";
    BtnNo.style.top = originalPosition.top + "px";
}
async function showName(Action) {
    showText.innerHTML  = ""
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    for (let i = 0; i < Action.length; i++) {
        showText.innerText += Action[i];
        await sleep(80);
    }
}

// function to hover the elm
async function MainAction() {
    if (count >= 5) {
        Container.style.display = "none"
        let blast = document.getElementsByClassName("blast")[0];
        blast.style.display = "block"
        BtnNo.style.marginTop = "0px";
        ChangeImgfunc("https://media.tenor.com/bmI45-PiwI0AAAAM/cat-cute.gif");
        SetOrgPostion();
    } else {
        PositionChange()
    }
    if (count === 0) {
        showText.innerHTML = ""
        showName(text1)
        ChangeImgfunc("https://imgflip.com/s/meme/Scared-Cat.jpg");
    }
    if (count === 1) {
        showName(text2)
        ChangeImgfunc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCa2u9J9qTisGFgYLtqynJq38lrKA7l-8TFQgvwvYaqrfV0HD0jQxqt3qRxKzayora-M&usqp=CAU");
    }
    if (count === 2) {
        showName(text3)
        ChangeImgfunc("https://i.imgflip.com/4o2iy4.jpg?a474072")
    }
    if (count === 3) {
        showName(text4)
        ChangeImgfunc("https://i.kym-cdn.com/photos/images/newsfeed/001/878/329/dfa.jpg")
    }
    if (count === 4) {
        ChangeImgfunc("https://i.pinimg.com/474x/fd/1c/d3/fd1cd3deb21a7a64c6fe40a3a0fba86f.jpg")
    }
    if (count === 5) {
         showText.innerText =""
    }
    else {
        count++;
    }
    console.log(count);
}

// function when user click yes
 async function btnYesFunc(){ 
    ChangeImgfunc("https://media1.tenor.com/m/uBqT5bkx2KIAAAAC/welcome-cat.gif")
    showText.innerText = "";
    BtnNo.style.display = "none"
    BtnNo.removeEventListener("click" ,MainAction)
    BtnYes.classList.add("SayIngYes");
    showName(thanks)
    await delay(4000);
    BtnYes.classList.remove("SayIngYes");
    BtnYes.innerText = "";
     setTimeout(() => { BtnYes.innerText = "Nice Choice 😘"; }, 344);
    BtnYes.classList.add("Out")
    if (SayYes === 0) {
        img.src = "https://media1.tenor.com/m/uBqT5bkx2KIAAAAC/welcome-cat.gif";
        SayYes = 1;
        await delay(5000);
        window.location.href = "https://www.instagram.com/shubhampatidar_07?utm_source=qr&igsh=Z3k4c3JoODVmejJq";
    } else {
        BtnYes.removeEventListener("click", () => { });
    }
}

BtnNo.addEventListener("click", MainAction);
BtnYes.addEventListener("click", btnYesFunc);


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));