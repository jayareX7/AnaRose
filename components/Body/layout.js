import Alert from '../body/alert'
import Footer from '../body/footer'
import FooterCopyright from '../body/footer-copyright'
import Meta from '../body/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
      
        <main>{children}</main>
      </div>
     
      <FooterCopyright />
    </>
  )
}
