var btnheart=document.getElementsByClassName('like');
var quantite=document.getElementsByClassName('quantity');
var qte=document.getElementsByClassName('Quant');
var prix=document.getElementsByClassName('price');
var supprimer= document.getElementsByClassName('delete');
var items= document.getElementsByClassName('Item');
var prixfinal = document.getElementById('finalPrice');

//btn coeur
for (var i = 0; i < btnheart.length; i++) {
        let like=btnheart[i];
    like.addEventListener('click', function(){
        if (like.firstElementChild.style.color == 'black'){
            like.firstElementChild.style.color='red';
        }
        else {like.firstElementChild.style.color='black';}
    });
}

//btn minus
for (var i = 0; i < quantite.length; i++) {
    let q=quantite[i].firstElementChild;
    q.addEventListener('click', function(){
        if (q.nextElementSibling.value>1)
        {q.nextElementSibling.value--;
           total();
           stotal1(); stotal2(); stotal3();
       }
    });
}

//btn plus
for (var i = 0; i < quantite.length; i++) {
   let q=quantite[i].lastElementChild;
   q.addEventListener('click', function(){
       q.previousElementSibling.value++;
       total();
       stotal1(); stotal2(); stotal3();
   });
}

//suppression item
for (var i=0; i< supprimer.length; i++){
   let supp = supprimer[i];
   supp.addEventListener('click', function(){
         supp.parentElement.remove() ;
         total();
         stotal1(); stotal2(); stotal3();
   })
   total();
   stotal1(); stotal2(); stotal3();
}

//soustotal

function total() {
   let s = 0;
   for(var i=0; i<items.length; i++){
       let item = items[i];
       s =
       s + 
       item.querySelector(".Quant").value * 
       item.querySelector(".price").innerText ;
   }
   return (prixfinal.value=s);
}


function stotal1 () {
   let q1=document.getElementById('q1');
   let p1=document.getElementById('p1');
   p1.innerText = q1.value * 1379 ;
}

function stotal2 () {
   let q2=document.getElementById('q2');
   let p2=document.getElementById('p2');
   p2.innerText = q2.value * 176 ;
}

function stotal3 () {
   let q3=document.getElementById('q3');
   let p3=document.getElementById('p3');
   p3.innerText = q3.value * 249 ;
}