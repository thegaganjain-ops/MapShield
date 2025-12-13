class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                    background-color: rgba(255, 255, 255, 0.8);
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                
                .navbar-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #0ea5e9;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }
                
                .nav-link {
                    color: #1f2937;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: #0ea5e9;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #0ea5e9;
                    transition: width 0.3s;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                
                .whatsapp-btn {
                    background-color: #25D366;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: all 0.3s;
                }
                
                .whatsapp-btn:hover {
                    background-color: #128C7E;
                    transform: translateY(-2px);
                }
                
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .nav-links {
                        display: none;
                    }
                }
            </style>
            
            <div class="navbar-container">
                <a href="/" class="logo">
                    <i data-feather="shield"></i>
                    MapShield
                </a>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                
                <div class="nav-links">
                    <a href="/" class="nav-link">Home</a>
                    <a href="services.html" class="nav-link">Services</a>
                    <a href="pricing.html" class="nav-link">Pricing</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                    <a href="https://wa.me/7987108907" class="whatsapp-btn">
                        <i data-feather="message-circle"></i>
                        WhatsApp Me
                    </a>
                </div>
            </div>
            
            <script>
                feather.replace();
            </script>
        `;
        
        // Mobile menu toggle functionality
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = navLinks.style.display === 'flex';
            navLinks.style.display = isExpanded ? 'none' : 'flex';
            mobileMenuBtn.innerHTML = isExpanded 
                ? '<i data-feather="menu"></i>' 
                : '<i data-feather="x"></i>';
            feather.replace();
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
