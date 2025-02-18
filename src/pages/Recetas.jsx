import PageHeader from "../common/PageHeader"
import Recipes from "../common/Recipes"
import Footer from "../home/Footer"
import { useEffect, useState } from "react"

function Recetas() {
    
    const [recipes, setRecipes] = useState([]);
    const [renderTable, setRenderTable] = useState(true);
    const [selectedItem, setSelectedItem] = useState();

    const fetchRecipes = () => {
        const rutaServicio = "http://localhost:8080/servicioweb/recipes.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setRecipes(data)
            }).catch(err => {console.log(err)})
    }

    const drawTable =()=>{
        return (
            <table className="striped bordered hover responsive mt-4 custom-hover">
            <thead className="">
              <tr>
                <th className="px-4">ID</th>
                <th className="px-4">Título</th>
                <th className="px-4">Imagen</th>
                <th className="px-4">Rating</th>
                <th className="px-4">Tiempo</th>
                <th className="px-4">Autor</th>
              </tr>
            </thead>
            <tbody>
              {recipes.length > 0 && recipes.map((recipe) => (
                <tr onClick={()=> setSelectedItem(recipe)}  key={recipe.id} className="">
                  <td className="px-4">{recipe.id}</td>
                  <td className="px-4">{recipe.title}</td>
                  <td className="px-4">
                    <img
                      src={`src/assets/images${recipe.image}`}
                      alt={recipe.title}
                      style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                    />
                  </td>
                  <td className="text-warning px-4">{'★'.repeat(recipe.rating)}{'☆'.repeat(5 - recipe.rating)}</td>
                  <td className="px-4">{recipe.time}</td>
                  <td className="px-4">{recipe.autor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
    }
    useEffect(()=>{
        fetchRecipes()
    },[])

    return (
        <>
           <PageHeader title="Recipes" />
            {selectedItem && <div className="p-5 pb-0">
            <p>Selected Recipe:</p>
            <ul>
                <li>{selectedItem.title}</li>
                <li>{selectedItem.time}</li>
                <li>{selectedItem.autor}</li>
            </ul>
            </div>}
            <section className="padded">
                <div className="container-xl">
                    
                    <div class="btn-group" role="group" aria-label="toggle reder">
                        <button type="button" onClick={() => setRenderTable(true)} class={`btn ${renderTable ? 'btn-primary': 'btn-light'}`}>Table</button>
                        <button type="button" onClick={() => setRenderTable(false)}  class={`btn ${!renderTable ? 'btn-primary': 'btn-light'}`}>Cards</button>
                    </div>

                  

                    {renderTable ? drawTable() :<Recipes recipes={recipes}  title=""/> }
                    
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Recetas