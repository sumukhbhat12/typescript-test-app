import { NavigateFunction, useNavigate } from 'react-router-dom';
import { IconButton, FlexboxGrid } from 'rsuite';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillCarFrontFill } from 'react-icons/bs';
export const NavButton = () => {
    const navigate: NavigateFunction = useNavigate();
    return(
        <FlexboxGrid justify='center'>
            <IconButton icon={ < BsFillPersonFill /> } onClick={() => {navigate('/person')} } style={{margin:'10px'}}></IconButton>
            <IconButton icon={ <AiOutlineHome /> } onClick={() => {navigate('/')}} style={{margin:'10px'}}></IconButton>
            <IconButton icon={ <BsFillCarFrontFill /> } onClick={() => {navigate('/car')}} style={{margin:'10px'}}></IconButton>
        </FlexboxGrid>
    )
}