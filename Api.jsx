import React ,{Component} from 'react';
 class Api extends Component{

constructor (){
    super();
    this.state={
        users:null

    }

}
componentDidMount(){
    fetch('https://reqres.in/api/users?page=2')
    .then((resp)=>{resp.json()
    .then((result)=>{

        this.setState({users:result.data})


    })
})
   
}

 

 render()
{
    return(
    <>
    <div className="m-4">
        
        {
            this.state.users?
            this.state.users.map((item,i)=>

            <div className="container">
                <h1>Id:{i}</h1>
                <img src={item.avatar}  className="rounded float-end"/>
                <h1>Email:{item.email}</h1>
                <h1>FirstName:{item.first_name}</h1>
                <h1>LastName:{item.last_name}</h1>
                 <br/><br/>
                 </div>
                
            )
            :
            null
        }
    </div>
    </>
);
 }
}

 export default Api;
