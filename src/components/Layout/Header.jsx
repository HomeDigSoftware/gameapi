
import Logo from "./logo192.png"



const Header = () =>{
    return(         
            <div className="py-2 pl-2 text-center " style={{borderBottom: '1px solid #777' , backgroundColor: 'black'}}>
                 <img style={{height: "35px" ,verticalAlign: "top"}} src={Logo} alt="" />
                 <span className="h2 pt-4 m-2 text-white-50"> Contact Opedia </span> 
                  </div>         
        
    )
}

export default Header;