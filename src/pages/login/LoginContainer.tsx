import React, { useEffect } from "react";
import { ReactElement } from "react";
import { Container, Row } from "react-bootstrap";
import { LoginSection } from "./component/LoginSection";
import SessionService from "../../service/SessionService";

export const LoginContainer: React.FC = (): ReactElement => {
  const sessionService = new SessionService();

  useEffect(() => {
    sessionService.deleteSessionInfo();
  }, []);

  return (
    <div id="loginContainer">
      <Container fluid={true}>
        <Row>
          <LoginSection />
        </Row>
      </Container>
    </div>
  );
};
