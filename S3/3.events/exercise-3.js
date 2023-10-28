const input$$ = document.querySelector('inout');
input$$.addEventListener('input', getvalue);

function getvalue(e){
    console.log(this.value);
}