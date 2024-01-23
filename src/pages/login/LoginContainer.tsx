import React from "react";
import { ReactElement } from "react";
import { Container, Row } from "react-bootstrap";
import { LoginSection } from "./component/LoginSection";

export const LoginContainer: React.FC = (): ReactElement => {
  return (
    <div id="loginContainer">
      login container
      <Container fluid={true}>
        <Row>
          <LoginSection />
        </Row>
      </Container>
    </div>
  );
};
