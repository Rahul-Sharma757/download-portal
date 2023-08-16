import React from "react";

const betafirmware = (props) => {
  return (
    <>
      <h2>
        <strong>SmallHD PageOS 5</strong> <span>Firmware v5.5.0-Beta-2</span>
      </h2>
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-5">
              <h3 className="text-dark">
                <small className="d-block mb-3 text-black-50">Version</small>{" "}
                <span>
                  5.5.0<small>-Beta-2</small>
                </span>
              </h3>
            </div>
            <div className="col-md-7">
              <h3 className="text-dark">
                <small className="d-block mb-3 text-black-50">Updated on</small>{" "}
                1st Aug, 2023
              </h3>
            </div>
          </div>
          <h2 >
            <strong>Important Beta Software Information:</strong>
          </h2>
          <ul className="list-txt">
            <li>This is NOT a full release update and should NOT be used for critical content creation</li>
            <li>
              There may be some unknown bugs with v5.5.0 Beta2
            </li>
            <li>Please report bugs to the following email address:<a href="mailto:support@smallhd.com">support@smallhd.com</a></li>
            <li>This firmware will NOT support the following monitors:</li>
          </ul>
          <div className="btn-col">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Learn More
            </button>

            <a
              target="_blank"
              onClick={() =>
                props.showpopupdownload(
                  "https://downloads.smallhd.com/dev/backend-node-server/firmware/beta/SmallHD_5.5.0-Beta2-update.zip"
                )
              }
              className="btn btn-primary text-white"
            >Download</a>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>SmallHD PageOS 5</strong>{" "}
                <span>Firmware v5.5.0-Beta-2</span>
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
                <h2 className="bg-warning d-inline-block">
                  <strong>Important Beta Software Information:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    This is NOT a full release update and should NOT be used for critical content creation
                  </li>
                  <li>
                    There may be some unknown bugs with v5.5.0 Beta2
                  </li>
                  <li>
                    Please report bugs to the following email address:
                    <a
                      className="text-decoration-underline"
                      href="mailto:support@smallhd.com"
                    >
                      support@smallhd.com
                    </a>
                  </li>
                  <li>This firmware will NOT support the following monitors:</li>
                  <ul>
                    <li> 1703 HDR</li>
                    <li>2403 HDR</li>
                    <li>2403 HB</li>
                    <li>1703 Studio</li>
                    <li>1303 Studio</li>
                    <li>702 OLED</li>
                    <li>701 Light</li>
                    <li>701</li>
                    <li>702 Bright</li>
                    <li>501</li>
                    <li>502</li>
                    <li>502 Bright</li>
                  </ul>
                  <li>This firmware <strong> is NOT compatible with the DSMC3 RED®Touch</strong>  or<strong> Action 5 </strong></li>
                  <li>RED® Touch users have OS 5 available on the <a href="https://downloads.smallhd.com/firmware/red-touch"> RED® Touch tab</a> </li>
                  <li>This firmware <strong>is NOT compatible with legacy monitors </strong> (DP1, DP6, DP4, AC7, and
                    DP7-PRO)</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Features Added:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Sony VENICE 2 is now supported by the VENICE camera control license
                  </li>
                  <li>Sony VENICE and VENICE 2 now support wireless camera control
                  </li>
                  <li>Added support for Ethernet camera control of RCP2 and DSMC2 RED cameras
                  </li>
                  <li>Burn-In Recover Mode
                  </li>
                  <ul><li>Adds a new settings section under “Display” that allows the user to trigger a
                    burn-in recovery sequence, which cycles the panel through a color pattern to fix
                    image retention
                  </li>
                    <li>Monitor Settings {">"} Display{">"} Burn-In Recover
                    </li></ul>
                  <li>SmallHD 4K Production Monitors now support camera control licenses for ARRI, RED
and Sony cameras</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul className="list-txt">
                  <li>
                    Improved 703 UltraBright Calibration Wizard now shows truly native values
                  </li>
                  <ul>
                    <li>
                      All previous calibration LUTs created on 703 UB monitors will be altered with this
                      update, we recommend re-calibrating on the new firmware. This will not affect
                      monitors that have never had a factory or user calibration LUT loaded
                    </li>
                  </ul>

                  <li>
                    Added support for Blackmagic log BMDFilm and BMDFilm 4k
                  </li>
                  <ul>
                    <li>
                      These formats should now work with the EL Zone Tool
                    </li>
                  </ul>

                  <li>
                    Improved IP connection for camera control menus
                  </li>
                  <li>
                    4K monitors now display LUT names in the function button label when a Look Tool is
                    assigned to a User Button
                  </li>
                  <li>
                    Smart 5 Monitors can now perform camera control when tethered via USB to a
                    stand-alone Teradek Bolt 4K or Bolt 6 transmitter or receiver. Previously only Smart 7
                    monitors supported this feature
                  </li>
                  <li>
                    Smart 7 Wireless Modules now work on Cine 7 500 TX, Cine 7 500 RX
                  </li>
                  <li>
                    Updated ARRI style Exposure Assist to support LogC4
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="d-inline-block">
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Image Captures should no longer save corrupted frames</li>
                  <li>
                    AUTO range selection now defers to the expected range of the selected LOG format
                    <ul>
                      <li>
                        Previously, users using Sony log formats needed to force the Color Pipe to FULL;
                        now the color should be accurate even when leaving the Color Pipe to the default
                        “AUTO” setting
                      </li>
                    </ul>
                  </li>
                  <li>
                    Resolved issues with LUTs not rendering properly on multiview
                  </li>
                  <li>
                    Image captures should now be scaled correctly on 720p monitors
                  </li>
                  <li>
                    Calman Integration: Resolved issues setting the monitor’s white and black levels
                  </li>
                  <li>
                    Switching the input range of incoming video now updates the range of the Waveform
                    Tool legend. Previously the Waveform Tool needed to be toggled off and back on.
                  </li>

                  <li>
                  Fixed an issue using Legal range video in the 4K production monitor Calibration Wizard
                  </li>
                  <li>
                    Camera Control - DSMC2 “playback” menu now shows the stop button
                  </li>
                  <li>
                    Enlarged the size of the white point / black point color patch on small monitors
                  </li>

                  <li>  Resolved issues with the Waveform spot meter when using scaled video  </li>
                  <li>  Vision Series monitor 2 pass calibration now saves even if the user skips applying LUTs  </li>
                  <li>   Resolved issues in the Zebra Tool when thresholds were set below 0 or above 100 IRE </li>
                  <li>  Resolved several issues regarding toolbar scrolling through multiple tools  </li>
                  <li>  Resolved visible gap between the waveform data and waveform legend  </li>
                  <li>   HDR mode and Max Bright mode can no longer be enabled simultaneously </li>
                  <li>    Aspect Guide is no longer offset from the edge of the panel by 1 pixel on the Indie 7</li>
                  <li>   Improved interaction of Color Picker Tool and Pixel Zoom </li>
                  <li>  Assigning Livegrade Tool to a function button now works as intended  </li>
                  <li>   Color picker tool location menu can now be left when a scope overlaps the ‘back’ button </li>
                </ul>
              </div>
            </div>

            <div className="modal-footer">
            <a
              target="_blank"
              onClick={() =>
                props.showpopupdownload(
                  "https://downloads.smallhd.com/dev/backend-node-server/firmware/beta/SmallHD_5.5.0-Beta2-update.zip"
                )
              }
              className="btn btn-primary text-white"
              data-dismiss="modal" aria-label="Close"
            >Download</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default betafirmware;
