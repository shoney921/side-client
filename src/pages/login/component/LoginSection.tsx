import { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm";
import "./LoginSection.scss";

export const LoginSection: React.FC = (): ReactElement => {
  return (
    <div id="loginSection">
      <Container>
        <Row>
          <Col ClassName="loginContainer-col">
            <div id="LoginSectionTitle" className="LoginSection-title">
              <div id="logo" className="logo">
                {/* Logo 이미지 */}
              </div>
              <div className="loginTitle">
                <h2>
                  <strong>SIDE</strong>
                  <br />
                  로그인
                </h2>
              </div>
            </div>
            <div id="LoginSectionForm" className="LoginSection-form">
              <Row>
                <LoginForm />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
