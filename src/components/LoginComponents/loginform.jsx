import React from 'react';
import { useForm } from 'react-hook-form';
import '../LoginComponents/LoginForm.css'

function LoginForm() {
  // const { handleSubmit, register, formState: { errors }, trigger } = useForm();

  const { handleSubmit, register, formState: { errors, isDirty, isValid }, trigger, reset } = useForm();

  // const onSubmit = (data) => {
  //   // Aquí puedes manejar la lógica de inicio de sesión con los datos del formulario
  //   console.log(data);
  // };

  const onSubmit = (data) => {
    if (isValid) {
      // Realiza acciones adicionales aquí, como iniciar sesión con los datos del formulario
      console.log(data);
      reset(); // Limpia el formulario después de enviar
    }
  }

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            placeholder='Email Addres'
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            onBlur={() => handleBlur("email")} // Llamar a la función handleBlur cuando el usuario abandona el campo
            className={`form-control login-form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">Please enter a valid email address</div>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="password"
            placeholder='Password'
            {...register("password", { required: true })}
            onBlur={() => handleBlur("password")} // Llamar a la función handleBlur cuando el usuario abandona el campo
            className={`form-control login-form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <div className="invalid-feedback">Please enter your password</div>}
        </div>
        <button
          type="submit"
          className={`login-btn mt-4 mb-3 ${!isValid ? 'login-btn-disabled' : ''}`}
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          disabled={!isDirty || !isValid}
        >
          Login
        </button>
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title fs-5" id="exampleModalLabel">Upps :|</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <span>It looks like our service is taking a short breather to recharge. We'll be back in the blink of an eye. Thanks for your patience.</span>
              </div>
              <div class="modal-footer">
                <button type="button" class="modal-btn" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;