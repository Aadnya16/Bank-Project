import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Digital.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech"; 

const Digital = () => {
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for pop-up

  const handleReadAloud = (text) => {
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead(""); // This will trigger stop in TextToSpeech component
  };

  return (
    <div className="digital-container">
      <Header />
      <h2 className="page-title">Digital Services</h2>
      <div className="digital-info-container">
        <div className="digital-box">
          <h3>Eligibility & Process to Avail Digital Banking:</h3>
          <ul>
          <li>Customers must have a savings or current account with the bank.</li>
          <li>Register for net banking or mobile banking services.</li>
	       <li>Secure login using user ID, password, and OTP authentication.</li>
         <li>Some services require linking the mobile number to the bank account.</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Users can apply for a home loan through multiple channels. They can visit the nearest Vistara Capital branch, apply via the official website, or use the mobile banking application. Dedicated loan officers are also available for personalized assistance.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="digital-box">
          <h3>Charges & Fees:</h3>
          <ul>
          <li>Free for Basic Services: Balance inquiry, fund transfers, and online shopping are usually free.</li>
          <li>Transaction Charges: Some fund transfers (RTGS, NEFT) may have small charges.</li>
          <li>Cardless Cash Withdrawal Fee: Certain banks charge a fee for cash withdrawal via mobile banking.</li>
          <li>Premium Services: Advanced digital services like priority banking apps may have subscription fees.</li>

            </ul>
         
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("The process begins with filling out an online or offline application form, providing details such as personal information, income details, and property-related data. After submission, the bank conducts an initial verification followed by a property evaluation. The bank reviews the applicant's credit history, employment status, and financial standing. If eligible, the applicant will receive a sanction letter. After signing the loan agreement, the loan amount is disbursed directly to the seller or builder.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="digital-box">
          <h3>Types of Digital Banking Services:</h3>
          <ul>
          <li>•	Internet Banking: Access full banking services through a web browser.</li>
          <li>	Mobile Banking Apps: Perform transactions and manage accounts via a smartphone app.</li>
	       <li>UPI (Unified Payments Interface): Instant fund transfer using mobile numbers or UPI IDs.</li>
         <li>E-Wallets: Digital wallets for online payments, shopping, and P2P transfers.</li>
         <li>Chatbots & AI Banking: Virtual assistants to help with banking queries.</li>
         <li>USSD Banking: Offline mobile banking for basic transactions via USSD codes (*99# for UPI).</li>
         <li>QR Code Payments: Scan and pay using mobile banking or UPI apps.</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Users can apply for a home loan through multiple channels. They can visit the nearest Vistara Capital branch, apply via the official website, or use the mobile banking application. Dedicated loan officers are also available for personalized assistance.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
      </div>

      <TextToSpeech text={textToRead} stop={handleStop} />

      {/* Button to open the popup
      <button className="documents-btn" onClick={() => setShowPopup(true)}>
        Documents Required
      </button> */}

      {/* Popup Box */}
      {/* {showPopup && ( */}
        {/* // <div className="popup-box show">
          <div className="popup-content">
            <h3>Required Documents</h3>
            <ul id="documents-list">
              <li>Identity Proof (Aadhar, PAN Card)</li>
              <li>Address Proof (Utility Bill, Passport)</li>
              <li>Income Proof (Salary Slip, ITR)</li>
              <li>Bank Statements (Last 6 Months)</li>
              <li>Property Documents</li>
            </ul>
            <div className="button-group">
              <button
                className="read-aloud-btn"
                onClick={() => {
                  const docText = Array.from(document.querySelectorAll("#documents-list li"))
                    .map(li => li.textContent)
                    .join(". ");
                  handleReadAloud(`Required Documents: ${docText}`);
                }}
              >
                🔊 Read Aloud
              </button>
              <button className="stop-btn" onClick={handleStop}>
                ⏹ Stop
              </button>
            </div>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div> */}
         {/* </div> */}
      {/* )} */}

      <Footer />
     </div>
  );
 };  

export default Digital;  
