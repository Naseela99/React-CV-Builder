export default function GenInfo ({info,setInfo}) {
    
    const updateUser = (name) => {
        setInfo((prevInfo) => ({ ...prevInfo, name }));
    }

    const updateEmail = (email) => {
        setInfo((prevInfo) => ({ ...prevInfo, email }));
    }


    const updateCity = (city) => {
        setInfo((prevInfo) => ({ ...prevInfo, city }));
    }
    
    
    return (
        <>
         <input
        type="text"
        placeholder="Name"
        className="self-name input-i"
        onChange={(event) => {
            updateUser(event.target.value);
        }}/>

        <input
        type="email"
        className="self-email input-i"
        placeholder="Email"
        onChange={(event) => {
            updateEmail(event.target.value);
        }}
      />

    <input
        type="text"
        className="self-city input-i"
        placeholder="City"
        onChange={(event) => {
            updateCity(event.target.value);
        }}
      />


        </>
       
    );

}