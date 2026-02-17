import Link from "next/link"

export default function home(){
 
  return(
    <div className="min-h-screen justify-center items-center flex flex-col bg-linear-to-br from-cyan-700 to-white">
      <h1 className="text-4xl text-gray-900 font-bold "> Bem vindo a pagina inicial</h1>
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
        <div className="w-20 p-2 bg-white rounded-md shadow-md text-center">
          <Link href="/contador" className="text-gray-900">
            contador
          </Link>
        </div>
      </div>
    </div>
  )
}
