import React from 'react'
import './AccessDenied.css'

const AccessDenied = () => {
  return (
    <div>
      <div class="container">
        <div class="error-page">
            <div class="error-icon">🔒</div>
            <h1>Access Denied</h1>
            <p>You have made 3 unsuccessful login attempts.</p>
            <p>For more information, contact <a href="mailto:abc@gmail.com">abc@gmail.com</a>.</p>
            <a class="home-button" href="/">Go to Homepage</a>
        </div>
    </div>
    </div>
  )
}

export default AccessDenied
