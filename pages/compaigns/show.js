import React from 'react';
import {Card,Button} from 'semantic-ui-react';
import Campaign from '../../ethereum/campaign';
import Layout from '../../components/Layout';
import ContributeForm from '../../components/contributeForm';
import { Grid,Image } from 'semantic-ui-react';
import{Link} from '../../routes';

import web3 from '../../ethereum/web3';
class Compaignshow extends React.Component{


  static async getInitialProps(props){


//console.log(props.query.address);

 const campaign = Campaign(props.query.address);

 const summary = await campaign.methods.getsSummary().call();
// console.log(summary);

return {

   address:props.query.address,
   minimunContribute:summary[0],
   balance:summary[1],
   requetcount:summary[2],
   approvesCount:summary[3],

   manager:summary[4]

};
  }

 renderCards(){
   const {
     address,
     minimunContribute,
     balance,
     requetcount,
     approvesCount,

     manager
   }=this.props;

   const items = [

    {
      header:manager,
      meta:'管理者地址',
      description:'众筹受益人',
      style:{overflowWrap:'break-word'}
    },
    {
      header:minimunContribute,
      meta:'最小贡献量',
      description:'如果你想投资，至少需要大于当前金额',
      style:{overflowWrap:'break-word'}
    },
    {
    header:requetcount,
    meta:'请求数量',
    description:'当前管理者创建请求从合约中提出，必须大于50%的投资人同意',
    style:{overflowWrap:'break-word'}
    },
    {
      header:approvesCount,
      meta:'投资人的数量',
      description:'已经为当前众筹投资的投资人数量',
      style:{overflowWrap:'break-word'}
    },
    {
    header:web3.utils.fromWei(balance,'ether'),
    meta:'当前的众筹金额(ether)',
    description:'当前的众筹中，还剩下了多少的金额',
    style:{overflowWrap:'break-word'}
    },


   ];

    return <Card.Group items={items}/>
 }

  render(){

   const summary = this.props.summary;





    return(

     <Layout>

     <h1>  众筹详情 </h1>

     <Grid>
     <Grid.Row>

     <Grid.Column width={10}>
          {this.renderCards()}

     </Grid.Column>

    <Grid.Column width={6}>
               <ContributeForm   address={this.props.address}/>
    </Grid.Column>
     </Grid.Row>

      <Grid.Row>
         <Grid.Column width={10}>
      <Link route={`/compaigns/${this.props.address}/requests`}>
      <a>
    <Button primary>  查看请求 </Button>
    </a>
    </Link>
      </Grid.Column>
    </Grid.Row>




     </Grid>

</Layout>

   );
  }


}

export default Compaignshow;
