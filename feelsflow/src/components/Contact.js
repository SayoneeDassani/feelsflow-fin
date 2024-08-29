import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faExclamationTriangle, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <h1><FontAwesomeIcon icon={faExclamationTriangle} /> If your life is at risk right now</h1>
            <p>
                If you feel like you might attempt suicide, or may have seriously harmed yourself, you need urgent medical help. Please:
            </p>
            <ul>
                <li><FontAwesomeIcon icon={faPhoneAlt} /> Call <strong>999</strong> for an ambulance</li>
                <li><FontAwesomeIcon icon={faHeartbeat} /> Go straight to <strong>A&E</strong>, if you can</li>
                <li>
                    <FontAwesomeIcon icon={faPhoneAlt} /> Call your local crisis team. If you don't already have their number, you can find an urgent mental health helpline on the <a href="https://www.nhs.uk" target="_blank" rel="noopener noreferrer">NHS website</a>
                </li>
            </ul>
            <p>If you can't do this by yourself, ask someone to help you.</p>

            <blockquote>
                <FontAwesomeIcon icon={faHeartbeat} /> Mental health emergencies are serious. You're not wasting anyone's time.
                <br />
                <br />
                <em>"To this day I am so thankful that I was told to go to A&E. Sometimes you need to hit a low in order to move on from one."</em>
            </blockquote>

            <h2><FontAwesomeIcon icon={faExclamationTriangle} /> If you don't want to call 999</h2>
            <p>
                If you can keep yourself safe for a short while, but you still need urgent advice:
            </p>
            <ul>
                <li>Contact <strong>NHS 111</strong> if you live in England</li>
                <li>Contact <strong>NHS 111 Wales</strong> if you live in Wales (select option 2 to access urgent mental health support)</li>
                <li>Contact a local urgent mental health helpline (England only)</li>
                <li>Contact your GP surgery and ask for an emergency appointment. Many GPs are now offering these remotely.</li>
            </ul>

            <h2><FontAwesomeIcon icon={faHeartbeat} /> Do you need some urgent coping tools?</h2>
            <p>
                We have some crisis resources that you can use right away, by yourself, wherever you are.
            </p>

            <h2><FontAwesomeIcon icon={faPhoneAlt} /> If you need to talk right now</h2>
            <p>
                Whatever you're going through, there are people you can talk to any time. You can:
            </p>
            <ul>
                <li>Call <strong>Samaritans</strong> on 116 123 (UK-wide)</li>
                <li>Text <strong>SHOUT</strong> to 85258 (UK-wide)</li>
                <li>Call <strong>C.A.L.L.</strong> on 0800 132 737 (Wales only)</li>
            </ul>
            <p>These services are for anyone who's struggling. They won't judge you. They're free, they're anonymous, and they're always open.</p>
        </div>
    );
};

export default Contact;
