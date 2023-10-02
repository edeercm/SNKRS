import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../ContactComponents/ContactForm.css'

function ContactForm() {
  const { handleSubmit, control, register, formState: { errors, isDirty, isValid }, trigger, reset } = useForm();

  const onSubmit = (data) => {
    if (isValid) {
      // Realiza acciones adicionales aquí, como enviar los datos
      console.log(data);
      reset(); // Limpia el formulario después de enviar
    }
  };

  // Función para activar la validación cuando el usuario abandona un campo
  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  const handleSelectBlur = () => {
    // Llama a la función trigger para activar la validación del campo "typeOfInquiry" cuando el usuario abandona el campo sin seleccionar ninguna opción.
    trigger("typeOfInquiry");
  };

  return (
    <div className='contact-form'>
      {/* <span className='fs-3 fw-bold'>Contact Us</span> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={window.innerWidth <= 890 ? 'd-flex flex-column' : 'd-flex flex-row justify-content-between'}>
          <div className="mb-3">
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
          <div className="mb-3">
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
        </div>
        <div className={window.innerWidth <= 890 ? 'd-flex flex-column' : 'd-flex flex-row justify-content-between'}>
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="typeOfInquiry" className="form-label">Type of Inquiry</label>
            <Controller
              name="typeOfInquiry"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className={`form-select ${errors.typeOfInquiry ? 'is-invalid' : ''}`}
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
        <div className="mb-3">
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
        <button 
          type="submit" 
          className={`submit-contact-btn fw-bold text-uppercase mb-4 ${!isValid ? 'submit-contact-btn-disabled' : ''}`}
          data-bs-toggle="modal"
          data-bs-target="#contactUsModal"
          disabled={!isDirty || !isValid}
        >
          Submit
        </button>
        <div className="modal fade" id="contactUsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

  );
}

export default ContactForm;


