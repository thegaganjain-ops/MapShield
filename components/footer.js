class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #111827;
                    color: #f3f4f6;
                    padding: 4rem 2rem;
                    font-size: 0.875rem;
                }
                
                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .footer-description {
                    color: #9ca3af;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                
                .footer-heading {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: white;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-link:hover {
                    color: #3b82f6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                
                .social-link {
                    color: #9ca3af;
                    transition: color 0.3s;
                }
                
                .social-link:hover {
                    color: #3b82f6;
                }
                
                .copyright {
                    max-width: 1280px;
                    margin: 3rem auto 0;
                    padding-top: 2rem;
                    border-top: 1px solid #374151;
                    text-align: center;
                    color: #6b7280;
                }
            </style>
            
            <div class="footer-container">
                <div>
                    <a href="/" class="footer-logo">
                        <i data-feather="shield"></i>
                        GoogleSavior
                    </a>
                    <p class="footer-description">
                        We specialize in getting suspended Google Business Profiles reinstated quickly 
                        and legally with 95% success rate.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="instagram"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="https://wa.me/7987108907" class="social-link">
                            <i data-feather="message-circle"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Services</h3>
                    <div class="footer-links">
                        <a href="services.html#reinstatement" class="footer-link">GBP Reinstatement</a>
                        <a href="services.html#verification" class="footer-link">Verification Support</a>
                        <a href="services.html#optimization" class="footer-link">Optimization</a>
                        <a href="services.html#management" class="footer-link">Monthly Management</a>
                        <a href="services.html#seo" class="footer-link">Local SEO</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Company</h3>
                    <div class="footer-links">
                        <a href="about.html" class="footer-link">About Us</a>
                        <a href="privacy.html" class="footer-link">Privacy Policy</a>
                        <a href="terms.html" class="footer-link">Terms of Service</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Contact</h3>
                    <div class="footer-links">
                        <a href="mailto:contact@mapshield.in" class="footer-link">contact@mapshield.in</a>
                        <a href="tel:+917987108907" class="footer-link">+91- 7987108907</a>
                        <a href="https://wa.me/7987108907" class="footer-link">WhatsApp: 7987108907</a>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} MapShield Services. All rights reserved.
            </div>
            
            <script>
                feather.replace();
            </script>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
