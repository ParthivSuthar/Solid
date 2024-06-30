const Pricing = () => {
  return (
    <section className="bg-blue-950">
        <div className="w-full flex flex-col justify-center items-center py-8">
            <div className="text-white text-center py-9 flex flex-col justify-center items-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Pricing</h2>
                <p className="py-3 px-3 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
            </div>
            <div className="border w-64 bg-slate-800 rounded-md hover:scale-105 transition duration-300 transform">
                <h2 className="text-center px-3 py-3 text-2xl text-white ">$49<span className="my-3 text-sm text-gray-500">/Month</span></h2>
                <hr className="border-b-2 border-cyan-300 w-14 mt-1 mx-auto" />
                <h3 className="py-4 px-3 text-center text-cyan-200">What will you get</h3>
                <hr className="border-b-2 border-cyan-300 w-14 mt-1 mx-auto" />
                <ul className="px-3 py-4 text-center">
                    <li className="text-green-500">✔️ Lorem, ipsum dolor.</li>
                    <li className="text-green-500">✔️ Lorem, ipsum dolor.</li>
                    <li className="text-green-500">✔️ Lorem, ipsum dolor.</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Pricing