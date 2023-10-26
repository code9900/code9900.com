import './globals.css'

export const metadata = {
  title: 'code9900.com',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
