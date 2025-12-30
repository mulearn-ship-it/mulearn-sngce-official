import logo from "../assets/logo/Logo.svg";

export const Logo = () => {
    return (
        <img 
            style={{
                height: "45px", 
                width: "auto",
                display: "block"
            }} 
            src={logo} 
            alt="μLearn Logo"
        />
    )
}