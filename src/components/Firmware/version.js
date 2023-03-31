import React, { Component } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import config from '../../config';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import queryString from 'query-string';
import ReactGA from 'react-ga';
import RegistrationPopup from '../Common/RegistrationPopup';
/*import { Redirect } from 'react-router-dom';*/

class VersionFirmware extends Component {

    constructor(props) {

        super(props);

        this.state = {
            dataList : '',
            itemsList : '',
            value: '',
            suggestions: [],
            firmwareVersion: '',
            showpopup: false,
            downloadlink: '',
            downloadversion: '',
            serialInvalid: false,
            showLessFirmware: false,
            showLessFirmwareId: 0,
            firmwaredataList: '',
            showpopup: false,
            downloadlink: '',
            downloadversion: '',
            firstname: '',
            lastname: '',
            email: '',
            software_update: 1,
            promotions: 0,
            item_name: '',
            serial_pattern: '',
            searchvalue: '',
            markers: [],
            testData: [],
            products: '',
            item_id: ''
        };
        this.getuserdata = this.getuserdata.bind(this)
        this.popupclose = this.popupclose.bind(this);
        this.getItems = this.getItems.bind(this);
        this.getFirmwareDetail = this.getFirmwareDetail.bind(this);              
        this.hanldeSupportedDevicesClick = this.hanldeSupportedDevicesClick.bind(this); 
        this.qs = queryString.parse(window.location.search);         
        this.hanldeDownloadBtnClick = this.hanldeDownloadBtnClick.bind(this);
        this.showpopupdownload = this.showpopupdownload.bind(this)
    }
    getuserdata(firstname, lastname, email, software_update, promotions, products = '', item_id = '') {
        this.setState({
            firstname: firstname,
            lastname: lastname,
            email: email,
            software_update: software_update,
            promotions: promotions,
            products: products,
            item_id: item_id,
        })
        setTimeout(() => {
            this.popupclose('save_download');
        }, 100)
    }
    popupclose(e) {


        if (
            e == 'close'
        ) {
            this.setState({
                showpopup: false

            })
        }
        else if (e == 'download') {
            this.setState({
                showpopup: false
            })
            this.hanldeDownloadBtnClick(this.state.downloadversion)

            window.location.replace(this.state.downloadlink)

        }
        else if (e == 'save_download') {
            let pattern = new RegExp(this.state.serial_pattern)
            axios.post(`${config.apiUrl}/firmwaredownload`, {
                body: {
                    "serial": pattern.test(this.state.searchvalue) ? this.state.searchvalue : '',
                    "serialregex": this.state.searchvalue,
                    "firstname": this.state.firstname,
                    "lastname": this.state.lastname,
                    "item_id": this.state.item_id,
                    item_name: this.state.item_name,
                    "email": this.state.email,
                    "software_update": this.state.software_update ? 1 : 0,
                    "promotions": this.state.promotions ? 1 : 0,
                    "products": this.state.products,
                    firmware_type: 'Small HD OS4'

                }
            }).then((e) => {
                const response = e.data;
                const data = response.data || {};
                if (response.status == 'success') {
                    this.setState({
                        showpopup: false
                    })
                    this.hanldeDownloadBtnClick(this.state.downloadversion)

                    window.location.replace(this.state.downloadlink)
                } else {
                    alert('something went wrong you can try agin / or click on download without subscription')
                }

                return;

            }).catch((error) => {
                console.log(error)
                /*if(error.response.status === 401){
                }*/
            })
        }

    }

    showpopupdownload(downloadlink, downloadversion) {
        this.setState({
            showpopup: true,
            downloadlink: downloadlink,
            downloadversion: downloadversion
        });

    }

    hanldeDownloadBtnClick(downloadedVersion) {        
        ReactGA.initialize(config.gaTrackingId);
        ReactGA.event({
            category: 'Downloads',
            action: downloadedVersion
          });
    }

    hanldeSupportedDevicesClick(e) {
        document.getElementById(e).classList.toggle('show');
    }

