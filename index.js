
    var price = document.getElementById('price');
    var host = document.getElementById("hostel");
    var mess = document.getElementById("mess");
    var newp = document.getElementById("price").innerHTML;
    var en1=document.getElementById("en1");
    var en2=document.getElementById("en2");
    var en3=document.getElementById("en3");
    var en4=document.getElementById("en4");
    var en5=document.getElementById("en5");
    var en6=document.getElementById("en6");
    var cor=document.getElementById("cor");
    var value=0;
    en6.onclick = function(){
        window.location.href='#checkout';
            price.innerHTML="200";
            cor.innerHTML="Wealthyfy";
            value=200;
    };
    en5.onclick = function(){
        window.location.href='#checkout';
            price.innerHTML="100";
            cor.innerHTML="Patrick's Gym";
            value=100;
    };
    en4.onclick = function(){
        window.location.href='#checkout';
            price.innerHTML="100";
            cor.innerHTML="Soul Soup";
            value=100;
    };
    en3.onclick = function(){
        window.location.href='#checkout';
            price.innerHTML="300";
            cor.innerHTML="Mobilearn";
            value=300;
    };
    en2.onclick = function(){
        window.location.href='#checkout';
            price.innerHTML="350";
            cor.innerHTML="Confidante";
            value=350;
    };
    en1.onclick = function(){
        window.location.href='#checkout';
            price.innerHTML="300";
            cor.innerHTML="Squidward's Maturans";
            value=300;
    };
    host.onclick= function() {
    if (host.checked == true){
        value = value+100;
        document.getElementById("price").innerHTML = value;
      } else {
        value = value-100;
                document.getElementById("price").innerHTML = value;
      }
    };
    mess.onclick=function(){
    if (mess.checked == true){
        value = value+50;
                        document.getElementById("price").innerHTML = value;
      } else {
        value = value-50;
                        document.getElementById("price").innerHTML = value;
      }
    };


