export default function Login() {
  return (
    <div className="p-5 h-screen bg-cyan-600 ">
      <div className="mt-40 bg-trans p-5 pb-20 pt-20">
        <div className="text-white text-3xl font-bold mb-10">LOGIN</div>
        <label className="text-white ">Name</label>
        <br />
        <input
          type="text"
          className="bg-trans w-1000 focus:outline-none p-3 text-white"
        />
        <br />
        <label className="text-1xl text-white">Senha</label>
        <br />
        <input
          type="text"
          className="bg-trans w-1000 focus:outline-none p-3 text-white"
        />
      </div>
    </div>
  );
}
