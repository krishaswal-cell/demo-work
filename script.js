 function changeColourfirst(){
    const a = document.getElementById('box-1');
    a.style.backgroundColor="red";
 }

 function changeColoursecond(){
    const b = document.getElementById('box-2');
    b.style.backgroundColor="blue";
 }

 function changeColourthird(){
    const c = document.getElementById('box-3');
    c.style.backgroundColor="green";
 }

 function changeColourfourth(){
    const d = document.getElementById('box-4');
    d.style.backgroundColor="yellow";
 }


function addname(){
      const name = document.getElementById('btn');
      name.addEventListener('click', function (){
      const userName = document.getElementById('username').value;
      const heading = document.getElementById('name');
      heading.innerText = ", " + userName;
      });
}


