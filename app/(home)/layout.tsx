
import { Nav } from "@/components/Navbar"
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
       <Nav />
      {children}
    </section>
  )
}