// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('sdg')
  this.field('tags')
  this.field('url')
  this.ref('id')
});

window.tags = []
window.sdg = []




index.add({
    title: "...through qualitative research tools that unlock financial needs and behavior in the context of rural resilience",
    content: "Qualitative research tools for understanding financial needs and behavior in the context of rural resilience\n\nWhat it does. These qualitative research tools use human-centered design and ethnography to structure interviews and focus groups to create personas to “put a face” to people who are typically viewed as beneficiaries, revealing deep explanatory insights into rural resilience and financial inclusion.\n\nValue proposition for the government/other partner. This suite of qualitative tools (i.e. interview guide, focus group guide, and village profile template) enables governments, local organizations, fintech startups and banks to more effectively design products and policies to help people live healthier financial lives.\n\nThe tools enable the understanding of different dimensions of communities’ experiences, highlighted below, through an ethnographic approach:\n\n\n  Livelihood and societal context;\n  Financial behavior and attitude towards formal and non-formal financial institutions;\n  Common and distinct hardships encountered by the communities, their impact and the tools used for adaptation and mitigation.\n\n\nWhy and when to use it. These research tools are most useful when you are either exploring the possibility of rolling out financial support programmes in service of a community or trying to determine the best way to do so. In either scenario, it is important to understand who you are designing for, what challenges they face, and what solutions and mechanisms they’re currently using to solve those challenges. To use this tool, it is essential to: 1) have existing connections with community organizations that can help engage people within the community and provide a safe space for the discussion to take place; 2) conduct preliminary consultations with practitioners and academics that have worked in this space before to contextualize the research questions and tools. In Egypt’s case, the team leveraged the existing strong NGO network from the small grants program. Once connected to the NGO, the team conducted an introductory call explaining clearly the objectives of the activities. After they agreed to support, the team made a visit to the NGO location to discuss in more detail the research learning question, create the village profile, and address any concerns anticipated by the NGO.\n\nKnown issues and troubleshooting. Conducting ethnographic research only makes sense if it is possible to influence and adapt the proposed interventions based on the learnings from the study. If it is not possible to change the implementation plan, then there is no need to question people and create a false sense of participation, which contributes to research fatigue. Additionally, when you do not have connections within the community, it is important to spend time and build trust.\n\nContext. Using these tools was the first step to better inform different activities and programs within UNDP (and for outside partners) on financial inclusion, specifically how it relates to rural resilience.\n\nThe tools emerged from the UNDP Egypt Accelerator Lab’s desire to understand what was happening in rural settings in terms of financial services and inclusion, and how this connected to rural resilience. In Egypt there is currently a heavy emphasis on rural development and financial inclusion. For example, there is a large government project focused on developing the poorest rural areas. However, there is little insight into how financial inclusion and rural resilience are related and through what channels financial tools can support the achievement of both goals.\n\nThe Lab had previously focused on agriculture and climate resilience for agriculture. But through conversations with financial institutions, financial inclusion emerged as an area of interest, and the lab decided to gain a deeper understanding of community contexts before moving forward with experiments and solutions and experiments.\n\nCost. The cost might vary from one region to the other. In the context of 2022 Egypt, it cost just under 10,000 USD.\n\n\n  A qualitative/human-centered design researcher (USD 9,300, for a UNV volunteer)\n  Rent a room or community space to run the interviews and focus groups (USD 60)\n  Transportation &amp; compensation for participants (USD 5/per person)\n  Transportation costs and accommodation for facilitating team (USD 150)\n\n\nPeople. At least two people are required but depending on the number of people participating and the timeline required to produce results, there could be more people involved.\n\n\n  One main researcher/facilitator and one supporting facilitator and note taker should be able to synthesize the information captured into personas and insights.\n  If the results will be shared with outside partners and teams, then a visual designer would be needed to translate the personas and insights into diagrams and illustrations.\n\n\nFocal point.\n\nAlik Mikaelian and Marwa Makhlouf.\n\nCountry, year, and language. Egypt, 2022, English.\n\nResources.\n\n\n  Final report. Read this report to understand how the research tools were used in the Egyptian context.\n  Village profile tool. Use this tool to understand the financial needs and behaviors of communities in your context.\n  In-depth Interview guide. Use this guide to collect qualitative insights on commmunities in your context through individual interviews.\n  Expense card. Use this resource to estiamte your expenses.\n  Focus group guide. Use this guide to collect qualitative insights on commmunities in your context through group conversations.\n\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/EGY.html",
    id: 0
});












index.add({
    title: "...through blockchain-based tracing of supply chain integrity",
    content: "A digital platform to improve supply-chain traceability\n\nWhat it does.  The eSpice Bazaar pilot is a digital platform prototype that uses blockchain to aggregate and trace information about the supply chain production of chili and turmeric in India. The purpose of the pilot was to develop blockchain architecture to ensure traceability on the eSpice Bazaar platform developed by the government and test its functionality.  During the pilot, the block chain application was developed, deployed via Amazon Web Services, and integrated with the eSpice Bazaar portal to serve as its quality assurance and traceability backend. Architecture was built to extend traceability beyond the farm level, and data from 2,942 farmers producing chili and turmeric in Andhra Pradesh were collected, uploaded to the platform, and tested for immutability and retrievability. The traceability function of the platform was then demonstrated to the Spices Board via a user-friendly QR code system – the QR code on the spices package or the end product when scanned traces the product through every step of value chain and all the way back to the farm from where it originates. While this tool is not financial in a strict sense, it does use a technology, the blockchain, developed and used mostly in a fintech context.\n\nValue proposition. Indian spice farmers often invest heavily in the planting and harvesting of spices, only to be forced to sell them at low prices, often to middlemen who take a percentage of the profit. The eSpice Bazaar pilot lays the groundwork for a blockchain-powered platform that will enable farmers to sell directly to buyers. The completed platform will eventually create traceability from harvest to trade, provide market access and better prices to farmers, deliver higher quality produce to traders, and introduce visibility, transparency, accountability, and sustainability into the spices value chain.\n\nWhy and when to use it. Traceability can help increase the value capture of poorly compensated producers in a value chain. However, the probability of successful implementation is increased when there are neutral intermediaries such as the UNDP to coordinate the pilot, source technical expertise (e.g., through a private sector company), and attract government support (e.g., the Spices Board of the Ministry of Commerce and Industry of India).\n\nKnown issues and troubleshooting. A multi-sided platform only works when all key stakeholders participate. For this solution to be viable, farmers, aggregators and processors, certification agencies and exporters would all have to use the platform. More specifically, farmers and farmers’ associations would have to be comfortable with the technology and have access to it. Similarly, exporters and processors may require incentives to use a platform that could reduce their market power. Finally, the platform would need to deliver traceability beyond the farm level to facilitate trade.\n\nContext. India is the largest producer and consumer of spices in the world, exporting $3B worth of goods annually, and trading $1B domestically, between 2020 and 2022.ii Spice farmers already had low visibility within the value chain, and during the pandemic, they were forced to sell through aggregators who fixed prices. Additionally, the rejection of Indian exports due to difficulty meeting food safety regulations about aflatoxins, pesticide, and hygiene, impacts the value of export and profitability of the value chain.iii To address this challenge, UNDP India, with funding from the Japan Cabinet Office (JCO), partnered with the Spices Board from the Ministry of Commerce and Industry, to run a pilot with 2,942 chili and turmeric farmers in Andhra Pradesh. The NEC Corporation (which developed the blockchain backend), farmer producer organizations, and traceability and value chain experts also contributed to the effort.\n\nCost. USD 115,000, primarily used for human resources (contracting companies and consultants to deliver services) and communication.\n\nPeople\n\n\n  Project lead. The project lead will coordinate all key stakeholders, secures key partners, and manages relationships with donors.\n  Standards organization with technical expertise in value chain traceability. This organization will provide implementation support by coordinating with stakeholders such as the government, farmers, traders, quality control labs testing produce, and exporters and traders.\n  Blockchain solution developer. The developer will build the blockchain architecture required to conduct quality assurance at each level of the spice value chain.\n  Nonprofit or civil society organization with community relationships. This organization will mobilize farmers and manage data collection.\n\n\nFocal point. Ravi Chandra\n\nCountry, year, and language: India, 2021 to 2022, English\n\nResources\n\n\n  UNDP Spice Blockchain Project Scope of Work and Approach. Use this resource for an overview of the pilot’s implementation, including an overview of the harvest to trade process, stakeholder workflow, process workflow solution architecture, scope of work, team structure, implementation plan, etc.\n  Blog post. Use this resource for a narrative account of how the eSpice Bazaar pilot developed.\n  YouTube video. Use this resource as a visual account of how the eSpice Bazaar pilot developed.\n\n\n",
    tags: null,
    sdg: null,
    url: "/7_Certify/IND.html",
    id: 1
});












index.add({
    title: "Help people save",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/3_Save/Index.html",
    id: 2
});












index.add({
    title: "... through financial bookkeeping micro courses to boost women entrepreneurs' business confidence",
    content: "Financial bookkeeping micro courses to boost women entrepreneurs’ business confidence\n\nWhat it does: This is a simple digital intervention that can assist entrepreneurs, especially women, to understand the core tenets of financial bookkeeping, a corner stone for both business success, and the confidence needed to make financial decisions, risks, and pitches. The intervention is built around behavioral research that followed 19 women entrepreneurs in Lebanon for a year as they took part in an economic empowerment program for women. Observing the participants in this programme provided sufficient data to build the pilot of a micro email course on book-keeping.\n business decisions.\n\nValue proposition: By using the different components of the “Micro email course” you will enable any partner to\n\n\n  Drastically improve the quality and relevance of recruits to women economic empowerment programs. The nature of digital online campaigns targeted at one demographic like “Women in Lebanon aged 18 to 45” allows for the call to action to be displayed to large numbers of women through online media, and the advantage is the ones that sign up and go through a 5-minute survey have at least filtered “appetite” in.\n  Ensure wide scale education of core financial literacy components in a localized manner which is the pre-requisite to financial decision making and investment acumen on the long run.\n  Attain quantitative and qualitative significant data on interest, adoption, and completion. The medium of “email” for delivery creates high levels of engagement if well designed, and it also allows detailed M&amp;E view on the intervention from “what could get women interested in this topic (via which ads they click on)” to “How many registered women in this email course went on to open all 7 emails and qualify for the free excel sheet reward?”\n\n\nThis intervention uses digital learning journeys to deliver on two of UNDP’s signature solutions by tackling inequality of opportunities (Poverty &amp; inequality ss) while also being deliberate about the profile of audience to grow and impact being women with digital access (Gender equality ss). It contributes to Sustainable Development Goals 5 (gender equality) and 9 (industry, innovation and infrastructure)\n\nWhy and when to use it: This email course journey is most useful when a program is aiming to recruit and identify a specific demographic entrepreneur profile while also understanding their localized pain points and learning gaps when it comes to financial literacy, as well as its relationship to delaying the achievement of that group of people’s business goals and financial stability or growth. The resources below are directly re-usable for a target group of Arabic-speaking female entrepreneurs in Lebanon. However, the tactics, journey, and financial literacy building blocks are transferable to other settings as well, as long as they have the same need for bookkeeping literacy and access to email.\n\nFinally, it is useful to recruit large numbers of people into a course journey, while also using the engagement journey of the course in order to achieve high fidelity tools to monitor and, later, evaluate the participants’ appetite for, understanding of and completion of the course.\n\nKnown issues and troubleshooting: For this tool to work you will require:\n\n\n  Some contact list or a media outlet that can broadcast the recruitment call.\n  Any email sending platform.\n  A local or regional success that can be the “modeling agent” of the micro learning content.\n\n\nContext: In 2021, the UNDP Lebanon Accelerator Lab participated in a one year-long behavioral research with 19 Lebanese female entrepreneurs. The  research singled out financial bookkeeping as an area of ill confidence, worry, and difficulty for all women. Building on these insights, and in partnership with the Regional Bureau of Arab States’ innovation unit, the Lab conducted structured interviews to assess more precisely the particiapants’ needs. This work powered the design of a bookkeeping course that speaks to the common phenomenon of time-poverty that women suffer by delivering easy, short, and localized video content on bookkeeping by email over a period of 7 days. The content included interactive knowledge testing, and a free reward upon completion.\n\nThe main transferrable tools used besides the course content shared in resources below:\n\n\n  The call for participation component used to recruit a defined target profile online through online media funnels removing tens of middlemen contractors and substantial cost, while also identifying which behavioral driver or barrier had the most impact for this particular demographics.\n  Chunking of financial bookkeeping knowledge into micro “just in time” learning resources modeled on a visible excel sheet and by a regional Arab-speaking woman entrepreneur resulted in improved engagement.\n  The offer of a free pre-programmed excel sheet (the same one used in the course content) as a reward for course completers acted as a powerful incentive to complete the course. This excel would be used to practice their learning directly on their businesses, we attribute this incentive framing to the 21% course completion rate (5% higher than that of a similar Coursera course).\n\n\nCost: 8,000 USD to commission a regionally well-known entrepreneur to co-design the course, and to acquire from her the IP of a pre-programmed spreadsheet file that can function as a complete, if basic, mini-bookkeeping system for small businesses; 5,000 USD to recruit participants via targeted online advertising. A subscription to an email automation platform such as MailChimp or similar is also needed.\n\nPeople: In Lebanon, this project involved the UNDP Accelerator Lab the UNDP Women Economic Empowerment project, and the gender unit,as well as external consultants. The following roles are needed:\n\n\n  Local success “role model” in topic of choice as content and tool as reward creator\n  Email automation specialist\n  Ads or PR specialist to launch the recruitment call in a manner that allows you to reach a specific target audience and allows participants to sign up to the course via survey\n  Gender specialist\n\n\nFocal point: Lilian Abou Zeki.\n\nCountry, year, and language : Lebanon, Period: 2022 to 2023, Arabic.\n\nResources: Course step-by-step. Consists of an instruction sheet in English, with links to all emails and video lessons, as well as to an inception survey and promotion videos. All materials are in Arabic.\n\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/LEB.html",
    id: 3
});












index.add({
    title: "... through a video- and text message-based course on financial literacy for female entrepreneurs",
    content: "A video and text message based course on financial literacy for female entrepreneurs\n\nWhat it does. The experiment was to evaluate the effect of an online solution on women’s financial literacy. The training content, which was developed in ‘Kreol Morisien’ in video format, was used to train women-led entrepreneurs with struggling businesses who lacked financial literacy.\n\nMultiple methods, such as surveys, interviews and focus groups, were used to understand what aspects of entrepreneurial finance were most difficult or confusing for women entrepreneurs to understand through traditional class-type training. Then, the course content and delivery were tailored to address those issues and provide clear and relevant examples and exercises and the interaction.\n\nA baseline study of the cohort’s capacity was undertaken to obtain a comparative analysis, showcasing improvements, and equating them to the success of micro and small enterprises.\n\nThe experiment aimed to:\n\n\n  Design. An online solution, including YouTube videos in the local language, specifically in Mauritian Creole. This solution was tested to determine if it could efficiently enhance financial literacy for the pilot group of women entrepreneurs participating in the experiment.\n  Monitor. The perceived knowledge and understanding in the following key financial management practices, through a pre-test and post-test with the entrepreneurs, included:\n    \n      Understanding the Business Life Cycle\n      Understanding Basic Financial Statements\n      Budgeting\n      Working Capital Management_\n      Sources of Finance_\n      Costing a product and services_\n    \n  \n  Experiment with. Online peer-to-peer interactive platforms, specifically WhatsApp – a popular app used by most entrepreneurs on the islands within the Republic, for sharing of challenges and learnings, networking and also increasing the confidence of the participating entrepreneurs. More specifically, the experiment aimed to evaluate the impact of peer-to-peer communication on understanding of financial terms and motivation. WhatsApp allowed the participants to share their experiences, challenges, and feedback with each other in a convenient and familiar way.\n\n\nValue proposition. This simple, yet innovative approach aims to create an online financial literacy platform for women entrepreneurs. It seeks to support women-led micro and small enterprises in improving their financial resilience, operational capacity, and develop resilient business models. By using this approach, micro and small sized entrepreneurs can learn at their own pace and convenience, without affecting their daily activities. This initiative aligns with the UNDP’s Signature Solutions focused on addressing Poverty and Inequality as well as Gender Equality and can help achieve the key targeted SDGs 1, 5, 8 and 10.\n\nWhy and when to use it. The tool is most useful when the participants use the tool (videos) for learning when they are free from other entrepreneurial obligations, are motivated to exchange across the online platform and learn from challenges experienced, and also are able to apply learnings to their everyday activities.\n\nKnown issues and troubleshooting. While there are no known issues with the experiment, all risks were carefully monitored throughout. Emphasis was placed on conducting the experiment in a structured manner by the team. This entailed conducting a baseline test to evaluate the current level of financial literacy level and comparing the results post-learning. However, it was tested on a small group of thirty women entrepreneurs. If scaled up, a proper risk management and monitoring mechanism will be essential.\n\nContext. In 2022, the UNDP Mauritius and Seychelles Accelerator Lab facilitated a collective intelligence exercise with women entrepreneurs from MSMEs in Mauritius and Rodrigues. The group included participants from multiple sectors, notably from the tourism sector, affected by two successive COVID-related lockdowns. A key concern for the entrepreneurs was the limited financial literacy for them, which led to difficulties in filling out important documents like financial returns and VAT for the local revenue authority. It increased their operational costs and exacerbated the difficulties they already encountered in accessing affordable capital through the formal financial systems.\n\nCost. This initiative was funded by the UNDP Accelerator Lab and co-designed with the local academic institution for approximately MUR 780,000 (USD 17,300). The SME Mauritius and the National Women Entrepreneur Council collaborated by making this initiative accessible to women entrepreneurs from Mauritius and Rodrigues for the pilot experiment. With collaboration for scaling up with a ministry and other institutions, costs could be reduced as the content and design are available, although some small adjustments might be required to update the content, among others.\n\nPeople. The experiment was funded and co-designed by the UNDP Accelerator Lab Mauritius &amp; Seychelles team, in collaboration with the University of Mauritius serving as an external consultant and with the support of partners and collaborators including the Ministry of Gender Equality and Family Welfare, National Women Entrepreneur Council, Small and Medium Enterprise Mauritius.\n\nFor colleagues who seek to replicate the experiment, the following roles are needed:\n\n\n  Social Scientist/ Ethnographer/ Community Person. The social scientist should have the following skills: cultural awareness, observation, interviewing (fluent in local language), ethnographic writing and have the ability to collect data in an unbiased way. S/he should be proficient in various ethnographic methods such as participant observation, taking field notes, and thematic analysis, etc. S/he should be able to design the research questions, test hypotheses, use methods and instruments for conducting the experiment, as well as analyze the data and interpret the results in a scientific way. (Other important indirect skills include empathy, curiosity, strong ethics, etc.)\n  Finance Experts. Their skills should include financial literacy, accounting, budgeting, forecasting, investing for entrepreneurial activities (aligned with the experiment’s content and entrepreneurs’ requirements as determined by the survey).\n  Instructor/Trainer. A team of finance experts and an instructor are also necessaryThe instructor/ trainer should be able to teach a group of entrepreneurs with a basic level of understanding. Other skills for the instructor should include good communication, local language fluency, and having a pedagogical attitude.\n  Videographer. The videographer should be proficient in editing, production, animation, graphics, sound design and storytelling, as well as editing software and platforms. Additionally, a videographer should exhibit local language fluency, creativity, attention to detail, the ability to incorporate feedback from the target group, and time management. (The instructional videos are very short to match the attention span of the target group.)\n  Project Coordinator. A project coordinator is essential for the experiment to be successful as there are many activities to coordinate simultaneously. Skills include experience in project management and implementation, excellent communication and the ability to inspire collaboration among the team members and stakeholders. Finally, local language fluency, as well as monitoring and evaluation and risk management skills are also required.\n\n\nFocal point. Melany Poorun-Sooprayen.\n\nCountry, year, and language. Republic of Mauritius, 2022 to 2023, Mauritian Creole/ English.\n\nResources.\n\n\n  \n    Blog post in English. Read this blog to understand how the experiment was initiated.\n  \n  \n    Videos in Mauritan Creole with subtitles in English. The entire series has 13 videos.\n\n    \n      Understanding Business Cycle\n      Working Capital Management\n      Budgeting and Investment Appraisal (part 2)\n      Statutory Compliance (part 1)\n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/MAR.html",
    id: 4
});












