import React from 'react'

const actionosfirmware = (props) => {
	return (
		<>
		    <div class="row">
				<div class="col-lg-12 mb-lg-5">
					<h2><strong>SmallHD</strong> Action OS V1.2</h2>
					<div class="card mb-5">
						<div class="card-body">
							<div class="row align-items-center">
								<div class="col-lg-12">
									<div class="row mb-3">
										<div class="col-md-3">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Version</small> <span>1.2</span></h3>
										</div>
										<div class="col-md-5 d-none">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Build</small>--</h3>
										</div>
										<div class="col-md-4">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Updated on</small> 2023-02-16</h3>
										</div>
									</div>
									<div class="mb-4">
										<h2><strong>Firmware update Best practices:</strong></h2>
										<ul class="list-txt">
											<li>USB Drive 2,4,8,16GB, formatted to FAT32</li>
											<li>The firmware file will be a compressed .zip (it needs to be extracted)</li>
											<li>Do not add the .zip file to your USB drive</li>
											<li>Extract the .zip file so you get a folder with 2 .bin files</li>
											<li>Copy both .bin files to your usb drive</li>
											<li>Attach usb drive to Action 5 monitor</li>
											<li>Use fully charged battery</li>
											<li>Do not power off during update</li>
											<li>Do not change the file names</li>
											<li>Note older version of firmware before update</li>
										</ul>
									</div>
									<div class="btn-col">
										<button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#OS-Modalv-11">Learn More</button>
										<a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/actionos/RO6V1.2.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >Download</a>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 mb-lg-5">
					<h2><strong>SmallHD</strong> Action OS V1.0</h2>
					<div class="card mb-5">
						<div class="card-body">
							<div class="row align-items-center">
								<div class="col-lg-12">
									<div class="row mb-3">
										<div class="col-md-3">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Version</small> <span>1.0</span></h3>
										</div>
										<div class="col-md-5 d-none">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Build</small>--</h3>
										</div>
										<div class="col-md-4">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Updated on</small> 2022-11-02</h3>
										</div>
									</div>
									<div class="mb-4">
										<h2><strong>Firmware update Best practices:</strong></h2>
										<ul class="list-txt">
											<li>USB Drive 2,4,8,16GB, formatted to FAT32</li>
											<li>The firmware file will be a compressed .zip (it needs to be extracted)</li>
											<li>Do not add the .zip file to your USB drive</li>
											<li>Extract the .zip file so you get a folder with 2 .bin files</li>
											<li>Copy both .bin files to your usb drive</li>
											<li>Attach usb drive to Action 5 monitor</li>
											<li>Use fully charged battery</li>
											<li>Do not power off during update</li>
											<li>Do not change the file names</li>
											<li>Note older version of firmware before update</li>
										</ul>
									</div>
									<div class="btn-col">
										<button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#OS-Modalv-10">Learn More</button>
										<a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/actionos/actionOS-V1.0.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >Download</a>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 mb-lg-5">
					<h2><strong>SmallHD</strong> Action OS V.9</h2>
					<div class="card mb-5">
						<div class="card-body">
							<div class="row align-items-center">
								<div class="col-lg-12">
									<div class="row mb-3">
										<div class="col-md-3">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Version</small> <span>0.9</span></h3>
										</div>
										<div class="col-md-5 d-none">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Build</small>--</h3>
										</div>
										<div class="col-md-4">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Updated on</small> 2022-07-14</h3>
										</div>
									</div>
									<div class="mb-4">
										<h2><strong>Firmware update Best practices:</strong></h2>
										<ul class="list-txt">
											<li>USB Drive 2,4,8,16GB, formatted to FAT32</li>
											<li>The firmware file will be a compressed .zip (it needs to be extracted)</li>
											<li>Do not add the .zip file to your USB drive</li>
											<li>Extract the .zip file so you get a folder with 2 .bin files</li>
											<li>Copy both .bin files to your usb drive</li>
											<li>Attach usb drive to Action 5 monitor</li>
											<li>Use fully charged battery</li>
											<li>Do not power off during update</li>
											<li>Do not change the file names</li>
											<li>Note older version of firmware before update</li>
										</ul>
									</div>
									<div class="btn-col">
										<button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#OS-Modalv-9">Learn More</button>
										<a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/actionos/Action5-V0.9.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >Download</a>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 mb-lg-5">
					<h2><strong>SmallHD</strong> Action OS V.7</h2>
					<div class="card mb-5">
						<div class="card-body">
							<div class="row align-items-center">
								<div class="col-lg-12">
									<div class="row mb-3">
										<div class="col-md-3">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Version</small> <span>0.7</span></h3>
										</div>
										<div class="col-md-5 d-none">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Build</small>--</h3>
										</div>
										<div class="col-md-4">
											<h3 class="text-dark"><small class="d-block mb-3 text-black-50">Updated on</small> 2022-06-16</h3>
										</div>
									</div>
									<div class="mb-4">
										<h2><strong>Firmware update Best practices:</strong></h2>
										<ul class="list-txt">
											<li>USB Drive 2, 4, 8, 16GB formatted to FAT32.</li>
											<li>The firmware file will be a compressed .zip (it needs to be extracted).</li>
											<li>Do not add the .zip file to your USB drive.</li>
											<li>Extract the .zip file so you get a folder with 2 .bin files.</li>
											<li>Copy both .bin files to your usb drive</li>
											<li>Attach usb drive to Action 5 monitor</li>
											<li>Use fully charged battery</li>
											<li>Do not power off during update</li>
											<li>Do not change the file names</li>
											<li>Note older version of firmware before update</li>
										</ul>
									</div>
									<div class="btn-col">
										<button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#OS-Modal">Learn More</button>
										
										<a
                      target="_blank"
                      onClick={() =>
                        props.directdownloadlink(
                          "https://downloads.smallhd.com/dev/backend-node-server/firmware/actionos/Action5-Ver-0.7-220616.zip"
                        )
                      }
                      className="btn btn-primary text-white"
                    >Download</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="row">
				<div className="col-lg-12 mb-lg-5">
					<h2>Action <strong>OS</strong></h2>
					<div className="card  mb-5 ">
						<div className="card-body">
							<div className="row align-items-center">
								<div className="col-lg-12">
									{/* <div className="row mb-3">
										<div className="col-md-3">
											<h3 className="text-dark"><small className="d-block mb-3 text-black-50">Version</small> <span>4.8.3</span></h3>
										</div>
										<div className="col-md-5 d-none">
											<h3 className="text-dark"><small className="d-block mb-3 text-black-50">Build</small>--</h3>
										</div>
										<div className="col-md-4">
											<h3 className="text-dark"><small className="d-block mb-3 text-black-50">Updated on</small> 2022-03-29</h3> 
										</div>
									</div> */}
									<div className='mb-3'>
										<h2><strong>Details:</strong></h2>
										<p>This firmware is intended for use with the Action 5 Monitor from SmallHD. It is only compatible with Action 5.</p>
										<h2><strong>Updates:</strong></h2>
										<p>This firmware version will add compatibility with the Black Magic Pocket Cam 6k</p>
									</div>
									<div className="btn-col">
										{/*<a href="#" className="btn btn-outline-dark">Know more</a>*/}
										<a target="_blank" onClick={() => props.directdownloadlink("https://downloads.smallhd.com/dev/backend-node-server/firmware/actionos/BSYR6V.bin")} className="btn btn-primary text-white">Download</a>
										<a target="_blank" href="https://guide.smallhd.com/a/1552082-action-5-quick-start-guide" className="btn btn-outline-dark">
											Action 5 Quick Start Guide <i class="far fa-external-link ml-1" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="col-lg-4  mb-lg-5">
				<h2><strong>DCI-P3</strong> <span>Calibration Procedure</span></h2>
					<div className="card ">
						<div className="card-body">
							<div className="row mb-3">								
								<div className="col-md-8">
									<h3 className="text-dark"><small className="d-block mb-3 text-black-50">Updated on</small> 03rd Mar, 2022</h3>
								</div>
							</div>
							<h2><strong>DSMC3™ RED® Touch 7.0" LCD</strong></h2>
							<p>DSMC3™ RED® Touch monitors now ship calibrated to the DCI-P3 Color Space by default. Existing monitors now have a path to
switch from a REC 709 ...</p>
							<div className="btn-col">
								<button type="button" className="btn btn-outline-dark d-block mb-2 w-100" data-toggle="modal" data-target="#DCI">Know more</button>
								<div className=" d-flex justify-content-between ">
									<a target="_blank" href="https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/A07D8007_DCI-P3_DSMC3_Monitor_Calibration_LUT.3dl" className="btn btn-primary col"><i className="far fa-download"></i> <small>A07D8007</small></a>
									<a target="_blank" href="https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/40702052_DCI-P3_DSMC3_Monitor_Calibration_LUT.3dl" className="btn btn-primary col mr-0"><i className="far fa-download"></i> <small>40702052</small></a>
								</div>
							</div>							
						</div>
					</div>
				</div> */}
			</div>

			<div className="modal fade beta-firmware-modal" id="OS-Modalv-11" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-lg">
		  <div className="modal-content">
			<div className="modal-header">
			  <h2 className="modal-title" id="exampleModalLabel"><strong>SmallHD Action OS </strong> <span>v1.2</span> </h2>
			  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
			
            <div className="modal-body">
			<div className="mb-4">
					<h2><strong>Firmware update Best practices:</strong></h2>					
					<ul className="list-txt">
						<li>USB Drive 2,4,8,16GB, formatted to FAT32</li>
						<li>The firmware file will be a compressed .zip (it needs to be extracted)</li>
						<li>Do not add the .zip file to your USB drive</li>
						<li>Extract the .zip file so you get a folder with 2 .bin files</li>
						<li>Copy both .bin files to your usb drive</li>
						<li>Attach usb drive to Action 5 monitor</li>
						<li>Use fully charged battery</li>
						<li>Do not power off during update</li>
						<li>Do not change the file names</li>
						<li>Note older version of firmware before update</li>
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Firmware Compatibility:</strong></h2>
					<ul className="list-txt">
						<li>Action 5 Monitor Only</li>						
					</ul>
				</div>				
				
				<div className="mb-4">
					<h2><strong>Recommended Practices:</strong></h2>					
					<ul className="list-txt">
						<li>Connect third party external recorders directly downstream of your source device (i.e. camera), not downstream of the monitor</li>				
					</ul>
				</div>
				
			</div>
            <div className="modal-footer">
				<a
                	target="_blank"
					onClick={() =>
					props.directdownloadlink(
						"https://downloads.smallhd.com/dev/backend-node-server/firmware/actionos/RO6V1.2.zip"
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
	<div className="modal fade beta-firmware-modal" id="OS-Modalv-10" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-lg">
		  <div className="modal-content">
			<div className="modal-header">
			  <h2 className="modal-title" id="exampleModalLabel"><strong>SmallHD Action OS </strong> <span>v1.0</span> </h2>
			  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
			
            <div className="modal-body">
			<div className="mb-4">
					<h2><strong>Firmware update Best practices:</strong></h2>					
					<ul className="list-txt">
						<li>USB Drive 2,4,8,16GB, formatted to FAT32</li>
						<li>The firmware file will be a compressed .zip (it needs to be extracted)</li>
						<li>Do not add the .zip file to your USB drive</li>
						<li>Extract the .zip file so you get a folder with 2 .bin files</li>
						<li>Copy both .bin files to your usb drive</li>
						<li>Attach usb drive to Action 5 monitor</li>
						<li>Use fully charged battery</li>
						<li>Do not power off during update</li>
						<li>Do not change the file names</li>
						<li>Note older version of firmware before update</li>
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Firmware Compatibility:</strong></h2>
					<ul className="list-txt">
						<li>Action 5 Monitor Only</li>						
					</ul>
				</div>				
				<div className="mb-4">
					<h2><strong>New Features:</strong></h2>					
					<ul className="list-txt">
						<li>Add press & hold function to access a tools deep menu settings
							<ul>
								<li>When you press and hold on  a specific tool on the main screen it will shortcut you to the advanced settings for that tool.</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Recommended Practices:</strong></h2>					
					<ul className="list-txt">
						<li>Connect third party external recorders directly downstream of your source device (i.e. camera), not downstream of the monitor</li>				
					</ul>
				</div>
				
			</div>
            <div className="modal-footer">
				<a
                	target="_blank"
					onClick={() =>
					props.directdownloadlink(
						"https://downloads.smallhd.com/dev/backend-node-server/firmware/actionos/actionOS-V1.0.zip"
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
	<div className="modal fade beta-firmware-modal" id="OS-Modalv-9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-lg">
		  <div className="modal-content">
			<div className="modal-header">
			  <h2 className="modal-title" id="exampleModalLabel"><strong>SmallHD Action OS </strong> <span>v0.9</span> </h2>
			  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
			
            <div className="modal-body">
				<div className="mb-4">
					<h2><strong>Firmware update Best practices:</strong></h2>					
					<ul className="list-txt">
						<li>USB Drive 2,4,8,16GB, formatted to FAT32</li>
						<li>The firmware file will be a compressed .zip (it needs to be extracted)</li>
						<li>Do not add the .zip file to your USB drive</li>
						<li>Extract the .zip file so you get a folder with 2 .bin files</li>
						<li>Copy both .bin files to your usb drive</li>
						<li>Attach usb drive to Action 5 monitor</li>
						<li>Use fully charged battery</li>
						<li>Do not power off during update</li>
						<li>Do not change the file names</li>
						<li>Note older version of firmware before update</li>
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Firmware Compatibility:</strong></h2>
					<ul className="list-txt">
						<li>Action 5 Monitor Only</li>						
					</ul>
				</div>				
				<div className="mb-4">
					<h2><strong>New Features:</strong></h2>					
					<ul className="list-txt">
						<li>Decreased Boot Time</li>
						<li>Added Auto Power on when battery connected</li>
						<li>Decreased how long you need to hold the power button to turn on the monitor</li>
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Recommended Practices:</strong></h2>					
					<ul className="list-txt">
						<li>Connect third party external recorders directly downstream of your source device (i.e. camera), not downstream of the
monitor</li>				
					</ul>
				</div>
				
			</div>
            <div className="modal-footer">
				<a
                	target="_blank"
					onClick={() =>
					props.directdownloadlink(
						"https://downloads.smallhd.com/dev/backend-node-server/firmware/actionos/Action5-V0.9.zip"
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
	<div className="modal fade beta-firmware-modal" id="OS-Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-lg">
		  <div className="modal-content">
			<div className="modal-header">
			  <h2 className="modal-title" id="exampleModalLabel"><strong>SmallHD Action OS </strong> <span>v0.7</span> </h2>
			  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
			
            <div className="modal-body">
			<div className="mb-4">
					<h2><strong>Firmware update Best practices:</strong></h2>					
					<ul className="list-txt">
						<li>USB Drive 2,4,8,16GB, formatted to FAT32</li>
						<li>The firmware file will be a compressed .zip (it needs to be extracted).</li>
						<li>Do not add the .zip file to your USB drive.</li>
						<li>Extract the .zip file so you get a folder with 2 .bin files.</li>
						<li>Copy both .bin files to your usb drive</li>
						<li>Attach usb drive to Action 5 monitor</li>
						<li>Use fully charged battery</li>
						<li>Do not power off during update</li>
						<li>Do not change the file names</li>
						<li>Note older version of firmware before update</li>
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Firmware Compatibility:</strong></h2>
					<ul className="list-txt">
						<li>Action 5 Monitor Only</li>						
					</ul>
				</div>				
				<div className="mb-4">
					<h2><strong>New Features:</strong></h2>					
					<ul className="list-txt">
						<li>Updated Look interface
						<ul>
							<li>You can now store 3 luts in monitor without leaving the USB drive attached</li>
							<li>Renamed Built in LUTS</li>
						</ul>
						</li>
						<li>Added Battery Meter</li>
						<li>Added Menu Flip option</li>
						<li>HDMI input display now shows Resolution and Framerate</li>
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Bug Fixes:</strong></h2>					
					<ul className="list-txt">
						<li>Resolves HDMI connectivity issues</li>
						<li>Fixes Tap & Drag behavior
							<ul>
								<li>No longer activates functions while sliding finger</li>
							</ul>
						</li>
						<li>Corrected image contrast (Black Level Color Bug) </li>
						<li>Improvements to menu styling</li>
						<li>Pixel Zoom Behavior Improved
							<ul>
								<li>Tapping pixel zoom window now moves view</li>
								<li>Tap and drag behavior fixed</li>
							</ul>
						</li>						
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Recommended Practices:</strong></h2>
					<ul className="list-txt">
						<li>Connect third party external recorders directly downstream of your source device (i.e. camera), not downstream of the monitor</li>
					</ul>
				</div>
			</div>
            <div className="modal-footer">	

				<a
                	target="_blank"
					onClick={() =>
					props.directdownloadlink(
						"https://downloads.smallhd.com/dev/backend-node-server/firmware/actionos/Action5-Ver-0.7-220616.zip"
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

			{/* <div className="modal fade beta-firmware-modal" id="RedModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-lg">
		  <div className="modal-content">
			<div className="modal-header">
			  <h2 className="modal-title" id="exampleModalLabel"><strong>DSMC3™ RED® Touch 7.0" LCD Firmware  </strong> <span>v4.8.0</span> </h2>
			  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
			
            <div className="modal-body">
			<div className="mb-4">
					<h2><strong>Features Added:</strong></h2>					
					<ul className="list-txt">
						<li>Added support for V-RAPTOR™ FW 1.2 features</li>
						<li>Added support for ProRes recording</li>
						<li>Added support for frame-accurate timecode</li>
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Improvements and Alterations:</strong></h2>
					<ul className="list-txt">
						<li>RED® Touch now shows pre-record state</li>
						<li>TC, GEN, SYNC now visible at all times</li>
						<li>RED® Touch now supports UI Lock</li>
						<li>RED® Touch now supports custom FPS, Shutter, WB values</li>
						<li>RED® Touch no longer monitors internal RTC, pulls date/time from V-RAPTOR™</li>
					</ul>
				</div>				
				<div className="mb-4">
					<h2><strong>Bugs Fixed:</strong></h2>					
					<ul className="list-txt">
						<li>Fixed potential erratic touchscreen behavior</li>
						<li>Fixed battery meter behavior</li>
					</ul>
				</div>
				<div className="mb-4">
					<h2><strong>Recommended Practices:</strong></h2>					
					<ul className="list-txt">
						<li>Connect third party external recorders directly downstream of your source device (i.e. camera), not downstream of the monitor</li>
					</ul>
				</div>
			</div>
            <div className="modal-footer">
			  <a target="_blank" href="https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V4.8.0.zip" className="btn btn-primary">Download</a>
			</div>
		  </div>
		</div>
	  </div>            */}
		</>
	)
}

export default actionosfirmware
