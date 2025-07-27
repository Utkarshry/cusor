<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CuSoR | Cultivating Curiosity, Sharing Skills, Advancing Research</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Chosen Palette: CuSoR Official (Deep Blue, Light Gray, Vibrant Orange, Teal) -->
    <!-- Application Structure Plan: A single-page, long-scrolling narrative application. The structure guides the user from understanding their problem (VoC), discovering the solution (CuSoR's dual offerings), exploring tangible opportunities via an interactive dashboard, and finally being convinced by social proof and a clear process. This flow is designed to maximize engagement and conversion by making the abstract concept of a research community tangible and explorable. -->
    <!-- Visualization & Content Choices: Report Info: Student need for tangible projects/skills -> Goal: Allow exploration -> Viz/Method: Interactive filterable card grid (HTML/JS) -> Justification: Makes the offering concrete and user-driven. Report Info: Need to show community vibrancy -> Goal: Visualize activity -> Viz/Method: Bar Chart (Chart.js) of monthly events -> Justification: Simple, clear visual proof of an active community. Report Info: Common questions -> Goal: Answer doubts without clutter -> Viz/Method: Accordion (HTML/JS) -> Justification: Improves UX by keeping the layout clean. -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F7FFF7;
            color: #1C3D5A;
        }
        .hero-bg {
            background-color: #1C3D5A;
            background-image: linear-gradient(rgba(28, 61, 90, 0.8), rgba(28, 61, 90, 0.8)), url('https://placehold.co/1920x1080/102a43/ffffff?text=Collaborative+Research');
            background-size: cover;
            background-position: center;
        }
        .text-shadow {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
        }
        .nav-link {
            transition: color 0.3s ease, transform 0.3s ease;
        }
        .nav-link:hover {
            color: #FF6B35;
            transform: translateY(-2px);
        }
        .cta-button {
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px -10px rgba(255, 107, 53, 0.5);
        }
        .section-title {
            position: relative;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: #4ECDC4;
            border-radius: 2px;
        }
        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            height: 300px;
            max-height: 400px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 400px;
            }
        }
    </style>
