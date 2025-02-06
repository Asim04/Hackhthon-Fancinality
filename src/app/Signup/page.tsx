import Footer from "../Components/Footer/Footer_signup"
import Navbar_singup from "../Components/Header/Navbar_singup"
import Signup_Fourm from "../Components/Signup_fourm/Signup_Fourm"


const signup = () => {
  return (
    <div>
        <Navbar_singup />

        <div className="bg-black text-white text-center py-16">
        <h1 className="text-3xl font-bold">Sign Up Page</h1>
        <p className="text-sm text-gray-400">
          Home &gt; sign up
        </p>
        </div>

        <main className="py-12">
        <Signup_Fourm />
        </main>

        <section className="bg-orange-100 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Still Need Our Support?
        </h2>

        <p className="text-sm text-gray-500">
          Don’t wait, make a smart & logical quote here. It’s pretty easy.
        </p>

        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-l-md border"
          />
          <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md">
            Subscribe Now
          </button>
        </div>
        </section>

        <Footer />
      
    </div>
  )
}

export default signup
