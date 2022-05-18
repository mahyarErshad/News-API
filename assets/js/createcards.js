'use strict';
export default function createCards(articles){
    const main = document.getElementById("main");
    main.innerHTML = "";
    articles.forEach((article)=>{
        const card = document.createElement("div");
        card.className = "card col-md-4 col-sm-6 col-xs-10 col-lg-3 mx-2 p-2 my-2";
        card.innerHTML = `
                <img class = "card-img-top mb-1" src = "${article.urlToImage}"" >
                <div class = "card-body" >
                    <h5 class = "card-title mb-1 fw-bold" > ${article.title} </h5>
                    <p class ="text-justify card-text mb-1">${article.description}</p>
                    <p class ="article-date bg-primary rounded-3 mb-1 p-2 text-white">${article.publishedAt}</p>
                </div>
        `;
        main.appendChild(card);
    })
}