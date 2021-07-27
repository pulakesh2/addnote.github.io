//creating a book object

function Book(name, author, type, price) {
    this.name = name;
    this.author = author;
    this.type = type;
    this.price = price;
}

//creating a display object to show the books

function Display() {
    
}
// construct the object by prototype
Display.prototype.showbook =  function(book){
    var innertext;
    var addlist = document.getElementById('addlist');
    innertext = ` 
          <tr class="list">
               <td>${book.name}</td>
               <td>${book.author}</td>
               <td>${book.type}</td>
               <td>${book.price}</td>
              
          </tr>
         
          `;
    
     
    addlist.innerHTML += innertext;
}
//  form validation ----->
Display.prototype.validate = function(book){
    if((book.name.length < 4) || (book.author.length < 4) || (book.price.length < 2) || (book.price <= 0)){
        return false; 
    }else{
        return true;
    }
}
//  add alert head -->
Display.prototype.alertshow = function(type,msg){
    var alert = document.getElementById('alert');
    var talert = `
    <div class="alert alert-${type}" role="alert">
    ${msg}
  </div>     
    `;
    alert.innerHTML = talert;
    //  adding timer -->
    setTimeout(function(){
           alert.innerHTML = ``;
    },3000)
}

  var submit = document.getElementById('formsubmit');
// add event to the form

submit.addEventListener('submit', showbook);

function showbook(e) {
    e.preventDefault();
    // now target html by using javascript
    var bookname = document.getElementById('bookname').value;
    var author = document.getElementById('author').value;
    var price = document.getElementById('price').value;
    var maths = document.getElementById('maths');
    var chemistry = document.getElementById('chemistry');
    var physics = document.getElementById('phy');
    var type;
    if (maths.checked) {
        type = maths.value;
    }
    else if (chemistry.checked) {
        type = chemistry.value;
    }
    else if (physics.checked) {
        type = physics.value;
    }
    var book = new Book(bookname, author, type, price);
    var display = new Display();
    if( display.validate(book)){
         display.alertshow('success','your book completely submitted....');
         display.showbook(book);
    }else{
        display.alertshow('danger','something wrong....');
    }
   
    submit.reset();
}

var button = document.getElementById('btn');
button.addEventListener('click',deletelist);

function deletelist(){
        var num = document.getElementsByClassName('list').length;
        console.log(num);
        var list = document.getElementsByClassName('list')[num-1];
        
        var dellist = document.getElementById('addlist');
        // console.log(list);
        dellist.removeChild(list);
}    