var button = document.getElementById('button');
var ul = document.getElementById("pizza");
var check = document.getElementById("check");
var inputs = document.querySelectorAll("input")




button.addEventListener("click",function(){
    var name = document.getElementById("name").value;
    var lp = document.getElementById("lp").value;
    var hp = document.getElementById("hp").value;
    var imgsrc = document.getElementById("file").value;
    if(name !==""&lp !==""&hp !==""){
    const item = document.createElement("li");
    ul.appendChild(item);
    item.innerHTML = 
        '<div id="namee"> ' + name + ' ( '+lp+' <span class="le">L.E</span> - '+hp+' <Span class = "le">L.E</span> )</div> ' +

    '<div class="selectss">'+
    
      '<p><img class="img" src="/piz.png"/></p>'+
        
      '<p id="description">(pizza + Cheese + Meat + Vegetables)</p>'+

      '<div class="selects">'+

       ' <select  id="size">'+
            '<option value="0"></option>'+
             '<option value="small">small</option>'+
             '<option value="Large">Large</option>'+
        '</select>'+

        '<select id="quantity" >'+
        'How many pieces ?!'+
        '<option value="0">0</option>'+
        '<option value="1">1</option>'+
        '<option value="2">2</option>'+
        '<option value="3">3</option>'+
        '<option value="4">4</option>'+
        '<option value="5">5</option>'+
        
       ' </select>'+
     ' </div>'+
   ' </div>'
   

        check.textContent= "Done!";
        button.classList.add('disabled');
        button.blur()
        setTimeout(function() {
            inputs.forEach(input=> input.value="");
            check.textContent= "Add a new one!";

                setTimeout(function() {
                check.textContent= "";
                }  ,2000);
                
        }  ,2000);
        
        
    }
    else{
        
        check.textContent= "Please enter values!"
        setTimeout(function() {
            check.textContent= "";               
        }  ,3000);
    }           
})  


function ewr(){

    button.classList.toggle('disabled')

}

document.getElementById('hp').oninput= function(){
    var name = document.getElementById("name").value;
    var lp = document.getElementById("lp").value;
    var hp = document.getElementById("hp").value;
    if(name !==""&lp !==""&hp !==""){
    button.classList.remove('disabled')
    }
    else{button.classList.add('disabled')}
}
/*var arrayMenu = document.getElementsByClassName('r');
for(var i = 0 ; i <= 4 ; i++){
arrayMenu.forEach(x=>x.addEventListener('click',function(){

    this
}))    */

