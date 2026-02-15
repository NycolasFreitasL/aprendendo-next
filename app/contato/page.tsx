import Link from "next/link"

export default function contato() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-700 to-white justify-center items-center flex flex-col">
      <h1 className="text-gray-900 text-4xl font-bold">pagina de contato</h1>
      <div className="mt-4  flex gap-4">
        <div className="w-20 p-2 bg-white rounded-md shadow-md text-center">
          <Link href="contato/" className="text-gray-900">
            Contato
          </Link>
        </div>
        <div className="w-20 p-2 bg-white rounded-md shadow-md text-center">
          <Link href="projetos/" className="text-gray-900">
            projetos
          </Link>
        </div>
        <div className="w-20 p-2 bg-white rounded-md shadow-md text-center">
          <Link href="sobre/" className="text-gray-900">
            sobre
          </Link>
        </div>
        <div className="w-20 p-2 bg-white rounded-md shadow-md text-center">
          <Link href="/" className="text-gray-900">
            home
          </Link>
        </div>
      </div>
    </div>
  );
}
