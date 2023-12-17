const Frame=document.getElementById('disply');
const addbtn=document.getElementById("btn");

addbtn.addEventListener('click',()=>{
    const Btittle=document.getElementById('title').value;
    const Bauthor=document.getElementById('author').value;
    
    if(Btittle == "" && Bauthor==""){
        window.alert("Field are empty");
    }
    else{
        bookList(Btittle,Bauthor);
    }
})

function bookList(b,a){
    const Div=document.createElement('div');
        Frame.appendChild(Div);
        const para=document.createElement('p');
        Div.appendChild(para);
        Div.setAttribute('class','list');
        const txt=document.createTextNode(b + " by "+ a);
        para.append(txt);

        const rmv=document.createElement('button');
        rmv.setAttribute('class','btn');
        Div.appendChild(rmv);
        const txt2=document.createTextNode("Remove");
        rmv.append(txt2);

        rmv.addEventListener('click',()=>{
            Frame.removeChild(Div);
        })
}