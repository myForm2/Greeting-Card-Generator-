   const card =document.getElementsByClassName("Card")[0]
    const name = document.getElementById("name");
    
    const message = document.getElementById("message");
    const head = document.getElementById("title");
    const greeting = document.getElementById("note");
    let toggle=false;
    function showgreet() {
      if (name.value==="" || message.value===""){alert ("please fill them");return;}
     if(!toggle){ head.textContent="hello " + name.value +"!";
      greeting.textContent=message.value;
      head.style.marginRight="1cm"
      ;
      greeting.style.textAlign="center";
      head.style.fontFamily="cursive";
        greeting.style.fontFamily="cursive";
      card.style.backgroundColor="lightPink";}
      else {
    head.textContent = "Welcome!";
    greeting.textContent = "Your message will appear here";
    head.style.marginRight = "0";
    greeting.style.textAlign = "left";
    head.style.fontFamily = "inherit";
    greeting.style.fontFamily = "inherit";
    card.style.backgroundColor = "white";
  }


      toggle = !toggle;
      }
