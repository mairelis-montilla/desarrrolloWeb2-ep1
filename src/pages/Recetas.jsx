import { recipes } from "../contants"
import PageHeader from "../common/PageHeader"
import Recipes from "../common/Recipes"
import Footer from "../home/Footer"
function Recetas() {
    return (
        <>
           <PageHeader title="Recetas" />
            <section className="padded">
                <div className="container-xl">
                <Recipes recipes={recipes}  title=""/>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Recetas