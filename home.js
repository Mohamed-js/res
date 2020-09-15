// type writer effect

    var text1 = "Get the best offers Now! ";
    var text2 = "All you need is to click Order now! ";
    var text3 = "If you weren't happy, our food will make you Great :D ";
    var show = document.getElementById('show');
    var i =0;


hello()

      function hello(){show.innerHTML = "";
      i=0;
      let int1 = setInterval( function h(){
         
         if(i < text1.length){ 
          show.textContent += text1[i]
          i++ 
         }
   
   
         if(i>=text1.length){
            i =0;
            show.innerHTML= "";
            clearInterval(int1)
   
            // 
            let int2 = setInterval( function(){
         
               if(i < text2.length){
                   
                show.textContent += text2[i]
                i++;
                   
               }
   
               if(i>=text2.length){
                  i =0;
                  show.innerHTML= "";
                  clearInterval(int2);
   
                  let int3 = setInterval( function(){
         
                     if(i < text3.length){
                         
                      show.textContent += text3[i]
                      i++;
                         
                     }
         
                     if(i>=text3.length){
                        i =0;
                        show.innerHTML= "";
                        clearInterval(int3);
                        
                        hello()
                     }
         
                  }, 200); 
               }
   
            }, 200);
   
         }},200)
   }