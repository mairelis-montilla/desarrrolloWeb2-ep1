import PageHeader from "../common/PageHeader"
import Footer from "../home/Footer"
import {products} from "../contants"
import Product from "../common/Product"
function Tienda() {
    return (
        <>
            <PageHeader title="Tienda" />
            <section className="padded">
                <div className="container">
                    <div className="row">
                    {products.map(product => (<Product key={product.name} {...product} />))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Tienda