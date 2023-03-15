import searchIcon from '../../assets/searchIcon.svg'

export function Header() {
    return (
            <header className="container-fluid shadow" style={{height: "80px"}}>
                <form className="d-flex align-items-center h-100 col-3" role="search">
                    <input className="form-control rounded-0 rounded-start" type="search" placeholder="Pesquisar..." aria-label="Search" />
                    <button className="btn btn-primary btn-sm rounded-0 rounded-end" type="submit">
                        <img className="h-75" src={searchIcon} />
                    </button>
                </form>
                <button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">cart</button>
            </header>
    )
}