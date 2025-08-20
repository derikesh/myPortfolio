import type { Metadata } from 'next'
import AboutPageContent from './AboutPageContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Rikesh — journey, skills, and experiences.',
}

export default function AboutPage() {
  return <AboutPageContent />
}
