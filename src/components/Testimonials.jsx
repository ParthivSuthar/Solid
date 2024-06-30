import { testimonailData } from "../data/data."

const Testimonials = () => {
  return (
    <section className="bg-blue-950">
        <div className="p-10">
            <h2 className="text-white text-center text-3xl sm:text-4xl lg:text-5xl pt-10">Testimonials</h2>
        </div>
        <div className="place-content-center grid">
            <div className="grid sm:grid-cols-3 gap-9 px-4 py-4">
                {testimonailData.map((data, index) => (
                    <div className="sm:max-w-60 p-4 space-y-5 bg-zinc-800 rounded-lg border" key={index}>
                        <img src={data.avatar} alt="avatar" />
                        <p className="text-white text-lg">{data.message}</p>
                        <p className="text-red-500">{data.designation}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials