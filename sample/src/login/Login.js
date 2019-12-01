import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class LoginPage extends React.Component {

    constructor(props){
        super(props)
    }

    onSubmit = () => {
        this.props.history.push('/home')
    }
    
    render() {
        return (
            <div className="d-flex justify-content-md-center">
                <div className="loginbox">
                    <div className="d-flex justify-content-md-center">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Pwd</Form.Label>
                                <Form.Control type="pwd" placeholder="Pwd" />
                            </Form.Group>
                            <Button variant="primary" onClick={this.onSubmit} type="submit">
                                LOGIN
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}