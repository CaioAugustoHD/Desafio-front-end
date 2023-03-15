import searchIcon from '../../assets/searchIcon.svg'
import cart from '../../assets/cart.svg'

export function Header() {
    const headerStyle = {
        height: "90px",
        boxShadow: "0 2.6px 7.25px rgba(0, 0, 0, .08) "
    }

    const inputStyle = {
        maxWidth: "330px",
        fontSize: "13px",
        border: "1px solid #D1D1D1",
    }

    const buttomStyle = {
        height: "37.1px",
        width: "48.1px"
    }

    const cartStyle = {
        
    }

    return (
            <header className="container-fluid bg-white px-md-5 d-flex justify-content-between align-items-center border border-white" style={headerStyle}>
                <form className="d-flex align-items-center h-100 col-7" role="search">
                    <input className="form-control rounded-0 rounded-start py-2 px-3" style={inputStyle} type="search" placeholder="Pesquisar..." aria-label="Search" />
                    <button className="btn btn-primary rounded-0 rounded-end d-flex justify-content-center align-items-center" style={buttomStyle} type="submit">
                        <img className="h-75" src={searchIcon} />
                    </button>
                </form>
                <button className="btn btn-primary d-flex justify-content-center align-items-center d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive" style={buttomStyle}>
                    <img style={cartStyle} className="h-100" src={cart} alt="Carrinho" />
                </button>
            </header>
    )
}