import React from "react";

const betafirmware = (props) => {
  return (
    <>
      <h2>
        <strong>SmallHD PageOS 5</strong> <span>Firmware v5.0.0-Beta-4</span>
      </h2>
      <div className="card">
        <div className="card-body">
          <div class="row mb-3">
            <div class="col-md-5">
              <h3 class="text-dark">
                <small class="d-block mb-3 text-black-50">Version</small>{" "}
                <span>
                  5.0.0<small>-Beta-4</small>
                </span>
              </h3>
            </div>
            <div class="col-md-7">
              <h3 class="text-dark">
                <small class="d-block mb-3 text-black-50">Updated on</small>{" "}
                25th Aug, 2022
              </h3>
            </div>
          </div>
          <h2>
            <strong>Features Added (OS 5 Beta):</strong>
          </h2>
          <ul class="list-txt">
            <li>Look-Around Camera Control</li>
            <li>
              HDMI Out enabled for 4K Production Monitors (allows adding a 3D
              LUT to Output)
            </li>
            <li>Multi-View on 4K Production Monitors...</li>
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
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/beta/SmallHD_PageOS_5_Firmware_V5-0-0-Beta-4.zip"
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
                <span>Firmware v5.0.0-Beta-4</span>
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

            <div class="modal-body">
              <div class="mb-4">
                <h2 class="bg-warning d-inline-block">
                  <strong>Important Beta Software Information:</strong>
                </h2>
                <ul class="list-txt">
                  <li>
                    Beta-4 Supports all monitors except the DSMC3 RED® Touch and
                    Action 5 (see Firmware Compatibility for more information)
                  </li>
                  <li>
                    There are known significant bugs with v5.0.0 Beta (see
                    complete list below before installing)
                  </li>
                  <li>There may be some unknown bugs with v5.0.0 Beta</li>
                  <li>
                    Please report bugs to the following email address:
                    <a
                      class="text-decoration-underline"
                      href="mailto:support@smallhd.com"
                    >
                      support@smallhd.com
                    </a>
                  </li>
                  <li>
                    Further beta releases are expected to be provided in the
                    coming weeks
                  </li>
                </ul>
              </div>
              <div class="mb-4">
                <h2>
                  <strong>Firmware update Best practices:</strong>
                </h2>
                <ul class="list-txt">
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
                    This firmware{" "}
                    <strong>is NOT compatible with the DSMC3 RED® Touch</strong>{" "}
                    or <strong>Action 5</strong>
                  </li>
                  <li>
                    RED® Touch users have a public OS 5 Beta available on the{" "}
                    <a href="/firmware/red-touch">RED® Touch tab</a>{" "}
                  </li>
                  <li>
                    This firmware{" "}
                    <strong>is NOT compatible with legacy monitors</strong>{" "}
                    (DP1, DP6, DP4, AC7, and DP7-PRO)
                  </li>
                  <li>
                    Please read through <strong>Known Issues</strong> before
                    installing
                  </li>
                </ul>
              </div>
              <div class="mb-4">
                <h2 class="bg-warning d-inline-block">
                  <strong>IMPORTANT - Known Issues in Beta 4:</strong>
                </h2>
                <ul class="list-txt">
                  <li>
                    Image Capture may not work as expected on PQ Color Pipes
                    (will not be resolved in 5.0)
                    <ul>
                      <li>
                        The raw input data is captured using image capture. The
                        overlaid image is NOT subject to the Color Pipe, it’s
                        assumed that all images being overlaid are already in
                        the same color space as the calibration target.
                      </li>
                    </ul>
                  </li>
                  <li>
                    CalMAN integration has not been finalized and fully
                    validated
                  </li>
                  <li>
                    Camaro monitors do not work with 10 bit video from a Murideo
                    color generator
                  </li>
                  <li>
                    HDMI-&gt;SDI Cross Conversion does not work on some models:
                    <ul>
                      <li>
                        UltraBrights, Smart 7, Focus, Focus 7 fail to
                        cross-convert
                      </li>
                    </ul>
                  </li>
                  <li>
                    Switching Inputs may cause the VISION 24 monitor to start
                    flickering continuously
                    <ul>
                      <li>Workaround: Restart the monitor</li>
                      <li>
                        May only exhibit the issue when the two inputs are of
                        different resolution &amp; frame rate
                      </li>
                    </ul>
                  </li>
                  <li>
                    4K Monitors do not output 10-bit HDMI video
                    <ul>
                      <li>Workaround: Use 8 or 12 bit video</li>
                    </ul>
                  </li>
                  <li>
                    4K Monitor Scopes fail on some 10 bit, 12 bit RGB or 4:4:4
                    video sources
                    <ul>
                      <li>
                        Workaround: Use 8 bit RGB, 8bit 4:4:4, or any 4:2:2
                        video format
                      </li>
                    </ul>
                  </li>
                  <li>
                    Smart 7, UltraBright, SDI output may work intermittently
                    <ul>
                      <li>
                        Workaround: Entering and leaving the settings menu
                        usually restores SDI out
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="mb-4">
                <h2>
                  <strong>Features Added (OS 5 Beta):</strong>
                </h2>
                <ul class="list-txt">
                  <li>Look-Around Camera Control</li>
                  <li>
                    HDMI Out enabled for 4K Production Monitors (allows adding a
                    3D LUT to Output)
                  </li>
                  <li>
                    Multi-View on 4K Production Monitors
                    <ul>
                      <li>VISION monitors support dual-view</li>
                      <li>
                        All other 4K production monitors support up to quad-view
                      </li>
                    </ul>
                  </li>
                  <li>
                    Added a Horizon Indicator Tool (Add Tool &gt; Frame &gt;
                    Horizon Level)
                  </li>
                  <li>
                    EL Zone Tool
                    <ul>
                      <li>
                        Option in the Exposure Assist tool. Only works when
                        using a LOG Color Pipe
                      </li>
                      <li>
                        Image Capture can’t currently capture the EL Zone tool
                      </li>
                    </ul>
                  </li>
                  <li>
                    Added Touch Screen Function Buttons to touch screen monitors
                  </li>
                  <li>
                    Active 4K TX can now be assigned to a function button
                    <ul>
                      <li>
                        Allows using function buttons to change between paired
                        transmitters
                      </li>
                    </ul>
                  </li>
                  <li>
                    Switch from tri-linear to tetrahedral LUT interpolation
                  </li>
                  <li>
                    Added support for 33pt Calibration LUTs on 4K Production
                    Monitors
                  </li>
                  <li>4K Production Monitor Speakers are now enabled</li>
                  <li>
                    Added configurable low voltage warning on 4K Production
                    Monitors
                  </li>
                  <li>Color Pipes can be assigned to function buttons</li>
                  <li>
                    Allow users to assign unique calibrations to Color Pipes
                  </li>
                </ul>
              </div>
              <div class="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul class="list-txt">
                  <li>
                    Updated ARRI LOG conversion support
                    <ul>
                      <li>Added support for ARRI LOGC4</li>
                      <li>
                        Updated conversion LUTs for LOGC-&gt;SDR and
                        LOGC-&gt;HDR
                      </li>
                    </ul>
                  </li>
                  <li>Custom backdrops are now removed by a factory reset</li>
                </ul>
              </div>
              <div class="mb-4">
                <h2>
                  <strong>Beta 3 Issues Resolved by Beta 4:</strong>
                </h2>
                <ul class="list-txt">
                  <li>
                    Waveform does not work on 4K monitors when positioned at the
                    top of the screen
                  </li>
                  <li>
                    Multiview Video may momentarily flicker on 4K production
                    monitors
                  </li>
                  <li>
                    4k Production monitors cannot display 59.98 FPS video from a
                    Black Magic Ultrastudio
                  </li>
                  <li>720p SDI video does not work on 4K monitors</li>
                </ul>
              </div>
              <div class="mb-4">
                <h2>
                  <strong>Recommended Practices</strong>
                </h2>
                <ul class="list-txt">
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
                href="https://downloads.smallhd.com/dev/backend-node-server/firmware/beta/SmallHD_PageOS_5_Firmware_V5-0-0-Beta-4.zip"
                className="btn btn-primary"
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

export default betafirmware;
