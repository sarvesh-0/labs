// ContactComponent.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(135deg, #2c3e50 0%, #4d5c68 100%);
  padding: 30px;
  border-radius: 15px;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #ffffff;
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  color: #ffffff;
`;

const ContactDetails = styled.div`
  margin-top: 20px;
  text-align: left;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
`;

const InfoItem = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
  color: #ffffff;

  strong {
    color: #ffffff;
  }
`;

const ContactButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #34495e;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background-color: #2c3e50;
    transform: scale(1.05);
  }
`;

export default function ContactComponent() {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Paragraph>
        We would love to hear from you! Reach out to us for any inquiries or 
        support, and we'll get back to you as soon as possible.
      </Paragraph>

      <ContactDetails>
        <InfoItem>
          <strong>Email:</strong> support@innovativesolutions.com
        </InfoItem>
        <InfoItem>
          <strong>Phone:</strong> +91 12345 67890
        </InfoItem>
        <InfoItem>
          <strong>Address:</strong> 123 Innovation Lane, Pune, Maharashtra, India
        </InfoItem>
      </ContactDetails>

      <ContactButton>Get in Touch</ContactButton>
    </Container>
  );
}
