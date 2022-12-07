// NOT USED ANYMORE

import { Container } from "react-bootstrap";

const PageFooter = () => {
  return (
    <Container
      fluid
      className="footer fixed-bottom d-flex justify-content-center align-items-center"
    >
      <span className="text-muted">SpicyCold {new Date().getFullYear()}©</span>
    </Container>
  );
};
export default PageFooter;
