import { Metadata } from 'next'
import { ContactContent } from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Harry Verma',
  description: 'Initiate a mission and let\'s architect something legendary. Contact Harry Verma for UI/UX Design and Full-Stack Development projects.',
}

export default function ContactPage() {
  return <ContactContent />
}