    getItems() {
               
        axios.get(`${config.apiUrl}/getitems`, {
		}).then((res) => { 
                const response = res.data;				
                const data = response.data || {};
                if (response.status == 200) {					
                    this.setState({
                        itemsList : data               
                    })					
                }              
         }).catch((error) => {

         })
     }

  getFirmwareDetail(item_series, item_name) {          
        if(item_series) {                     
            axios.get(`${config.apiUrl}/getfirmware`, {
                params: {
                    item_series,
                    item_name
                }
            }).then((res) => { 
                const response = res.data;				
                const data = response.data || {};
                if (response.status == 200) {					
                    this.setState({
                        dataList : data               
                    })					
                }                 
             }).catch((error) => {
    
             })
        } else {
            
        }
}


getVersionFirmware (){

    const version = this.props.match.params.version; //this.qs.version;    
    this.setState({        
        firmwareVersion : version             
    })

    axios.get(`${config.apiUrl}/getversionfirmware`, {
        params: {
            version           
        }
    }).then((e) => {	

        const response = e.data;				
        const data = response.data || {};

            if (response.status == 200) {					
                this.setState({
                    dataList : data               
                })					
            } else {
                /*this.setState({
                    hideVerified: true,
                    hideLooksGood: true,
                    linkValid: false
                });*/
            }

            return;		

    }).catch((error) => {
        console.log(error)
        /*if(error.response.status === 401){
        }*/
    })
}

    componentDidMount() {   
        this.getVersionFirmware()               
        //this.getItems()        		 		
    }

    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };

    onKeyDown = (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        const item_name = event.target.value
        //const item_series = event.target.text        
        //this.getFirmwareDetail(item_series, item_name)        
    }
    };  


    onSuggestionsFetchRequested = ({ value }) => {
        const itemsList = this.state.itemsList            
        this.setState({
          suggestions: getSuggestions(value,itemsList)
        });
      };
    
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };

      onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {          
        this.getFirmwareDetail(suggestionValue,suggestion.item_name)
      }
    

    render() {                    
        const { value, suggestions, displayErrors } = this.state;
          const inputProps = {
            placeholder: "Enter Serial or Item Name",
            value,
            onChange: this.onChange,
            onKeyDown: this.onKeyDown
          };

        return (
            <>       
            <div className="canvas">                                    
            <Header />			           
            <div className="download">
    		<div className="">
          <div className="jumbotron">
						<div className="container">
 {this.state.showpopup ?
                                            <RegistrationPopup firmware_type='Small HD OS4' userinfo={this.getuserdata} serialInvalid={this.state.serialInvalid} popupclose={this.popupclose} itemName={this.state.testData} /> : null}
                        <h2> <a className="text-dark px-3" href={config.siteUrl}>
                                <i className="fas fa-chevron-left mr-3" aria-hidden="true"></i>                            
                                SmallHD OS {this.state.firmwareVersion}</a></h2>
                            <Loadlisting 
                                 showpopupdownload={this.showpopupdownload}
                                dataList ={this.state.dataList}  
                                hanldeSupportedDevicesClick = {this.hanldeSupportedDevicesClick}
                                firmwareVersion = {this.state.firmwareVersion}
                                hanldeDownloadBtnClick = {this.hanldeDownloadBtnClick}
                            />                                           
					</div>
          </div>
          <div className="container d-none">
						<div className="bg-primary signup-col">
              <div className="row align-items-center">
                  <div className="col-lg-4">
                      <h3 className="m-0 text-white">Stay up-to date <small className="d-block">with latest firmware updates</small></h3>
                  </div>
                  <div className="col-lg-8">
                      <form method="post" >
                          <div className="form-group position-relative rounded-pill m-0">
                              <input type="email" defaultValue="" className="form-control border-0" placeholder="Your email..." />
                              <button type="button" className="btn rounded-pill">Sign up <i className="far fa-angle-right ml-3"></i></button>
                          </div>
                      </form>
                  </div>
              </div>
						</div>
          </div>
         	<div className="jumbotron doc-col d-none">
						<div className="container">
              <h2>Documents</h2>
              <div className="row">
                  <div className="col-lg-4">
                      <div className="card border-0 position-relative">
                          <a href="javascript:void(0)" className="absolute-link"></a>
                          <p className="lead m-0">User Manual <small>Size 26MB</small></p>
                          <span className="icon"><i className="far fa-file-pdf"></i></span>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="card border-0 position-relative">
                          <a href="javascript:void(0)" className="absolute-link"></a>
                          <p className="lead m-0">Accessories Guide <small>Size 7MB</small></p>
                          <span className="icon"><i className="far fa-file-pdf"></i></span>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="card border-0 position-relative">
                          <a href="javascript:void(0)" className="absolute-link"></a>
                          <p className="lead m-0">Getting Started <small>Size 2MB</small></p>
                          <span className="icon"><i className="far fa-file-pdf"></i></span>
                      </div>
                  </div>
              </div>
						</div>
         </div>
         	<div className="resource-col py-5 d-none">
						<div className="container">
         		<h2>Related resources</h2>
              <a href="javascript:void(0)" className="link">Reseller resources for this monitor <i className="far fa-angle-right ml-3"></i></a>
							<div className="info-col d-flex justify-content-between pt-5">
              	<p className="m-0">
                  	Was this article helpfull?     <a href="javascript:void(0)" className="link">Yes</a> <span className="text-black-50">/</span> <a href="javascript:void(0)" className="link">No</a>
                  </p>
                  <p className="m-0 light-text">Last  updated January 14th, 2018</p>
              </div>
						</div>
         	</div>
    		</div>
    	</div>
            <Footer />     
            </div>          
            </>                             
        );
    }
}

