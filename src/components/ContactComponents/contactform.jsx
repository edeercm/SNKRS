import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components'
// import '../ContactComponents/ContactForm.css'

const Input = styled.input`
`
const SubmitBtn = styled.button`
  margin-bottom: 2rem;
  width: 6.5rem;
  padding: 10px;
  border: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #0C0F0A;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

function ContactForm() {

  const { handleSubmit, control, register, formState: { errors, isDirty, isValid }, trigger, reset } = useForm();

  const onSubmit = () => {
    if (isValid) {
      reset();
    }
  };

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  const handleSelectBlur = () => {
    trigger("typeOfInquiry");
  };

  return <>
    <div className="row">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 mt-3">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className='d-flex flex-column gap-3'>
                <div>
                  <label htmlFor="fullName" className="form-label">Name</label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName", { required: true })}
                    onBlur={() => handleBlur("fullName")} // Llamar a la función handleBlur cuando el usuario abandona el campo
                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                  />
                  {errors.fullName && <div className="invalid-feedback">Please enter full name</div>}
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
                    onBlur={() => handleBlur("phone")} // Llamar a la función handleBlur cuando el usuario abandona el campo
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  />
                  {errors.phone && <div className="invalid-feedback">Please enter a contact number</div>}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-4 mt-md-0 mt-lg-0 mt-xl-0">
              <div className="d-flex flex-column gap-3">
                <div>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    onBlur={() => handleBlur("email")} // Llamar a la función handleBlur cuando el usuario abandona el campo
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  />
                  {errors.email && <div className="invalid-feedback">Please enter email address</div>}
                </div>
                <div>
                  <label htmlFor="typeOfInquiry" className="form-label">Type of Inquiry</label>
                  <Controller
                    name="typeOfInquiry"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <select
                        {...field}
                        className={`form-select form-control ${errors.typeOfInquiry ? 'is-invalid' : ''}`}
                        onBlur={handleSelectBlur} // Llama a handleSelectBlur cuando el usuario abandona el campo "Select"
                      >
                        <option value=""></option>
                        <option value="Product Information">Product Information</option>
                        <option value="Shipping">Shipping</option>
                        <option value="Return">Return</option>
                        <option value="Suggestions">Suggestions</option>
                        <option value="Other">Other</option>
                      </select>
                    )}
                  />
                  {errors.typeOfInquiry && <div className="invalid-feedback">Please enter a type of inquiry</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='d-flex flex-column mt-4 gap-4'>
            <div>
              {/* <label htmlFor="message" className="form-label">Message</label> */}
              <textarea
                id="message"
                placeholder='Message'
                {...register("message", { required: true })}
                onBlur={() => handleBlur("message")} // Llamar a la función handleBlur cuando el usuario abandona el campo
                className={`form-control text-area ${errors.message ? 'is-invalid' : ''}`}
              />
              {errors.message && <div className="invalid-feedback">Please enter message text</div>}
            </div>
            <SubmitBtn
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#contactUsModal"
              disabled={!isDirty || !isValid}
            >
              Submit
            </SubmitBtn>
          </div>
        </div>
        <div className="modal fade" id="contactUsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-5" id="exampleModalLabel">¡Thanks for contact us!</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <span>Your feedback is our priority, and we will respond as soon as possible.</span>
              </div>
              <div className="modal-footer">
                <button type="button" className="modal-btn" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  </>
}

export default ContactForm;