index.add({
    title: "At a glance",
    content: "The toolkit at a glance\n\nGetting started. This section explains the rationale for the toolkit, and how to use it\n\nHelp people understand. This section contains initiatives that help individuals and communities understand how to use financial services or increase their financial literacy, such as course and research tools.\n\nHelp people save. This section describes tools for digitizing community savings processes.\n\nHelp people pay.This section describes analog-to-digital payment tools.\n\nHelp people borrow. This section describes tools to help people access financial services.\n\nHelp people de-risk. This section describes tools to support the creation of accessible insurance products.\n\nEach tool in the toolkit is assigned to only one section. This is somewhat contrived, as in practice some of the solutions prototyped by the Accelerator Labs address jointly different dimensions of financial inclusion. An obvious example is the digitalization of the community practice of sanduk in South Sudan, which functions both as a saving and as a borrowing practice.\n",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/TOC.html",
    id: 5
});












index.add({
    title: "Contributors",
    content: "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Amanuel Tadesse\n        \n        UNDP Ethiopia Accelerator Labs\n        Head of Solutions Mapping\n      \n    \n    Amanuel has a diverse background with experience in government, NGOs, and the private sector. Currently, he works for the UNDP. In his role as a solution mapper, he is responsible for identifying and co-designing grassroots solutions to address community challenges. Before joining UNDP, Amanuel worked on testing and revamping business models related to rural finance, specifically focusing on voucher-based agricultural input distribution systems and seed marketing. He has also provided analytical support to various programs and has experience in designing and conducting surveys. Amanuel holds a PhD in geography from the University of Leuven, with a primary focus on urbanism. His academic interests revolve around exploring the intricate interactions between space and society, particularly within urban contexts in the global south.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lorena Moscovich\n        \n        UNDP Argentina Accelerator Labs\n        Head of Experimentation\n      \n    \n    Bio has been requested\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lilian Abou Zeki\n        \n        UNDP Lebanon Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Lilian leads on scoping user-led solutions/ grass root innovators/ positive deviants across different development areas in the country. She identifies underlying insights on behavior, trends, and systems that might make for solution learnings to experiment with inside UNDP and with partners, a role that can be likened to product management. Passionate about the way women experience work outside of the man-woman binary. Focused more on the unique nuances that make women entrepreneurs, business owners and leaders succeed, due to these nuances and not despite them.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Melany Anoushka Poorun-Sooprayen\n        \n        UNDP Mauritius and Seychelles Accelerator Labs\n        Head of Exploration\n      \n    \n    Melany is an experienced project manager with a demonstrated history of working in the renewables and environment industry. She is a strong program and project management professional with an MBA focused on Project Management from MANCOSA, and she’s skilled in corporate social responsibility, analytical skills, system monitoring, and management.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mariana Olcese\n        \n        UNDP Peru Accelerator Labs\n        Head of Exploration\n      \n    \n    Mariana joined UNDP Peru in 2020 as Head of Exploration. Before that, she worked as Public Affairs and Head of Institutional Affairs for companies like WeWork and Corporacion Breca. Mariana holds an MBA from Yale and Georgetown University. Her expertise encompasses stakeholder management, social and political monitoring, and the development of strategic corporate positioning. She is adept at fostering and leading dialogues between public and private actors, facilitating cooperation and knowledge sharing.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ximena González\n        \n        UNDP Peru Accelerator Labs\n        Inclusive Growth Coordinator\n      \n    \n    Leads Inclusive Growth team in UNDP Peru. Ximena is also a social entrepreneur, through Heroínas Peruanas, a non-profit association that promotes education and equal opportunities through educational materials about the lives of notable Peruvian women.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jacqueline Poni Aringu\n        \n        UNDP South Sudan Accelerator Lab\n        Head of Experimentation\n      \n    \n    Jacqueline is passionate about R&amp;D, and comes with a rich blend of both public and private sector experience in her experimentation role. She has worked on and coordinated various R&amp;D projects from both the government and private sectors. Jacqueline has worked in resource-limited settings, economically empowering vulnerable communities through women’s financial inclusion initiatives. Jacqueline is a strong team player and has effectively demonstrated leadership through innovative ideas. She is a very ambitious and result-oriented human, and these attributes have helped her show the utmost professional ethics.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tong Atak\n        \n        UNDP South Sudan Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Eng. Tong Atak is the Head of Solutions Mapping and the Digital Advocate at UNDP South Sudan. He studied his bachelor’s degree in computer engineering at Queen Mary University of London. He is a practicing engineer and has over 5 years of experience working in telecoms with Nokia across Western Europe in Research &amp; Development and development and technical account management. At UNDP, one of the notable projects Eng. Tong has project led was a pilot scheme to digitalize the traditional Sanduk savings scheme and migrate the analog process onto the M-Gurush platform. The success of this joint pilot with M-Gurush led to the development of a digital Sanduk called mSanduk being launched nationwide on their platform and being made available as a value-added service to their 1.7 million customer base. In addition, Eng. Tong in his capacity as the UNDP Digital Advocate works to identify and realize opportunities for digital project design and delivery in UNDP to be able to support the developmental aspirations of our lead partner the Government of South Sudan.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Moses Mwansa\n        \n        VillageSavers Technology Ltd.\n        CEO\n      \n    \n    Moses Mwansa, holder of a Master of Science Degree in Project Management, is the proprietor of VillageSavers Technology Ltd, a fintech that promotes financial inclusion in low-income and informal business through the VillageSavers app. VillageSavers helps SMEs (Small and Medium-sized Enterprises) adopt tech-based solutions in their businesses. Moses is a 2021 Mandela Washington Fellow from the University of Nebraska, Lincoln, a YALI Regional Leadership Program alumni from the University of South Africa (2019), and a participant in the US Department of State’s Tech-Camp program in Nigeria (2019), and Ghana 2016. VillageSavers has been used successfully by Cross Border Traders through the project Digitizing Trade and Financing for Women and Youth Cross Borders Traders, which is jointly financed by the Africa Borderlands Centre and UNDP Zambia.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sofia Silva\n        \n        UNDP Cabo Verde Accelerator Lab\n        Head of Exploration\n      \n    \n    Bio still missing\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Eduardo Gustale\n        \n        UNDP Accelerator Labs\n        Monitoring, Experimentation and Learning Specialist\n      \n    \n    Experienced in Sustainable Development and Social Innovation. Worked repeatedly in academic research, survey development, and market insight. Elected Global Shaper by the World Economic Forum &amp; Chevening Scholar for an MSc in Innovation and Entrepreneurship at the University of Warwick.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tayo Akinyemi\n        \n        UNDP Accelerator Labs\n        Learning and Community Manager\n      \n    \n    I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early-stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing the capacity of those enablers (especially early stage investors).\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alberto Cottica\n        \n        UNDP Accelerator Labs\n        R&amp;D Specialist\n      \n    \n    Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alik Mikaelian\n        \n        UNDP Egypt Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Alik is a strategic designer and researcher with a background in product and graphic design. She holds an MFA in transdisciplinary design, and a bachelor’s degree in product design.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marwa Makhlouf\n        \n        The American University in Cairo\n        Researcher\n      \n    \n    A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Salome Nakawze\n        \n        UNDP Zambia Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Najoua Soudi\n        \n        UNDP Morocco Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Equipped by my deeply rooted moral imagination and the critical thinking that emerges from having had roles that crossed so many programs, I embarked on a learning journey with the United Nations Programme for Development using an experimental approach to development and poverty alleviation - combining research, locally grown solutions and technology with saving the world.  \n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ravi Chandra\n        \n        UNDP India\n        Livelihood and Value Chain Specialist\n      \n    \n    To be added\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n  \n\n\n",
    tags: null,
    sdg: null,
    url: "/Team.html",
    id: 6
});












index.add({
    title: "... with digital payments via neighborhood stores",
    content: "Digital payments via neighborhood stores\n\nWhat it does. The takeup of digital payment services are hindered by persisting digital divides. Even people who own computing devices and have access to the Internet are often reluctant to use them to make payment, as they do not feel confident enough and fear making mistakes, possibly paying more than they should. The Red Con Vos (“Network With You”) is a network of neighborhood stores, whose owners and managers own the necessary equipment for online payments and have been trained in how to help their fellow citizens in doing all kind of online administrative processes (not only payments). Residents gain the convenience of accessing digital payments; store owners charge a small fee for each transaction they facilitate, and, perhaps more importantly, benefit from residents visiting their stores more often.\n\nValue proposition for the government/other partner. By capacitating proximity businesses to transmit online payment and conduct other online transactions, this intervention contributes to the accessibility of these services to the least digitally included citizens, including children, the elderly and those with care duties. Rural communities can also be included, as long as there is a local store with an Internet connection. Additionally, the businesses themselves stand to gain new customers. The programme is sustainable, as it is financed with the savings that result from citizens not having to travel to distant location to use digital public services.\n\nWhy and when to use it. This tool is most useful when there is a digitized public administrative system with many administrative procedures that must be carried out online or in the central offices; when the access to both online and in-person procedures is problematic because of the lack of proper public transportation, high costs of public transportation, distance, and time restrictions —such as care or work responsibilities—, and when there are community markets with computers or mobiles, and Internet connection.\n\nKnown issues and troubleshooting. Some stores might not have IT devices or a stable Internet connection in the community; some store owners might not being keen on joining the network. Providing devices to the stores, and approaching stores that might have them already are among the solutions. It is also crucial to count on supportive local partners to provide assistance in establishing the network.\n\nContext. In 2019, the UNDP Accelerator Lab in Argentina observed that a few owners of neighborhood stores had started offering, as an additional service to their clients, the possibility to carry out digitally some official bureaucratic procedures – including digital payments – in the stores themselves. Many bureaucratic procedures have been digitalized in Argentina, but many residents do not feel comfortable with going through them without help. These residents fall back to travelling physically to the competent government office or bank, where, however, they are facing long waits because, with digitalization, these organizations are divesting from public-facing physical facilities. This behavior was found to be more frequent in women, the elderly, and low-income households. T. With the onset of the COVID-2019 pandemic, this service came to be in higher demand, as mobility was reduced. The Labs is attempting to scale up this idea from individual initiatives to a service with good coverage of the population. A first pilot in Concepción del Uruguay, in a province called Entre Ríos, launched in 2021; a second one launched in Fray, in a different province called Catamarca, in 2022. The two municipalities have different geographic and demographic characteristic, allowing to test the idea in different contexts. These two pilots show Red Con Vos to be financially sustainable, while saving travel time and distance for residents, supporting local commerce, and offering a partial solution to digital exclusion.\n\nCost. Between 10,000 and 60,000 USD depending on the size of the network and the resources locally available. The Concepción del Uruguay pilot cost 12,000 USD, with the local government overseeing the fieldwork to recruit the stores and invite them to join the network. It also took care of gathering the data to monitor and evaluate the initiative. The Fray pilot, as the local government did not provide any resources, cost 60,000 USD.\n\nTime. 3 to 4 months. The first two months are for project planning, followed by a two-month on-site implementation phase. Once deployed, the network is designed to be self-sustaining. A longer time frame may allow for more evidence to assess the experience.\n\nPeople. The project requires a project manager, a fieldwork manager, and a number of recruiters to recruit and train of the shopkeepers, and also to follow up the implementation of the project. Communication is crucial. Having a team of designers and someone in charge of producing a media kit and contacting the press is an asset. The many materials already designed and the guidelines are available for the fieldwork team.\n\nFocal point. Lorena Moscovich.\n\nCountry, year, and language. Argentina, 2021 and 2022, Spanish and English.\n\nResources.\n\nInformation\n\n\n  Microsite in English and in Spanish.\n  Report with detailed findings from the first pilot in Concepción (2021), available in English and Spanish.\n  Report with detailed findings from the second pilot in Fray (2022), available in English and in Spanish.\n\n\nGuidelines (in Spanish).\n\n\n  Guidelines for recruiters. Use this to explain to store owners what the implications of joining the network are. These can be used in most contexts after translation.\n  Guidelines for store owners. Use this to explain to store owners who have already joined the network how to supply this service, create trust, etc. These can be used in most contexts after translation.\n  Example procedures.This contains step-by-step procedures to execute digital payments and other digital bureaucratic procedures. These are written for the Argentinian digital landscape, and will need to be rebuilt for different contexts.\n\n",
    tags: null,
    sdg: null,
    url: "/4_Pay/arg1.html",
    id: 7
});












index.add({
    title: "Background and purpose",
    content: "Background and purpose\n\nIn 2023, the UNDP Accelerator Labs decided to take stock of the work that its global network of 91 Labs, covering 115 countries, was doing in the area of finance. This work turned out to span the entire globe and to be highly diverse. Yet one regularity stood out: over two thirds of the Labs that were doing finance-related work on any kind had zeroed in on financial inclusion. What’s more, the vast majority of the network’s efforts towards financial inclusion, in turn, relied on the use of digital tools.\n\nEmerging from this work is a unique take on digital financial inclusion. First, the Labs have learned that digital tools are most inclusive when they are designed to support existing (good) practices and local knowledge. These practices tend be local (like traditional practices of community saving), or at least to have a local aspect (like local languages). This learning stands in contrast to the globalizing vocation of fintech, and of finance in general.\n\nSecond, the Labs have learned that digital instruments combine well with neighborhood and proximity. The groups most underserved by finance – like women, the elderly, and low-income communities – can greatly benefit from in-person socialization to financial literacy and the use of financial digital tools. In the absence of this kind of support, digital financial services risk becoming exclusionary – it is often easier and more profitable to serve the already served – or downright extractive – like in the case of microloans, that can cost a lot to naïve borrowers in things like fines for late payments. Counterintuitively, we find that the Labs work shows that “the most important part of digital financial inclusion is analog”.\n\nAs the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we partnered up with the Africa Borderlands Center to offer the experience accumulated by our network of labs in curated form. We are making it a toolkit: a collection of documented resources. It is meant to inspire would-be champions of digital financial inclusion. More than that, though, it is meant to empower them, by offering ready-made resources that can be re-used after having been adapted to a new context.\n\nMany champions of digital financial inclusion in the Global South are to be found within UNDP itself. In particular, we hope this toolkit will help the Country Offices that are moving to promote the inclusion of the underserved population; and the Africa Borderlands Center to find ever better ways.\n",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/background.html",
    id: 8
});












index.add({
    title: ".. through tailored needs matching",
    content: "Using digital data collection tools to support the matching of informal traders with support package.\n\nWhat it does: The web tool developed by the UNDP Cabo Verde Accelerator Lab supports the monitoring of microloans. Web-based and multi-platform, it pulls data from several sources: the Social Security Institute, the revenue authority, and commercial banks in the case of bank loans. An additional module integrates data from (typically telephone-based) follow-ups in the field. This data allows a quick analysis of each MSME’s position, and lists ones with non-compliance issues for faster action.- \nobjective of monitoring microcredits, allowing the agents in charge of non-compliant loans to pro-actively propose solution to the MSMEs affected. As a part of the solution, the lab provided a physical customer service desk at the main street market in Cabo Verde, Sucumira.\n\nValue proposition: A data-centric approach to microloans compliance allows organization in charge of supporting businesses to streamline their operation, and provide faster, more personalized support to each MSME.\n\nWhy and when to use it: This tool is most useful when (1) the volume of microloans is high and (2) there is a variety of loans and other support instruments available to MSMEs. The combination of these two conditions multiplies noncompliance risks and creates complexity in operations, to which the web tools offers a solution.\n\nKnown issues and troubleshooting: For this tool to work you will require: \n1) Existing catalogue of offers\n2) Training of staff and providing a physical location to be a “go to” troubleshooting center within the vicinity of the entrepreneurs.\n\nContext: As they scrambled to provide support to MSMEs struggling with the COVID-19 crisis, various public and private institutions in Cabo Verde created different support programs. Some of them consist of, or include, the provision of microloans. The very success of these programs created the need for a tool to allow a more dynamic follow-up. ProEmpresa, the agency in charge of supporting the business community, manages several such programmes; it partnered up with the Lab to build such a tool.\n\nCost: The Accelerator Lab funded this effort with a 15.000 USD investment. This can be broken down between 5.000 USD for Improving customer service at the Desk and in the Field - Sucupira Market and 10.000 USD to produce the Attendance Registration Module.\n\nPeople: For colleagues who seek to replicate the experiment, the following roles are needed:\n\n\n  1 consultant – support training for agents in the field\n  1 programmer – Developed digital tool\n\n\nFocal point: Sofia Silva\n\nCountry, year, and language : Cabo Verde, Period: 2020, Portuguese.\n\nResources: The available resources:\n\n",
    tags: null,
    sdg: null,
    url: "/5_Borrow/cbv.html",
    id: 9
});












