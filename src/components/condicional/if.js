/* eslint-disable import/no-anonymous-default-export */
/*
<If test={exp}>

</If>
*/
export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
    
}