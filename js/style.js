function img1(id,id2,id3){
    let divwd= document.getElementById(id).style.width;
    let imgdivlen= document.getElementsByClassName("div1").length;
    console.log(divwd);
    for(let i=0; i<imgdivlen; i++){
        document.getElementsByClassName("div1")[i].style.width="20%";
    }
    let textt1len= document.getElementsByClassName("textt1").length;
    for(let i=0; i<textt1len; i++){
        var doc = document.getElementsByClassName("textt1")[i];
        doc.className='text1';
        var doc2 = document.getElementsByClassName("textt3")[i];
        doc2.className='text3';

    }
    if(divwd == "80%"){
        document.getElementById(id).style.width= "20%";
        document.getElementById(id2).className='text1';
        document.getElementById(id3).className='text3';
        }else{
    
    document.getElementById(id).style.width= "80%";
    document.getElementById(id2).className='textt1';
    document.getElementById(id3).className='textt3';
        }
}

let box=document.getElementById("box");
function button1(){
    box.className= "box1";
    box.style.transition= "2s";
}