index.add({
    title: "... through diagnostics meant to prepare the roll-out of a programme on risk insurance",
    content: "What it does. Insurance is a powerful tool to reduce uncertainty and precarity in people’s livelihoods. Unfortunately, robust insurance markets are not available in many Global South countries. These diagnostics are a form of inquiry that takes stock of the conditions for a programme on risk financing to do well. It examines the main demographic and economic features of the population in question; evaluates the potential risks, their geographic distribution and the relative exposure; the government’s capacity for risk management; maps the policy/regulatory landscape; and stakes out the actors on the insurance market.\n\nValue proposition for the government. By identifying strengths and weaknesses of the country under consideration, diagnostics enable the design of insurance products that are tailored to the local conditions, and of measures to support the risk finance ecosystem. Additionally, running the diagnostic is likely to enhance awareness of, and support from stakeholders, including government, insurance companies, and donors. This, in turn, is conducive to the creation of a more robust and inclusive insurance market.\n\nWhy and when to use it. Run diagnostics as the first step of a new workstream on risk financing. \nKnown issues and troubleshooting. Lack of time-series data (such as locally disaggregated census data) can “blind” the design of risk insurance programmes. In order to secure this data, it is essential to secure a collaboration with the government’s disaster risk prevention and preparedness service.\n\nContext. Ethiopia’s economy and households are exposed to the impacts of disaster shocks, with women and girls being disproportionately affected. Droughts, floods, and related food insecurity are the primary drivers of disaster response costs, and all are poised to become more frequent as the planet warms. To respond to disaster shocks, Ethiopia is largely reliant on ex-post financing—primarily official development assistance and humanitarian appeals, budgetary reallocations, and emergency borrowing. In 2021, UNDP launched a new flagship initiative, the Insurance and Risk Finance Facility, to support the development of insurance markets beyond their current reach. Ethiopia was selected for an intervention in this sense.\n\nCost. Limited to personnel. A lead researcher and a research assistant for two months full-time equivalent each. In the case of Ethiopia, this adds to about $8,000.\n\nTime. About 8 months.\n\nPeople. One research lead and one in-country researcher. Significant support was provided by three more in-country people, who prepared a preliminary report (“pre-diagnostic”) in response to a list of questions.\n\nFocal point. Amanuel Tadesse.\n\nCountry, year, and language. Ethiopia, 2023, English.\n\nResources.\n\n\n  Blog post. Use this resource for a narrative account of how this initiative came to pass in Ethiopia.\n  Pre-diagnostic report. Use this resource to get an idea of the sort of data that are needed to prepare a diagnostic report.\n\n",
    tags: null,
    sdg: null,
    url: "/6_Derisk/eth.html",
    id: 10
});












index.add({
    title: "How to use the toolkit",
    content: "How to use this toolkit\n\nArchitecture\n\nWe use the metaphor of the toolkit to emphasize the operational, enabling nature of the work you are reading right now.\n\n\n  The Toolkit is a set of resources and their documentation materials meant to help people and organizations who want to support innovation ecosystems.\n  The toolkit contains tools. Each tool consists of one or more resources, documented in a page of this website.\n  A resource is a document that can be re-used, in part or as a whole. Examples are talking points or slide decks to argue for supporting innovation ecosystems; workplans and lists of deliverables to achieve operational status for a government innovation unit; agendas for workshops meant to socialize key concepts around innovation with senior civil servants; curricula for courses on key skills useful to employees of an innovation unit. Resources are accessible via live links from the factsheets, with a UNDP corporate login.\n  Website pages contain resources metadata, accessible to everyone. Each page is dedicated to one tool, and explains what the tool is good for; what it is not good for; the context in which it was produced; how much money and time you will need to deploy it, and so on. You will also find a reference to the person or people who created the resource in the first place.\n\n\nUsing this toolkit in four easy steps\n\n1. Decide what you want to do and browse the catalogue\n\nThe tools in this kit are labelled according to function, with names like “How to map the innovation ecosystem” and “How to take a newly created innovation unit to fully operational status”. They  are sorted into into four main categories, based on the requests that UNDP’s government partners have brought to the Accelerator Labs in the period 2019-2022. Tools within the same category combine naturally. The navigation bar on the left of the screen acts as a catalogue: browse it and navigate to any tool you like.\n\n2. Read the description from this website\n\nEach tool’s website page contains information you can use to decide if that tool is useful to you after all. Is it function aligned with your own purpose? Is it compatible with your time and money budget? Did its deployment run into problems, and how were they addressed? And so on.\n\n3. Read and reuse the resources\n\nIf the description of the tool looks interesting, you can move on to the resource itself. This might be a slightly harder read (it was not written with your case in mind!), and almost certainly you will need to make changes to it. Hopefully that still saves you time and effort with respect to starting from scratch. In the prototype version, you will need a undp.org email address to access resources.\n\n4. Ask for support\n\nAll resources have a lead author, or “focal point”. The ethos of UNDP’s Accelerator Labs and Africa Borderlands Center is one of sharing knowledge, so you can reach out to the focal point if you need more information and support.\n\n",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/how-to-use-the-toolkit.html",
    id: 11
});












index.add({
    title: "Help people certify",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/7_Certify/",
    id: 12
});












index.add({
    title: "Help people pay",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/4_Pay/",
    id: 13
});












index.add({
    title: "Help people borrow",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/5_Borrow/",
    id: 14
});












index.add({
    title: "Help people understand",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/",
    id: 15
});












index.add({
    title: "Getting Started",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/",
    id: 16
});












index.add({
    title: "Help people de-risk livelihoods",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/6_Derisk/",
    id: 17
});












index.add({
    title: "Welcome",
    content: "Welcome to the Digital Financial Inclusion Toolkit\n\nThe content of this site is property of the United Nations Development Programme, and published under a Creative Commons 4.0 Attribution license.\n\nHuge thanks to everyone who contributed to creating this prototype. All contributors and curators are part of the UNDP Accelerator Labs unless otherwise indicated. Contact information for each one is available on the Contributors page.\n\nCuration task force: Lilian Abou  Zeki (Lebanon), (Tayo Akinyemi (Global Team), Jacqueline Aringu (South Sudan), Tong Atak (South Sudan), Alberto Cottica (Global Team), Eduardo Gustale (Global Team).\n\nContributors: Ximena Gonzalez (Peru), Lorena Moscovich (Argentina), Mariana Olcese (Peru), Melany Poorun-Sooprayen (Mauritius and Seychelles), Sofia Silva (Cape Verde), Najoua Soudi (Morocco) Amanuel Tadesse (Ethiopia).\n\nTechnical support: Adedapo Aderemi (Global Team), Jeremy Boy (Global Team).\n",
    tags: null,
    sdg: null,
    url: "/",
    id: 18
});















index.add({
    title: "... the opportunities for digital financial inclusion through a digital finance ecosystem assessment in your country",
    content: "**What it does**. The SDG Digital Finance Ecosystem Assessment (SDFE) provides an in-depth understanding of the drivers that make a country digital finance ready, which in turn supports the design of policy interventions and investments needed to fast-forward its digital journey. The assessment helps link digital finance policies with SDG financing as well as the government and regulators’ climate resilience commitments. It also investigates the digital economy and digital finance ecosystem to understand the current level of (digital) financial inclusion for underserved segments of the population, with a specific focus on women, to identify key drivers and opportunity areas within the digital economy that can advance inclusion. \n\n**Value proposition**. Using this assessment, UNDP can help a government to identify gaps and opportunities within their domestic digital finance ecosystems, revealing the level of inclusion of vulnerable segments in digital finance and the broader digital economy, and measuring the extent to which the digital finance ecosystem is aligned with national SDG priorities. \n\n**Why and when to use it**. This tool is appropriate for a government that wants to use data to understand where the gaps and opportunities for financial inclusion lie and use it to inform their national development strategy and policies. Established relationships with national partners and private sector partners are critical to conducting the SDFE successfully. Pre-existing relationships with NGOs that have ties to people and communities are often overlooked, are also essential to collecting in-depth data from diverse sources. \n\n**Known issues and troubleshooting**. Collecting good qualitative and quantitative data from diverse sources is time and labor intensive. It requires managing many levels of stakeholders to secure high response rates for surveys and participants for interviews and consultations. Additionally, because there is quantitative data collected at the global level, e.g. GSMA, there is added value to gathering granular and nuanced qualitative data (global data also serves as a benchmark). Given the above, it’s important to work with a flexible timeline. \n\n**Context**. In 2018, the Moroccan government prioritized improving financial inclusion and envisioned a transition to a cashless and digital local economy. As a result, the National Financial Inclusion Strategy was developed. However, despite Morocco’s status as a lower-middle-income country with a sizeable underbanked population, digital finance is underexploited as a catalyst for inclusive growth. For example, digital payments have the potential to expand access to finance for the unbanked and underbanked, but digital payment adoption is still in its very early stages.    \n\n**Cost**. Approximately USD 40,000 for a consultant, and a high-level event to share policy recommendations and best practices from other countries. \n\n**People**. A *UNDP Country Office* (or a similarly equipped unit) can participate in the assessment design process, provide input and engage in troubleshooting during the research implementation process. A *researcher* can help coordinate stakeholders, conduct interviews and co-author the report. \n\n**Focal point**. [Najoua Soudi](/Financial-inclusion-toolkit/contributors/Najoua-Soudi.html) \n\n**Country, year, and language**. Morocco, 2023, English and/or French  \n\n**Resources**  \n\n* [Report on assessment findings](https://www.undp.org/fr/morocco/publications/rapport-devaluation-de-lecosysteme-de-la-finance-digitale-au-maroc-sdfe) (French). Use this resource to see how the digital finance ecosystem assessment can deliver insights on financial inclusion. \n* [UNDP/UNCDF joint offer on digital financing of the SDGs](https://www.uncdf.org/joint-undp-uncdf-df-of-the-sdgs) (English)",
    tags: null,
    sdg: null,
    url: "/2_Understand/mor.html",
    id: 20
});












index.add({
    title: "... by digitizing community savings  processes",
    content: "# Digitizing commmunity savings groups\n\n**What it does**. \nThis process will help capture the user requirements of an analog community savings model to enable its digitalization.\n\nThe series of steps taken to execute this experiment included the following:\n\n1. **Co-creation**. The co-creation, baseline, and solutions mapping phase brought the Sudan and South Sudan accelerator labs together with local border communities to better understand the their on-the-ground context and lived experiences. This phase was critical to establishing a deep connection with the border communities and to ensuring community ownership of the innovation. This co-creation process resulted in community-informed updates and revisions to the concept, processes, and budget.\n2. **Validation survey**. This stage was critical to assessing community buy-in and validation of the digital sanduk model, drafting a work plan and budget, identifying on-the-ground partners and supporters of the initiative, and benchmarking the labs' understanding of context and lived experience.\n3. **Community Immersion**. The objective of the community immersion was to enhance the quality of innovation through active listening, observing, learning, and constructive interaction with key community stakeholders that were critical to the success of the innovation.  \n4. **Launching of the digigtal sanduk**. During this stage, sanduk members completed their registrations for digital mobile money and tested the digital sanduk platform. Specifically, members of the experimental group transferred their shares digitally to a separate sanduk platform.\n5. **Close-out/Roll out**. The South Sudanese lab team travelled to Warawar to debrief participants and stakeholders about the experiment outcomes, outlining the digital sanduk journey. \n\nFollow [this link](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/The%20Experiment%20Journey.pdf) to learn more.\n\n**Value proposition for the government/other partner**.\nDigitizing the sanduk makes cash available to members to borrow during emergencies. It allows members to save and borrow money easily, and track transactions and savings to build a financial profile that enables them to secure bank loans. Additionally, this process will enable any entity seeking to improve the operational efficiency and safety of analog savings group processes, to digitize them and provide records of financial transactions that banks and other formal institutions can use to extend financial services. Finally, a private sector company can use this process as a form of R&D to develop a financial services product to serve excluded rural communities. Or civil society organizations may utilize the training component to empower more women in informal business with basic business and digital literacy skills. All this means increased access to financial services, and therefore (directly) a boost to financial inclusion and (indirectly) a boost to business growth.   \n\n**Why and when to use it**. To replicate the model successful, several conditions need to be in place, such as:\n - Structured community savings groups;\n - Ubiquitous mobile money services provided by private sector entities;\n - Private sector partners that can ensure the continuity and sustainability of the services;\n - An enabling environment for innovation, as defined by policy, legislation and best practices;\n - Good quality contextual information, such as the level of infrastructural support, physical and digital security, logistics, socio-political contexts, and how these elements will facilitate or hamper the use of digital technology;\n - Training in digital literacy, financial literacy, and how to use legal services, to help sanduk members learn the basics of business management and market rules and regulations.\n\nIn the long term, addressing the lack of banking infrastructure will also help community savings schemes transact more efficiently.\n\n**Known issues and troubleshooting**. Technical infrastructure such as phones and mobile network access and community savings groups who are willing to try digital solutions are required to replicate this model.\n\n**Cost**. \nThe entire activity cost approximately 100,000 USD, allocated as follows:\n - 12,0000 for the community immersion (flights to Abyei & Warawar, ground transportation, security, and food); \n - 16,000 for echnical support;\n - 60,000 for community engagement (commodity booster packages, M&E, and ongoing commmunication with savings groups);\n - 10,000 for capacity building trainings.\n\n**People**.\nThe required roles for this experiment include:\n\n - Community mobilizer/local partner. This implementing partner, most likely a CSO, will have deep community ties so it can lead the community immersion, mobilize the community, and conduct financial literacy training.\n - Interpreter. The interpreter will ease communications between the implementing team and the community, if needed.\n - Technical counterpart. A software developer who has soft skills and understands the community.\n - Research team. These research volunteers can document insights. [double check]\n - Data analyst. The data analyst will design the survey tools and process the data collected.\n - Technical Support. The technical support lead with support the project lead. [double check]\n\n**Context**. In remote areas along borders, making payments is often a struggle, banks are inaccessible, and access to finance and financial services is nonexistent. Many communities in rural settings use sanduks, or community savings groups, to pool money and safeguard it from wildfires. Similarly, at the border of South Sudan and Sudan, crossborder traders often sent money to Khartoum through Cairo for the purchase of their goods from Sudan. This extended the amount of time it took to get their goods delivered. This same group also had their own sanduk saving group, which made it easier for them to be incorporated.\n\nAn \"analog-to-digital savings\" experiment was launched to explore innovative ways to address these challenges. The theory of change was that by digitalizing sanduks, group members in communities would keep their communally pooled funds safe, enable access to emergency funds for social needs, such as paying school fees and medical bills, and build digital financial profiles that would enable to solicit loans from financial service providers. The initial focus of the experiment was on women's financial inclusion, cross-border traders were later added. \n\n**Focal points**. [Jacqueline Aringu](/Financial-inclusion-toolkit/contributors/Jacqueline-Poni-Aringu.html) and [Tong Atak](/Financial-inclusion-toolkit/contributors/Tong-Atak.html).\n\n**Country, year, and language**.\nSouth Sudan, 2022-2023, English.\n\n**Resources**.\n\n - [Use this concept note to understand how the baseline survey was deployed](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/0a2ab4368bbc336c842e3026e6f9d45681ec6d79/3_Save/Concept%20Note_%20Baseline%20Survey%20and%20Sensitization%20(Sanduk%20Experiemnt).pdf) and [to learn how immersions and follow-ups were conducted](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/9c70b6f5fac189aae8c220bf804cc738751632d6/3_Save/The%20Experiment%20Journey.pdf) check this link and [to follow how the experiment was concluded](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/d704e97b84ab06ca1bcbb887c36b7aea23c10a7f/3_Save/Joint%20ABC%20and%20AccLab%20closing%20mission%20for%20the%20Digital%20Sanduk%20experiment.pdf).\n - [TOR for the m-Gurush consulting service](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/TOR%20Video%20Documentation.pdf). Use this TOR as a reference document to hire a consultant to provide videography and photography services.\n - [Baseline survey](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/Revised%20Sanduk%20Baseline%20Questionnare%202-March%202022.pdf). Use this resource as a template to develop a baseline survey for your context. \n - [Needs assessment and endline survey](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/Concept_%20Endline%20Survey%20of%20Sanduk.pdf). Use this resource as a template to develop a needs assessment and endline survey for your context.\n",
    tags: null,
    sdg: null,
    url: "/3_Save/ssd.html",
    id: 21
});












index.add({
    title: "Values and attitude",
    content: "## Values and attitude\n\n### Values\n\nThis toolkit was produced in the cultural context of UNDP’s Accelerator Labs. It inherits their culture of deep listening, immersion within the everyday reality of the Global South, respect for grassroots innovation, openness, and epistemological humility. It does not seek to provide turnkey solutions, but to share the knowledge accumulated along the way, in the hope of making the task of supporting innovation ecosystems a little less difficult.\n\n### Support and enhance grassroots approaches\n\nMost people in the Global South do not have bank accounts, and are generally not served by traditional basic financial services. Many communities have found ways to produce functionally equivalent financial services: for example, the Accelerator Labs have documented forms of community savings. Rather than treat them as indcation of backwardness, we recommend them looking to these forms of grassroots finance as collective intelligence, and, where the potential is there, build upon them. A good example is the digital version of the form of community saving practiced in South Sudan by the UNDP Accelerator Lab in that country,\n\n### Focus on the \"last mile\" of finance \n\nFinancial networks span the planet, but, in the Global South, they are sparse. This toolkit focuses on the \"last mile\" of financial inclusion, where communities that might be harder to serve for  traditional providers of financial services get connected to those global networks. Financial literacy is a major enabler of inclusivity, and the UNDP Accelerator Labs have accumulated substantial experience in this area.\n\n### Digital cuts both ways\n\nFintech entrepreneurs have used the potential of digital ecosystems to build new financial services on top of the existing ones. This is exciting, but its very efficiency is at risk of leaving further behind those who are financially and/or digitally excluded. The Accelerator Labs have prototyped ways that this exclusionary dynamics can be overcome by things like making digital payments in neighborhood stores. In a last mile context, the most important part of digital finance is analog.",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/values.html",
    id: 22
});












