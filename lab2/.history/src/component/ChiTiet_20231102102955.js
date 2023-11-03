
function ChiTiet(props) {
    const { match } = props;
    const { id } = match.params;
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await axios.get(`https://60b6dbf17a99740017ffb8c8.mockapi.io/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [id]);
    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}