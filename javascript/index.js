let fotos = document.querySelectorAll("img.fotosDesign");
let corpoSite = document.querySelectorAll("div.corposite");
let modal = document.querySelectorAll("section.modalWebDesign");
let botonsobre=document.querySelectorAll("button.descrição");
let corpodescr=document.querySelectorAll("section.sobreprojeto");
let botonfecharsobre=document.querySelectorAll("button#closedesc");

corpoSite.forEach((item, index) => {//estrutura de laço forEach que tem como parametro o item nodeList e o Index

    item.addEventListener("mouseover", () => {//função de click que incia quando o botton for clicado

        switch (index) {//estrutura de escolha passando como parametro o index do nodeList ela é responsavel por fazer a alteração do video assim que o botão for clicado.
            case 0:
                modal.forEach((item, index) => {

                    modal[0].style.display = "flex"
                    item.addEventListener("mouseout", () => {

                        item.style.display = "none"
                    })
                })
                break;
            case 1:
                modal.forEach((item, index) => {

                    modal[1].style.display = "flex"
                    item.addEventListener("mouseout", () => {

                        item.style.display = "none"
                    })
                })
                break;
            case 2:
                modal.forEach((item, index) => {

                    modal[2].style.display = "flex"
                    item.addEventListener("mouseout", () => {
                       
                        item.style.display = "none"
                    })
                })
                break;
            case 3:
                modal.forEach((item, index) => {

                    modal[3].style.display = "flex"
                    item.addEventListener("mouseout", () => {

                        item.style.display = "none"
                    })
                })
                break;
            default:
                break;
        }



    })
})

botonsobre.forEach((item,index) =>
{
   
    item.addEventListener("click",()=>{
    
        corpodescr.forEach((item,idenx) =>{
            
            corpodescr[index].style.display="flex"
            
            

        })
           
    })
    

})

botonfecharsobre.forEach((item,index)=>{

    item.addEventListener("click",() =>{
        corpodescr.forEach((item,idenx) =>{
            corpodescr[index].style.display="none"
           
            

        })
    })
})
