import { Person } from "../Components/Person";
import { Col, FlexboxGrid } from 'rsuite';

export const GetPerson = () => {
    return (
        <FlexboxGrid justify="center" style={{margin:'10px'}}>
            <Col>
                <h3>Person</h3>
                <Person name={'Zumukh Bhat'} email={'zumukh@gmail.com'} age={23} country={'IND'} isMarried={false} friends={['Zenny','Zonny','Zedher']} />
            </Col>
        </FlexboxGrid>
      );
}