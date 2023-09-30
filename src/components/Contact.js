import React from 'react'

export default function Contact(props) {


    const [formData, setFormData] = React.useState({
        Name: "",
        Email: "",
        Message: "",
        
    })

    function handleChange(event) {
        setFormData(prevFormDate => {
            return {
                ...prevFormDate,
                [event.target.name]:event.target.value
            }
        })
    }
    console.log(formData)

    function handleSubmit(event) {
        event.preventDefault()
    }
  return (
    <div className='contact' ref={props.intoContact}>
        <h2 className='contact-heading'>Contact Me</h2>
      <div className='contact-body'>
        <h2>Hire Me <br/>
            For The Next<br/>
            Project
        </h2>
        <form onSubmit={handleSubmit} netlify>
                <input 
                type='text'
                name='Name'
                value={formData.Name}
                placeholder="Full Name"
                onChange={handleChange}
                />
                <input 
                type='text'
                name='Email'
                value={formData.Email}
                placeholder="Email Address"
                onChange={handleChange}
                />
                <textarea 
                name='Message'
                value={formData.Message}
                placeholder="Message"
                onChange={handleChange}
                />
                <button 
                className='contact-button'
                >Send Message</button>
        </form>
      </div>
    </div>
  )
}
