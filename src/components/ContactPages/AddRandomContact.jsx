import { getRandomUser } from "../../Utility/Api";

const GetRandomContact = async () => {
    const responseFromApi = await getRandomUser();
    console.log(responseFromApi);
    console.log(responseFromApi.data.credit_card , 
        responseFromApi.data.first_name ,
        responseFromApi.data.id ,
        responseFromApi.data.password
        )
}

const AddRandomContact = () => {
    return(
        <div>
            <button className="btn btn-success form-control" 
            onClick={()=>GetRandomContact()}>
                Add Random Contact
            </button>
        </div>
    );
};
export default AddRandomContact;