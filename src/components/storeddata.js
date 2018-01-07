import React,{Component} from 'react';
import Details from './details';

export default class StoredData extends Component{

constructor(props){

  super(props);

  this.state={clicked:false}

  this.change=this.change.bind(this);

}


change(event){
       this.setState({clicked:true});
}


render(){
  return(
        <div>
          <select id="dropdown" onChange={this.change}> 
            <option value='30 days'>30 days</option>
            <option value='60 days'> 60 days </option>
          </select>
          {this.state.clicked ? <Details /> : null}
        </div>
    )
        }
}
