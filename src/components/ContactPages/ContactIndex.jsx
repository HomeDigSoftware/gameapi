import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import FavoriteContact from "./FavoriteContact";
import GeneralContact from "./GeneralContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";



class ContactIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contactList:[
                {
                    id: 1,
                    name: "tzaf",
                    phone: "000000550",
                    email: "asddds@gmail.com",
                    isFavorite: true,
                },
                {
                    id: 2,
                    name: "tzaf02",
                    phone: "0000006650",
                    email: "adfgsdfgds@gmail.com",
                    isFavorite: false,
                },
                {
                    id: 3,
                    name: "tzaf03",
                    phone: "000000777550",
                    email: "ASASASds@gmail.com",
                    isFavorite: true,
                },
            ],
        };
    }

handleAddContact = (newContact)=>{

    if(newContact.name == ""){
        return{status: "failure" , msg: "Please Enter A valid Name"};
    }
    else if(newContact.phone == ""){
        return {status: "failure" , msg: "Please Enter A valid Pohne"};
    }

    const duplicateRecord = this.state.contactList.filter((x)=>{
        if(x.name == newContact.name && x.phone == newContact.phone){
            return true;
        }
        
    })

    if(duplicateRecord.length > 0){
        return {status: "failure" , msg: "Duplicate Record"}
    }

    else{
       const newFinleContact = {
        ...newContact, 
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
    };
    this.setState((prevState) => {
        return{
            contactList: prevState.contactList.concat([newFinleContact]),
        };
    } ); 
    return {status: "success" , msg: "Create New Contact"} 
    }
   
};

handleToggleFavorite = (contact) => {
    this.setState((prevState) => {
        return{
         contactList: prevState.contactList.map((obj) => {
            if(obj.id === contact.id){
               return{...obj, isFavorite: !obj.isFavorite };
            }
            return obj;
         })   
        }
        
    })
};
handleDelete = (contact) => {
        this.setState((prevState)=>{
           return{
            contactList: prevState.contactList.filter((obj)=>{          
                return obj.id !== contact.id ;             
            })
           }           
        })
    }



   render(){
      return(
        <div>
           <Header/>
            <div className="container" style={{minHeight: "85vh"}}>
                <div className="row py-3">
                    <div className="col-4 offset-2">
                        <AddRandomContact />
                    </div>
                    <div className="col-4 ">
                        <RemoveAllContact />
                    </div>
                    
                    <div className="row-12 py-2 ">
                    <div className="col-8 offset-2 row">                       
                        <AddContact handleAddContact={this.handleAddContact}/>
                    </div>
                    </div>

                    <div className=" col-12 py-2 ">
                    <div className="col-8 offset-2 row">
                        <FavoriteContact 
                        contacts = {this.state.contactList.filter(
                            (u) => u.isFavorite === true 
                        )}
                         favoriteClick={this.handleToggleFavorite}
                         handleDelete={this.handleDelete}
                        />
                    </div>
                    </div>

                    <div className="col-12 py-2 ">
                    <div className="col-8 offset-2 row">
                        <GeneralContact 
                        contacts = {this.state.contactList.filter(
                            (u) => u.isFavorite === false
                           )} 
                           favoriteClick={this.handleToggleFavorite}
                           handleDelete={this.handleDelete}                         
                     
                        />
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
   }
  
};
export default ContactIndex;