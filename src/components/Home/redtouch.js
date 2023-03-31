import React, { Component } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import config from '../../config';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import ReactGA from 'react-ga';
import BetaFirmware from './betafirmware';
import RedTouchFirmware from './redtouchfirmware';
import RegistrationPopup from '../Common/RegistrationPopup';
//import {FirmwareLoader} from '../Loaders';

/*import queryString from 'query-string';

import { Redirect } from 'react-router-dom';*/

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {
            dataList: '',
            itemsList: '',
            value: '',
            suggestions: [],
            pageLimitCount: 0,
            totalPages: 0,
            searchedItemSeries: "",
            searchedItemName: "",
            showSearchDetail: 0,
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
            searchvalue: ''

        };
        this.getItems = this.getItems.bind(this);
        this.getFirmwareDetail = this.getFirmwareDetail.bind(this);
        this.hanldeSupportedDevicesClick = this.hanldeSupportedDevicesClick.bind(this);
        this.hanldeDownloadBtnClick = this.hanldeDownloadBtnClick.bind(this);
        this.loadOlderVersion = this.loadOlderVersion.bind(this);
        this.showFirmwareMoreLess = this.showFirmwareMoreLess.bind(this);
        this.directdownloadlink = this.directdownloadlink.bind(this);
        this.getuserdata = this.getuserdata.bind(this)
        this.popupclose = this.popupclose.bind(this);
    }

    directdownloadlink(directdownload_link) { 
        this.setState({
            showpopup: true,
            downloadlink: directdownload_link,
        })
    }
    getuserdata(firstname, lastname, email, software_update, promotions) {
        this.setState({
            firstname: firstname,
            lastname: lastname,
            email: email,
            software_update: software_update,
            promotions: promotions
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
                    "item_id": '',
                    item_name: this.state.item_name,
                    "email": this.state.email,
                    "software_update": this.state.software_update ? 1 : 0,
                    "promotions": this.state.promotions ? 1 : 0,
                    firmware_type: 'RED® Touch'

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

    hanldeDownloadBtnClick(downloadedVersion) {
        ReactGA.initialize(config.gaTrackingId);
        ReactGA.event({
            category: 'Downloads',
            action: downloadedVersion
        });
    }

    showFirmwareMoreLess(Id) {
        //document.getElementById(Id).innerHTML = 'Show Less <br /> <i className="far fa-angle-up icon"></i>';
        this.setState({
            showLessFirmware: !this.state.showLessFirmware ? true : false,
            showLessFirmwareId: Id
        })
    }

    loadOlderVersion() {
        let pageLimitCount = this.state.pageLimitCount;
        axios.get(`${config.apiUrl}/getfirmwares`, {
            params: {
                pageLimitCount
            }
        }).then((e) => {
            const response = e.data;
            const data = response.data || {};

            if (response.status == 200) {
                this.setState({
                    dataList: this.state.dataList.concat(data),
                    pageLimitCount: Number(this.state.pageLimitCount) + Number(data.length)
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

    hanldeSupportedDevicesClick(e) {
        //document.getElementById(e).classList.toggle('show');
    }

    getItems() {

        axios.get(`${config.apiUrl}/getitems`, {
        }).then((res) => {
            const response = res.data;
            const data = response.data || {};
            if (response.status == 200) {
                this.setState({
                    itemsList: data
                })
            }
        }).catch((error) => {

        })
    }

    getFirmwareDetail(item_series, item_name) {
        if (item_name) {
            this.setState({
                searchedItemSeries: item_series,
                searchedItemName: item_name,
                showSearchDetail: 1,
                value: item_series
            })

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
                        dataList: '',
                        firmwaredataList: data
                    })
                }
            }).catch((error) => {

            })
        } else {

        }
    }

    getFirmwares() {
        axios.get(`${config.apiUrl}/getfirmwares`, {
        }).then((e) => {

            const response = e.data;
            const data = response.data || {};
            if (response.status == 200) {
                this.setState({
                    dataList: data,
                    pageLimitCount: data.length,
                    totalPages: response.totalPages
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
        this.getFirmwares()
        this.getItems()
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const item_name = event.target.value
            //const item_series = event.target.text        
            //this.getFirmwareDetail(item_series, item_name)        
        }
    };


    onSuggestionsFetchRequested = ({ value }) => {
        const itemsList = this.state.itemsList
        this.setState({
            suggestions: getSuggestions(value, itemsList)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {

        this.setState({
            item_name: suggestion.item_name,
            serial_pattern: suggestion.serial_pattern,
            searchvalue: this.state.value
        })
        this.getFirmwareDetail(suggestion.item_series, suggestion.item_name)
    }


    render() {
        const { value, suggestions, displayErrors } = this.state;
        const inputProps = {
            placeholder: "Search Model or a Serial Number",
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
                                    <div className="search-col p-4 mb-3">
                                        {this.state.showpopup ?
                                            <RegistrationPopup firmware_type='RED® Touch' userinfo={this.getuserdata} serialInvalid={this.state.serialInvalid} popupclose={this.popupclose} /> : null}

                                        <div className="row">
                                            <div className="col-lg-8 offset-2">
                                                <form className="search form-inline justify-content-center">
                                                    <div className="form-group position-relative rounded-pill w-75">
                                                        <fieldset className={this.state.serialInvalid === true ? 'error' : 'd-block w-100'}>
                                                            <Autosuggest
                                                                suggestions={suggestions}
                                                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                                                onSuggestionSelected={this.onSuggestionSelected}
                                                                getSuggestionValue={getSuggestionValue}
                                                                renderSuggestion={renderSuggestion}
                                                                inputProps={inputProps}
                                                            />
                                                            {this.state.showSearchDetail ?
                                                                <a href={config.siteUrl} className="btn rounded-pill">Reset</a>
                                                                : <button type="button" className="btn rounded-pill"><i className="far fa-search"></i></button>
                                                            }
                                                        </fieldset>
                                                    </div>
                                                </form>
                                                {this.state.showSearchDetail ?
                                                    <div className="result-title w-75 ">
                                                        <h3 className="mt-3">Displaying results specific to</h3>
                                                        <div className="card border-0 w-100">
                                                            <div className="card-body px-2 pv-3">
                                                                <div className="media">
                                                                    <span className="thumb mr-3">
                                                                        <img src={config.itemsimgUrl + this.state.searchedItemName + "_SL_01_medium.jpg"} alt="" />
                                                                    </span>
                                                                    <div className="media-body text-dark">
                                                                        <h6 className="m-0"><strong>{this.state.searchedItemSeries}</strong></h6>
                                                                        <p className="mb-1">{this.state.searchedItemName}</p>
                                                                        <a target="_blank" href={config.productDetailUrl + this.state.searchedItemName} className="link">Learn more about this product</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    : ''}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-col">
                                        <ul className="nav nav-tabs row text-center" id="mytab" role="tablist">
                                            <li className="nav-item col" role="presentation">
                                                <a className="nav-link p-3" id="stable-tab" href="/" role="tab" aria-controls="pills-stable" aria-selected="true">SmallHD PageOS</a>
                                            </li>
                                            <li className="nav-item  col" role="presentation">
                                                <a className="nav-link  p-3 active" id="touch-tab" href="#red-touch" role="tab" aria-controls="pills-touch" aria-selected="false">RED® Touch</a>
                                            </li>
                                            <li className="nav-item  col" role="presentation">
                                                <a className="nav-link p-3" id="touch-tab" href={`/firmware/action-os`} role="tab" aria-controls="pills-touch" aria-selected="false">Action OS</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade p-3 pt-4 " id="os4-stable" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="row">
                                                    <div className={
                                                        !this.state.showSearchDetail ?
                                                            (this.state.dataList.length) ? 'col-lg-8 mb-lg-5'
                                                                : 'col-lg-12 mb-lg-5'
                                                            : 'col-lg-12 mb-lg-5'
                                                    }
                                                    >

                                                        {this.state.showSearchDetail ?
                                                            <>
                                                                <h2><strong>Firmware</strong></h2>
                                                            </>
                                                            : ''
                                                        }

                                                        <Loadlisting
                                                            dataList={this.state.dataList}
                                                            hanldeSupportedDevicesClick={this.hanldeSupportedDevicesClick}
                                                            showFirmwareMoreLess={this.showFirmwareMoreLess}
                                                            showLessFirmware={this.state.showLessFirmware}
                                                            showLessFirmwareId={this.state.showLessFirmwareId}
                                                            showSearchDetail={this.state.showSearchDetail}
                                                            firmwaredataList={this.state.firmwaredataList}
                                                            hanldeDownloadBtnClick={this.hanldeDownloadBtnClick}
                                                        />

                                                    </div>

                                                    {
                                                        !this.state.showSearchDetail ?
                                                            (this.state.dataList.length) ?
                                                                <div className="col-lg-4  mb-lg-5">
                                                                    <BetaFirmware />
                                                                </div>
                                                                : ''
                                                            : ''
                                                    }

                                                </div>
                                            </div>
                                            <div className="tab-pane fade p-3 pt-4 active show" id="red-touch" role="tabpanel" aria-labelledby="home-tab">
                                                <RedTouchFirmware directdownloadlink={this.directdownloadlink} />
                                            </div>

                                        </div>
                                    </div>


                                    {/* <BetaFirmware /> */}

                                    {/*this.state.showSearchDetail ? '' : 
        <>
            {this.state.totalPages > this.state.pageLimitCount ?                                          
              <div className="d-flex flex-column justify-content-center pt-2">
                  <a onClick={this.loadOlderVersion} className="load-btn d-block text-center">Older Version<br /><i className="far fa-angle-down icon"></i></a>
              </div>
            : ''
            }
        </>
        */}
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
                            {/*}

         	<div className="jumbotron doc-col">
						<div className="container">
              <h2>Documents</h2>
              <div className="row">
                  <div className="col-lg-4">
                      <div className="card border-0 position-relative">
                          <a href="javascript:void(0);" className="absolute-link"></a>
                          <p className="lead m-0">User Manual <small>Size 26MB</small></p>
                          <span className="icon"><i className="far fa-file-pdf"></i></span>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="card border-0 position-relative">
                          <a href="javascript:void(0);" className="absolute-link"></a>
                          <p className="lead m-0">Accessories Guide <small>Size 7MB</small></p>
                          <span className="icon"><i className="far fa-file-pdf"></i></span>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="card border-0 position-relative">
                          <a href="javascript:void(0);" className="absolute-link"></a>
                          <p className="lead m-0">Getting Started <small>Size 2MB</small></p>
                          <span className="icon"><i className="far fa-file-pdf"></i></span>
                      </div>
                  </div>
              </div>
						</div>
         </div>
         	<div className="resource-col py-5">
						<div className="container">
         		<h2>Related resources</h2>
              <a href="javascript:void(0);" className="link">Reseller resources for this monitor <i className="far fa-angle-right ml-3"></i></a>
							<div className="info-col d-flex justify-content-between pt-5">
              	<p className="m-0">
                  	Was this article helpfull?     <a href="javascript:void(0);" className="link">Yes</a> <span className="text-black-50">/</span> <a href="javascript:void(0);" className="link">No</a>
                  </p>
                  <p className="m-0 light-text">Last  updated January 14th, 2018</p>
              </div>
						</div>
         	</div>
    		
           */}
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
        <div key={1}>
            {
                !props.showSearchDetail ?
                    (props.dataList.length) ?
                        props.dataList.map((firmwareList, j) => (
                            <>
                                <h2 key={j}><strong>SmallHD</strong> OS{props.dataList[j].versionData ? props.dataList[j].versionData[0].version.charAt(0) : ''} <span> Stable</span></h2>
                                {/*Section to print only first firmware item*/}
                                {props.dataList[j].versionData.map((firmware, i) => (
                                    (i == 0 ?
                                        <div key={i} className='card mb-3'>
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12">
                                                        <div className="row mb-3">
                                                            <div className="col-md-3">
                                                                <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Version</small> <span>{firmware.version}</span></h3>
                                                            </div>
                                                            <div className="col-md-5 d-none">
                                                                <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Build</small>{firmware.activebuildId ? firmware.activebuildId : '--'}</h3>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Updated on</small> {new Date(firmware.updatedOn).toISOString().slice(0, 10)}</h3>
                                                            </div>
                                                        </div>
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: firmware.firmwareDetails.substring(0, 490)
                                                            }}></div>
                                                        <div className="btn-col">
                                                            <a href={config.siteUrl + '/firmware/smallhdos/' + firmware.version} className="btn btn-outline-dark">Know more</a>
                                                            <a onClick={() => props.hanldeDownloadBtnClick(config.downloadFirmwarePrefix + firmware.version + '.zip')} target="_blank" href={config.downloadFirmwareUrl + config.downloadFirmwarePrefix + firmware.version + '.zip'} className="btn btn-primary">Download</a>
                                                        </div>
                                                        <div className="info-col pt-3">
                                                            <div className="collapse multi-collapse" id={'info-' + i}>
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
                                                                        {(firmware.supportedDevices.length) ?
                                                                            <>
                                                                                {firmware.supportedDevices.map((item, j) =>
                                                                                    <div className="row border-col" key={j}>
                                                                                        <div className="col-lg-3">
                                                                                            <h3 className="m-0">{item.itemSeries}</h3>
                                                                                        </div>
                                                                                        <div className="col-lg-9">
                                                                                            <ul className="p-0 m-0 d-flex inline-list flex-wrap">
                                                                                                {(item.itemsSupported.length) ?
                                                                                                    <>
                                                                                                        {item.itemsSupported.map((itemssup, k) => (
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
                                        : '')
                                ))
                                }

                                {/*Section to print all items except first firmware item and wrap in div for accordian*/}

                                <div id={(props.dataList[j].versionData.length > 1) ? 'os-version-' + props.dataList[j].versionData[0].version.charAt(0) : ''} className={(props.dataList[j].versionData.length > 1) ? 'collapse' : ''}>
                                    {props.dataList[j].versionData.map((firmware, i) => (
                                        (i != 0 ?
                                            <div key={i} className='card mb-3'>
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-12">
                                                            <div className="row mb-3">
                                                                <div className="col-md-3">
                                                                    <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Version</small> <span>{firmware.version}</span></h3>
                                                                </div>
                                                                <div className="col-md-5 d-none">
                                                                    <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Build</small>{firmware.activebuildId ? firmware.activebuildId : '--'}</h3>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Updated on</small> {new Date(firmware.updatedOn).toISOString().slice(0, 10)}</h3>
                                                                </div>
                                                            </div>
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: firmware.firmwareDetails.substring(0, 490)
                                                                }}></div>
                                                            <div className="btn-col">
                                                                <a href={config.siteUrl + '/firmware/smallhdos/' + firmware.version} className="btn btn-outline-dark">Know more</a>
                                                                <a onClick={() => props.hanldeDownloadBtnClick(config.downloadFirmwarePrefix + firmware.version + '.zip')} target="_blank" href={config.downloadFirmwareUrl + config.downloadFirmwarePrefix + firmware.version + '.zip'} className="btn btn-primary">Download</a>
                                                            </div>
                                                            <div className="info-col pt-3">
                                                                <div className="collapse multi-collapse" id={'info-' + i}>
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
                                                                            {(firmware.supportedDevices.length) ?
                                                                                <>
                                                                                    {firmware.supportedDevices.map((item, j) =>
                                                                                        <div className="row border-col" key={j}>
                                                                                            <div className="col-lg-3">
                                                                                                <h3 className="m-0">{item.itemSeries}</h3>
                                                                                            </div>
                                                                                            <div className="col-lg-9">
                                                                                                <ul className="p-0 m-0 d-flex inline-list flex-wrap">
                                                                                                    {(item.itemsSupported.length) ?
                                                                                                        <>
                                                                                                            {item.itemsSupported.map((itemssup, k) => (
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
                                            : '')
                                    ))
                                    }
                                </div>




                                {props.dataList[j].versionData.length > 1 ?
                                    <div className="d-flex flex-column justify-content-center pt-2">
                                        <a id={'show-more-less-firmware-' + props.dataList[j].versionData[0].version.charAt(0)} onClick={() => props.showFirmwareMoreLess('show-more-less-firmware-' + props.dataList[j].versionData[0].version.charAt(0))} className="load-btn d-block text-center" data-toggle="collapse" href={(props.dataList[j].versionData.length > 1) ? '#os-version-' + props.dataList[j].versionData[0].version.charAt(0) : ''} role="button" aria-expanded="false" aria-controls={'os-version-' + props.dataList[j].versionData[0].version.charAt(0)}>

                                            {(props.showLessFirmware && props.showLessFirmwareId == 'show-more-less-firmware-' + props.dataList[j].versionData[0].version.charAt(0)) ?
                                                <>
                                                    Show Less <br /> <i className="far fa-angle-up icon"></i>
                                                </>
                                                :
                                                <>
                                                    Show More<br /> <i className="far fa-angle-down icon"></i>
                                                </>
                                            }
                                        </a>
                                    </div>
                                    : ''
                                }

                            </>
                        ))
                        :
                        <>
                            <div className="card mb-3">
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

                            <div className="card mb-3">
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

                    :

                    <div>
                        {(props.firmwaredataList.length) ?
                            props.firmwaredataList.map((firmware, i) => (
                                <>
                                    <div key={i} className="card mb-3">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="row mb-3">
                                                        <div className="col-md-3">
                                                            <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Version</small> <span>{firmware.version}</span></h3>
                                                        </div>
                                                        <div className="col-md-5 d-none">
                                                            <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Build</small>{firmware.activebuildId ? firmware.activebuildId : '--'}</h3>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h3 className="text-dark"><small className="d-block mb-3 text-black-50">Updated on</small> {new Date(firmware.updatedOn).toISOString().slice(0, 10)}</h3>
                                                        </div>
                                                    </div>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: firmware.firmwareDetails.substring(0, 490)
                                                        }}></div>
                                                    <div className="btn-col">
                                                        <a href={config.siteUrl + '/firmware/smallhdos/' + firmware.version} className="btn btn-outline-dark" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="info-01">Know more</a>
                                                        <a onClick={() => props.hanldeDownloadBtnClick(config.downloadFirmwarePrefix + firmware.version + '.zip')} target="_blank" href={config.downloadFirmwareUrl + config.downloadFirmwarePrefix + firmware.version + '.zip'} className="btn btn-primary">Download</a>
                                                    </div>
                                                    <div className="info-col pt-3">
                                                        <div className="collapse multi-collapse" id={'info-' + i}>
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
                                                                    {(firmware.supportedDevices.length) ?
                                                                        <>
                                                                            {firmware.supportedDevices.map((item, j) =>
                                                                                <div className="row border-col" key={j}>
                                                                                    <div className="col-lg-3">
                                                                                        <h3 className="m-0">{item.itemSeries}</h3>
                                                                                    </div>
                                                                                    <div className="col-lg-9">
                                                                                        <ul className="p-0 m-0 d-flex inline-list flex-wrap">
                                                                                            {(item.itemsSupported.length) ?
                                                                                                <>
                                                                                                    {item.itemsSupported.map((itemssup, k) => (
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
                                {(props.firmwaredataList.length < 1) ?
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <h2 className="d-flex w-100 justify-content-center m-0">No Firmware Found</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : ''}
                            </>

                        }

                    </div>

            }
        </div>
    )
}


const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const getSuggestions = (value, itemsList) => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    let regexSerial = "";
    let matched_items = [];
    for (let i = 0; i < itemsList.length; i++) {
        if (itemsList[i].serial_pattern) {
            regexSerial = new RegExp(itemsList[i].serial_pattern);
            if (regexSerial.test(escapedValue.toUpperCase())) {
                matched_items.push({
                    item_series: itemsList[i].item_series,
                    item_name: itemsList[i].item_name
                });
            }
        }
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    if (matched_items.length) {
        return matched_items;
    } else {
        return itemsList.filter(itemsList => regex.test(itemsList.item_series) || regex.test(itemsList.item_name));
    }
}

const getSuggestionValue = (suggestion) => {
    return suggestion.item_series;
}

const renderSuggestion = (suggestion, { query }) => {
    // const matches = AutosuggestHighlightMatch(suggestion.name, query);
    //  const parts = AutosuggestHighlightParse(suggestion.name, matches);  
    return (<>

        <div className="media position-relative">
            <a href="javascript:void(0);" className="absolute-link"></a>
            <span className="thumb mr-3">
                <img src={config.itemsimgUrl + suggestion.item_name + "_SL_01_small.jpg"} alt="" />
            </span>
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

export default Home;
