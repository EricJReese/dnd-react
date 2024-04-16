export default function Description(props){

return(
<div>
    <h3>Spell Description</h3>
          {<p>{props.compDescription && props.compDescription[0]}</p>}
</div>
)   
}