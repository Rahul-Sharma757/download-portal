import React from "react";
import RegistrationPopup from "../Common/RegistrationPopup";
const redtouchfirmware = (props) => {
  return (
    <>
    
    <div className="row">
        <div className="col-lg-8 mb-lg-5">
          <h2>
            DSMC3™ <strong>RED® Touch</strong>{" "}
            <span>7.0" LCD Firmware v5.5.1</span>
          </h2>
          <div className="card  mb-5 ">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Version
                        </small>{" "}
                        <span>5.5.1</span>
                      </h3>
                    </div>
                    <div className="col-md-5 d-none">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Build
                        </small>
                        --
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Updated on
                        </small>{" "}
                        2023-12-04
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Firmware update Best practices:</strong>
                    </h2>
                    <ul>
                      <li>SD card 2,4,8,16GB</li> 
                      <li>Backup your profile before update (recommended)</li>
                      <li>Use AC power or fully charged battery</li>
                      <li>Note older version of firmware before update</li>
                    </ul>
                    <h2>
                      <strong>Firmware Compatibility:</strong>
                    </h2>
                    <ul>
                      <li>
                        This firmware is compatible with the DSMC3 RED® Touch
                        7.0" LCD
                      </li>
                      <li>
                        This firmware <strong>is not compatible with</strong>{" "}
                        other SmallHD or RED® Touch monitors
                      </li>
                    </ul>
                  </div>
                  <div className="btn-col">
                    {/*<a href="#" className="btn btn-outline-dark">Learn More</a>*/}
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-toggle="modal"
                      data-target="#RedModal-v5-5-1-main"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.5.1.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4  mb-lg-5">
        <h2>
            <span>DSMC3™ <strong>RED® Touch</strong> 7.0" LCD Firmware v5.5.0 Beta</span>
          </h2>
          <div className="card mb-5">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-8">
                  <h3 className="text-dark">
                    <small className="d-block mb-3 text-black-50">
                      Updated on
                    </small>{" "}
                    29th September, 2023
                  </h3>
                </div>
              </div>
              <h2>
                <strong>Firmware update Best practices:</strong>
              </h2>
              <ul>
                <li> SD card 2,4,8,16GB</li>
                <li>Backup your profile before update (recommended)</li>
                <li>Use AC power or fully charged battery</li>
                <li>Note older version of firmware before update</li>
              </ul>
              
              
              <div className="btn-col">
                {/*<a href="#" className="btn btn-outline-dark">Learn More</a>*/}
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-toggle="modal"
                  data-target="#RedModal-dci-p4"
                >
                  Learn More
                </button>
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.5.0-beta.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                >
                  Download
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </div>

    <div className="row">
        <div className="col-lg-8 mb-lg-5">
          <h2>
            DSMC3™ <strong>RED® Touch</strong>{" "}
            <span>7.0" LCD Firmware v5.5.0</span>
          </h2>
          <div className="card  mb-5 ">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Version
                        </small>{" "}
                        <span>5.5.0</span>
                      </h3>
                    </div>
                    <div className="col-md-5 d-none">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Build
                        </small>
                        --
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Updated on
                        </small>{" "}
                        2023-10-26
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Firmware update Best practices:</strong>
                    </h2>
                    <ul>
                      <li>SD card 2,4,8,16GB</li> 
                      <li>Backup your profile before update (recommended)</li>
                      <li>Use AC power or fully charged battery</li>
                      <li>Note older version of firmware before update</li>
                    </ul>
                    <h2>
                      <strong>Firmware Compatibility:</strong>
                    </h2>
                    <ul>
                      <li>
                        This firmware is compatible with the DSMC3 RED® Touch
                        7.0" LCD
                      </li>
                      <li>
                        This firmware <strong>is not compatible with</strong>{" "}
                        other SmallHD or RED® Touch monitors
                      </li>
                    </ul>
                  </div>
                  <div className="btn-col">
                    {/*<a href="#" className="btn btn-outline-dark">Learn More</a>*/}
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-toggle="modal"
                      data-target="#RedModal-v5-5-0-main"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.5.0.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4  mb-lg-5">
          <h2>
            <span>DCI-P3 Calibration Procedure DSMC3™ <strong>RED® Touch</strong> 7.0" LCD</span>
          </h2>
          <div className="card ">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-8">
                  <h3 className="text-dark">
                    <small className="d-block mb-3 text-black-50">
                      Updated on
                    </small>{" "}
                    22nd February, 2022
                  </h3>
                </div>
              </div>
              <div className="mb-3"><p>DSMC3™ <strong>RED® Touch</strong> monitors now ship calibrated to the DCI-P3 Color Space by default. Existing monitors now have a path to
                switch from a REC 709, to a DCI-P3 calibration by downloading a new LUT from the list below and loading it as a Custom
                Calibration.</p></div>
              <div className="btn-col">
                {/*<a href="#" className="btn btn-outline-dark">Learn More</a> */}
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-toggle="modal"
                  data-target="#RedModal-dci-p3"
                >
                  Learn More
                </button>
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/DSMC3_RED_Touch_7.0_LCD_DCI-P3_Calibration.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4  mb-lg-5">
        <h2>
            <span>DSMC3™ <strong>RED® Touch</strong> 7.0" LCD Firmware v5.5.0 Beta</span>
          </h2>
          <div className="card mb-5">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-8">
                  <h3 className="text-dark">
                    <small className="d-block mb-3 text-black-50">
                      Updated on
                    </small>{" "}
                    29th September, 2023
                  </h3>
                </div>
              </div>
              <h2>
                <strong>Firmware update Best practices:</strong>
              </h2>
              <ul>
                <li> SD card 2,4,8,16GB</li>
                <li>Backup your profile before update (recommended)</li>
                <li>Use AC power or fully charged battery</li>
                <li>Note older version of firmware before update</li>
              </ul>
              
              
              <div className="btn-col">
                
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-toggle="modal"
                  data-target="#RedModal-dci-p4"
                >
                  Learn More
                </button>
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.5.0-beta.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                >
                  Download
                </a>
              </div>
            </div>
          </div>

         
        </div> */}
      </div>

    <div className="row">
        <div className="col-lg-12 mb-lg-5">
          <h2>
            DSMC3™ <strong>RED® Touch</strong>{" "}
            <span>7.0" LCD Firmware v5.4.2</span>
          </h2>
          <div className="card  mb-5 ">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Version
                        </small>{" "}
                        <span>5.4.2</span>
                      </h3>
                    </div>
                    <div className="col-md-5 d-none">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Build
                        </small>
                        --
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Updated on
                        </small>{" "}
                        2023-07-23
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Firmware update Best practices:</strong>
                    </h2>
                    <ul>
                      <li>SD card 2,4,8,16GB</li> 
                      <li>Backup your profile before update (recommended)</li>
                      <li>Use AC power or fully charged battery</li>
                      <li>Note older version of firmware before update</li>
                    </ul>
                    <h2>
                      <strong>Firmware Compatibility:</strong>
                    </h2>
                    <ul>
                      <li>
                        This firmware is compatible with the DSMC3 RED® Touch
                        7.0" LCD
                      </li>
                      <li>
                        This firmware <strong>is not compatible with</strong>{" "}
                        other SmallHD or RED® Touch monitors
                      </li>
                    </ul>
                  </div>
                  <div className="btn-col">
                    {/*<a href="#" className="btn btn-outline-dark">Learn More</a>*/}
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-toggle="modal"
                      data-target="#RedModal-v5-4-2-main"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/smallhd5-RED-touch-v5-4-2-update.bin"
                        )
                      }
                      className="btn btn-primary text-white"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-12 mb-lg-5">
          <h2>
            DSMC3™ <strong>RED® Touch</strong>{" "}
            <span>7.0" LCD Firmware v5.4.1</span>
          </h2>
          <div className="card  mb-5 ">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Version
                        </small>{" "}
                        <span>5.4.1</span>
                      </h3>
                    </div>
                    <div className="col-md-5 d-none">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Build
                        </small>
                        --
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Updated on
                        </small>{" "}
                        2023-05-08
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Firmware update Best practices:</strong>
                    </h2>
                    <ul>
                      <li>SD card 2,4,8,16GB</li>
                      <li>Backup your profile before update (recommended)</li>
                      <li>Use AC power or fully charged battery</li>
                      <li>Note older version of firmware before update</li>
                    </ul>
                    <h2>
                      <strong>Firmware Compatibility:</strong>
                    </h2>
                    <ul>
                      <li>
                        This firmware is compatible with the DSMC3 RED® Touch
                        7.0" LCD
                      </li>
                      <li>
                        This firmware <strong>is not compatible with</strong>{" "}
                        other SmallHD or RED® Touch monitors
                      </li>
                    </ul>
                  </div>
                  <div className="btn-col">
                    {/*<a href="#" className="btn btn-outline-dark">Learn More</a>*/}
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-toggle="modal"
                      data-target="#RedModal-v5-4-1-main"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.4.1.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <div className="row">
        <div className="col-lg-12 mb-lg-5">
          <h2>
            DSMC3™ <strong>RED® Touch</strong>{" "}
            <span>7.0" LCD Firmware v5.4.0</span>
          </h2>
          <div className="card  mb-5 ">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Version
                        </small>{" "}
                        <span>5.4.0</span>
                      </h3>
                    </div>
                    <div className="col-md-5 d-none">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Build
                        </small>
                        --
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Updated on
                        </small>{" "}
                        2023-04-13
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Firmware update Best practices:</strong>
                    </h2>
                    <ul>
                      <li>SD card 2,4,8,16GB</li>
                      <li>Backup your profile before update (recommended)</li>
                      <li>Use AC power or fully charged battery</li>
                      <li>Note older version of firmware before update</li>
                    </ul>
                    <h2>
                      <strong>Firmware Compatibility:</strong>
                    </h2>
                    <ul>
                      <li>
                        This firmware is compatible with the DSMC3 RED® Touch
                        7.0" LCD
                      </li>
                      <li>
                        This firmware <strong>is not compatible with</strong>{" "}
                        other SmallHD or RED® Touch monitors
                      </li>
                    </ul>
                  </div>
                  <div className="btn-col">
                    {/*<a href="#" className="btn btn-outline-dark">Learn More</a>*/}
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-toggle="modal"
                      data-target="#RedModal-v5-4-0-main"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.4.0.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4  mb-lg-5">
          <h2>
            <span>DSMC3™ <strong>RED® Touch</strong> 7.0" LCD Firmware v5.0.0 Beta-1</span>
          </h2>
          <div className="card ">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-8">
                  <h3 className="text-dark">
                    <small className="d-block mb-3 text-black-50">
                      Updated on
                    </small>{" "}
                    23rd June, 2022
                  </h3>
                </div>
              </div>
              <h2>
                <strong>Firmware update Best practices:</strong>
              </h2>
              <ul>
                <li>SD card 2,4,8,16GB</li>
                <li>Backup your profile before update (recommended)</li>
                <li>Use AC power or fully charged battery</li>
                <li>Note older version of firmware before update</li>
              </ul>
              <div className="btn-col">
                {/*<a href="#" className="btn btn-outline-dark">Learn More</a> 
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-toggle="modal"
                  data-target="#RedModal-v5-main"
                >
                  Learn More
                </button>
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.0.0-main.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="row">
        <div className="col-lg-12 mb-lg-5">
          <h2>
            DSMC3™ <strong>RED® Touch</strong>{" "}
            <span>7.0" LCD Firmware v5.1.0</span>
          </h2>
          <div className="card  mb-5 ">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Version
                        </small>{" "}
                        <span>5.1.0</span>
                      </h3>
                    </div>
                    <div className="col-md-5 d-none">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Build
                        </small>
                        --
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Updated on
                        </small>{" "}
                        2022-11-08
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Firmware update Best practices:</strong>
                    </h2>
                    <ul>
                      <li>SD card 2,4,8,16GB</li>
                      <li>Backup your profile before update (recommended)</li>
                      <li>Use AC power or fully charged battery</li>
                      <li>Note older version of firmware before update</li>
                    </ul>
                    <h2>
                      <strong>Firmware Compatibility:</strong>
                    </h2>
                    <ul>
                      <li>
                        This firmware is compatible with the DSMC3 RED® Touch
                        7.0" LCD
                      </li>
                      <li>
                        This firmware <strong>is not compatible with</strong>{" "}
                        other SmallHD or RED® Touch monitors
                      </li>
                    </ul>
                  </div>
                  <div className="btn-col">
                    {/*<a href="#" className="btn btn-outline-dark">Learn More</a>*/}
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-toggle="modal"
                      data-target="#RedModal-v5-1-0-main"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.1.0.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="row">
        <div className="col-lg-12 mb-lg-5">
          <h2>
            DSMC3™ <strong>RED® Touch</strong>{" "}
            <span>7.0" LCD Firmware v5.0.0</span>
          </h2>
          <div className="card  mb-5 ">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Version
                        </small>{" "}
                        <span>5.0.0</span>
                      </h3>
                    </div>
                    <div className="col-md-5 d-none">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Build
                        </small>
                        --
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <h3 className="text-dark">
                        <small className="d-block mb-3 text-black-50">
                          Updated on
                        </small>{" "}
                        2022-08-15
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Firmware update Best practices:</strong>
                    </h2>
                    <ul>
                      <li>SD card 2,4,8,16GB</li>
                      <li>Backup your profile before update (recommended)</li>
                      <li>Use AC power or fully charged battery</li>
                      <li>Note older version of firmware before update</li>
                    </ul>
                    <h2>
                      <strong>Firmware Compatibility:</strong>
                    </h2>
                    <ul>
                      <li>
                        This firmware is compatible with the DSMC3 RED® Touch
                        7.0" LCD
                      </li>
                      <li>
                        This firmware <strong>is not compatible with</strong>{" "}
                        other SmallHD or RED® Touch monitors
                      </li>
                    </ul>
                  </div>
                  <div className="btn-col">
                    {/*<a href="#" className="btn btn-outline-dark">Learn More</a>*/}
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-toggle="modal"
                      data-target="#RedModal-v5-main"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.0.0-main.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div
        className="modal fade beta-firmware-modal"
        // aria-hidden="true"
        id="RedModal-dci-p4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware v5.5.0 Beta</strong>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
            <h2>
                <strong>Firmware update Best practices:</strong>
              </h2>
              <ul>
                <li> SD card 2,4,8,16GB</li>
                <li>Backup your profile before update (recommended)</li>
                <li>Use AC power or fully charged battery</li>
                <li>Note older version of firmware before update</li>
              </ul>
            <h2>
                <strong>Firmware Compatibility:</strong>
              </h2>
              <ul>
                <li> This firmware is compatible with the DSMC3 RED® Touch 7.0" LCD</li>
                <li>This firmware <strong>is not compatible with</strong> other SmallHD or RED® Touch monitors</li>
              </ul>
              <h2>
                <strong>Features Added:</strong>
              </h2>
              <ul>
                <li> Added GIO Scope Interface
                  <ul>
                    <li>Add New Tool > Camera > False Color > Gio Scope</li>
                  </ul>
                </li>
                <li>Added support for ISO Display Mode Gain (dB)
                  <ul>
                    <li> Menu > System Settings > Status Settings > ISO Display Mode</li>
                  </ul>
                </li>
                <li>Added ability to disable Page System
                  <ul>
                    <li>Monitor Settings > Interface > Page OS</li>
                  </ul>
                </li>
                <li>Added edit list functionality</li>
              </ul>
              <h2>
                <strong>Improvements & Alterations:</strong>
              </h2>
                <ul>
                  <li>Reduced time spent switching to playback mode.</li>
                </ul>
            </div>
            <div className="modal-footer">
              <div className="btn-col">
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.5.0-beta.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                  data-dismiss="modal" aria-label="Close"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        // aria-hidden="true"
        id="RedModal-dci-p3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DCI-P3 Calibration Procedure
                  DSMC3™ RED® Touch 7.0" LCD</strong>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <p>DSMC3™ RED® Touch monitors now ship calibrated to the DCI-P3 Color Space by default. Existing monitors now have a path to
