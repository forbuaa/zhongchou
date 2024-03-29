import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import {Table} from 'semantic-ui-react';

import RequestRow from '../../../components/RequestRow';
class CompaignRequest extends Component{

  static async getInitialProps(props){

    const {address} = props.query;


    const campaign = Campaign(address);

    const requestCount = await campaign.methods.getRequestCount().call();
    const approvesCount = await campaign.methods.approvesCount().call();

    const requests = await Promise.all(

      Array(parseInt(requestCount)).fill().map((element,index)=>{


        return campaign.methods.requests(index).call();
      })

    )

    console.log(requests);
    return {address,requests,approvesCount};
  }


renderRow(){

  return  this.props.requests.map((request,index)=>{

      return(

         <RequestRow
            key={index}
             id={index}
            request={request}
              address={this.props.address}
              approvesCount={this.props.approvesCount}
              >

        </RequestRow>


      );

  });
}


  render(){


   const {HeaderCell,Row,Header} =Table;
    return(
   <Layout>

    <h1>
     请求列表
     </h1>
    <Link route={`/compaigns/${this.props.address}/requests/new`}>
     <Button primary> 增加请求</Button>
     </Link>


   <Table >
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>ID </Table.HeaderCell>
      <Table.HeaderCell> 描述</Table.HeaderCell>
      <Table.HeaderCell>总的金额</Table.HeaderCell>
        <Table.HeaderCell> 受益人地址</Table.HeaderCell>
          <Table.HeaderCell>同意的数量</Table.HeaderCell>
            <Table.HeaderCell> 是否同意</Table.HeaderCell>
              <Table.HeaderCell>finish?</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

   <Table.Body>
     {this.renderRow()}
    </Table.Body>
   </Table>
   </Layout>
);
  }
}
export default CompaignRequest;
