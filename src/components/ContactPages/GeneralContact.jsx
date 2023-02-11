import Contact from "./Contact";

const GeneralContact =(props) =>{
    return(
        <div className="row-12 py-2"
        style={{borderRadius:"10px" , backgroundColor: '#323637'}}
        >
            <div className="text-center text-white-50">General</div>
            <div className="p-2">
        {
            props.contacts.map((contact, index) =>(
                <Contact 
                contact={contact}
                key={index} 
                favoriteClick={props.favoriteClick}
                handleDelete={props.handleDelete}>                    
                </Contact>
            ))}        
    </div>
    </div>
    );
};
export default GeneralContact;