function Listmap(props)
{
    return(
        <li>iam a {props.brand}</li>
    )
}
function Garage1 (){
    const cars=[{id:1,brand:'ford'},
               {id:2,brand:'bmw'},
               {id:3,brand:'audi'}]
        return(
            <div>

                <ul>
                    {cars.map((car)=><Listmap key={car.id} brand= {car.brand}/>)}
                </ul>
            </div>
        )
}
export default Garage1