import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function ContactUs() {
    return (
    <Form className='p-4 d-flex flex-column justify-content-evenly'>
        <div className="d-flex flex-row justify-content-evenly">
            <div className="d-flex flex-column">
                <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
            </div>
            <div className="d-flex flex-column">
                <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Email" />
                </Form.Group>
            </div>
        </div>
        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

