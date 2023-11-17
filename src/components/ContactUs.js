import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function ContactUs() {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const fullName = formData.get('fullName');
        const address = formData.get('address');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const description = formData.get('description');

        console.log('Form data:', {
            fullName,
            address,
            phone,
            email,
            description,
        });
    };

    return (
        <div className="d-flex flex-column justify-content-evenly p-4">
            <h1><strong>Contact Us</strong></h1>
            <Form className='form-rows d-flex flex-column justify-content-evenly' onSubmit={handleFormSubmit}>
                <div className=" d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column">
                        <Form.Group className="mb-3" controlId="formBasicFullName">
                        <Form.Control type="text" placeholder="Full Name" name='fullName'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Control type="text" placeholder="Address" name='address'/>
                        </Form.Group>
                    </div>
                    <div className="d-flex flex-column">
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Control type="text" placeholder="Phone" name='phone'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Email" name='email' />
                        </Form.Group>
                    </div>
                </div>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control as="textarea" placeholder="Description"  name='description'/>
                </Form.Group>
                

            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

