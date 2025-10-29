import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">SKYBLAZER</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transforming brands through strategic events, compelling publications, and innovative advertising
              solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition">
                  Event Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition">
                  Magazine Publishing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition">
                  Advertising
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition">
                  Promotion
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} className="text-accent" />
                <span>hello@skyblazer.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-accent" />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2025 Skyblazer. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-accent transition text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
