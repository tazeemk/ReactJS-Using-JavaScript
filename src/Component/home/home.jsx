import { DataGrid } from "../../custom-component/data-Grid";
import { Navbar } from "../../custom-component/navbar";
import { useGetAPI } from "../../hooks/useGetApi";


export function Home(){
let product =useGetAPI(`https://fakestoreapi.com/products`);

    return(
        <div className="container-fluid">
          <div>
            <div>
                 <ol>
                    {
                        product.map(data=><li key={data.id}>{data.title}</li>)
                    }
                 </ol>
            </div>
        <DataGrid caption="Products Details" data={['Id', 'Name', 'Price', 'Stock']} field={[{Id:1, Name:'Samsung TV', Price:24000, Stock:'Availabe'}, {Id:2, Name:'Mobile', Price:12000, Stock:'Out of Stock'}]} />
        </div>
        </div>
              
)
}