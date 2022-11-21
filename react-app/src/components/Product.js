const Product = () => {
    const products = [
        { id: 1, name: 'Laptop', price: 500 },
        { id: 2, name: 'Mouse', price: 241 },
        { id: 3, name: 'Keyboard', price: 600 },
        { id: 4, name: 'Laptop', price: 900 },
    ];
    const fruits = ['Apple', 'Mango', 'Banana'];

    // When you have an array of objects with unique IDs
    const ProductList = products.map((product) =>
        <h3 key={product.id}>
            {product.name}: ${product.price}
        </h3>
    );

    // When you only have an array of objects.
    const FruitList = fruits.map((fruit, index) =>
        <h3 key={index}>
            {fruit}
        </h3>
    );

    return (
        <div>
            {ProductList}
            {FruitList}
        </div>
    );
};

export default Product;