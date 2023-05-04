import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import Pdf from 'react-to-pdf';
const ref = React.createRef();

const Blog = () => {
    return (
        <div className="App container">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='btn btn-primary my-4'>Download Pdf <FaDownload /> </button>}
            </Pdf>
            <div ref={ref}>
                <Card className=''>
                    <Card.Body>
                        <Card.Title>1. Tell us the differences between uncontrolled and controlled components.</Card.Title>
                        <Card.Text>
                            In the context of software development, uncontrolled and controlled components refer to two different approaches to building user interfaces.
                            Uncontrolled components are built using HTML form elements, such as input, select, and textarea. These elements are responsible for managing their own state and are not directly controlled by the application.
                            Controlled components, on the other hand, are built using JavaScript and are directly controlled by the application. The application manages the state of the component and determines how it should be displayed.
                            The primary difference between a controlled component and an uncontrolled component is related to how they handle their valueControlled components use state to handle the value internally while uncontrolled components pass down the value through props.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='my-4'>
                    <Card.Body>
                        <Card.Title>2. How to validate React props using PropTypes?</Card.Title>
                        <Card.Text>
                            React has an internal mechanism for props validation called PropTypes. WE can use it to specify the type and structure of the props that our React components receive, and to ensure that they are of the correct type and format.

                            To use React Props Validation, first need to install the PropTypes package using npm install prop-types. Once installed, we can import it into our component using import PropTypes from 'prop-types'. WE can then define the PropTypes for our component by adding a propTypes property to our component.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='my-4'>
                    <Card.Body>
                        <Card.Title>3. Tell us the difference between nodejs and express js.</Card.Title>
                        <Card.Text>
                            The difference between Node.js and Express.js is in the level of abstraction. Node.js is a run-time environment for building server-side event-driven i/o applications using JavaScriptExpress.js is a framework based on Node.js for building web applications using principles and approaches of Node.js event-driven architecture.

                            Express.js provides various features that make web application development fast and easy, which otherwise takes more time using only Node.js. It provides a robust set of features for web and mobile applications.

                            In summary, while Node.js provides a powerful platform for running JavaScript code on the server-side, Express.js is a framework built on top of Node.js that provides additional tools and features to simplify the process of building web applications.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='my-4'>
                    <Card.Body>
                        <Card.Title>4. What is a custom hook, and why will you create a custom hook?</Card.Title>
                        <Card.Text>
                            A custom hook is a function that starts with the word “use” and may call other Hooks. The “useWhatever” naming convention mainly allows the linter to find bugs in how these hooks are used, for example, scenarios where their usage goes against the rules of Hooks.

                            Custom hooks allow us to extract component logic that needs to be used by multiple components into a reusable function. This can helps us avoid repeating code and make our code more modular and easier to maintain.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>


    );
};

export default Blog;