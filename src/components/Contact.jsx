

const Contact = () => {
  return (
    <section className="bg-blue-950 py-10">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">Contact us</h2>
        </div>
        <div className="pt-7 w-full px-3">
            <div className="bg-slate-500 rounded-md p-5 flex sm:flex-row flex-col gap-y-2 justify-between items-center max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-yellow-50">Still not convinced on buying?</h3>
                <button className="bg-red-600 text-white px-3 py-2 rounded-md ml-2">Contact now</button>
            </div>
        </div>
    </section>
  )
}

export default Contact