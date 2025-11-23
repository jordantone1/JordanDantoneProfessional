// Jordan Dantone Portfolio - Main JavaScript
console.log("Loaded main.js v2");
// 🔗 Google Apps Script Web App URL (must match your active deployment)
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyfIDqiffDy3_DI7tAeybJINobalEpWUizneygwHY8vUQwMuVA5UPuAtNyuNmCnBjZe/exec";

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
    return [
        {
            id: 1,
            title: 'Enterprise Network Infrastructure Setup. 360LGX',
            description:
                'Complete setup of office network infrastructure including core switches, routers, and firewall. The office was running solely off a couple Xfinity WiFi routers, and I came in and completely set up the entire network - This included Cisco Switches and Routers, as well as a Juniper Firewall.',
            technologies: [
                'Cisco',
                'Juniper',
                'VLANs',
                'OSPF',
                'BGP',
                'Segmentation',
                'Policy Based Routing',
                'Encryption',
                'Network Security'
            ],
            image: 'https://i.ibb.co/C3RJbTR8/360original.png',
            type: 'Infrastructure',
            status: 'Completed',
            date: '2022-02-03'
        },
        {
            id: 2,
            title: 'Enterprise Network Infrastructure Upgrade. 360LGX',
            description:
                'I led a full-scale modernization of the company's network infrastructure, transitioning from a fragmented mix of Juniper and Cisco hardware to a unified Fortinet ecosystem. The goal was to improve visibility, simplify management, and strengthen security across on-prem operations. I coordinated and executed the replacement of the Juniper SRX firewall with a FortiGate appliance and supervised the rollout of new Fortinet switches. This included redesigning VLANs, implementing segmentation, planning routing changes, and managing configuration, testing, and cutover windows. I also built Power BI monitoring dashboards and automated diagnostic workflows, resulting in a cleaner, more secure, and more stable network.',
            technologies: [
                'Fortinet',
                'FortiGate',
                'Cisco',
                'Juniper',
                'VLANs',
                'Segmentation',
                'Routing',
                'Power BI',
                'Policy Based Routing',
                'Encryption',
                'Network Security'
            ],
            image: 'https://i.ibb.co/G3TFYLT0/360new.png',
            type: 'Infrastructure',
            status: 'In Progress',
            date: '2025-12-15'
        },
        {
            id: 3,
            title: 'SLA Monitoring & Ticketing Platform Implementation. 360LGX',
            description:
                'To streamline operations and project oversight, I implemented Monday.com as the central system for ticketing, project tracking, and SLA management across the organization. I built custom boards, automated workflows, and integrated reporting dashboards using Power BI to track uptime, incident response times, and long-term trends. This transformation improved cross-team coordination by over 70% and gave leadership real-time visibility into performance metrics for projects ranging from $400K to $1.5M. It also gave my team a more structured framework for managing IT operations and escalations.',
            technologies: ['Monday.com', 'PowerBI', 'Incident + SLA Management'],
            image: 'https://i.ibb.co/kgcbz55z/m.png',
            type: 'Monitoring',
            status: 'Completed',
            date: '2024-04-25'
        },
        {
            id: 4,
            title: 'IoT Security & Camera Network Segmentation. 360LGX',
            description:
                'I designed and deployed an isolated network architecture for a facility-wide IP camera system. Instead of allowing IoT traffic to mix with business systems, I built a dedicated camera VLAN and enforced ACLs to restrict east–west movement. I mapped device placement, ensured correct switchport configs, and planned physical connectivity for every camera. This became the standard segmentation model for future IoT rollouts.',
            technologies: ['VLANs', 'ACLs', 'IP Cameras', 'Layer 2 Security'],
            image: 'https://i.ibb.co/twW7YDxW/iot.png',
            type: 'Security',
            status: 'Completed',
            date: '2023-06-15'
        },
        {
            id: 5,
            title: 'Network Automation, Security & Monitoring Enhancements. 360LGX',
            description:
                'I developed Python and PowerShell tools that checked security for users, automated gateway checks, DNS validation, and device reachability tests, reducing incident response times. I also deployed Splunk and Power BI dashboards, configured syslog/SNMP ingestion, and built alerts for interface errors and security events, improving visibility across the network. I utilize AI tools like SelectorAI packet tracer to also diagnose and troubleshoot issues.',
            technologies: [
                'Python',
                'PowerShell',
                'Splunk',
                'SNMP',
                'Syslog',
                'Power BI',
                'SelectorAI'
            ],
            image: 'https://i.ibb.co/8gF5X8HB/lab7-3.png',
            type: 'Infrastructure',
            status: 'Completed',
            date: '2021-05-10'
        },
        {
            id: 6,
            title: 'Hybrid Cloud Connectivity & Azure Integration. AOT',
            description:
                'I supported hybrid cloud operations using Azure VNets, Azure AD, and site-to-site VPN tunnels linking on-prem and cloud environments. I partnered with infrastructure and security teams to validate routing, identity integrations, and uptime for customer-facing systems.',
            technologies: [
                'Azure VNet',
                'Azure AD',
                'Site-to-Site VPN',
                'Hybrid Cloud'
            ],
            image: 'https://i.ibb.co/666n969/Azure-hybrid-environment.png',
            type: 'Infrastructure',
            status: 'Completed',
            date: '2021-05-10'
        },
        {
            id: 7,
            title: 'Cloud Secure Web Gateway Deployment. AOT',
            description:
                'I led the deployment of Forcepoint's secure web gateway and integrated it with Azure AD to enforce identity-aware filtering. I validated user–group mappings, coordinated change windows, and monitored behavior using Splunk to fine-tune policies.',
            technologies: ['Forcepoint', 'Azure AD', 'Cloud Security', 'Splunk'],
            image: 'https://i.ibb.co/SXLbWxZj/Force.png',
            type: 'Security',
            status: 'Completed',
            date: '2021-09-30'
        },
        {
            id: 8,
            title: 'Lab - Setting up a multi site network with DHCP.',
            description:
                'Created a large multi-site network (3 sites) and configured DHCP for sites, IP configurations, and confirming all servers and routers can \'speak\' to one another.',
            technologies: ['Cisco Packet Tracer', 'Routers', 'Switches', 'IP Configuration', 'DHCP Site Configuration'],
            image: 'https://i.ibb.co/XxrZQZsN/Cisco-Lab-network1.png',
            type: 'Infrastructure',
            status: 'Completed',
            date: '2024-04-10'
        }
    ];
}

    loadSkills() {
    return [
        // Networking
        {
            id: 1,
            name: 'Cisco Networking',
            level: 90,
            category: 'Networking'
        },
        {
            id: 2,
            name: 'VLAN Segmentation & Trunking',
            level: 90,
            category: 'Networking'
        },
        {
            id: 3,
            name: 'Network Topology Design',
            level: 88,
            category: 'Networking'
        },
        {
            id: 4,
            name: 'Subnetting & IP Addressing',
            level: 90,
            category: 'Networking'
        },
        {
            id: 5,
            name: 'Routing & Switching',
            level: 90,
            category: 'Networking'
        },
        {
            id: 6,
            name: 'Wireless Networks',
            level: 75,
            category: 'Networking'
        },
        {
            id: 7,
            name: 'Configuration',
            level: 92,
            category: 'Networking'
        },

        // Security
        {
            id: 8,
            name: 'Network Security',
            level: 85,
            category: 'Security'
        },
        {
            id: 9,
            name: 'Firewall Management',
            level: 85,
            category: 'Security'
        },
        {
            id: 10,
            name: 'VPN Configuration (IPsec / SSL)',
            level: 80,
            category: 'Security'
        },
        {
            id: 11,
            name: 'Security Logging & Monitoring',
            level: 80,
            category: 'Security'
        },

        // Cloud / Systems / Tools
        {
            id: 12,
            name: 'Cloud Architecture (Azure)',
            level: 70,
            category: 'Cloud'
        },
        {
            id: 13,
            name: 'Linux Administration',
            level: 70,
            category: 'Systems'
        },
        {
            id: 14,
            name: 'Windows Administration',
            level: 80,
            category: 'Systems'
        },
        {
            id: 15,
            name: 'Network Monitoring Tools',
            level: 82,
            category: 'Tools'
        },

        // Programming / Automation
        {
            id: 16,
            name: 'Python Automation',
            level: 80,
            category: 'Programming'
        },
        {
            id: 17,
            name: 'PowerShell',
            level: 77,
            category: 'Programming'
        },
        {
            id: 18,
            name: 'Bash',
            level: 70,
            category: 'Programming'
        },

        // Project Management
        {
            id: 19,
            name: 'Project Planning & Scheduling',
            level: 95,
            category: 'Project Management'
        },
        {
            id: 20,
            name: 'Scope Definition & Control',
            level: 95,
            category: 'Project Management'
        },
        {
            id: 21,
            name: 'Requirements Gathering',
            level: 95,
            category: 'Project Management'
        },
        {
            id: 22,
            name: 'Risk Identification & Mitigation',
            level: 95,
            category: 'Project Management'
        },
        {
            id: 23,
            name: 'Stakeholder Management',
            level: 95,
            category: 'Project Management'
        },
        {
            id: 24,
            name: 'Vendor Management',
            level: 95,
            category: 'Project Management'
        },
        {
            id: 25,
            name: 'Communication',
            level: 95,
            category: 'Project Management'
        },
        {
            id: 26,
            name: 'Documentation',
            level: 95,
            category: 'Project Management'
        },
        {
            id: 27,
            name: 'Project Lifecycle Management (Waterfall, Agile, Hybrid)',
            level: 95,
            category: 'Project Management'
        }
    ];
}

   
    // Animation Setup
    initializeAnimations() {
        // Typewriter effect for hero text
        if (document.getElementById('typed-name')) {
            new Typed('#typed-name', {
                strings: [
                    'Network Engineer & Project Management Professional',
                    'Jordan Dantone'
                ],
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
                strings: [
                    'Network Infrastructure Specialist',
                    'Project Management Expert',
                    'Security Specialist'
                ],
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
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach((el) => {
            observer.observe(el);
        });
    }

    // Network Background Animation
    initializeNetworkBackground() {
        if (document.getElementById('network-canvas')) {
            // eslint-disable-next-line no-undef
            new p5((p) => {
                let nodes = [];
                let connections = [];
                let particles = [];

                p.setup = () => {
                    const canvas = p.createCanvas(
                        p.windowWidth,
                        p.windowHeight
                    );
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
                            const dist = p.dist(
                                nodes[i].x,
                                nodes[i].y,
                                nodes[j].x,
                                nodes[j].y
                            );
                            if (dist < 150) {
                                connections.push({
                                    from: nodes[i],
                                    to: nodes[j],
                                    alpha: p.map(
                                        dist,
                                        0,
                                        150,
                                        100,
                                        0
                                    )
                                });
                            }
                        }
                    }

                    // Draw connections
                    connections.forEach((conn) => {
                        p.stroke(66, 153, 225, conn.alpha);
                        p.strokeWeight(1);
                        p.line(
                            conn.from.x,
                            conn.from.y,
                            conn.to.x,
                            conn.to.y
                        );
                    });

                    // Update and draw nodes
                    nodes.forEach((node) => {
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

        const featuredProjects = this.projects;
        container.innerHTML = '';

        featuredProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            container.appendChild(projectCard);
        });

        // Animate project cards
        // eslint-disable-next-line no-undef
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
        card.className =
            'project-card glass-card rounded-2xl overflow-hidden fade-in';
        card.style.animationDelay = `${index * 0.2}s`;

        card.innerHTML = `
            <div class="relative">
                <img src="${project.image}" alt="${project.title}"
                     class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4">
                    <span class="tech-badge">${project.type}</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-3">
                    ${project.title}
                </h3>
                <p class="text-gray-400 mb-4 line-clamp-3">
                    ${project.description}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies
                        .slice(0, 3)
                        .map((tech) => `<span class="tech-badge">${tech}</span>`)
                        .join('')}
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">
                        ${project.status}
                    </span>
                    <button
                        onclick="portfolio.viewProject('${project.id}')"
                        class="text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                        View Details →
                    </button>
                </div>
            </div>
        `;

        return card;
    }

    // Instead of redirecting to another page, show modal
    viewProject(projectId) {
        const project = this.projects.find(
            (p) => String(p.id) === String(projectId)
        );
        if (project) {
            this.showProjectModal(project);
        }
    }

    showProjectModal(project) {
        const modal = document.getElementById('project-modal');
        const content = document.getElementById('project-modal-content');
        if (!modal || !content) return;

        const statusClass = `status-${project.status
            .toLowerCase()
            .replace(' ', '-')}`;

        content.innerHTML = `
            <div class="p-8">
                <div class="flex justify-between items-start mb-6">
                    <h2 class="orbitron text-3xl font-bold text-white">
                        ${project.title}
                    </h2>
                    <button
                        onclick="portfolio.closeProjectModal()"
                        class="text-gray-400 hover:text-white text-3xl leading-none"
                    >
                        &times;
                    </button>
                </div>

                <div class="grid lg:grid-cols-2 gap-8">
                    <div>
                        <img
                            src="${project.image}"
                            alt="${project.title}"
                            class="w-full h-64 object-cover rounded-lg mb-6"
                        />

                        <div class="space-y-4 text-gray-300">
                            <div>
                                <h3 class="text-lg font-semibold text-cyan-400 mb-2">
                                    Project Details
                                </h3>
                                <p><strong>Type:</strong> ${project.type}</p>
                                <p class="flex items-center">
                                    <strong class="mr-1">Status:</strong>
                                    <span class="flex items-center">
                                        <span class="status-indicator ${statusClass}"></span>
                                        ${project.status}
                                    </span>
                                </p>
                                <p>
                                    <strong>Timeline:</strong>
                                    ${this.formatDate(project.date)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6 text-gray-300">
                        <div>
                            <h3 class="text-lg font-semibold text-cyan-400 mb-3">
                                Description
                            </h3>
                            <p class="leading-relaxed">
                                ${project.description}
                            </p>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-cyan-400 mb-3">
                                Technologies Used
                            </h3>
                            <div class="flex flex-wrap gap-2">
                                ${project.technologies
                                    .map(
                                        (tech) =>
                                            `<span class="tech-badge">${tech}</span>`
                                    )
                                    .join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeProjectModal() {
        const modal = document.getElementById('project-modal');
        if (!modal) return;
        modal.classList.remove('show');
        document.body.style.overflow = '';
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
                    <span class="text-white font-medium">
                        ${skill.name}
                    </span>
                    <span class="text-cyan-400 text-sm">
                        ${skill.level}%
                    </span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress"
                         data-width="${skill.level}%"
                         style="width: 0%"></div>
                </div>
            `;
            container.appendChild(skillBar);

            // Animate skill bars
            setTimeout(() => {
                const progressBar =
                    skillBar.querySelector('.skill-progress');
                progressBar.style.width = `${skill.level}%`;
            }, index * 200);
        });
    }

    renderSkillsChart() {
        const chartContainer = document.getElementById('skills-chart');
        if (!chartContainer) return;

        // eslint-disable-next-line no-undef
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
                indicator: this.skills.map((skill) => ({
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
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: this.skills.map(
                                (skill) => skill.level
                            ),
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
                        }
                    ]
                }
            ]
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
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (!href || href === '#') return;
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
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

        // Project modal close on outside click
        const projectModal = document.getElementById('project-modal');
        if (projectModal) {
            projectModal.addEventListener('click', (e) => {
                if (e.target.id === 'project-modal') {
                    this.closeProjectModal();
                }
            });
        }

        // Close modal on Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeProjectModal();
            }
        });

        // Window resize handler
        window.addEventListener('resize', () => {
            // Hide mobile menu on resize to desktop
            if (window.innerWidth >= 768 && mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

   // Replace your existing handleContactForm method with this updated version:

    // Handle Contact Form Submit
    handleContactForm(e) {
        const formData = new FormData(e.target);

        const payload = new URLSearchParams();
        payload.append('name',    formData.get('name')    || '');
        payload.append('company', formData.get('company') || '');
        payload.append('role',    formData.get('role')    || '');
        payload.append('email',   formData.get('email')   || '');
        payload.append('mobile',  formData.get('mobile')  || '');
        payload.append('message', formData.get('message') || '');

        console.log('Submitting contact form payload:', payload.toString());

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';

        fetch(WEB_APP_URL, {
            method: 'POST',
            body: payload
        })
        .then(async (response) => {
            const text = await response.text();
            console.log('Raw response from Apps Script:', text);

            let data;
            try {
                data = JSON.parse(text);
            } catch (err) {
                throw new Error('Response was not valid JSON. Check Apps Script deployment & access settings.');
            }

            if (data.status === 'success') {
                this.showNotification(
                    'Message sent successfully! I will get back to you soon.',
                    'success'
                );
                e.target.reset();

                submitBtn.textContent = '✓ Sent!';
                submitBtn.style.backgroundColor = '#48bb78';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                }, 2000);
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        })
        .catch((err) => {
            console.error('Form submit error:', err);
            this.showNotification(
                'There was an error sending your message. Please try again or email me directly at jordantone1@gmail.com',
                'error'
            );

            submitBtn.textContent = '✗ Error';
            submitBtn.style.backgroundColor = '#ed8936';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
            }, 2000);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        });
    }

    // Simple toast notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className =
            'fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full';

        if (type === 'success') {
            notification.classList.add('bg-green-600', 'text-white');
        } else if (type === 'error') {
            notification.classList.add('bg-red-600', 'text-white');
        } else {
            notification.classList.add('bg-blue-600', 'text-white');
        }

        notification.textContent = message;
        document.body.appendChild(notification);

        // Slide in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);

        // Slide out + remove
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }


    // Utility Methods
    formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (Number.isNaN(date.getTime())) return dateString;
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

// Export for use in other pages / tests (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioManager;
}
