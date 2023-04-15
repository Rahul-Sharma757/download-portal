import React from "react";
import RegistrationPopup from "../Common/RegistrationPopup";
const redtouchfirmware = (props) => {
  return (
    <>
    <div className="row">
        <div className="col-lg-8 mb-lg-5">
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
        <div className="col-lg-4  mb-lg-5">
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
    <div className="row">
        <div className="col-lg-8 mb-lg-5">
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
        <div className="col-lg-4  mb-lg-5">
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
      <h2>
        DSMC3™ <strong>RED® Touch</strong> <span>7.0" LCD Firmware v4.8.3</span>
      </h2>
      <div className="row">
        <div className="col-lg-12 mb-lg-5">
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
                        <span>4.8.3</span>
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
                        2022-03-29
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
                      data-target="#RedModal-v3"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V4.8.3.zip"
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
      <h2>
        DSMC3™ <strong>RED® Touch</strong> <span>7.0" LCD Firmware v4.8.1</span>
      </h2>
      <div className="row">
        <div className="col-lg-12 mb-lg-5">
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
                        <span>4.8.1</span>
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
                        2022-02-22
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
                      data-target="#RedModal-v0"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V4.8.1.zip"
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
      <h2>
        DSMC3™ <strong>RED® Touch</strong> <span>7.0" LCD Firmware v4.8.0</span>
      </h2>
      <div className="row">
        <div className="col-lg-12 mb-lg-5">
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
                        <span>4.8.0</span>
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
                        2021-12-07
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
                      data-target="#RedModal"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V4.8.0.zip"
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
        <div className="col-lg-4  mb-lg-5 d-none">
          <div className="card ">
            <div className="card-body">
              <h2>
                <strong>Important Beta Software Information:</strong>
              </h2>
              <ul className="list-txt">
                <li>There may be some unknown bugs with v4.7.6 Beta</li>
                <li>
                  Please report bugs to the following email address:
                  <strong>support@smallhd.com</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>
        DSMC3 <strong>RED® Touch</strong>{" "}
        <span>7.0" LCD Firmware v4.7.6 Beta</span>
      </h2>
      <div className="row">
        <div className="col-lg-12 mb-lg-5">
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
                        <span>4.7.6</span>
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
                        2021-11-16
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
                      data-target="#RedModalOld"
                    >
                      Learn More
                    </button>
                    <a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/DSMC3_RED_Touch_Firmware_V4.7.6.zip"
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
        id="RedModal-v5-4-0-main"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.4.0</span>{" "}
              </h2>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div class="modal-body">
              <div class="mb-4">
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
              <div class="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul class="list-txt">
                  <li>This firmware is compatible with the DSMC3 RED® Touch7.0" LCD</li>
                  <li>This firmware <strong>is not compatible with</strong> other SmallHD or RED® Touch monitors</li>
                </ul>
              </div>
              
              <div class="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul class="list-txt">
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
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.1.0</span>{" "}
              </h2>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div class="modal-body">
              <div class="mb-4">
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
              <div class="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul class="list-txt">
                  <li>This firmware is compatible with the DSMC3 RED® Touch7.0" LCD</li>
                  <li>This firmware <strong>is not compatible with</strong> other SmallHD or RED® Touch monitors</li>
                </ul>
              </div>
              <div class="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul class="list-txt">
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
              <div class="mb-4">
                <h2>
                  <strong>Features Added:</strong>
                </h2>
                <ul class="list-txt">
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
              <div class="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul class="list-txt">
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
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v5.0.0</span>{" "}
              </h2>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div class="modal-body">
              <div class="mb-4">
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
              <div class="mb-4">
                <h2>
                  <strong>Firmware Compatibility:</strong>
                </h2>
                <ul class="list-txt">
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
              <div class="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul class="list-txt">
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
              <div class="mb-4">
                <h2>
                  <strong>Features Added:</strong>
                </h2>
                <ul class="list-txt">
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
              <div class="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul class="list-txt">
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
              <div class="mb-4">
                <h2>
                  <strong>Known Issues in Release:</strong>
                </h2>
                <ul class="list-txt">
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
                    Enter the Calibration menu (Monitor Settings > Calibration)
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
                    Install the LUT via Custom Calibration (Monitor Settings >
                    Calibration > Custom Calibration > New Calibration)
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
      <div
        className="modal fade beta-firmware-modal"
        id="RedModal-v3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v4.8.3</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Maintenance update for SmallHD production practices.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Recommended Practices:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    Connect third party external recorders directly downstream
                    of your source device (i.e. camera), not downstream of the
                    monitor
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <a
                target="_blank"
                onClick={() =>
                  props.directdownloadlink(
                    "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V4.8.3.zip"
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

      <div
        className="modal fade beta-firmware-modal"
        id="RedModal-v0"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v4.8.1</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul className="list-txt roman">
                  <li>
                    DSMC3™ RED® Touch monitors now ship calibrated to the DCI-P3
                    Color Space by default. Existing monitors now have a path to
                    switch to a DCI-P3 calibration by downloading a new LUT from
                    our website and loading it as a Custom Calibration.
                    <ul className="alpha">
                      <li>
                        DCI-P3 Calibration Procedure:
                        <ol>
                          <li>
                            Enter the Calibration menu (Monitor Settings >
                            Calibration)
                          </li>
                          <li>
                            Reference the 8-digit reference number next to
                            Factory Calibration (A07D8007 or 40702052)
                          </li>
                          <li>
                            Download the corresponding DCI-P3 calibration LUT on
                            the Download page
                          </li>
                          <li>
                            Install the LUT via Custom Calibration (Monitor
                            Settings > Calibration > Custom Calibration > New
                            Calibration
                          </li>
                          <li>Select DCI-P3 as the Calibration Target</li>
                          <li>
                            Load the new Calibration LUT you recently downloaded
                            (Browse for LUT)
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Recommended Practices:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    Connect third party external recorders directly downstream
                    of your source device (i.e. camera), not downstream of the
                    monitor
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <a
                target="_blank"
                onClick={() =>
                  props.directdownloadlink(
                    "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V4.8.1.zip"
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
      <div
        className="modal fade beta-firmware-modal"
        id="RedModalOld"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3 RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v4.7.6 Beta</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    RED Touch will now properly handle when ProRes recording is
                    added to V-RAPTOR
                  </li>
                  <li>Removed backdrop menu from RED Touch monitors</li>
                  <li>RED Touch now supports Max Bright mode</li>
                  <li>Improved color accuracy of image captures</li>
                  <li>
                    Firmware Updates now allow spaces in the update file name
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    RED Touch - AF improvements
                    <ul>
                      <li>
                        Opening the AF menu no longer triggers an AF event
                      </li>
                      <li>
                        AF no longer stops working if the camera fails to lock
                        focus
                      </li>
                    </ul>
                  </li>
                  <li>
                    RED Touch - Improved several cases of video not appearing
                    properly on startup
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <a
                target="_blank"
                onClick={() =>
                  props.directdownloadlink(
                    "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/DSMC3_RED_Touch_Firmware_V4.7.6.zip"
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
      <div
        className="modal fade beta-firmware-modal"
        id="RedModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>DSMC3™ RED® Touch 7.0" LCD Firmware </strong>{" "}
                <span>v4.8.0</span>{" "}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2>
                  <strong>Features Added:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Added support for V-RAPTOR™ FW 1.2 features</li>
                  <li>Added support for ProRes recording</li>
                  <li>Added support for frame-accurate timecode</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul className="list-txt">
                  <li>RED® Touch now shows pre-record state</li>
                  <li>TC, GEN, SYNC now visible at all times</li>
                  <li>RED® Touch now supports UI Lock</li>
                  <li>
                    RED® Touch now supports custom FPS, Shutter, WB values
                  </li>
                  <li>
                    RED® Touch no longer monitors internal RTC, pulls date/time
                    from V-RAPTOR™
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Fixed potential erratic touchscreen behavior</li>
                  <li>Fixed battery meter behavior</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Recommended Practices:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    Connect third party external recorders directly downstream
                    of your source device (i.e. camera), not downstream of the
                    monitor
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <a
                target="_blank"
                onClick={() =>
                  props.directdownloadlink(
                    "https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V4.8.0.zip"
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
    </>
  );
};

export default redtouchfirmware;
