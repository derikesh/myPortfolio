import type { Metadata } from 'next'
import ContactPageContent from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rikesh — contact details and form.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