switch from a REC 709, to a DCI-P3 calibration by downloading a new LUT from the list below and loading it as a Custom
Calibration.</p>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Steps for DCI-P3 Monitor Calibration:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Enter the Calibration menu (Monitor Settings{" >"} Calibration)</li>
                  <li>Reference the 8-digit reference number next to Factory Calibration (<strong>A07D8007</strong> or <strong>40702052</strong>)</li>
                  <li>Download the corresponding DCI-P3 calibration LUT</li>
                  <li>Install the LUT via Custom Calibration (Monitor Settings{" >"} Calibration{" >"} Custom Calibration{" >"} New Calibration)</li>
                  <li>Select DCI-P3 as the Calibration Target</li>
                  <li>Load the new Calibration LUT you recently downloaded (Browse for LUT)</li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <div className="btn-col">
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/DSMC3_RED_Touch_7.0_LCD_DCI-P3_Calibration.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                  data-dismiss="modal" aria-label="Close"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        // aria-hidden="true"
        id="RedModal-v5-5-1-main"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.5.1</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Firmware update Best practices:</strong>
                </h2>
                <ul>
                  <li>SD card 2,4,8,16GB</li>
                  <li>Backup your profile before update (recommended)</li>
                  <li>Use AC power or fully charged battery</li>
                  <li>Note older version of firmware before update</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul className="list-txt">
                  <li>This firmware is compatible with the DSMC3 RED® Touch7.0" LCD</li>
                  <li>This firmware <strong>is not compatible with</strong> other SmallHD or RED® Touch monitors</li>
                </ul>
              </div>

              <div className="mb-4">
                <h2>
                  <strong>Features Added:</strong>
                </h2>
                <ul className="list-txt">
                  <li>None</li>
                </ul>
              </div>

              <div className="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Resolved Chinese and Japanese font issues</li>
                  <li>Improved Guides support for the KOMODO-X<sup>TM</sup></li>
                  <li>Updated “Format” Crop Factor support for KOMODO-X<sup>TM</sup></li>
                </ul>
              </div>

            </div>
            <div className="modal-footer">
              <div className="btn-col">
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.5.0.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                  data-dismiss="modal" aria-label="Close"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        // aria-hidden="true"
        id="RedModal-v5-5-0-main"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.5.0</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Firmware update Best practices:</strong>
                </h2>
                <ul>
                  <li>SD card 2,4,8,16GB</li>
                  <li>Backup your profile before update (recommended)</li>
                  <li>Use AC power or fully charged battery</li>
                  <li>Note older version of firmware before update</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul className="list-txt">
                  <li>This firmware is compatible with the DSMC3 RED® Touch7.0" LCD</li>
                  <li>This firmware <strong>is not compatible with</strong> other SmallHD or RED® Touch monitors</li>
                </ul>
              </div>

              <div className="mb-4">
                <h2>
                  <strong>Features Added:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Added GIO Scope Interface
                    <ul>
                      <li>Add New Tool {">"} Camera {">"} False Color {">"} Gio Scope</li>
                    </ul>
                  </li>
                  <li>Added support for ISO Display Mode Gain (dB)
                    <ul><li>Menu {">"} System Settings {">"} Status Settings {">"} ISO Display Mode</li></ul>
                  </li>
                  <li>Added ability to disable Page System
                    <ul>
                      <li>Monitor Settings {">"} Interface {">"} Page OS</li>
                    </ul>
                  </li>
                  <li>Added edit list functionality</li>
                </ul>
              </div>

              <div className="mb-4">
                <h2>
                  <strong>Improvements & Alterations:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Reduced time spent switching to playback mode.</li>
                </ul>
              </div>

            </div>
            <div className="modal-footer">
              <div className="btn-col">
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.5.0.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                  data-dismiss="modal" aria-label="Close"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        // aria-hidden="true"
        id="RedModal-v5-4-2-main"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.4.2</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Firmware update Best practices:</strong>
                </h2>
                <ul>
                  <li>SD card 2,4,8,16GB</li>
                  <li>Backup your profile before update (recommended)</li>
                  <li>Use AC power or fully charged battery</li>
                  <li>Note older version of firmware before update</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul className="list-txt">
                  <li>This firmware is compatible with the DSMC3 RED® Touch7.0" LCD</li>
                  <li>This firmware <strong>is not compatible with</strong> other SmallHD or RED® Touch monitors</li>
                </ul>
              </div>

              <div className="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Resolved Playback control being inoperable when an ND filter was present.</li>
                </ul>
              </div>

            </div>
            <div className="modal-footer">
              <div className="btn-col">
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/smallhd5-RED-touch-v5-4-2-update.bin"
                    )
                  }
                  className="btn btn-primary text-white"
                  data-dismiss="modal" aria-label="Close"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        // aria-hidden="true"
        id="RedModal-v5-4-1-main"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.4.1</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Firmware update Best practices:</strong>
                </h2>
                <ul>
                  <li>SD card 2,4,8,16GB</li>
                  <li>Backup your profile before update (recommended)</li>
                  <li>Use AC power or fully charged battery</li>
                  <li>Note older version of firmware before update</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul className="list-txt">
                  <li>This firmware is compatible with the DSMC3 RED® Touch7.0" LCD</li>
                  <li>This firmware <strong>is not compatible with</strong> other SmallHD or RED® Touch monitors</li>
                </ul>
              </div>

              <div className="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                  <li>The Shutter edit menu will no longer occasionally default to an incorrect value.</li>
                  <li> Pressing and holding on a function button no longer crashes the RED® Touch monitor.</li>

                </ul>
              </div>

            </div>
            <div className="modal-footer">
              <div className="btn-col">
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.4.1.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                  data-dismiss="modal" aria-label="Close"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        // aria-hidden="true"
        id="RedModal-v5-4-0-main"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.4.0</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Firmware update Best practices:</strong>
                </h2>
                <ul>
                  <li>SD card 2,4,8,16GB</li>
                  <li>Backup your profile before update (recommended)</li>
                  <li>Use AC power or fully charged battery</li>
                  <li>Note older version of firmware before update</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul className="list-txt">
                  <li>This firmware is compatible with the DSMC3 RED® Touch7.0" LCD</li>
                  <li>This firmware <strong>is not compatible with</strong> other SmallHD or RED® Touch monitors</li>
                </ul>
              </div>

              <div className="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Fixed a bug encountered when changing the filter cartridge with the ISO/ND slider open</li>
                  <li>The Timelapse Interval setting may now be controlled via the slider</li>
                  <li>The User Presets popup now allows interacting with all checkbox elements</li>
                </ul>
              </div>

            </div>
            <div className="modal-footer">
              <div className="btn-col">
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.4.0.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                  data-dismiss="modal" aria-label="Close"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        // aria-hidden="true"
        id="RedModal-v5-1-0-main"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.1.0</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Firmware update Best practices:</strong>
                </h2>
                <ul>
                  <li>SD card 2,4,8,16GB</li>
                  <li>Backup your profile before update (recommended)</li>
                  <li>Use AC power or fully charged battery</li>
                  <li>Note older version of firmware before update</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul className="list-txt">
                  <li>This firmware is compatible with the DSMC3 RED® Touch7.0" LCD</li>
                  <li>This firmware <strong>is not compatible with</strong> other SmallHD or RED® Touch monitors</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Added Pixel Zoom to function button options (cycles through zoom levels)</li>
                  <li>Added video mirroring to function button options
                    <ul>
                      <li>When a mirror/rotate function button is assigned, the user may now specify what combination of mirroring & rotation that function button should apply</li>
                    </ul>
                  </li>
                  <li>
                    L&R audio meter channels may now be stacked on top of each other for better comparison
                  </li>
                  <li>Color Picker tool may now be used to sample an area rather than a single pixel
                    <ul>
                      <li>There are still known limitations with the accuracy of our color picker.  It would be best to hold of on marketing this too hard until further color picker improvements are made</li>
                    </ul>
                  </li>
                  <li>Added subtle UI indicators when additional settings menu contents exist below a page break</li>
                  <li>Added more detailed error codes to the update system</li>
                  <li>Touch Response Animation can be enabled via the Settings Menu
                    <ul>
                      <li>Will provide immediate visual feedback when the touchscreen is interacted with</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Features Added:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Exposure Assist tools, can now be captured in an image capture
                    <ul>
                      <li>The setting must be enabled via the tool’s configuration menu</li>
                    </ul>
                  </li>
                  <li>Peaking tool may be captured in an image capture
                    <ul>
                      <li>The setting must be enabled via the tool’s configuration menu</li>
                    </ul>
                  </li>
                  <li>DSMC3 RED® Touchadded support for ND Filters</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                  <li>DSMC3 RED® Touch data levels were not correct when using Log video</li>
                  <li>Exposure Assist (False Color) custom maps were not reliably preserved through power cycle</li>
                  <li>Data levels were incorrect when the monitor was booted in Max Backlight mode</li>
                </ul>
              </div>

            </div>
            <div className="modal-footer">
              <div className="btn-col">
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.1.0.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                  data-dismiss="modal" aria-label="Close"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        // aria-hidden="true"
        id="RedModal-v5-main"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.0.0</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Firmware update Best practices:</strong>
                </h2>
                <ul>
                  <li>SD card 2,4,8,16GB</li>
                  <li>Backup your profile before update (recommended)</li>
                  <li>Use AC power or fully charged battery</li>
                  <li>Note older version of firmware before update</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    This firmware is compatible with the DSMC3 RED® Touch 7.0"
                    LCD
                  </li>
                  <li>
                    This firmware <strong>is not compatible with</strong> other
                    SmallHD or RED® Touch monitors
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Updates may now be initiated through-camera</li>
                  <li>
                    Clip Info Panel now displays upcoming clip number like
                    in-camera
                  </li>
                  <li>
                    Significantly increased UI responsiveness and overall speed
                  </li>
                  <li>
                    Frame Accurate time code feature accuracy improvements
                  </li>
                  <li>Added Dashboard Page to function button assignments</li>
                  <li>
                    Allowed more granular backlight control. From 20% steps to
                    5% steps
                  </li>
                  <li>Added DC &amp; Batt. voltages to info view</li>
                  <li>
                    ‘No Signal’ now displays if monitor is not receiving video
                    signal from the camera
                  </li>
                  <li>
                    The Pixel Zoom Widget now has an opacity adjustment
                    (Settings &gt; Pixel Zoom &gt; Widget Opacity)
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Features Added:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    Pressing any two function buttons simultaneously (rapid
                    press) locks the user interface. To unlock the user
                    interface, simultaneously press any two function buttons
                    again
                  </li>
                  <li>
                    Added customizable touchscreen User Buttons (Monitor
                    Settings &gt; Interface &gt; User Buttons)
                  </li>
                  <li>Added Horizon Indicator Tool</li>
                  <li>
                    Switched from tri-linear to tetrahedral LUT interpolation
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    Fixed a bug that would cause the touchscreen to stop working
                  </li>
                  <li>
                    Fixed menu glitching/artifacting when using the RED Camera
                    Menu
                  </li>
                  <li>
                    The monitor will no longer have artifacts when combining
                    Crop&amp;Scale with rotation
                  </li>
                  <li>
                    Editing a Monitor Tool while in camera playback mode now
                    works properly
                  </li>
                  <li>Clip info now matches camera LCD clip info</li>
                  <li>Custom shutter values now work properly</li>
                  <li>
                    Fixed issues with the Waveform data not being aligned to the
                    legend
                  </li>
                  <li>Improved list scrolling &amp; selection behavior</li>
                  <li>Fixed UI element status colors</li>
                  <li>
                    Frame Guide no longer stays active when the tool is disabled
                  </li>
                  <li>Fixed bug with Color Pipe naming</li>
                  <li>
                    SD Card will be the default capture location as soon as a
                    card is inserted
                  </li>
                  <li>
                    Fixed bug causing profile load to fail if profile &gt; 1MB
                  </li>
                  <li>
                    Exiting the Calibration menu no longer leaves Custom
                    Calibration selected unless a new calibration was created.
                    Aborting early will leave the calibration menu in the
                    original state, from before the calibration menu was opened
                  </li>
                  <li>
                    Color Picker Active/Inactive state now preserved through
                    power cycle
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Known Issues in Release:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    Touchscreen Crop Guides may mis-align with the video by up
                    to 3 pixels at some scale factors (no issue at full
                    resolution)
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <div className="btn-col">
                <a
                  target="_blank"
                  onClick={() =>
                    props.directdownloadlink(
                      "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V5.0.0-main.zip"
                    )
                  }
                  className="btn btn-primary text-white"
                  data-dismiss="modal" aria-label="Close"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade beta-firmware-modal"
        id="DCI"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DCI-P3</strong> <span>Calibration Procedure</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>DSMC3™ RED® Touch 7.0" LCD</strong>
                </h2>
                <p>
                  DSMC3™ RED® Touch monitors now ship calibrated to the DCI-P3
                  Color Space by default. Existing monitors now have a path to
                  switch from a REC 709, to a DCI-P3 calibration by downloading
                  a new LUT from the list below and loading it as a Custom
                  Calibration.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="d-inline-block">
                  <strong>Steps for DCI-P3 Monitor Calibration:</strong>
                </h2>
                <ol className="list-txt">
                  <li>
                    Enter the Calibration menu (Monitor Settings{" > "}Calibration)
                  </li>
                  <li>
                    Reference the 8-digit reference number next to Factory
                    Calibration (<strong>A07D8007</strong>,{" "}
                    <strong>40702052</strong> or{" "}
                    <strong>
                      <sup>*</sup>600F804E
                    </strong>
                    )
                  </li>
                  <li>Download the corresponding DCI-P3 calibration LUT</li>
                  <li>
                    Install the LUT via Custom Calibration (Monitor Settings{" >"}
                    Calibration{" > "}Custom Calibration{" > "}New Calibration)
                  </li>
                  <li>Select DCI-P3 as the Calibration Target</li>
                  <li>
                    Load the new Calibration LUT you recently downloaded (Browse
                    for LUT)
                  </li>
                </ol>
              </div>
              <p>
                *For monitors showing LUT Hash <strong>600F804E</strong>, please
                download calibration LUT <strong>A07D8007</strong>
              </p>
            </div>
            <div className="modal-footer">
              <a
                target="_blank"
                href="https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/A07D8007_DCI-P3_DSMC3_Monitor_Calibration_LUT.3dl"
                className="btn btn-primary "
              >
                <i className="far fa-download"></i> <small>A07D8007</small>
              </a>
              <a
                target="_blank"
                href="https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/40702052_DCI-P3_DSMC3_Monitor_Calibration_LUT.3dl"
                className="btn btn-primary  mr-0"
              >
                <i className="far fa-download"></i> <small>40702052</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default redtouchfirmware;
