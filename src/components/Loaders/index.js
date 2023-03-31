
export class FirmwareLoader extends React.Component {
	constructor(props) {
	super(props);
	}

 
	
    render() {
        const loaderRepeat = 2
        return (
				<div>	
                        {Array.apply(null, { length: loaderRepeat }).map((e, i) => (
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
                        )
                        )}                            
                        </div>
        );

    }

}


