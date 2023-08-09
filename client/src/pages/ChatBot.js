import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChatBot.css'; // Custom CSS file for additional styles
import NavBar from '../components/NavBar';

// User message component
const UserMessage = ({ message }) => (
  <p className="chat-message user-message bg-info rounded p-2 mb-2">You: {message}</p>
);

// AI message component
const AIMessage = ({ message }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(message)
      .then(() => {
        alert('AI response copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy AI response: ', error);
      });
  };

  return (
    <div className="chat-message ai-message rounded p-2 mb-2 ai-response">
      <p className="message-text">AI: {message}</p>
      <Button variant="primary" size="sm" onClick={handleCopyToClipboard}>
        Copy
      </Button>
    </div>
  );
};

function ChatBot() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch('/api/v1/ai/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
        });
        const data = await response.json();
        setResponse(data.answer);

        // Add the current question and response to the chat history
        setChatHistory((prevChatHistory) => [
          { question, answer: data.answer },
          ...prevChatHistory,
        ]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setQuestion('');
      }
    };

    if (loading) {
      // Simulate AI typing by adding a delay before showing the response
      setTimeout(() => {
        fetchResponse();
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <NavBar />
      <div className="chat-container">
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col md={16} className="chat-section">
              <Card className="h-100 border-0">
                <Card.Body className="chat-messages">
                  {chatHistory.slice().reverse().map((item, index) => (
                    <React.Fragment key={index}>
                      <UserMessage message={item.question} />
                      <AIMessage message={item.answer} />
                    </React.Fragment>
                  ))}
                  {/* Display "typing..." during loading */}
                  {loading && <AIMessage message="Typing..." />}
                </Card.Body>
                <Card.Footer className="bg-info d-flex">
                  <Form className="d-flex flex-grow-1 form-container">
                    <Form.Group className="flex-grow-1 mb-0">
                      <Form.Control
                        type="text"
                        value={question}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Type a message..."
                      />
                    </Form.Group>
                    <div className="send-button-container">
                      <Button variant="primary" onClick={handleSubmit} className="send-button">
                        Send
                      </Button>
                    </div>
                  </Form>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ChatBot;
