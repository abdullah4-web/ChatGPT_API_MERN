import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import './ImageGenerator.css'; // Custom CSS file for additional styles

function ImageGenerator() {
  const [inputText, setInputText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showCopyButton, setShowCopyButton] = useState(false);
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setError('');
      setImageUrl('');
      setLoading(true);
      setShowCopyButton(false);
      setShowCopyAlert(false);

      const response = await fetch('/api/v1/ai/imagegenerator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();

      if (response.ok) {
        setImageUrl(data.imageUrl);
        setShowCopyButton(true);
      } else {
        setError('Error generating the image. Please try again.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyUrl = () => {
    // Copy the image URL to the clipboard
    navigator.clipboard.writeText(imageUrl).then(
      function () {
        console.log('Image URL copied to clipboard');
        setShowCopyAlert(true);
        // Automatically hide the alert after 5 seconds
        setTimeout(() => {
          setShowCopyAlert(false);
        }, 5000);
      },
      function (err) {
        console.error('Error copying image URL to clipboard:', err);
      }
    );
  };

  return (
    <>
      <NavBar />

      <Container className="image-generator-container">
        <Card className="image-generator-card">
          <Card.Body>
            <h2 className="image-generator-header">Generate Your Image With AI</h2>
            <Form.Group controlId="imageGeneratorInput">
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Enter Text..."
                  value={inputText}
                  onChange={handleInputChange}
                  className="image-generator-input"
                />
                <div className="input-group-append">
                  <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="image-generator-button"
                  >
                    {loading ? 'Loading...' : 'Generate'}
                  </Button>
                </div>
              </div>
            </Form.Group>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            {imageUrl && (
              <div className="image-result">
                <img src={imageUrl} alt="Generated Sci-Fi Image" className="image-result-image" />
                {showCopyButton && (
                  <Button
                    variant="success"
                    onClick={handleCopyUrl}
                    className="image-download-button"
                  >
                    Copy Image URL
                  </Button>
                )}
                {showCopyAlert && (
                  <Alert variant="success" className="mt-3">
                    Image URL copied to clipboard!
                  </Alert>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ImageGenerator;
