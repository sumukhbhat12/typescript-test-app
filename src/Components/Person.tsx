interface Props {
    name:string,
    email:string,
    age:number,
    country?:string,
    isMarried: boolean,
    friends: string[];
}

export const Person = (props: Props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
            {props.country && <p>Country: {props.country}</p>}
            <p>Married: {props.isMarried ? 'Yes' : 'No'}</p>
            <p>Friends: { props.friends.map((friend:string) => {
                return friend + ', ';
            })}</p>
        </div>
    )
}