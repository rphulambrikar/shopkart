import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>
            Make Money with Us <br></br> Sell on Amazon<br></br>  Sell under Amazon Accelerator<br></br> 
            Protect and Build Your Brand<br></br>  Amazon Global Selling<br></br>  Supply to Amazon<br></br> 
            Become an Affiliate Fulfillment by Amazon<br></br>  Advertise Your Products<br></br> 
            Amazon Pay on Merchants.<br></br> 
          </p>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+123 456 7890</a>
          </p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
