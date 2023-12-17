const Frame=document.getElementById('disply');
/*
function Add(){
    const Btittle=document.getElementById('title').value;
    const Bauthor=document.getElementById('author').value;
    if(Btittle == "" && Bauthor==""){
        console.log("Fields are empty");
    }
    else{
    const f1=document.createElement('div');
    Frame.appendChild(f1);
    const para=document.createElement('p');
    const Ltitle=document.createTextNode('"'+Btittle+'" b');
    para.append(Ltitle);
    f1.appendChild(para);

    const para2=document.createElement('p');
    const LAuthor=document.createTextNode('y ' +Bauthor);
    para2.append(LAuthor);
    f1.appendChild(para2);;
    f1.setAttribute('class','list');
    
    para.setAttribute('id','ptext');
    para2.setAttribute('id','pauthor');

    const f2=document.createElement('div');
    Frame.appendChild(f2);
    const btn=document.createElement('button');
    const btntext=document.createTextNode('Remove');
    btn.append(btntext);
    f2.appendChild(btn);

    f2.setAttribute('class','rmv');
    btn.setAttribute('class','btn');
    btn.addEventListener('click',()=>{
        Frame.removeChild(f1);
        Frame.removeChild(f2);
    //    Frame.removeChild(btn);
    }); 
    }  
}
*/
const addbtn=document.getElementById("btn");

addbtn.addEventListener('click',()=>{
    const Btittle=document.getElementById('title').value;
    const Bauthor=document.getElementById('author').value;
    
    if(Btittle == "" && Bauthor==""){
        window.alert("Field are empty");
    }
    else{
        const Div=document.createElement('div');
        Frame.appendChild(Div);
        const para=document.createElement('p');
        Div.appendChild(para);
        Div.setAttribute('class','list');
        const txt=document.createTextNode(Btittle + " by "+ Bauthor);
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
})






/*const a=document.getElementById('p');


const Div=document.getElementById('para');
console.log(Div);

function remove(){
    Div.removeChild(a);
    //Div.innerHTML+=`<h1>Hello Pakistan</h1>`;
    const tag1=document.createElement('h1');
    const txt1=document.createTextNode('Hello Pakistan');
    tag1.append(txt1);
    Div.appendChild(tag1);
}
function change(){
    Div.setAttribute("class","demo");
}


function removeit(){
    Div.removeChild(Div.firstChild);
}



function remove(){
    console.log("Remove function");
    //Display.removeChild(pauthor);
}
*/