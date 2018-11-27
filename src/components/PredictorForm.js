import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Label, FormGroup } from 'reactstrap';
import AvForm from 'availity-reactstrap-validation/lib/AvForm';
import AvGroup from 'availity-reactstrap-validation/lib/AvGroup';
import AvInput from 'availity-reactstrap-validation/lib/AvInput';
import AvField from 'availity-reactstrap-validation/lib/AvField';
import AvFeedback from 'availity-reactstrap-validation/lib/AvFeedback';

class PredictorForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault(); 
        const property_type = this.propertyType.value
        const address = this.address.value
        const postal_code = this.postalCode.value
        const bedrooms = this.bedrooms.value
        const bathrooms = this.bathrooms.value
        const parkings = this.parkings.value
        const data = {
            property_type,
            address,
            postal_code,
            bedrooms,
            bathrooms,
            parkings
        }   
        this.props.dispatch({
            type:'PREDICT',
            data
        });
    }

    render() {
        return (
        <div>
            <Jumbotron>
                <h1>Enter Property Information</h1>
                <AvForm onValidSubmit={this.handleSubmit}>
                    <AvGroup>
                        <Label for="property_type">Property Type:</Label>
                        <AvField type="select" name="property_type" id="property_type" innerRef={(input)=>this.propertyType=input} placeholder="Property Type" required>
                            <option value="">---Select---</option>
                            <option>House</option>
                            <option>Unit</option>
                            <option>Townhouse</option>
                        </AvField>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="address">Address</Label>
                        <AvInput type="text" name="address" id="address" innerRef={(input)=>this.address=input} placeholder="Address" required/>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="postal_code">Postal Code</Label>
                        <AvInput type="text" name="postal_code" id="postal_code" innerRef={(input)=>this.postalCode=input} placeholder="Postal Code" required/>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="bedrooms">Number of bedrooms:</Label>
                        <AvField type="select" name="bedrooms" id="bedrooms" innerRef={(input)=>this.bedrooms=input} placeholder="Bedrooms" required>
                            <option value="">---Select---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </AvField>
                    </AvGroup>
                    <AvGroup>
                        <Label for="bathrooms">Number of bathrooms:</Label>
                        <AvField type="select" name="bathrooms" id="bathrooms" innerRef={(input)=>this.bathrooms=input} placeholder="Bathrooms" required>
                            <option value="">---Select---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </AvField>
                    </AvGroup>
                    <AvGroup>
                        <Label for="parkings">Number of parking slots:</Label>
                        <AvField type="select" name="parkings" id="parkings" innerRef={(input)=>this.parkings=input} placeholder="Parkings" required>
                            <option value="">---Select---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </AvField>
                    </AvGroup>
                    <FormGroup>
                        <Button color='primary' type='Submit'>Estimate</Button>
                    </FormGroup>
                </AvForm>
            </Jumbotron>
        </div>
        );
    }
}

export default connect()(PredictorForm);
