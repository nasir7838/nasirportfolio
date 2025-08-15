import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Reset all errors
    let hasError = false;
    
    // Basic validation
    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }
    
    if (!email.trim()) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }
    
    if (!message.trim()) {
      setMessageError(true);
      hasError = true;
    } else {
      setMessageError(false);
    }
    
    if (hasError) {
      console.log('Form validation failed');
      return;
    }

    console.log('Form submitted:', { name, email, message });
    
    // EmailJS setup (commented out until credentials are provided)
    
    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    try {
      const response = await emailjs.send(
        'service_zhtb096', 
        'template_m5dvl35', 
        templateParams, 
        'VCh5528OXKy2aKsDU'
      );
      
      console.log('SUCCESS!', response.status, response.text);
      // Clear form on success
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again later.');
    }
    
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            ref={form}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className='contact-form'
            sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
          >
            <div className='form-flex' onClick={e => e.stopPropagation()}>
              <TextField
                required
                fullWidth
                id="name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  setName(value);
                  if (value.trim()) {
                    setNameError(false);
                  }
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                fullWidth
                id="email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  if (value.trim()) {
                    setEmailError(false);
                  }
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              fullWidth
              id="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                const value = e.target.value;
                setMessage(value);
                if (value.trim()) {
                  setMessageError(false);
                }
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button 
              type="submit" 
              variant="contained" 
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;