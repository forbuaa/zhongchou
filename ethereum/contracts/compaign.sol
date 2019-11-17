pragma solidity ^0.4.25;


contract CampaignFactory{

  address[] public deployedCampaign;
  function createCampaign(uint minium) public {


    address newCampaign = new Campaign(minium,msg.sender);

    deployedCampaign.push(newCampaign);
  }

  function getDeployedCampaign() public view returns(address[]){

    return deployedCampaign;
  }


}




contract Campaign{

   struct Request{

      string description;
      uint value;
      address recipients;
      bool complete;
      uint approvalCount;
      mapping(address=>bool) approvers;


   }
    Request[] public requests;
    address public manager;
    uint public minimunContribute;
    mapping(address=>bool) public  approvers;
    uint public approvesCount;


    modifier restricted{
       require(msg.sender == manager);
       _;

    }

     constructor(uint minium,address _address) public {

         manager = _address;
         minimunContribute = minium;

     }
     function contribute() public payable{

         require(msg.value > minimunContribute);
         approvers[msg.sender] = true;
         approvesCount++;

     }
     function createRequest(string _description, uint _value,address _addr)public restricted {

         Request memory newrequest = Request ({

              description:_description,
              value:_value,
              recipients:_addr,
              complete:false,
              approvalCount:0



           });

           requests.push(newrequest);


     }

     function approveRequest(uint index)  public {

        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvers[msg.sender]);
        request.approvers[msg.sender] = true;
        request.approvalCount++;
     }

    function finalRequest(uint index) public restricted payable{

      Request storage request = requests[index];

      require(request.approvalCount > approvesCount / 2);

      request.recipients.transfer(request.value);
      request.complete = true;

    }





     function getsSummary() public view returns(uint,uint,uint,uint,address){


       return (minimunContribute,address(this).balance,requests.length,approvesCount,manager);
     }

    function getRequestCount() public view returns (uint){


      return requests.length;
    }
  }
