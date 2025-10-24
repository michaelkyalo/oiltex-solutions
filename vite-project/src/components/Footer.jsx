function Footer() {
  const footerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    marginTop: "30px",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Oiltex Solutions. All Rights Reserved.</p>
      <p>Fuel Delivery | Fast | Reliable | Affordable</p>
    </footer>
  );
}

export default Footer;
