import React from 'react'
import { useState, useEffect } from 'react'
import config from '../../config';
import axios from 'axios';
import Select from 'react-select'
import ReCAPTCHA from "react-google-recaptcha";
import { Checkbox } from 'react-bootstrap';


export default function RegistrationPopup(props) {
  let [firstname, setFirstname] = useState('')
  let [lastname, setLastname] = useState('')
  let [email, setEmail] = useState('')
  let [software_update, setSoftwareUpdate] = useState(0)
  let [promotions, setPromotions] = useState(0)
  let [terms, setTerms] = useState(0)
  let [showerror, setShowerror] = useState(false)
  let [searchdata, setSearchdata] = useState([]);
  let [cname, setCname] = useState('')
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [isVerified, setIsVerified] = React.useState(false);
  let searchdata_copy = []

  const handleChange = (selected) => {
    selected = selected.map(i => i.value)
    setSelectedValue(selected);
  }

  let error_management = () => {
    if (!firstname || !email || !terms) {
      setShowerror(true)

    }
    else {
      props.userinfo(firstname, lastname, email, software_update, promotions, JSON.stringify(selectedValue), selectedValue.length > 0 ? selectedValue[0].split('__')[1] : '')
    }
  }

  const HandelonChange = (value) => {
    setIsVerified(true)
  }


  let getItems = () => {

    axios.get(`${config.apiUrl}/baseitems`, {
    }).then((res) => {
      const response = res.data;

      if (response.status == 200) {

        let data = []
        response.data && response.data.map(i => {
          data.push({ value: `${i.item_name}__${i.item_id}`, label: i.item_description, serial_pattern: i.serial_pattern })
        })
        //  console.log(data)
        searchdata_copy = data
        setSearchdata(data)

      }

    }).catch((error) => {

    })
  }
  useEffect(() => {
    getItems();
  }, [])



  const filterOptions = (candidate, input) => {
    // console.log(candidate);
    if (input) {
      let regex = new RegExp(`${candidate.data.serial_pattern}`)
      input = input.toUpperCase();
      let result = input.match(regex);
      // console.log(result,regex)s
      return (candidate.value.includes(input.toUpperCase()) || candidate.label.includes(input.toUpperCase())) || (!result ? false : result[0] == input)
    }
    return true
  };






  return (
    <>
      <div id="exampleModalCenter" className="modal fade show " tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" style={{ paddingRight: 15, display: 'block' }}>
        {/* {console.log({ props: props.itemName }) */}

        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header p-4 postion-relative">
              <h2 className="modal-title m-0"><strong>Download SmallHD PageOS</strong> <small className='d-block'>Stay up-to date with firmware updates</small></h2>
              <button type="button" onClick={() => {
                props.popupclose('close')
              }
              } className="close position-absolute" data-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4">
              <form className="search">
                <div className="row ">
                  <div className='col mb-4'>
                    <div className="form-floating m-0">
                      <input placeholder="name@example.com" value={cname} onChange={(e) => {
                        let name = e.target.value;
                        setCname(name)
                        if (name.includes(' ')) {
                          let [first_name, ...last_name] = name.split(' ')
                          setFirstname(first_name);
                          setLastname(`${last_name}`)
                        }
                        else {
                          setFirstname(e.target.value);
                        }

                        setShowerror(false);
                      }} type="text" className={`${firstname == '' && showerror ? 'error' : ''} form-control border rounded`}></input>

                      <label>Your Name</label>
                    </div>
                  </div>
                  {/* <div className='col-md-6 mb-4'>
                    <div className="form-group m-0 position-relative">
                      <label>Your Last Name</label>
                      <input value={lastname} onChange={(e) => { setLastname(e.target.value); setShowerror(false) }} type="text" className={` ${lastname == '' && showerror ? 'error' : ''} form-control border rounded p-2`}></input>
                    </div>
                  </div> */}
                </div>
                <div className='row'>
                  <div className="col-md-6 mb-4">
                    <div class="form-floating">
                      <input placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value); setShowerror(false) }} type="email" className={` ${email == '' && showerror ? 'error' : ''} form-control border rounded`}></input>
                      <label>Your Email</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div class="">
                      {/* <label> My Products </label> */}
                      {/* {console.log("props.itemName", props.itemName)} */}
                      <Select
                        id='my_products'
                        className={` ${selectedValue == '' && showerror ? 'select-error' : ''}  dropdown `}
                        // className="dropdown"
                        placeholder="Select My Products"
                        // set selected values

                        options={searchdata} // set list of the data
                        filterOption={filterOptions}
                        onChange={handleChange} // assign onChange function
                        isMulti
                        isClearable
                      />
                    </div>
                  </div>
                </div>
                <div class="checkbox">
                  <div className='mb-2'>
                    <span class="d-none" id="available-id">checkbox Checked. Tell me when new software features are available for my monitor.</span>
                    <div className="form-check">
                      <input className="form-check-input" onChange={(e) => setSoftwareUpdate(e.target.checked)} tabindex="13" aria-describedby="available-id" type="checkbox"
                        id="software_update_notifications" />
                      <label className="form-check-label" for="software_update_notifications">Tell me when new software features are available for my monitor.</label>
                    </div>
                  </div>
                  <div className='mb-2'>
                    <span class="d-none" id="deal-id">checkbox Checked. I also agree to sign-up to receive emails about our other events, promotions and other marketing communications from SmallHD.</span>
                    <div className="form-check">
                      <input onChange={(e) => { setPromotions(e.target.checked) }} className="form-check-input" tabindex="14" aria-describedby="deal-id" type="checkbox" id="promotional_emails"
                        checked={promotions} />
                      <label className="form-check-label" for="promotional_emails">I also agree to sign-up to receive emails about our other events, promotions and other marketing communications from SmallHD.</label>
                    </div>
                  </div>
                  <div className='mb-2'>
                    <span class="d-none" id="deal-id">checkbox Checked. By checking this box you confirm that you have read and agree to our Terms of Service and Privacy Policy</span>
                    <div className="form-check">
                      <input onChange={(e) => { setTerms(e.target.checked); setShowerror(false) }} className="form-check-input" tabindex="14" aria-describedby="term-id" type="checkbox" id="terms-polocy"

                        checked={terms} required />
                      <label class="form-check-label" className={` ${terms == '' && showerror ? 'error' : ''}  `} for="terms-polocy">By checking this box you confirm that you have read and agree to our
                        <a target="_blank" href="https://cs.inc/pages/standard-terms-of-sale"> Terms of Service</a> and  <a target="_blank" href="https://cs.inc/pages/privacy-policy">Privacy Policy</a></label>

                    </div>
                  </div>

                  <div className='mt-4 mb-4'>
                    <p>You can change your mind at any time <a className="text-primary p-0" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Learn More  </a></p>
                    <div className="collapse" id="collapseExample">
                      <div className="card rounded-0 card-body">
                        <p className='m-0'>
                          You can change your mind at any time by clicking the unsubscribe link in the footer of any email you receive from us, or by contacting us at <a href="mailto:reply@cs.inc">reply@cs.inc</a> . We will treat your information with respect. For more information about our privacy practices please visit our website. By clicking the submit button, you agree that we may process your information in accordance with these terms.
                        </p>
                      </div>

                    </div>
                  </div>
                  <ReCAPTCHA
                    sitekey="6Le0-sohAAAAAFttyJrdnE28Idlfq8-vFAWxm9jy"
                    onChange={HandelonChange}
                  />
                </div>
                {/* <div className="form-group position-relative">                                  
                  <fieldset className={props.serialInvalid === true ? 'error' : 'd-block w-100'}>   
                    {props.Autosuggest} 
                  </fieldset>
              </div>  */}
              </form>
              {props.showSearchDetail}
            </div>
            <div className="modal-footer justify-content-between p-4">
              <button type="button" onClick={() => {
                props.popupclose('close')
              }
              } className="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
              <div>
                <a onClick={() => {
                  props.popupclose('download')
                }} className='btn btn-link text-muted'>Download Without Subscribing</a>
                <button type="button" data-dismiss="modal" disabled={!isVerified} onClick={() => {

                  error_management();

                }} className="btn btn-primary">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )
}