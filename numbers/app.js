// const favNumFact = document.createElement('h1')
const numbersUrl = 'http://numbersapi.com'

$.getJSON(`${numbersUrl}/10?json`).then(res => {
   const favNum = $('#fav-num')
   const resText = res.text
   favNum.text(resText)
});


$.getJSON(`${numbersUrl}/1..4?json`).then(res => {
   for(let k of Object.keys(res)){
      $(`body`).append($(`<li>${res[k]}</li>`))
   }
   $(`body`).append(`<hr>`)
})


const apiCalls = [];

for(let i = 0; i <= 3; i++){
   apiCalls.push($.getJSON(`${numbersUrl}/10?json`))
}

Promise.all(apiCalls)
.then(responses => {
   for(let res of responses){
      $(`body`).append($(`<li>${res.text}</li>`))
   }
})




