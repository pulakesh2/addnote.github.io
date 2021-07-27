shownotes();
var add =  document.getElementById('add');

add.addEventListener('click',()=>{
    var notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }else{
        notesobj = JSON.parse(notes);
    }
    var text =  document.getElementById('text');
    notesobj.push(text.value);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    text.value = "";
    shownotes();
})

function shownotes() {
    var notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }else{
        notesobj = JSON.parse(notes);
    }
    localStorage.setItem('notes',JSON.stringify(notesobj));

   
    var html = '';
    notesobj.forEach((element,index) => {
        html += `
        <div class="card col-6" id="card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-danger" class="del" id = "${index}" onclick= "deletenote(this.id);" >Delete</button>
        </div>
    </div> `;
    var addnotes = document.getElementById('notes');
    if(notesobj.length != 0){
        addnotes.innerHTML = html;
    }else{
        addnotes.innerHTML = "no notes added";
    }
    
    });

}



function deletenote(index) {
    var notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }else{
        notesobj = JSON.parse(notes);
    }
    
    notesobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    shownotes();
}

var search = document.getElementById('searchtxt');
search.addEventListener('input',()=>{
    var searchtxt = search.value;
    var item = document.getElementsByClassName('card');
    Array.from(item).forEach(element => {
        var carditem = element.getElementsByTagName('p')[0].innerText;
        if(carditem.includes(searchtxt)){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
    });
})
