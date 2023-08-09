import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import HeroHeader from '../components/HeaderHero';

function Paragraph() {
  const [inputText, setInputText] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setError('');
      setParagraph('');
      setLoading(true);

      const response = await fetch('/api/v1/ai/paragraph', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();

      if (response.ok) {
        setParagraph(data.answer);
      } else {
        setError('Error generating the paragraph. Please try again.');
      }

    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <NavBar />
    
    <Container>
      <Card>
        <Card.Body>
          <Form.Group controlId="paragraphInput">
            <Form.Label>Enter Text for Paragraph:</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              value={inputText}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Loading...' : 'Generate Paragraph'}
          </Button>
        </Card.Body>
      </Card>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {paragraph && (
        <Card className="mt-3">
          <Card.Body>
            <h5>Generated Paragraph By AI</h5>
            <p>{paragraph}</p>
          </Card.Body>
        </Card>
      )}
    </Container>
    </>
  );
}

export default Paragraph;