import React, {useState} from 'react'
import styles from "../styles/Contact.module.css"
const Contact = () => {
  const [user, setuser] = useState({
    name: '',
    email: '',
    phone: '',
    desc: ''
  });


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user)

   fetch('http://localhost:3000/api/postcontact', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);

  })
  .catch((error) => {
    console.error('Error:', error);
  });
    setuser({name: "", email: "", desc: "", phone: ""})
  }

const handelChange = (e)=>{
  
  setuser({...user, [e.target.name]: e.target.value})
 

}
  return (
    <div className={styles.container}>
     <form action='/api/postcontact' method='post' onSubmit={handleSubmit} >
     <div className={styles.mb3}>
    <label htmlFor="name" className={styles.formlabel}>Your Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" value={user.name} onChange={handelChange}/>
  </div>
  <div className={styles.mb3}>
    <label htmlFor="email" className={styles.formlabel}>Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={user.email} onChange={handelChange}/>
    
  </div>
  <div className={styles.mb3}>
    <label htmlFor="phone" className={styles.formlabel}>Mobile</label>
    <input type="phone" className="form-control" id="phone" value={user.phone} name="phone" onChange={handelChange}/>
  </div>
  <div className={styles.mb3}>
    <label htmlFor="desc" className={styles.formlabel}>Your query</label>
    <textarea type="text" className="form-control" id="desc" value={user.desc} name="desc" onChange={handelChange}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Contact
