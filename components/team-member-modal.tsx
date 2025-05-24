"use client"
import Image from "next/image"
import { X } from "lucide-react"

interface TeamMemberModalProps {
  isOpen: boolean
  onClose: () => void
  member: {
    name: string
    role: string
    image: string | null
    bio: string
    fullBio?: string
  }
}

export function TeamMemberModal({ isOpen, onClose, member }: TeamMemberModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold">{member.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close modal">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role} at Sukalp Foundation`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </div>
              <p className="text-orange-500 font-medium mt-4">{member.role}</p>
            </div>

            <div className="md:w-2/3">
              <h4 className="text-xl font-semibold mb-4">About {member.name}</h4>
              <p className="text-gray-700 mb-4">{member.bio}</p>
              {member.fullBio && (
                <div className="text-gray-700">
                  {member.fullBio.split("\n").map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
