import './Banner.css'

export const  Banner = () =>{
    //JSX
    return(
        <header className="banner">
        <img src="/imagens/banner.png" alt="O banner principal da pagina"/>
        </header>
    )
}



/*Pode ser escrito mais simples assim 

function Banner (){
    return(
        <header className="banner">
        <img src="/imagens/banner.png" alt="O banner principal da pagina"/>
        </header>
    )
}
export default Banner

*/