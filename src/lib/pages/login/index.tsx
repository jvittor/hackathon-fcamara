import Image from 'next/image';

const LoginPage = () => (
  <div className="flex h-screen flex-col bg-white sm:flex-row">
    <div className="hidden w-1/2 justify-center bg-gray-100 lg:flex">
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
        <h2 className="text-center text-2xl font-bold text-black md:text-5xl">
          Entre no Orange Portfólio
        </h2>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex w-1/2 items-center justify-center bg-gray-200 p-2"
          >
            Entrar com Google
          </button>
        </div>
        <form className="flex flex-col items-center justify-center">
          <input
            type="email"
            className="w-11/12 border p-2 sm:w-full"
            placeholder="Email address"
          />
          <input
            type="password"
            className="mt-4 w-11/12 border p-2 sm:w-full"
            placeholder="Password"
          />
          <button
            type="submit"
            className="mt-6 w-11/12 bg-orange-500 p-2 text-white sm:w-full"
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
