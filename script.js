const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button"),
    authorName = document.querySelector(".author .name"),
    soundbtn = document.querySelector(".sound"),
    copybtn = document.querySelector(".copy"),
    twitterbtn = document.querySelector(".twitter");
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";
    fetch('https://random-quotes-freeapi.vercel.app/api/random')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            quoteText.innerText = data.quote;
            authorName.innerText = data.author;
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("loading");
        });
}
soundbtn.addEventListener("click",()=>{
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});
copybtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterbtn.addEventListener("click", ()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorName.innerText}`;
    window.open(tweetUrl,"_blank");
});
quoteBtn.addEventListener("click", randomQuote);