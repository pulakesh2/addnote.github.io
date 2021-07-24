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

    var addnotes = document.getElementById('notes');
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
    if(notesobj.length != 0){
        addnotes.innerHTML = html;
    }else{
        addnotes.innerHTML = '<h4>no notes added</h4>';
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