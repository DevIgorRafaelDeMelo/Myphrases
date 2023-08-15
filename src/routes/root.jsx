export default function Root() {
  return (
    <>
      <div
        id="sidebar"
        className="bg-login-mobile lg:bg-login-desktop bg-cover h-screen text-center pt-60  "
      >
        <div className="lg:w-4/12 lg:m-auto">
          <div className="w-4/5 p-5 bg-white m-auto ">
            <div className="text-6xl">MyPhrase</div>
          </div>
          <nav className="text-white mt-20">
            <ul className="text-2xl">
              <a href={`/Login`}>
                <li className="border-2 w-4/5 m-auto rounded-full p-4 ">
                  Login
                </li>
              </a>
              <a href={`/Cadastro`}>
                <li className="bg-trans w-4/5 m-auto rounded-full mt-2 p-4">
                  Cadastro
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
