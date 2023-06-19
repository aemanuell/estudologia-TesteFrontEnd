import { DividingLine, HeaderContainer } from "./styles";
import logoEstudologia from '../../../public/logoEstudologia.svg';

export function Header(){
    return(
        <>
            <HeaderContainer>
                <img src={logoEstudologia} alt="" />
            </HeaderContainer>

            <DividingLine/>
        </>
    )
}