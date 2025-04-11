import Link from "next/link"
import { Facebook, Instagram, Twitter, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-red-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Friends Cafe</h3>
            <p className="mb-4">Serving delicious food and creating memorable experiences.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-amber-200 transition-colors">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-amber-200 transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-amber-200 transition-colors">
                <Twitter />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:text-amber-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-amber-200 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +91 62396-53865</li>
              <li>Shop No.: 12, University View Estate Vill. Meheru, Phagwara</li>
              <li className="pt-4 font-semibold">Home Delivery Available!</li>
              <li className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                For Complaints WhatsApp us on +91 62396-53865
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-500 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Friends Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
