console.log("hello");
let sources = localStorage.getItem("mySource")
console.log(sources)
const APIURL =`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=ac6655e80bfd4e518f7c139b824b74c2`
//  const api_key= ac6655e80bfd4e518f7c139b824b74c2
let news = document.getElementById("news");
let source=document.getElementById("source")
source.innerHTML=`${sources}`
newsHTML=""
const xhr = new XMLHttpRequest();
xhr.open('GET', APIURL, true);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText)
    let articles = json.articles
    articles.forEach((element,index) => {
      console.log(articles)
      console.log(index)
      let headlines = 
      `<div class="accordion mt-2" id="news">
          <div class="accordion-item">
            <h2 class="accordion-header to-dark" id="heading${index}">
              <button class="accordion-button collapsed mt-2 to-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                ${element["title"]}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse to-dark" aria-labelledby="heading${index}" data-bs-parent="#accordiExample">
              <div class="accordion-body to-dark">
                ${element["content"]}. <a href="${element["url"]}" target="_blank">Read More</a>
              </div>
            </div>
          </div>
        </div>`
        newsHTML+=headlines
    });
    news.innerHTML=newsHTML
  }
}
xhr.send()


