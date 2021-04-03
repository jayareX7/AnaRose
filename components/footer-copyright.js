
import Container  from './container';
import { Col } from "reactstrap";


export default function FooterCopyright() {
    return (
   
<footer className="copyright_footer_area border-top border-accent-2">
    <Container>
        <div className="text-center margin-auto justify-center align-center">
        <Col lg='12'>
        <div className=" flex">
<Col lg='4'>
  <div className="text-center  mt-2 align-center margin-auto">
<a
              href={`https://github.com/vercel/next.js/tree/canary/examples/`}
              className="fw_700"
            >
              Terms & Conditions
            </a>
            </div>
            </Col>
            <Col lg='4'>
  <div className="text-center mt-2 align-center margin-auto" style={{color: 'white'}}>
  All Right Reserved.
      </div>
      </Col>



            <Col lg='4'>
  <div className="text-center mt-2 align-center margin-auto">
            <a href={`https://github.com/vercel/next.js/tree/canary/examples/`} className="fw_700 ">
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