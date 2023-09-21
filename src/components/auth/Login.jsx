import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [cardHeight, setCardHeight] = useState();
  const [cardWidth, setCardWidth] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  // useEffect(() => {
  //   AUTH.verifyLogin() && router.push('/onboarding');
  // }, []);

  useEffect(() => {
    setCardHeight(window.screen.availHeight * 0.75);
    setCardWidth(window.screen.availWidth * 0.34);
  }, [cardHeight, cardWidth]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async data => {
    console.log('data : ', data)
  };

  return (
    <div className="min-h-screen relative p-4 md:p-8 flex items-center justify-center bg-color-secondary-s95">
      <div className="absolute inset-0">
        <img
          src="/assets/bg_login.svg"
          alt="background"
        />
      </div>
      <div
        className="flex flex-col rounded-lg bg-color-card-body drop-shadow-login-card relative"
        style={{ height: cardHeight, width: cardWidth }}
      >
        <div className="mx-0 my-auto">
          <div className="flex justify-center">
            <div className="mx-auto items-center">
              <img
                src="/assets/logo.svg"
                alt="Logo"
              />
            </div>
          </div>
          <div className="w-full text-center h-[26px] left-[593px] top-[276px] mt-5">
            <p className="font-normal not-italic text-color-title-text">
              {('loginTitle')}
            </p>
          </div>
          <div className="flex-grow mx-11 mt-24">
            <form
              onSubmit={handleSubmit(onSubmit)}>
              <div className="text-sm">
                <label
                  className="text-xs font-medium leading-4 text-color-secondary-s50 mb-5"
                  htmlFor="email"
                >
                  {'Email'}
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder={'Enter your email'}
                  {...register('email', { required: ('required') })}
                  className={`text-sm w-full h-[43px] px-5 py-3 mt-2 bg-white focus:bg-color-primary-p90 focus:text-color-primary-p40 border-[1px] rounded ${errors?.email
                    ? 'border-2 border-color-error-text focus:border-color-error-text focus:ring-0'
                    : 'border-color-secondary-s70'
                    }`}
                />
                {errors && errors.email && (
                  <label htmlFor="email" className="font-medium text-color-error-text mt-1">
                    {errors.email.message}
                  </label>
                )}
              </div>
              <div className="mt-4 text-sm">
                <label
                  className="text-xs font-medium leading-4 text-color-secondary-s50 "
                  htmlFor="password"
                >
                  {('password')}
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    id="password"
                    placeholder={('password')}
                    {...register('password', { required: ('required') })}
                    className={`text-sm w-full h-[43px] px-5 py-3 mt-2 bg-white focus:bg-color-primary-p90 focus:text-color-primary-p40 border-[1px] rounded ${errors?.password
                      ? 'border-2 border-color-error-text focus:border-color-error-text focus:ring-0'
                      : 'border-color-secondary-s70'
                      }`}
                  />
                  <button
                    type="button"
                    className="absolute top-[30px] right-4 transform -translate-y-1/2 text-color-secondary-s70 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <img
                        src="/icons/eye.svg"
                        alt="Hide password"
                        width={17.5}
                        height={14}
                      />
                    ) : (
                      <img
                        src="/icons/eyeSlash.svg"
                        alt="Show password"
                        width={17.5}
                        height={14}
                      />
                    )}
                  </button>
                </div>
                {errors && errors.password && (
                  <label
                    htmlFor="email"
                    className="font-medium text-color-error-text mt-1 "
                  >
                    {errors.password.message}
                  </label>
                )}
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="px-5 py-3 w-full h-[55px] bg-color-primary-p60 hover:bg-color-primary-p50 text-white font-[Manrope] rounded-[5px] font-semibold uppercase"
                >
                  {('login')}
                </button>
              </div>
            </form>
            <div className="mt-5 cursor-pointer flex justify-center text-color-primary-p60 text-sm font-medium">
              {('forgotPassword')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
