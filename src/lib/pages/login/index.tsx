/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

// import { GoogleLogin } from '@react-oauth/google';
import Image from 'next/image';

const LoginPage = () => (
  <div className="flex h-screen flex-col bg-white sm:flex-row">
    <div className="bg-gray-100 hidden w-1/2 justify-center lg:flex">
      <Image
        src="https://arte-orange-login.s3.sa-east-1.amazonaws.com/img_login.png"
        alt="Imagem"
        width={500}
        height={500}
        className="h-auto w-full"
        objectFit="contain"
      />
    </div>
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid max-w-2xl gap-8">
        <h2 className="text-black text-center text-2xl font-normal md:text-5xl">
          Entre no Orange Portfólio
        </h2>
        {/* <div className="flex w-1/2 items-center justify-center bg-gray-200 p-2">
          <GoogleLogin onSuccess={responseGoogle} onError={handleError} />
        </div> */}
        <form className="flex flex-col items-center justify-center gap-2">
          <div className="flex w-11/12 text-2xl text-black-200 sm:w-full">
            Faça o login com o email
          </div>
          <div className="relative w-11/12 sm:w-full">
            <input
              type="email"
              id="email_address"
              className="bg-transparent text-gray-900 focus:border-blue-600 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none rounded-lg border-2 border-black-100 px-2.5 pb-2.5 pt-4 text-sm focus:outline-none focus:ring-0 dark:text-white"
              placeholder=" "
            />
            <label
              htmlFor="email_address"
              className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              style={{ backgroundColor: 'white', pointerEvents: 'none' }}
            >
              Email address
            </label>
          </div>
          <div className="relative w-11/12 sm:w-full">
            <input
              type="password"
              id="password"
              className="bg-transparent text-gray-900 focus:border-blue-600 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none rounded-lg border-2 border-black-100 px-2.5 pb-2.5 pt-4 text-sm focus:outline-none focus:ring-0 dark:text-white"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              style={{ backgroundColor: 'white', pointerEvents: 'none' }}
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-11/12 bg-orange p-2 text-white sm:w-full"
          >
            ENTRAR
          </button>
        </form>
        <a
          href="/login"
          className="relative bottom-6 block px-3 opacity-50 hover:underline sm:px-0"
        >
          Cadastre-se
        </a>
      </div>
    </div>
  </div>
);

export default LoginPage;
