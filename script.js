let wrapper=document.getElementById("btn");
let button=document.createElement('button');
button.innerText="Click";
wrapper.appendChild(button);
button.addEventListener('click',function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((rr)=>{
        return rr.json();
    }).then((ttt)=>{
        let img_element=document.getElementById('image');
        let img=document.createElement('img');
        img.src=ttt.message;
        img_element.appendChild(img);
    })
    .catch((err)=>{
        console.log(err);
    })

})

