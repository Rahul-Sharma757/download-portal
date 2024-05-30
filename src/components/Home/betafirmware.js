import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const BetaFirmware = (props) => {
  const history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('betaModal') === 'true') {
      const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();

      // Remove query parameter after 15 seconds
      const timeoutId = setTimeout(() => {
// console.log('kuchbhi');
        history.push(window.location.pathname);
      }, 1000);

      // Cleanup timeout on component unmount
      return () => clearTimeout(timeoutId);
    }

    // Initialize the modal
    const modalElement = document.getElementById('exampleModal');
    const modal = new window.bootstrap.Modal(modalElement);

    // Add click event listener for the "Learn More" button
    const learnMoreButton = document.getElementById('learnMoreButton');
    learnMoreButton.addEventListener('click', () => {
      modal.show();
    });

    // Cleanup event listeners on unmount
    return () => {
      learnMoreButton.removeEventListener('click', () => {
        modal.show();
      });
    };
  }, [history]);

  return (
    <>
      <h2>
        <strong>SmallHD PageOS 6</strong> <span>Firmware v6.0.0-Beta0</span>
      </h2>
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-5">
              <h3 className="text-dark">
                <small className="d-block mb-3 text-black-50">Version</small>{" "}
                <span>
                  6.0.0<small>-Beta0</small>
                </span>
              </h3>
            </div>
            <div className="col-md-7">
              <h3 className="text-dark">
                <small className="d-block mb-3 text-black-50">Updated on</small>{" "}
                29th May, 2024
              </h3>
            </div>
          </div>
          <h2>
            <strong>Important Beta Software Information:</strong>
          </h2>
          <ul className="list-txt">
            <li>This is NOT a full release update and should NOT be used for critical content creation</li>
            <li>There may be some unknown bugs with v6.0.0 Beta0</li>
            <li>
              Please note which firmware version you are currently using and save your monitor
              Profile before upgrading (Monitor Settings > User > Profiles)
            </li>
            <li>
              Please report bugs to the following email address:
              <a href="mailto:support@smallhd.com">support@smallhd.com</a>
            </li>
            <li>This firmware will <strong>NOT</strong> support the following monitors:</li>
          </ul>
          <div className="btn-col">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              id="learnMoreButton"
            >
              Learn More
            </button>

            <a
              href="#"
              onClick={() =>
                props.showpopupdownload(
                  "https://downloads.smallhd.com/dev/backend-node-server/firmware/beta/SmallHD_PageOS_V6-0-0-beta-0.zip"
                )
              }
              className="btn btn-primary text-white"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <div
        className="modal fade beta-firmware-modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>SmallHD PageOS 6</strong>{" "}
                <span>Firmware v6.0.0-Beta0</span>
              </h2>
              {/* <button
                type="button"
                className="btn-close"
                data-bs="modal"
                aria-label="Close"
              >
              </button> */}
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <h2 className="bg-warning d-inline-block">
                  <strong>Important Beta Software Information:</strong>
                </h2>
                <ul className="list-txt">
                  <li>This is NOT a full release update and should NOT be used for critical content creation</li>
                  <li>There may be some unknown bugs with v6.0.0 Beta0</li>
                  <li>
                    Please note which firmware version you are currently using and save your monitor
                    Profile before upgrading (Monitor Settings > User > Profiles)
                  </li>
                  <li>
                    Please report bugs to the following email address:
                    <a className="text-decoration-underline" href="mailto:support@smallhd.com">
                      support@smallhd.com
                    </a>
                  </li>
                  <li>This firmware will <strong>NOT</strong> support the following monitors:</li>
                  <ul>
                    <li><strong>Vision 17</strong></li>
                    <li><strong>Vision 24</strong></li>
                    <li>1703 HDR</li>
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
                  <li>Complete list of compatible monitors can be <a href="https://support.cs.inc/s/article/SmallHD-Monitors-Currently-Supported-In-The-Latest-PageOS-Firmware">found here</a></li>
                  <li>This firmware <strong> is NOT compatible with the DSMC3 RED®Touch</strong>  or<strong> Action 5 </strong></li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Features Added:</strong>
                </h2>
                <ul className="mb-0">
                  <li>Allow 4K Production Monitor tally/record indicator to be controlled via GPI connection</li>
                  <li>Added support for multiplexed SDI inputs
                    <ul>
                      <li>Support 2x6G and 4x3G 2SI encoded inputs</li>
                    </ul>
                  </li>
                  <li>Monitors are now compatible with several USB&lt;-&gt;Wifi adapters</li>
                  <li>Added support for Level B SDI Video for 4K Production Monitors</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2>
                  <strong>Improvements and Alterations:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Slight improvements to Vectorscope FPS and Image Capture speed</li>
                  <li>Updated some UI animations
                    <ul>
                      <li>Page transition speed is now faster</li>
                      <li>Monitor Settings > Interface > Pages</li>
                    </ul>
                  </li>
                  <li>Added support for a custom bouncing “No Video” icon
                    <ul>
                      <li>Monitor Settings > User > Personalize</li>
                    </ul>
                  </li>
                  <li>Luminance Color Pipe Rework
                    <ul>
                      <li>“Backlight” and “Brightness” has been replaced with the word “Luminance”</li>
                      <li>Luminance may now be configured within a color pipe</li>
                    </ul>
                  </li>
                  <li>Color Pipe UI Update
                    <ul>
                      <li>The Color Pipe UI has been updated to make the system easier to use</li>
                    </ul>
                  </li>
                  <li>The Crosshatch Tool now allows creating a denser grid</li>
                  <li>Improved the granularity of the Zebra thresholds
                    <ul>
                      <li>Thresholds may now be set based based on either code values or IRE</li>
                    </ul>
                  </li>
                  <li>Allow capturing two images at once, one with and one without any compatible tools</li>
                  <li>Custom Exposure Assist Improvements
                    <ul>
                      <li>Users may now change the background of a custom exposure map
                        <ul>
                          <li>Options include: Grayscale, Transparent (Clean), or Spectrum</li>
                        </ul>
                      </li>
                      <li>Allow users to load custom exposure maps as an image file from removable media</li>
                    </ul>
                  </li>
                  <li>Color Pipes now support the following additional white points: D93, D56, D60</li>
                  <li>When function button tools are deactivated, they are removed from the toolbar</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="d-inline-block">
                  <strong>Bugs Fixed:</strong>
                </h2>
                <ul className="list-txt">
                   <li>Fixed bug causing User Conversion LUTs in Color Pipes to be applied incorrectly</li>
                  <li>Resolved audio data from a BlackMagic PIX-E5 not being detected by SmallHD monitors</li>
                  <li>Resolved interactions between the Input Tool and Image Capture on Record Start</li>
                  <li>Camera Control - Scrubbing in playback no longer stops playback functionality for ARRI Mini</li>
                  <li>Fixed a bug causing 4K Production Monitors to load the last toolset used on a different Page</li>
                  <li>Resolved issue that would prevent tools from deactivating if accessed via the main toolbar</li>
                  <li>Fixed inconsistencies when enabling/disabling a custom image capture frame guide</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="d-inline-block">
                  <strong>Beta Known Issues:</strong>
                </h2>
                <ul className="list-txt">
                  <li>Some monitor functions may become unresponsive when running for long durations of time</li>
                  <li>Image Capture while recording via Camera Control may fail to trigger on RED DSMC2 cameras</li>
                  <li>Image Capture Tool takes longer to engage on monitors connected to HDMI inputs</li>
                  <li>Dual SDI streams are not supported at this time</li>
                  <li>Custom Look LUTs may not load correctly when using the custom load function via media</li>
                  <li>Color Pipe inverting colors for inputs of lesser resolution (PIP)</li>
                  <li>Custom Look LUTs not being loaded in the correct format</li>
                  <li>Custom Look LUTs resetting when monitor is powered off</li>
                  <li>HDMI cross conversion not working correctly when connected to older SmallHD Monitors</li>
                  <li>Updating and managing custom User Profiles on removable media causing interface delays</li>
                  <li>Toolset settings being overwritten when updating a previously saved custom Toolset Profile</li>
                  <li>Changing a white point in a Color Pipe affects all previously set custom Look LUTs</li>
                  <li>Long duration HDMI connections causing Image Capture to fail</li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <a
              target="_blank"
              onClick={() =>
                props.showpopupdownload(
                  "https://downloads.smallhd.com/dev/backend-node-server/firmware/beta/SmallHD_PageOS_V6-0-0-beta-0.zip"
                )
              }
              className="btn btn-primary text-white" data-dismiss="modal" aria-label="Close"
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

export default BetaFirmware;
