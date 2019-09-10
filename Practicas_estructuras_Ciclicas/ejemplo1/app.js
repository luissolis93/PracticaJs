sumaCantidades();


function sumaCantidades(){
    let y=0;
    for(let x=1; x<=10; x++){
        // y=y+x;
        y+=x;

        let newli=document.createElement('li');
        newli.setAttribute("id",`listaN${x}`);
        newli.setAttribute("class","list-group-item");

        let newContent=document.createTextNode(y);

        newli.appendChild(newContent);

        let listaDes=document.getElementById('listaNumerica');
        listaDes.appendChild(newli);
    }
}