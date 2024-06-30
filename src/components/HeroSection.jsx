import heroimage from "../assets/hero img.svg"

const HeroSection = () => {
  return (
    <div className="w-full bg-blue-950 sm:px-36 px-4 sm:h-96 sm:flex items-center justify-between">
        <div className="flex">
            <div className="w-full">
                <div className="flex items-start flex-col gap-4 py-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">Landing template for startups</h1>
                    <p className="text-yellow-50 max-w-md">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                    <div className="space-y-2 ">
                        <button className="bg-slate-950 text-white px-3 py-2 rounded-md">Pre Order Now</button>
                        <button className="bg-red-600 text-white px-3 py-2 rounded-md ml-2">Get in Touch</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/2">
                <img src={heroimage} className="max-w-sm"/>
            </div>
    </div>
  )
}

export default HeroSection