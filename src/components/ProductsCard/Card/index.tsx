import "./style.css"

interface CardProps {
    product: {
        id: number,
        name: string,
        description: string,
        price: number,
        image: string,
        category_id: number
    }
}

export function Card(props: CardProps) {

    const product = {
        id: props.product.id,
        name: props.product.name,
        description: props.product.description,
        price: props.product.price,
        image: props.product.image,
        category_id: props.product.category_id
    }

    return (
        <div className="card col-5 col-sm-3 col-md-2 d-block p-0" >

            <img src={props.product.image} className="card-img-top" alt={props.product.name} />
            <div className="card-body text-center py-0 px-1 d-flex justify-content-center align-items-center">
                <span className="card-title m-0">{props.product.name}</span>
            </div>

        </div>
    )
}