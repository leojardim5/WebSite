// const prodDiv = window.document.getElementById('pro-container')

array = [
    {
        id:1,
        nome:"camisa",
    },
    {
        id:2,
        nome:"cueca",
    },
    {
        id:3,
        nome:"short"
    },

]


console.log(array)

// const products = array.map((product,index)=>{
//     return `
//     <div class="pro">
//         <img src="img/products/f1.jpg" alt="">
//         <div class="desc">
//             <span>Adidas</span>
//             <h5>${product.nome}</h5>
//             <div class="star">
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//             </div>
//             <h4>$78</h4>
//         </div>
//         <a href=""><i class="fal fa-shopping-cart cart"></i></a>
//     </div>
//     `
// })

// prodDiv.innerHTML = products

const botao = window.document.getElementById("normal") 

function addEvento(){
    botao.addEventListener("mouseenter",alerta)
    botao.addEventListener("mouseleave",alertaTake)
    botao.addEventListener("click",funcoes.apareceLista)
}



const funcoes = {
    apareceLista:()=>{
        botao.innerHTML =`
            <ul>
                <li>Cu</li>
                <li>tua tia</li>
                <li>esquisita</li>
                <li>Maluca</li>
                <li>gorda</li>
                <li>feria</li>
            </ul>`
        botao.style.cssText =`font-size: 14px;
        font-weight: 600;
        padding: 15px 30px;
        color:#000;
        background-color: #fff;
        border-radius: 4px;
        cursor: pointer;
        border:none;
        outline: none;
        transition:0.8s ease-in`;
    }
}

// const apareceLista = ()=>{
//     botao.innerHTML =`
//         <ul>
//             <li>Cu</li>
//             <li>tua tia</li>
//             <li>esquisita</li>
//             <li>Maluca</li>
//             <li>gorda</li>
//             <li>feria</li>
//         </ul>`
//     botao.style.cssText =`font-size: 14px;
//     font-weight: 600;
//     padding: 15px 30px;
//     color:#000;
//     background-color: #fff;
//     border-radius: 4px;
//     cursor: pointer;
//     border:none;
//     outline: none;
//     transition:0.8s ease-in`;
// }

const alertaTake = ()=>{
    botao.innerText = "P12 SEFUDEU"
    botao.style.cssText=`transition:0.8s ease-in`;
}


const alerta = ()=>{
    botao.innerHTML = "P12 VOLTOU"
    botao.style.cssText=`font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    color:#000;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border:none;
    outline: none;
    transition: 0.2s ease-in;`
}

module.exports = funcoes



