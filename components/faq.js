import React from "react";

// reactstrap components
import {Button, Card, CardHeader, CardBody, Collapse, Container, Row, Col,} from "reactstrap";

function FAQ() {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  return (
    <>
      <div className=" accordion-1">
        <Container>
          <Row>
            <Col className=" ml-auto" md="12">
              <div className=" accordion my-3" id="accordionExample">
                <Card>
                  <CardHeader
                    id="headingOne"
                    aria-expanded={openedCollapse === "collapseOne"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseOne"
                              ? ""
                              : "collapseOne"
                          )
                        }
                        className="w-100 bison display-7 fw_400 spacing-0 text-left collapsed"
                        color="link">
                        can i schedule a one time clean?{" "}<span className="icon-plus"></span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseOne"}
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                    id="collapseOne"
                  >
                    <CardBody className=" opacity-8">
                    You are able to schedule any type of cleaning you would like. One time or otherwise.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingTwo"
                    aria-expanded={openedCollapse === "collapseTwo"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseTwo"
                              ? ""
                              : "collapseTwo"
                          )
                        }
                        className="w-100 bison display-7 fw_400 spacing-0 text-left collapsed"
                                                color="link"
                                                
                      > how should i prepare for my clean?{" "}<span className="icon-plus"></span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseTwo"}
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                    id="collapseTwo"
                  >
                    <CardBody className=" opacity-8">
                    We ask that you pick up any items/clothes on the floor, 
                    beds or anywhere that you would like cleaned. Lamps, fixtures, trinkets, etc. 
                    do not need to be removed. Only items that normally are not there. 
                    This helps our cleaning crew to clean effectively and efficiently. 
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingThree"
                    aria-expanded={openedCollapse === "collapseThree"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseThree"
                              ? ""
                              : "collapseThree"
                          )
                        }
                        className="w-100 bison display-7 fw_400 spacing-0 text-left collapsed"
                                                color="link"
                        
                      >can i get to schedule a specific time and day that works best for me?
                       {" "}<span className="icon-plus"></span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseThree"}
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                    id="collapseThree"
                  >
                    <CardBody className=" opacity-8">
                    Absolutely! Set a day and time that works for you, and we will be there.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingFour"
                    aria-expanded={openedCollapse === "collapseFour"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseFour"
                              ? ""
                              : "collapseFour"
                          )
                        }
                        className="w-100 bison display-7 fw_400 spacing-0 text-left collapsed"
                                                color="link"
                        
                      >are ana rose cleaning products available for shipping?
                         {" "}<span className="icon-plus"></span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseFour"}
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                    id="collapseFour"
                  >
                    <CardBody className=" opacity-8">
                    As of now, we are able to ship anywhere in the US. 
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingFifth"
                    aria-expanded={openedCollapse === "collapseFifth"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseFifth"
                              ? ""
                              : "collapseFifth"
                          )
                        }
                        className="w-100 bison display-7 fw_400 spacing-0 text-left collapsed"
                                                color="link"
                        
                      >are the products you use and offer safe for pets and children?
                        {" "}<span className="icon-plus"></span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseFifth"}
                    aria-labelledby="headingFifth"
                    data-parent="#accordionExample"
                    id="collapseFifth"
                  >
                    <CardBody className=" opacity-8">
                    Yes. All of our products are 100% homemade, organic products. Safe for the whole family!
                    </CardBody>
                  </Collapse>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FAQ;