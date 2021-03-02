
import { Container } from 'next/app';
import {
    Col,
  } from "reactstrap";

export default function FooterCopyright() {
    return (

<footer className="copyright_footer_area border-top border-accent-2">
    <Container>
        <div className="text-center pt-3 margin-auto justify-center align-center">
        <Col lg='12'>
        <div className=" flex">
<Col lg='4'>
  <div className="text-center align-center margin-auto">
<a
              href={`https://github.com/vercel/next.js/tree/canary/examples/`}
              className="font-bold hover:underline"
            >
              Terms & Conditions
            </a>
            </div>
            </Col>
            <Col lg='4'>
  <div className="text-center align-center margin-auto">
  <p>All Right Reserved.</p>
      </div>
      </Col>



            <Col lg='4'>
  <div className="text-center align-center margin-auto">
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/`}
              className="font-bold hover:underline"
            >
              Privacy Policy
            </a>
            </div>
            </Col>
</div>
   
        </Col>
        </div>
    </Container>

    </footer>

    )}