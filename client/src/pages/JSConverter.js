import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import HeroHeader from '../components/HeaderHero';

function JSConverter() {
  const [inputText, setInputText] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  const formatCode = (code) => {
    // This function adds indentation to the code to make it more readable
    return code.split('\n').map((line) => '  ' + line).join('\n');
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    setError('');
    setConvertedCode('');
    setLoading(true);

    try {
      const response = await fetch('/api/v1/ai/js-converter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        setError('Error converting the code. Please try again.');
        setLoading(false);
        return;
      }

      const data = await response.json();
      setConvertedCode(data.answer);
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
            <Form.Group controlId="jsConverterInput">
              <Form.Label>Enter HTML Code to Convert to JavaScript Code:</Form.Label>
              <Form.Control as="textarea" rows={6} value={inputText} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Loading...' : 'Convert to JavaScript'}
            </Button>
          </Card.Body>
        </Card>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        {convertedCode && (
          <Card className="mt-3">
          <Card.Body>
            <h5>Converted JavaScript Code:</h5>
            <Form.Group controlId="convertedCodeTextarea">
              <Form.Control
                as="textarea"
                rows={10} // Adjust the number of rows to show more or less content at once
                readOnly
                value={convertedCode}
              />
            </Form.Group>
          </Card.Body>
        </Card>
        )}
      </Container>
    </>
  );
}

export default JSConverter;
