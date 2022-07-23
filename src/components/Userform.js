
function Userform () {
  
    const loadDataFromForm = (event) => {
        event.preventDefault();
        
        let name =  event.target.elements.username.value.trim();
        let email =  event.target.elements.email.value.trim();
        let message =  event.target.elements.message.value.trim();
        // console.log( name, email, message);
       
        if (name === '' || email === '' || message === '') {
            alert('Заполните поля');
            return false;
        };
        let obj = {"name" : name, "email" : email, "message" : message};

        // console.log(obj);
      
        fetch("http://localhost:3500", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then( response => response.json())
            .then(response => {
                console.log(response);
            })
    }

    return (
        <section className="user-style">
            <h1>Reach out to us!</h1>
            {/* <img src="../../public/images/Smile1.png" alt="Smile1" width="500" height="600"></img> */}
            {/* <form action="/action_page.php" method="get"></form> */}
            <form action="" id="form" className="user-form-style" onSubmit={loadDataFromForm} >
                <label htmlFor="">Name:</label>
                <div></div>
                <input type="text" name="username" id="username" autoComplete="on" placeholder="Your name*"/>
                <div></div>
                <label htmlFor="">E-mail:</label>
                <div></div>
                <input type="email" name="email" id="email" autoComplete="on" placeholder="Your e-mail*"/>
                <div></div>
                <label htmlFor="">Message:</label>
                <div></div>
                <textarea id="message" name="message" rows="5" cols="33" placeholder="Your message*"></textarea>
                <div></div>
                <input type="submit" value="Submit" className="btn btn-primary mb-2" />
            </form> 
        </section>
    )
};
export default Userform;