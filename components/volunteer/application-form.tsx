export function VolunteerApplicationForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Volunteer Application</h2>

        <div className="max-w-[550px] mx-auto h-[700px] overflow-y-auto border border-gray-200 rounded-lg">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdMRdyRxB1tMFlpysPrzYSlgMdVOydQGDgwW5Sg44m7t7Lb9A/viewform?embedded=true"
            width="100%"
            height="4193"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Volunteer Application Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  )
}
