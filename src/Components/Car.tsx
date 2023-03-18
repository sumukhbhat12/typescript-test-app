interface Props {
    name:string,
    model:string,
    company:string,
    year:string,
    color:Color,
}

export enum Color {
    Red="Red",
    Green='Green',
    Pink='Pink',
    Yellow='Yellow',
}

export const Car = (props:Props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Model: {props.model}</p>
            <p>Company: {props.company}</p>
            <p>Purchase Year: {props.year}</p>
            <p>Color: {props.color}</p>
        </div>
    )
}