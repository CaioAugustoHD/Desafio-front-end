interface ProductModalProps {
    product: {
        id: number,
        name: string,
        description: string,
        price: number,
        image: string,
        category_id: number
    }
}

export function ProductModal(props: ProductModalProps) {
    return (    
        <div className="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <div>
                            <img src={props.product.image} alt="" />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}