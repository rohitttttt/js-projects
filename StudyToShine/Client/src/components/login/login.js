import React from 'react';  
import '../site.css';  

class Login extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner inner-background'>  
<h1>{this.props.text}</h1>  
<button onClick={this.props.closePopup}>close me</button>  
</div>  
</div> 

)}}
export default Login;