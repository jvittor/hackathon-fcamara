import Image from 'next/image';

const LoginPage = () => (
  <div className="flex h-screen">
    {/* Imagem */}
    <div className="flex w-1/2 items-center justify-center bg-gray-100">
      <Image
        src="/path/to/image.png"
        alt="Imagem"
        width={500} // Defina a largura desejada
        height={500} // Opcional, carrega a imagem com alta prioridade
      />
    </div>

    {/* Formulário de login */}
    <div className="flex w-1/2 items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold">Entre no Orange Portfólio</h2>
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center bg-gray-200 p-2"
        >
          Entrar com Google
        </button>

        <form className="mt-6">
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
