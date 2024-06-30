import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-6 sm:px-36 px-4">
        <div className="flex items-center justify-between">
            <img src={logo} alt="logo" />
            <ul className="flex text-white gap-x-4">
                <li>Contact</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Support</li>
            </ul>
            <div className="flex gap-x-2">
            <i className="fa-brands fa-facebook-f text-white text-xl"></i>
            <i className="fa-brands fa-instagram text-white text-xl"></i>
            <i className="fa-brands fa-linkedin-in text-white text-xl"></i>
            </div>
        </div>
        <p className="pt-5 text-center text-cyan-300">© 2019 Solid, all rights reserved</p>
    </footer>
  )
}

export default Footer