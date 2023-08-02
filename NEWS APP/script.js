console.log("yep")
main=document.getElementById("main")

cards=document.getElementById("cards")
sourceArray=[]
cardsHTML=""
let newsSource=""
let visitSource =((index)=>{
    console.log(index)
    localStorage.setItem("mySource",index);
   
});
var darkBtn=document.getElementById("darkbtn");
let heading1=document.getElementById("heading")
var todark=document.getElementById("to-dark")
let settingsMenuToggle=()=>{
    //darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("darktheme")
   
   
    //card text-white bg-dark
    
}

localStorage.setItem("theme","dark");
localStorage.getItem("theme");


const xhr = new XMLHttpRequest();
xhr.open('GET', "https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=ac6655e80bfd4e518f7c139b824b74c2", true);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText)
      let sources=json.sources
      //console.log(sources)
    sources.forEach((element,index) => {
        sourceArray.push(`${element["name"]}`)
       // console.log(element)
        let cardDisplay=`
        <div class="col-md-4">
                <div   class="card my-2 to-dark" style="width: 18rem;">
                    <img src="https://source.unsplash.com/random/?${element["name"]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">${element["name"]}</h5>
                        <p class="card-text">${element["description"]}</p>
                        <a id="main" onclick="visitSource(sourceArray[${index}])" href="main.html"  target="_blank" class="btn btn-primary">Check out the headlines</a>
                    </div>
                </div>
                </div>
              
        
        `
    
    //main.addEventListener("click",visitSource(sourceArray[index]))

    cardsHTML+=cardDisplay
});
    cards.innerHTML=cardsHTML
  }
}
xhr.send()

     







