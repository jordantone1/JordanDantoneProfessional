// Jordan Dantone Portfolio - Main JavaScript
class PortfolioManager {
    constructor() {
        this.projects = this.loadProjects();
        this.skills = this.loadSkills();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.loadFeaturedProjects();
        this.loadSkillsOverview();
        this.initializeNetworkBackground();
        this.setupScrollAnimations();
    }

    // Data Management
    loadProjects() {
        const defaultProjects = [
            {
                id: 1,
                title: "Enterprise Network Infrastructure Setup",
                description: "Complete setup of office network infrastructure including core switches, routers, and firewall. The office was running solely off a couple Xfinity WiFi routers, and I came in and completely set up the entire network - This included Cisco Switches and Routers, as well as a Juniper Firewall.",
                technologies: ["Cisco", "Juniper", "VLANs", "OSPF", "BGP", "Segmentation", "Policy Based Routing", "Encryption", "Network Security"],
                image: "resources/network-topology.jpg",
                type: "Infrastructure",
                status: "Completed",
                date: "2022-02-03"
            },
            {
                id: 2,
                title: "Enterprise Network Infrastructure Upgrade",
                description: "Complete overhaul of office network infrastructure including core switches, routers, and firewall. Replaced existing Cisco Switches & Routers with Fortinet hardware, and also replaced Juniper firewall with a Fortinet Fortigate (using it for routing as well). Copied original configurations and then added extra security and configurations for better bandwith + automation.",
                technologies: ["Cisco", "Juniper", "Fortinet", "FortiGate", "VLANs", "OSPF", "BGP", "Segmentation", "Policy Based Routing", "Encryption", "Network Security"],
                image: "resources/network-topology.jpg",
                type: "Infrastructure",
                status: "Ongoing",
                date: "Completion will be 2025-12-15"
            },
            {
                id: 3,
                title: "Data Center Network Optimization",
                description: "Optimized data center network performance through traffic analysis, QoS implementation, and bandwidth management. Achieved 40% improvement in throughput.",
                technologies: ["Data Center", "QoS", "Load Balancing", "Monitoring"],
                image: "resources/server-room.jpg",
                type: "Optimization",
                status: "In Progress",
                date: "2024-04-10"
            },
            {
                id: 4,
                title: "Network Monitoring Dashboard",
                description: "Developed general tier 1-2 network monitoring solution with real-time alerts, performance metrics, and automated reporting capabilities. This paired with smart use of AI has helped me monitor the network and solve issues fairly quickly.",
                technologies: ["Nagios", "SelectorAI", "Python", "APIs"],
                image: "resources/monitoring.jpg",
                type: "Monitoring",
                status: "Completed",
                date: "2024-04-25"
            },
            {
                id: 5,
                title: "Fiber Optic Network Deployment",
                description: "Led the deployment of high-speed fiber optic network connecting multiple office locations. Includes splicing, testing, and documentation.",
                technologies: ["Fiber Optic", "Splicing", "OTDR", "Documentation"],
                image: "resources/cables.jpg",
                type: "Infrastructure",
                status: "Completed",
                date: "2023-12-15"
            },
            {
                id: 6,
                title: "SD-WAN Implementation",
                description: "Implemented Software-Defined WAN solution to improve network agility and reduce operational costs. Centralized management and policy enforcement.",
                technologies: ["SD-WAN", "Routing", "Policy", "Automation"],
                image: "resources/network-topology.jpg",
                type: "SD-WAN",
                status: "In Progress",
                date: "2024-05-01"
            }
        ];
        
        return JSON.parse(localStorage.getItem('portfolio_projects')) || defaultProjects;
    }

