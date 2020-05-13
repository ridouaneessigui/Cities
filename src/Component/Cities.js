import React, { Component } from 'react';
import './Cities.scss';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
class Cities extends Component {
    constructor(props) {
        super(props)
        this.state={
            hits:[],
            currentPage:1,
            PageSize:10,
            CurrentKeyword:'rabat'
            }
    }
    componentDidMount(){
        this.getHits();
    }
    getHits(){
        let url="https://pixabay.com/api/?key=16476728-d36dd54eb0d4da909611c6ab0&q="+this.state.CurrentKeyword;
        axios.get(url).then((res)=>
        {
            this.setState({
                hits:res.data.hits

            })
        }).catch((err=>{console.log(err);}))
        }
    setKeyword=(event)=>{
            this.setState({
                CurrentKeyword:event.target.value
            })
    }
    search=(event)=>{
            event.preventDefault();
            this.getHits();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.search}>
                     <div className="row m-2 p-2">
                          <div className="col">
                              <input type="text" 
                              onChange={this.setKeyword}
                              className="form-control"/>
                         </div>
                         <div className="col-auto">
                              <button classNmae="btn btn-success" type="submit">cherche</button>
                         </div>
                     </div>
                </form>
              <div className="row">
            {
                this.state.hits.map(hit=>
                    
                    <div className="col-md-4">
                     <div className="card">
                          <div className="card-header" class="Cc">{hit.tags} || {hit.views} || {hit.downloads} </div>
                          <div className="card">
                            <img src={hit.webformatURL}/>
                               <ul class="A">
                                <li>
                                 {hit.tags}
                                </li>
                            </ul>
                          </div>
                     </div>
                    </div>
                )
                
            }
                </div>
            </div>
        );
    }
}

export default Cities;
