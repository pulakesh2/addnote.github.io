// 1fcaa2934bc04a97af45203d66ed61fa

// https://newsapi.org/v2/top-headlines?country=in&apiKey=1fcaa2934bc04a97af45203d66ed61fa

//create xhr object

var xhr =  new XMLHttpRequest();
// add sourch and GET method to get the information and asyncrounous 
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=1fcaa2934bc04a97af45203d66ed61fa',true);
// what to do when page is loaded
xhr.onload = function(){
    // if everything is all good do this
    if(this.status ===200){
        // convert the reponse text to the array object by using JSON.parse method-->
        var content = JSON.parse(this.responseText);
        var news = content.articles;
        var html = '';
        // go to the articles array from content array-->
        console.log(content.articles[0].title);
        console.log(news);
        // create a function which act on all the individual array or poperty-->
        news.forEach((element,index) => {
            // add acordian from bootstrap consist of title and description-->
            html += `
            <div class="accordion accordion-flush" id="accordionFlushExample my-4">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                    ${index+1}. ${element.title}
                    </button>
                </h2>
                <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body" id="back">${element.description} <a href="${element.url}">learn more</a></div>
                    
                </div>
            </div>
           
    </div>
            `;
        });
        // target newslist id div element-->
        var newscontent = document.getElementById('newslist');
        // add html to the main div element-->
        newscontent.innerHTML = html;
    }else{
         var msg = document.getElementById('newslist');
         // if something wrong... then show this msg to the user-->
         msg.innerHTML = "<h3>something wrong with the server........</h3>";
    }
}
xhr.send();