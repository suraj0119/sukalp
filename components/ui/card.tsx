import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>{children}</div>
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`p-6 border-b ${className}`}>{children}</div>
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = "" }: CardProps) {
  return <div className={`p-6 border-t bg-gray-50 ${className}`}>{children}</div>
}
