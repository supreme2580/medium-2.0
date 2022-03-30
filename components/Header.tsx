import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img
                    className="object-contain w-44 cursor-pointer "
                    src="https://links.papareact.com/yvf"
                    alt="" />
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <div>About</div>
                <div>Contact</div>
                <div className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</div>
            </div>
        </div>
        <div className="flex items-center space-x-5 text-green-600">
            <h3>Sign In</h3>
            <h3 className="border px-4 py-1 rounded-full border-green-600">Get Started</h3>
        </div>
    </header>
  )
}

export default Header