    loadSkills() {
        const defaultSkills = [
            { name: "Cisco Networking", level: 95, category: "Networking" },
            { name: "VLAN Segmentation & Trunking", level: 95, category: "Networking" },
            { name: "Network Topology Design", level: 95, category: "Networking" },
            { name: "Subnetting & IP Addressing", level: 95, category: "Networking" },
            { name: "Routing & Switching", level: 95, category: "Networking" },
            { name: "Network Security", level: 90, category: "Security" },
            { name: "VPN Configuration (IPsec / SSL)", level: 85, category: "Security" },
            { name: "Security Logging & Monitoring", level: 80, category: "Security" },
            { name: "Cloud Architecture", level: 70, category: "Cloud" },
            { name: "Python Automation", level: 80, category: "Programming" },
            { name: "PowerShell level: 77, category: "Programming" },
            { name: "Bash", level: 70, category: "Programming" },
            { name: "Linux Administration", level: 70, category: "Systems" },
            { name: "Windows Administration", level: 80, category: "Systems" },
            { name: "Configuration", level: 97, category: "Networking" },
            { name: "Wireless Networks", level: 72, category: "Networking" },
            { name: "Firewall Management", level: 90, category: "Security" },
            { name: "Network Monitoring", level: 85, category: "Tools" },
            { name: "Coordination", level: 99, category: "Project Managemet" },
            { name: "Communication", level: 99, category: "Project Managemet" },
            { name: "Vendor Management", level: 99, category: "Project Managemet" },
            { name: "Stakeholder Management", level: 99, category: "Project Managemet" },
            { name: "Detailed Planning", level: 99, category: "Project Managemet" },
            { name: "Documentation", level: 99, category: "Project Managemet" },
            { name: "Coordination", level: 99, category: "Project Managemet" },
            { name: "Project Planning & Scheduling", level: 99, category: "Project Managemet" },
            { name: "Scope Definition & Control", level: 99, category: "Project Managemet" },
            { name: "Requirements Gathering", level: 99, category: "Project Managemet" },
            { name: "Risk Identification & Mitigation", level: 99, category: "Project Managemet" },
            { name: "Project Lifecycle Management (Waterfall, Agile, Hybrid)", level: 99, category: "Project Managemet" },
        ];
        
        return JSON.parse(localStorage.getItem('portfolio_skills')) || defaultSkills;
    }

    saveProjects() {
        localStorage.setItem('portfolio_projects', JSON.stringify(this.projects));
    }

    saveSkills() {
        localStorage.setItem('portfolio_skills', JSON.stringify(this.skills));
    }

    // Animation Setup
    initializeAnimations() {
        // Typewriter effect for hero text
        if (document.getElementById('typed-name')) {
            new Typed('#typed-name', {
                strings: ['Network Engineer & Project Management Professional', 'Jordan Dantone'],
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
                loop: false,
                showCursor: true,
                cursorChar: '|'
            });
        }

        if (document.getElementById('typed-title')) {
            new Typed('#typed-title', {
                strings: ['Network Infrastructure Specialist', 'Project Management Expert', 'Security Specialist'],
                typeSpeed: 80,
                backSpeed: 40,
                backDelay: 3000,
                loop: true,
                showCursor: false
            });
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    // Network Background Animation
    initializeNetworkBackground() {
        if (document.getElementById('network-canvas')) {
            new p5((p) => {
                let nodes = [];
                let connections = [];
                let particles = [];

                p.setup = () => {
                    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                    canvas.parent('network-canvas');
                    
                    // Create nodes
                    for (let i = 0; i < 50; i++) {
                        nodes.push({
                            x: p.random(p.width),
                            y: p.random(p.height),
                            vx: p.random(-0.5, 0.5),
                            vy: p.random(-0.5, 0.5),
                            size: p.random(3, 8)
                        });
                    }
                    
                    // Create particles
                    for (let i = 0; i < 20; i++) {
                        particles.push({
                            x: p.random(p.width),
                            y: p.random(p.height),
                            vx: p.random(-1, 1),
                            vy: p.random(-1, 1),
                            life: 255
                        });
                    }
                };

                p.draw = () => {
                    p.clear();
                    
                    // Update and draw connections
                    connections = [];
                    for (let i = 0; i < nodes.length; i++) {
                        for (let j = i + 1; j < nodes.length; j++) {
                            let dist = p.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
                            if (dist < 150) {
                                connections.push({
                                    from: nodes[i],
                                    to: nodes[j],
                                    alpha: p.map(dist, 0, 150, 100, 0)
                                });
                            }
                        }
                    }
                    
                    // Draw connections
                    connections.forEach(conn => {
                        p.stroke(66, 153, 225, conn.alpha);
                        p.strokeWeight(1);
                        p.line(conn.from.x, conn.from.y, conn.to.x, conn.to.y);
                    });
                    
                    // Update and draw nodes
                    nodes.forEach(node => {
                        node.x += node.vx;
                        node.y += node.vy;
                        
                        // Bounce off edges
                        if (node.x < 0 || node.x > p.width) node.vx *= -1;
                        if (node.y < 0 || node.y > p.height) node.vy *= -1;
                        
                        // Draw node
                        p.fill(0, 212, 255, 200);
                        p.noStroke();
                        p.ellipse(node.x, node.y, node.size);
                    });
                    
                    // Update and draw particles
                    particles.forEach((particle, index) => {
                        particle.x += particle.vx;
                        particle.y += particle.vy;
                        particle.life -= 2;
                        
                        if (particle.life <= 0) {
                            particles[index] = {
                                x: p.random(p.width),
                                y: p.random(p.height),
                                vx: p.random(-1, 1),
                                vy: p.random(-1, 1),
                                life: 255
                            };
                        }
                        
                        p.fill(0, 212, 255, particle.life);
                        p.noStroke();
                        p.ellipse(particle.x, particle.y, 2);
                    });
                };

                p.windowResized = () => {
                    p.resizeCanvas(p.windowWidth, p.windowHeight);
                };
            });
        }
    }

    // Project Management
    loadFeaturedProjects() {
        const container = document.getElementById('projects-grid');
        if (!container) return;

        const featuredProjects = this.projects.slice(0, 6);
        container.innerHTML = '';

        featuredProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            container.appendChild(projectCard);
        });

        // Animate project cards
        anime({
            targets: '.project-card',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutQuart'
        });
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card glass-card rounded-2xl overflow-hidden fade-in';
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.innerHTML = `
            <div class="relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4">
                    <span class="tech-badge">${project.type}</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-3">${project.title}</h3>
                <p class="text-gray-400 mb-4 line-clamp-3">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-badge">${tech}</span>`
                    ).join('')}
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">${project.status}</span>
                    <button onclick="portfolio.viewProject(${project.id})" class="text-cyan-400 hover:text-cyan-300 font-medium">
                        View Details →
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }

    viewProject(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (project) {
            // Create modal or redirect to projects page
            window.location.href = `projects.html#project-${projectId}`;
        }
    }

    // Skills Management
    loadSkillsOverview() {
        this.renderSkillsBars();
        this.renderSkillsChart();
    }

    renderSkillsBars() {
        const container = document.getElementById('skills-container');
        if (!container) return;

        container.innerHTML = '';
        
        this.skills.forEach((skill, index) => {
            const skillBar = document.createElement('div');
            skillBar.className = 'space-y-2';
            skillBar.innerHTML = `
                <div class="flex justify-between items-center">
                    <span class="text-white font-medium">${skill.name}</span>
                    <span class="text-cyan-400 text-sm">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" data-width="${skill.level}%" style="width: 0%"></div>
                </div>
            `;
            container.appendChild(skillBar);

            // Animate skill bars
            setTimeout(() => {
                const progressBar = skillBar.querySelector('.skill-progress');
                progressBar.style.width = skill.level + '%';
            }, index * 200);
        });
    }

    renderSkillsChart() {
        const chartContainer = document.getElementById('skills-chart');
        if (!chartContainer) return;

        const chart = echarts.init(chartContainer);
        
        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(45, 55, 72, 0.9)',
                borderColor: '#4299e1',
                textStyle: {
                    color: '#e2e8f0'
                }
            },
            radar: {
                indicator: this.skills.map(skill => ({
                    name: skill.name,
                    max: 100
                })),
                center: ['50%', '50%'],
                radius: '70%',
                axisLine: {
                    lineStyle: {
                        color: '#4299e1'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(66, 153, 225, 0.3)'
                    }
                },
                axisLabel: {
                    color: '#e2e8f0',
                    fontSize: 12
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: this.skills.map(skill => skill.level),
                    name: 'Skills',
                    areaStyle: {
                        color: 'rgba(0, 212, 255, 0.2)'
                    },
                    lineStyle: {
                        color: '#00d4ff',
                        width: 2
                    },
                    itemStyle: {
                        color: '#00d4ff'
                    }
                }]
            }]
        };

        chart.setOption(option);
        
        // Responsive chart
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }

    // Event Listeners
    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(e);
            });
        }

        // Window resize handler
        window.addEventListener('resize', () => {
            // Handle responsive adjustments
            if (window.innerWidth >= 768) {
                mobileMenu?.classList.add('hidden');
            }
        });
    }

    handleContactForm(e) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show success message
            this.showNotification('Message sent successfully!', 'success');
            e.target.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        if (type === 'success') {
            notification.classList.add('bg-green-600', 'text-white');
        } else if (type === 'error') {
            notification.classList.add('bg-red-600', 'text-white');
        } else {
            notification.classList.add('bg-blue-600', 'text-white');
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Utility Methods
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    generateId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio = new PortfolioManager();
});

// Export for use in other pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioManager;
}
