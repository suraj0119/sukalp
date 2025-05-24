import { z } from "zod"

// Common form field validations
export const commonFields = {
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().optional(),
}

// Donation form schema
export const donationFormSchema = z.object({
  donationType: z.enum(["one-time", "monthly", "quarterly", "annually"]),
  amount: z.string().min(1, { message: "Please select or enter an amount" }),
  firstName: commonFields.name,
  lastName: commonFields.name,
  email: commonFields.email,
  phone: commonFields.phone,
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  pincode: z.string().min(6, { message: "Please enter a valid PIN code" }),
  panNumber: z.string().optional(),
  message: commonFields.message,
})

// Partnership inquiry form schema
export const partnershipFormSchema = z.object({
  partnershipType: z.enum(["csr", "employee", "strategic"], {
    required_error: "Please select partnership type",
  }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  industry: z.string().min(2, { message: "Industry is required" }),
  contactPerson: commonFields.name,
  designation: z.string().min(2, { message: "Designation is required" }),
  email: commonFields.email,
  phone: commonFields.phone,
  csrFocusArea: z.string().optional(),
  approximateBudget: z.string().min(1, { message: "Please select an approximate budget range" }),
  partnershipGoals: z.string().min(10, { message: "Please provide your partnership goals and expectations" }),
})

// Contact form schema
export const contactFormSchema = z.object({
  name: commonFields.name,
  email: commonFields.email,
  phone: commonFields.phone,
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message is required" }),
})

// Volunteer form schema
export const volunteerFormSchema = z.object({
  firstName: commonFields.name,
  lastName: commonFields.name,
  email: commonFields.email,
  phone: commonFields.phone,
  city: z.string().min(2, { message: "City is required" }),
  interests: z.array(z.string()).min(1, { message: "Please select at least one area of interest" }),
  availability: z.string().min(1, { message: "Please select your availability" }),
  experience: z.string().optional(),
  message: commonFields.message,
})

// Form submission handler with error handling
export async function handleFormSubmission<T>(
  formData: T,
  schema: z.ZodSchema<T>,
  onSuccess: (data: T) => void,
  onError: (errors: Record<string, string>) => void,
) {
  try {
    const validatedData = schema.parse(formData)
    onSuccess(validatedData)
    return true
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {}
      error.errors.forEach((err) => {
        const field = err.path[0] as string
        fieldErrors[field] = err.message
      })
      onError(fieldErrors)
    }
    return false
  }
}
