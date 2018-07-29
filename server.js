$('.btn').on('click', function(){
    event.preventDefault();
    for(let i = 1; i <= 10; i++){
    let name = ('inlineRadioOptions'+i);
    let h = $(`input[name = "${name}"]:checked`)
    let q1 = h.val();
    console.log(q1);   
    } 
})
