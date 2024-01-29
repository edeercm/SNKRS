import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'


const Input = styled.input`
  width: 100%;
  height: 2.25rem;

  &:focus-visible {
    outline: none;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 50%;
  }

  @media (max-width: 575.97px) {
  }
`

const SubmitBtn = styled.button`
  width: 6.5rem;
  padding: 0.25rem;
  border: none;
  color: #0C0F0A;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const FooterInput = () => {

  const { handleSubmit, register, formState: { errors, isDirty, isValid }, reset, trigger } = useForm();

  const handleBlur = async () => {
    await trigger();
  };

  const onSubmit = () => {
    if (isValid) {
      reset();
    }
  };

  return <>
    <form className='d-flex flex-column gap-3' onSubmit={handleSubmit(onSubmit)}>
      <div className='d-flex flex-column gap-1'>
        <Input
          type="email"
          id="email"
          placeholder='Email Address'
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          onBlur={() => handleBlur("email")}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
         {errors.email && <div className="invalid-feedback">Please enter a valid email address</div>}
      </div>
      <span>By signing up, you agree to our Terms and Privacy Policy.</span>
      <SubmitBtn
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#footerModal"
        disabled={!isDirty || !isValid}
      >
        Subscribe
      </SubmitBtn>
      <div className="modal fade" id="footerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">¡Thanks for subscribing!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <span>Now you will be part of our community and you will be the first to know about new releases and exclusive promotions.</span>
            </div>
            <div className="modal-footer">
              <button type="button" className="modal-btn" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </>
}

export default FooterInput