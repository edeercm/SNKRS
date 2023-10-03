import React from 'react';
import { useForm } from 'react-hook-form';
// import '../ResetPasswordComponets/LoginForm.css'
import '../ResetPassComponents/ResetPasswordForm.css'

function ResetPassForm() {
  const { handleSubmit, register, formState: { errors, isDirty, isValid }, trigger, reset } = useForm();

  const onSubmit = (data) => {
    if (isValid) {
      // Realiza acciones adicionales aquí, como enviar la solicitud de restablecimiento de contraseña con los datos del formulario
      console.log(data);
      reset(); // Limpia el formulario después de enviar
    }
  };

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  return (
    <div className='forgotpass-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            placeholder='Email Addres'
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            onBlur={() => handleBlur("email")} // Llamar a la función handleBlur cuando el usuario abandona el campo
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">Please enter a valid email address</div>}
        </div>
        <button
          type="submit"
          className={`resetpassword-btn mt-4 mb-3 ${!isValid ? 'resetpassword-btn-disabled' : ''}`}
          data-bs-toggle="modal"
          data-bs-target="#resetPasswordModal"
          disabled={!isDirty || !isValid}
        >
          Submit
        </button>
        <div className="modal fade" id="resetPasswordModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLabel">Password reset email sent</h5> */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <span>Password reset email sent, check your inbox to continue.</span>
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

export default ResetPassForm