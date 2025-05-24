import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
      <p className="text-gray-600 mb-8">You can also reach us directly using the contact information below.</p>

      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-orange-100 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Email Us</h3>
            <p className="text-gray-600">
              <a href="mailto:ed@sukalp.org" className="hover:text-orange-500">
                ed@sukalp.org
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-orange-100 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Call Us</h3>
            <p className="text-gray-600">
              <a href="tel:+917011645759" className="hover:text-orange-500">
                +91-7011645759
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-orange-100 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Visit Us</h3>
            <address className="text-gray-600 not-italic">
              F849, 10th Avenue,
              <br />
              Gaur City 2 Greater Noida (W),
              <br />
              India
            </address>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-orange-100 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Office Hours</h3>
            <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 5:30 PM</p>
            <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 1:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
