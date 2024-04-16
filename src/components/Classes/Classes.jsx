export default function Classes(props){
    console.log(props)
    
    return(
    <div>
        <h3>Classes</h3>
       
            <ul>
          {props.characterClasses && (props.characterClasses.map( item => <li>{item.name}</li>))}
            </ul>
        
        <h3>Subclasses</h3>
        
        <ul>
          {props.subclasses && (props.subclasses.map( item => <li>{item.name}</li>))}
        </ul>
    </div>
    )
}