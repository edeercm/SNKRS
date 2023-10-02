import React from 'react';
import { useForm } from 'react-hook-form';
import '../Inputs/Newsletter.css'

function NewsletterSignup({ onEmailAccept }) {

  const { handleSubmit, register, formState: { errors, isDirty, isValid }, reset, trigger } = useForm();

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  const onSubmit = (data) => {
    // Verificar si el formulario es válido antes de realizar acciones de suscripción
    if (isValid) {
      // Realizar acciones de suscripción aquí utilizando data.email
      onEmailAccept(data.email);
      reset(); // Limpiar el campo de correo electrónico después de enviar
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="news-form-control mb-3">
          <input
            type="email"
            id="email"
            placeholder='Email Address'
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            onBlur={() => handleBlur("email")}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">Please enter email address</div>}
        </div>
        <div className='labelandbutton d-flex flex-column'>
          <label htmlFor="newsletter" className="newsletter-label">
            By signing up, you agree to our Terms and Privacy Policy.
          </label>
          <button
            type="submit"
            className={`newsletter-btn mt-2 ${!isValid ? 'newsletter-btn-disabled' : ''}`}
            data-bs-toggle="modal"
            data-bs-target="#suscribeModal"
            disabled={!isDirty || !isValid}
          >
            Subscribe
          </button>
          <div className="modal fade" id="suscribeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        </div>
      </form>
    </div>
  );
}

export default NewsletterSignup;