index.add({
    title: "... through an app to digitize financial transactions in cross-border trade",
    content: "# An app to digitize financial transactions in cross-border trade\n\n**What it does**.\n The VillageSavers app digitizes trade and financing for cross border traders who are women and young people, in their shared border towns of Livingstone (Zambia) and Victoria Falls (Zimbabwe). More specifically, the app:\n\n- Allows informal Self-help Savings Groups (SHGs) to digitize their financial transactions records (savings and loans) through an automated digital system.\n- Solves problems of poor record keeping, human error, lack of transparency, and distrust as each member has access to the information in real time.\n- Increases informal businesses' access to formal financial services as private banks have reported that the app's credit history can be used to guarantee one's qualification to access financial support.\n\n**Value proposition for the government/other partner**.\n By using the VillageSavers app, self-help savings groups have a comprehensive solution to the challenges faced in informal savings groups. It not only improves financial management and transparency but also opens new opportunities for digital financial inclusion and access to formal financial services.\n\nNotably, the VillageSavers app is most useful within the informal sector, catering to individuals who lack access to formal banking services. This community seeks to collectively pool their resources, thereby bolstering their borrowing and lending capabilities, leading to increased revenue for their businesses. Additionally, the app has demonstrated its value to formal financial institutions, as it helps them identify creditworthy patterns within the informal business sector, making it a viable tool for extending financial support to unbanked populations.\n\n\n**Why and when to use it**. Small scale cross border traders (SSCBTs) suffer from lack of access to pensions, as well as other financial products and services because they are unable to engage with the pension authority and banks, who view serving them as risky. Using an app such as VillageSavers will create a digital transaction history that would enable banks and the pension authority to do more accurate risk assessments on SMEs that use it.\n\nIn order for the VillageSavers app to be effective, it's important to have SMEs that have the following characteristics:\n\n- Actively trading;\n- Participating in a savings group;\n- Have access to smartphones, internet and a basic level of financial and digital literacy (or are willing to receive assistance to access phones and training).\n\n**Known issues and troubleshooting**. Key challenges are lack of digital skills, poor or limited internet connectivity, and difficulty accessing a smartphone, which can be price-prohibitive for some SMEs. SMEs might also experience difficulties using the app, for which they'd need technical and troubleshooting support.\n\n**Cost**. Approximately $100,000, with the following breakdown:\n\n- App maintenance, including trouble shooting, hosting fees etc., 35,000\n- Smart phones, 20,000\n- Meetings with beneficiaries, 10,000\n- DSA and upkeep expenses, 15,000\n- Travel expenses, 15,000\n- Miscellaneous, 5,000\n\n**People**.\n\n**Project Manager**. The project manager would need to develop concept note, design the experiment, collect baseline data, build partnerships, and provide direct oversight and management of the implementation of the proof of concept.\n\n**External Consultant**. A research consultant would implement surveys, run focus group discussions, and compile the report.\n\n**Innovator (as an implementing partner)**. The innovator implementing partner would refine the existing platform, deploy the app, carry out digital and financial skills training, and coordinate CBT (Cross Border Traders) participation, monitoring, and data sharing.\n\n**Focal point**. [Moses Mwansa](/Financial-inclusion-toolkit/contributors/Moses-Mwansa.html).\n\n**Country, year, and language**. Zambia, 2021-2023, English.\n\n**Resources**.\n\n - [UNDP Exposure Report](https://undpinzambia.exposure.co/innovation-helps-zambian-women-and-youths-bounce-back-in-crossborder-trade). Read this report for a narrative account of the VillageSavers app initiative, context, and impact.\n - [Endline Report](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/ea85eca40cddb8e2df554119a6194e60ad04d3c7/3_Save/03_05_22_ENDLINE%20REPPORT_CHUNI%20PATRICK.pdf). Read this report to gain insight into the impact of the VillageSavers app.\n",
    tags: null,
    sdg: null,
    url: "/3_Save/zam.html",
    id: 23
});












index.add({
    title: "Amanuel Tadesse",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Amanuel Tadesse\n            \n            UNDP Ethiopia Accelerator Labs\n            Head of Solutions Mapping\n          \n        \n        \n          Amanuel has a diverse background with experience in government, NGOs, and the private sector. Currently, he works for the UNDP. In his role as a solution mapper, he is responsible for identifying and co-designing grassroots solutions to address community challenges. Before joining UNDP, Amanuel worked on testing and revamping business models related to rural finance, specifically focusing on voucher-based agricultural input distribution systems and seed marketing. He has also provided analytical support to various programs and has experience in designing and conducting surveys. Amanuel holds a PhD in geography from the University of Leuven, with a primary focus on urbanism. His academic interests revolve around exploring the intricate interactions between space and society, particularly within urban contexts in the global south.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Amanuel-Tadesse.html",
    id: 24
});












index.add({
    title: "Lorena Moscovich",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lorena Moscovich\n            \n            UNDP Argentina Accelerator Labs\n            Head of Experimentation\n          \n        \n        \n          Bio has been requested\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Lorena-Moscovich.html",
    id: 25
});












index.add({
    title: "Lilian Abou Zeki",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lilian Abou Zeki\n            \n            UNDP Lebanon Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Lilian leads on scoping user-led solutions/ grass root innovators/ positive deviants across different development areas in the country. She identifies underlying insights on behavior, trends, and systems that might make for solution learnings to experiment with inside UNDP and with partners, a role that can be likened to product management. Passionate about the way women experience work outside of the man-woman binary. Focused more on the unique nuances that make women entrepreneurs, business owners and leaders succeed, due to these nuances and not despite them.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Lilian-Abou-Zeki.html",
    id: 26
});












index.add({
    title: "Melany Anoushka Poorun-Sooprayen",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Melany Anoushka Poorun-Sooprayen\n            \n            UNDP Mauritius and Seychelles Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Melany is an experienced project manager with a demonstrated history of working in the renewables and environment industry. She is a strong program and project management professional with an MBA focused on Project Management from MANCOSA, and she’s skilled in corporate social responsibility, analytical skills, system monitoring, and management.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Melany-Poorun-Sooprayen.html",
    id: 27
});












index.add({
    title: "Mariana Olcese",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mariana Olcese\n            \n            UNDP Peru Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Mariana joined UNDP Peru in 2020 as Head of Exploration. Before that, she worked as Public Affairs and Head of Institutional Affairs for companies like WeWork and Corporacion Breca. Mariana holds an MBA from Yale and Georgetown University. Her expertise encompasses stakeholder management, social and political monitoring, and the development of strategic corporate positioning. She is adept at fostering and leading dialogues between public and private actors, facilitating cooperation and knowledge sharing.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Mariana-Olcese.html",
    id: 28
});












index.add({
    title: "Ximena González",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ximena González\n            \n            UNDP Peru Accelerator Labs\n            Inclusive Growth Coordinator\n          \n        \n        \n          Leads Inclusive Growth team in UNDP Peru. Ximena is also a social entrepreneur, through Heroínas Peruanas, a non-profit association that promotes education and equal opportunities through educational materials about the lives of notable Peruvian women.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Ximena-Gonzalez.html",
    id: 29
});












index.add({
    title: "Jacqueline Poni Aringu",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jacqueline Poni Aringu\n            \n            UNDP South Sudan Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Jacqueline is passionate about R&D, and comes with a rich blend of both public and private sector experience in her experimentation role. She has worked on and coordinated various R&D projects from both the government and private sectors. Jacqueline has worked in resource-limited settings, economically empowering vulnerable communities through women’s financial inclusion initiatives. Jacqueline is a strong team player and has effectively demonstrated leadership through innovative ideas. She is a very ambitious and result-oriented human, and these attributes have helped her show the utmost professional ethics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Jacqueline-Poni-Aringu.html",
    id: 30
});












index.add({
    title: "Tong Atak",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tong Atak\n            \n            UNDP South Sudan Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Eng. Tong Atak is the Head of Solutions Mapping and the Digital Advocate at UNDP South Sudan. He studied his bachelor’s degree in computer engineering at Queen Mary University of London. He is a practicing engineer and has over 5 years of experience working in telecoms with Nokia across Western Europe in Research & Development and development and technical account management. At UNDP, one of the notable projects Eng. Tong has project led was a pilot scheme to digitalize the traditional Sanduk savings scheme and migrate the analog process onto the M-Gurush platform. The success of this joint pilot with M-Gurush led to the development of a digital Sanduk called mSanduk being launched nationwide on their platform and being made available as a value-added service to their 1.7 million customer base. In addition, Eng. Tong in his capacity as the UNDP Digital Advocate works to identify and realize opportunities for digital project design and delivery in UNDP to be able to support the developmental aspirations of our lead partner the Government of South Sudan.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Tong-Atak.html",
    id: 31
});












index.add({
    title: "Moses Mwansa",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Moses Mwansa\n            \n            VillageSavers Technology Ltd.\n            CEO\n          \n        \n        \n          Moses Mwansa, holder of a Master of Science Degree in Project Management, is the proprietor of VillageSavers Technology Ltd, a fintech that promotes financial inclusion in low-income and informal business through the VillageSavers app. VillageSavers helps SMEs (Small and Medium-sized Enterprises) adopt tech-based solutions in their businesses. Moses is a 2021 Mandela Washington Fellow from the University of Nebraska, Lincoln, a YALI Regional Leadership Program alumni from the University of South Africa (2019), and a participant in the US Department of State’s Tech-Camp program in Nigeria (2019), and Ghana 2016. VillageSavers has been used successfully by Cross Border Traders through the project Digitizing Trade and Financing for Women and Youth Cross Borders Traders, which is jointly financed by the Africa Borderlands Centre and UNDP Zambia.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Moses-Mwansa.html",
    id: 32
});












index.add({
    title: "Sofia Silva",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sofia Silva\n            \n            UNDP Cabo Verde Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Bio still missing\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Sofia-Silva.html",
    id: 33
});












index.add({
    title: "Eduardo Gustale",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Eduardo Gustale\n            \n            UNDP Accelerator Labs\n            Monitoring, Experimentation and Learning Specialist\n          \n        \n        \n          Experienced in Sustainable Development and Social Innovation. Worked repeatedly in academic research, survey development, and market insight. Elected Global Shaper by the World Economic Forum & Chevening Scholar for an MSc in Innovation and Entrepreneurship at the University of Warwick.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Eduardo-Gustale.html",
    id: 34
});












index.add({
    title: "Tayo Akinyemi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tayo Akinyemi\n            \n            UNDP Accelerator Labs\n            Learning and Community Manager\n          \n        \n        \n          I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early-stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing the capacity of those enablers (especially early stage investors).\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Tayo-Akinyemi.html",
    id: 35
});












index.add({
    title: "Alberto Cottica",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alberto Cottica\n            \n            UNDP Accelerator Labs\n            R&D Specialist\n          \n        \n        \n          Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Alberto-Cottica.html",
    id: 36
});












index.add({
    title: "Alik Mikaelian",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alik Mikaelian\n            \n            UNDP Egypt Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Alik is a strategic designer and researcher with a background in product and graphic design. She holds an MFA in transdisciplinary design, and a bachelor’s degree in product design.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Alik-Mikaelian.html",
    id: 37
});












index.add({
    title: "Marwa Makhlouf",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marwa Makhlouf\n            \n            The American University in Cairo\n            Researcher\n          \n        \n        \n          A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Marwa-Makhlouf.html",
    id: 38
});












index.add({
    title: "Salome Nakawze",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Salome Nakawze\n            \n            UNDP Zambia Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Salome-Nakawze.html",
    id: 39
});












index.add({
    title: "Najoua Soudi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Najoua Soudi\n            \n            UNDP Morocco Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Equipped by my deeply rooted moral imagination and the critical thinking that emerges from having had roles that crossed so many programs, I embarked on a learning journey with the United Nations Programme for Development using an experimental approach to development and poverty alleviation - combining research, locally grown solutions and technology with saving the world.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Najoua-Soudi.html",
    id: 40
});












index.add({
    title: "Ravi Chandra",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ravi Chandra\n            \n            UNDP India\n            Livelihood and Value Chain Specialist\n          \n        \n        \n          To be added\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Ravi-Chandra.html",
    id: 41
});













