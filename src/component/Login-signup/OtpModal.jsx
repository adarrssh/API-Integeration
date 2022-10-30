import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const OtpModal = (props) => {
  return (
    <div>
        <Modal className='otp-modal'
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='otp-modal-header' closeButton>
        <br />
       {/* <Modal.Title id="contained-modal-title-vcenter">
           <h5>Please enter OTP to verify your account</h5>
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body className='otp-modal-body'>
       
        <h5>Please enter OTP to verify your account</h5>
        <p>
         OTP has been sent to your registered mobile number.
        </p>
        <center>
            <input className='otp-input' type="number" placeholder='Enter OTP'/>
       <div>
        
            <Button className='resend-otp'>Resend OTP</Button>
        
        
            <Button className='verify-otp'>Verify</Button>
        
        
       </div>
        </center>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </div>
  )
}

export default OtpModal