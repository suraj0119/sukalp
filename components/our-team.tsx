"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TeamMemberModal } from "./team-member-modal"

// Separate arrays for leadership and team members
const leadershipTeam = [
  {
    name: "Sushil Mishra",
    role: "Founder and Director",
    image: "/images/team/sushil-mishra.jpeg",
    bio: "Leading Sukalp Foundation's vision to empower communities through education, healthcare, and skill development initiatives.",
  },
  {
    name: "Co-founder Name",
    role: "Co-founder",
    image: null,
    bio: "Working alongside the founder to establish and grow Sukalp Foundation's impact across communities in India.",
  },
]

const teamMembers = [
  {
    name: "Pattewar Dhanshree",
    role: "Program Coordinator",
    image: "/images/team/pattewar-dhanshree.jpeg",
    bio: "Coordinating our various initiatives to ensure effective implementation and maximum community impact.",
  },
  {
    name: "Shruti Sah",
    role: "Shiksha Vatika Program",
    image: "/images/team/shruti-sah.jpeg",
    bio: "Dedicated to transforming rural education through innovative learning methods at our Shiksha Vatika centers.",
  },
  {
    name: "Priyanka Mahaich",
    role: "Shiksha Vatika Program",
    image: "/images/team/priyanka-mahaich.jpeg",
    bio: "Working to provide quality education and holistic development for children in underserved communities.",
  },
  {
    name: "Himadri Prasad",
    role: "Social Media and Content Team",
    image: "/images/team/himadri-prasad.jpeg",
    bio: "Creating engaging content to raise awareness about our initiatives and connect with supporters worldwide.",
  },
  {
    name: "Sparsh Tripathi",
    role: "Media Team",
    image: "/images/team/sparsh-tripathi.jpeg",
    bio: "Capturing and sharing Sukalp Foundation's impact stories through compelling visual and digital media.",
  },
]

export function OurTeam() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | (typeof leadershipTeam)[0] | null>(
    null,
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const itemsPerPage = 3
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentMembers = teamMembers.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const openMemberDetails = (member: (typeof teamMembers)[0] | (typeof leadershipTeam)[0]) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const renderTeamMember = (member: (typeof teamMembers)[0] | (typeof leadershipTeam)[0], index: number) => (
    <div
      key={index}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={() => openMemberDetails(member)}
    >
      <div className="relative h-80 w-full">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={`${member.name} - ${member.role} at Sukalp Foundation`}
          fill
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="cursor-pointer">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-orange-500 mb-3">{member.role}</p>
          <p className="text-gray-600">{member.bio}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Meet the dedicated individuals who drive our mission forward and make our work possible.
        </p>

        {/* Leadership Section - removed title */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipTeam.map((leader, index) => renderTeamMember(leader, index))}
          </div>
        </div>

        {/* Team Members Section - removed title */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentMembers.map((member, index) => renderTeamMember(member, index))}
          </div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevPage}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full ${currentPage === i ? "bg-orange-500" : "bg-gray-300"}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        )}
      </div>
      {selectedMember && (
        <TeamMemberModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} member={selectedMember} />
      )}
    </section>
  )
}
