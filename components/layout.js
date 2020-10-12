import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Navigation from '../components/navigation'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Navigation   />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
