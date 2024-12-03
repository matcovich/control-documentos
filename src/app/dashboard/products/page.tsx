import { ProductCard, products } from "@/products";


export default function ProductsPage() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {/* ProductCard */}

            {
                products.map( product => (
                    <ProductCard key={product.id} {...product} />
                ))
            }

        </div>
    );
}