</head>
<body class="antialiased">

    <header id="header" class="bg-[#1C3D5A]/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-white">CuSoR</a>
            <div class="hidden md:flex items-center space-x-8">
                <a href="#about" class="text-white nav-link">About</a>
                <a href="#opportunities" class="text-white nav-link">Opportunities</a>
                <a href="#how-it-works" class="text-white nav-link">Process</a>
                <a href="#community" class="text-white nav-link">Community</a>
                <a href="#faq" class="text-white nav-link">FAQ</a>
            </div>
            <a href="#join" class="hidden md:block bg-[#FF6B35] text-white font-bold py-2 px-6 rounded-full cta-button">Join Now</a>
            <button id="mobile-menu-button" class="md:hidden text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </nav>
        <div id="mobile-menu" class="hidden md:hidden">
            <a href="#about" class="block text-white text-center py-2 px-4 hover:bg-[#4ECDC4]">About</a>
            <a href="#opportunities" class="block text-white text-center py-2 px-4 hover:bg-[#4ECDC4]">Opportunities</a>
            <a href="#how-it-works" class="block text-white text-center py-2 px-4 hover:bg-[#4ECDC4]">Process</a>
            <a href="#community" class="block text-white text-center py-2 px-4 hover:bg-[#4ECDC4]">Community</a>
            <a href="#faq" class="block text-white text-center py-2 px-4 hover:bg-[#4ECDC4]">FAQ</a>
            <a href="#join" class="block text-white text-center py-4 px-4 bg-[#FF6B35] font-bold">Join Now</a>
        </div>
    </header>

    <main>
        <section id="hero" class="hero-bg min-h-screen flex items-center">
            <div class="container mx-auto px-6 text-center text-white">
                <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-shadow">Your Research Journey Starts Here.</h1>
                <h2 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-shadow"><span class="text-[#4ECDC4]">Collaborate</span>, <span class="text-[#FF6B35]">Innovate</span>, and <span class="text-white">Grow</span>.</h2>
                <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-shadow">CuSoR is the vibrant undergraduate community where you transform academic curiosity into impactful research and practical, in-demand skills. We bridge the gap between theory and application.</p>
                <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#opportunities" class="bg-[#FF6B35] text-white font-bold py-3 px-8 rounded-full cta-button text-lg w-full sm:w-auto">Explore Opportunities</a>
                    <a href="#how-it-works" class="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full cta-button text-lg w-full sm:w-auto">Learn Our Process</a>
                </div>
            </div>
        </section>

        <section id="about" class="py-20">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Tired of Feeling Lost in Research? You're Not Alone.</h2>
                    <p class="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">Many students feel the pressure to build a strong profile but hit roadblocks. You might have "zero research experience" and feel like you're "floundering" when trying to find meaningful projects. It's frustrating when you're "largely left alone without any guidance" on how to even begin.</p>
                </div>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="text-center md:text-left">
                        <h3 class="text-2xl md:text-3xl font-bold text-[#1C3D5A] mb-4">CuSoR: Your Launchpad for Impactful Research & Practical Skills.</h3>
                        <p class="text-gray-600 mb-4">We demystify undergraduate research, making it accessible and impactful. We connect you with bite-sized pieces of real-world projects, providing the structured guidance and well-defined pathways you need to gain genuine experience.</p>
                        <p class="text-gray-600">Beyond research, CuSoR is a dynamic skill-sharing hub. Learn or teach practical, in-demand skills—from data analysis and coding to scientific writing and presentation design. It's where you find peers to collaborate with and grow together.</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/600x400/4ecdc4/1C3D5A?text=Team+Collaboration" alt="Students collaborating on a project" class="rounded-lg shadow-xl w-full">
                    </div>
                </div>
            </div>
        </section>
        
        <section id="opportunities" class="py-20 bg-gray-100">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Explore Live Opportunities</h2>
                    <p class="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">This is where your journey begins. Explore active research projects and skill-sharing sessions you can join right now. Use the filters to find the perfect fit for your interests and goals.</p>
                </div>

                <div class="mb-8">
                    <div id="filters" class="flex flex-wrap justify-center gap-2 md:gap-4">
                        <button class="filter-btn active bg-[#1C3D5A] text-white py-2 px-4 rounded-full" data-filter="all">All</button>
                        <button class="filter-btn bg-white text-[#1C3D5A] py-2 px-4 rounded-full" data-filter="research">Research Projects</button>
                        <button class="filter-btn bg-white text-[#1C3D5A] py-2 px-4 rounded-full" data-filter="skills">Skill Exchanges</button>
                        <button class="filter-btn bg-white text-[#1C3D5A] py-2 px-4 rounded-full" data-filter="ai-ml">AI/ML</button>
                        <button class="filter-btn bg-white text-[#1C3D5A] py-2 px-4 rounded-full" data-filter="lifesci">Life Sciences</button>
                        <button class="filter-btn bg-white text-[#1C3D5A] py-2 px-4 rounded-full" data-filter="writing">Writing</button>
                    </div>
                </div>

                <div id="opportunity-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                </div>
            </div>
        </section>

        <section id="how-it-works" class="py-20">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Your Path to Research & Skill Mastery</h2>
                    <p class="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">Joining our community is straightforward. We've streamlined the process to get you connected and contributing without unnecessary hurdles.</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#4ECDC4]/30" aria-hidden="true"></div>
                    <div class="relative grid md:grid-cols-4 gap-12">
                        <div class="text-center">
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-[#4ECDC4] text-white rounded-full text-2xl font-bold mb-4">1</div>
                            <h3 class="text-xl font-bold mb-2">Explore</h3>
                            <p class="text-gray-600">Browse our curated Project Bank and Skill Exchange listings to find opportunities that spark your interest.</p>
                        </div>
                        <div class="text-center">
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-[#4ECDC4] text-white rounded-full text-2xl font-bold mb-4">2</div>
                            <h3 class="text-xl font-bold mb-2">Connect</h3>
                            <p class="text-gray-600">Apply to a project or join a session. You'll be matched with a Mentorship Pod for consistent guidance.</p>
                        </div>
                        <div class="text-center">
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-[#4ECDC4] text-white rounded-full text-2xl font-bold mb-4">3</div>
                            <h3 class="text-xl font-bold mb-2">Contribute</h3>
                            <p class="text-gray-600">Engage in hands-on research and develop practical skills. Every step builds your profile and earns you skill badges.</p>
                        </div>
                        <div class="text-center">
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-[#4ECDC4] text-white rounded-full text-2xl font-bold mb-4">4</div>
                            <h3 class="text-xl font-bold mb-2">Showcase</h3>
                            <p class="text-gray-600">Transform your work into presentations and publications. Celebrate your progress and inspire others.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="community" class="py-20 bg-gray-100">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">A Vibrant, Active Community</h2>
                     <p class="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">CuSoR is more than just projects; it's a thriving ecosystem of workshops, seminars, and social events. See our community's activity at a glance.</p>
                </div>
                <div class="bg-white p-4 sm:p-8 rounded-xl shadow-lg">
                    <div class="chart-container">
                        <canvas id="eventsChart"></canvas>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" class="py-20">
            <div class="container mx-auto px-6 max-w-4xl">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Frequently Asked Questions</h2>
                </div>
                <div class="space-y-4">
                    <div class="accordion-item bg-white rounded-lg shadow-md">
                        <button class="accordion-header w-full text-left p-6 flex justify-between items-center">
                            <span class="text-lg font-semibold text-[#1C3D5A]">What if I have zero research experience?</span>
                            <span class="accordion-icon text-2xl text-[#FF6B35]">+</span>
                        </button>
                        <div class="accordion-content px-6 pb-4 text-gray-600">
                            <p>That's exactly why CuSoR exists! We specialize in providing entry-level, "bite-sized" research tasks and structured mentorship to help you get started. Our community is built to guide you from the very beginning.</p>
                        </div>
                    </div>
                    <div class="accordion-item bg-white rounded-lg shadow-md">
                        <button class="accordion-header w-full text-left p-6 flex justify-between items-center">
                            <span class="text-lg font-semibold text-[#1C3D5A]">How much time commitment is expected?</span>
                            <span class="accordion-icon text-2xl text-[#FF6B35]">+</span>
                        </button>
                        <div class="accordion-content px-6 pb-4 text-gray-600">
                            <p>It varies by project. We offer a range of opportunities, from short-term tasks that might take a few hours a week to more involved projects. Each opportunity listing clearly states the expected time commitment so you can find something that fits your schedule.</p>
                        </div>
                    </div>
                    <div class="accordion-item bg-white rounded-lg shadow-md">
                        <button class="accordion-header w-full text-left p-6 flex justify-between items-center">
                            <span class="text-lg font-semibold text-[#1C3D5A]">What tangible outcomes can I expect?</span>
                            <span class="accordion-icon text-2xl text-[#FF6B35]">+</span>
                        </button>
                        <div class="accordion-content px-6 pb-4 text-gray-600">
                            <p>Our goal is to help you build a strong profile. Outcomes include verifiable project contributions for your CV, digital skill badges, presentation experience at our internal showcases, and clear pathways to co-authoring papers or presenting at external conferences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="join" class="py-20 bg-[#1C3D5A] text-white">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Undergraduate Journey?</h2>
                <p class="text-lg max-w-2xl mx-auto mb-8">Don't let the challenges hold you back. CuSoR provides the opportunities, mentorship, and community you need to thrive. Your journey to impact and mastery starts here.</p>
                <a href="#" class="bg-[#FF6B35] text-white font-bold py-4 px-10 rounded-full cta-button text-xl">Join the CuSoR Community Now</a>
            </div>
        </section>
    </main>

    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-6 text-center">
            <p class="font-bold text-xl mb-4">CuSoR</p>
            <div class="flex justify-center space-x-6 mb-6">
                <a href="#" class="hover:text-[#FF6B35]">About</a>
                <a href="#" class="hover:text-[#FF6B35]">Projects</a>
                <a href="#" class="hover:text-[#FF6B35]">Events</a>
                <a href="#" class="hover:text-[#FF6B35]">Contact</a>
            </div>
            <p class="text-gray-400">&copy; 2025 CuSoR. All Rights Reserved.</p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('bg-[#1C3D5A]');
                    header.classList.remove('bg-[#1C3D5A]/80');
                } else {
                    header.classList.remove('bg-[#1C3D5A]');
                    header.classList.add('bg-[#1C3D5A]/80');
                }
            });

            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            const opportunities = [
                { id: 1, title: 'Sentiment Analysis of Social Media Data', category: 'research', field: 'ai-ml', desc: 'Contribute to an ongoing project analyzing public sentiment on Twitter. Requires basic Python knowledge.' },
                { id: 2, title: 'Peer-led Workshop: Intro to Python for Data Science', category: 'skills', field: 'ai-ml', desc: 'Learn the fundamentals of Python, Pandas, and Matplotlib from a fellow student. No prior experience needed.' },
                { id: 3, title: 'Protein Folding Simulation Analysis', category: 'research', field: 'lifesci', desc: 'Assist in analyzing simulation data to understand protein structures. Great for bio/chem majors.' },
                { id: 4, title: 'Workshop: Mastering Scientific Writing', category: 'skills', field: 'writing', desc: 'Improve your academic writing. Learn to structure papers, write clear abstracts, and cite sources correctly.' },
                { id: 5, title: 'Image Recognition Model for Cell Identification', category: 'research', field: 'ai-ml', desc: 'Help train and test a CNN model to identify different types of cells from microscope images.' },
                { id: 6, title: 'Gene Expression Data Analysis', category: 'research', field: 'lifesci', desc: 'Analyze RNA-seq data to identify differentially expressed genes. Experience with R is a plus.' },
                { id: 7, title: 'Skill Swap: GitHub for Beginners', category: 'skills', field: 'ai-ml', desc: 'Learn version control basics. Master commits, branches, and pull requests in this hands-on session.' },
                { id: 8, title: 'Lit Review: Advances in CRISPR Technology', category: 'research', field: 'lifesci', desc: 'Contribute to a comprehensive literature review on the latest CRISPR-Cas9 applications.' },
                { id: 9, title: 'Workshop: Crafting a Winning Conference Abstract', category: 'skills', field: 'writing', desc: 'Learn how to summarize your research effectively to get accepted at conferences.' },
            ];

            const opportunityGrid = document.getElementById('opportunity-grid');
            const filters = document.getElementById('filters');

            function displayOpportunities(filteredOpportunities) {
                opportunityGrid.innerHTML = '';
                filteredOpportunities.forEach(opp => {
                    const card = document.createElement('div');
                    card.className = 'opportunity-card bg-white rounded-lg shadow-lg p-6 flex flex-col transition-transform duration-300 hover:scale-105';
                    card.setAttribute('data-category', opp.category);
                    card.setAttribute('data-field', opp.field);
                    
                    let categoryLabel = opp.category === 'research' ? 'Research Project' : 'Skill Exchange';
                    let categoryColor = opp.category === 'research' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';

                    card.innerHTML = `
                        <div class="flex-grow">
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${categoryColor} last:mr-0 mr-1">
                                ${categoryLabel}
                            </span>
                            <h3 class="text-xl font-bold my-3 text-[#1C3D5A]">${opp.title}</h3>
                            <p class="text-gray-600 mb-4">${opp.desc}</p>
                        </div>
                        <button class="mt-auto bg-[#FF6B35] text-white font-bold py-2 px-4 rounded-full self-start cta-button">Learn More</button>
                    `;
                    opportunityGrid.appendChild(card);
                });
            }

            filters.addEventListener('click', (e) => {
                if (e.target.classList.contains('filter-btn')) {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active', 'bg-[#1C3D5A]', 'text-white'));
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.add('bg-white', 'text-[#1C3D5A]'));
                    
                    e.target.classList.add('active', 'bg-[#1C3D5A]', 'text-white');
                    e.target.classList.remove('bg-white', 'text-[#1C3D5A]');

                    const filter = e.target.getAttribute('data-filter');
                    const filtered = opportunities.filter(opp => {
                        if (filter === 'all') return true;
                        return opp.category === filter || opp.field === filter;
                    });
                    displayOpportunities(filtered);
                }
            });

            displayOpportunities(opportunities);

            const accordionItems = document.querySelectorAll('.accordion-item');
            accordionItems.forEach(item => {
                const header = item.querySelector('.accordion-header');
                const content = item.querySelector('.accordion-content');
                const icon = item.querySelector('.accordion-icon');

                header.addEventListener('click', () => {
                    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
                    
                    accordionItems.forEach(i => {
                        i.querySelector('.accordion-content').style.maxHeight = '0px';
                        i.querySelector('.accordion-icon').textContent = '+';
                    });

                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        icon.textContent = '-';
                    }
                });
            });
            
            const ctx = document.getElementById('eventsChart').getContext('2d');
            const eventsChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Workshops & Seminars',
                        data: [5, 7, 10, 8, 12, 9, 15, 11, 13, 10, 16, 18],
                        backgroundColor: 'rgba(78, 205, 196, 0.6)',
                        borderColor: 'rgba(78, 205, 196, 1)',
                        borderWidth: 1,
                        borderRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'Community Events per Month',
                            font: {
                                size: 18,
                                family: 'Inter'
                            },
                            color: '#1C3D5A'
                        },
                        tooltip: {
                            backgroundColor: '#1C3D5A',
                            titleFont: { family: 'Inter' },
                            bodyFont: { family: 'Inter' },
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                             grid: {
                                color: '#e0e0e0'
                            },
                            ticks: {
                                color: '#1C3D5A'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#1C3D5A'
                            }
                        }
                    }
                }
            });

        });
    </script>
</body>
</html>

