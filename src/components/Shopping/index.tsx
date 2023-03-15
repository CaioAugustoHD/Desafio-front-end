import logo from "../../assets/logo.svg"

export function Shopping() {
 
    return (
        <>
            <div className="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column align-items-center">
                    <img className="img-fluid w-75" src={logo} alt="Private Code" />
                </div>
            </div>
        </>
    )
}