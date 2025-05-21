
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-university-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
              <span className="text-xl font-bold">Academica</span>
            </div>
            <p className="text-sm text-white/80">
              Academica University is dedicated to providing exceptional education and 
              preparing students for success in a rapidly changing global environment.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="/about" className="hover:text-university-secondary">About Us</a></li>
              <li><a href="/courses" className="hover:text-university-secondary">Courses</a></li>
              <li><a href="/faculty" className="hover:text-university-secondary">Faculty</a></li>
              <li><a href="/events" className="hover:text-university-secondary">Events</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/80">
              <li>Almaty City</li>
              <li>Kazakhstan</li>
              <li>Phone: (123) 123-1231</li>
              <li>Email: info@academica.edu</li>
            </ul>
          </div>
          
          {/* Social media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-university-secondary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-university-secondary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-university-secondary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-university-secondary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@academica.edu" className="hover:text-university-secondary" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-black rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none flex-1"
                />
                <button
                  type="submit"
                  className="bg-university-secondary text-university-primary px-3 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="bg-university-primary border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/80">
              &copy; {new Date().getFullYear()} Academica University. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="/privacy" className="text-sm text-white/80 hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-sm text-white/80 hover:text-white">Terms of Service</a>
              <a href="/accessibility" className="text-sm text-white/80 hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
