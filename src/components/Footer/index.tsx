import profilePic from "../../assets/profilePic.png";

export function Footer() {
  const footerStyle = {
    height: "85px",
    boxShadow: "0 2.6px 7.25px 0 #00000014",
    color: "#696969"
  };

  return (
    <footer
      className="container-fluid bg-white d-flex align-items-center"
      style={footerStyle}
    >
      <img
        className="img-fluid rounded-circle ms-1 ms-md-4"
        src={profilePic}
        alt="Profile Pic"
        style={{ height: "53px" }}
      />
      <span className="my-5 ms-4">Amanda Morais</span>
    </footer>
  );
}
