import FooterCopyright from './footer-copyright'
import Meta from './meta'
import ScrollApp from './scollToTop'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
      
        <main>{children}</main>
      </div>
     <ScrollApp />
      <FooterCopyright />
    </>
  )
}
