"use client"

export function ContactForm() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

      <div
        className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
        style={{ height: "600px" }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScKRs-zYKPDKlBN8-9RCzX3uVCKdwXZG-52HdBA2pIDNyGbyw/viewform?embedded=true"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  )
}