const Loadlisting = (props) => {    
	return (
        <div>
		{ (props.dataList.length) ?
		props.dataList.map((firmware,i) => (
           <>
           <div key={i} className="card border-0 mb-3">
                  <div className="card-body">
                      <div className="row align-items-center">
                          <div className="col-lg-12">
                              <div className="row mb-3">
                                  <div className="col-md-3">
                                      <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Version</small> <span>{firmware.version}</span></h3>
                                  </div>
                                  <div className="col-md-5 d-none">                                   
                                  <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Build</small>{firmware.activebuildId}</h3>                                       
                                  </div>
                                  <div className="col-md-4">
                                      <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Updated on</small> {new Date(firmware.updatedOn).toISOString().slice(0,10)}</h3>
                                  </div>
                              </div>
                              <div
                                dangerouslySetInnerHTML={{
                                    __html: firmware.firmwareDetails
                                }}></div>							                                                      
                              <div className="btn-col">
                              <a href="javascript:void(0);" onClick={() => props.hanldeSupportedDevicesClick('info-'+i) } className="btn btn-outline-dark d-none" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="info-01">Supported Devices</a>
                                 {/* <a onClick={() =>
                                 alert(123)
                                    // props.showpopupdownload(config.downloadFirmwarePrefix+firmware.version+'.zip')
                                 }
                                     target="_blank" href={config.downloadFirmwareUrl+config.downloadFirmwarePrefix+firmware.version+'.zip'} className="btn btn-primary">Download</a>
                              */}
                               <a onClick={() => { 
                                                                props.showpopupdownload(config.downloadFirmwareUrl + config.downloadFirmwarePrefix + firmware.version + '.zip', config.downloadFirmwarePrefix + firmware.version + '.zip');
                                                            }} className="btn btn-primary text-white">Download</a>
                              </div>                                                                 
															<div className="info-col pt-3">                                                           
																	<div className="collapse multi-collapse show" id={'info-'+i}>
																			<div className="card card-body py-0">
																					<div className="row pt-4 pb-2 card-heading">
																						<div className="col-lg-3">
																							<h3 className="">Series</h3>
																						</div>
																						<div className="col-lg-9">
																							<h3 className="m-0">Supported Models</h3>
																						</div>
																					</div>
																					<div className="tab-col">
                        { (firmware.supportedDevices.length) ? 
                             <>                                                                                    
                            {firmware.supportedDevices.map((item,j) => 
                                    <div className="row border-col" key={j}>
                                    <div className="col-lg-3">
                                        <h3 className="m-0">{item.itemSeries}</h3>
                                    </div>
                                    <div className="col-lg-9">
                                        <ul className="p-0 m-0 d-flex inline-list flex-wrap">
                                        { (item.itemsSupported.length) ? 
                                        <>
                                            {item.itemsSupported.map((itemssup,k) => (                                                
                                              <li key={k}><span className="rounded-pill badge badge-light">{itemssup}</span></li>  
                                            )
                                            )}
                                        
                                        </>
                                        : ''}                                                                                   
                                        </ul>
                                    </div>
                                    </div>                                                                     
                                )}	
                                </>
                                : ''}																						

																					</div>
																			</div>
																	</div>                                                                   
															</div>                            
                          </div>
                      </div>
                  </div>
              </div>
           </>
		   )) 
		: 
        
        <>
        <div className="card border-0 mb-3">
        <div className="card-body">
            <div className=" align-items-center">
                <div className="">
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <div className="loading">
                          <div className="line"></div>
                            <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Version</small> <span>Page OS 2.1.2</span></h3>
                          </div>
                        </div>
                        <div className="col-md-5 d-none">
                            <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Build</small> 23423342342.54554.656</h3>
                        </div>
                        <div className="col-md-4">
                            <div className="loading">
                              <div className="line"></div>
                            <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Updated on</small> 14th March, 2018</h3>
                          </div>
                        </div>
                    </div>
                    <div className="loading">
                      <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus a quam vel efficitur. Nulla facilisi. </p>															
                  </div>															
                    <div className="btn-col d-inline-block mt-4">
                        <div className="loading">
                          <div className="line"></div>
                        <a className="btn btn-outline-dark" data-toggle="collapse" href="#info-01" role="button" aria-expanded="false" aria-controls="info-01">Supported Devices</a>
                        <a href="#" className="btn btn-primary">Download</a>
                        </div>
                    </div>																																
                </div>
            </div>
        </div>
    </div> 
    <div className="card border-0 mb-3">
    <div className="card-body">
        <div className=" align-items-center">
            <div className="">
                <div className="row mb-3">
                    <div className="col-md-3">
                        <div className="loading">
                      <div className="line"></div>
                        <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Version</small> <span>Page OS 2.1.2</span></h3>
                      </div>
                    </div>
                    <div className="col-md-5 d-none">
                        <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Build</small> 23423342342.54554.656</h3>
                    </div>
                    <div className="col-md-4">
                        <div className="loading">
                          <div className="line"></div>
                        <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Updated on</small> 14th March, 2018</h3>
                      </div>
                    </div>
                </div>
                <div className="loading">
                  <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus a quam vel efficitur. Nulla facilisi. </p>															
              </div>															
                <div className="btn-col d-inline-block mt-4">
                    <div className="loading">
                      <div className="line"></div>
                    <a className="btn btn-outline-dark" data-toggle="collapse" href="#info-01" role="button" aria-expanded="false" aria-controls="info-01">Supported Devices</a>
                    <a href="#" className="btn btn-primary">Download</a>
                    </div>
                </div>																																
            </div>
        </div>
    </div>
</div>
</>    
        
		}
        </div>		  
    )
  }


  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  const getSuggestions = (value,itemsList) => {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');    
    //const regex = new RegExp(escapedValue);    
    return itemsList.filter(itemsList => regex.test(itemsList.item_series) || regex.test(itemsList.item_name) || regex.test(itemsList.serial_pattern));
  }
  
  const getSuggestionValue = (suggestion) => {
    return suggestion.item_series;
  }
  
  const renderSuggestion = (suggestion, { query }) => {
   // const matches = AutosuggestHighlightMatch(suggestion.name, query);
  //  const parts = AutosuggestHighlightParse(suggestion.name, matches);
  
    return (<>
        <a href="javascript:void(0)" className="absolute-link"></a>
        <div className="media">																					
        <div className="media-body text-dark">
                <h4>{suggestion.item_series}</h4>
                <p className="mb-0">{suggestion.item_name}</p>
        </div>
        </div>
        {/*<h5>{suggestion.item_name}</h5>
      <span> {suggestion.item_series}</span>*/}
      </>
    );
  }

export default VersionFirmware;
