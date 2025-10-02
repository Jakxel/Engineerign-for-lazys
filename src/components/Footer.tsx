function Footer() {
    return (
        <footer style={{ 
            background: "#f5f5f5", 
            padding: "2rem", 
            textAlign: "center", 
            marginTop: "2rem",
        }}>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                © {new Date().getFullYear()} Engineering for Lazys. All rights reserved.
            </span>
        </footer>
    );
}
export default Footer;