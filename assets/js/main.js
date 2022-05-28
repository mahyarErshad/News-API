'use strict';
import createCards from "./createcards.js";
const API_KEY = `2fba155078c74111ac18b5b8b0077da2`;
const button = document.querySelector("button");
const input = document.getElementById("search-input")

button.addEventListener("click" , async ()=>{
    const search = input.value;
    const API_URL = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${API_KEY}`;
    const res = await fetch(API_URL);
    const data = await res.json();
    // console.log(data);
    const articles = data.articles;
    console.log(articles);
    input.value = "";
    createCards(articles);
})

input.addEventListener("keyup", async (e)=>{
    if(e.keyCode === 13){
        const search = input.value;
        const API_URL = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${API_KEY}`;
        const res = await fetch(API_URL);
        const data = await res.json();
        // console.log(data);
        const articles = data.articles;
        console.log(articles);
        input.value = "";
        createCards(articles);
    }
});