// builds reference data
var store = [{
  "title": "...through qualitative research tools that unlock financial needs and behavior in the context of rural resilience",
  "url": "/2_Understand/EGY.html",
  "content": "Qualitative research tools for understanding financial needs and behavior in the context of rural resilience\n\nWhat it does. These qualitative research tools use human-centered design and ethnography to structure interviews and focus groups to create personas to “put a face” to people who are typically viewed as beneficiaries, revealing deep explanatory insights into rural resilience and financial inclusion.\n\nValue proposition for the government/other partner. This suite of qualitative tools (i.e. interview guide, focus group guide, and village profile template) enables governments, local organizations, fintech startups and banks to more effectively design products and policies to help people live healthier financial lives.\n\nThe tools enable the understanding of different dimensions of communities’ experiences, highlighted below, through an ethnographic approach:\n\n\n  Livelihood and societal context;\n  Financial behavior and attitude towards formal and non-formal financial institutions;\n  Common and distinct hardships encountered by the communities, their impact and the tools used for adaptation and mitigation.\n\n\nWhy and when to use it. These research tools are most useful when you are either exploring the possibility of rolling out financial support programmes in service of a community or trying to determine the best way to do so. In either scenario, it is important to understand who you are designing for, what challenges they face, and what solutions and mechanisms they’re currently using to solve those challenges. To use this tool, it is essential to: 1) have existing connections with community organizations that can help engage people within the community and provide a safe space for the discussion to take place; 2) conduct preliminary consultations with practitioners and academics that have worked in this space before to contextualize the research questions and tools. In Egypt’s case, the team leveraged the existing strong NGO network from the small grants program. Once connected to the NGO, the team conducted an introductory call explaining clearly the objectives of the activities. After they agreed to support, the team made a visit to the NGO location to discuss in more detail the research learning question, create the village profile, and address any concerns anticipated by the NGO.\n\nKnown issues and troubleshooting. Conducting ethnographic research only makes sense if it is possible to influence and adapt the proposed interventions based on the learnings from the study. If it is not possible to change the implementation plan, then there is no need to question people and create a false sense of participation, which contributes to research fatigue. Additionally, when you do not have connections within the community, it is important to spend time and build trust.\n\nContext. Using these tools was the first step to better inform different activities and programs within UNDP (and for outside partners) on financial inclusion, specifically how it relates to rural resilience.\n\nThe tools emerged from the UNDP Egypt Accelerator Lab’s desire to understand what was happening in rural settings in terms of financial services and inclusion, and how this connected to rural resilience. In Egypt there is currently a heavy emphasis on rural development and financial inclusion. For example, there is a large government project focused on developing the poorest rural areas. However, there is little insight into how financial inclusion and rural resilience are related and through what channels financial tools can support the achievement of both goals.\n\nThe Lab had previously focused on agriculture and climate resilience for agriculture. But through conversations with financial institutions, financial inclusion emerged as an area of interest, and the lab decided to gain a deeper understanding of community contexts before moving forward with experiments and solutions and experiments.\n\nCost. The cost might vary from one region to the other. In the context of 2022 Egypt, it cost just under 10,000 USD.\n\n\n  A qualitative/human-centered design researcher (USD 9,300, for a UNV volunteer)\n  Rent a room or community space to run the interviews and focus groups (USD 60)\n  Transportation &amp; compensation for participants (USD 5/per person)\n  Transportation costs and accommodation for facilitating team (USD 150)\n\n\nPeople. At least two people are required but depending on the number of people participating and the timeline required to produce results, there could be more people involved.\n\n\n  One main researcher/facilitator and one supporting facilitator and note taker should be able to synthesize the information captured into personas and insights.\n  If the results will be shared with outside partners and teams, then a visual designer would be needed to translate the personas and insights into diagrams and illustrations.\n\n\nFocal point.\n\nAlik Mikaelian and Marwa Makhlouf.\n\nCountry, year, and language. Egypt, 2022, English.\n\nResources.\n\n\n  Final report. Read this report to understand how the research tools were used in the Egyptian context.\n  Village profile tool. Use this tool to understand the financial needs and behaviors of communities in your context.\n  In-depth Interview guide. Use this guide to collect qualitative insights on commmunities in your context through individual interviews.\n  Expense card. Use this resource to estiamte your expenses.\n  Focus group guide. Use this guide to collect qualitative insights on commmunities in your context through group conversations.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Qualitative research tools for understanding financial needs and behavior in the context of rural resilience What it does. These qualitative...",
  "id": 42
},{
  "title": "...through blockchain-based tracing of supply chain integrity",
  "url": "/7_Certify/IND.html",
  "content": "A digital platform to improve supply-chain traceability\n\nWhat it does.  The eSpice Bazaar pilot is a digital platform prototype that uses blockchain to aggregate and trace information about the supply chain production of chili and turmeric in India. The purpose of the pilot was to develop blockchain architecture to ensure traceability on the eSpice Bazaar platform developed by the government and test its functionality.  During the pilot, the block chain application was developed, deployed via Amazon Web Services, and integrated with the eSpice Bazaar portal to serve as its quality assurance and traceability backend. Architecture was built to extend traceability beyond the farm level, and data from 2,942 farmers producing chili and turmeric in Andhra Pradesh were collected, uploaded to the platform, and tested for immutability and retrievability. The traceability function of the platform was then demonstrated to the Spices Board via a user-friendly QR code system – the QR code on the spices package or the end product when scanned traces the product through every step of value chain and all the way back to the farm from where it originates. While this tool is not financial in a strict sense, it does use a technology, the blockchain, developed and used mostly in a fintech context.\n\nValue proposition. Indian spice farmers often invest heavily in the planting and harvesting of spices, only to be forced to sell them at low prices, often to middlemen who take a percentage of the profit. The eSpice Bazaar pilot lays the groundwork for a blockchain-powered platform that will enable farmers to sell directly to buyers. The completed platform will eventually create traceability from harvest to trade, provide market access and better prices to farmers, deliver higher quality produce to traders, and introduce visibility, transparency, accountability, and sustainability into the spices value chain.\n\nWhy and when to use it. Traceability can help increase the value capture of poorly compensated producers in a value chain. However, the probability of successful implementation is increased when there are neutral intermediaries such as the UNDP to coordinate the pilot, source technical expertise (e.g., through a private sector company), and attract government support (e.g., the Spices Board of the Ministry of Commerce and Industry of India).\n\nKnown issues and troubleshooting. A multi-sided platform only works when all key stakeholders participate. For this solution to be viable, farmers, aggregators and processors, certification agencies and exporters would all have to use the platform. More specifically, farmers and farmers’ associations would have to be comfortable with the technology and have access to it. Similarly, exporters and processors may require incentives to use a platform that could reduce their market power. Finally, the platform would need to deliver traceability beyond the farm level to facilitate trade.\n\nContext. India is the largest producer and consumer of spices in the world, exporting $3B worth of goods annually, and trading $1B domestically, between 2020 and 2022.ii Spice farmers already had low visibility within the value chain, and during the pandemic, they were forced to sell through aggregators who fixed prices. Additionally, the rejection of Indian exports due to difficulty meeting food safety regulations about aflatoxins, pesticide, and hygiene, impacts the value of export and profitability of the value chain.iii To address this challenge, UNDP India, with funding from the Japan Cabinet Office (JCO), partnered with the Spices Board from the Ministry of Commerce and Industry, to run a pilot with 2,942 chili and turmeric farmers in Andhra Pradesh. The NEC Corporation (which developed the blockchain backend), farmer producer organizations, and traceability and value chain experts also contributed to the effort.\n\nCost. USD 115,000, primarily used for human resources (contracting companies and consultants to deliver services) and communication.\n\nPeople\n\n\n  Project lead. The project lead will coordinate all key stakeholders, secures key partners, and manages relationships with donors.\n  Standards organization with technical expertise in value chain traceability. This organization will provide implementation support by coordinating with stakeholders such as the government, farmers, traders, quality control labs testing produce, and exporters and traders.\n  Blockchain solution developer. The developer will build the blockchain architecture required to conduct quality assurance at each level of the spice value chain.\n  Nonprofit or civil society organization with community relationships. This organization will mobilize farmers and manage data collection.\n\n\nFocal point. Ravi Chandra\n\nCountry, year, and language: India, 2021 to 2022, English\n\nResources\n\n\n  UNDP Spice Blockchain Project Scope of Work and Approach. Use this resource for an overview of the pilot’s implementation, including an overview of the harvest to trade process, stakeholder workflow, process workflow solution architecture, scope of work, team structure, implementation plan, etc.\n  Blog post. Use this resource for a narrative account of how the eSpice Bazaar pilot developed.\n  YouTube video. Use this resource as a visual account of how the eSpice Bazaar pilot developed.\n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "A digital platform to improve supply-chain traceability What it does. The eSpice Bazaar pilot is a digital platform prototype that...",
  "id": 42
},{
  "title": "Help people save",
  "url": "/3_Save/Index.html",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 42
},{
  "title": "... through financial bookkeeping micro courses to boost women entrepreneurs' business confidence",
  "url": "/2_Understand/LEB.html",
  "content": "Financial bookkeeping micro courses to boost women entrepreneurs’ business confidence\n\nWhat it does: This is a simple digital intervention that can assist entrepreneurs, especially women, to understand the core tenets of financial bookkeeping, a corner stone for both business success, and the confidence needed to make financial decisions, risks, and pitches. The intervention is built around behavioral research that followed 19 women entrepreneurs in Lebanon for a year as they took part in an economic empowerment program for women. Observing the participants in this programme provided sufficient data to build the pilot of a micro email course on book-keeping.\n business decisions.\n\nValue proposition: By using the different components of the “Micro email course” you will enable any partner to\n\n\n  Drastically improve the quality and relevance of recruits to women economic empowerment programs. The nature of digital online campaigns targeted at one demographic like “Women in Lebanon aged 18 to 45” allows for the call to action to be displayed to large numbers of women through online media, and the advantage is the ones that sign up and go through a 5-minute survey have at least filtered “appetite” in.\n  Ensure wide scale education of core financial literacy components in a localized manner which is the pre-requisite to financial decision making and investment acumen on the long run.\n  Attain quantitative and qualitative significant data on interest, adoption, and completion. The medium of “email” for delivery creates high levels of engagement if well designed, and it also allows detailed M&amp;E view on the intervention from “what could get women interested in this topic (via which ads they click on)” to “How many registered women in this email course went on to open all 7 emails and qualify for the free excel sheet reward?”\n\n\nThis intervention uses digital learning journeys to deliver on two of UNDP’s signature solutions by tackling inequality of opportunities (Poverty &amp; inequality ss) while also being deliberate about the profile of audience to grow and impact being women with digital access (Gender equality ss). It contributes to Sustainable Development Goals 5 (gender equality) and 9 (industry, innovation and infrastructure)\n\nWhy and when to use it: This email course journey is most useful when a program is aiming to recruit and identify a specific demographic entrepreneur profile while also understanding their localized pain points and learning gaps when it comes to financial literacy, as well as its relationship to delaying the achievement of that group of people’s business goals and financial stability or growth. The resources below are directly re-usable for a target group of Arabic-speaking female entrepreneurs in Lebanon. However, the tactics, journey, and financial literacy building blocks are transferable to other settings as well, as long as they have the same need for bookkeeping literacy and access to email.\n\nFinally, it is useful to recruit large numbers of people into a course journey, while also using the engagement journey of the course in order to achieve high fidelity tools to monitor and, later, evaluate the participants’ appetite for, understanding of and completion of the course.\n\nKnown issues and troubleshooting: For this tool to work you will require:\n\n\n  Some contact list or a media outlet that can broadcast the recruitment call.\n  Any email sending platform.\n  A local or regional success that can be the “modeling agent” of the micro learning content.\n\n\nContext: In 2021, the UNDP Lebanon Accelerator Lab participated in a one year-long behavioral research with 19 Lebanese female entrepreneurs. The  research singled out financial bookkeeping as an area of ill confidence, worry, and difficulty for all women. Building on these insights, and in partnership with the Regional Bureau of Arab States’ innovation unit, the Lab conducted structured interviews to assess more precisely the particiapants’ needs. This work powered the design of a bookkeeping course that speaks to the common phenomenon of time-poverty that women suffer by delivering easy, short, and localized video content on bookkeeping by email over a period of 7 days. The content included interactive knowledge testing, and a free reward upon completion.\n\nThe main transferrable tools used besides the course content shared in resources below:\n\n\n  The call for participation component used to recruit a defined target profile online through online media funnels removing tens of middlemen contractors and substantial cost, while also identifying which behavioral driver or barrier had the most impact for this particular demographics.\n  Chunking of financial bookkeeping knowledge into micro “just in time” learning resources modeled on a visible excel sheet and by a regional Arab-speaking woman entrepreneur resulted in improved engagement.\n  The offer of a free pre-programmed excel sheet (the same one used in the course content) as a reward for course completers acted as a powerful incentive to complete the course. This excel would be used to practice their learning directly on their businesses, we attribute this incentive framing to the 21% course completion rate (5% higher than that of a similar Coursera course).\n\n\nCost: 8,000 USD to commission a regionally well-known entrepreneur to co-design the course, and to acquire from her the IP of a pre-programmed spreadsheet file that can function as a complete, if basic, mini-bookkeeping system for small businesses; 5,000 USD to recruit participants via targeted online advertising. A subscription to an email automation platform such as MailChimp or similar is also needed.\n\nPeople: In Lebanon, this project involved the UNDP Accelerator Lab the UNDP Women Economic Empowerment project, and the gender unit,as well as external consultants. The following roles are needed:\n\n\n  Local success “role model” in topic of choice as content and tool as reward creator\n  Email automation specialist\n  Ads or PR specialist to launch the recruitment call in a manner that allows you to reach a specific target audience and allows participants to sign up to the course via survey\n  Gender specialist\n\n\nFocal point: Lilian Abou Zeki.\n\nCountry, year, and language : Lebanon, Period: 2022 to 2023, Arabic.\n\nResources: Course step-by-step. Consists of an instruction sheet in English, with links to all emails and video lessons, as well as to an inception survey and promotion videos. All materials are in Arabic.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Financial bookkeeping micro courses to boost women entrepreneurs’ business confidence What it does: This is a simple digital intervention that...",
  "id": 42
},{
  "title": "... through a video- and text message-based course on financial literacy for female entrepreneurs",
  "url": "/2_Understand/MAR.html",
  "content": "A video and text message based course on financial literacy for female entrepreneurs\n\nWhat it does. The experiment was to evaluate the effect of an online solution on women’s financial literacy. The training content, which was developed in ‘Kreol Morisien’ in video format, was used to train women-led entrepreneurs with struggling businesses who lacked financial literacy.\n\nMultiple methods, such as surveys, interviews and focus groups, were used to understand what aspects of entrepreneurial finance were most difficult or confusing for women entrepreneurs to understand through traditional class-type training. Then, the course content and delivery were tailored to address those issues and provide clear and relevant examples and exercises and the interaction.\n\nA baseline study of the cohort’s capacity was undertaken to obtain a comparative analysis, showcasing improvements, and equating them to the success of micro and small enterprises.\n\nThe experiment aimed to:\n\n\n  Design. An online solution, including YouTube videos in the local language, specifically in Mauritian Creole. This solution was tested to determine if it could efficiently enhance financial literacy for the pilot group of women entrepreneurs participating in the experiment.\n  Monitor. The perceived knowledge and understanding in the following key financial management practices, through a pre-test and post-test with the entrepreneurs, included:\n    \n      Understanding the Business Life Cycle\n      Understanding Basic Financial Statements\n      Budgeting\n      Working Capital Management_\n      Sources of Finance_\n      Costing a product and services_\n    \n  \n  Experiment with. Online peer-to-peer interactive platforms, specifically WhatsApp – a popular app used by most entrepreneurs on the islands within the Republic, for sharing of challenges and learnings, networking and also increasing the confidence of the participating entrepreneurs. More specifically, the experiment aimed to evaluate the impact of peer-to-peer communication on understanding of financial terms and motivation. WhatsApp allowed the participants to share their experiences, challenges, and feedback with each other in a convenient and familiar way.\n\n\nValue proposition. This simple, yet innovative approach aims to create an online financial literacy platform for women entrepreneurs. It seeks to support women-led micro and small enterprises in improving their financial resilience, operational capacity, and develop resilient business models. By using this approach, micro and small sized entrepreneurs can learn at their own pace and convenience, without affecting their daily activities. This initiative aligns with the UNDP’s Signature Solutions focused on addressing Poverty and Inequality as well as Gender Equality and can help achieve the key targeted SDGs 1, 5, 8 and 10.\n\nWhy and when to use it. The tool is most useful when the participants use the tool (videos) for learning when they are free from other entrepreneurial obligations, are motivated to exchange across the online platform and learn from challenges experienced, and also are able to apply learnings to their everyday activities.\n\nKnown issues and troubleshooting. While there are no known issues with the experiment, all risks were carefully monitored throughout. Emphasis was placed on conducting the experiment in a structured manner by the team. This entailed conducting a baseline test to evaluate the current level of financial literacy level and comparing the results post-learning. However, it was tested on a small group of thirty women entrepreneurs. If scaled up, a proper risk management and monitoring mechanism will be essential.\n\nContext. In 2022, the UNDP Mauritius and Seychelles Accelerator Lab facilitated a collective intelligence exercise with women entrepreneurs from MSMEs in Mauritius and Rodrigues. The group included participants from multiple sectors, notably from the tourism sector, affected by two successive COVID-related lockdowns. A key concern for the entrepreneurs was the limited financial literacy for them, which led to difficulties in filling out important documents like financial returns and VAT for the local revenue authority. It increased their operational costs and exacerbated the difficulties they already encountered in accessing affordable capital through the formal financial systems.\n\nCost. This initiative was funded by the UNDP Accelerator Lab and co-designed with the local academic institution for approximately MUR 780,000 (USD 17,300). The SME Mauritius and the National Women Entrepreneur Council collaborated by making this initiative accessible to women entrepreneurs from Mauritius and Rodrigues for the pilot experiment. With collaboration for scaling up with a ministry and other institutions, costs could be reduced as the content and design are available, although some small adjustments might be required to update the content, among others.\n\nPeople. The experiment was funded and co-designed by the UNDP Accelerator Lab Mauritius &amp; Seychelles team, in collaboration with the University of Mauritius serving as an external consultant and with the support of partners and collaborators including the Ministry of Gender Equality and Family Welfare, National Women Entrepreneur Council, Small and Medium Enterprise Mauritius.\n\nFor colleagues who seek to replicate the experiment, the following roles are needed:\n\n\n  Social Scientist/ Ethnographer/ Community Person. The social scientist should have the following skills: cultural awareness, observation, interviewing (fluent in local language), ethnographic writing and have the ability to collect data in an unbiased way. S/he should be proficient in various ethnographic methods such as participant observation, taking field notes, and thematic analysis, etc. S/he should be able to design the research questions, test hypotheses, use methods and instruments for conducting the experiment, as well as analyze the data and interpret the results in a scientific way. (Other important indirect skills include empathy, curiosity, strong ethics, etc.)\n  Finance Experts. Their skills should include financial literacy, accounting, budgeting, forecasting, investing for entrepreneurial activities (aligned with the experiment’s content and entrepreneurs’ requirements as determined by the survey).\n  Instructor/Trainer. A team of finance experts and an instructor are also necessaryThe instructor/ trainer should be able to teach a group of entrepreneurs with a basic level of understanding. Other skills for the instructor should include good communication, local language fluency, and having a pedagogical attitude.\n  Videographer. The videographer should be proficient in editing, production, animation, graphics, sound design and storytelling, as well as editing software and platforms. Additionally, a videographer should exhibit local language fluency, creativity, attention to detail, the ability to incorporate feedback from the target group, and time management. (The instructional videos are very short to match the attention span of the target group.)\n  Project Coordinator. A project coordinator is essential for the experiment to be successful as there are many activities to coordinate simultaneously. Skills include experience in project management and implementation, excellent communication and the ability to inspire collaboration among the team members and stakeholders. Finally, local language fluency, as well as monitoring and evaluation and risk management skills are also required.\n\n\nFocal point. Melany Poorun-Sooprayen.\n\nCountry, year, and language. Republic of Mauritius, 2022 to 2023, Mauritian Creole/ English.\n\nResources.\n\n\n  \n    Blog post in English. Read this blog to understand how the experiment was initiated.\n  \n  \n    Videos in Mauritan Creole with subtitles in English. The entire series has 13 videos.\n\n    \n      Understanding Business Cycle\n      Working Capital Management\n      Budgeting and Investment Appraisal (part 2)\n      Statutory Compliance (part 1)\n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "A video and text message based course on financial literacy for female entrepreneurs What it does. The experiment was to...",
  "id": 42
},{
  "title": "At a glance",
  "url": "/1_Getting%20started/TOC.html",
  "content": "The toolkit at a glance\n\nGetting started. This section explains the rationale for the toolkit, and how to use it\n\nHelp people understand. This section contains initiatives that help individuals and communities understand how to use financial services or increase their financial literacy, such as course and research tools.\n\nHelp people save. This section describes tools for digitizing community savings processes.\n\nHelp people pay.This section describes analog-to-digital payment tools.\n\nHelp people borrow. This section describes tools to help people access financial services.\n\nHelp people de-risk. This section describes tools to support the creation of accessible insurance products.\n\nEach tool in the toolkit is assigned to only one section. This is somewhat contrived, as in practice some of the solutions prototyped by the Accelerator Labs address jointly different dimensions of financial inclusion. An obvious example is the digitalization of the community practice of sanduk in South Sudan, which functions both as a saving and as a borrowing practice.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "The toolkit at a glance Getting started. This section explains the rationale for the toolkit, and how to use it...",
  "id": 42
},{
  "title": "Contributors",
  "url": "/Team.html",
  "content": "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Amanuel Tadesse\n        \n        UNDP Ethiopia Accelerator Labs\n        Head of Solutions Mapping\n      \n    \n    Amanuel has a diverse background with experience in government, NGOs, and the private sector. Currently, he works for the UNDP. In his role as a solution mapper, he is responsible for identifying and co-designing grassroots solutions to address community challenges. Before joining UNDP, Amanuel worked on testing and revamping business models related to rural finance, specifically focusing on voucher-based agricultural input distribution systems and seed marketing. He has also provided analytical support to various programs and has experience in designing and conducting surveys. Amanuel holds a PhD in geography from the University of Leuven, with a primary focus on urbanism. His academic interests revolve around exploring the intricate interactions between space and society, particularly within urban contexts in the global south.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lorena Moscovich\n        \n        UNDP Argentina Accelerator Labs\n        Head of Experimentation\n      \n    \n    Bio has been requested\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lilian Abou Zeki\n        \n        UNDP Lebanon Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Lilian leads on scoping user-led solutions/ grass root innovators/ positive deviants across different development areas in the country. She identifies underlying insights on behavior, trends, and systems that might make for solution learnings to experiment with inside UNDP and with partners, a role that can be likened to product management. Passionate about the way women experience work outside of the man-woman binary. Focused more on the unique nuances that make women entrepreneurs, business owners and leaders succeed, due to these nuances and not despite them.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Melany Anoushka Poorun-Sooprayen\n        \n        UNDP Mauritius and Seychelles Accelerator Labs\n        Head of Exploration\n      \n    \n    Melany is an experienced project manager with a demonstrated history of working in the renewables and environment industry. She is a strong program and project management professional with an MBA focused on Project Management from MANCOSA, and she’s skilled in corporate social responsibility, analytical skills, system monitoring, and management.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mariana Olcese\n        \n        UNDP Peru Accelerator Labs\n        Head of Exploration\n      \n    \n    Mariana joined UNDP Peru in 2020 as Head of Exploration. Before that, she worked as Public Affairs and Head of Institutional Affairs for companies like WeWork and Corporacion Breca. Mariana holds an MBA from Yale and Georgetown University. Her expertise encompasses stakeholder management, social and political monitoring, and the development of strategic corporate positioning. She is adept at fostering and leading dialogues between public and private actors, facilitating cooperation and knowledge sharing.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ximena González\n        \n        UNDP Peru Accelerator Labs\n        Inclusive Growth Coordinator\n      \n    \n    Leads Inclusive Growth team in UNDP Peru. Ximena is also a social entrepreneur, through Heroínas Peruanas, a non-profit association that promotes education and equal opportunities through educational materials about the lives of notable Peruvian women.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jacqueline Poni Aringu\n        \n        UNDP South Sudan Accelerator Lab\n        Head of Experimentation\n      \n    \n    Jacqueline is passionate about R&amp;D, and comes with a rich blend of both public and private sector experience in her experimentation role. She has worked on and coordinated various R&amp;D projects from both the government and private sectors. Jacqueline has worked in resource-limited settings, economically empowering vulnerable communities through women’s financial inclusion initiatives. Jacqueline is a strong team player and has effectively demonstrated leadership through innovative ideas. She is a very ambitious and result-oriented human, and these attributes have helped her show the utmost professional ethics.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tong Atak\n        \n        UNDP South Sudan Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Eng. Tong Atak is the Head of Solutions Mapping and the Digital Advocate at UNDP South Sudan. He studied his bachelor’s degree in computer engineering at Queen Mary University of London. He is a practicing engineer and has over 5 years of experience working in telecoms with Nokia across Western Europe in Research &amp; Development and development and technical account management. At UNDP, one of the notable projects Eng. Tong has project led was a pilot scheme to digitalize the traditional Sanduk savings scheme and migrate the analog process onto the M-Gurush platform. The success of this joint pilot with M-Gurush led to the development of a digital Sanduk called mSanduk being launched nationwide on their platform and being made available as a value-added service to their 1.7 million customer base. In addition, Eng. Tong in his capacity as the UNDP Digital Advocate works to identify and realize opportunities for digital project design and delivery in UNDP to be able to support the developmental aspirations of our lead partner the Government of South Sudan.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Moses Mwansa\n        \n        VillageSavers Technology Ltd.\n        CEO\n      \n    \n    Moses Mwansa, holder of a Master of Science Degree in Project Management, is the proprietor of VillageSavers Technology Ltd, a fintech that promotes financial inclusion in low-income and informal business through the VillageSavers app. VillageSavers helps SMEs (Small and Medium-sized Enterprises) adopt tech-based solutions in their businesses. Moses is a 2021 Mandela Washington Fellow from the University of Nebraska, Lincoln, a YALI Regional Leadership Program alumni from the University of South Africa (2019), and a participant in the US Department of State’s Tech-Camp program in Nigeria (2019), and Ghana 2016. VillageSavers has been used successfully by Cross Border Traders through the project Digitizing Trade and Financing for Women and Youth Cross Borders Traders, which is jointly financed by the Africa Borderlands Centre and UNDP Zambia.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sofia Silva\n        \n        UNDP Cabo Verde Accelerator Lab\n        Head of Exploration\n      \n    \n    Bio still missing\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Eduardo Gustale\n        \n        UNDP Accelerator Labs\n        Monitoring, Experimentation and Learning Specialist\n      \n    \n    Experienced in Sustainable Development and Social Innovation. Worked repeatedly in academic research, survey development, and market insight. Elected Global Shaper by the World Economic Forum &amp; Chevening Scholar for an MSc in Innovation and Entrepreneurship at the University of Warwick.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tayo Akinyemi\n        \n        UNDP Accelerator Labs\n        Learning and Community Manager\n      \n    \n    I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early-stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing the capacity of those enablers (especially early stage investors).\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alberto Cottica\n        \n        UNDP Accelerator Labs\n        R&amp;D Specialist\n      \n    \n    Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alik Mikaelian\n        \n        UNDP Egypt Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Alik is a strategic designer and researcher with a background in product and graphic design. She holds an MFA in transdisciplinary design, and a bachelor’s degree in product design.\n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marwa Makhlouf\n        \n        The American University in Cairo\n        Researcher\n      \n    \n    A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Salome Nakawze\n        \n        UNDP Zambia Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Najoua Soudi\n        \n        UNDP Morocco Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Equipped by my deeply rooted moral imagination and the critical thinking that emerges from having had roles that crossed so many programs, I embarked on a learning journey with the United Nations Programme for Development using an experimental approach to development and poverty alleviation - combining research, locally grown solutions and technology with saving the world.  \n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ravi Chandra\n        \n        UNDP India\n        Livelihood and Value Chain Specialist\n      \n    \n    To be added\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n  \n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Meet the Contributors Amanuel Tadesse UNDP Ethiopia Accelerator Labs Head of Solutions Mapping Amanuel has a diverse background with experience...",
  "id": 42
},{
  "title": "... with digital payments via neighborhood stores",
  "url": "/4_Pay/arg1.html",
  "content": "Digital payments via neighborhood stores\n\nWhat it does. The takeup of digital payment services are hindered by persisting digital divides. Even people who own computing devices and have access to the Internet are often reluctant to use them to make payment, as they do not feel confident enough and fear making mistakes, possibly paying more than they should. The Red Con Vos (“Network With You”) is a network of neighborhood stores, whose owners and managers own the necessary equipment for online payments and have been trained in how to help their fellow citizens in doing all kind of online administrative processes (not only payments). Residents gain the convenience of accessing digital payments; store owners charge a small fee for each transaction they facilitate, and, perhaps more importantly, benefit from residents visiting their stores more often.\n\nValue proposition for the government/other partner. By capacitating proximity businesses to transmit online payment and conduct other online transactions, this intervention contributes to the accessibility of these services to the least digitally included citizens, including children, the elderly and those with care duties. Rural communities can also be included, as long as there is a local store with an Internet connection. Additionally, the businesses themselves stand to gain new customers. The programme is sustainable, as it is financed with the savings that result from citizens not having to travel to distant location to use digital public services.\n\nWhy and when to use it. This tool is most useful when there is a digitized public administrative system with many administrative procedures that must be carried out online or in the central offices; when the access to both online and in-person procedures is problematic because of the lack of proper public transportation, high costs of public transportation, distance, and time restrictions —such as care or work responsibilities—, and when there are community markets with computers or mobiles, and Internet connection.\n\nKnown issues and troubleshooting. Some stores might not have IT devices or a stable Internet connection in the community; some store owners might not being keen on joining the network. Providing devices to the stores, and approaching stores that might have them already are among the solutions. It is also crucial to count on supportive local partners to provide assistance in establishing the network.\n\nContext. In 2019, the UNDP Accelerator Lab in Argentina observed that a few owners of neighborhood stores had started offering, as an additional service to their clients, the possibility to carry out digitally some official bureaucratic procedures – including digital payments – in the stores themselves. Many bureaucratic procedures have been digitalized in Argentina, but many residents do not feel comfortable with going through them without help. These residents fall back to travelling physically to the competent government office or bank, where, however, they are facing long waits because, with digitalization, these organizations are divesting from public-facing physical facilities. This behavior was found to be more frequent in women, the elderly, and low-income households. T. With the onset of the COVID-2019 pandemic, this service came to be in higher demand, as mobility was reduced. The Labs is attempting to scale up this idea from individual initiatives to a service with good coverage of the population. A first pilot in Concepción del Uruguay, in a province called Entre Ríos, launched in 2021; a second one launched in Fray, in a different province called Catamarca, in 2022. The two municipalities have different geographic and demographic characteristic, allowing to test the idea in different contexts. These two pilots show Red Con Vos to be financially sustainable, while saving travel time and distance for residents, supporting local commerce, and offering a partial solution to digital exclusion.\n\nCost. Between 10,000 and 60,000 USD depending on the size of the network and the resources locally available. The Concepción del Uruguay pilot cost 12,000 USD, with the local government overseeing the fieldwork to recruit the stores and invite them to join the network. It also took care of gathering the data to monitor and evaluate the initiative. The Fray pilot, as the local government did not provide any resources, cost 60,000 USD.\n\nTime. 3 to 4 months. The first two months are for project planning, followed by a two-month on-site implementation phase. Once deployed, the network is designed to be self-sustaining. A longer time frame may allow for more evidence to assess the experience.\n\nPeople. The project requires a project manager, a fieldwork manager, and a number of recruiters to recruit and train of the shopkeepers, and also to follow up the implementation of the project. Communication is crucial. Having a team of designers and someone in charge of producing a media kit and contacting the press is an asset. The many materials already designed and the guidelines are available for the fieldwork team.\n\nFocal point. Lorena Moscovich.\n\nCountry, year, and language. Argentina, 2021 and 2022, Spanish and English.\n\nResources.\n\nInformation\n\n\n  Microsite in English and in Spanish.\n  Report with detailed findings from the first pilot in Concepción (2021), available in English and Spanish.\n  Report with detailed findings from the second pilot in Fray (2022), available in English and in Spanish.\n\n\nGuidelines (in Spanish).\n\n\n  Guidelines for recruiters. Use this to explain to store owners what the implications of joining the network are. These can be used in most contexts after translation.\n  Guidelines for store owners. Use this to explain to store owners who have already joined the network how to supply this service, create trust, etc. These can be used in most contexts after translation.\n  Example procedures.This contains step-by-step procedures to execute digital payments and other digital bureaucratic procedures. These are written for the Argentinian digital landscape, and will need to be rebuilt for different contexts.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Digital payments via neighborhood stores What it does. The takeup of digital payment services are hindered by persisting digital divides....",
  "id": 42
},{
  "title": "Background and purpose",
  "url": "/1_Getting%20started/background.html",
  "content": "Background and purpose\n\nIn 2023, the UNDP Accelerator Labs decided to take stock of the work that its global network of 91 Labs, covering 115 countries, was doing in the area of finance. This work turned out to span the entire globe and to be highly diverse. Yet one regularity stood out: over two thirds of the Labs that were doing finance-related work on any kind had zeroed in on financial inclusion. What’s more, the vast majority of the network’s efforts towards financial inclusion, in turn, relied on the use of digital tools.\n\nEmerging from this work is a unique take on digital financial inclusion. First, the Labs have learned that digital tools are most inclusive when they are designed to support existing (good) practices and local knowledge. These practices tend be local (like traditional practices of community saving), or at least to have a local aspect (like local languages). This learning stands in contrast to the globalizing vocation of fintech, and of finance in general.\n\nSecond, the Labs have learned that digital instruments combine well with neighborhood and proximity. The groups most underserved by finance – like women, the elderly, and low-income communities – can greatly benefit from in-person socialization to financial literacy and the use of financial digital tools. In the absence of this kind of support, digital financial services risk becoming exclusionary – it is often easier and more profitable to serve the already served – or downright extractive – like in the case of microloans, that can cost a lot to naïve borrowers in things like fines for late payments. Counterintuitively, we find that the Labs work shows that “the most important part of digital financial inclusion is analog”.\n\nAs the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we partnered up with the Africa Borderlands Center to offer the experience accumulated by our network of labs in curated form. We are making it a toolkit: a collection of documented resources. It is meant to inspire would-be champions of digital financial inclusion. More than that, though, it is meant to empower them, by offering ready-made resources that can be re-used after having been adapted to a new context.\n\nMany champions of digital financial inclusion in the Global South are to be found within UNDP itself. In particular, we hope this toolkit will help the Country Offices that are moving to promote the inclusion of the underserved population; and the Africa Borderlands Center to find ever better ways.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Background and purpose In 2023, the UNDP Accelerator Labs decided to take stock of the work that its global network...",
  "id": 42
},{
  "title": ".. through tailored needs matching",
  "url": "/5_Borrow/cbv.html",
  "content": "Using digital data collection tools to support the matching of informal traders with support package.\n\nWhat it does: The web tool developed by the UNDP Cabo Verde Accelerator Lab supports the monitoring of microloans. Web-based and multi-platform, it pulls data from several sources: the Social Security Institute, the revenue authority, and commercial banks in the case of bank loans. An additional module integrates data from (typically telephone-based) follow-ups in the field. This data allows a quick analysis of each MSME’s position, and lists ones with non-compliance issues for faster action.- \nobjective of monitoring microcredits, allowing the agents in charge of non-compliant loans to pro-actively propose solution to the MSMEs affected. As a part of the solution, the lab provided a physical customer service desk at the main street market in Cabo Verde, Sucumira.\n\nValue proposition: A data-centric approach to microloans compliance allows organization in charge of supporting businesses to streamline their operation, and provide faster, more personalized support to each MSME.\n\nWhy and when to use it: This tool is most useful when (1) the volume of microloans is high and (2) there is a variety of loans and other support instruments available to MSMEs. The combination of these two conditions multiplies noncompliance risks and creates complexity in operations, to which the web tools offers a solution.\n\nKnown issues and troubleshooting: For this tool to work you will require: \n1) Existing catalogue of offers\n2) Training of staff and providing a physical location to be a “go to” troubleshooting center within the vicinity of the entrepreneurs.\n\nContext: As they scrambled to provide support to MSMEs struggling with the COVID-19 crisis, various public and private institutions in Cabo Verde created different support programs. Some of them consist of, or include, the provision of microloans. The very success of these programs created the need for a tool to allow a more dynamic follow-up. ProEmpresa, the agency in charge of supporting the business community, manages several such programmes; it partnered up with the Lab to build such a tool.\n\nCost: The Accelerator Lab funded this effort with a 15.000 USD investment. This can be broken down between 5.000 USD for Improving customer service at the Desk and in the Field - Sucupira Market and 10.000 USD to produce the Attendance Registration Module.\n\nPeople: For colleagues who seek to replicate the experiment, the following roles are needed:\n\n\n  1 consultant – support training for agents in the field\n  1 programmer – Developed digital tool\n\n\nFocal point: Sofia Silva\n\nCountry, year, and language : Cabo Verde, Period: 2020, Portuguese.\n\nResources: The available resources:\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Using digital data collection tools to support the matching of informal traders with support package. What it does: The web...",
  "id": 42
},{
  "title": "... through diagnostics meant to prepare the roll-out of a programme on risk insurance",
  "url": "/6_Derisk/eth.html",
  "content": "What it does. Insurance is a powerful tool to reduce uncertainty and precarity in people’s livelihoods. Unfortunately, robust insurance markets are not available in many Global South countries. These diagnostics are a form of inquiry that takes stock of the conditions for a programme on risk financing to do well. It examines the main demographic and economic features of the population in question; evaluates the potential risks, their geographic distribution and the relative exposure; the government’s capacity for risk management; maps the policy/regulatory landscape; and stakes out the actors on the insurance market.\n\nValue proposition for the government. By identifying strengths and weaknesses of the country under consideration, diagnostics enable the design of insurance products that are tailored to the local conditions, and of measures to support the risk finance ecosystem. Additionally, running the diagnostic is likely to enhance awareness of, and support from stakeholders, including government, insurance companies, and donors. This, in turn, is conducive to the creation of a more robust and inclusive insurance market.\n\nWhy and when to use it. Run diagnostics as the first step of a new workstream on risk financing. \nKnown issues and troubleshooting. Lack of time-series data (such as locally disaggregated census data) can “blind” the design of risk insurance programmes. In order to secure this data, it is essential to secure a collaboration with the government’s disaster risk prevention and preparedness service.\n\nContext. Ethiopia’s economy and households are exposed to the impacts of disaster shocks, with women and girls being disproportionately affected. Droughts, floods, and related food insecurity are the primary drivers of disaster response costs, and all are poised to become more frequent as the planet warms. To respond to disaster shocks, Ethiopia is largely reliant on ex-post financing—primarily official development assistance and humanitarian appeals, budgetary reallocations, and emergency borrowing. In 2021, UNDP launched a new flagship initiative, the Insurance and Risk Finance Facility, to support the development of insurance markets beyond their current reach. Ethiopia was selected for an intervention in this sense.\n\nCost. Limited to personnel. A lead researcher and a research assistant for two months full-time equivalent each. In the case of Ethiopia, this adds to about $8,000.\n\nTime. About 8 months.\n\nPeople. One research lead and one in-country researcher. Significant support was provided by three more in-country people, who prepared a preliminary report (“pre-diagnostic”) in response to a list of questions.\n\nFocal point. Amanuel Tadesse.\n\nCountry, year, and language. Ethiopia, 2023, English.\n\nResources.\n\n\n  Blog post. Use this resource for a narrative account of how this initiative came to pass in Ethiopia.\n  Pre-diagnostic report. Use this resource to get an idea of the sort of data that are needed to prepare a diagnostic report.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "What it does. Insurance is a powerful tool to reduce uncertainty and precarity in people’s livelihoods. Unfortunately, robust insurance markets...",
  "id": 42
},{
  "title": "How to use the toolkit",
  "url": "/1_Getting%20started/how-to-use-the-toolkit.html",
  "content": "How to use this toolkit\n\nArchitecture\n\nWe use the metaphor of the toolkit to emphasize the operational, enabling nature of the work you are reading right now.\n\n\n  The Toolkit is a set of resources and their documentation materials meant to help people and organizations who want to support innovation ecosystems.\n  The toolkit contains tools. Each tool consists of one or more resources, documented in a page of this website.\n  A resource is a document that can be re-used, in part or as a whole. Examples are talking points or slide decks to argue for supporting innovation ecosystems; workplans and lists of deliverables to achieve operational status for a government innovation unit; agendas for workshops meant to socialize key concepts around innovation with senior civil servants; curricula for courses on key skills useful to employees of an innovation unit. Resources are accessible via live links from the factsheets, with a UNDP corporate login.\n  Website pages contain resources metadata, accessible to everyone. Each page is dedicated to one tool, and explains what the tool is good for; what it is not good for; the context in which it was produced; how much money and time you will need to deploy it, and so on. You will also find a reference to the person or people who created the resource in the first place.\n\n\nUsing this toolkit in four easy steps\n\n1. Decide what you want to do and browse the catalogue\n\nThe tools in this kit are labelled according to function, with names like “How to map the innovation ecosystem” and “How to take a newly created innovation unit to fully operational status”. They  are sorted into into four main categories, based on the requests that UNDP’s government partners have brought to the Accelerator Labs in the period 2019-2022. Tools within the same category combine naturally. The navigation bar on the left of the screen acts as a catalogue: browse it and navigate to any tool you like.\n\n2. Read the description from this website\n\nEach tool’s website page contains information you can use to decide if that tool is useful to you after all. Is it function aligned with your own purpose? Is it compatible with your time and money budget? Did its deployment run into problems, and how were they addressed? And so on.\n\n3. Read and reuse the resources\n\nIf the description of the tool looks interesting, you can move on to the resource itself. This might be a slightly harder read (it was not written with your case in mind!), and almost certainly you will need to make changes to it. Hopefully that still saves you time and effort with respect to starting from scratch. In the prototype version, you will need a undp.org email address to access resources.\n\n4. Ask for support\n\nAll resources have a lead author, or “focal point”. The ethos of UNDP’s Accelerator Labs and Africa Borderlands Center is one of sharing knowledge, so you can reach out to the focal point if you need more information and support.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "How to use this toolkit Architecture We use the metaphor of the toolkit to emphasize the operational, enabling nature of...",
  "id": 42
},{
  "title": "Help people certify",
  "url": "/7_Certify/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 42
},{
  "title": "Help people pay",
  "url": "/4_Pay/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 42
},{
  "title": "Help people borrow",
  "url": "/5_Borrow/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 42
},{
  "title": "Help people understand",
  "url": "/2_Understand/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 42
},{
  "title": "Getting Started",
  "url": "/1_Getting%20started/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 42
},{
  "title": "Help people de-risk livelihoods",
  "url": "/6_Derisk/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 42
},{
  "title": "Welcome",
  "url": "/",
  "content": "Welcome to the Digital Financial Inclusion Toolkit\n\nThe content of this site is property of the United Nations Development Programme, and published under a Creative Commons 4.0 Attribution license.\n\nHuge thanks to everyone who contributed to creating this prototype. All contributors and curators are part of the UNDP Accelerator Labs unless otherwise indicated. Contact information for each one is available on the Contributors page.\n\nCuration task force: Lilian Abou  Zeki (Lebanon), (Tayo Akinyemi (Global Team), Jacqueline Aringu (South Sudan), Tong Atak (South Sudan), Alberto Cottica (Global Team), Eduardo Gustale (Global Team).\n\nContributors: Ximena Gonzalez (Peru), Lorena Moscovich (Argentina), Mariana Olcese (Peru), Melany Poorun-Sooprayen (Mauritius and Seychelles), Sofia Silva (Cape Verde), Najoua Soudi (Morocco) Amanuel Tadesse (Ethiopia).\n\nTechnical support: Adedapo Aderemi (Global Team), Jeremy Boy (Global Team).\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Welcome to the Digital Financial Inclusion Toolkit The content of this site is property of the United Nations Development Programme,...",
  "id": 42
},{
  "title": null,
  "url": "/assets/lunr-feed.js",
  "content": "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.field('sdg')\n  this.field('tags')\n  this.field('url')\n  this.ref('id')\n});\n\nwindow.tags = []\nwindow.sdg = []\n\n{% assign count = 0 %}\n{% for post in site.pages %}\n{% unless post.url contains 'assets/' %}\nindex.add({\n    title: {{post.title | jsonify}},\n    content: {{post.content | strip_html | jsonify}},\n    tags: {{ post.tags | jsonify }},\n    sdg: {{ post.sdg | jsonify }},\n    url: {{ post.url | jsonify }},\n    id: {{count}}\n});\n\n{% assign tags = \"\" | split: \",\" %}\n{% for tg in post.tags %}\n    {% unless tags contains tg %}\n        {% assign tags = tags | push: tg %}\n    {% endunless %}\n    window.tags = {{ tags | jsonify}}\n{% endfor %}\n\n{% assign sdg = \"\" | split: \",\" %}\n{% for cg in post.sdg %}\n    {% unless sdg contains cg %}\n        {% assign sdg = sdg | push: cg %}\n    {% endunless %}\n    window.sdg = {{ sdg | jsonify}}\n{% endfor %}\n\n\n{% endunless %}\n{% assign count = count | plus: 1 %}\n{% endfor %}\n\n\n// builds reference data\nvar store = [{% for post in site.pages %}{\n  \"title\": {{post.title | jsonify}},\n  \"url\": {{ post.url | jsonify  }},\n  \"content\": {{post.content | strip_html | jsonify}},\n  \"tags\": {{ post.tags | jsonify }},\n  \"sdg\": {{ post.sdg | jsonify }},\n  \"excerpt\": {{ post.content | strip_html | truncatewords: 20 | jsonify }},\n  \"id\": {{ count }}\n}{% unless forloop.last %},{% endunless %}{% endfor %}]\n\n\n// builds search\n$(document).ready(function() {\n  $('input#search').on('keyup', function () {\n    var resultdiv = $('#results');\n    var contentdiv = $('#content');\n\n    var query = $(this).val();\n    var result = index.search(query);\n    resultdiv.empty();\n    contentdiv.empty()\n    \n    // Add status\n    resultdiv.prepend('Found '+result.length+' result(s)');\n    // Loop through, match, and add results\n    for (var item in result) {\n      var ref = result[item].ref;\n      var searchitem = `\n      \n        \n        \n            ${store[ref]?.title}\n        \n        \n        \n            ${store[ref].excerpt}\n        \n    \n      `\n\n      resultdiv.append(searchitem);\n    }\n  });\n  \n\n  //POPULATE TAGS AND SDG FILTER\nvar tagsdiv = $('#tag-div');\nvar sdgdiv = $('#sdg-div')\n\nif(tags.length > 0){\n    let tg = `\n    \n        \n        Tags\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${tags[i]?.toUpperCase()}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    tagsdiv.append(tg)\n}\n\nif(sdg.length > 0){\n    let tg = `\n    \n        \n        SDG\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${sdg[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    sdgdiv.append(tg)\n}\n\nlet taglist = []\nlet sdglist = []\n\nlet searchitemfn = post => `\n\n    \n    \n        ${post?.title}\n    \n    \n    \n        ${post.excerpt}\n    \n\n`\n\nlet resultdiv = $('#results');\nlet contentdiv = $('#content');\nlet contentCopy = $(\"#content\").html(); // Store the current content\n\nlet filterresult = () => {\n    resultdiv.empty()\n    resultdiv.prepend('Showing results for  ' + [...sdglist, ...taglist].toString() + '');\n    for(post of store){\n        if(post?.tags?.some(tg => taglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n    };\n}\n\n$(document).on('multiSelectInputToggle', (e) => {\n    let { value, checked, name } = e.target;\n    \n    if(checked && name === 'tags') taglist.push(value)\n    else if(checked && name === 'sdg') sdglist.push(value)\n    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)\n    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)\n  \n    filterresult()\n\n});\n\n$(document).on('filterSearchChipRemoval', (e) => {\n    let textContent = e.target.getAttribute('option-name');\n    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)\n    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)\n    filterresult()\n});\n\n$(document).on('filterSearchClear', (e) => {\n    sdglist = [];\n    taglist =  [];\n    resultdiv.empty()\n    $(\"#content\").html(contentCopy);\n});\n\n//GET ELEMTENTS WITH ID TAGS AND SDG\n$('.tag-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    taglist = [ textContent ]\n    sdglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.sdg-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    sdglist = [textContent]\n    taglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n})",
  "tags": null,
  "sdg": null,
  "excerpt": "// builds lunr var index = lunr(function () { this.field('title') this.field('content', {boost: 10}) this.field('sdg') this.field('tags') this.field('url') this.ref('id') }); window.tags =...",
  "id": 42
},{
  "title": "... the opportunities for digital financial inclusion through a digital finance ecosystem assessment in your country",
  "url": "/2_Understand/mor.html",
  "content": "**What it does**. The SDG Digital Finance Ecosystem Assessment (SDFE) provides an in-depth understanding of the drivers that make a country digital finance ready, which in turn supports the design of policy interventions and investments needed to fast-forward its digital journey. The assessment helps link digital finance policies with SDG financing as well as the government and regulators’ climate resilience commitments. It also investigates the digital economy and digital finance ecosystem to understand the current level of (digital) financial inclusion for underserved segments of the population, with a specific focus on women, to identify key drivers and opportunity areas within the digital economy that can advance inclusion. \n\n**Value proposition**. Using this assessment, UNDP can help a government to identify gaps and opportunities within their domestic digital finance ecosystems, revealing the level of inclusion of vulnerable segments in digital finance and the broader digital economy, and measuring the extent to which the digital finance ecosystem is aligned with national SDG priorities. \n\n**Why and when to use it**. This tool is appropriate for a government that wants to use data to understand where the gaps and opportunities for financial inclusion lie and use it to inform their national development strategy and policies. Established relationships with national partners and private sector partners are critical to conducting the SDFE successfully. Pre-existing relationships with NGOs that have ties to people and communities are often overlooked, are also essential to collecting in-depth data from diverse sources. \n\n**Known issues and troubleshooting**. Collecting good qualitative and quantitative data from diverse sources is time and labor intensive. It requires managing many levels of stakeholders to secure high response rates for surveys and participants for interviews and consultations. Additionally, because there is quantitative data collected at the global level, e.g. GSMA, there is added value to gathering granular and nuanced qualitative data (global data also serves as a benchmark). Given the above, it’s important to work with a flexible timeline. \n\n**Context**. In 2018, the Moroccan government prioritized improving financial inclusion and envisioned a transition to a cashless and digital local economy. As a result, the National Financial Inclusion Strategy was developed. However, despite Morocco’s status as a lower-middle-income country with a sizeable underbanked population, digital finance is underexploited as a catalyst for inclusive growth. For example, digital payments have the potential to expand access to finance for the unbanked and underbanked, but digital payment adoption is still in its very early stages.    \n\n**Cost**. Approximately USD 40,000 for a consultant, and a high-level event to share policy recommendations and best practices from other countries. \n\n**People**. A *UNDP Country Office* (or a similarly equipped unit) can participate in the assessment design process, provide input and engage in troubleshooting during the research implementation process. A *researcher* can help coordinate stakeholders, conduct interviews and co-author the report. \n\n**Focal point**. [Najoua Soudi](/Financial-inclusion-toolkit/contributors/Najoua-Soudi.html) \n\n**Country, year, and language**. Morocco, 2023, English and/or French  \n\n**Resources**  \n\n* [Report on assessment findings](https://www.undp.org/fr/morocco/publications/rapport-devaluation-de-lecosysteme-de-la-finance-digitale-au-maroc-sdfe) (French). Use this resource to see how the digital finance ecosystem assessment can deliver insights on financial inclusion. \n* [UNDP/UNCDF joint offer on digital financing of the SDGs](https://www.uncdf.org/joint-undp-uncdf-df-of-the-sdgs) (English)",
  "tags": null,
  "sdg": null,
  "excerpt": "**What it does**. The SDG Digital Finance Ecosystem Assessment (SDFE) provides an in-depth understanding of the drivers that make a...",
  "id": 42
},{
  "title": "... by digitizing community savings  processes",
  "url": "/3_Save/ssd.html",
  "content": "# Digitizing commmunity savings groups\n\n**What it does**. \nThis process will help capture the user requirements of an analog community savings model to enable its digitalization.\n\nThe series of steps taken to execute this experiment included the following:\n\n1. **Co-creation**. The co-creation, baseline, and solutions mapping phase brought the Sudan and South Sudan accelerator labs together with local border communities to better understand the their on-the-ground context and lived experiences. This phase was critical to establishing a deep connection with the border communities and to ensuring community ownership of the innovation. This co-creation process resulted in community-informed updates and revisions to the concept, processes, and budget.\n2. **Validation survey**. This stage was critical to assessing community buy-in and validation of the digital sanduk model, drafting a work plan and budget, identifying on-the-ground partners and supporters of the initiative, and benchmarking the labs' understanding of context and lived experience.\n3. **Community Immersion**. The objective of the community immersion was to enhance the quality of innovation through active listening, observing, learning, and constructive interaction with key community stakeholders that were critical to the success of the innovation.  \n4. **Launching of the digigtal sanduk**. During this stage, sanduk members completed their registrations for digital mobile money and tested the digital sanduk platform. Specifically, members of the experimental group transferred their shares digitally to a separate sanduk platform.\n5. **Close-out/Roll out**. The South Sudanese lab team travelled to Warawar to debrief participants and stakeholders about the experiment outcomes, outlining the digital sanduk journey. \n\nFollow [this link](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/The%20Experiment%20Journey.pdf) to learn more.\n\n**Value proposition for the government/other partner**.\nDigitizing the sanduk makes cash available to members to borrow during emergencies. It allows members to save and borrow money easily, and track transactions and savings to build a financial profile that enables them to secure bank loans. Additionally, this process will enable any entity seeking to improve the operational efficiency and safety of analog savings group processes, to digitize them and provide records of financial transactions that banks and other formal institutions can use to extend financial services. Finally, a private sector company can use this process as a form of R&D to develop a financial services product to serve excluded rural communities. Or civil society organizations may utilize the training component to empower more women in informal business with basic business and digital literacy skills. All this means increased access to financial services, and therefore (directly) a boost to financial inclusion and (indirectly) a boost to business growth.   \n\n**Why and when to use it**. To replicate the model successful, several conditions need to be in place, such as:\n - Structured community savings groups;\n - Ubiquitous mobile money services provided by private sector entities;\n - Private sector partners that can ensure the continuity and sustainability of the services;\n - An enabling environment for innovation, as defined by policy, legislation and best practices;\n - Good quality contextual information, such as the level of infrastructural support, physical and digital security, logistics, socio-political contexts, and how these elements will facilitate or hamper the use of digital technology;\n - Training in digital literacy, financial literacy, and how to use legal services, to help sanduk members learn the basics of business management and market rules and regulations.\n\nIn the long term, addressing the lack of banking infrastructure will also help community savings schemes transact more efficiently.\n\n**Known issues and troubleshooting**. Technical infrastructure such as phones and mobile network access and community savings groups who are willing to try digital solutions are required to replicate this model.\n\n**Cost**. \nThe entire activity cost approximately 100,000 USD, allocated as follows:\n - 12,0000 for the community immersion (flights to Abyei & Warawar, ground transportation, security, and food); \n - 16,000 for echnical support;\n - 60,000 for community engagement (commodity booster packages, M&E, and ongoing commmunication with savings groups);\n - 10,000 for capacity building trainings.\n\n**People**.\nThe required roles for this experiment include:\n\n - Community mobilizer/local partner. This implementing partner, most likely a CSO, will have deep community ties so it can lead the community immersion, mobilize the community, and conduct financial literacy training.\n - Interpreter. The interpreter will ease communications between the implementing team and the community, if needed.\n - Technical counterpart. A software developer who has soft skills and understands the community.\n - Research team. These research volunteers can document insights. [double check]\n - Data analyst. The data analyst will design the survey tools and process the data collected.\n - Technical Support. The technical support lead with support the project lead. [double check]\n\n**Context**. In remote areas along borders, making payments is often a struggle, banks are inaccessible, and access to finance and financial services is nonexistent. Many communities in rural settings use sanduks, or community savings groups, to pool money and safeguard it from wildfires. Similarly, at the border of South Sudan and Sudan, crossborder traders often sent money to Khartoum through Cairo for the purchase of their goods from Sudan. This extended the amount of time it took to get their goods delivered. This same group also had their own sanduk saving group, which made it easier for them to be incorporated.\n\nAn \"analog-to-digital savings\" experiment was launched to explore innovative ways to address these challenges. The theory of change was that by digitalizing sanduks, group members in communities would keep their communally pooled funds safe, enable access to emergency funds for social needs, such as paying school fees and medical bills, and build digital financial profiles that would enable to solicit loans from financial service providers. The initial focus of the experiment was on women's financial inclusion, cross-border traders were later added. \n\n**Focal points**. [Jacqueline Aringu](/Financial-inclusion-toolkit/contributors/Jacqueline-Poni-Aringu.html) and [Tong Atak](/Financial-inclusion-toolkit/contributors/Tong-Atak.html).\n\n**Country, year, and language**.\nSouth Sudan, 2022-2023, English.\n\n**Resources**.\n\n - [Use this concept note to understand how the baseline survey was deployed](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/0a2ab4368bbc336c842e3026e6f9d45681ec6d79/3_Save/Concept%20Note_%20Baseline%20Survey%20and%20Sensitization%20(Sanduk%20Experiemnt).pdf) and [to learn how immersions and follow-ups were conducted](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/9c70b6f5fac189aae8c220bf804cc738751632d6/3_Save/The%20Experiment%20Journey.pdf) check this link and [to follow how the experiment was concluded](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/d704e97b84ab06ca1bcbb887c36b7aea23c10a7f/3_Save/Joint%20ABC%20and%20AccLab%20closing%20mission%20for%20the%20Digital%20Sanduk%20experiment.pdf).\n - [TOR for the m-Gurush consulting service](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/TOR%20Video%20Documentation.pdf). Use this TOR as a reference document to hire a consultant to provide videography and photography services.\n - [Baseline survey](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/Revised%20Sanduk%20Baseline%20Questionnare%202-March%202022.pdf). Use this resource as a template to develop a baseline survey for your context. \n - [Needs assessment and endline survey](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/Concept_%20Endline%20Survey%20of%20Sanduk.pdf). Use this resource as a template to develop a needs assessment and endline survey for your context.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "# Digitizing commmunity savings groups **What it does**. This process will help capture the user requirements of an analog community...",
  "id": 42
},{
  "title": "Values and attitude",
  "url": "/1_Getting%20started/values.html",
  "content": "## Values and attitude\n\n### Values\n\nThis toolkit was produced in the cultural context of UNDP’s Accelerator Labs. It inherits their culture of deep listening, immersion within the everyday reality of the Global South, respect for grassroots innovation, openness, and epistemological humility. It does not seek to provide turnkey solutions, but to share the knowledge accumulated along the way, in the hope of making the task of supporting innovation ecosystems a little less difficult.\n\n### Support and enhance grassroots approaches\n\nMost people in the Global South do not have bank accounts, and are generally not served by traditional basic financial services. Many communities have found ways to produce functionally equivalent financial services: for example, the Accelerator Labs have documented forms of community savings. Rather than treat them as indcation of backwardness, we recommend them looking to these forms of grassroots finance as collective intelligence, and, where the potential is there, build upon them. A good example is the digital version of the form of community saving practiced in South Sudan by the UNDP Accelerator Lab in that country,\n\n### Focus on the \"last mile\" of finance \n\nFinancial networks span the planet, but, in the Global South, they are sparse. This toolkit focuses on the \"last mile\" of financial inclusion, where communities that might be harder to serve for  traditional providers of financial services get connected to those global networks. Financial literacy is a major enabler of inclusivity, and the UNDP Accelerator Labs have accumulated substantial experience in this area.\n\n### Digital cuts both ways\n\nFintech entrepreneurs have used the potential of digital ecosystems to build new financial services on top of the existing ones. This is exciting, but its very efficiency is at risk of leaving further behind those who are financially and/or digitally excluded. The Accelerator Labs have prototyped ways that this exclusionary dynamics can be overcome by things like making digital payments in neighborhood stores. In a last mile context, the most important part of digital finance is analog.",
  "tags": null,
  "sdg": null,
  "excerpt": "## Values and attitude ### Values This toolkit was produced in the cultural context of UNDP’s Accelerator Labs. It inherits...",
  "id": 42
},{
  "title": "... through an app to digitize financial transactions in cross-border trade",
  "url": "/3_Save/zam.html",
  "content": "# An app to digitize financial transactions in cross-border trade\n\n**What it does**.\n The VillageSavers app digitizes trade and financing for cross border traders who are women and young people, in their shared border towns of Livingstone (Zambia) and Victoria Falls (Zimbabwe). More specifically, the app:\n\n- Allows informal Self-help Savings Groups (SHGs) to digitize their financial transactions records (savings and loans) through an automated digital system.\n- Solves problems of poor record keeping, human error, lack of transparency, and distrust as each member has access to the information in real time.\n- Increases informal businesses' access to formal financial services as private banks have reported that the app's credit history can be used to guarantee one's qualification to access financial support.\n\n**Value proposition for the government/other partner**.\n By using the VillageSavers app, self-help savings groups have a comprehensive solution to the challenges faced in informal savings groups. It not only improves financial management and transparency but also opens new opportunities for digital financial inclusion and access to formal financial services.\n\nNotably, the VillageSavers app is most useful within the informal sector, catering to individuals who lack access to formal banking services. This community seeks to collectively pool their resources, thereby bolstering their borrowing and lending capabilities, leading to increased revenue for their businesses. Additionally, the app has demonstrated its value to formal financial institutions, as it helps them identify creditworthy patterns within the informal business sector, making it a viable tool for extending financial support to unbanked populations.\n\n\n**Why and when to use it**. Small scale cross border traders (SSCBTs) suffer from lack of access to pensions, as well as other financial products and services because they are unable to engage with the pension authority and banks, who view serving them as risky. Using an app such as VillageSavers will create a digital transaction history that would enable banks and the pension authority to do more accurate risk assessments on SMEs that use it.\n\nIn order for the VillageSavers app to be effective, it's important to have SMEs that have the following characteristics:\n\n- Actively trading;\n- Participating in a savings group;\n- Have access to smartphones, internet and a basic level of financial and digital literacy (or are willing to receive assistance to access phones and training).\n\n**Known issues and troubleshooting**. Key challenges are lack of digital skills, poor or limited internet connectivity, and difficulty accessing a smartphone, which can be price-prohibitive for some SMEs. SMEs might also experience difficulties using the app, for which they'd need technical and troubleshooting support.\n\n**Cost**. Approximately $100,000, with the following breakdown:\n\n- App maintenance, including trouble shooting, hosting fees etc., 35,000\n- Smart phones, 20,000\n- Meetings with beneficiaries, 10,000\n- DSA and upkeep expenses, 15,000\n- Travel expenses, 15,000\n- Miscellaneous, 5,000\n\n**People**.\n\n**Project Manager**. The project manager would need to develop concept note, design the experiment, collect baseline data, build partnerships, and provide direct oversight and management of the implementation of the proof of concept.\n\n**External Consultant**. A research consultant would implement surveys, run focus group discussions, and compile the report.\n\n**Innovator (as an implementing partner)**. The innovator implementing partner would refine the existing platform, deploy the app, carry out digital and financial skills training, and coordinate CBT (Cross Border Traders) participation, monitoring, and data sharing.\n\n**Focal point**. [Moses Mwansa](/Financial-inclusion-toolkit/contributors/Moses-Mwansa.html).\n\n**Country, year, and language**. Zambia, 2021-2023, English.\n\n**Resources**.\n\n - [UNDP Exposure Report](https://undpinzambia.exposure.co/innovation-helps-zambian-women-and-youths-bounce-back-in-crossborder-trade). Read this report for a narrative account of the VillageSavers app initiative, context, and impact.\n - [Endline Report](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/ea85eca40cddb8e2df554119a6194e60ad04d3c7/3_Save/03_05_22_ENDLINE%20REPPORT_CHUNI%20PATRICK.pdf). Read this report to gain insight into the impact of the VillageSavers app.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "# An app to digitize financial transactions in cross-border trade **What it does**. The VillageSavers app digitizes trade and financing...",
  "id": 42
},{
  "title": "Amanuel Tadesse",
  "url": "/contributors/Amanuel-Tadesse.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Amanuel Tadesse\n            \n            UNDP Ethiopia Accelerator Labs\n            Head of Solutions Mapping\n          \n        \n        \n          Amanuel has a diverse background with experience in government, NGOs, and the private sector. Currently, he works for the UNDP. In his role as a solution mapper, he is responsible for identifying and co-designing grassroots solutions to address community challenges. Before joining UNDP, Amanuel worked on testing and revamping business models related to rural finance, specifically focusing on voucher-based agricultural input distribution systems and seed marketing. He has also provided analytical support to various programs and has experience in designing and conducting surveys. Amanuel holds a PhD in geography from the University of Leuven, with a primary focus on urbanism. His academic interests revolve around exploring the intricate interactions between space and society, particularly within urban contexts in the global south.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Amanuel Tadesse UNDP Ethiopia Accelerator Labs Head of Solutions Mapping Amanuel has a diverse background with experience in government, NGOs,...",
  "id": 42
},{
  "title": "Lorena Moscovich",
  "url": "/contributors/Lorena-Moscovich.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lorena Moscovich\n            \n            UNDP Argentina Accelerator Labs\n            Head of Experimentation\n          \n        \n        \n          Bio has been requested\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lorena Moscovich\n            \n            UNDP Argentina Accelerator Labs\n            Head of Experimentation\n          \n        \n        \n          Bio has been requested\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "id": 42
},{
  "title": "Lilian Abou Zeki",
  "url": "/contributors/Lilian-Abou-Zeki.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lilian Abou Zeki\n            \n            UNDP Lebanon Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Lilian leads on scoping user-led solutions/ grass root innovators/ positive deviants across different development areas in the country. She identifies underlying insights on behavior, trends, and systems that might make for solution learnings to experiment with inside UNDP and with partners, a role that can be likened to product management. Passionate about the way women experience work outside of the man-woman binary. Focused more on the unique nuances that make women entrepreneurs, business owners and leaders succeed, due to these nuances and not despite them.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Lilian Abou Zeki UNDP Lebanon Accelerator Lab Head of Solutions Mapping Lilian leads on scoping user-led solutions/ grass root innovators/...",
  "id": 42
},{
  "title": "Melany Anoushka Poorun-Sooprayen",
  "url": "/contributors/Melany-Poorun-Sooprayen.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Melany Anoushka Poorun-Sooprayen\n            \n            UNDP Mauritius and Seychelles Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Melany is an experienced project manager with a demonstrated history of working in the renewables and environment industry. She is a strong program and project management professional with an MBA focused on Project Management from MANCOSA, and she’s skilled in corporate social responsibility, analytical skills, system monitoring, and management.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Melany Anoushka Poorun-Sooprayen UNDP Mauritius and Seychelles Accelerator Labs Head of Exploration Melany is an experienced project manager with a...",
  "id": 42
},{
  "title": "Mariana Olcese",
  "url": "/contributors/Mariana-Olcese.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mariana Olcese\n            \n            UNDP Peru Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Mariana joined UNDP Peru in 2020 as Head of Exploration. Before that, she worked as Public Affairs and Head of Institutional Affairs for companies like WeWork and Corporacion Breca. Mariana holds an MBA from Yale and Georgetown University. Her expertise encompasses stakeholder management, social and political monitoring, and the development of strategic corporate positioning. She is adept at fostering and leading dialogues between public and private actors, facilitating cooperation and knowledge sharing.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Mariana Olcese UNDP Peru Accelerator Labs Head of Exploration Mariana joined UNDP Peru in 2020 as Head of Exploration. Before...",
  "id": 42
},{
  "title": "Ximena González",
  "url": "/contributors/Ximena-Gonzalez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ximena González\n            \n            UNDP Peru Accelerator Labs\n            Inclusive Growth Coordinator\n          \n        \n        \n          Leads Inclusive Growth team in UNDP Peru. Ximena is also a social entrepreneur, through Heroínas Peruanas, a non-profit association that promotes education and equal opportunities through educational materials about the lives of notable Peruvian women.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Ximena González UNDP Peru Accelerator Labs Inclusive Growth Coordinator Leads Inclusive Growth team in UNDP Peru. Ximena is also a...",
  "id": 42
},{
  "title": "Jacqueline Poni Aringu",
  "url": "/contributors/Jacqueline-Poni-Aringu.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jacqueline Poni Aringu\n            \n            UNDP South Sudan Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Jacqueline is passionate about R&D, and comes with a rich blend of both public and private sector experience in her experimentation role. She has worked on and coordinated various R&D projects from both the government and private sectors. Jacqueline has worked in resource-limited settings, economically empowering vulnerable communities through women’s financial inclusion initiatives. Jacqueline is a strong team player and has effectively demonstrated leadership through innovative ideas. She is a very ambitious and result-oriented human, and these attributes have helped her show the utmost professional ethics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Jacqueline Poni Aringu UNDP South Sudan Accelerator Lab Head of Experimentation Jacqueline is passionate about R&D, and comes with a...",
  "id": 42
},{
  "title": "Tong Atak",
  "url": "/contributors/Tong-Atak.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tong Atak\n            \n            UNDP South Sudan Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Eng. Tong Atak is the Head of Solutions Mapping and the Digital Advocate at UNDP South Sudan. He studied his bachelor’s degree in computer engineering at Queen Mary University of London. He is a practicing engineer and has over 5 years of experience working in telecoms with Nokia across Western Europe in Research & Development and development and technical account management. At UNDP, one of the notable projects Eng. Tong has project led was a pilot scheme to digitalize the traditional Sanduk savings scheme and migrate the analog process onto the M-Gurush platform. The success of this joint pilot with M-Gurush led to the development of a digital Sanduk called mSanduk being launched nationwide on their platform and being made available as a value-added service to their 1.7 million customer base. In addition, Eng. Tong in his capacity as the UNDP Digital Advocate works to identify and realize opportunities for digital project design and delivery in UNDP to be able to support the developmental aspirations of our lead partner the Government of South Sudan.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Tong Atak UNDP South Sudan Accelerator Lab Head of Solutions Mapping Eng. Tong Atak is the Head of Solutions Mapping...",
  "id": 42
},{
  "title": "Moses Mwansa",
  "url": "/contributors/Moses-Mwansa.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Moses Mwansa\n            \n            VillageSavers Technology Ltd.\n            CEO\n          \n        \n        \n          Moses Mwansa, holder of a Master of Science Degree in Project Management, is the proprietor of VillageSavers Technology Ltd, a fintech that promotes financial inclusion in low-income and informal business through the VillageSavers app. VillageSavers helps SMEs (Small and Medium-sized Enterprises) adopt tech-based solutions in their businesses. Moses is a 2021 Mandela Washington Fellow from the University of Nebraska, Lincoln, a YALI Regional Leadership Program alumni from the University of South Africa (2019), and a participant in the US Department of State’s Tech-Camp program in Nigeria (2019), and Ghana 2016. VillageSavers has been used successfully by Cross Border Traders through the project Digitizing Trade and Financing for Women and Youth Cross Borders Traders, which is jointly financed by the Africa Borderlands Centre and UNDP Zambia.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Moses Mwansa VillageSavers Technology Ltd. CEO Moses Mwansa, holder of a Master of Science Degree in Project Management, is the...",
  "id": 42
},{
  "title": "Sofia Silva",
  "url": "/contributors/Sofia-Silva.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sofia Silva\n            \n            UNDP Cabo Verde Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Bio still missing\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sofia Silva\n            \n            UNDP Cabo Verde Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Bio still missing\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "id": 42
},{
  "title": "Eduardo Gustale",
  "url": "/contributors/Eduardo-Gustale.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Eduardo Gustale\n            \n            UNDP Accelerator Labs\n            Monitoring, Experimentation and Learning Specialist\n          \n        \n        \n          Experienced in Sustainable Development and Social Innovation. Worked repeatedly in academic research, survey development, and market insight. Elected Global Shaper by the World Economic Forum & Chevening Scholar for an MSc in Innovation and Entrepreneurship at the University of Warwick.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Eduardo Gustale UNDP Accelerator Labs Monitoring, Experimentation and Learning Specialist Experienced in Sustainable Development and Social Innovation. Worked repeatedly in...",
  "id": 42
},{
  "title": "Tayo Akinyemi",
  "url": "/contributors/Tayo-Akinyemi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tayo Akinyemi\n            \n            UNDP Accelerator Labs\n            Learning and Community Manager\n          \n        \n        \n          I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early-stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing the capacity of those enablers (especially early stage investors).\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Tayo Akinyemi UNDP Accelerator Labs Learning and Community Manager I have spent most of my career creating order from ambiguity,...",
  "id": 42
},{
  "title": "Alberto Cottica",
  "url": "/contributors/Alberto-Cottica.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alberto Cottica\n            \n            UNDP Accelerator Labs\n            R&D Specialist\n          \n        \n        \n          Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Alberto Cottica UNDP Accelerator Labs R&D Specialist Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography,...",
  "id": 42
},{
  "title": "Alik Mikaelian",
  "url": "/contributors/Alik-Mikaelian.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alik Mikaelian\n            \n            UNDP Egypt Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Alik is a strategic designer and researcher with a background in product and graphic design. She holds an MFA in transdisciplinary design, and a bachelor’s degree in product design.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Alik Mikaelian UNDP Egypt Accelerator Lab Head of Solutions Mapping Alik is a strategic designer and researcher with a background...",
  "id": 42
},{
  "title": "Marwa Makhlouf",
  "url": "/contributors/Marwa-Makhlouf.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marwa Makhlouf\n            \n            The American University in Cairo\n            Researcher\n          \n        \n        \n          A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Marwa Makhlouf The American University in Cairo Researcher A development researcher, Marwa holds an MSc in Development Studies from the...",
  "id": 42
},{
  "title": "Salome Nakawze",
  "url": "/contributors/Salome-Nakawze.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Salome Nakawze\n            \n            UNDP Zambia Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Salome Nakawze UNDP Zambia Accelerator Lab Head of Solutions Mapping A development researcher, Marwa holds an MSc in Development Studies...",
  "id": 42
},{
  "title": "Najoua Soudi",
  "url": "/contributors/Najoua-Soudi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Najoua Soudi\n            \n            UNDP Morocco Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Equipped by my deeply rooted moral imagination and the critical thinking that emerges from having had roles that crossed so many programs, I embarked on a learning journey with the United Nations Programme for Development using an experimental approach to development and poverty alleviation - combining research, locally grown solutions and technology with saving the world.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Najoua Soudi UNDP Morocco Accelerator Lab Head of Solutions Mapping Equipped by my deeply rooted moral imagination and the critical...",
  "id": 42
},{
  "title": "Ravi Chandra",
  "url": "/contributors/Ravi-Chandra.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ravi Chandra\n            \n            UNDP India\n            Livelihood and Value Chain Specialist\n          \n        \n        \n          To be added\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ravi Chandra\n            \n            UNDP India\n            Livelihood and Value Chain Specialist\n          \n        \n        \n          To be added\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "id": 42
}]


// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var contentdiv = $('#content');

    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    contentdiv.empty()
    
    // Add status
    resultdiv.prepend('<h6 class="">Found '+result.length+' result(s)</h6>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = `
      <div class="tertiary">
        <h5 class="" tabindex="0" data-viewport="false">
        <a href="/Financial-inclusion-toolkit${store[ref]?.url}">
            ${store[ref]?.title}
        </a>
        </h5>
        <p>
            ${store[ref].excerpt}
        </p>
    </div>
      `

      resultdiv.append(searchitem);
    }
  });
  

  //POPULATE TAGS AND SDG FILTER
var tagsdiv = $('#tag-div');
var sdgdiv = $('#sdg-div')

if(tags.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="tag">
        Tags
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < tags.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="tag${i+1}">${tags[i]?.toUpperCase()}</label>
                    <input
                        type="checkbox"
                        id="${tags[i]}"
                        name="tags"
                        value="${tags[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    tagsdiv.append(tg)
}

if(sdg.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="sdg">
        SDG
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < sdg.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="sdg${i+1}">${sdg[i]}</label>
                    <input
                        type="checkbox"
                        id="${sdg[i]}"
                        name="sdg"
                        value="${sdg[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    sdgdiv.append(tg)
}

let taglist = []
let sdglist = []

let searchitemfn = post => `
<div class="tertiary">
    <h5 class="" tabindex="0" data-viewport="false">
    <a href="/Financial-inclusion-toolkit${post?.url}">
        ${post?.title}
    </a>
    </h5>
    <p>
        ${post.excerpt}
    </p>
</div>
`

let resultdiv = $('#results');
let contentdiv = $('#content');
let contentCopy = $("#content").html(); // Store the current content

let filterresult = () => {
    resultdiv.empty()
    resultdiv.prepend('<h6 class="">Showing results for  ' + [...sdglist, ...taglist].toString() + '</h6>');
    for(post of store){
        if(post?.tags?.some(tg => taglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
    };
}

$(document).on('multiSelectInputToggle', (e) => {
    let { value, checked, name } = e.target;
    
    if(checked && name === 'tags') taglist.push(value)
    else if(checked && name === 'sdg') sdglist.push(value)
    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)
    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)
  
    filterresult()

});

$(document).on('filterSearchChipRemoval', (e) => {
    let textContent = e.target.getAttribute('option-name');
    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)
    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)
    filterresult()
});

$(document).on('filterSearchClear', (e) => {
    sdglist = [];
    taglist =  [];
    resultdiv.empty()
    $("#content").html(contentCopy);
});

//GET ELEMTENTS WITH ID TAGS AND SDG
$('.tag-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    taglist = [ textContent ]
    sdglist = []
    contentdiv.empty()
    filterresult()
} )

$('.sdg-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    sdglist = [textContent]
    taglist = []
    contentdiv.empty()
    filterresult()
} )

})