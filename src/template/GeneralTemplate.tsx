import { Outlet } from 'react-router-dom'
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'

export default function Template() {
  return (
    <div className="flex-auto">
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  )
}
