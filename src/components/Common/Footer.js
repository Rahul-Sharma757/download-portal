import React, { Component } from 'react';

export default class Header extends Component {

    constructor(props) {
		super(props);   			
		this.hanldeourBrandClick = this.hanldeourBrandClick.bind(this);
		
    }

    hanldeourBrandClick() {        
        document.getElementById("vitec-list").classList.toggle('show');					
        /*$('.vitec-list').slideToggle();
		$('.vitec-sites').toggleClass('active');
        $('.vitec-list').toggleClass('open');
        $('html,body').animate({scrollTop: $('.vitec-list').offset().top},500);*/
    }

    render() {

        return (
			<>
            <footer className="footer">
			<div className="container">
				<div className="row justify-content-between">
						<div className="col-lg-9">
								<div className="row">
									<div className="col-md-auto">
								<h2>The Company</h2>
								<ul className="nav flex-column">
									<li><a target="_blank" href="https://www.youtube.com/watch?v=vP3ZEZMbj2I">About SmallHD</a></li>
									<li><a target="_blank" href="https://www.vitecgroup.com/about-us/at-a-glance/">About Vitec Group</a></li>
								</ul>
							</div>
									<div className="col-md-auto">
								<h2>Customer</h2>
								<ul className="nav flex-column">
									<li><a href="https://guide.smallhd.com/">Online User Guide</a></li>
									<li><a href="https://smallhd.com/pages/resellers">Resellers</a></li>
									<li><a href="https://support.smallhd.com/hc/en-us">Contact Us</a></li>
								</ul>
							</div>
									<div className="col-md-auto">
								<h2>Site Terms</h2>
								<ul className="nav flex-column">
									<li><a href="https://smallhd.com/pages/privacy-policy">Privacy Policy</a></li>
									<li><a href="https://smallhd.com/pages/terms-and-conditions-of-sale">Terms and Conditions of Sale</a></li>
									<li><a href="https://smallhd.com/pages/standard-limited-warranty-and-exclusions">Warranty</a></li>
									<li><a href="https://smallhd.com/pages/return-policy">Return Policy</a></li>
								</ul>
							</div>
								</div>
						</div>
						<div className="col-lg-3">
							<h2>Follow Us</h2>
							<ul className="footer-social-media d-flex">
								<li><a target="_blank" href="https://www.instagram.com/smallhd/"><i className="footer-social-media--icon fab fa-instagram" aria-hidden="true"></i></a></li>
								<li><a target="_blank" href="https://www.facebook.com/SmallHD"><i className="footer-social-media--icon fab fa-facebook" aria-hidden="true"></i></a></li>
								<li><a target="_blank" href="https://twitter.com/SmallHD"><i className="footer-social-media--icon fab fa-twitter" aria-hidden="true"></i></a></li>
								<li><a target="_blank" href="https://www.youtube.com/user/SmallHDVideos"><i className="footer-social-media--icon fab fa-youtube" aria-hidden="true"></i></a></li>
								<li><a target="_blank" href="https://vimeo.com/smallhd"><i className="footer-social-media--icon fab fa-vimeo" aria-hidden="true"></i></a></li>
							</ul>
							<p className="phone">Phone: (919) 439-2166</p>
						</div>
				</div>
			</div>
		</footer>
		<link href="https://cdn.shopify.com/s/files/1/0097/6004/7167/t/23/assets/vitec-endorsement-banner.css" rel="stylesheet" type="text/css" media="all" />
		<div className="vitec-section">
    <div className="collapsible-section">
        <div className="container">
            <div className="vitec-list hide" id="vitec-list"><a className="close-vitec-menu"></a>
                <div className="cols-container">
                    <div className="cols col-large-2 ">
                        <h2>Capture.<span className="yellow">Share.</span></h2></div>
                    <div className="cols col-large-10">
                        <div className="yellow-separator">
                            <div className="cols-container">
                                <ul className="vitec-menu">
                                <li>
                                    <h3>Supports</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="http://www.avenger-grip.com/">Avenger</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.gitzo.com/">Gitzo</a></li>
                                        <li><a target="_blank" rel="noopener" href="https://joby.com/">JOBY</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.manfrotto.com/">Manfrotto</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.ocon.com/">OConnor</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.sachtler.com/">Sachtler</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.vinten.com/">Vinten</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Camera accessories</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="http://www.manfrotto.com/">Manfrotto</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.ocon.com/">OConnor</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.teradek.com/">Teradek</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.teradek.com/collections/teradek-rt">Teradek RT</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.woodencamera.com/">Wooden Camera</a></li>
                                    </ul>
                                </li>
                                <li>
                                </li><li>
                                        <h3>Audio capture</h3>
                                        <ul>
                                            <li><a target="_blank" rel="noopener" href="https://rycote.com/">Rycote</a></li>
                                        </ul>
                                    </li>
                                <li>
                                    <h3>Bags</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="http://www.lowepro.com/">Lowepro</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.manfrotto.com/">Manfrotto</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.geographicbags.com/">National Geographic</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.sachtler.com/">Sachtler</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Mobile power</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="http://www.antonbauer.com/">Anton/Bauer</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Video transmission systems</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="http://www.paralinx.net/">Paralinx</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.teradek.com/">Teradek</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Prompters</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="http://www.autocue.com/">Autocue</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.autoscript.tv/">Autoscript</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Motion Control</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="https://syrp.co/">Syrp</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Distribution, rental &amp; services</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="http://www.cameracorps.co.uk/">Camera Corps</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.thecamerastore.co.uk/">The Camera Store</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Lighting and controls</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="https://www.manfrotto.com/colorama">Colorama</a></li>
                                        <li><a target="_blank" rel="noopener" href="https://www.manfrotto.com/lastolite">Lastolite</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.litepanels.com">Litepanels</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.manfrotto.com/">Manfrotto</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Robotic camera systems</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="http://www.cameracorps.co.uk/">Camera Corps</a></li>
                                        <li><a target="_blank" rel="noopener" href="http://www.vinten.com/">Vinten</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Monitors</h3>
                                    <ul>
                                        <li><a target="_blank" rel="noopener" href="http://www.smallhd.com/">SmallHD</a></li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
			<div className="container">
				<div className="vitec">
					<div className="vitec-logo">
					<span className="logo-image"></span>
					</div>
					<div className="vitec-sites visible-only-desktop" onClick={this.hanldeourBrandClick}>Our Brands
					</div>
				</div>
			</div>
		</div>
		</>
        );

    }

}
