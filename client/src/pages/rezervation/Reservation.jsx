import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import Footer from '../../components/footer/Footer';
import "./rez.scss";

function Reservation() {
  return (
    <>
      <MDBContainer fluid className='h-custom bak'>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12' className='m-5'>
            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>
              <MDBCardBody className='p-0'>
                <MDBRow>
                  <MDBCol md='6' className='p-5 bg-white'>
                    <h3 className="fw-normal mb-5" style={{ color: 'black' }}>Reservation</h3>
                    
                    <div className='mb-4'>
                      <label className='form-label' htmlFor='titleSelect'>Movie's name</label>
                      <select id='titleSelect' className='form-select form-select-lg'>
                        <option value="1">Name</option>
                        <option value="2">Women's Day</option>
                        <option value="3">The Perfect Match</option>
                        <option value="4">The Dog Woof</option>
                        <option value="4">The Easy Reach</option>
                        <option value="4">The Cookingf</option>
                      </select>
                    </div>

                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Hour' size='lg' id='form1' type='text' />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Hd Format' size='lg' id='form2' type='text' />
                      </MDBCol>
                    </MDBRow>

                    <div className='mb-4'>
                      <label className='form-label' htmlFor='positionSelect'>Position</label>
                      <select id='positionSelect' className='form-select form-select-lg'>
                        <option value="1">Time</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>
                    </div>
                    <MDBInput wrapperClass='mb-4' label='Position' size='lg' id='form3' type='text' />

                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Place' size='lg' id='form4' type='text' />
                      </MDBCol>
                      <MDBCol md='6'>
                        <div className='mb-4'>
                          <label className='form-label' htmlFor='employeesSelect'>Rejissor name</label>
                          <select id='employeesSelect' className='form-select form-select-lg'>
                            <option value="1">Rejissor</option>
                            <option value="2">Daniel Marcov</option>
                            <option value="2">Marxacti Marcov</option>
                            <option value="2">Mircov Marcov</option>
                          </select>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>

                  <MDBCol md='6' className='bg-indigo p-5'>
                    <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}>Movie's Details</h3>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Street + Nr' size='lg' id='form5' type='text' />
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Additional Information' size='lg' id='form6' type='text' />

                    <MDBRow>
                      <MDBCol md='5'>
                        <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Zip Code' size='lg' id='form6' type='text' />
                      </MDBCol>
                      <MDBCol md='7'>
                        <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Place' size='lg' id='form7' type='text' />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Country' size='lg' id='form8' type='text' />

                    <MDBRow>
                      <MDBCol md='5'>
                        <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Code +' size='lg' id='form9' type='text' />
                      </MDBCol>
                      <MDBCol md='7'>
                        <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number' size='lg' id='form10' type='text' />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Your Email' size='lg' id='form8' type='email' />
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of your site.' />
                    <MDBBtn color='light' size='lg'>Reservation</MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default Reservation;
