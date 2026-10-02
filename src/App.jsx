import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import Accueil from '@/pages/Accueil'
import Contact from '@/pages/Contact'
import NotreMission from '@/pages/NotreMission'
import NotFound from '@/pages/NotFound'
import QuiSommesNous from '@/pages/QuiSommesNous'
import Temoignages from '@/pages/Temoignages'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
        <Route path="/notre-mission" element={<NotreMission />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
