import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import HeroHeader from '../components/HeaderHero';

function Summary() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/v1/ai/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      setSummary(data.answer);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
    <NavBar />
    <HeroHeader Title="Summarize Your Text ...." />
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form.Group controlId="summaryInput">
                <Form.Label>Enter Text to Summarize:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={inputText}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Loading...' : 'Summarize'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h5>Summary:</h5>
              {summary && <p>{summary}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Summary;
