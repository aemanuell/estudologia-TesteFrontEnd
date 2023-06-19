import { ButtonCard } from "./styles"

// interface ButtonProps {
//     textTitle: string;
//     disabled: boolean;
// }

export function Button({textTitle, disabled}:any){
    return(
        <ButtonCard disabled={disabled}>{textTitle}</ButtonCard>
    )
}