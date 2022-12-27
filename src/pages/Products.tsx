import Brands from "../components/Brands";
import Cart from "../components/Cart";
import Model from "../components/Model";
import Product from "../components/Product";
import Sort from "../components/Sort";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Products() {
  return (
    <DefaultLayout>
      <div className="container mx-auto pt-5">
        <div className="flex">
          <div className="w-60">
            <Sort />
            <Brands />
            <Model />
          </div>
          <div className="grid grid-cols-3 flex-1">
            <div><Product/></div>
            <div>example</div>
            <div>example</div>
            <div>example</div>
            <div>example</div>
            <div>example</div>
            <div>example</div>
          </div>
          <div className="w-60">
            <Cart />
          </div>

        </div>

      </div>
    </DefaultLayout>
  )
}
