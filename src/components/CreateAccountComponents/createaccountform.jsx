import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../CreateAccountComponents/CreateAccountForm.css'

function CreateAccountForm() {
  // const { handleSubmit, control, register, formState: { errors }, trigger, watch, getValues } = useForm();

  const { handleSubmit, control, register, formState: { errors, isDirty, isValid }, trigger, reset, watch, getValues } = useForm();

  const onSubmit = (data) => {
    if (isValid) {
      // Realiza acciones adicionales aquí, como enviar la solicitud de restablecimiento de contraseña con los datos del formulario
      console.log(data);
      reset(); // Limpia el formulario después de enviar
    }
  };

  // Función para activar la validación cuando el usuario abandona un campo
  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  const validatePassword = (value) => {
    const minLength = value.length >= 6;
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*]/.test(value);

    // Contar cuántas de las tres reglas adicionales se cumplen
    const ruleCount = [hasUppercase, hasNumber, hasSpecialChar].filter(Boolean).length;

    // Verificar si cumple con las condiciones requeridas
    if (minLength && ruleCount === 2) {
      return true; // La contraseña es válida
    } else {
      return "Your password must be at least 6 characters long and include at least 2 of the following: an uppercase letter, a number and/or a special character.";
    }
  };

  const password = watch("password", ""); // Obtener el valor del campo de contraseña

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            // type="text"
            id="firstName"
            placeholder='First Name'
            {...register("firstName", { required: true })}
            onBlur={() => handleBlur("firstName")}
            className={`form-control form-control-width form-control-height ${errors.firstName ? 'is-invalid' : ''}`}
          />
          {errors.firstName && <div className="invalid-feedback">Please enter first name</div>}
        </div>
        <div className="mb-3">
          {/* <label htmlFor="lastName" className="form-label">Last Name</label> */}
          <input
            type="text"
            id="lastName"
            placeholder='Last Name'
            {...register("lastName", { required: true })}
            onBlur={() => handleBlur("lastName")}
            className={`form-control form-control-width form-control-height ${errors.lastName ? 'is-invalid' : ''}`}
          />
          {errors.lastName && <div className="invalid-feedback">Please enter last name</div>}
        </div>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            placeholder='Email Address'
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            onBlur={() => handleBlur("email")}
            className={`form-control form-control-width form-control-height ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">Please enter email address</div>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="password"
            placeholder='Password'
            {...register("password", {
              required: true,
              validate: validatePassword
            })}
            onBlur={() => handleBlur("password")}
            onInput={() => {
              // Agregar esta función para mostrar el mensaje al escribir
              trigger("password");
            }}
            className={`form-control form-control-width form-control-height ${errors.password ? 'is-invalid' : ''}`}
          />
          {password.length === 0 && <div className="invalid-feedback">Please enter password</div>}
          {password.length > 0 && <div className="invalid-feedback invalid-password-text">{errors.password ? errors.password.message : ''}</div>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="confirmPassword"
            placeholder='Confirm Password'
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === getValues("password") || "Passwords do not match",
            })}
            onBlur={() => handleBlur("confirmPassword")}
            className={`form-control form-control-width form-control-height ${errors.confirmPassword ? 'is-invalid' : ''}`}
          />
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
        </div>
        <div className="mt-3 mb-3 form-check">
          <input
            type="checkbox"
            id="newsletter"
            {...register("newsletter")}
            className="form-check-input"
            defaultChecked
          />
          <label htmlFor="newsletter" className="form-check-label">
            Be the first to hear about new releases, special offers and more.
          </label>
        </div>
        <div className='register-label-container'>
          <span className='register-label'>By clicking "Register", you agree to our
            <Link><span className='register-label register-label-underline'> Terms and Conditions</span></Link>
            <span> and </span>
            <Link><span className='register-label register-label-underline'> Privacy Policy.</span></Link>
          </span>
        </div>
        <button
          type="submit"
          className={`register-btn mt-3 ${!isValid ? 'register-btn-disabled' : ''}`}
          data-bs-toggle="modal"
          data-bs-target="#createAccountModal"
          disabled={!isDirty || !isValid}
        >
          Register
        </button>
        <div className="modal fade" id="createAccountModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLabel">Welcome to our family</h5> */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <span>Welcome to our family, let the adventure begin!</span>
              </div>
              <div className="modal-footer">
                <Link to={'/login'}><button type="button" className="modal-btn" data-bs-dismiss="modal">Log In</button></Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountForm;
