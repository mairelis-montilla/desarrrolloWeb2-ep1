import MainBanner from "../home/MainBanner"
import Footer from "../home/Footer"
import Sidebar from "../home/Sidebar"
import Recipes from "../common/Recipes"
import { recipes } from "../contants"

function Inicio() {
    

    return (
        <>
            <MainBanner />
           <section className="container padded d-flex justify-content-between">
           <div className="col-md-7">
            <Recipes recipes={recipes}  title="Latest Recipes"/>
           </div>
           <Sidebar />
           </section>
            <Footer />
        </>
    )
}

export default Inicio