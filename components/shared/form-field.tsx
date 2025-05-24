import type { ReactNode } from "react"

interface FormFieldProps {
  id: string
  label: string
  error?: string
  required?: boolean
  children: ReactNode
}

export function FormField({ id, label, error, required = false, children }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
