import { Car, Color } from "../Components/Car"
import { Col, FlexboxGrid } from 'rsuite';

export const GetCar = () => {
    return(
        <FlexboxGrid justify="center" style={{margin:'10px'}}>
            <Col>
                <h3>Car</h3>
                <Car name={'Mitsubishi Lancer'} model={'luxurious sedan'} company={'Mitsubishi Motors'} year={'2014'} color={Color.Pink} />
            </Col>
        </FlexboxGrid>
    )
}