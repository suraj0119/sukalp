import { Laptop, Users } from "lucide-react"

const stories = [
  {
    title: "Tech for Education Initiative",
    description:
      "A partnership with a leading tech company to establish digital learning centers at 10 rural schools, benefiting over 2,000 students. The partnership included technology infrastructure, volunteer mentorship for digital literacy training, and curriculum development.",
    icon: <Laptop className="h-8 w-8 text-orange-500" />,
    stats: "93% improvement in digital literacy scores",
  },
  {
    title: "Women's Empowerment Program",
    description:
      "Collaboration with a financial services firm to create a women's empowerment program providing skill development training and microfinance opportunities to 500 women. The program focused on financial literacy, entrepreneurship, leadership, mentoring, and financial literacy education.",
    icon: <Users className="h-8 w-8 text-cyan-500" />,
    stats: "75% of participants started micro-enterprises",
  },
]

export function SuccessStories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-gray-100 p-3 rounded-full mr-4">{story.icon}</div>
                <h3 className="text-xl font-bold">{story.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{story.description}</p>
              <div className="bg-orange-100 px-4 py-2 rounded-md text-orange-800 font-medium inline-block">
                {story.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
