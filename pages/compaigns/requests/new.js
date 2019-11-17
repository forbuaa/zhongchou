import React,{Component} from 'react';
import {Form,Input,Button,Message}  from 'semantic-ui-react';
import Layout from '../../../Components/Layout';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';

import {Router,Link} from '../../../routes';
class CompaignRequestNew extends Component{

static async getInitialProps(props){

  const{address} = props.query;

  return {address};
}

  state={
      description:'',
      errorMessage:'',
      value:'',
      recipients:''

  };


  onSubmit= async ()=>{
  event.preventDefault();

  const campaign = Campaign(this.props.address);
  const accounts = await web3.eth.getAccounts();
  const {description,value,recipients} = this.state;

  this.setState({loading:true});

try{
  await campaign.methods.createRequest(description,web3.utils.toWei(value,'ether'),recipients).send({

    from:accounts[0],

  });

 Router.pushRoute(`/compaigns/${this.props.address}/requests`);

}catch(error){

  this.setState({errorMessage:error.message});
}
this.setState({loading:false});

}
  render(){

    return(
      <Layout>
        <Link route ={`/compaigns/${this.props.address}/requests`}>
        <a>
        返回 
        </a>
        </Link>
      <Form onSubmit={this.onSubmit}   error={!!this.state.errorMessage}>
          <Form.Field>

          <label>描述信息</label>
          <Input
              value={this.state.description}
              onChange={event=>this.setState({description:event.target.value})}

              />
       </Form.Field>

       <Form.Field>

       <label>请求金额</label>
       <Input
           value={this.state.value}
           onChange={event=>this.setState({value:event.target.value})}

           />
    </Form.Field>

    <Form.Field>

    <label>受益人地址 </label>
    <Input
        value={this.state.recipients}
        onChange={event=>this.setState({recipients:event.target.value})}

        />
 </Form.Field>

       <Message error header =" 错误提示" content={this.state.errorMessage} />

       <Button loading={this.state.loading}primary> 增加请求 </Button>
      </Form>

    </Layout>

   );
  }
}

export default CompaignRequestNew;
