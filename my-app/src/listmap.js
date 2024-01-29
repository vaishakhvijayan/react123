function Listmap(props){
    return(
        <li>i am a{props.brand}</li>
    )
}
function Garage()
{
    const cars=['FORD','BMW','AUDI'];
    return(
        <div>
            <ul>
                {cars.map((car)=><Listmap brand={car}/>)}
            </ul>
        </div>
    )


}
export default Garage;