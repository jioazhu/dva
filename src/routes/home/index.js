import React, {Component} from 'react';
import { connect } from 'dva';


class Home extends Component{

  render(){

    return (
    <div>123{this.props.name}</div>
    )
  }

}

export default connect(({home, loading})=>{
  return {
    name:home.name,
    loading:!!loading.effects['home/fetch']
  }
})(Home)
