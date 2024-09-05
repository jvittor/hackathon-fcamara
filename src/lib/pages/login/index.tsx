import Image from 'next/image';

const LoginPage = () => (
  <div className="flex h-screen flex-col bg-white sm:flex-row">
    <div className="hidden w-1/2 justify-center bg-gray-100 sm:flex">
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
        <h2 className="text-center text-2xl font-bold text-black sm:text-5xl">
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
        <form>
          <input
            type="email"
            className="w-full border p-2"
            placeholder="Email address"
          />
          <input
            type="password"
            className="mt-4 w-full border p-2"
            placeholder="Password"
          />
          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 p-2 text-white"
          >
            ENTRAR
          </button>
        </form>
        <a href="/login" className="mt-4 block text-center">
          Cadastre-se
        </a>
      </div>
    </div>
  </div>
);

export default LoginPage;
