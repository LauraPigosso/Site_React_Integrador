import Header from "../Layout/Header/Header"
import LogoTitulo from "../static/Iamgens/LogoTitulo.png"
import CardButton from "../Layout/CardButton/CardButton"

function Home() {

        return (
      <>
        <Header LogoTitulo={LogoTitulo} ></Header>
        <div>
        <CardButton></CardButton>
        </div>
      </>
    )
  }
  
  export default Home
  