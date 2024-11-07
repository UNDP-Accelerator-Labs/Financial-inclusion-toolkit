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
    content: "Qualitative research tools for understanding financial needs and behavior in the context of rural resilience\n\nWhat it does. These qualitative research tools use human-centered design and ethnography to structure interviews and focus groups to create personas to “put a face” to people who are typically viewed as beneficiaries, revealing deep explanatory insights into rural resilience and financial inclusion.\n\nValue proposition for the government/other partner. This suite of qualitative tools (i.e. interview guide, focus group guide, and village profile template) enables governments, local organizations, fintech startups and banks to more effectively design products and policies to help people live healthier financial lives.\n\nThe tools enable the understanding of different dimensions of communities’ experiences, highlighted below, through an ethnographic approach:\n\n\n  Livelihood and societal context;\n  Financial behavior and attitude towards formal and non-formal financial institutions;\n  Common and distinct hardships encountered by the communities, their impact and the tools used for adaptation and mitigation.\n\n\nWhy and when to use it. These research tools are most useful when you are either exploring the possibility of rolling out financial support programmes in service of a community or trying to determine the best way to do so. In either scenario, it’s important to understand who you are designing for, what challenges they face, and what solutions and mechanisms they’re currently using to solve those challenges. To use this tool, it’s essential to: 1) have existing connections with community organizations that can help engage people within the community and provide a safe space for the discussion to take place; 2) conduct preliminary consultations with practitioners and academics that have previously worked in this space to contextualize the research questions and tools. In Egypt’s case, the team leveraged the existing strong NGO network from the small grants program. Once connected to the NGO, the team conducted an introductory call to explain the objectives of the activities. After they agreed to support, the team made a visit to the NGO location to discuss in more detail the research learning question, create the village profile, and address any concerns anticipated by the NGO.\n\nKnown issues and troubleshooting. Conducting ethnographic research only makes sense if it’s possible to influence and adapt the proposed interventions based on the learnings from the study. If it’s not possible to change the implementation plan, then there is no need to question people and create a false sense of participation, which contributes to research fatigue. Additionally, when you don’t have connections within the community, it’s important to spend time and build trust.\n\nContext. Using these tools was the first step to better inform different activities and programs within UNDP (and for outside partners) on financial inclusion, specifically how it relates to rural resilience.\n\nThe tools emerged from the UNDP Egypt Accelerator Lab’s desire to understand what was happening in rural settings in terms of financial services and inclusion, and how this connected to rural resilience. In Egypt, there’s currently a heavy emphasis on rural development and financial inclusion. For example, there’s a large government project focused on developing the poorest rural areas. However, there’s little insight into how financial inclusion and rural resilience are related and through what channels financial tools can support the achievement of both goals.\n\nThe Lab had previously focused on agriculture and climate resilience for agriculture. But through conversations with financial institutions, financial inclusion emerged as an area of interest, and the lab decided to gain a deeper understanding of community contexts before moving forward with experiments and solutions and experiments.\n\nCost. The cost might vary from one region to the other. In the context of 2022 Egypt, it cost just under 10,000 USD.\n\n\n  A qualitative/human-centered design researcher (USD 9,300, for a UNV volunteer)\n  Rented room or community space to run the interviews and focus groups (USD 60)\n  Transportation &amp; compensation for participants (USD 5/per person)\n  Transportation costs and accommodation for facilitating team (USD 150)\n\n\nPeople. At least two people are required but depending on the number of participants and the timeline required to produce results, there could be more people involved.\n\n\n  One main researcher/facilitator and one supporting facilitator and note taker should be able to synthesize the information captured into personas and insights.\n  If the results will be shared with outside partners and teams, then a visual designer would be needed to translate the personas and insights into diagrams and illustrations.\n\n\nFocal point.\n\nAlik Mikaelian and Marwa Makhlouf.\n\nCountry, year, and language. Egypt, 2022, English.\n\nResources.\n\n\n  Final report. Read this report to understand how the research tools were used in the Egyptian context.\n  Village profile tool. Use this tool to understand the financial needs and behaviors of communities in your context.\n  In-depth Interview guide. Use this guide to collect qualitative insights on commmunities in your context through individual interviews.\n  Expense card. Use this resource to estiamte your expenses.\n  Focus group guide. Use this guide to collect qualitative insights on commmunities in your context through group conversations.\n\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/EGY.html",
    id: 0
});












index.add({
    title: "...through blockchain-based tracing of supply chain integrity",
    content: "A digital platform to improve supply-chain traceability\n\nWhat it does.  The eSpice Bazaar pilot is a digital platform prototype that uses blockchain to aggregate and trace information about the supply chain production of chili and turmeric in India. The purpose of the pilot was to develop blockchain architecture to ensure traceability on the eSpice Bazaar platform developed by the government and test its functionality.  During the pilot, the block chain application was developed, deployed via Amazon Web Services, and integrated with the eSpice Bazaar portal to serve as its quality assurance and traceability backend. Architecture was built to extend traceability beyond the farm level, and data from 2,942 farmers producing chili and turmeric in Andhra Pradesh were collected, uploaded to the platform, and tested for immutability and retrievability. The traceability function of the platform was then demonstrated to the Spices Board via a user-friendly QR code system – the QR code on the spices package or the end product when scanned traces the product through every step of value chain and all the way back to the farm from where it originates. While this tool is not financial in a strict sense, it does use a technology, the blockchain, developed and used mostly in a fintech context.\n\nValue proposition. Indian spice farmers often invest heavily in the planting and harvesting of spices, only to be forced to sell them at low prices, often to middlemen who take a percentage of the profit. The eSpice Bazaar pilot lays the groundwork for a blockchain-powered platform that will enable farmers to sell directly to buyers. The completed platform will eventually enable traceability from harvest to trade, provide market access and better prices to farmers, deliver higher quality produce to traders, and introduce visibility, transparency, accountability, and sustainability into the spices value chain.\n\nWhy and when to use it. Traceability can help increase the value capture of poorly compensated producers in a value chain. However, the probability of successful implementation is increased when there are neutral intermediaries such as UNDP to coordinate the pilot, source technical expertise (e.g., through a private sector company), and attract government support (e.g., the Spices Board of the Ministry of Commerce and Industry of India).\n\nKnown issues and troubleshooting. A multi-sided platform only works when all key stakeholders participate. For this solution to be viable, farmers, aggregators and processors, certification agencies and exporters would all have to use the platform. More specifically, farmers and farmers’ associations would have to be comfortable with the technology and have access to it. Similarly, exporters and processors may require incentives to use a platform that could reduce their market power. Finally, the platform would need to deliver traceability beyond the farm level to facilitate trade.\n\nContext. India is the largest producer and consumer of spices in the world, exporting $3B worth of goods annually, and trading $1B domestically, between 2020 and 2022. Spice farmers already had low visibility within the value chain, and during the pandemic, they were forced to sell through aggregators who fixed prices. Additionally, the rejection of Indian exports due to difficulty meeting food safety regulations on aflatoxins, pesticides, and hygiene, impacts the value of export and profitability of the value chain. To address this challenge, UNDP India, with funding from the Japan Cabinet Office (JCO), partnered with the Spices Board from the Ministry of Commerce and Industry, to run a pilot with 2,942 chili and turmeric farmers in Andhra Pradesh. The NEC Corporation (which developed the blockchain backend), farmer producer organizations, and traceability and value chain experts also contributed to the effort.\n\nCost. USD 115,000, primarily used for human resources (contracting companies and consultants to deliver services) and communication.\n\nPeople\n\n\n  Project lead. The project lead will coordinate all key stakeholders, secures key partners, and manages relationships with donors.\n  Standards organization with technical expertise in value chain traceability. This organization will provide implementation support by coordinating with stakeholders such as the government, farmers, traders, quality control labs testing produce, and exporters and traders.\n  Blockchain solution developer. The developer will build the blockchain architecture required to conduct quality assurance at each level of the spice value chain.\n  Nonprofit or civil society organization with community relationships. This organization will mobilize farmers and manage data collection.\n\n\nFocal point. Ravi Chandra\n\nCountry, year, and language: India, 2021 to 2022, English\n\nResources\n\n\n  Blog post. Use this resource for a narrative account of how the eSpice Bazaar pilot developed.\n  YouTube video. Use this resource as a visual account of how the eSpice Bazaar pilot developed.\n\n\n",
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
    content: "Financial bookkeeping micro courses to boost women entrepreneurs’ business confidence\n\nWhat it does: This is a simple digital intervention that can assist entrepreneurs, especially women, to understand the core tenets of financial bookkeeping, a cornerstone for both business success, and the confidence needed to make financial decisions, take risks, and pitch successfully. The intervention is built around behavioral research that followed 19 women entrepreneurs in Lebanon for a year as they took part in an economic empowerment program for women. Observing the participants in this programme provided sufficient data to build the pilot of a micro email course on book-keeping.\n business decisions.\n\nValue proposition: By using the different components of the “Micro email course” you will enable any partner to:\n\n\n  Drastically improve the quality and relevance of recruits to women economic empowerment programs. The nature of digital online campaigns targeted at one demographic like “Women in Lebanon aged 18 to 45” allows for the call to action to be displayed to large numbers of women through online media, and the advantage is the ones that sign up and go through a 5-minute survey have been filtered for the “appetite” to participate.\n  Ensure wide scale education on core financial literacy components in a localized manner, which is the pre-requisite to financial decision making and investment acumen on the long run.\n  Attain quantitativelu and qualitatively significant data on interest, adoption, and completion. The medium of email for delivery creates high levels of engagement if well designed, and it also allows a detailed M&amp;E view on the intervention from the perspective of move from “what could get women interested in this topic (via which ads they click on)” to “How many registered women in this email course went on to open all 7 emails and qualify for the free excel sheet reward?”\n\n\nThis intervention uses digital learning journeys to deliver on two of UNDP’s signature solutions by tackling inequality of opportunities (Poverty &amp; inequality) while also being deliberate about focusing on women with digital access (Gender equality) as the audience to grow and impact. It also contributes to Sustainable Development Goals 5 (gender equality) and 9 (industry, innovation and infrastructure).\n\nWhy and when to use it: This email course journey is most useful when a program is aiming to recruit and identify an  entrepreneur profile within a specific demographic while also understanding their localized pain points and learning gaps when it comes to financial literacy, as well as its relationship to delaying the achievement of that group of people’s business goals and financial stability or growth. The resources below are directly re-usable for a target group of Arabic-speaking female entrepreneurs in Lebanon. However, the tactics, journey, and financial literacy building blocks are transferable to other settings as well, as long as they have the same need for bookkeeping literacy and access to email.\n\nFinally, it is useful to recruit large numbers of people into a course journey, while also using the engagement journey of the course in order to achieve high fidelity tools to monitor and, later, evaluate the participants’ appetite for, understanding of, and completion of the course.\n\nKnown issues and troubleshooting: For this tool to work you will require:\n\n\n  Some contact list or a media outlet that can broadcast the recruitment call.\n  Any email sending platform.\n  A local or regional success that can be the “modeling agent” of the micro learning content.\n\n\nContext: In 2021, the UNDP Lebanon Accelerator Lab participated in a one year-long behavioral research effort with 19 Lebanese female entrepreneurs. The research singled out financial bookkeeping as an area of ill confidence, worry, and difficulty for all women. Building on these insights, and in partnership with the Regional Bureau of Arab States’ innovation unit, the Lab conducted structured interviews to assess more precisely the particiapants’ needs. This work powered the design of a bookkeeping course that speaks to the common phenomenon of time-poverty that women suffer by delivering easy, short, and localized video content on bookkeeping by email over a period of 7 days. The content included interactive knowledge testing, and a free reward upon completion.\n\nThe main transferrable tools used besides the course content are shared in the resources below:\n\n\n  The call for participation component used to recruit a defined target profile online through online media funnels removing middlemen contractors and substantial cost, while also identifying which behavioral driver or barrier had the most impact for this particular demographic.\n  Chunking of financial bookkeeping knowledge into micro “just in time” learning resources modeled on a visible excel sheet developed by a regional Arab-speaking woman entrepreneur resulted in improved engagement.\n  The offer of a free pre-programmed excel sheet (the same one used in the course content) as a reward for course completers acted as a powerful incentive to complete the course. This excel would be used to practice their learning directly on their businesses, and we attribute this incentive framing to the 21% course completion rate (5% higher than that of a similar Coursera course).\n\n\nCost: 8,000 USD to commission a regionally well-known entrepreneur to co-design the course, and to acquire from her the IP of a pre-programmed spreadsheet file that can function as a complete, if basic, mini-bookkeeping system for small businesses; 5,000 USD to recruit participants via targeted online advertising. A subscription to an email automation platform such as MailChimp or similar is also needed.\n\nPeople: In Lebanon, this project involved the UNDP Accelerator Lab, the UNDP Women Economic Empowerment project, and the gender unit, as well as external consultants. The following roles are needed:\n\n\n  Local success “role model” (in a topic of choice) as content and a tool as a reward creator\n  Email automation specialist\n  Ads or PR specialist to launch the recruitment call in a manner that allows you to reach a specific target audience and allows participants to sign up to the course via survey\n  Gender specialist\n\n\nFocal point: Lilian Abou Zeki.\n\nCountry, year, and language : Lebanon, Period: 2022 to 2023, Arabic.\n\nResources: Course step-by-step. Consists of an instruction sheet in English, with links to all emails and video lessons, as well as to an inception survey and promotion videos. All materials are in Arabic.\n\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/LEB.html",
    id: 3
});












index.add({
    title: "... through a video- and text message-based course on financial literacy for female entrepreneurs",
    content: "A video and text message based course on financial literacy for female entrepreneurs\n\nWhat it does. The experiment was to evaluate the effect of an online solution on women’s financial literacy. The training content, which was developed in ‘Kreol Morisien’ in video format, was used to train women-led entrepreneurs with struggling businesses who lacked financial literacy.\n\nMultiple methods, such as surveys, interviews and focus groups, were used to understand what aspects of entrepreneurial finance were most difficult or confusing for women entrepreneurs to understand through traditional classroom training. Then, the course content and delivery were tailored to address those issues and provide clear and relevant examples and exercises, as well as interaction.\n\nA baseline study of the cohort’s capacity was undertaken to obtain a comparative analysis, showcasing improvements and relating them to the success of micro and small enterprises.\n\nThe experiment aimed to:\n\n\n  Design an online solution, including YouTube videos in the local language, specifically in Mauritian Creole. The solution was then tested to determine if it could efficiently enhance financial literacy for the pilot group of women entrepreneurs participating in the experiment.\n  Monitor the perceived knowledge and understanding of key financial management practices, through a pre-test and post-test with the entrepreneurs, including: the business life cycle, financial statements, budgeting, working capital management, sources of finance, costing a product and services.\n  Experiment with online peer-to-peer interactive platforms, specifically WhatsApp – a popular app used by most entrepreneurs on the islands within the Republic, for sharing of challenges and learnings, networking and also increasing the confidence of the participating entrepreneurs. More specifically, the experiment aimed to evaluate the impact of peer-to-peer communication on understanding of financial terms and motivation. WhatsApp allowed the participants to share their experiences, challenges, and feedback with each other in a convenient and familiar way.\n\n\nValue proposition. The tool serves as a simple online financial literacy platform for women entrepreneurs. It aims to support women-led micro and small enterprises to improve their financial resilience, operational capacity, and develop resilient business models. By using this approach, micro and small sized entrepreneurs can learn at their own pace and convenience, without affecting their daily activities. This initiative aligns with UNDP’s Signature Solutions focused on addressing Poverty and Inequality as well as Gender Equality and can help achieve SDGs 1, 5, 8 and 10.\n\nWhy and when to use it. The tool is most useful when the participants use the tool (videos) for learning when they are free from other entrepreneurial obligations, are motivated to exchange with their peers via the online platform and learn from their challenges, and are able to apply learnings to their everyday activities.\n\nKnown issues and troubleshooting. While there are no known issues with the experiment, all risks were carefully monitored throughout. Emphasis was placed on conducting the experiment in a structured manner by the team. This entailed conducting a baseline test to evaluate the current level of financial literacy and comparing the results post-learning. However, the testing was done on a small group of thirty women entrepreneurs. If scaled up, a proper risk management and monitoring mechanism would be essential.\n\nContext. In 2022, the UNDP Mauritius and Seychelles Accelerator Lab facilitated a collective intelligence exercise with women entrepreneurs from MSMEs in Mauritius and Rodrigues. The group included participants from multiple sectors, notably from the tourism sector, affected by two successive COVID-related lockdowns. A key concern for the entrepreneurs was their limited financial literacy, which led to difficulties in filling out important documents like financial returns and VAT for the local revenue authority. It increased their operational costs and exacerbated the difficulties they already encountered in accessing affordable capital through the formal financial systems.\n\nCost. This initiative was funded by the UNDP Accelerator Lab and co-designed with a local academic institution for approximately MUR 780,000 (USD 17,300). Small and Medium Enterprise (SME) Mauritius and the National Women Entrepreneur Council collaborated by making this initiative accessible to women entrepreneurs from Mauritius and Rodrigues for the pilot experiment. With collaboration for scaling up with a ministry and other institutions, costs could be reduced as the content and design are available. However, some small adjustments might be required to update the content, among others.\n\nPeople. The experiment was funded and co-designed by the UNDP Accelerator Lab Mauritius &amp; Seychelles team, in collaboration with the University of Mauritius serving as an external consultant, and with the support of partners and collaborators including the Ministry of Gender Equality and Family Welfare, the National Women Entrepreneur Council, and SME Mauritius.\n\nFor colleagues who seek to replicate the experiment, the following roles are needed:\n\n\n  Social Scientist/ Ethnographer/ Community Person. The social scientist should have the following skills: cultural awareness, observation, interviewing (fluent in local language), ethnographic writing, and have the ability to collect data in an unbiased way. S/he should be proficient in various ethnographic methods such as participant observation, taking field notes, and thematic analysis, etc. S/he should be able to design the research questions, test hypotheses, use methods and instruments for conducting the experiment, as well as analyze the data and interpret the results in a scientific way. (Other important indirect skills include empathy, curiosity, strong ethics, etc.)\n  Finance Experts. Their skills should include financial literacy, accounting, budgeting, forecasting, and investing for entrepreneurial activities (aligned with the experiment’s content and entrepreneurs’ requirements as determined by the survey).\n  Instructor/Trainer. The instructor/ trainer should be able to teach a group of entrepreneurs with a basic level of understanding. Other skills for the instructor should include good communication, local language fluency, and a pedagogical attitude.\n  Videographer. The videographer should be proficient in editing, production, animation, graphics, sound design and storytelling, as well as editing software and platforms. Additionally, a videographer should exhibit local language fluency, creativity, attention to detail, the ability to incorporate feedback from the target group, and time management. (The instructional videos are very short to match the attention span of the target group.)\n  Project Coordinator. A project coordinator is essential for the experiment to be successful as there are many activities to coordinate simultaneously. Skills include experience in project management and implementation, excellent communication, and the ability to inspire collaboration among the team members and stakeholders. Finally, local language fluency, as well as M&amp;E and risk management skills are also required.\n\n\nFocal point. Melany Poorun-Sooprayen.\n\nCountry, year, and language. Republic of Mauritius, 2022 to 2023, Mauritian Creole/ English.\n\nResources.\n\n\n  \n    Blog post in English. Read this blog to understand how the experiment was initiated.\n  \n  \n    Videos in Mauritan Creole with subtitles in English.\n\n    \n      Understanding the Business Cycle 1\n      Understanding the Business Cycle 2\n      Understanding the Financial Statement\n      Working Capital Management\n      Budgeting and Investment Appraisal 1\n      Budgeting and Investment Appraisal 2\n      Financial Statement Analysis\n      Sources of Finance 1\n      Sources of Finance 2\n      Statutory Compliance 1\n      Statutory Compliance 2\n      Costing and Cost Classification 1\n      Costing and Cost Classification 2\n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/MAR.html",
    id: 4
});












index.add({
    title: "At a glance",
    content: "The toolkit at a glance\n\nGetting started. This section explains the rationale for the toolkit, and how to use it\n\nHelp people understand. This section contains initiatives that help individuals and communities understand how to use financial services or increase their financial literacy, such as research tools and courses.\n\nHelp people save. This section describes tools for digitizing community savings processes.\n\nHelp people pay.This section describes an analog-to-digital payment tool.\n\nHelp people borrow. This section describes a tool to help monitor microloans delivered to SMEs.\n\nHelp people de-risk. This section describes a tool to support the creation of accessible insurance products.\n\nEach tool in the toolkit is assigned to only one section. This is somewhat contrived, as in practice some of the solutions prototyped by the Accelerator Labs jointly address different dimensions of financial inclusion. An obvious example is the digitalization of the community practice of sanduk in South Sudan, which functions both as a saving and as a borrowing practice.\n",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/TOC.html",
    id: 5
});












index.add({
    title: "Contributors",
    content: "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Amanuel Tadesse\n        \n        UNDP Ethiopia Accelerator Labs\n        Head of Solutions Mapping\n      \n    \n    Amanuel has a diverse background with experience in government, NGOs, and the private sector. Currently, he works for the UNDP. In his role as a solution mapper, he is responsible for identifying and co-designing grassroots solutions to address community challenges. Before joining UNDP, Amanuel worked on testing and revamping business models related to rural finance, specifically focusing on voucher-based agricultural input distribution systems and seed marketing. He has also provided analytical support to various programs and has experience in designing and conducting surveys. Amanuel holds a PhD in geography from the University of Leuven, with a primary focus on urbanism. His academic interests revolve around exploring the intricate interactions between space and society, particularly within urban contexts in the global south.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lorena Moscovich\n        \n        UNDP Argentina Accelerator Labs\n        Head of Experimentation\n      \n    \n    I work to drive innovation for development using grassroots solutions and pilots across a range of fields, from digital inclusion to environmental citizen science, in partnership with both public and private sectors. Through knowledge management, I aim to systematize my learnings and insights to create a more impactful and sustainable impact. My approach to my work centers around inclusivity and accessibility, using narratives and facilitation strategies to ensure that everyone is included in the conversation and no one is left behind.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lilian Abou Zeki\n        \n        UNDP Lebanon Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Lilian leads on scoping user-led solutions/ grass root innovators/ positive deviants across different development areas in the country. She identifies underlying insights on behavior, trends, and systems that might make for solution learnings to experiment with inside UNDP and with partners, a role that can be likened to product management. Passionate about the way women experience work outside of the man-woman binary. Focused more on the unique nuances that make women entrepreneurs, business owners and leaders succeed, due to these nuances and not despite them.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Melany Anoushka Poorun-Sooprayen\n        \n        UNDP Mauritius and Seychelles Accelerator Labs\n        Head of Exploration\n      \n    \n    Melany is an experienced project manager with a demonstrated history of working in the renewables and environment industry. She is a strong program and project management professional with an MBA focused on Project Management from MANCOSA, and she’s skilled in corporate social responsibility, analytical skills, system monitoring, and management.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mariana Olcese\n        \n        UNDP Peru Accelerator Labs\n        Head of Exploration\n      \n    \n    Mariana joined UNDP Peru in 2020 as Head of Exploration. Before that, she worked as Public Affairs and Head of Institutional Affairs for companies like WeWork and Corporacion Breca. Mariana holds an MBA from Yale and Georgetown University. Her expertise encompasses stakeholder management, social and political monitoring, and the development of strategic corporate positioning. She is adept at fostering and leading dialogues between public and private actors, facilitating cooperation and knowledge sharing.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ximena González\n        \n        UNDP Peru Accelerator Labs\n        Inclusive Growth Coordinator\n      \n    \n    Leads Inclusive Growth team in UNDP Peru. Ximena is also a social entrepreneur, through Heroínas Peruanas, a non-profit association that promotes education and equal opportunities through educational materials about the lives of notable Peruvian women.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jacqueline Poni Aringu\n        \n        UNDP South Sudan Accelerator Lab\n        Head of Experimentation\n      \n    \n    Jacqueline is passionate about R&amp;D, and comes with a rich blend of both public and private sector experience in her experimentation role. She has worked on and coordinated various R&amp;D projects from both the government and private sectors. Jacqueline has worked in resource-limited settings, economically empowering vulnerable communities through women’s financial inclusion initiatives. Jacqueline is a strong team player and has effectively demonstrated leadership through innovative ideas. She is a very ambitious and result-oriented human, and these attributes have helped her show the utmost professional ethics.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tong Atak\n        \n        UNDP South Sudan Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Eng. Tong Atak is the Head of Solutions Mapping and the Digital Advocate at UNDP South Sudan. He studied his bachelor’s degree in computer engineering at Queen Mary University of London. He is a practicing engineer and has over 5 years of experience working in telecoms with Nokia across Western Europe in Research &amp; Development and development and technical account management. At UNDP, one of the notable projects Eng. Tong has project led was a pilot scheme to digitalize the traditional Sanduk savings scheme and migrate the analog process onto the M-Gurush platform. The success of this joint pilot with M-Gurush led to the development of a digital Sanduk called mSanduk being launched nationwide on their platform and being made available as a value-added service to their 1.7 million customer base. In addition, Eng. Tong in his capacity as the UNDP Digital Advocate works to identify and realize opportunities for digital project design and delivery in UNDP to be able to support the developmental aspirations of our lead partner the Government of South Sudan.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Moses Mwansa\n        \n        VillageSavers Technology Ltd.\n        CEO\n      \n    \n    Moses Mwansa, holder of a Master of Science Degree in Project Management, is the proprietor of VillageSavers Technology Ltd, a fintech that promotes financial inclusion in low-income and informal business through the VillageSavers app. VillageSavers helps SMEs (Small and Medium-sized Enterprises) adopt tech-based solutions in their businesses. Moses is a 2021 Mandela Washington Fellow from the University of Nebraska, Lincoln, a YALI Regional Leadership Program alumni from the University of South Africa (2019), and a participant in the US Department of State’s Tech-Camp program in Nigeria (2019), and Ghana 2016. VillageSavers has been used successfully by Cross Border Traders through the project Digitizing Trade and Financing for Women and Youth Cross Borders Traders, which is jointly financed by the Africa Borderlands Centre and UNDP Zambia.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sofia Silva\n        \n        UNDP Cabo Verde Accelerator Lab\n        Head of Exploration\n      \n    \n    Sofia Silva is the Head of Exploration at UNDP Accelerator Lab in Cabo Verde, where she leads a portfolio of experiments that explore emerging trends, implications for systemic impacts and risks, and their potential for accelerating progress toward the Sustainable Development Goals (SDGs). She has over 16 years of experience in Information Systems and Electronic Governance in Cape Verde and Lusophone countries. With an MBA in Leadership and Innovation from Fundaçao Gertúlio Vargas - FGV, Brazil, Sofia has a solid background in working with state organizations, international NGOs, and private companies on projects that leverage technology, data, and design thinking to solve complex development challenges. She has also coordinated the software production department of NOSi, the most recognized ICT institution in Cape Verde, and worked as a consultant for projects in East Timor and Mozambique. Sofia is passionate about exploring new ways of thinking and doing that can enhance the lives and livelihoods of the poorest and most vulnerable.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Eduardo Gustale\n        \n        UNDP Accelerator Labs\n        Monitoring, Experimentation and Learning Specialist\n      \n    \n    Experienced in Sustainable Development and Social Innovation. Worked repeatedly in academic research, survey development, and market insight. Elected Global Shaper by the World Economic Forum &amp; Chevening Scholar for an MSc in Innovation and Entrepreneurship at the University of Warwick.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tayo Akinyemi\n        \n        UNDP Accelerator Labs\n        Learning and Community Manager\n      \n    \n    I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early-stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing the capacity of those enablers (especially early stage investors).\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alberto Cottica\n        \n        UNDP Accelerator Labs\n        R&amp;D Specialist\n      \n    \n    Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alik Mikaelian\n        \n        UNDP Egypt Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Alik is a strategic designer and researcher with a background in product and graphic design. She holds an MFA in transdisciplinary design, and a bachelor’s degree in product design.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marwa Makhlouf\n        \n        The American University in Cairo\n        Researcher\n      \n    \n    A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Salome Nakazwe\n        \n        UNDP Zambia Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    As Head of Solutions Mapping, Salome co-creatively supports the development of grassroots initiatives aimed at tackling broader challenges affecting our world. She has over 20 years of work experience in programme management, transformational training, and leadership development, and has earned a a Bachelor of Arts Degree in Education and a Master of Arts Degree in Communications for Development.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Najoua Soudi\n        \n        UNDP Morocco Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Equipped by my deeply rooted moral imagination and the critical thinking that emerges from having had roles that crossed so many programs, I embarked on a learning journey with the United Nations Programme for Development using an experimental approach to development and poverty alleviation - combining research, locally grown solutions and technology with saving the world.  \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ravi Chandra\n        \n        UNDP India\n        Livelihood and Value Chain Specialist\n      \n    \n    Ravi has played a prominent role and is a nationally recognized expert in the farm &amp; non-farm value chain, livelihoods promotion, entrepreneurship development and financial inclusion ecosystems. He has previously worked and co-founded non-profit and for-profit companies in agriculture, microfinance, bamboo, handloom &amp; handicraft focusing on B2B &amp; B2C segments. \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Adedapo Aderemi\n        \n        UNDP Accelerator Labs\n        Software Developer\n      \n    \n    Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jessica Massie\n        \n        UNCDF\n        DFL Specialist/Financial Sector Specialist\n      \n    \n    Jessica Massie is a technical assistant for DFL and financial capability programmes for UNCDF based in Kigali, Rwanda. She has lived and worked in a variety of African countries for almost 20 years, and specializes in curriculum development, training, research and writing, with a focus on skill-building and behavior change.  \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Karima Wardak\n        \n        UNCDF\n        KM and Comms Lead for IDE\n      \n    \n    Karima Wardak is the knowledge and communication manager for the inclusive digital economy team at UNCDF; she is based in Brussels, Belgium. She has worked in digital financial inclusion and microfinance for over 15 years and can provide information on a broad range of programmes in financial and digital inclusion in Africa, Asia, and the Pacific.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lina Fernandez\n        \n        UNDP Colombia Accelerator Lab\n        Head of Exploration\n      \n    \n    Lina joined the Accelerator Lab in Colombia in 2023 as Head of Exploration but has been part of UNDP for more than 12 years leading the private sector and inclusive finance agenda. She is a skilled project manager with experience in the public sector and multilateral organizations for the design and implementation of development and innovation policies and initiatives and the design of multi stakeholder strategic partnerships within the financing for development agenda.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Diana Gonzalez\n        \n        UNDP\n        IRFF National Program Officer\n      \n    \n    Political scientist with a master's in public and social policies. 11 years of professional experience in monitoring and evaluation of public policies, developing tools and methodologies for the efficient use of public resources, budget programming, private sector contribution to SDGs and working with development Banks such as IDB, Korea Eximbank and the World Bank.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Diana Muñoz\n        \n        UNDP\n        Inclusive Finance Officer\n      \n    \n    Political scientist specialized in Social Policy, with over 14 years of experience in public and private sectors managing social development initiatives, leading and coordinating programs and projects focused on financial inclusion. Experience working in financial institutions and international cooperation agencies specialized in rural development, leading the design and implementation of financing tools with strategic partners aimed at serving vulnerable populations.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Juan David Ordoñez\n        \n        UNDP\n        Innovation and Private Sector Officer\n      \n    \n    Professional in Business Administration with over 12 years of experience in designing, formulating, managing, monitoring, and evaluating projects aimed at addressing economic, social, and environmental issues involving stakeholders from the private sector, government, and civil society at national and international levels. He has worked with different international cooperation agencies such as UNODC Colombia and UNDP in the Latin America and Caribbean Bureau, contributing to knowledge management and innovation. Passionate about technology and driven by curiosity. \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Maria Adelaida Palacios\n        \n        UNDP\n        Gender Focal Point\n      \n    \n    María Adelaida is a lawyer with 14 years of experience in women's human rights, development, and gender. Her career includes collaborations with social organizations, the State, and academia. She currently works as a gender analyst in the Colombia office, where she uses her expertise to understand and address the needs of women, proposing innovative solutions that consider gender as a central axis to promote significant changes.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Juan David Martin\n        \n        UNDP\n        Head of Experimentation\n      \n    \n    Juan David joined the Accelerator Lab in 2019 as Head of Experimentation. Juan is an industrial designer with a master in strategic design and over 15 years of experience as a team leader and project manager. Driven to investigate problems, uncover opportunities and create value for end users and businesses. As a design thinker, have worked in service design, innovation management, public and social innovation, brand implementation, brand strategy and business model innovation. While helping develop businesses through a design-driven perspective, he creates strategies to sustain and share value between end users and the product service systems they use. He combines hard and soft skills to guide a structured process and create business ideas and innovative products and services that enhance user experience.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Richard Ndahiro\n        \n        UNCDF\n        Digital Country Lead\n      \n    \n    Richard Ndahiro works at the intersection of the digital economy and the real economy, specifically on how digital innovation can be applied to Health, Education, Agriculture, Finance, Energy sectors. His career of over 15 years spans across financial services (retail banking, microfinance, DFS), rural development/poverty reduction, and academia. Richard holds an MSc in Applied Economics, a post graduate diploma in Innovation and Design thinking, a Diploma in Professional Marketing (CIM) and is an Alumni of the Oxford University Fintech programme.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Kehinde Bolaji\n        \n        UNDP\n        Programme Manager/Knowledge and Innovation Advisor, Africa Borderlands Center\n      \n    \n    Kehinde Bolaji is Programme Manager/ Knowledge and Innovation Advisor at the Africa Borderlands Centre. Working with all units of the Borderlands Programme, he provides substantive leadership on programme management, integrated advisory services, partnership management, research, data and knowledge support. In particular, he shapes the conceptualization and operationalization of the ABC innovation work. Bolaji most recently served as UN Peace and Development Advisor (Caribbean) where he worked with the Caribbean Community (CARICOM), its Technical Agencies and Member-States in designing strategies and in implementing programmes on community mediation, Prevention of Violent Extremism (PVE), counterterrorism, climate-related security risks mapping, as well as women and youth inclusion in peacebuilding mechanisms.  Prior to that, he served as Governance and Peacebuilding Team Leader at the United Nations Development Programme (UNDP) in Nigeria. He holds a PhD in Political Science from the University of Ibadan, Nigeria and is an alumnus of the Peace and Security in Africa Programme (PASA) at Uppsala University, Sweden.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lily Murei\n        \n        UNDP\n        Policy Research &amp; Data Specialist, Africa Borderlands Center\n      \n    \n    Dr. Lily Murei is a Policy and Research  Data Specialist at the UNDP Africa Borderlands Centre. A program management specialist, Ms. Murei has vast experience in inclusive program management, policy technical advisory, program assessments, and action research, result-based monitoring and evaluation, and project information management for evidence-based program design and reporting. Before joining the UNDP Borderlands Centre, she worked as a Technical Specialist for the UNDP REDD+ Project; before that, she coordinated the UNEP/UNOPs /UNDP Switch Africa Green project in Kenya. Ms. Murei holds a Doctor of Philosophy in Project Planning and Management, specializing in Monitoring and Evaluation, from the University of Nairobi; a master’s degree in project planning and management from the University of Nairobi; and a Bachelor of Arts (Hons) in Sociology and Geography from Egerton University.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Enock Omweri\n        \n        UNDP\n        Solutions Mapping Specialist, Africa Borderlands Center\n      \n    \n    Enock Omweri is a seasoned professional at the forefront of cross-border development, digitization, and technology-driven solutions. With over a decade of experience in innovation, development, and humanitarian work, he currently serves as the Solutions Mapping Specialist at the UNDP Africa Borderlands Centre. Enock’s journey into the realm of international development began with his tenure at the United Nations Monitoring Mechanism (UNMM), where he played a pivotal role in facilitating cross-border operations across Syria, Jordan, Iraq, and Turkey. Prior to his work with the UNMM, Enock honed his skills at the World Food Programme (WFP). Before his international engagements, Enock contributed to academia as a lecturer at the University of Nairobi, where he imparted knowledge and fostered critical thinking among future leaders. \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n  \n\n\n",
    tags: null,
    sdg: null,
    url: "/Team.html",
    id: 6
});












index.add({
    title: "...how digitizing community credit unions improves financial inclusion",
    content: "–&gt;\n\nA model that digitizes community credit unions enabling them to provide financial services\n\nWhat it does. The model digitizes community credit unions (CCUs), enabling them to offer integrated virtual services that\nfacilitate credit, improve the savings culture, offer cashless payment soluons and increase the ease of cross-border transactioons. The model has four main components:\n\n\n  \n    Payment Solutions: This pillar focuses on Technology adaptation and analytics, utilizing a digital platform such as an Android-Enabled App or USSD (Unstructured Supplementary Service Data) to enable efficient payment mechanisms.\n  \n  \n    Savings: This pillar involves the development of training modules to enhance financial literacy and capability. It includes training needs analysis, module development, and validation of training, all supported by an Android-Enabled App or USSD for accessibility.\n  \n  \n    Grant Credit Making: This pillar revolves around defining target beneficiaries and customer acquisition strategies. It involves rapid outreach, screening, and collateralization processes, along with product iteration and testing to ensure effective credit provision.\n  \n  \n    Interoperability: This pillar focuses on establishing policies for interoperable financial systems. It employs digital Payment Gateway Providers, and Analytics and Monitoring tools to ensure seamless integration and efficiency in digital financial transactions.\n  \n\n\nAdditionally, this digital financial inclusion model can:\n\n\n  \n    Enhance digital literacy skills: By training members how to effectively use digital technologies. Using practical demonstrations, interactive learning modules, and hands-on exercises to familiarize them with digital tools and platforms.\n  \n  \n    Reduce transaction costs: associated with fees charged for sending money, fees for cashing out at agent locations, and charges for transferring money between different mobile money platforms.\n  \n  \n    Expand the pool of resources for members: By pooling together more savings and resources &amp; encouraging regular savings contributions from members. Exploring other opportunities for investment in income-generating projects.\n  \n  \n    Create new employment opportunities within the value chain: By setting up agent networks to facilitate cash-in and cash-out transactions, venturing into complementary business areas such as retail or distribution.\n  \n  \n    Mitigate ecosystem risks and enhance transparency.\n  \n\n\nValue proposition for the government/other partner. By implementing the DFI model, stakeholders can:\n\n\n  \n    Extend financial services to vulnerable and underserved populations borderlands.\n  \n  \n    Foster inclusive economic growth and development through technology-enabled financial solutions that Leave No One Behind.\n  \n  \n    Promote inclusive green growth and climate resilience in marginalized communities.\n  \n  \n    Empower Community Credit Unions (CCUs) and Saving and Credit Cooperative Organizations (SACCOS) to provide accessible capital and support inclusive sustainable development.\n  \n  \n    Expand the market for financial services in borderlands, attracting technology solution providers and accelerating development.\n  \n\n\nWhy and when to use it. The model for digital financial inclusion addresses informality of Borderland areas, which involve Cross border Traders Associations (CBTA’s), Community Credit Unions (CCU’s), and Village Savings &amp; Loans Associations (VSLA’s). This model is particularly relevant when faced with the infrastructural challenges posed by Telco-off takers, tech startups, market aggressors, private sector, and basic investments by International Financial Institutions (IFIs). Additionally, it becomes essential for facilitating cross border transactions, especially with the involvement of willing digital platform developers within an enabling policy environment for cross border traders. Furthermore, the model serves as a crucial tool for ensuring security and safety, particularly through supporting effective policy enforcement and the implementation of policies on Gender Based Violence by border authorities.\n\nKnown issues and troubleshooting. The DFI model requires:\n\n\n  \n    Collaborative partnerships: Between various eco-system stakeholders re: CCUs, technology providers, private sector, fintech’s among others.\n  \n  \n    Rigorous risk management and vulnerability: assessments for informed decision-making.\n  \n  \n    Capacity building: for sustainable management and operation beyond the support period.\n  \n  \n    Quality Assurance and measurement: Continuous monitoring and evaluation to address emerging challenges and ensure scalability.\n  \n  \n    Dynamic Management: Continuous trouble shooting to enhance performance of the model and enhance its efficiency.\n  \n  \n    Policy Misalignment: inconsistencies in the policies, regulations, or directives of neighboring nations sharing border regions. .\n  \n\n\nContext. Despite efforts by governments and international organizations, factors such as low financial literacy, inadequate infrastructure, and limited access to traditional banking institutions persist. Community Credit Unions (CCUs) and Village Savings and Loans Associations (VSLAs) have emerged as potential solutions but scaling their operations poses challenges. To address this urgent issue and uphold the principle of Leaving No One Behind, the UNDP-Africa Borderlands Centre convened a co-creation design workshop in Naivasha, Kenya, in May 2022.  This workshop brought together over 40 experts from ten countries, who are specialized in the Financial Inclusion ecosystem and represented sub-sectors such as banking, insurance, cooperatives, technology, cross border traders among others. They addressed financial inclusion challenges in Africa’s borderlands and articulated a model harnessing financial technology (Fintech) to empower individuals and businesses, especially the most vulnerable, communities in border regions.\n\nCost. The total cost of relevant activities is about $240,000.\n\n  Local Sensing: $15,000\n  Innovation Design: $130,000\n  Solution Exploration: $70,000\n  Monitoring &amp; Evaluation and Communication: $20,000\n\n\nPeople.\n\n\n  \n    Project Manager: Responsible for overall project coordination, stakeholder engagement, and monitoring.\n  \n  \n    Technical Experts: Provide support in digital technology development, integration, maintenance and troubleshooting.\n  \n  \n    Financial Advisors: Offer guidance on financial strategies, risk management, and legal and regulatory compliance.\n  \n  \n    Training Facilitators: Deliver capacity-building programs and provide ongoing support to beneficiaries.\n  \n\n\nFocal point. Kehinde-Bolaji, Lily-Murei, and Enock-Omweri.\n\nCountry, year, and language. Africa (Borderland Regions), 2022, English.\n\nResources.\n\n*Concept Note and DFI Workshop Report. Read this report to understand the theoretical underpinnings of this model and read how about its key components in detail.\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/abc.html",
    id: 7
});












index.add({
    title: "... with digital payments via neighborhood stores",
    content: "Digital payments via neighborhood stores\n\nWhat it does. The takeup of digital payment services are hindered by persisting digital divides. Even people who own computing devices and have access to the Internet are often reluctant to use them to make payment, as they do not feel confident enough and fear making mistakes, possibly paying more than they should. The Red Con Vos (“Network With You”) is a network of neighborhood stores, whose owners and managers own the necessary equipment for online payments and have been trained in how to help their fellow citizens complete different kinds of online administrative processes (not only payments). Residents gain the convenience of accessing digital payments; store owners charge a small fee for each transaction they facilitate, and, perhaps more importantly, benefit from residents visiting their stores more often.\n\nValue proposition for the government/other partner. By capacitating proximity businesses to transmit online payments and conduct other online transactions, this intervention contributes to the accessibility of these services to the least digitally included citizens, including children, the elderly and those with care duties. Rural communities can also be included, as long as there is a local store with an Internet connection. Additionally, the businesses themselves stand to gain new customers. The programme is sustainable, as it is financed with the savings that result from citizens not having to travel to distant locations to use digital public services.\n\nWhy and when to use it. This tool is most useful when there is a digitized public administrative system with many administrative procedures that must be carried out online or in the central offices; when the access to both online and in-person procedures is problematic because of the lack of proper public transportation, high costs of public transportation, distance, and time restrictions —such as care or work responsibilities; and when there are community markets with computers or mobiles, and Internet connection.\n\nKnown issues and troubleshooting. Some stores might not have IT devices or a stable Internet connection in the community; some store owners might not being keen on joining the network. Providing devices to the stores, and approaching stores that might already have the required equipment, are among the solutions. It is also crucial to count on supportive local partners to provide assistance in establishing the network.\n\nContext. In 2019, the UNDP Accelerator Lab in Argentina observed that a few owners of neighborhood stores had started offering, as an additional service to their clients, the opportunity to digitally complete some official bureaucratic procedures – including digital payments – in the stores. Many bureaucratic procedures have been digitalized in Argentina, but many residents do not feel comfortable with going through them without help. These residents fall back to travelling physically to the government office or bank, where they are facing long waits because, with digitalization, these organizations are divesting from public-facing physical facilities. This behavior was found to be more frequent in women, the elderly, and low-income households.\n\nWith the onset of the COVID-2019 pandemic, the demand for this service grew as mobility was reduced. The Lab is attempting to scale up this idea from individual initiatives to a service with good coverage of the population. A first pilot in Concepción del Uruguay, in a province called Entre Ríos, launched in 2021; a second one launched in Fray, in a different province called Catamarca, in 2022. The two municipalities have different geographic and demographic characteristics, making it possible to test the idea in different contexts. These two pilots show Red Con Vos to be financially sustainable, while saving travel time and distance for residents, supporting local commerce, and offering a partial solution to digital exclusion.\n\nCost. Between 10,000 and 60,000 USD depending on the size of the network and the resources locally available. The Concepción del Uruguay pilot cost 12,000 USD, with the local government overseeing the fieldwork to recruit the stores and invite them to join the network. It also took care of gathering the data to monitor and evaluate the initiative. The Fray pilot, as the local government did not provide any resources, cost 60,000 USD.\n\nTime. 3 to 4 months. The first two months are for project planning, followed by a two-month on-site implementation phase. Once deployed, the network is designed to be self-sustaining. A longer time frame may allow for more evidence to assess the experience.\n\nPeople. The project requires a project manager, a fieldwork manager, and a number of recruiters to recruit and train the the shopkeepers, and also to follow up the implementation of the project. Communication is crucial. Having a team of designers and someone in charge of producing a media kit and contacting the press is an asset. The many materials already designed and the guidelines are available for the fieldwork team.\n\nFocal point. Lorena Moscovich.\n\nCountry, year, and language. Argentina, 2021 and 2022, Spanish and English.\n\nResources.\n\nInformation\n\n\n  Microsite in English and in Spanish.\n  Report with detailed findings from the first pilot in Concepción (2021), available in English and Spanish.\n  Report with detailed findings from the second pilot in Fray (2022), available in English and in Spanish.\n\n\nGuidelines (in Spanish).\n\n\n  Guidelines for recruiters. Use this to explain to store owners what the implications of joining the network are. These can be used in most contexts after translation.\n  Guidelines for store owners. Use this to explain to store owners who have already joined the network how to supply this service, create trust, etc. These can be used in most contexts after translation.\n  Example procedures.This contains step-by-step procedures to execute digital payments and other digital bureaucratic procedures. These are written for the Argentinian digital landscape, and will need to be rebuilt for different contexts.\n\n",
    tags: null,
    sdg: null,
    url: "/4_Pay/arg1.html",
    id: 8
});












index.add({
    title: "Background and purpose",
    content: "Background and purpose\n\nIn 2023, the UNDP Accelerator Labs decided to take stock of the work that its global network of 91 Labs, covering 115 countries, was doing in the area of finance. This work turned out to span the entire globe and to be highly diverse. Yet one commonality stood out: over two thirds of the Labs that were doing finance-related work of any kind focused on financial inclusion. What’s more, the vast majority of the network’s efforts towards financial inclusion, in turn, relied on the use of digital tools.\n\nEmerging from this work is a unique take on digital financial inclusion. First, the Labs have learned that digital tools are most inclusive when they are designed to support existing (good) practices and local knowledge. These practices tend be local (like traditional practices of community saving), or at least to have a local aspect (like local languages). This learning stands in contrast to the globalizing tendencies of fintech, and of finance in general.\n\nSecond, the Labs have learned that digital instruments combine well with neighborhood and proximity. The groups most underserved by finance – like women, the elderly, and low-income communities – can greatly benefit from in-person socialization to financial literacy and the use of digital financialtools. In the absence of this kind of support, digital financial services risk becoming exclusionary – it is often easier and more profitable to serve the already served – or downright extractive. For example, microloans can cost a lot to naïve borrowers due to things like fines for late payments. Counterintuitively, we find that Lab work shows that “the most important part of digital financial inclusion is analog”.\n\nAs the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we offer the experience accumulated by our network of labs in the form of this toolkit: a collection of documented resources. It is meant to inspire would-be champions of digital financial inclusion. Even more, the intent is to empower them by offering ready-made resources that can be re-used after adapting then to a new context.\n\nMany champions of digital financial inclusion in the Global South are to be found within UNDP itself. In particular, we hope this toolkit will help the Country Offices that are moving to promote the inclusion of underserved populations.\n",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/background.html",
    id: 9
});












index.add({
    title: ".. through digital microloan monitoring",
    content: "Using a web tool to monitor microloans to SMEs along with in-person customer service.\n\nWhat it does: The web tool developed by the UNDP Cabo Verde Accelerator Lab supports the monitoring of microloans. Web-based and multi-platform, it pulls data from several sources: the Social Security Institute, the revenue authority, and commercial banks in the case of bank loans. An additional module integrates data from (typically telephone-based) follow-ups in the field. This data allows a quick analysis of each MSME’s position, and lists ones with non-compliance issues for faster action. The objective is to monitor microcredits, allowing the agents in charge of non-compliant loans to pro-actively propose solutions to the MSMEs affected. As a part of the solution, the lab provided a physical customer service desk at the main street market in Cabo Verde, Sucumira.\n\nValue proposition: A data-centric approach to microloans compliance allows organizations in charge of supporting businesses to streamline their operations, and provide faster, more personalized support to each MSME.\n\nWhy and when to use it: This tool is most useful when (1) the volume of microloans is high and (2) there is a variety of loans and other support instruments available to MSMEs. The combination of these two conditions multiplies noncompliance risks and creates complexity in operations, to which the web tools offer a solution. On the first point, compliance officers can become overwhelmed when there are too many loans to process. On the second point, working with a variety of loans and support instruments, each with their own procedures and metrics, makes it difficult for compliance officers to develop a single, coherent routine.\n\nKnown issues and troubleshooting: For this tool to work you will require: \n1) An existing catalogue of offers\n2) Training of staff and providing a physical location to be a “go to” troubleshooting center within the vicinity of the entrepreneurs.\n\nContext: As they scrambled to provide support to MSMEs struggling with the COVID-19 crisis, various public and private institutions in Cabo Verde created different support programs. Some of them consist of, or include, the provision of microloans. The very success of these programs created the need for a tool to allow more dynamic follow-up. ProEmpresa, the agency in charge of supporting the business community, manages several such programmes; it partnered up with the Lab to build such a tool.\n\nCost: The Accelerator Lab funded this effort with a 15.000 USD investment. This can be broken down between 5.000 USD for Improving customer service at the Desk and in the Field - Sucupira Market and 10.000 USD to produce the Attendance Registration Module.\n\nPeople: For colleagues who seek to replicate the experiment, the following roles are needed:\n\n\n  1 consultant to support training for agents in the field\n  1 programmer to develop a digital tool\n\n\nFocal point: Sofia Silva\n\nCountry, year, and language : Cabo Verde, Period: 2020, Portuguese.\n\nResources: TORs for a consultant to develop the digital solution (in Portuguese). Use this resource to frame the problem and set tasks when hiring consultants to support you in a similar initiative.\n\n",
    tags: null,
    sdg: null,
    url: "/5_Borrow/cbv.html",
    id: 10
});












index.add({
    title: "... through research that identifies best practices on regulation and inclusivity for parametric insurance",
    content: "Research on digitally-delivered parametric insurance to boost financial inclusion\n\nWhat it does. The research study of parametric insurance in Colombia analyzes international experience and identifies best regulatory practices of parametric insurance in sectors other than agriculture. Additionally, the case studies identify new actors and digital enabled tools that are being incorporated into the insurance value chain to boost the potential of inclusive insurance (calculation platforms, intermediation through digital ecosystems, alternative mechanisms to reinsurance and the adoption of technologies such as blockchain). The work also presents a series of reflections and recommendations for regulatory adjustments for its proper implementation and operation. As a result, the recommendations were included in the law of the National Development Plan.\n\nValue proposition for the government. Using this research, UNDP can support governments to identify best practices and opportunities for parametric insurance and propose an appropriate path to promote a regulatory approach for the development of parametric insurance in different sectors, promoting digital enabled solutions to boots financial inclusion.\n\nWhy and when to use it. This tool is appropriate for counties that want to promote parametric insurance through the exploration of international experiences that can contribute and guide potential regulatory recommendations to guarantee a proper implementation of such solutions in the country.\n\nKnown issues and troubleshooting. To have a real impact of the research study in terms of public policy and regulation, it is fundamental to have the participation of the national government or the national public regulation unit. If there is a lack of interest from these stakeholders probably this is the first thing you must do. \nAlso, it is important to mention that the data collection and analysis of the information related to best practices and international experiences must consider the fact that these are the result of the context of each country and any potential regulation based on other country experiences may not be easily replicated.\n\nContext. The parametric insurance modality has proven to be an effective tool for managing the risks of traditionally underserved population segments such as low-income households and the rural sector. In fact, the National Policy of Inclusion and Economic and Financial Education promoted the massification of parametric insurance as a key element to guarantee the financial inclusion of the vulnerable population. Since 2019, the regulation enabled the possibility of developing parametric insurance for the rural agricultural sector and since then the use of this type of insurance has expanded significantly in the country. However, the development of parametric insurance had not been developed for other sectors and there was a need to identify the best international practices in sectors other than agriculture and the development of public policy recommendations and regulatory adjustments to enable this market. From the institutional point of view, there was also a need to support the National Financial Unit to develop this new regulation. This is part of the CO work to promote financial inclusion and the Insurance and Risk Finance Facility in the country.\n\nCost. The research cost about USD 15,000 for a consultant and sessions to share policy recommendations and best practices from other countries. Additionally, the cost of 3 UNDP personnel supporting the process for at least 6 months.\n\nPeople.\n\n  Innovative financing advisor: Gives strategic advice and supports the design and implementation process of the research\n  Technical expert on insurance and financial inclusion: Directly supervises the research process and coordinates with relevant public and private stakeholders\n  Consultant: Specific expertise in parametric insurance that elaborates the\n\n\nFocal point. Lina Fernandez, Juan David Ordoñez, and Maria Palacios .\n\nCountry, year, and language. Colombia, 2023, Spanish.\n\nResources.\n\n\n  Report. Use this resource to understand how the research was conducted and what the results were.\n\n\n",
    tags: null,
    sdg: null,
    url: "/6_Derisk/col.html",
    id: 11
});












index.add({
    title: ".. by providing fintech factoring services",
    content: "Accessing working capital through digital platforms run by fintech companies\n\nWhat it does: The experiment will identify the barriers that SMEs face to access fintech factoring services in Colombia and will develop strategies to reduce or eliminate those existing barriers trough public policy recommendations. SMEs are a fundamental sector of the Colombian economy, representing 90% of the business fabric and generating 60% of employment. However, MSMEs face difficulties in accessing financing, which limits their growth and development. Factoring is a financing alternative that allows MSMEs to obtain early liquidity in exchange for assigning their accounts receivable to a factoring company. Fintechs have developed digital platforms that offer factoring services in a more efficient and accessible way for MSMEs.\n\nValue proposition: With this experiment, UNDP can facilitate access to diverse alternative financing tools for MSMEs, seeking a more efficient use of resources by providing working capital financing options that are less expensive than traditional ones.\n\nWhy and when to use it: This tool is most useful when SMEs face different access barriers to financing and lack of liquidity because of the long collection periods for invoices generated by their sales. Likewise, when SMEs have a low capacity for indebtedness or low access to credit. These conditions open an opportunity for the use of fintech factoring as a tool for access to financing for SMEs.\n\nKnown issues and troubleshooting: Fintech factoring must be regulated, and their activities must be supervised by a governmental entity. To guarantee competition of services, the fintech factoring ecosystem should be activated and with participation of different companies.\n\nContext: One of the main obstacles faced by MSMEs in Colombia is the long collection periods for invoices generated by sales, which generates significant liquidity problems for companies. The low capacity for indebtedness and not meeting the requirements requested by the financial institution are the main reasons why microentrepreneurs cannot access credit and other sources of financing. In addition to the above, Colombia is one of the countries where it is most expensive for MSMEs to take out a loan due to high interest rates. In this context, there is an opportunity to develop an experiment that allows identifying the barriers to access for MSMEs to these financing mechanisms aimed at generating liquidity, through a knowledge and support path for the use of factoring with the support of companies from the Fintech ecosystem, jointly designing public policy recommendations and regulatory adjustments that facilitate access to these sources of financing.\n\nCost: The cost of the experiment is approximately USD 60.000, in this case provided by USAID. These resources will be used in implementing the different experiments and supporting the research as part of the process.\n\nPeople:\n\n\n  Innovative financing advisor: Identifies the opportunity and gives strategic advice and support for the design and implementation of the experiment, guarantees coherence and value to the broader fintech agenda.\n  Innovation and Experimentation Advisor: Supports the design and implementation of the experiment.\n  Technical expert on financial inclusion: Guarantees coherence with the financial inclusion agenda.\n  Technical expert on innovation and fintech: Leads the design and implementation of the experiment with the fintech companies and leads coordination with the fintech ecosystem.\n\n\nFocal point: Lina Fernandez, Juan Martin, Juan David Ordoñez , and Diana Muñoz.\n\nCountry, year, and language: Colombia, 2024, Spanish.\n\nResources:\n\n",
    tags: null,
    sdg: null,
    url: "/5_Borrow/col_3.html",
    id: 12
});












index.add({
    title: "...how a fintech ecosystem can promote digital financial inclusion for women by integrating a gender approach into its value proposition",
    content: "–&gt;\n\nCollective intelligence workshops to boost financial inclusion for women\n\nWhat it does. The collective intelligence workshops implemented with the fintech ecosystem to include the gender approach within their value proposition has given more visibility to women working within the Colombian Fintech ecosystem, a sector traditionally dominated by men. This approach not only recognizes the contribution of women in this field, but also promotes greater female representation. Secondly, the inclusion of this approach will generate solutions that identify and address the specific needs of women and girls, fostering their financial inclusion and economic autonomy. This includes the development of financial products and services designed with a gender perspective, ensuring that Fintech solutions effectively respond to the barriers faced by women. Lastly, this will establish good practices for the development and advocacy of public policy in the Fintech ecosystem, including a gender approach.\n\nValue proposition for the government/other partner. This tool allows our allies as the private sector association of Fintech in Colombia to recognize gender as a fundamental strategic and methodological enabler to transform realities and offer financial solutions that significantly contribute to the transformation of women’s lives, integrating them as key actors in human development. By focusing on the needs and potential of women, Fintech solutions can play a crucial role in their economic and social empowerment.\n\nWhy and when to use it. This tool is more useful during the consolidation of the Fintech ecosystem, with a focus on promoting companies led by women or that address their specific needs. Also, in times of debate about the regulation of Fintech verticals, where it is crucial to position the gender approach to influence the formulation of public policies. Lastly, in the context of the 2030 Agenda, promoting actions that promote women’s economic autonomy through financial inclusion, aligning these initiatives with the Sustainable Development Goals.\n\nKnown issues and troubleshooting. To effectively implement this approach, the following is required: (i) Organizational commitment to gender equity at all levels, from senior management to operational teams, (ii) gender analysis to identify gaps, needs and specific opportunities within the Fintech sector and among potential users, (iii) gender capacity building for the staff of the vertical, ensuring that they understand and can implement inclusive practices and (iv) collaboration with stakeholders including women’s organizations, gender experts and regulators to design and implement effective solutions.\n\nContext. This approach is implemented in a context where the Fintech sector is expanding and recognizes the need to be more inclusive and equitable. In countries like Colombia, where the gender gap in access to financial services and representation in the technological sector persists, the integration of a gender approach is both a strategic opportunity and an ethical imperative. Implementing these practices not only benefits women and girls, but also contributes to sustainable growth and innovation in the financial sector.\n\nCost. The cost of the collective intelligence sessions are approximately USD 1.000, for the development and organization od the events. As for UNDP personnel, at least 3 persons have supported the process.\n\nPeople.\n\n  Innovative financing advisor: Gives strategic advice for the design and implementation of the collective intelligence process and guarantees coherence and value to the broader fintech agenda.\n  Technical expert on innovation and fintech: Supports the design and implementation process of the collective intelligence sessions and supports implementation and coordination with the fintech ecosystem.\n  Technical expert on Gender: Leads the thematic focus and the development of a gender value proposition for the fintech ecosystem.\n\n\nFocal point. Lina Fernandez, Diana-Gonzalez, and Diana-Muñoz.\n\nCountry, year, and language. Colombia, 2024, Spanish.\n\nResources.\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/col_two.html",
    id: 13
});












index.add({
    title: "... how to improve financial inclusion by assessesing the status of financial and digital literacy in your country",
    content: "What it does. The DFL survey assesses the status of financial and digital literacy in a country to design and implement evidence-backed interventions. (Find the full report for Fiji including the survey and an explanation of the rational and results here.) The tool measures Digital Financial Literacy in general as well as assigns scores in four broad thematic areas:\n\n\n  Digitalisation: Access to devices, digital activities, internet access and usage, awareness and participation in safe digital/online practices;\n  Financial Competencies: Engagement with financial safeguards (budgeting, savings), financial knowledge (basic understanding of inflation, etc.);\n  Digital Financial Competencies: Beliefs, attitudes and behaviours concerning financial services and DFS;\n  DFS Outcomes: Usage of mobile and online financial services and the impact of DFS on financial wellbeing.\n\n\nIt also allows for the disaggregation and comparison of the survey data from different groups of interest, such as women, youth, agriculturalists, etc. The research explores experiences with traditional and digital financial services to date and assesses basic competencies in digitization and finance.\n\nValue proposition.  Improved financial and digital literacy can strengthen consumer protection and resilience to major financial shocks. To improve and implement targeted interventions in such areas, governments/decision-makers need updated data to guide and priorities their efforts.\n\nWhy and when to use it. The growing availability of digital financial services (DFS) and emerging digital platforms in least-developed countries can provide unique capital-building tools and resources for accelerating financial inclusion and inclusive growth for the last mile. To realize this potential, strengthening the digital and financial literacy (DFL) of all population segments, especially the marginalized and low-income groups, is essential.\n\nThe survey findings can be used to develop and implement targeted interventions for improving digital financial competencies among women, MSMEs, youth, migrant workers, and rural communities.\n\nThe survey results are intended to serve as a baseline from which future changes in competencies, access, and usage can be measured by the regulators and development partners.\n\nKnown issues and troubleshooting. To make the best usage of the tool, the following requirements should be in place:\n\n\n  Ahead of the implementation of the survey, include a phase to dialogue with institutional partners (such as government, ministries of finance and ministries of education, etc.) to ensure buy-in and build appetite for the survey findings.\n  Ensure that in the request for proposals or request for applications, it is clear that the survey is developed and does not need a line item for applicants to develop or greatly alter the survey. It should be clear that the methodology has been tested and refined and needs contextualization. (However, as a caveat, we can share the survey tool with others who may wish to use it and tweak it for their own projects and goals.) However, note that the RFP and RFA are developed and available for sharing to give an idea of the type of language to be used and LoE to be suggested.\n  Finally, it is imperative to ensure that implementation teams have substantial local presence, knowledge and experience, as well as existing enumerators (whether on staff or as part of a team that can be called) so as to execute the survey efficiently and with a team that understands the context and needs minimal training.\n\n\nContext. Since a decade ago, access to and usage of digital technologies and financial services have significantly been transformed in Africa and the Pacific. However, limited data/ evidence has been generated to understand the status of digital and financial literacy in those regions. COVID-19 also largely influenced the financial behavior of last-mile segments in the last three years, particularly for low-income groups and MSMEs.\n\nTo address the gap in data, UNCDF launched the ‘Digital and Financial Literacy Survey (DFLS) 2022’ in July 2022 in the Pacific region; the same surveys are being rolled out in Niger, Gabon, Malawi and Ethiopia in 2024.\n\nThe surveys on digital and financial skills are part of UNCDF’s effort to develop inclusive digital economies that allow rural communities, women and MSMEs to enhance their market participation, resulting in poverty reduction, improved livelihoods and economic growth.\n\nCost. There are two levels of cost/budget to be considered:\n\n  Survey and reports between US $50,000 and US $75,000 depending on the country and the capacity to use computer-aided methodologies.\n  Dissemination to ensure policymakers and private stakeholders can use of the data and make informed decisions (dissemination efforts through events and workshops) US $5,000 and $10,000 depending on the country and the level of effort.\n\n\nPeople. Two project managers to work with the research firm that conducts the surveys and drafts the report. One staff to coordinate all surveys (ensuring consistency across all surveys and reports) and one in each country.\nUNCDF partnered with Tebbutt Research to conduct Digital and Financial Literacy Survey in Fiji and six other Pacific Island countries (Papua New Guinea, Solomon Islands, Samoa, Vanuatu, Tonga, and Timor-Leste)\n\nFocal point. Jessica Massie and Karima Wardak\n\nCountry, year, and language. Surveys have been carried out in 2022 in 7 Pacific countries: Fiji, Papua New Guinea, Samoa, Vanuatu, Tonga, Timor-Leste and Solomon Islands. Reports are accessible online in English. A French version of the metrology and questionnaire will be available in 2023 when the survey is carried out in Niger and Gabon.\n\nResources\n\n\n  TOR for the research firm. You can read this, the most recent TOR (2023), as a reference point for hiring a research firm . The deadline has passed but the link is still active; scroll to the “TOR” section.\n  Survey questionnaire (see reports).Visit the Fiji Report and Appendix A for a full description of the survey, protocol, methodology and findings for Fiji.\n  Platform (still in development).\n\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/dfls.html",
    id: 14
});












index.add({
    title: "... through diagnostics meant to prepare the roll-out of a programme on risk insurance",
    content: "What it does. Insurance is a powerful tool to reduce uncertainty and precarity in people’s livelihoods. Unfortunately, robust insurance markets are not available in many Global South countries. These diagnostics are a form of inquiry that takes stock of the conditions for a programme on risk financing to do well. It examines the main demographic and economic features of the population in question; evaluates the potential risks, their geographic distribution and the relative exposure; the government’s capacity for risk management; maps the policy/regulatory landscape; and stakes out the actors in the insurance market.\n\nValue proposition for the government. By identifying strengths and weaknesses of the country under consideration, diagnostics enable the design of insurance products that are tailored to the local conditions, and of measures to support the risk finance ecosystem. Additionally, running the diagnostic is likely to enhance awareness of, and support from stakeholders, including government, insurance companies, and donors. This, in turn, is conducive to the creation of a more robust and inclusive insurance market.\n\nWhy and when to use it. Run diagnostics as the first step of a new workstream on risk financing.\n\nKnown issues and troubleshooting. Lack of time-series data (such as locally disaggregated census data) can “blind” the design of risk insurance programmes. In order to secure this data, it is essential to collaborate with the government’s disaster risk prevention and preparedness service.\n\nContext. Ethiopia’s economy and households are exposed to the impacts of disaster shocks, with women and girls being disproportionately affected. Droughts, floods, and related food insecurity are the primary drivers of disaster response costs, and all are poised to become more frequent as the planet warms. To respond to disaster shocks, Ethiopia is largely reliant on ex-post financing—primarily official development assistance and humanitarian appeals, budgetary reallocations, and emergency borrowing. In 2021, UNDP launched a new flagship initiative, the Insurance and Risk Finance Facility, to support the development of insurance markets beyond their current reach. Ethiopia was selected for an intervention in this initiative.\n\nCost. Limited to personnel. A lead researcher and a research assistant for two months full-time equivalent each. In the case of Ethiopia, this costs approximately $8,000.\n\nTime. About 8 months.\n\nPeople. One research lead and one in-country researcher. Significant support was provided by three more in-country people, who prepared a preliminary report (“pre-diagnostic”) in response to a list of questions.\n\nFocal point. Amanuel Tadesse.\n\nCountry, year, and language. Ethiopia, 2023, English.\n\nResources.\n\n\n  Blog post. Use this resource for a narrative account of how this initiative was developed in Ethiopia.\n  Pre-diagnostic report. Use this resource to understand what type of data are needed to prepare a diagnostic report.\n\n",
    tags: null,
    sdg: null,
    url: "/6_Derisk/eth.html",
    id: 15
});












index.add({
    title: "How to use the toolkit",
    content: "How to use this toolkit\n\nArchitecture\n\nWe use the metaphor of the toolkit to emphasize the operational, enabling nature of the work you are reading right now.\n\n\n  The Toolkit is a set of resources and their documentation materials meant to help people and organizations who want to deliver digital tools that support financial inclusion.\n  The toolkit contains tools. Each tool consists of one or more resources, documented in a page of this website.\n  A resource is a document that can be re-used, in part or as a whole. Examples are TORs for a software developer to design an app; assessments for digital literacy and research tools to understand financial behavior; and curricula for entrepreneurs seeking to boost their bookkeeping skills. Resources are accessible via live links from the factsheets, with a UNDP corporate login.\n  Website pages contain resources metadata, accessible to everyone. Each page is dedicated to one tool, and explains what the tool is good for; what it is not good for; the context in which it was produced; how much money and time you will need to deploy it, etc. You will also find a reference to the person or people who created the resource.\n\n\nUsing this toolkit in four easy steps\n\n1. Decide what you want to do and browse the catalogue.\n\nThe tools in this kit are labelled according to function, with names like “Help people understand how to improve financial inclusion by assessing the status of digital and financial literacy in your country” and “Help people save by digitizing community savings processes”. They are sorted into into six main categories, based on the primary types of financial behavior (excluding ‘Certify” which is an atypical example). The navigation bar on the left of the screen acts as a catalogue: browse it and navigate to any tool you like.\n\n2. Read the description from this website.\n\nEach tool’s website page contains information you can use to decide if that tool is helpful to you. Is it aligned with your goals? Is it compatible with the amount of time and money you have? Did its deployment run into problems? If so, how were they addressed?\n\n3. Read and reuse the resources.\n\nIf the description of the tool looks interesting, you can move on to the resource itself. Because the tool was not written with your specific case in mind, you will need to adapt it to our context. Hopefully, this will be easier than starting from scratch. Please note that in this prototype version, you will need a undp.org email address to access resources.\n\n4. Ask for support.\n\nAll resources have a lead author, or “focal point”. The ethos of UNDP’s Accelerator Labs is one of sharing knowledge, so you can reach out to the focal point if you need more information and support.\n\n",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/how-to-use-the-toolkit.html",
    id: 16
});












index.add({
    title: "Help people understand",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/",
    id: 17
});












index.add({
    title: "Help people certify",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/7_Certify/",
    id: 18
});












index.add({
    title: "Getting Started",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/",
    id: 19
});












index.add({
    title: "Help people de-risk livelihoods",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/6_Derisk/",
    id: 20
});












index.add({
    title: "Help people pay",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/4_Pay/",
    id: 21
});












index.add({
    title: "Help people borrow",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/5_Borrow/",
    id: 22
});












index.add({
    title: "Welcome",
    content: "Welcome to the Digital Financial Inclusion Toolkit\n\nThe content of this site is property of the United Nations Development Programme, and published under a Creative Commons 4.0 Attribution license.\n\nHuge thanks to everyone who contributed to creating this prototype. All contributors and curators are part of the UNDP Accelerator Labs unless otherwise indicated. A full list and each one’s contact information are available on the Contributors page.\n\nCuration task force: Lilian Abou  Zeki (Lebanon), Tayo Akinyemi (Global Team), Jacqueline Aringu (South Sudan), Tong Atak (South Sudan), Alberto Cottica (Global Team), Eduardo Gustale (Global Team).\n\nTechnical support: Adedapo Aderemi (Global Team), Jeremy Boy (Global Team).\n",
    tags: null,
    sdg: null,
    url: "/",
    id: 23
});















index.add({
    title: "... the opportunities for digital financial inclusion through a digital finance ecosystem assessment in your country",
    content: "**What it does**. The SDG Digital Finance Ecosystem Assessment (SDFE) provides an in-depth understanding of the drivers that make a country digital finance ready, which in turn supports the design of policy interventions and investments needed to fast-forward its digital journey. The assessment helps link digital finance policies with SDG financing as well as the government and regulators’ climate resilience commitments. It also investigates the digital economy and digital finance ecosystem to understand the current level of (digital) financial inclusion for underserved segments of the population, with a specific focus on women, to identify key drivers and opportunity areas within the digital economy that can advance inclusion. \n\n**Value proposition**. Using this assessment, UNDP can help a government to identify gaps and opportunities within their domestic digital finance ecosystems, revealing the level of inclusion of vulnerable segments in digital finance and the broader digital economy, and measuring the extent to which the digital finance ecosystem is aligned with national SDG priorities. \n\n**Why and when to use it**. This tool is appropriate for a government that wants to use data to understand where the gaps and opportunities for financial inclusion lie and use it to inform their national development strategy and policies. Established relationships with national partners and private sector partners are critical to conducting the SDFE successfully. Pre-existing relationships with NGOs that have ties to people and communities are often overlooked, are also essential to collecting in-depth data from diverse sources. \n\n**Known issues and troubleshooting**. Collecting good qualitative and quantitative data from diverse sources is time and labor intensive. It requires managing many levels of stakeholders to secure high response rates for surveys and participants for interviews and consultations. Additionally, because there is quantitative data collected at the global level, e.g. GSMA, there is added value to gathering granular and nuanced qualitative data (even though global data can serve as a benchmark). Given the above, it’s important to work with a flexible timeline. \n\n**Context**. In 2018, the Moroccan government prioritized improving financial inclusion and envisioned a transition to a cashless, digital local economy. As a result, the National Financial Inclusion Strategy was developed. However, despite Morocco’s status as a lower-middle-income country with a sizeable underbanked population, digital finance is underexploited as a catalyst for inclusive growth. For example, digital payments have the potential to expand access to finance for the unbanked and underbanked, but digital payment adoption is still in its very early stages.    \n\n**Cost**. Approximately USD 40,000 for a consultant, and a high-level event to share policy recommendations and best practices from other countries. \n\n**People**. A *UNDP Country Office* (or a similarly equipped unit) can participate in the assessment design process, provide input and engage in troubleshooting during the research implementation process. A *researcher* can help coordinate stakeholders, conduct interviews and co-author the report. \n\n**Focal point**. [Najoua Soudi](/Financial-inclusion-toolkit/contributors/Najoua-Soudi.html) \n\n**Country, year, and language**. Morocco, 2023, English and/or French  \n\n**Resources**  \n\n* [Report on assessment findings](https://www.undp.org/fr/morocco/publications/rapport-devaluation-de-lecosysteme-de-la-finance-digitale-au-maroc-sdfe) (French). Use this resource to see how the digital finance ecosystem assessment can deliver insights on financial inclusion. \n* [UNDP/UNCDF joint offer on digital financing of the SDGs](https://www.uncdf.org/joint-undp-uncdf-df-of-the-sdgs) (English)\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/mor.html",
    id: 25
});












index.add({
    title: "... by digitizing community savings  processes",
    content: "# Digitizing community savings groups\n\n**What it does**. \nIt supports groups of people engaged in community saving in moving from physical cash to digital mobile money. In community saving, digitization offers advantages in terms of transparency, security, and financial inclusion. In South Sudan, the most common form of community saving is called _sanduk_, which means \"box\". We use this term throughout the description of this tool.\n\n**Value proposition for the government/other partner**.\nDigitizing sanduks makes cash available to members to borrow during emergencies. It allows members to save and borrow money easily, and track transactions and savings to build a financial profile that enables them to secure bank loans. Additionally, this process will enable any entity seeking to improve the operational efficiency and safety of analog savings group processes, to digitize them and provide records of financial transactions that banks and other formal institutions can use to extend financial services. Finally, a private sector company can use this process as a form of R&D to develop a financial services product to serve excluded rural communities. Or civil society organizations may utilize the training component to provide women in informal business with basic business and digital literacy skills. All this means increased access to financial services, and therefore (directly), a boost to financial inclusion and (indirectly) a boost to business growth.   \n\n**Why and when to use it**. To replicate the model successfully, several conditions need to be in place, such as:\n - Structured community savings groups;\n - Ubiquitous mobile money services provided by private sector entities;\n - Private sector partners that can ensure the continuity and sustainability of the services;\n - An enabling environment for innovation, as defined by policy, legislation and best practices;\n - Good quality contextual information, such as the level of infrastructural support, physical and digital security, logistics, socio-political contexts, and how these elements will facilitate or hamper the use of digital technology;\n - Training in digital literacy, financial literacy, and how to use legal services, to help sanduk members learn the basics of business management and market rules and regulations.\n\nIn the long term, addressing the lack of banking infrastructure will also help community savings schemes transact more efficiently.\n\n**Known issues and troubleshooting**. Technical infrastructure such as phones and mobile network access, and community savings groups who are willing to try digital solutions, are required to replicate this model.\n\n**Cost**. \nThe entire activity cost approximately 100,000 USD, allocated as follows:\n - 12,0000 for the community immersion (flights to Abyei and Warawar, ground transportation, security, and food); \n - 16,000 for technical support;\n - 60,000 for community engagement (commodity booster packages, M&E, and ongoing commmunication with savings groups);\n - 10,000 for capacity building trainings.\n\n**People**.\nThe required roles for this experiment include:\n\n - Community mobilizer/local partner. This implementing partner, most likely a CSO, will have deep community ties so it can lead the community immersion, mobilize the community, and conduct financial literacy training.\n - Interpreter. The interpreter will ease communications between the implementing team and the community, if needed.\n - Technical counterpart. A software developer who has soft skills and understands the community will build the product.\n - Research team. These research volunteers can document insights. [double check]\n - Data analyst. The data analyst will design the survey tools and process the data collected.\n - Technical Support. The technical support lead will support the project lead. [double check]\n\n**Context**. In remote areas along borders, making payments is often a struggle, banks are inaccessible, and access to finance and financial services is nonexistent. Many communities in rural settings use sanduks, or community savings groups, to pool money and safeguard it from wildfires. Similarly, at the border of South Sudan and Sudan, crossborder traders often send money to Khartoum through Cairo for the purchase of their goods. This extends the amount of time it takes to get their goods delivered. \n\nAn \"analog-to-digital savings\" experiment was launched to explore innovative ways to address these challenges. The theory of change was that by digitalizing sanduks, group members in communities would keep their communally pooled funds safe, provide access to emergency funds for social needs, such as paying school fees and medical bills, and build digital financial profiles that would enable members to solicit loans from financial service providers. The initial focus of the experiment was on women's financial inclusion, and cross-border traders were later added. \n\nThe series of steps taken to execute this experiment included the following:\n\n1. **Co-creation**. The co-creation, baseline, and solutions mapping phase brought the accelerator labs from South Sudan and Sudan and together with local border communities to better understand their on-the-ground contexts and lived experiences. This phase was critical to establishing a deep connection with the communities and to ensuring community ownership of the proposed saving innovation. This co-creation process resulted in community-informed updates and revisions to the concept, processes, and budget.\n2. **Validation survey**. This stage was critical to assessing community buy-in and validation of the digital sanduk model, drafting a work plan and budget, identifying on-the-ground partners and supporters of the initiative, and benchmarking the labs' understanding of context and lived experience.\n3. **Community Immersion**. The objective of the community immersion was to enhance the quality of innovation through active listening, observing, learning, and constructive interaction with key community stakeholders that were critical to the success of the innovation.  \n4. **Launching of the digital sanduk**. During this stage, sanduk members completed their registrations for digital mobile money accounts and tested the digital sanduk platform. Specifically, members of the experimental group transferred their shares digitally to a separate sanduk platform.\n5. **Close-out/Roll out**. The South Sudanese lab team travelled to Warawar to debrief participants and stakeholders about the experiment outcomes, outlining the digital sanduk journey. \n\nFollow [this link](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/The%20Experiment%20Journey.pdf) to learn more.\n\n**Focal points**. [Jacqueline Aringu](/Financial-inclusion-toolkit/contributors/Jacqueline-Poni-Aringu.html) and [Tong Atak](/Financial-inclusion-toolkit/contributors/Tong-Atak.html).\n\n**Country, year, and language**.\nSouth Sudan, 2022-2023, English.\n\n**Resources**.\n\n - [Use this concept note to understand how the baseline survey was deployed](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/0a2ab4368bbc336c842e3026e6f9d45681ec6d79/3_Save/Concept%20Note_%20Baseline%20Survey%20and%20Sensitization%20(Sanduk%20Experiemnt).pdf) and [to learn how immersions and follow-ups were conducted](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/9c70b6f5fac189aae8c220bf804cc738751632d6/3_Save/The%20Experiment%20Journey.pdf). Check this link [to follow how the experiment was concluded](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/d704e97b84ab06ca1bcbb887c36b7aea23c10a7f/3_Save/Joint%20ABC%20and%20AccLab%20closing%20mission%20for%20the%20Digital%20Sanduk%20experiment.pdf).\n - [TOR for the m-Gurush consulting service](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/TOR%20Video%20Documentation.pdf). Use this TOR as a reference document to hire a consultant to provide videography and photography services.\n - [Baseline survey](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/Revised%20Sanduk%20Baseline%20Questionnare%202-March%202022.pdf). Use this resource as a template to develop a baseline survey for your context. \n - [Needs assessment and endline survey](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/Concept_%20Endline%20Survey%20of%20Sanduk.pdf). Use this resource as a template to develop a needs assessment and endline survey for your context.\n",
    tags: null,
    sdg: null,
    url: "/3_Save/ssd.html",
    id: 26
});












index.add({
    title: "...how digital community entrepreneurs help financial service providers reach rural customers",
    content: "-->\n\n# Digital community entrepreneurs providing information, customer service, and hardware to enable financial services\n\n\n**What it does.** The digital community entrepreneur (DCE) model allows financial service providers to go deeper into rural markets and service communities with formal financial services. \n\nData shows that users of mobile money services rely on their close network or agents to use these services. Being at ease with services on mobile phones or other digital means takes time and requires a mix of things ranging from awareness to education, repeated use, and positive outcomes. \n\nThe DCE model facilitates each of these aspects by providing basic information on services, support to register and use the service as well as access to basics like SIM cards, handsets, charging stations or products that can be paid via mobile money accounts (pay as you go solar products).\n\nCommunity members who become DCEs provide the support and infrastructure needed to use digital financial services.\n \n\n**Value proposition for the government/other partner.** The model is designed to work with and for private sector actors such as financial service providers and fintechs expanding their services in remote rural areas. It works on the principle that the adoption of new technologies is a deliberate process that must be driven by trusted members within the community.\n\nDeployed at the last mile, DCEs complement financial service providers' sales and marketing efforts to onboard and educate customers about digital financial services while also serving as a distribution team for mobile handsets, SIM cards and solar products for charging phones. \n\nThe model encourages the providers or fintechs to recruit and train the DCEs to become the gateway to digital financial and non-financial services.\n\n**Why and when to use it**. The model is very efficient when looking at deploying digital financial and non-financial services to remote communities that are new to such technologies and require a holistic onboarding model that includes a hands-on approach and support available within the community in the long run.\n\n**Known issues and troubleshooting**. To effectively implement this approach, the following is required: (i) Organizational commitment to gender equity at all levels, from senior management to operational teams, (ii) gender analysis to identify gaps, needs and specific opportunities within the Fintech sector and among potential users, (iii) gender capacity building for the staff of the vertical, ensuring that they understand and can implement inclusive practices and (iv) collaboration with stakeholders including women's organizations, gender experts and regulators to design and implement effective solutions.\n\nThe DCE model works well if the following conditions are in place:\n\n•\tConnectivity and phone ownership among users.\n•\tRelationships with farmers associations, VSLAs, youth groups, mobile phone suppliers, etc.\n•\tProviders of financial services and fintech in the markets with services and products that are fit for smallholder farmers (i.e. that match the cycle of production or agriculture seasons).\n\n**Context**. To bridge the digital finance divide, UNCDF in Uganda has been driving digital financial inclusion with a focus on agriculture value chains since 2015. UNCDF works with private sector players to drive digital financial products and services in the hard-to-reach areas in Uganda, providing both technical assistance and grants to de-risk innovative projects.\nMobile technologies hold an immense potential to accelerate access to services, notably financial services, which drive rural communities' economic development. In Sub-Saharan Africa, 55% of the adult population holds an account with a financial institution or mobile money provider. The growing number of mobile money accounts also comes with potentially increased access to other services like access to high-quality inputs for agriculture (seeds and tools), information on techniques, weather information, etc.\n\nDigital financial service providers, just like other private sector players are open for business and partnerships that are built on a strong business case. The latter is not always evident or guaranteed when it comes to reaching the last mile, which explains the reluctance of partners to reach these markets.\n\nIn forging these partnerships to be able to serve the last mile, UNCDF had to create solutions that can demonstrate to the financial services providers (FSPs): (1) that there is a potential market to tap into, (2) that this market can be profitable if served appropriately.\n\nWith these objectives in mind the UNCDF conceived a first model in 2015 called the Booster Team, that was upgraded based on the lessons learned in 2019 to become the digital community entrepreneur model.\n\n\n**Cost**. A pilot project of the DCE model implemented by UNCDF’s partner Ensibuuko in Northern Uganda from 2019 to 2021 cost a total of US$ 405,409, with UNCDF contributing US$ 204,981 and Ensibuuko US$ 200,428.  Through this project, 361 DCEs were recruited and reached 245,000 people with digital and financial literacy training, and digital tools.  \n\n**People**. Project Managers are responsible for overseeing the comprehensive planning, execution, and monitoring of the project document to ensure its successful implementation. They provide technical assistance to the implementing partner and facilitate discussions and engagements with pertinent stakeholders, including financial institutions, mobile network operators, and development institutions like the development bank, streamlining the coordination process.\n\n**Focal point**. [Richard Ndahiro](/Financial-inclusion-toolkit/contributors/Richard-Ndahiro.html)\n\n**Country, year, and language**. Uganda, 2022-2023, English. \n\n**Resources**. \n•\tConcept note about the DEC model\n•\tTOR for the TA\n•\tTraining toolkit (ToT and trainee)\n[Report](https://www.uncdf.org/article/6446/digital-community-entrepreneurs---going-the-extra-mile-to-close-the-digital-gap-in-rural-uganda). Read this report to understand the impact that the Digital Community Entrepreneur model has had in facilitating last mile distribution of digital financial products and services as well as improving the livelihoods of women and youth, who are driving this innovation. It also explains  how the model operates and enumerates challenges and opportunities for scalingup such a model.\n\n",
    tags: null,
    sdg: null,
    url: "/2_Understand/uncdf_ensibuko.html",
    id: 27
});












index.add({
    title: "Values and attitude",
    content: "## Values and attitude\n\n### Values\n\nThis toolkit was produced in the cultural context of UNDP’s Accelerator Labs. It draws inspiration from their culture of deep listening, immersion within the everyday reality of the Global South, and respect for grassroots innovation, openness, and epistemological humility. It does not seek to provide turnkey solutions, but to share the knowledge accumulated along the way, in the hope of making the task of delivering financial tools digitally a little less difficult.\n\n### Support and enhance grassroots approaches\n\nMost people in the Global South do not have bank accounts, and are generally not served by traditional basic financial services. Many communities have found ways to produce functionally equivalent financial services: for example, the Accelerator Labs have documented forms of community savings. Rather than treating these approaches as an indcation of backwardness, we recommend looking to these forms of grassroots finance as collective intelligence, and, where the potential is there, build upon them. A good example is the digital version of sanduk sanduk, a form of community savings group used in South Sudan.\n\n### Focus on the \"last mile\" of finance \n\nFinancial networks span the planet, but, in the Global South, they are sparse. This toolkit focuses on the \"last mile\" of financial inclusion, where communities that might be harder to serve for traditional providers of financial services get connected to global networks. Financial literacy is a major enabler of inclusivity, and the UNDP Accelerator Labs have accumulated substantial experience in this area.\n\n### Digital cuts both ways\n\nFintech entrepreneurs have used the potential of digital ecosystems to build new financial services on top of the existing ones. This is exciting, but its very efficiency risks leaving further behind those who are financially and/or digitally excluded. The Accelerator Labs have prototyped ways that these exclusionary dynamics can be overcome with interventions such as making digital payments in neighborhood stores. In a last mile context, the most important part of digital finance is analog.\n",
    tags: null,
    sdg: null,
    url: "/1_Getting%20started/values.html",
    id: 28
});












index.add({
    title: "... through an app to digitize financial transactions in cross-border trade",
    content: "# An app to digitize financial transactions in cross-border trade\n\n**What it does**.\n The VillageSavers app digitizes trade and financing for cross border traders who are women and young people, in their shared border towns of Livingstone (Zambia) and Victoria Falls (Zimbabwe). More specifically, the app:\n\n- Allows informal Self-help Savings Groups (SHGs) to digitize their financial transactions records (savings and loans) through an automated digital system. \n- Solves problems of poor record keeping, human error, lack of transparency, and distrust as each member has access to the information in real time.\n- Increases informal businesses' access to formal financial services as private banks have reported that the app's credit history can be used to make a case for securing financial support. Specifically, VillageSavers app creates credit scores that can be used to access financing from formal financial services providers such as banks.\n- Increases access to financial and digital literacy information by providing training on financial literacy, including financial and savings management, as well as training on how to use digital financial management tools. \n\n**Value proposition for the government/other partner**.\n By using the VillageSavers app, self-help savings groups have a comprehensive solution to the challenges faced in informal savings groups. It not only improves financial management and transparency but also opens new opportunities for digital financial inclusion and access to formal financial services.\n\nNotably, the VillageSavers app is most useful within the informal sector, catering to individuals who lack access to formal banking services. This community seeks to collectively pool their resources, thereby bolstering their borrowing and lending capabilities, leading to increased revenue for their businesses. Additionally, the app has demonstrated its value to formal financial institutions, as it helps them identify patterns of creditworthyness within the informal business sector, making it a viable tool for extending financial support to unbanked populations.\n\n**Why and when to use it**. Small scale cross border traders (SSCBTs) suffer from lack of access to pensions, as well as other financial products and services because they are unable to engage with the pension authority and banks, who view serving them as risky. Using an app such as VillageSavers will create a digital transaction history that would enable banks and the pension authority to do more accurate risk assessments.\n\nIn order for the VillageSavers app to be effective, it's important to have SMEs that have the following characteristics:\n\n- Actively trading;\n- Participating in a savings group;\n- Have access to smartphones, internet and a basic level of financial and digital literacy (or are willing to receive assistance to access phones and training).\n\n**Known issues and troubleshooting**. Key challenges are lack of digital skills, poor or limited internet connectivity, and difficulty accessing a smartphone, which can be price-prohibitive for some SMEs. SMEs might also experience difficulties using the app, for which they'd need technical and troubleshooting support.\n\n**Cost**. Approximately $100,000, with the following breakdown:\n\n- App maintenance, including trouble shooting, hosting fees etc., 35,000\n- Smart phones, 20,000\n- Meetings with beneficiaries, 10,000\n- DSA and upkeep expenses, 15,000\n- Travel expenses, 15,000\n- Miscellaneous, 5,000\n\n**People**.\n\n**Project Manager**. The project manager will develop the concept note, design the experiment, collect baseline data, build partnerships, and provide direct oversight and management of the implementation of the proof of concept.\n\n**Innovation Lead**. The innovation lead will coordinate all project activities, training, and app management.\n\n**External Consultant**. A research consultant will implement surveys, run focus group discussions, and write the report.\n\n**Software Developer**. The software developer will lead the development of the digital platform to ensure its continous operation, and to answer questions and resolve issues coming from the CBTs. \n\n**Innovator (as an implementing partner)**. The innovator implementing partner would refine the existing platform, deploy the app, carry out digital and financial skills training, and coordinate CBT (Cross Border Traders) participation, monitoring, and data sharing.\n\n**Project Analyst**. The project analyst will be responsible for data collection, analysis, and reporting.\n\n**Social Development Officer**. The social development officer will be responsible for community engagement, including hosting meetings and monitoring social change.\n\n**Focal points**. [Moses Mwansa](/Financial-inclusion-toolkit/contributors/Moses-Mwansa.html) and [Salome Nakazwe](/Financial-inclusion-toolkit/contributors/Salome-Nakazwe.html).\n\n**Country, year, and language**. Zambia, 2021-2023, English.\n\n**Resources**.\n\n - [Implementation Summary for VillageSavers App](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/331fe76f5a24abc879b6a89bae1195102c5ef263/3_Save/VillageSavers%20app%20Implementation%20Summary.pdf). Read this document to understand what steps were taken to deliver the app to Cross Border Traders in Zambia and Zimbabwe.\n - [Baseline Survey Report](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/12e13b1ad807925f800bedcd78dafe1123b662f0/3_Save/ABC_Baseline%20Report_Final.pdf). Read this report to understand the impact of COVID-19 on cross-border traders in Zambia and Zimbabwe. \n - [UNDP Exposure Report](https://undpinzambia.exposure.co/innovation-helps-zambian-women-and-youths-bounce-back-in-crossborder-trade). Read this report for a narrative account of the VillageSavers app initiative, context, and impact.\n - [Endline Report](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/ea85eca40cddb8e2df554119a6194e60ad04d3c7/3_Save/03_05_22_ENDLINE%20REPPORT_CHUNI%20PATRICK.pdf). Read this report to gain insight into the impact of the VillageSavers app.\n - [Stakeholder Co-creation Workshop Agenda](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/12e13b1ad807925f800bedcd78dafe1123b662f0/3_Save/ABC%20Stakeholder%20co-creation%20workshop.04.04.21.pdf). Use this agenda to inform stakeholder engagement and co-creation efforts.\n - [Terms of Reference](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/12e13b1ad807925f800bedcd78dafe1123b662f0/3_Save/TERMS%20OF%20REFERENCE_%20ABC%20Survey%20Coordinator_Baseline%20and%20Endline.pdf). Use this TOR as a template for hiring a consultant to conduct baseline and endline surveys and focus group discussions with cross-border traders, and to gather evidence on the impact of the VillageSavers app (or similar intervention) on the livelihood of the cross-border traders.\n - [Video tutorial on how to manage a village savings group through the VillageSavers app](https://www.youtube.com/watch?v=mhiGYj3W-ro). Watch this video to understand how an accounnt is created on the VillageSavers app.\n- [Video documentary](https://www.youtube.com/watch?v=fIkA2ePjJ1E). Watch this documentary to learn about how and why founder Moses Mwansa built VillageSavers.\n",
    tags: null,
    sdg: null,
    url: "/3_Save/zam.html",
    id: 29
});












index.add({
    title: "Amanuel Tadesse",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Amanuel Tadesse\n            \n            UNDP Ethiopia Accelerator Labs\n            Head of Solutions Mapping\n          \n        \n        \n          Amanuel has a diverse background with experience in government, NGOs, and the private sector. Currently, he works for the UNDP. In his role as a solution mapper, he is responsible for identifying and co-designing grassroots solutions to address community challenges. Before joining UNDP, Amanuel worked on testing and revamping business models related to rural finance, specifically focusing on voucher-based agricultural input distribution systems and seed marketing. He has also provided analytical support to various programs and has experience in designing and conducting surveys. Amanuel holds a PhD in geography from the University of Leuven, with a primary focus on urbanism. His academic interests revolve around exploring the intricate interactions between space and society, particularly within urban contexts in the global south.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Amanuel-Tadesse.html",
    id: 30
});












index.add({
    title: "Lorena Moscovich",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lorena Moscovich\n            \n            UNDP Argentina Accelerator Labs\n            Head of Experimentation\n          \n        \n        \n          I work to drive innovation for development using grassroots solutions and pilots across a range of fields, from digital inclusion to environmental citizen science, in partnership with both public and private sectors. Through knowledge management, I aim to systematize my learnings and insights to create a more impactful and sustainable impact. My approach to my work centers around inclusivity and accessibility, using narratives and facilitation strategies to ensure that everyone is included in the conversation and no one is left behind.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Lorena-Moscovich.html",
    id: 31
});












index.add({
    title: "Lilian Abou Zeki",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lilian Abou Zeki\n            \n            UNDP Lebanon Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Lilian leads on scoping user-led solutions/ grass root innovators/ positive deviants across different development areas in the country. She identifies underlying insights on behavior, trends, and systems that might make for solution learnings to experiment with inside UNDP and with partners, a role that can be likened to product management. Passionate about the way women experience work outside of the man-woman binary. Focused more on the unique nuances that make women entrepreneurs, business owners and leaders succeed, due to these nuances and not despite them.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Lilian-Abou-Zeki.html",
    id: 32
});












index.add({
    title: "Melany Anoushka Poorun-Sooprayen",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Melany Anoushka Poorun-Sooprayen\n            \n            UNDP Mauritius and Seychelles Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Melany is an experienced project manager with a demonstrated history of working in the renewables and environment industry. She is a strong program and project management professional with an MBA focused on Project Management from MANCOSA, and she’s skilled in corporate social responsibility, analytical skills, system monitoring, and management.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Melany-Poorun-Sooprayen.html",
    id: 33
});












index.add({
    title: "Mariana Olcese",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mariana Olcese\n            \n            UNDP Peru Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Mariana joined UNDP Peru in 2020 as Head of Exploration. Before that, she worked as Public Affairs and Head of Institutional Affairs for companies like WeWork and Corporacion Breca. Mariana holds an MBA from Yale and Georgetown University. Her expertise encompasses stakeholder management, social and political monitoring, and the development of strategic corporate positioning. She is adept at fostering and leading dialogues between public and private actors, facilitating cooperation and knowledge sharing.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Mariana-Olcese.html",
    id: 34
});












index.add({
    title: "Ximena González",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ximena González\n            \n            UNDP Peru Accelerator Labs\n            Inclusive Growth Coordinator\n          \n        \n        \n          Leads Inclusive Growth team in UNDP Peru. Ximena is also a social entrepreneur, through Heroínas Peruanas, a non-profit association that promotes education and equal opportunities through educational materials about the lives of notable Peruvian women.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Ximena-Gonzalez.html",
    id: 35
});












index.add({
    title: "Jacqueline Poni Aringu",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jacqueline Poni Aringu\n            \n            UNDP South Sudan Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Jacqueline is passionate about R&D, and comes with a rich blend of both public and private sector experience in her experimentation role. She has worked on and coordinated various R&D projects from both the government and private sectors. Jacqueline has worked in resource-limited settings, economically empowering vulnerable communities through women’s financial inclusion initiatives. Jacqueline is a strong team player and has effectively demonstrated leadership through innovative ideas. She is a very ambitious and result-oriented human, and these attributes have helped her show the utmost professional ethics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Jacqueline-Poni-Aringu.html",
    id: 36
});












index.add({
    title: "Tong Atak",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tong Atak\n            \n            UNDP South Sudan Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Eng. Tong Atak is the Head of Solutions Mapping and the Digital Advocate at UNDP South Sudan. He studied his bachelor’s degree in computer engineering at Queen Mary University of London. He is a practicing engineer and has over 5 years of experience working in telecoms with Nokia across Western Europe in Research & Development and development and technical account management. At UNDP, one of the notable projects Eng. Tong has project led was a pilot scheme to digitalize the traditional Sanduk savings scheme and migrate the analog process onto the M-Gurush platform. The success of this joint pilot with M-Gurush led to the development of a digital Sanduk called mSanduk being launched nationwide on their platform and being made available as a value-added service to their 1.7 million customer base. In addition, Eng. Tong in his capacity as the UNDP Digital Advocate works to identify and realize opportunities for digital project design and delivery in UNDP to be able to support the developmental aspirations of our lead partner the Government of South Sudan.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Tong-Atak.html",
    id: 37
});












index.add({
    title: "Moses Mwansa",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Moses Mwansa\n            \n            VillageSavers Technology Ltd.\n            CEO\n          \n        \n        \n          Moses Mwansa, holder of a Master of Science Degree in Project Management, is the proprietor of VillageSavers Technology Ltd, a fintech that promotes financial inclusion in low-income and informal business through the VillageSavers app. VillageSavers helps SMEs (Small and Medium-sized Enterprises) adopt tech-based solutions in their businesses. Moses is a 2021 Mandela Washington Fellow from the University of Nebraska, Lincoln, a YALI Regional Leadership Program alumni from the University of South Africa (2019), and a participant in the US Department of State’s Tech-Camp program in Nigeria (2019), and Ghana 2016. VillageSavers has been used successfully by Cross Border Traders through the project Digitizing Trade and Financing for Women and Youth Cross Borders Traders, which is jointly financed by the Africa Borderlands Centre and UNDP Zambia.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Moses-Mwansa.html",
    id: 38
});












index.add({
    title: "Sofia Silva",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sofia Silva\n            \n            UNDP Cabo Verde Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Sofia Silva is the Head of Exploration at UNDP Accelerator Lab in Cabo Verde, where she leads a portfolio of experiments that explore emerging trends, implications for systemic impacts and risks, and their potential for accelerating progress toward the Sustainable Development Goals (SDGs). She has over 16 years of experience in Information Systems and Electronic Governance in Cape Verde and Lusophone countries. With an MBA in Leadership and Innovation from Fundaçao Gertúlio Vargas - FGV, Brazil, Sofia has a solid background in working with state organizations, international NGOs, and private companies on projects that leverage technology, data, and design thinking to solve complex development challenges. She has also coordinated the software production department of NOSi, the most recognized ICT institution in Cape Verde, and worked as a consultant for projects in East Timor and Mozambique. Sofia is passionate about exploring new ways of thinking and doing that can enhance the lives and livelihoods of the poorest and most vulnerable.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Sofia-Silva.html",
    id: 39
});












index.add({
    title: "Eduardo Gustale",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Eduardo Gustale\n            \n            UNDP Accelerator Labs\n            Monitoring, Experimentation and Learning Specialist\n          \n        \n        \n          Experienced in Sustainable Development and Social Innovation. Worked repeatedly in academic research, survey development, and market insight. Elected Global Shaper by the World Economic Forum & Chevening Scholar for an MSc in Innovation and Entrepreneurship at the University of Warwick.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Eduardo-Gustale.html",
    id: 40
});












index.add({
    title: "Tayo Akinyemi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tayo Akinyemi\n            \n            UNDP Accelerator Labs\n            Learning and Community Manager\n          \n        \n        \n          I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early-stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing the capacity of those enablers (especially early stage investors).\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Tayo-Akinyemi.html",
    id: 41
});












index.add({
    title: "Alberto Cottica",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alberto Cottica\n            \n            UNDP Accelerator Labs\n            R&D Specialist\n          \n        \n        \n          Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Alberto-Cottica.html",
    id: 42
});












index.add({
    title: "Alik Mikaelian",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alik Mikaelian\n            \n            UNDP Egypt Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Alik is a strategic designer and researcher with a background in product and graphic design. She holds an MFA in transdisciplinary design, and a bachelor’s degree in product design.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Alik-Mikaelian.html",
    id: 43
});












index.add({
    title: "Marwa Makhlouf",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marwa Makhlouf\n            \n            The American University in Cairo\n            Researcher\n          \n        \n        \n          A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Marwa-Makhlouf.html",
    id: 44
});












index.add({
    title: "Salome Nakazwe",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Salome Nakazwe\n            \n            UNDP Zambia Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          As Head of Solutions Mapping, Salome co-creatively supports the development of grassroots initiatives aimed at tackling broader challenges affecting our world. She has over 20 years of work experience in programme management, transformational training, and leadership development, and has earned a a Bachelor of Arts Degree in Education and a Master of Arts Degree in Communications for Development.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Salome-Nakazwe.html",
    id: 45
});












index.add({
    title: "Najoua Soudi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Najoua Soudi\n            \n            UNDP Morocco Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Equipped by my deeply rooted moral imagination and the critical thinking that emerges from having had roles that crossed so many programs, I embarked on a learning journey with the United Nations Programme for Development using an experimental approach to development and poverty alleviation - combining research, locally grown solutions and technology with saving the world.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Najoua-Soudi.html",
    id: 46
});












index.add({
    title: "Ravi Chandra",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ravi Chandra\n            \n            UNDP India\n            Livelihood and Value Chain Specialist\n          \n        \n        \n          Ravi has played a prominent role and is a nationally recognized expert in the farm & non-farm value chain, livelihoods promotion, entrepreneurship development and financial inclusion ecosystems. He has previously worked and co-founded non-profit and for-profit companies in agriculture, microfinance, bamboo, handloom & handicraft focusing on B2B & B2C segments. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Ravi-Chandra.html",
    id: 47
});












index.add({
    title: "Adedapo Aderemi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Adedapo Aderemi\n            \n            UNDP Accelerator Labs\n            Software Developer\n          \n        \n        \n          Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Adedapo-Aderemi.html",
    id: 48
});












index.add({
    title: "Jessica Massie",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jessica Massie\n            \n            UNCDF\n            DFL Specialist/Financial Sector Specialist\n          \n        \n        \n          Jessica Massie is a technical assistant for DFL and financial capability programmes for UNCDF based in Kigali, Rwanda. She has lived and worked in a variety of African countries for almost 20 years, and specializes in curriculum development, training, research and writing, with a focus on skill-building and behavior change.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Jessica-Massie.html",
    id: 49
});












index.add({
    title: "Karima Wardak",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Karima Wardak\n            \n            UNCDF\n            KM and Comms Lead for IDE\n          \n        \n        \n          Karima Wardak is the knowledge and communication manager for the inclusive digital economy team at UNCDF; she is based in Brussels, Belgium. She has worked in digital financial inclusion and microfinance for over 15 years and can provide information on a broad range of programmes in financial and digital inclusion in Africa, Asia, and the Pacific.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Karima-Wardak.html",
    id: 50
});












index.add({
    title: "Lina Fernandez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lina Fernandez\n            \n            UNDP Colombia Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Lina joined the Accelerator Lab in Colombia in 2023 as Head of Exploration but has been part of UNDP for more than 12 years leading the private sector and inclusive finance agenda. She is a skilled project manager with experience in the public sector and multilateral organizations for the design and implementation of development and innovation policies and initiatives and the design of multi stakeholder strategic partnerships within the financing for development agenda.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Lina-Fernandez.html",
    id: 51
});












index.add({
    title: "Diana Gonzalez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Diana Gonzalez\n            \n            UNDP\n            IRFF National Program Officer\n          \n        \n        \n          Political scientist with a master's in public and social policies. 11 years of professional experience in monitoring and evaluation of public policies, developing tools and methodologies for the efficient use of public resources, budget programming, private sector contribution to SDGs and working with development Banks such as IDB, Korea Eximbank and the World Bank.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Diana%20Gonzalez.html",
    id: 52
});












index.add({
    title: "Diana Muñoz",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Diana Muñoz\n            \n            UNDP\n            Inclusive Finance Officer\n          \n        \n        \n          Political scientist specialized in Social Policy, with over 14 years of experience in public and private sectors managing social development initiatives, leading and coordinating programs and projects focused on financial inclusion. Experience working in financial institutions and international cooperation agencies specialized in rural development, leading the design and implementation of financing tools with strategic partners aimed at serving vulnerable populations.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Diana-Munoz.html",
    id: 53
});












index.add({
    title: "Juan David Ordoñez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Juan David Ordoñez\n            \n            UNDP\n            Innovation and Private Sector Officer\n          \n        \n        \n          Professional in Business Administration with over 12 years of experience in designing, formulating, managing, monitoring, and evaluating projects aimed at addressing economic, social, and environmental issues involving stakeholders from the private sector, government, and civil society at national and international levels. He has worked with different international cooperation agencies such as UNODC Colombia and UNDP in the Latin America and Caribbean Bureau, contributing to knowledge management and innovation. Passionate about technology and driven by curiosity. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Juan-David-Ordonez.html",
    id: 54
});












index.add({
    title: "Maria Adelaida Palacios",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Maria Adelaida Palacios\n            \n            UNDP\n            Gender Focal Point\n          \n        \n        \n          María Adelaida is a lawyer with 14 years of experience in women's human rights, development, and gender. Her career includes collaborations with social organizations, the State, and academia. She currently works as a gender analyst in the Colombia office, where she uses her expertise to understand and address the needs of women, proposing innovative solutions that consider gender as a central axis to promote significant changes.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Maria-Adelaida-Palacios.html",
    id: 55
});












index.add({
    title: "Juan David Martin",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Juan David Martin\n            \n            UNDP\n            Head of Experimentation\n          \n        \n        \n          Juan David joined the Accelerator Lab in 2019 as Head of Experimentation. Juan is an industrial designer with a master in strategic design and over 15 years of experience as a team leader and project manager. Driven to investigate problems, uncover opportunities and create value for end users and businesses. As a design thinker, have worked in service design, innovation management, public and social innovation, brand implementation, brand strategy and business model innovation. While helping develop businesses through a design-driven perspective, he creates strategies to sustain and share value between end users and the product service systems they use. He combines hard and soft skills to guide a structured process and create business ideas and innovative products and services that enhance user experience.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Juan-David-Martin.html",
    id: 56
});












index.add({
    title: "Richard Ndahiro",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Richard Ndahiro\n            \n            UNCDF\n            Digital Country Lead\n          \n        \n        \n          Richard Ndahiro works at the intersection of the digital economy and the real economy, specifically on how digital innovation can be applied to Health, Education, Agriculture, Finance, Energy sectors. His career of over 15 years spans across financial services (retail banking, microfinance, DFS), rural development/poverty reduction, and academia. Richard holds an MSc in Applied Economics, a post graduate diploma in Innovation and Design thinking, a Diploma in Professional Marketing (CIM) and is an Alumni of the Oxford University Fintech programme.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Richard-Ndahiro.html",
    id: 57
});












index.add({
    title: "Kehinde Bolaji",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Kehinde Bolaji\n            \n            UNDP\n            Programme Manager/Knowledge and Innovation Advisor, Africa Borderlands Center\n          \n        \n        \n          Kehinde Bolaji is Programme Manager/ Knowledge and Innovation Advisor at the Africa Borderlands Centre. Working with all units of the Borderlands Programme, he provides substantive leadership on programme management, integrated advisory services, partnership management, research, data and knowledge support. In particular, he shapes the conceptualization and operationalization of the ABC innovation work. Bolaji most recently served as UN Peace and Development Advisor (Caribbean) where he worked with the Caribbean Community (CARICOM), its Technical Agencies and Member-States in designing strategies and in implementing programmes on community mediation, Prevention of Violent Extremism (PVE), counterterrorism, climate-related security risks mapping, as well as women and youth inclusion in peacebuilding mechanisms.  Prior to that, he served as Governance and Peacebuilding Team Leader at the United Nations Development Programme (UNDP) in Nigeria. He holds a PhD in Political Science from the University of Ibadan, Nigeria and is an alumnus of the Peace and Security in Africa Programme (PASA) at Uppsala University, Sweden.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Kehinde-Bolaji.html",
    id: 58
});












index.add({
    title: "Lily Murei",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lily Murei\n            \n            UNDP\n            Policy Research & Data Specialist, Africa Borderlands Center\n          \n        \n        \n          Dr. Lily Murei is a Policy and Research  Data Specialist at the UNDP Africa Borderlands Centre. A program management specialist, Ms. Murei has vast experience in inclusive program management, policy technical advisory, program assessments, and action research, result-based monitoring and evaluation, and project information management for evidence-based program design and reporting. Before joining the UNDP Borderlands Centre, she worked as a Technical Specialist for the UNDP REDD+ Project; before that, she coordinated the UNEP/UNOPs /UNDP Switch Africa Green project in Kenya. Ms. Murei holds a Doctor of Philosophy in Project Planning and Management, specializing in Monitoring and Evaluation, from the University of Nairobi; a master’s degree in project planning and management from the University of Nairobi; and a Bachelor of Arts (Hons) in Sociology and Geography from Egerton University.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Lily-Murei.html",
    id: 59
});












index.add({
    title: "Enock Omweri",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Enock Omweri\n            \n            UNDP\n            Solutions Mapping Specialist, Africa Borderlands Center\n          \n        \n        \n          Enock Omweri is a seasoned professional at the forefront of cross-border development, digitization, and technology-driven solutions. With over a decade of experience in innovation, development, and humanitarian work, he currently serves as the Solutions Mapping Specialist at the UNDP Africa Borderlands Centre. Enock’s journey into the realm of international development began with his tenure at the United Nations Monitoring Mechanism (UNMM), where he played a pivotal role in facilitating cross-border operations across Syria, Jordan, Iraq, and Turkey. Prior to his work with the UNMM, Enock honed his skills at the World Food Programme (WFP). Before his international engagements, Enock contributed to academia as a lecturer at the University of Nairobi, where he imparted knowledge and fostered critical thinking among future leaders. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Enock-Omweri.html",
    id: 60
});













// builds reference data
var store = [{
  "title": "...through qualitative research tools that unlock financial needs and behavior in the context of rural resilience",
  "url": "/2_Understand/EGY.html",
  "content": "Qualitative research tools for understanding financial needs and behavior in the context of rural resilience\n\nWhat it does. These qualitative research tools use human-centered design and ethnography to structure interviews and focus groups to create personas to “put a face” to people who are typically viewed as beneficiaries, revealing deep explanatory insights into rural resilience and financial inclusion.\n\nValue proposition for the government/other partner. This suite of qualitative tools (i.e. interview guide, focus group guide, and village profile template) enables governments, local organizations, fintech startups and banks to more effectively design products and policies to help people live healthier financial lives.\n\nThe tools enable the understanding of different dimensions of communities’ experiences, highlighted below, through an ethnographic approach:\n\n\n  Livelihood and societal context;\n  Financial behavior and attitude towards formal and non-formal financial institutions;\n  Common and distinct hardships encountered by the communities, their impact and the tools used for adaptation and mitigation.\n\n\nWhy and when to use it. These research tools are most useful when you are either exploring the possibility of rolling out financial support programmes in service of a community or trying to determine the best way to do so. In either scenario, it’s important to understand who you are designing for, what challenges they face, and what solutions and mechanisms they’re currently using to solve those challenges. To use this tool, it’s essential to: 1) have existing connections with community organizations that can help engage people within the community and provide a safe space for the discussion to take place; 2) conduct preliminary consultations with practitioners and academics that have previously worked in this space to contextualize the research questions and tools. In Egypt’s case, the team leveraged the existing strong NGO network from the small grants program. Once connected to the NGO, the team conducted an introductory call to explain the objectives of the activities. After they agreed to support, the team made a visit to the NGO location to discuss in more detail the research learning question, create the village profile, and address any concerns anticipated by the NGO.\n\nKnown issues and troubleshooting. Conducting ethnographic research only makes sense if it’s possible to influence and adapt the proposed interventions based on the learnings from the study. If it’s not possible to change the implementation plan, then there is no need to question people and create a false sense of participation, which contributes to research fatigue. Additionally, when you don’t have connections within the community, it’s important to spend time and build trust.\n\nContext. Using these tools was the first step to better inform different activities and programs within UNDP (and for outside partners) on financial inclusion, specifically how it relates to rural resilience.\n\nThe tools emerged from the UNDP Egypt Accelerator Lab’s desire to understand what was happening in rural settings in terms of financial services and inclusion, and how this connected to rural resilience. In Egypt, there’s currently a heavy emphasis on rural development and financial inclusion. For example, there’s a large government project focused on developing the poorest rural areas. However, there’s little insight into how financial inclusion and rural resilience are related and through what channels financial tools can support the achievement of both goals.\n\nThe Lab had previously focused on agriculture and climate resilience for agriculture. But through conversations with financial institutions, financial inclusion emerged as an area of interest, and the lab decided to gain a deeper understanding of community contexts before moving forward with experiments and solutions and experiments.\n\nCost. The cost might vary from one region to the other. In the context of 2022 Egypt, it cost just under 10,000 USD.\n\n\n  A qualitative/human-centered design researcher (USD 9,300, for a UNV volunteer)\n  Rented room or community space to run the interviews and focus groups (USD 60)\n  Transportation &amp; compensation for participants (USD 5/per person)\n  Transportation costs and accommodation for facilitating team (USD 150)\n\n\nPeople. At least two people are required but depending on the number of participants and the timeline required to produce results, there could be more people involved.\n\n\n  One main researcher/facilitator and one supporting facilitator and note taker should be able to synthesize the information captured into personas and insights.\n  If the results will be shared with outside partners and teams, then a visual designer would be needed to translate the personas and insights into diagrams and illustrations.\n\n\nFocal point.\n\nAlik Mikaelian and Marwa Makhlouf.\n\nCountry, year, and language. Egypt, 2022, English.\n\nResources.\n\n\n  Final report. Read this report to understand how the research tools were used in the Egyptian context.\n  Village profile tool. Use this tool to understand the financial needs and behaviors of communities in your context.\n  In-depth Interview guide. Use this guide to collect qualitative insights on commmunities in your context through individual interviews.\n  Expense card. Use this resource to estiamte your expenses.\n  Focus group guide. Use this guide to collect qualitative insights on commmunities in your context through group conversations.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Qualitative research tools for understanding financial needs and behavior in the context of rural resilience What it does. These qualitative...",
  "id": 61
},{
  "title": "...through blockchain-based tracing of supply chain integrity",
  "url": "/7_Certify/IND.html",
  "content": "A digital platform to improve supply-chain traceability\n\nWhat it does.  The eSpice Bazaar pilot is a digital platform prototype that uses blockchain to aggregate and trace information about the supply chain production of chili and turmeric in India. The purpose of the pilot was to develop blockchain architecture to ensure traceability on the eSpice Bazaar platform developed by the government and test its functionality.  During the pilot, the block chain application was developed, deployed via Amazon Web Services, and integrated with the eSpice Bazaar portal to serve as its quality assurance and traceability backend. Architecture was built to extend traceability beyond the farm level, and data from 2,942 farmers producing chili and turmeric in Andhra Pradesh were collected, uploaded to the platform, and tested for immutability and retrievability. The traceability function of the platform was then demonstrated to the Spices Board via a user-friendly QR code system – the QR code on the spices package or the end product when scanned traces the product through every step of value chain and all the way back to the farm from where it originates. While this tool is not financial in a strict sense, it does use a technology, the blockchain, developed and used mostly in a fintech context.\n\nValue proposition. Indian spice farmers often invest heavily in the planting and harvesting of spices, only to be forced to sell them at low prices, often to middlemen who take a percentage of the profit. The eSpice Bazaar pilot lays the groundwork for a blockchain-powered platform that will enable farmers to sell directly to buyers. The completed platform will eventually enable traceability from harvest to trade, provide market access and better prices to farmers, deliver higher quality produce to traders, and introduce visibility, transparency, accountability, and sustainability into the spices value chain.\n\nWhy and when to use it. Traceability can help increase the value capture of poorly compensated producers in a value chain. However, the probability of successful implementation is increased when there are neutral intermediaries such as UNDP to coordinate the pilot, source technical expertise (e.g., through a private sector company), and attract government support (e.g., the Spices Board of the Ministry of Commerce and Industry of India).\n\nKnown issues and troubleshooting. A multi-sided platform only works when all key stakeholders participate. For this solution to be viable, farmers, aggregators and processors, certification agencies and exporters would all have to use the platform. More specifically, farmers and farmers’ associations would have to be comfortable with the technology and have access to it. Similarly, exporters and processors may require incentives to use a platform that could reduce their market power. Finally, the platform would need to deliver traceability beyond the farm level to facilitate trade.\n\nContext. India is the largest producer and consumer of spices in the world, exporting $3B worth of goods annually, and trading $1B domestically, between 2020 and 2022. Spice farmers already had low visibility within the value chain, and during the pandemic, they were forced to sell through aggregators who fixed prices. Additionally, the rejection of Indian exports due to difficulty meeting food safety regulations on aflatoxins, pesticides, and hygiene, impacts the value of export and profitability of the value chain. To address this challenge, UNDP India, with funding from the Japan Cabinet Office (JCO), partnered with the Spices Board from the Ministry of Commerce and Industry, to run a pilot with 2,942 chili and turmeric farmers in Andhra Pradesh. The NEC Corporation (which developed the blockchain backend), farmer producer organizations, and traceability and value chain experts also contributed to the effort.\n\nCost. USD 115,000, primarily used for human resources (contracting companies and consultants to deliver services) and communication.\n\nPeople\n\n\n  Project lead. The project lead will coordinate all key stakeholders, secures key partners, and manages relationships with donors.\n  Standards organization with technical expertise in value chain traceability. This organization will provide implementation support by coordinating with stakeholders such as the government, farmers, traders, quality control labs testing produce, and exporters and traders.\n  Blockchain solution developer. The developer will build the blockchain architecture required to conduct quality assurance at each level of the spice value chain.\n  Nonprofit or civil society organization with community relationships. This organization will mobilize farmers and manage data collection.\n\n\nFocal point. Ravi Chandra\n\nCountry, year, and language: India, 2021 to 2022, English\n\nResources\n\n\n  Blog post. Use this resource for a narrative account of how the eSpice Bazaar pilot developed.\n  YouTube video. Use this resource as a visual account of how the eSpice Bazaar pilot developed.\n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "A digital platform to improve supply-chain traceability What it does. The eSpice Bazaar pilot is a digital platform prototype that...",
  "id": 61
},{
  "title": "Help people save",
  "url": "/3_Save/Index.html",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 61
},{
  "title": "... through financial bookkeeping micro courses to boost women entrepreneurs' business confidence",
  "url": "/2_Understand/LEB.html",
  "content": "Financial bookkeeping micro courses to boost women entrepreneurs’ business confidence\n\nWhat it does: This is a simple digital intervention that can assist entrepreneurs, especially women, to understand the core tenets of financial bookkeeping, a cornerstone for both business success, and the confidence needed to make financial decisions, take risks, and pitch successfully. The intervention is built around behavioral research that followed 19 women entrepreneurs in Lebanon for a year as they took part in an economic empowerment program for women. Observing the participants in this programme provided sufficient data to build the pilot of a micro email course on book-keeping.\n business decisions.\n\nValue proposition: By using the different components of the “Micro email course” you will enable any partner to:\n\n\n  Drastically improve the quality and relevance of recruits to women economic empowerment programs. The nature of digital online campaigns targeted at one demographic like “Women in Lebanon aged 18 to 45” allows for the call to action to be displayed to large numbers of women through online media, and the advantage is the ones that sign up and go through a 5-minute survey have been filtered for the “appetite” to participate.\n  Ensure wide scale education on core financial literacy components in a localized manner, which is the pre-requisite to financial decision making and investment acumen on the long run.\n  Attain quantitativelu and qualitatively significant data on interest, adoption, and completion. The medium of email for delivery creates high levels of engagement if well designed, and it also allows a detailed M&amp;E view on the intervention from the perspective of move from “what could get women interested in this topic (via which ads they click on)” to “How many registered women in this email course went on to open all 7 emails and qualify for the free excel sheet reward?”\n\n\nThis intervention uses digital learning journeys to deliver on two of UNDP’s signature solutions by tackling inequality of opportunities (Poverty &amp; inequality) while also being deliberate about focusing on women with digital access (Gender equality) as the audience to grow and impact. It also contributes to Sustainable Development Goals 5 (gender equality) and 9 (industry, innovation and infrastructure).\n\nWhy and when to use it: This email course journey is most useful when a program is aiming to recruit and identify an  entrepreneur profile within a specific demographic while also understanding their localized pain points and learning gaps when it comes to financial literacy, as well as its relationship to delaying the achievement of that group of people’s business goals and financial stability or growth. The resources below are directly re-usable for a target group of Arabic-speaking female entrepreneurs in Lebanon. However, the tactics, journey, and financial literacy building blocks are transferable to other settings as well, as long as they have the same need for bookkeeping literacy and access to email.\n\nFinally, it is useful to recruit large numbers of people into a course journey, while also using the engagement journey of the course in order to achieve high fidelity tools to monitor and, later, evaluate the participants’ appetite for, understanding of, and completion of the course.\n\nKnown issues and troubleshooting: For this tool to work you will require:\n\n\n  Some contact list or a media outlet that can broadcast the recruitment call.\n  Any email sending platform.\n  A local or regional success that can be the “modeling agent” of the micro learning content.\n\n\nContext: In 2021, the UNDP Lebanon Accelerator Lab participated in a one year-long behavioral research effort with 19 Lebanese female entrepreneurs. The research singled out financial bookkeeping as an area of ill confidence, worry, and difficulty for all women. Building on these insights, and in partnership with the Regional Bureau of Arab States’ innovation unit, the Lab conducted structured interviews to assess more precisely the particiapants’ needs. This work powered the design of a bookkeeping course that speaks to the common phenomenon of time-poverty that women suffer by delivering easy, short, and localized video content on bookkeeping by email over a period of 7 days. The content included interactive knowledge testing, and a free reward upon completion.\n\nThe main transferrable tools used besides the course content are shared in the resources below:\n\n\n  The call for participation component used to recruit a defined target profile online through online media funnels removing middlemen contractors and substantial cost, while also identifying which behavioral driver or barrier had the most impact for this particular demographic.\n  Chunking of financial bookkeeping knowledge into micro “just in time” learning resources modeled on a visible excel sheet developed by a regional Arab-speaking woman entrepreneur resulted in improved engagement.\n  The offer of a free pre-programmed excel sheet (the same one used in the course content) as a reward for course completers acted as a powerful incentive to complete the course. This excel would be used to practice their learning directly on their businesses, and we attribute this incentive framing to the 21% course completion rate (5% higher than that of a similar Coursera course).\n\n\nCost: 8,000 USD to commission a regionally well-known entrepreneur to co-design the course, and to acquire from her the IP of a pre-programmed spreadsheet file that can function as a complete, if basic, mini-bookkeeping system for small businesses; 5,000 USD to recruit participants via targeted online advertising. A subscription to an email automation platform such as MailChimp or similar is also needed.\n\nPeople: In Lebanon, this project involved the UNDP Accelerator Lab, the UNDP Women Economic Empowerment project, and the gender unit, as well as external consultants. The following roles are needed:\n\n\n  Local success “role model” (in a topic of choice) as content and a tool as a reward creator\n  Email automation specialist\n  Ads or PR specialist to launch the recruitment call in a manner that allows you to reach a specific target audience and allows participants to sign up to the course via survey\n  Gender specialist\n\n\nFocal point: Lilian Abou Zeki.\n\nCountry, year, and language : Lebanon, Period: 2022 to 2023, Arabic.\n\nResources: Course step-by-step. Consists of an instruction sheet in English, with links to all emails and video lessons, as well as to an inception survey and promotion videos. All materials are in Arabic.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Financial bookkeeping micro courses to boost women entrepreneurs’ business confidence What it does: This is a simple digital intervention that...",
  "id": 61
},{
  "title": "... through a video- and text message-based course on financial literacy for female entrepreneurs",
  "url": "/2_Understand/MAR.html",
  "content": "A video and text message based course on financial literacy for female entrepreneurs\n\nWhat it does. The experiment was to evaluate the effect of an online solution on women’s financial literacy. The training content, which was developed in ‘Kreol Morisien’ in video format, was used to train women-led entrepreneurs with struggling businesses who lacked financial literacy.\n\nMultiple methods, such as surveys, interviews and focus groups, were used to understand what aspects of entrepreneurial finance were most difficult or confusing for women entrepreneurs to understand through traditional classroom training. Then, the course content and delivery were tailored to address those issues and provide clear and relevant examples and exercises, as well as interaction.\n\nA baseline study of the cohort’s capacity was undertaken to obtain a comparative analysis, showcasing improvements and relating them to the success of micro and small enterprises.\n\nThe experiment aimed to:\n\n\n  Design an online solution, including YouTube videos in the local language, specifically in Mauritian Creole. The solution was then tested to determine if it could efficiently enhance financial literacy for the pilot group of women entrepreneurs participating in the experiment.\n  Monitor the perceived knowledge and understanding of key financial management practices, through a pre-test and post-test with the entrepreneurs, including: the business life cycle, financial statements, budgeting, working capital management, sources of finance, costing a product and services.\n  Experiment with online peer-to-peer interactive platforms, specifically WhatsApp – a popular app used by most entrepreneurs on the islands within the Republic, for sharing of challenges and learnings, networking and also increasing the confidence of the participating entrepreneurs. More specifically, the experiment aimed to evaluate the impact of peer-to-peer communication on understanding of financial terms and motivation. WhatsApp allowed the participants to share their experiences, challenges, and feedback with each other in a convenient and familiar way.\n\n\nValue proposition. The tool serves as a simple online financial literacy platform for women entrepreneurs. It aims to support women-led micro and small enterprises to improve their financial resilience, operational capacity, and develop resilient business models. By using this approach, micro and small sized entrepreneurs can learn at their own pace and convenience, without affecting their daily activities. This initiative aligns with UNDP’s Signature Solutions focused on addressing Poverty and Inequality as well as Gender Equality and can help achieve SDGs 1, 5, 8 and 10.\n\nWhy and when to use it. The tool is most useful when the participants use the tool (videos) for learning when they are free from other entrepreneurial obligations, are motivated to exchange with their peers via the online platform and learn from their challenges, and are able to apply learnings to their everyday activities.\n\nKnown issues and troubleshooting. While there are no known issues with the experiment, all risks were carefully monitored throughout. Emphasis was placed on conducting the experiment in a structured manner by the team. This entailed conducting a baseline test to evaluate the current level of financial literacy and comparing the results post-learning. However, the testing was done on a small group of thirty women entrepreneurs. If scaled up, a proper risk management and monitoring mechanism would be essential.\n\nContext. In 2022, the UNDP Mauritius and Seychelles Accelerator Lab facilitated a collective intelligence exercise with women entrepreneurs from MSMEs in Mauritius and Rodrigues. The group included participants from multiple sectors, notably from the tourism sector, affected by two successive COVID-related lockdowns. A key concern for the entrepreneurs was their limited financial literacy, which led to difficulties in filling out important documents like financial returns and VAT for the local revenue authority. It increased their operational costs and exacerbated the difficulties they already encountered in accessing affordable capital through the formal financial systems.\n\nCost. This initiative was funded by the UNDP Accelerator Lab and co-designed with a local academic institution for approximately MUR 780,000 (USD 17,300). Small and Medium Enterprise (SME) Mauritius and the National Women Entrepreneur Council collaborated by making this initiative accessible to women entrepreneurs from Mauritius and Rodrigues for the pilot experiment. With collaboration for scaling up with a ministry and other institutions, costs could be reduced as the content and design are available. However, some small adjustments might be required to update the content, among others.\n\nPeople. The experiment was funded and co-designed by the UNDP Accelerator Lab Mauritius &amp; Seychelles team, in collaboration with the University of Mauritius serving as an external consultant, and with the support of partners and collaborators including the Ministry of Gender Equality and Family Welfare, the National Women Entrepreneur Council, and SME Mauritius.\n\nFor colleagues who seek to replicate the experiment, the following roles are needed:\n\n\n  Social Scientist/ Ethnographer/ Community Person. The social scientist should have the following skills: cultural awareness, observation, interviewing (fluent in local language), ethnographic writing, and have the ability to collect data in an unbiased way. S/he should be proficient in various ethnographic methods such as participant observation, taking field notes, and thematic analysis, etc. S/he should be able to design the research questions, test hypotheses, use methods and instruments for conducting the experiment, as well as analyze the data and interpret the results in a scientific way. (Other important indirect skills include empathy, curiosity, strong ethics, etc.)\n  Finance Experts. Their skills should include financial literacy, accounting, budgeting, forecasting, and investing for entrepreneurial activities (aligned with the experiment’s content and entrepreneurs’ requirements as determined by the survey).\n  Instructor/Trainer. The instructor/ trainer should be able to teach a group of entrepreneurs with a basic level of understanding. Other skills for the instructor should include good communication, local language fluency, and a pedagogical attitude.\n  Videographer. The videographer should be proficient in editing, production, animation, graphics, sound design and storytelling, as well as editing software and platforms. Additionally, a videographer should exhibit local language fluency, creativity, attention to detail, the ability to incorporate feedback from the target group, and time management. (The instructional videos are very short to match the attention span of the target group.)\n  Project Coordinator. A project coordinator is essential for the experiment to be successful as there are many activities to coordinate simultaneously. Skills include experience in project management and implementation, excellent communication, and the ability to inspire collaboration among the team members and stakeholders. Finally, local language fluency, as well as M&amp;E and risk management skills are also required.\n\n\nFocal point. Melany Poorun-Sooprayen.\n\nCountry, year, and language. Republic of Mauritius, 2022 to 2023, Mauritian Creole/ English.\n\nResources.\n\n\n  \n    Blog post in English. Read this blog to understand how the experiment was initiated.\n  \n  \n    Videos in Mauritan Creole with subtitles in English.\n\n    \n      Understanding the Business Cycle 1\n      Understanding the Business Cycle 2\n      Understanding the Financial Statement\n      Working Capital Management\n      Budgeting and Investment Appraisal 1\n      Budgeting and Investment Appraisal 2\n      Financial Statement Analysis\n      Sources of Finance 1\n      Sources of Finance 2\n      Statutory Compliance 1\n      Statutory Compliance 2\n      Costing and Cost Classification 1\n      Costing and Cost Classification 2\n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "A video and text message based course on financial literacy for female entrepreneurs What it does. The experiment was to...",
  "id": 61
},{
  "title": "At a glance",
  "url": "/1_Getting%20started/TOC.html",
  "content": "The toolkit at a glance\n\nGetting started. This section explains the rationale for the toolkit, and how to use it\n\nHelp people understand. This section contains initiatives that help individuals and communities understand how to use financial services or increase their financial literacy, such as research tools and courses.\n\nHelp people save. This section describes tools for digitizing community savings processes.\n\nHelp people pay.This section describes an analog-to-digital payment tool.\n\nHelp people borrow. This section describes a tool to help monitor microloans delivered to SMEs.\n\nHelp people de-risk. This section describes a tool to support the creation of accessible insurance products.\n\nEach tool in the toolkit is assigned to only one section. This is somewhat contrived, as in practice some of the solutions prototyped by the Accelerator Labs jointly address different dimensions of financial inclusion. An obvious example is the digitalization of the community practice of sanduk in South Sudan, which functions both as a saving and as a borrowing practice.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "The toolkit at a glance Getting started. This section explains the rationale for the toolkit, and how to use it...",
  "id": 61
},{
  "title": "Contributors",
  "url": "/Team.html",
  "content": "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Amanuel Tadesse\n        \n        UNDP Ethiopia Accelerator Labs\n        Head of Solutions Mapping\n      \n    \n    Amanuel has a diverse background with experience in government, NGOs, and the private sector. Currently, he works for the UNDP. In his role as a solution mapper, he is responsible for identifying and co-designing grassroots solutions to address community challenges. Before joining UNDP, Amanuel worked on testing and revamping business models related to rural finance, specifically focusing on voucher-based agricultural input distribution systems and seed marketing. He has also provided analytical support to various programs and has experience in designing and conducting surveys. Amanuel holds a PhD in geography from the University of Leuven, with a primary focus on urbanism. His academic interests revolve around exploring the intricate interactions between space and society, particularly within urban contexts in the global south.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lorena Moscovich\n        \n        UNDP Argentina Accelerator Labs\n        Head of Experimentation\n      \n    \n    I work to drive innovation for development using grassroots solutions and pilots across a range of fields, from digital inclusion to environmental citizen science, in partnership with both public and private sectors. Through knowledge management, I aim to systematize my learnings and insights to create a more impactful and sustainable impact. My approach to my work centers around inclusivity and accessibility, using narratives and facilitation strategies to ensure that everyone is included in the conversation and no one is left behind.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lilian Abou Zeki\n        \n        UNDP Lebanon Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Lilian leads on scoping user-led solutions/ grass root innovators/ positive deviants across different development areas in the country. She identifies underlying insights on behavior, trends, and systems that might make for solution learnings to experiment with inside UNDP and with partners, a role that can be likened to product management. Passionate about the way women experience work outside of the man-woman binary. Focused more on the unique nuances that make women entrepreneurs, business owners and leaders succeed, due to these nuances and not despite them.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Melany Anoushka Poorun-Sooprayen\n        \n        UNDP Mauritius and Seychelles Accelerator Labs\n        Head of Exploration\n      \n    \n    Melany is an experienced project manager with a demonstrated history of working in the renewables and environment industry. She is a strong program and project management professional with an MBA focused on Project Management from MANCOSA, and she’s skilled in corporate social responsibility, analytical skills, system monitoring, and management.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mariana Olcese\n        \n        UNDP Peru Accelerator Labs\n        Head of Exploration\n      \n    \n    Mariana joined UNDP Peru in 2020 as Head of Exploration. Before that, she worked as Public Affairs and Head of Institutional Affairs for companies like WeWork and Corporacion Breca. Mariana holds an MBA from Yale and Georgetown University. Her expertise encompasses stakeholder management, social and political monitoring, and the development of strategic corporate positioning. She is adept at fostering and leading dialogues between public and private actors, facilitating cooperation and knowledge sharing.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ximena González\n        \n        UNDP Peru Accelerator Labs\n        Inclusive Growth Coordinator\n      \n    \n    Leads Inclusive Growth team in UNDP Peru. Ximena is also a social entrepreneur, through Heroínas Peruanas, a non-profit association that promotes education and equal opportunities through educational materials about the lives of notable Peruvian women.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jacqueline Poni Aringu\n        \n        UNDP South Sudan Accelerator Lab\n        Head of Experimentation\n      \n    \n    Jacqueline is passionate about R&amp;D, and comes with a rich blend of both public and private sector experience in her experimentation role. She has worked on and coordinated various R&amp;D projects from both the government and private sectors. Jacqueline has worked in resource-limited settings, economically empowering vulnerable communities through women’s financial inclusion initiatives. Jacqueline is a strong team player and has effectively demonstrated leadership through innovative ideas. She is a very ambitious and result-oriented human, and these attributes have helped her show the utmost professional ethics.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tong Atak\n        \n        UNDP South Sudan Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Eng. Tong Atak is the Head of Solutions Mapping and the Digital Advocate at UNDP South Sudan. He studied his bachelor’s degree in computer engineering at Queen Mary University of London. He is a practicing engineer and has over 5 years of experience working in telecoms with Nokia across Western Europe in Research &amp; Development and development and technical account management. At UNDP, one of the notable projects Eng. Tong has project led was a pilot scheme to digitalize the traditional Sanduk savings scheme and migrate the analog process onto the M-Gurush platform. The success of this joint pilot with M-Gurush led to the development of a digital Sanduk called mSanduk being launched nationwide on their platform and being made available as a value-added service to their 1.7 million customer base. In addition, Eng. Tong in his capacity as the UNDP Digital Advocate works to identify and realize opportunities for digital project design and delivery in UNDP to be able to support the developmental aspirations of our lead partner the Government of South Sudan.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Moses Mwansa\n        \n        VillageSavers Technology Ltd.\n        CEO\n      \n    \n    Moses Mwansa, holder of a Master of Science Degree in Project Management, is the proprietor of VillageSavers Technology Ltd, a fintech that promotes financial inclusion in low-income and informal business through the VillageSavers app. VillageSavers helps SMEs (Small and Medium-sized Enterprises) adopt tech-based solutions in their businesses. Moses is a 2021 Mandela Washington Fellow from the University of Nebraska, Lincoln, a YALI Regional Leadership Program alumni from the University of South Africa (2019), and a participant in the US Department of State’s Tech-Camp program in Nigeria (2019), and Ghana 2016. VillageSavers has been used successfully by Cross Border Traders through the project Digitizing Trade and Financing for Women and Youth Cross Borders Traders, which is jointly financed by the Africa Borderlands Centre and UNDP Zambia.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sofia Silva\n        \n        UNDP Cabo Verde Accelerator Lab\n        Head of Exploration\n      \n    \n    Sofia Silva is the Head of Exploration at UNDP Accelerator Lab in Cabo Verde, where she leads a portfolio of experiments that explore emerging trends, implications for systemic impacts and risks, and their potential for accelerating progress toward the Sustainable Development Goals (SDGs). She has over 16 years of experience in Information Systems and Electronic Governance in Cape Verde and Lusophone countries. With an MBA in Leadership and Innovation from Fundaçao Gertúlio Vargas - FGV, Brazil, Sofia has a solid background in working with state organizations, international NGOs, and private companies on projects that leverage technology, data, and design thinking to solve complex development challenges. She has also coordinated the software production department of NOSi, the most recognized ICT institution in Cape Verde, and worked as a consultant for projects in East Timor and Mozambique. Sofia is passionate about exploring new ways of thinking and doing that can enhance the lives and livelihoods of the poorest and most vulnerable.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Eduardo Gustale\n        \n        UNDP Accelerator Labs\n        Monitoring, Experimentation and Learning Specialist\n      \n    \n    Experienced in Sustainable Development and Social Innovation. Worked repeatedly in academic research, survey development, and market insight. Elected Global Shaper by the World Economic Forum &amp; Chevening Scholar for an MSc in Innovation and Entrepreneurship at the University of Warwick.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tayo Akinyemi\n        \n        UNDP Accelerator Labs\n        Learning and Community Manager\n      \n    \n    I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early-stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing the capacity of those enablers (especially early stage investors).\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alberto Cottica\n        \n        UNDP Accelerator Labs\n        R&amp;D Specialist\n      \n    \n    Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alik Mikaelian\n        \n        UNDP Egypt Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Alik is a strategic designer and researcher with a background in product and graphic design. She holds an MFA in transdisciplinary design, and a bachelor’s degree in product design.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marwa Makhlouf\n        \n        The American University in Cairo\n        Researcher\n      \n    \n    A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Salome Nakazwe\n        \n        UNDP Zambia Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    As Head of Solutions Mapping, Salome co-creatively supports the development of grassroots initiatives aimed at tackling broader challenges affecting our world. She has over 20 years of work experience in programme management, transformational training, and leadership development, and has earned a a Bachelor of Arts Degree in Education and a Master of Arts Degree in Communications for Development.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Najoua Soudi\n        \n        UNDP Morocco Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Equipped by my deeply rooted moral imagination and the critical thinking that emerges from having had roles that crossed so many programs, I embarked on a learning journey with the United Nations Programme for Development using an experimental approach to development and poverty alleviation - combining research, locally grown solutions and technology with saving the world.  \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ravi Chandra\n        \n        UNDP India\n        Livelihood and Value Chain Specialist\n      \n    \n    Ravi has played a prominent role and is a nationally recognized expert in the farm &amp; non-farm value chain, livelihoods promotion, entrepreneurship development and financial inclusion ecosystems. He has previously worked and co-founded non-profit and for-profit companies in agriculture, microfinance, bamboo, handloom &amp; handicraft focusing on B2B &amp; B2C segments. \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Adedapo Aderemi\n        \n        UNDP Accelerator Labs\n        Software Developer\n      \n    \n    Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jessica Massie\n        \n        UNCDF\n        DFL Specialist/Financial Sector Specialist\n      \n    \n    Jessica Massie is a technical assistant for DFL and financial capability programmes for UNCDF based in Kigali, Rwanda. She has lived and worked in a variety of African countries for almost 20 years, and specializes in curriculum development, training, research and writing, with a focus on skill-building and behavior change.  \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Karima Wardak\n        \n        UNCDF\n        KM and Comms Lead for IDE\n      \n    \n    Karima Wardak is the knowledge and communication manager for the inclusive digital economy team at UNCDF; she is based in Brussels, Belgium. She has worked in digital financial inclusion and microfinance for over 15 years and can provide information on a broad range of programmes in financial and digital inclusion in Africa, Asia, and the Pacific.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lina Fernandez\n        \n        UNDP Colombia Accelerator Lab\n        Head of Exploration\n      \n    \n    Lina joined the Accelerator Lab in Colombia in 2023 as Head of Exploration but has been part of UNDP for more than 12 years leading the private sector and inclusive finance agenda. She is a skilled project manager with experience in the public sector and multilateral organizations for the design and implementation of development and innovation policies and initiatives and the design of multi stakeholder strategic partnerships within the financing for development agenda.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Diana Gonzalez\n        \n        UNDP\n        IRFF National Program Officer\n      \n    \n    Political scientist with a master's in public and social policies. 11 years of professional experience in monitoring and evaluation of public policies, developing tools and methodologies for the efficient use of public resources, budget programming, private sector contribution to SDGs and working with development Banks such as IDB, Korea Eximbank and the World Bank.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Diana Muñoz\n        \n        UNDP\n        Inclusive Finance Officer\n      \n    \n    Political scientist specialized in Social Policy, with over 14 years of experience in public and private sectors managing social development initiatives, leading and coordinating programs and projects focused on financial inclusion. Experience working in financial institutions and international cooperation agencies specialized in rural development, leading the design and implementation of financing tools with strategic partners aimed at serving vulnerable populations.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Juan David Ordoñez\n        \n        UNDP\n        Innovation and Private Sector Officer\n      \n    \n    Professional in Business Administration with over 12 years of experience in designing, formulating, managing, monitoring, and evaluating projects aimed at addressing economic, social, and environmental issues involving stakeholders from the private sector, government, and civil society at national and international levels. He has worked with different international cooperation agencies such as UNODC Colombia and UNDP in the Latin America and Caribbean Bureau, contributing to knowledge management and innovation. Passionate about technology and driven by curiosity. \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Maria Adelaida Palacios\n        \n        UNDP\n        Gender Focal Point\n      \n    \n    María Adelaida is a lawyer with 14 years of experience in women's human rights, development, and gender. Her career includes collaborations with social organizations, the State, and academia. She currently works as a gender analyst in the Colombia office, where she uses her expertise to understand and address the needs of women, proposing innovative solutions that consider gender as a central axis to promote significant changes.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Juan David Martin\n        \n        UNDP\n        Head of Experimentation\n      \n    \n    Juan David joined the Accelerator Lab in 2019 as Head of Experimentation. Juan is an industrial designer with a master in strategic design and over 15 years of experience as a team leader and project manager. Driven to investigate problems, uncover opportunities and create value for end users and businesses. As a design thinker, have worked in service design, innovation management, public and social innovation, brand implementation, brand strategy and business model innovation. While helping develop businesses through a design-driven perspective, he creates strategies to sustain and share value between end users and the product service systems they use. He combines hard and soft skills to guide a structured process and create business ideas and innovative products and services that enhance user experience.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Richard Ndahiro\n        \n        UNCDF\n        Digital Country Lead\n      \n    \n    Richard Ndahiro works at the intersection of the digital economy and the real economy, specifically on how digital innovation can be applied to Health, Education, Agriculture, Finance, Energy sectors. His career of over 15 years spans across financial services (retail banking, microfinance, DFS), rural development/poverty reduction, and academia. Richard holds an MSc in Applied Economics, a post graduate diploma in Innovation and Design thinking, a Diploma in Professional Marketing (CIM) and is an Alumni of the Oxford University Fintech programme.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Kehinde Bolaji\n        \n        UNDP\n        Programme Manager/Knowledge and Innovation Advisor, Africa Borderlands Center\n      \n    \n    Kehinde Bolaji is Programme Manager/ Knowledge and Innovation Advisor at the Africa Borderlands Centre. Working with all units of the Borderlands Programme, he provides substantive leadership on programme management, integrated advisory services, partnership management, research, data and knowledge support. In particular, he shapes the conceptualization and operationalization of the ABC innovation work. Bolaji most recently served as UN Peace and Development Advisor (Caribbean) where he worked with the Caribbean Community (CARICOM), its Technical Agencies and Member-States in designing strategies and in implementing programmes on community mediation, Prevention of Violent Extremism (PVE), counterterrorism, climate-related security risks mapping, as well as women and youth inclusion in peacebuilding mechanisms.  Prior to that, he served as Governance and Peacebuilding Team Leader at the United Nations Development Programme (UNDP) in Nigeria. He holds a PhD in Political Science from the University of Ibadan, Nigeria and is an alumnus of the Peace and Security in Africa Programme (PASA) at Uppsala University, Sweden.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lily Murei\n        \n        UNDP\n        Policy Research &amp; Data Specialist, Africa Borderlands Center\n      \n    \n    Dr. Lily Murei is a Policy and Research  Data Specialist at the UNDP Africa Borderlands Centre. A program management specialist, Ms. Murei has vast experience in inclusive program management, policy technical advisory, program assessments, and action research, result-based monitoring and evaluation, and project information management for evidence-based program design and reporting. Before joining the UNDP Borderlands Centre, she worked as a Technical Specialist for the UNDP REDD+ Project; before that, she coordinated the UNEP/UNOPs /UNDP Switch Africa Green project in Kenya. Ms. Murei holds a Doctor of Philosophy in Project Planning and Management, specializing in Monitoring and Evaluation, from the University of Nairobi; a master’s degree in project planning and management from the University of Nairobi; and a Bachelor of Arts (Hons) in Sociology and Geography from Egerton University.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Enock Omweri\n        \n        UNDP\n        Solutions Mapping Specialist, Africa Borderlands Center\n      \n    \n    Enock Omweri is a seasoned professional at the forefront of cross-border development, digitization, and technology-driven solutions. With over a decade of experience in innovation, development, and humanitarian work, he currently serves as the Solutions Mapping Specialist at the UNDP Africa Borderlands Centre. Enock’s journey into the realm of international development began with his tenure at the United Nations Monitoring Mechanism (UNMM), where he played a pivotal role in facilitating cross-border operations across Syria, Jordan, Iraq, and Turkey. Prior to his work with the UNMM, Enock honed his skills at the World Food Programme (WFP). Before his international engagements, Enock contributed to academia as a lecturer at the University of Nairobi, where he imparted knowledge and fostered critical thinking among future leaders. \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n  \n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Meet the Contributors Amanuel Tadesse UNDP Ethiopia Accelerator Labs Head of Solutions Mapping Amanuel has a diverse background with experience...",
  "id": 61
},{
  "title": "...how digitizing community credit unions improves financial inclusion",
  "url": "/2_Understand/abc.html",
  "content": "–&gt;\n\nA model that digitizes community credit unions enabling them to provide financial services\n\nWhat it does. The model digitizes community credit unions (CCUs), enabling them to offer integrated virtual services that\nfacilitate credit, improve the savings culture, offer cashless payment soluons and increase the ease of cross-border transactioons. The model has four main components:\n\n\n  \n    Payment Solutions: This pillar focuses on Technology adaptation and analytics, utilizing a digital platform such as an Android-Enabled App or USSD (Unstructured Supplementary Service Data) to enable efficient payment mechanisms.\n  \n  \n    Savings: This pillar involves the development of training modules to enhance financial literacy and capability. It includes training needs analysis, module development, and validation of training, all supported by an Android-Enabled App or USSD for accessibility.\n  \n  \n    Grant Credit Making: This pillar revolves around defining target beneficiaries and customer acquisition strategies. It involves rapid outreach, screening, and collateralization processes, along with product iteration and testing to ensure effective credit provision.\n  \n  \n    Interoperability: This pillar focuses on establishing policies for interoperable financial systems. It employs digital Payment Gateway Providers, and Analytics and Monitoring tools to ensure seamless integration and efficiency in digital financial transactions.\n  \n\n\nAdditionally, this digital financial inclusion model can:\n\n\n  \n    Enhance digital literacy skills: By training members how to effectively use digital technologies. Using practical demonstrations, interactive learning modules, and hands-on exercises to familiarize them with digital tools and platforms.\n  \n  \n    Reduce transaction costs: associated with fees charged for sending money, fees for cashing out at agent locations, and charges for transferring money between different mobile money platforms.\n  \n  \n    Expand the pool of resources for members: By pooling together more savings and resources &amp; encouraging regular savings contributions from members. Exploring other opportunities for investment in income-generating projects.\n  \n  \n    Create new employment opportunities within the value chain: By setting up agent networks to facilitate cash-in and cash-out transactions, venturing into complementary business areas such as retail or distribution.\n  \n  \n    Mitigate ecosystem risks and enhance transparency.\n  \n\n\nValue proposition for the government/other partner. By implementing the DFI model, stakeholders can:\n\n\n  \n    Extend financial services to vulnerable and underserved populations borderlands.\n  \n  \n    Foster inclusive economic growth and development through technology-enabled financial solutions that Leave No One Behind.\n  \n  \n    Promote inclusive green growth and climate resilience in marginalized communities.\n  \n  \n    Empower Community Credit Unions (CCUs) and Saving and Credit Cooperative Organizations (SACCOS) to provide accessible capital and support inclusive sustainable development.\n  \n  \n    Expand the market for financial services in borderlands, attracting technology solution providers and accelerating development.\n  \n\n\nWhy and when to use it. The model for digital financial inclusion addresses informality of Borderland areas, which involve Cross border Traders Associations (CBTA’s), Community Credit Unions (CCU’s), and Village Savings &amp; Loans Associations (VSLA’s). This model is particularly relevant when faced with the infrastructural challenges posed by Telco-off takers, tech startups, market aggressors, private sector, and basic investments by International Financial Institutions (IFIs). Additionally, it becomes essential for facilitating cross border transactions, especially with the involvement of willing digital platform developers within an enabling policy environment for cross border traders. Furthermore, the model serves as a crucial tool for ensuring security and safety, particularly through supporting effective policy enforcement and the implementation of policies on Gender Based Violence by border authorities.\n\nKnown issues and troubleshooting. The DFI model requires:\n\n\n  \n    Collaborative partnerships: Between various eco-system stakeholders re: CCUs, technology providers, private sector, fintech’s among others.\n  \n  \n    Rigorous risk management and vulnerability: assessments for informed decision-making.\n  \n  \n    Capacity building: for sustainable management and operation beyond the support period.\n  \n  \n    Quality Assurance and measurement: Continuous monitoring and evaluation to address emerging challenges and ensure scalability.\n  \n  \n    Dynamic Management: Continuous trouble shooting to enhance performance of the model and enhance its efficiency.\n  \n  \n    Policy Misalignment: inconsistencies in the policies, regulations, or directives of neighboring nations sharing border regions. .\n  \n\n\nContext. Despite efforts by governments and international organizations, factors such as low financial literacy, inadequate infrastructure, and limited access to traditional banking institutions persist. Community Credit Unions (CCUs) and Village Savings and Loans Associations (VSLAs) have emerged as potential solutions but scaling their operations poses challenges. To address this urgent issue and uphold the principle of Leaving No One Behind, the UNDP-Africa Borderlands Centre convened a co-creation design workshop in Naivasha, Kenya, in May 2022.  This workshop brought together over 40 experts from ten countries, who are specialized in the Financial Inclusion ecosystem and represented sub-sectors such as banking, insurance, cooperatives, technology, cross border traders among others. They addressed financial inclusion challenges in Africa’s borderlands and articulated a model harnessing financial technology (Fintech) to empower individuals and businesses, especially the most vulnerable, communities in border regions.\n\nCost. The total cost of relevant activities is about $240,000.\n\n  Local Sensing: $15,000\n  Innovation Design: $130,000\n  Solution Exploration: $70,000\n  Monitoring &amp; Evaluation and Communication: $20,000\n\n\nPeople.\n\n\n  \n    Project Manager: Responsible for overall project coordination, stakeholder engagement, and monitoring.\n  \n  \n    Technical Experts: Provide support in digital technology development, integration, maintenance and troubleshooting.\n  \n  \n    Financial Advisors: Offer guidance on financial strategies, risk management, and legal and regulatory compliance.\n  \n  \n    Training Facilitators: Deliver capacity-building programs and provide ongoing support to beneficiaries.\n  \n\n\nFocal point. Kehinde-Bolaji, Lily-Murei, and Enock-Omweri.\n\nCountry, year, and language. Africa (Borderland Regions), 2022, English.\n\nResources.\n\n*Concept Note and DFI Workshop Report. Read this report to understand the theoretical underpinnings of this model and read how about its key components in detail.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "–&gt; A model that digitizes community credit unions enabling them to provide financial services What it does. The model digitizes...",
  "id": 61
},{
  "title": "... with digital payments via neighborhood stores",
  "url": "/4_Pay/arg1.html",
  "content": "Digital payments via neighborhood stores\n\nWhat it does. The takeup of digital payment services are hindered by persisting digital divides. Even people who own computing devices and have access to the Internet are often reluctant to use them to make payment, as they do not feel confident enough and fear making mistakes, possibly paying more than they should. The Red Con Vos (“Network With You”) is a network of neighborhood stores, whose owners and managers own the necessary equipment for online payments and have been trained in how to help their fellow citizens complete different kinds of online administrative processes (not only payments). Residents gain the convenience of accessing digital payments; store owners charge a small fee for each transaction they facilitate, and, perhaps more importantly, benefit from residents visiting their stores more often.\n\nValue proposition for the government/other partner. By capacitating proximity businesses to transmit online payments and conduct other online transactions, this intervention contributes to the accessibility of these services to the least digitally included citizens, including children, the elderly and those with care duties. Rural communities can also be included, as long as there is a local store with an Internet connection. Additionally, the businesses themselves stand to gain new customers. The programme is sustainable, as it is financed with the savings that result from citizens not having to travel to distant locations to use digital public services.\n\nWhy and when to use it. This tool is most useful when there is a digitized public administrative system with many administrative procedures that must be carried out online or in the central offices; when the access to both online and in-person procedures is problematic because of the lack of proper public transportation, high costs of public transportation, distance, and time restrictions —such as care or work responsibilities; and when there are community markets with computers or mobiles, and Internet connection.\n\nKnown issues and troubleshooting. Some stores might not have IT devices or a stable Internet connection in the community; some store owners might not being keen on joining the network. Providing devices to the stores, and approaching stores that might already have the required equipment, are among the solutions. It is also crucial to count on supportive local partners to provide assistance in establishing the network.\n\nContext. In 2019, the UNDP Accelerator Lab in Argentina observed that a few owners of neighborhood stores had started offering, as an additional service to their clients, the opportunity to digitally complete some official bureaucratic procedures – including digital payments – in the stores. Many bureaucratic procedures have been digitalized in Argentina, but many residents do not feel comfortable with going through them without help. These residents fall back to travelling physically to the government office or bank, where they are facing long waits because, with digitalization, these organizations are divesting from public-facing physical facilities. This behavior was found to be more frequent in women, the elderly, and low-income households.\n\nWith the onset of the COVID-2019 pandemic, the demand for this service grew as mobility was reduced. The Lab is attempting to scale up this idea from individual initiatives to a service with good coverage of the population. A first pilot in Concepción del Uruguay, in a province called Entre Ríos, launched in 2021; a second one launched in Fray, in a different province called Catamarca, in 2022. The two municipalities have different geographic and demographic characteristics, making it possible to test the idea in different contexts. These two pilots show Red Con Vos to be financially sustainable, while saving travel time and distance for residents, supporting local commerce, and offering a partial solution to digital exclusion.\n\nCost. Between 10,000 and 60,000 USD depending on the size of the network and the resources locally available. The Concepción del Uruguay pilot cost 12,000 USD, with the local government overseeing the fieldwork to recruit the stores and invite them to join the network. It also took care of gathering the data to monitor and evaluate the initiative. The Fray pilot, as the local government did not provide any resources, cost 60,000 USD.\n\nTime. 3 to 4 months. The first two months are for project planning, followed by a two-month on-site implementation phase. Once deployed, the network is designed to be self-sustaining. A longer time frame may allow for more evidence to assess the experience.\n\nPeople. The project requires a project manager, a fieldwork manager, and a number of recruiters to recruit and train the the shopkeepers, and also to follow up the implementation of the project. Communication is crucial. Having a team of designers and someone in charge of producing a media kit and contacting the press is an asset. The many materials already designed and the guidelines are available for the fieldwork team.\n\nFocal point. Lorena Moscovich.\n\nCountry, year, and language. Argentina, 2021 and 2022, Spanish and English.\n\nResources.\n\nInformation\n\n\n  Microsite in English and in Spanish.\n  Report with detailed findings from the first pilot in Concepción (2021), available in English and Spanish.\n  Report with detailed findings from the second pilot in Fray (2022), available in English and in Spanish.\n\n\nGuidelines (in Spanish).\n\n\n  Guidelines for recruiters. Use this to explain to store owners what the implications of joining the network are. These can be used in most contexts after translation.\n  Guidelines for store owners. Use this to explain to store owners who have already joined the network how to supply this service, create trust, etc. These can be used in most contexts after translation.\n  Example procedures.This contains step-by-step procedures to execute digital payments and other digital bureaucratic procedures. These are written for the Argentinian digital landscape, and will need to be rebuilt for different contexts.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Digital payments via neighborhood stores What it does. The takeup of digital payment services are hindered by persisting digital divides....",
  "id": 61
},{
  "title": "Background and purpose",
  "url": "/1_Getting%20started/background.html",
  "content": "Background and purpose\n\nIn 2023, the UNDP Accelerator Labs decided to take stock of the work that its global network of 91 Labs, covering 115 countries, was doing in the area of finance. This work turned out to span the entire globe and to be highly diverse. Yet one commonality stood out: over two thirds of the Labs that were doing finance-related work of any kind focused on financial inclusion. What’s more, the vast majority of the network’s efforts towards financial inclusion, in turn, relied on the use of digital tools.\n\nEmerging from this work is a unique take on digital financial inclusion. First, the Labs have learned that digital tools are most inclusive when they are designed to support existing (good) practices and local knowledge. These practices tend be local (like traditional practices of community saving), or at least to have a local aspect (like local languages). This learning stands in contrast to the globalizing tendencies of fintech, and of finance in general.\n\nSecond, the Labs have learned that digital instruments combine well with neighborhood and proximity. The groups most underserved by finance – like women, the elderly, and low-income communities – can greatly benefit from in-person socialization to financial literacy and the use of digital financialtools. In the absence of this kind of support, digital financial services risk becoming exclusionary – it is often easier and more profitable to serve the already served – or downright extractive. For example, microloans can cost a lot to naïve borrowers due to things like fines for late payments. Counterintuitively, we find that Lab work shows that “the most important part of digital financial inclusion is analog”.\n\nAs the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we offer the experience accumulated by our network of labs in the form of this toolkit: a collection of documented resources. It is meant to inspire would-be champions of digital financial inclusion. Even more, the intent is to empower them by offering ready-made resources that can be re-used after adapting then to a new context.\n\nMany champions of digital financial inclusion in the Global South are to be found within UNDP itself. In particular, we hope this toolkit will help the Country Offices that are moving to promote the inclusion of underserved populations.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Background and purpose In 2023, the UNDP Accelerator Labs decided to take stock of the work that its global network...",
  "id": 61
},{
  "title": ".. through digital microloan monitoring",
  "url": "/5_Borrow/cbv.html",
  "content": "Using a web tool to monitor microloans to SMEs along with in-person customer service.\n\nWhat it does: The web tool developed by the UNDP Cabo Verde Accelerator Lab supports the monitoring of microloans. Web-based and multi-platform, it pulls data from several sources: the Social Security Institute, the revenue authority, and commercial banks in the case of bank loans. An additional module integrates data from (typically telephone-based) follow-ups in the field. This data allows a quick analysis of each MSME’s position, and lists ones with non-compliance issues for faster action. The objective is to monitor microcredits, allowing the agents in charge of non-compliant loans to pro-actively propose solutions to the MSMEs affected. As a part of the solution, the lab provided a physical customer service desk at the main street market in Cabo Verde, Sucumira.\n\nValue proposition: A data-centric approach to microloans compliance allows organizations in charge of supporting businesses to streamline their operations, and provide faster, more personalized support to each MSME.\n\nWhy and when to use it: This tool is most useful when (1) the volume of microloans is high and (2) there is a variety of loans and other support instruments available to MSMEs. The combination of these two conditions multiplies noncompliance risks and creates complexity in operations, to which the web tools offer a solution. On the first point, compliance officers can become overwhelmed when there are too many loans to process. On the second point, working with a variety of loans and support instruments, each with their own procedures and metrics, makes it difficult for compliance officers to develop a single, coherent routine.\n\nKnown issues and troubleshooting: For this tool to work you will require: \n1) An existing catalogue of offers\n2) Training of staff and providing a physical location to be a “go to” troubleshooting center within the vicinity of the entrepreneurs.\n\nContext: As they scrambled to provide support to MSMEs struggling with the COVID-19 crisis, various public and private institutions in Cabo Verde created different support programs. Some of them consist of, or include, the provision of microloans. The very success of these programs created the need for a tool to allow more dynamic follow-up. ProEmpresa, the agency in charge of supporting the business community, manages several such programmes; it partnered up with the Lab to build such a tool.\n\nCost: The Accelerator Lab funded this effort with a 15.000 USD investment. This can be broken down between 5.000 USD for Improving customer service at the Desk and in the Field - Sucupira Market and 10.000 USD to produce the Attendance Registration Module.\n\nPeople: For colleagues who seek to replicate the experiment, the following roles are needed:\n\n\n  1 consultant to support training for agents in the field\n  1 programmer to develop a digital tool\n\n\nFocal point: Sofia Silva\n\nCountry, year, and language : Cabo Verde, Period: 2020, Portuguese.\n\nResources: TORs for a consultant to develop the digital solution (in Portuguese). Use this resource to frame the problem and set tasks when hiring consultants to support you in a similar initiative.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Using a web tool to monitor microloans to SMEs along with in-person customer service. What it does: The web tool...",
  "id": 61
},{
  "title": "... through research that identifies best practices on regulation and inclusivity for parametric insurance",
  "url": "/6_Derisk/col.html",
  "content": "Research on digitally-delivered parametric insurance to boost financial inclusion\n\nWhat it does. The research study of parametric insurance in Colombia analyzes international experience and identifies best regulatory practices of parametric insurance in sectors other than agriculture. Additionally, the case studies identify new actors and digital enabled tools that are being incorporated into the insurance value chain to boost the potential of inclusive insurance (calculation platforms, intermediation through digital ecosystems, alternative mechanisms to reinsurance and the adoption of technologies such as blockchain). The work also presents a series of reflections and recommendations for regulatory adjustments for its proper implementation and operation. As a result, the recommendations were included in the law of the National Development Plan.\n\nValue proposition for the government. Using this research, UNDP can support governments to identify best practices and opportunities for parametric insurance and propose an appropriate path to promote a regulatory approach for the development of parametric insurance in different sectors, promoting digital enabled solutions to boots financial inclusion.\n\nWhy and when to use it. This tool is appropriate for counties that want to promote parametric insurance through the exploration of international experiences that can contribute and guide potential regulatory recommendations to guarantee a proper implementation of such solutions in the country.\n\nKnown issues and troubleshooting. To have a real impact of the research study in terms of public policy and regulation, it is fundamental to have the participation of the national government or the national public regulation unit. If there is a lack of interest from these stakeholders probably this is the first thing you must do. \nAlso, it is important to mention that the data collection and analysis of the information related to best practices and international experiences must consider the fact that these are the result of the context of each country and any potential regulation based on other country experiences may not be easily replicated.\n\nContext. The parametric insurance modality has proven to be an effective tool for managing the risks of traditionally underserved population segments such as low-income households and the rural sector. In fact, the National Policy of Inclusion and Economic and Financial Education promoted the massification of parametric insurance as a key element to guarantee the financial inclusion of the vulnerable population. Since 2019, the regulation enabled the possibility of developing parametric insurance for the rural agricultural sector and since then the use of this type of insurance has expanded significantly in the country. However, the development of parametric insurance had not been developed for other sectors and there was a need to identify the best international practices in sectors other than agriculture and the development of public policy recommendations and regulatory adjustments to enable this market. From the institutional point of view, there was also a need to support the National Financial Unit to develop this new regulation. This is part of the CO work to promote financial inclusion and the Insurance and Risk Finance Facility in the country.\n\nCost. The research cost about USD 15,000 for a consultant and sessions to share policy recommendations and best practices from other countries. Additionally, the cost of 3 UNDP personnel supporting the process for at least 6 months.\n\nPeople.\n\n  Innovative financing advisor: Gives strategic advice and supports the design and implementation process of the research\n  Technical expert on insurance and financial inclusion: Directly supervises the research process and coordinates with relevant public and private stakeholders\n  Consultant: Specific expertise in parametric insurance that elaborates the\n\n\nFocal point. Lina Fernandez, Juan David Ordoñez, and Maria Palacios .\n\nCountry, year, and language. Colombia, 2023, Spanish.\n\nResources.\n\n\n  Report. Use this resource to understand how the research was conducted and what the results were.\n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Research on digitally-delivered parametric insurance to boost financial inclusion What it does. The research study of parametric insurance in Colombia...",
  "id": 61
},{
  "title": ".. by providing fintech factoring services",
  "url": "/5_Borrow/col_3.html",
  "content": "Accessing working capital through digital platforms run by fintech companies\n\nWhat it does: The experiment will identify the barriers that SMEs face to access fintech factoring services in Colombia and will develop strategies to reduce or eliminate those existing barriers trough public policy recommendations. SMEs are a fundamental sector of the Colombian economy, representing 90% of the business fabric and generating 60% of employment. However, MSMEs face difficulties in accessing financing, which limits their growth and development. Factoring is a financing alternative that allows MSMEs to obtain early liquidity in exchange for assigning their accounts receivable to a factoring company. Fintechs have developed digital platforms that offer factoring services in a more efficient and accessible way for MSMEs.\n\nValue proposition: With this experiment, UNDP can facilitate access to diverse alternative financing tools for MSMEs, seeking a more efficient use of resources by providing working capital financing options that are less expensive than traditional ones.\n\nWhy and when to use it: This tool is most useful when SMEs face different access barriers to financing and lack of liquidity because of the long collection periods for invoices generated by their sales. Likewise, when SMEs have a low capacity for indebtedness or low access to credit. These conditions open an opportunity for the use of fintech factoring as a tool for access to financing for SMEs.\n\nKnown issues and troubleshooting: Fintech factoring must be regulated, and their activities must be supervised by a governmental entity. To guarantee competition of services, the fintech factoring ecosystem should be activated and with participation of different companies.\n\nContext: One of the main obstacles faced by MSMEs in Colombia is the long collection periods for invoices generated by sales, which generates significant liquidity problems for companies. The low capacity for indebtedness and not meeting the requirements requested by the financial institution are the main reasons why microentrepreneurs cannot access credit and other sources of financing. In addition to the above, Colombia is one of the countries where it is most expensive for MSMEs to take out a loan due to high interest rates. In this context, there is an opportunity to develop an experiment that allows identifying the barriers to access for MSMEs to these financing mechanisms aimed at generating liquidity, through a knowledge and support path for the use of factoring with the support of companies from the Fintech ecosystem, jointly designing public policy recommendations and regulatory adjustments that facilitate access to these sources of financing.\n\nCost: The cost of the experiment is approximately USD 60.000, in this case provided by USAID. These resources will be used in implementing the different experiments and supporting the research as part of the process.\n\nPeople:\n\n\n  Innovative financing advisor: Identifies the opportunity and gives strategic advice and support for the design and implementation of the experiment, guarantees coherence and value to the broader fintech agenda.\n  Innovation and Experimentation Advisor: Supports the design and implementation of the experiment.\n  Technical expert on financial inclusion: Guarantees coherence with the financial inclusion agenda.\n  Technical expert on innovation and fintech: Leads the design and implementation of the experiment with the fintech companies and leads coordination with the fintech ecosystem.\n\n\nFocal point: Lina Fernandez, Juan Martin, Juan David Ordoñez , and Diana Muñoz.\n\nCountry, year, and language: Colombia, 2024, Spanish.\n\nResources:\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Accessing working capital through digital platforms run by fintech companies What it does: The experiment will identify the barriers that...",
  "id": 61
},{
  "title": "...how a fintech ecosystem can promote digital financial inclusion for women by integrating a gender approach into its value proposition",
  "url": "/2_Understand/col_two.html",
  "content": "–&gt;\n\nCollective intelligence workshops to boost financial inclusion for women\n\nWhat it does. The collective intelligence workshops implemented with the fintech ecosystem to include the gender approach within their value proposition has given more visibility to women working within the Colombian Fintech ecosystem, a sector traditionally dominated by men. This approach not only recognizes the contribution of women in this field, but also promotes greater female representation. Secondly, the inclusion of this approach will generate solutions that identify and address the specific needs of women and girls, fostering their financial inclusion and economic autonomy. This includes the development of financial products and services designed with a gender perspective, ensuring that Fintech solutions effectively respond to the barriers faced by women. Lastly, this will establish good practices for the development and advocacy of public policy in the Fintech ecosystem, including a gender approach.\n\nValue proposition for the government/other partner. This tool allows our allies as the private sector association of Fintech in Colombia to recognize gender as a fundamental strategic and methodological enabler to transform realities and offer financial solutions that significantly contribute to the transformation of women’s lives, integrating them as key actors in human development. By focusing on the needs and potential of women, Fintech solutions can play a crucial role in their economic and social empowerment.\n\nWhy and when to use it. This tool is more useful during the consolidation of the Fintech ecosystem, with a focus on promoting companies led by women or that address their specific needs. Also, in times of debate about the regulation of Fintech verticals, where it is crucial to position the gender approach to influence the formulation of public policies. Lastly, in the context of the 2030 Agenda, promoting actions that promote women’s economic autonomy through financial inclusion, aligning these initiatives with the Sustainable Development Goals.\n\nKnown issues and troubleshooting. To effectively implement this approach, the following is required: (i) Organizational commitment to gender equity at all levels, from senior management to operational teams, (ii) gender analysis to identify gaps, needs and specific opportunities within the Fintech sector and among potential users, (iii) gender capacity building for the staff of the vertical, ensuring that they understand and can implement inclusive practices and (iv) collaboration with stakeholders including women’s organizations, gender experts and regulators to design and implement effective solutions.\n\nContext. This approach is implemented in a context where the Fintech sector is expanding and recognizes the need to be more inclusive and equitable. In countries like Colombia, where the gender gap in access to financial services and representation in the technological sector persists, the integration of a gender approach is both a strategic opportunity and an ethical imperative. Implementing these practices not only benefits women and girls, but also contributes to sustainable growth and innovation in the financial sector.\n\nCost. The cost of the collective intelligence sessions are approximately USD 1.000, for the development and organization od the events. As for UNDP personnel, at least 3 persons have supported the process.\n\nPeople.\n\n  Innovative financing advisor: Gives strategic advice for the design and implementation of the collective intelligence process and guarantees coherence and value to the broader fintech agenda.\n  Technical expert on innovation and fintech: Supports the design and implementation process of the collective intelligence sessions and supports implementation and coordination with the fintech ecosystem.\n  Technical expert on Gender: Leads the thematic focus and the development of a gender value proposition for the fintech ecosystem.\n\n\nFocal point. Lina Fernandez, Diana-Gonzalez, and Diana-Muñoz.\n\nCountry, year, and language. Colombia, 2024, Spanish.\n\nResources.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "–&gt; Collective intelligence workshops to boost financial inclusion for women What it does. The collective intelligence workshops implemented with the...",
  "id": 61
},{
  "title": "... how to improve financial inclusion by assessesing the status of financial and digital literacy in your country",
  "url": "/2_Understand/dfls.html",
  "content": "What it does. The DFL survey assesses the status of financial and digital literacy in a country to design and implement evidence-backed interventions. (Find the full report for Fiji including the survey and an explanation of the rational and results here.) The tool measures Digital Financial Literacy in general as well as assigns scores in four broad thematic areas:\n\n\n  Digitalisation: Access to devices, digital activities, internet access and usage, awareness and participation in safe digital/online practices;\n  Financial Competencies: Engagement with financial safeguards (budgeting, savings), financial knowledge (basic understanding of inflation, etc.);\n  Digital Financial Competencies: Beliefs, attitudes and behaviours concerning financial services and DFS;\n  DFS Outcomes: Usage of mobile and online financial services and the impact of DFS on financial wellbeing.\n\n\nIt also allows for the disaggregation and comparison of the survey data from different groups of interest, such as women, youth, agriculturalists, etc. The research explores experiences with traditional and digital financial services to date and assesses basic competencies in digitization and finance.\n\nValue proposition.  Improved financial and digital literacy can strengthen consumer protection and resilience to major financial shocks. To improve and implement targeted interventions in such areas, governments/decision-makers need updated data to guide and priorities their efforts.\n\nWhy and when to use it. The growing availability of digital financial services (DFS) and emerging digital platforms in least-developed countries can provide unique capital-building tools and resources for accelerating financial inclusion and inclusive growth for the last mile. To realize this potential, strengthening the digital and financial literacy (DFL) of all population segments, especially the marginalized and low-income groups, is essential.\n\nThe survey findings can be used to develop and implement targeted interventions for improving digital financial competencies among women, MSMEs, youth, migrant workers, and rural communities.\n\nThe survey results are intended to serve as a baseline from which future changes in competencies, access, and usage can be measured by the regulators and development partners.\n\nKnown issues and troubleshooting. To make the best usage of the tool, the following requirements should be in place:\n\n\n  Ahead of the implementation of the survey, include a phase to dialogue with institutional partners (such as government, ministries of finance and ministries of education, etc.) to ensure buy-in and build appetite for the survey findings.\n  Ensure that in the request for proposals or request for applications, it is clear that the survey is developed and does not need a line item for applicants to develop or greatly alter the survey. It should be clear that the methodology has been tested and refined and needs contextualization. (However, as a caveat, we can share the survey tool with others who may wish to use it and tweak it for their own projects and goals.) However, note that the RFP and RFA are developed and available for sharing to give an idea of the type of language to be used and LoE to be suggested.\n  Finally, it is imperative to ensure that implementation teams have substantial local presence, knowledge and experience, as well as existing enumerators (whether on staff or as part of a team that can be called) so as to execute the survey efficiently and with a team that understands the context and needs minimal training.\n\n\nContext. Since a decade ago, access to and usage of digital technologies and financial services have significantly been transformed in Africa and the Pacific. However, limited data/ evidence has been generated to understand the status of digital and financial literacy in those regions. COVID-19 also largely influenced the financial behavior of last-mile segments in the last three years, particularly for low-income groups and MSMEs.\n\nTo address the gap in data, UNCDF launched the ‘Digital and Financial Literacy Survey (DFLS) 2022’ in July 2022 in the Pacific region; the same surveys are being rolled out in Niger, Gabon, Malawi and Ethiopia in 2024.\n\nThe surveys on digital and financial skills are part of UNCDF’s effort to develop inclusive digital economies that allow rural communities, women and MSMEs to enhance their market participation, resulting in poverty reduction, improved livelihoods and economic growth.\n\nCost. There are two levels of cost/budget to be considered:\n\n  Survey and reports between US $50,000 and US $75,000 depending on the country and the capacity to use computer-aided methodologies.\n  Dissemination to ensure policymakers and private stakeholders can use of the data and make informed decisions (dissemination efforts through events and workshops) US $5,000 and $10,000 depending on the country and the level of effort.\n\n\nPeople. Two project managers to work with the research firm that conducts the surveys and drafts the report. One staff to coordinate all surveys (ensuring consistency across all surveys and reports) and one in each country.\nUNCDF partnered with Tebbutt Research to conduct Digital and Financial Literacy Survey in Fiji and six other Pacific Island countries (Papua New Guinea, Solomon Islands, Samoa, Vanuatu, Tonga, and Timor-Leste)\n\nFocal point. Jessica Massie and Karima Wardak\n\nCountry, year, and language. Surveys have been carried out in 2022 in 7 Pacific countries: Fiji, Papua New Guinea, Samoa, Vanuatu, Tonga, Timor-Leste and Solomon Islands. Reports are accessible online in English. A French version of the metrology and questionnaire will be available in 2023 when the survey is carried out in Niger and Gabon.\n\nResources\n\n\n  TOR for the research firm. You can read this, the most recent TOR (2023), as a reference point for hiring a research firm . The deadline has passed but the link is still active; scroll to the “TOR” section.\n  Survey questionnaire (see reports).Visit the Fiji Report and Appendix A for a full description of the survey, protocol, methodology and findings for Fiji.\n  Platform (still in development).\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "What it does. The DFL survey assesses the status of financial and digital literacy in a country to design and...",
  "id": 61
},{
  "title": "... through diagnostics meant to prepare the roll-out of a programme on risk insurance",
  "url": "/6_Derisk/eth.html",
  "content": "What it does. Insurance is a powerful tool to reduce uncertainty and precarity in people’s livelihoods. Unfortunately, robust insurance markets are not available in many Global South countries. These diagnostics are a form of inquiry that takes stock of the conditions for a programme on risk financing to do well. It examines the main demographic and economic features of the population in question; evaluates the potential risks, their geographic distribution and the relative exposure; the government’s capacity for risk management; maps the policy/regulatory landscape; and stakes out the actors in the insurance market.\n\nValue proposition for the government. By identifying strengths and weaknesses of the country under consideration, diagnostics enable the design of insurance products that are tailored to the local conditions, and of measures to support the risk finance ecosystem. Additionally, running the diagnostic is likely to enhance awareness of, and support from stakeholders, including government, insurance companies, and donors. This, in turn, is conducive to the creation of a more robust and inclusive insurance market.\n\nWhy and when to use it. Run diagnostics as the first step of a new workstream on risk financing.\n\nKnown issues and troubleshooting. Lack of time-series data (such as locally disaggregated census data) can “blind” the design of risk insurance programmes. In order to secure this data, it is essential to collaborate with the government’s disaster risk prevention and preparedness service.\n\nContext. Ethiopia’s economy and households are exposed to the impacts of disaster shocks, with women and girls being disproportionately affected. Droughts, floods, and related food insecurity are the primary drivers of disaster response costs, and all are poised to become more frequent as the planet warms. To respond to disaster shocks, Ethiopia is largely reliant on ex-post financing—primarily official development assistance and humanitarian appeals, budgetary reallocations, and emergency borrowing. In 2021, UNDP launched a new flagship initiative, the Insurance and Risk Finance Facility, to support the development of insurance markets beyond their current reach. Ethiopia was selected for an intervention in this initiative.\n\nCost. Limited to personnel. A lead researcher and a research assistant for two months full-time equivalent each. In the case of Ethiopia, this costs approximately $8,000.\n\nTime. About 8 months.\n\nPeople. One research lead and one in-country researcher. Significant support was provided by three more in-country people, who prepared a preliminary report (“pre-diagnostic”) in response to a list of questions.\n\nFocal point. Amanuel Tadesse.\n\nCountry, year, and language. Ethiopia, 2023, English.\n\nResources.\n\n\n  Blog post. Use this resource for a narrative account of how this initiative was developed in Ethiopia.\n  Pre-diagnostic report. Use this resource to understand what type of data are needed to prepare a diagnostic report.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "What it does. Insurance is a powerful tool to reduce uncertainty and precarity in people’s livelihoods. Unfortunately, robust insurance markets...",
  "id": 61
},{
  "title": "How to use the toolkit",
  "url": "/1_Getting%20started/how-to-use-the-toolkit.html",
  "content": "How to use this toolkit\n\nArchitecture\n\nWe use the metaphor of the toolkit to emphasize the operational, enabling nature of the work you are reading right now.\n\n\n  The Toolkit is a set of resources and their documentation materials meant to help people and organizations who want to deliver digital tools that support financial inclusion.\n  The toolkit contains tools. Each tool consists of one or more resources, documented in a page of this website.\n  A resource is a document that can be re-used, in part or as a whole. Examples are TORs for a software developer to design an app; assessments for digital literacy and research tools to understand financial behavior; and curricula for entrepreneurs seeking to boost their bookkeeping skills. Resources are accessible via live links from the factsheets, with a UNDP corporate login.\n  Website pages contain resources metadata, accessible to everyone. Each page is dedicated to one tool, and explains what the tool is good for; what it is not good for; the context in which it was produced; how much money and time you will need to deploy it, etc. You will also find a reference to the person or people who created the resource.\n\n\nUsing this toolkit in four easy steps\n\n1. Decide what you want to do and browse the catalogue.\n\nThe tools in this kit are labelled according to function, with names like “Help people understand how to improve financial inclusion by assessing the status of digital and financial literacy in your country” and “Help people save by digitizing community savings processes”. They are sorted into into six main categories, based on the primary types of financial behavior (excluding ‘Certify” which is an atypical example). The navigation bar on the left of the screen acts as a catalogue: browse it and navigate to any tool you like.\n\n2. Read the description from this website.\n\nEach tool’s website page contains information you can use to decide if that tool is helpful to you. Is it aligned with your goals? Is it compatible with the amount of time and money you have? Did its deployment run into problems? If so, how were they addressed?\n\n3. Read and reuse the resources.\n\nIf the description of the tool looks interesting, you can move on to the resource itself. Because the tool was not written with your specific case in mind, you will need to adapt it to our context. Hopefully, this will be easier than starting from scratch. Please note that in this prototype version, you will need a undp.org email address to access resources.\n\n4. Ask for support.\n\nAll resources have a lead author, or “focal point”. The ethos of UNDP’s Accelerator Labs is one of sharing knowledge, so you can reach out to the focal point if you need more information and support.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "How to use this toolkit Architecture We use the metaphor of the toolkit to emphasize the operational, enabling nature of...",
  "id": 61
},{
  "title": "Help people understand",
  "url": "/2_Understand/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 61
},{
  "title": "Help people certify",
  "url": "/7_Certify/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 61
},{
  "title": "Getting Started",
  "url": "/1_Getting%20started/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 61
},{
  "title": "Help people de-risk livelihoods",
  "url": "/6_Derisk/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 61
},{
  "title": "Help people pay",
  "url": "/4_Pay/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 61
},{
  "title": "Help people borrow",
  "url": "/5_Borrow/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 61
},{
  "title": "Welcome",
  "url": "/",
  "content": "Welcome to the Digital Financial Inclusion Toolkit\n\nThe content of this site is property of the United Nations Development Programme, and published under a Creative Commons 4.0 Attribution license.\n\nHuge thanks to everyone who contributed to creating this prototype. All contributors and curators are part of the UNDP Accelerator Labs unless otherwise indicated. A full list and each one’s contact information are available on the Contributors page.\n\nCuration task force: Lilian Abou  Zeki (Lebanon), Tayo Akinyemi (Global Team), Jacqueline Aringu (South Sudan), Tong Atak (South Sudan), Alberto Cottica (Global Team), Eduardo Gustale (Global Team).\n\nTechnical support: Adedapo Aderemi (Global Team), Jeremy Boy (Global Team).\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Welcome to the Digital Financial Inclusion Toolkit The content of this site is property of the United Nations Development Programme,...",
  "id": 61
},{
  "title": null,
  "url": "/assets/lunr-feed.js",
  "content": "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.field('sdg')\n  this.field('tags')\n  this.field('url')\n  this.ref('id')\n});\n\nwindow.tags = []\nwindow.sdg = []\n\n{% assign count = 0 %}\n{% for post in site.pages %}\n{% unless post.url contains 'assets/' %}\nindex.add({\n    title: {{post.title | jsonify}},\n    content: {{post.content | strip_html | jsonify}},\n    tags: {{ post.tags | jsonify }},\n    sdg: {{ post.sdg | jsonify }},\n    url: {{ post.url | jsonify }},\n    id: {{count}}\n});\n\n{% assign tags = \"\" | split: \",\" %}\n{% for tg in post.tags %}\n    {% unless tags contains tg %}\n        {% assign tags = tags | push: tg %}\n    {% endunless %}\n    window.tags = {{ tags | jsonify}}\n{% endfor %}\n\n{% assign sdg = \"\" | split: \",\" %}\n{% for cg in post.sdg %}\n    {% unless sdg contains cg %}\n        {% assign sdg = sdg | push: cg %}\n    {% endunless %}\n    window.sdg = {{ sdg | jsonify}}\n{% endfor %}\n\n\n{% endunless %}\n{% assign count = count | plus: 1 %}\n{% endfor %}\n\n\n// builds reference data\nvar store = [{% for post in site.pages %}{\n  \"title\": {{post.title | jsonify}},\n  \"url\": {{ post.url | jsonify  }},\n  \"content\": {{post.content | strip_html | jsonify}},\n  \"tags\": {{ post.tags | jsonify }},\n  \"sdg\": {{ post.sdg | jsonify }},\n  \"excerpt\": {{ post.content | strip_html | truncatewords: 20 | jsonify }},\n  \"id\": {{ count }}\n}{% unless forloop.last %},{% endunless %}{% endfor %}]\n\n\n// builds search\n$(document).ready(function() {\n  $('input#search').on('keyup', function () {\n    var resultdiv = $('#results');\n    var contentdiv = $('#content');\n\n    var query = $(this).val();\n    var result = index.search(query);\n    resultdiv.empty();\n    contentdiv.empty()\n    \n    // Add status\n    resultdiv.prepend('Found '+result.length+' result(s)');\n    // Loop through, match, and add results\n    for (var item in result) {\n      var ref = result[item].ref;\n      var searchitem = `\n      \n        \n        \n            ${store[ref]?.title}\n        \n        \n        \n            ${store[ref].excerpt}\n        \n    \n      `\n\n      resultdiv.append(searchitem);\n    }\n  });\n  \n\n  //POPULATE TAGS AND SDG FILTER\nvar tagsdiv = $('#tag-div');\nvar sdgdiv = $('#sdg-div')\n\nif(tags.length > 0){\n    let tg = `\n    \n        \n        Tags\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${tags[i]?.toUpperCase()}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    tagsdiv.append(tg)\n}\n\nif(sdg.length > 0){\n    let tg = `\n    \n        \n        SDG\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${sdg[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    sdgdiv.append(tg)\n}\n\nlet taglist = []\nlet sdglist = []\n\nlet searchitemfn = post => `\n\n    \n    \n        ${post?.title}\n    \n    \n    \n        ${post.excerpt}\n    \n\n`\n\nlet resultdiv = $('#results');\nlet contentdiv = $('#content');\nlet contentCopy = $(\"#content\").html(); // Store the current content\n\nlet filterresult = () => {\n    resultdiv.empty()\n    resultdiv.prepend('Showing results for  ' + [...sdglist, ...taglist].toString() + '');\n    for(post of store){\n        if(post?.tags?.some(tg => taglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n    };\n}\n\n$(document).on('multiSelectInputToggle', (e) => {\n    let { value, checked, name } = e.target;\n    \n    if(checked && name === 'tags') taglist.push(value)\n    else if(checked && name === 'sdg') sdglist.push(value)\n    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)\n    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)\n  \n    filterresult()\n\n});\n\n$(document).on('filterSearchChipRemoval', (e) => {\n    let textContent = e.target.getAttribute('option-name');\n    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)\n    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)\n    filterresult()\n});\n\n$(document).on('filterSearchClear', (e) => {\n    sdglist = [];\n    taglist =  [];\n    resultdiv.empty()\n    $(\"#content\").html(contentCopy);\n});\n\n//GET ELEMTENTS WITH ID TAGS AND SDG\n$('.tag-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    taglist = [ textContent ]\n    sdglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.sdg-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    sdglist = [textContent]\n    taglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n})",
  "tags": null,
  "sdg": null,
  "excerpt": "// builds lunr var index = lunr(function () { this.field('title') this.field('content', {boost: 10}) this.field('sdg') this.field('tags') this.field('url') this.ref('id') }); window.tags =...",
  "id": 61
},{
  "title": "... the opportunities for digital financial inclusion through a digital finance ecosystem assessment in your country",
  "url": "/2_Understand/mor.html",
  "content": "**What it does**. The SDG Digital Finance Ecosystem Assessment (SDFE) provides an in-depth understanding of the drivers that make a country digital finance ready, which in turn supports the design of policy interventions and investments needed to fast-forward its digital journey. The assessment helps link digital finance policies with SDG financing as well as the government and regulators’ climate resilience commitments. It also investigates the digital economy and digital finance ecosystem to understand the current level of (digital) financial inclusion for underserved segments of the population, with a specific focus on women, to identify key drivers and opportunity areas within the digital economy that can advance inclusion. \n\n**Value proposition**. Using this assessment, UNDP can help a government to identify gaps and opportunities within their domestic digital finance ecosystems, revealing the level of inclusion of vulnerable segments in digital finance and the broader digital economy, and measuring the extent to which the digital finance ecosystem is aligned with national SDG priorities. \n\n**Why and when to use it**. This tool is appropriate for a government that wants to use data to understand where the gaps and opportunities for financial inclusion lie and use it to inform their national development strategy and policies. Established relationships with national partners and private sector partners are critical to conducting the SDFE successfully. Pre-existing relationships with NGOs that have ties to people and communities are often overlooked, are also essential to collecting in-depth data from diverse sources. \n\n**Known issues and troubleshooting**. Collecting good qualitative and quantitative data from diverse sources is time and labor intensive. It requires managing many levels of stakeholders to secure high response rates for surveys and participants for interviews and consultations. Additionally, because there is quantitative data collected at the global level, e.g. GSMA, there is added value to gathering granular and nuanced qualitative data (even though global data can serve as a benchmark). Given the above, it’s important to work with a flexible timeline. \n\n**Context**. In 2018, the Moroccan government prioritized improving financial inclusion and envisioned a transition to a cashless, digital local economy. As a result, the National Financial Inclusion Strategy was developed. However, despite Morocco’s status as a lower-middle-income country with a sizeable underbanked population, digital finance is underexploited as a catalyst for inclusive growth. For example, digital payments have the potential to expand access to finance for the unbanked and underbanked, but digital payment adoption is still in its very early stages.    \n\n**Cost**. Approximately USD 40,000 for a consultant, and a high-level event to share policy recommendations and best practices from other countries. \n\n**People**. A *UNDP Country Office* (or a similarly equipped unit) can participate in the assessment design process, provide input and engage in troubleshooting during the research implementation process. A *researcher* can help coordinate stakeholders, conduct interviews and co-author the report. \n\n**Focal point**. [Najoua Soudi](/Financial-inclusion-toolkit/contributors/Najoua-Soudi.html) \n\n**Country, year, and language**. Morocco, 2023, English and/or French  \n\n**Resources**  \n\n* [Report on assessment findings](https://www.undp.org/fr/morocco/publications/rapport-devaluation-de-lecosysteme-de-la-finance-digitale-au-maroc-sdfe) (French). Use this resource to see how the digital finance ecosystem assessment can deliver insights on financial inclusion. \n* [UNDP/UNCDF joint offer on digital financing of the SDGs](https://www.uncdf.org/joint-undp-uncdf-df-of-the-sdgs) (English)\n",
  "tags": null,
  "sdg": null,
  "excerpt": "**What it does**. The SDG Digital Finance Ecosystem Assessment (SDFE) provides an in-depth understanding of the drivers that make a...",
  "id": 61
},{
  "title": "... by digitizing community savings  processes",
  "url": "/3_Save/ssd.html",
  "content": "# Digitizing community savings groups\n\n**What it does**. \nIt supports groups of people engaged in community saving in moving from physical cash to digital mobile money. In community saving, digitization offers advantages in terms of transparency, security, and financial inclusion. In South Sudan, the most common form of community saving is called _sanduk_, which means \"box\". We use this term throughout the description of this tool.\n\n**Value proposition for the government/other partner**.\nDigitizing sanduks makes cash available to members to borrow during emergencies. It allows members to save and borrow money easily, and track transactions and savings to build a financial profile that enables them to secure bank loans. Additionally, this process will enable any entity seeking to improve the operational efficiency and safety of analog savings group processes, to digitize them and provide records of financial transactions that banks and other formal institutions can use to extend financial services. Finally, a private sector company can use this process as a form of R&D to develop a financial services product to serve excluded rural communities. Or civil society organizations may utilize the training component to provide women in informal business with basic business and digital literacy skills. All this means increased access to financial services, and therefore (directly), a boost to financial inclusion and (indirectly) a boost to business growth.   \n\n**Why and when to use it**. To replicate the model successfully, several conditions need to be in place, such as:\n - Structured community savings groups;\n - Ubiquitous mobile money services provided by private sector entities;\n - Private sector partners that can ensure the continuity and sustainability of the services;\n - An enabling environment for innovation, as defined by policy, legislation and best practices;\n - Good quality contextual information, such as the level of infrastructural support, physical and digital security, logistics, socio-political contexts, and how these elements will facilitate or hamper the use of digital technology;\n - Training in digital literacy, financial literacy, and how to use legal services, to help sanduk members learn the basics of business management and market rules and regulations.\n\nIn the long term, addressing the lack of banking infrastructure will also help community savings schemes transact more efficiently.\n\n**Known issues and troubleshooting**. Technical infrastructure such as phones and mobile network access, and community savings groups who are willing to try digital solutions, are required to replicate this model.\n\n**Cost**. \nThe entire activity cost approximately 100,000 USD, allocated as follows:\n - 12,0000 for the community immersion (flights to Abyei and Warawar, ground transportation, security, and food); \n - 16,000 for technical support;\n - 60,000 for community engagement (commodity booster packages, M&E, and ongoing commmunication with savings groups);\n - 10,000 for capacity building trainings.\n\n**People**.\nThe required roles for this experiment include:\n\n - Community mobilizer/local partner. This implementing partner, most likely a CSO, will have deep community ties so it can lead the community immersion, mobilize the community, and conduct financial literacy training.\n - Interpreter. The interpreter will ease communications between the implementing team and the community, if needed.\n - Technical counterpart. A software developer who has soft skills and understands the community will build the product.\n - Research team. These research volunteers can document insights. [double check]\n - Data analyst. The data analyst will design the survey tools and process the data collected.\n - Technical Support. The technical support lead will support the project lead. [double check]\n\n**Context**. In remote areas along borders, making payments is often a struggle, banks are inaccessible, and access to finance and financial services is nonexistent. Many communities in rural settings use sanduks, or community savings groups, to pool money and safeguard it from wildfires. Similarly, at the border of South Sudan and Sudan, crossborder traders often send money to Khartoum through Cairo for the purchase of their goods. This extends the amount of time it takes to get their goods delivered. \n\nAn \"analog-to-digital savings\" experiment was launched to explore innovative ways to address these challenges. The theory of change was that by digitalizing sanduks, group members in communities would keep their communally pooled funds safe, provide access to emergency funds for social needs, such as paying school fees and medical bills, and build digital financial profiles that would enable members to solicit loans from financial service providers. The initial focus of the experiment was on women's financial inclusion, and cross-border traders were later added. \n\nThe series of steps taken to execute this experiment included the following:\n\n1. **Co-creation**. The co-creation, baseline, and solutions mapping phase brought the accelerator labs from South Sudan and Sudan and together with local border communities to better understand their on-the-ground contexts and lived experiences. This phase was critical to establishing a deep connection with the communities and to ensuring community ownership of the proposed saving innovation. This co-creation process resulted in community-informed updates and revisions to the concept, processes, and budget.\n2. **Validation survey**. This stage was critical to assessing community buy-in and validation of the digital sanduk model, drafting a work plan and budget, identifying on-the-ground partners and supporters of the initiative, and benchmarking the labs' understanding of context and lived experience.\n3. **Community Immersion**. The objective of the community immersion was to enhance the quality of innovation through active listening, observing, learning, and constructive interaction with key community stakeholders that were critical to the success of the innovation.  \n4. **Launching of the digital sanduk**. During this stage, sanduk members completed their registrations for digital mobile money accounts and tested the digital sanduk platform. Specifically, members of the experimental group transferred their shares digitally to a separate sanduk platform.\n5. **Close-out/Roll out**. The South Sudanese lab team travelled to Warawar to debrief participants and stakeholders about the experiment outcomes, outlining the digital sanduk journey. \n\nFollow [this link](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/The%20Experiment%20Journey.pdf) to learn more.\n\n**Focal points**. [Jacqueline Aringu](/Financial-inclusion-toolkit/contributors/Jacqueline-Poni-Aringu.html) and [Tong Atak](/Financial-inclusion-toolkit/contributors/Tong-Atak.html).\n\n**Country, year, and language**.\nSouth Sudan, 2022-2023, English.\n\n**Resources**.\n\n - [Use this concept note to understand how the baseline survey was deployed](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/0a2ab4368bbc336c842e3026e6f9d45681ec6d79/3_Save/Concept%20Note_%20Baseline%20Survey%20and%20Sensitization%20(Sanduk%20Experiemnt).pdf) and [to learn how immersions and follow-ups were conducted](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/9c70b6f5fac189aae8c220bf804cc738751632d6/3_Save/The%20Experiment%20Journey.pdf). Check this link [to follow how the experiment was concluded](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/d704e97b84ab06ca1bcbb887c36b7aea23c10a7f/3_Save/Joint%20ABC%20and%20AccLab%20closing%20mission%20for%20the%20Digital%20Sanduk%20experiment.pdf).\n - [TOR for the m-Gurush consulting service](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/TOR%20Video%20Documentation.pdf). Use this TOR as a reference document to hire a consultant to provide videography and photography services.\n - [Baseline survey](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/Revised%20Sanduk%20Baseline%20Questionnare%202-March%202022.pdf). Use this resource as a template to develop a baseline survey for your context. \n - [Needs assessment and endline survey](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/3_Save/Concept_%20Endline%20Survey%20of%20Sanduk.pdf). Use this resource as a template to develop a needs assessment and endline survey for your context.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "# Digitizing community savings groups **What it does**. It supports groups of people engaged in community saving in moving from...",
  "id": 61
},{
  "title": "...how digital community entrepreneurs help financial service providers reach rural customers",
  "url": "/2_Understand/uncdf_ensibuko.html",
  "content": "-->\n\n# Digital community entrepreneurs providing information, customer service, and hardware to enable financial services\n\n\n**What it does.** The digital community entrepreneur (DCE) model allows financial service providers to go deeper into rural markets and service communities with formal financial services. \n\nData shows that users of mobile money services rely on their close network or agents to use these services. Being at ease with services on mobile phones or other digital means takes time and requires a mix of things ranging from awareness to education, repeated use, and positive outcomes. \n\nThe DCE model facilitates each of these aspects by providing basic information on services, support to register and use the service as well as access to basics like SIM cards, handsets, charging stations or products that can be paid via mobile money accounts (pay as you go solar products).\n\nCommunity members who become DCEs provide the support and infrastructure needed to use digital financial services.\n \n\n**Value proposition for the government/other partner.** The model is designed to work with and for private sector actors such as financial service providers and fintechs expanding their services in remote rural areas. It works on the principle that the adoption of new technologies is a deliberate process that must be driven by trusted members within the community.\n\nDeployed at the last mile, DCEs complement financial service providers' sales and marketing efforts to onboard and educate customers about digital financial services while also serving as a distribution team for mobile handsets, SIM cards and solar products for charging phones. \n\nThe model encourages the providers or fintechs to recruit and train the DCEs to become the gateway to digital financial and non-financial services.\n\n**Why and when to use it**. The model is very efficient when looking at deploying digital financial and non-financial services to remote communities that are new to such technologies and require a holistic onboarding model that includes a hands-on approach and support available within the community in the long run.\n\n**Known issues and troubleshooting**. To effectively implement this approach, the following is required: (i) Organizational commitment to gender equity at all levels, from senior management to operational teams, (ii) gender analysis to identify gaps, needs and specific opportunities within the Fintech sector and among potential users, (iii) gender capacity building for the staff of the vertical, ensuring that they understand and can implement inclusive practices and (iv) collaboration with stakeholders including women's organizations, gender experts and regulators to design and implement effective solutions.\n\nThe DCE model works well if the following conditions are in place:\n\n•\tConnectivity and phone ownership among users.\n•\tRelationships with farmers associations, VSLAs, youth groups, mobile phone suppliers, etc.\n•\tProviders of financial services and fintech in the markets with services and products that are fit for smallholder farmers (i.e. that match the cycle of production or agriculture seasons).\n\n**Context**. To bridge the digital finance divide, UNCDF in Uganda has been driving digital financial inclusion with a focus on agriculture value chains since 2015. UNCDF works with private sector players to drive digital financial products and services in the hard-to-reach areas in Uganda, providing both technical assistance and grants to de-risk innovative projects.\nMobile technologies hold an immense potential to accelerate access to services, notably financial services, which drive rural communities' economic development. In Sub-Saharan Africa, 55% of the adult population holds an account with a financial institution or mobile money provider. The growing number of mobile money accounts also comes with potentially increased access to other services like access to high-quality inputs for agriculture (seeds and tools), information on techniques, weather information, etc.\n\nDigital financial service providers, just like other private sector players are open for business and partnerships that are built on a strong business case. The latter is not always evident or guaranteed when it comes to reaching the last mile, which explains the reluctance of partners to reach these markets.\n\nIn forging these partnerships to be able to serve the last mile, UNCDF had to create solutions that can demonstrate to the financial services providers (FSPs): (1) that there is a potential market to tap into, (2) that this market can be profitable if served appropriately.\n\nWith these objectives in mind the UNCDF conceived a first model in 2015 called the Booster Team, that was upgraded based on the lessons learned in 2019 to become the digital community entrepreneur model.\n\n\n**Cost**. A pilot project of the DCE model implemented by UNCDF’s partner Ensibuuko in Northern Uganda from 2019 to 2021 cost a total of US$ 405,409, with UNCDF contributing US$ 204,981 and Ensibuuko US$ 200,428.  Through this project, 361 DCEs were recruited and reached 245,000 people with digital and financial literacy training, and digital tools.  \n\n**People**. Project Managers are responsible for overseeing the comprehensive planning, execution, and monitoring of the project document to ensure its successful implementation. They provide technical assistance to the implementing partner and facilitate discussions and engagements with pertinent stakeholders, including financial institutions, mobile network operators, and development institutions like the development bank, streamlining the coordination process.\n\n**Focal point**. [Richard Ndahiro](/Financial-inclusion-toolkit/contributors/Richard-Ndahiro.html)\n\n**Country, year, and language**. Uganda, 2022-2023, English. \n\n**Resources**. \n•\tConcept note about the DEC model\n•\tTOR for the TA\n•\tTraining toolkit (ToT and trainee)\n[Report](https://www.uncdf.org/article/6446/digital-community-entrepreneurs---going-the-extra-mile-to-close-the-digital-gap-in-rural-uganda). Read this report to understand the impact that the Digital Community Entrepreneur model has had in facilitating last mile distribution of digital financial products and services as well as improving the livelihoods of women and youth, who are driving this innovation. It also explains  how the model operates and enumerates challenges and opportunities for scalingup such a model.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "--> # Digital community entrepreneurs providing information, customer service, and hardware to enable financial services **What it does.** The digital...",
  "id": 61
},{
  "title": "Values and attitude",
  "url": "/1_Getting%20started/values.html",
  "content": "## Values and attitude\n\n### Values\n\nThis toolkit was produced in the cultural context of UNDP’s Accelerator Labs. It draws inspiration from their culture of deep listening, immersion within the everyday reality of the Global South, and respect for grassroots innovation, openness, and epistemological humility. It does not seek to provide turnkey solutions, but to share the knowledge accumulated along the way, in the hope of making the task of delivering financial tools digitally a little less difficult.\n\n### Support and enhance grassroots approaches\n\nMost people in the Global South do not have bank accounts, and are generally not served by traditional basic financial services. Many communities have found ways to produce functionally equivalent financial services: for example, the Accelerator Labs have documented forms of community savings. Rather than treating these approaches as an indcation of backwardness, we recommend looking to these forms of grassroots finance as collective intelligence, and, where the potential is there, build upon them. A good example is the digital version of sanduk sanduk, a form of community savings group used in South Sudan.\n\n### Focus on the \"last mile\" of finance \n\nFinancial networks span the planet, but, in the Global South, they are sparse. This toolkit focuses on the \"last mile\" of financial inclusion, where communities that might be harder to serve for traditional providers of financial services get connected to global networks. Financial literacy is a major enabler of inclusivity, and the UNDP Accelerator Labs have accumulated substantial experience in this area.\n\n### Digital cuts both ways\n\nFintech entrepreneurs have used the potential of digital ecosystems to build new financial services on top of the existing ones. This is exciting, but its very efficiency risks leaving further behind those who are financially and/or digitally excluded. The Accelerator Labs have prototyped ways that these exclusionary dynamics can be overcome with interventions such as making digital payments in neighborhood stores. In a last mile context, the most important part of digital finance is analog.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "## Values and attitude ### Values This toolkit was produced in the cultural context of UNDP’s Accelerator Labs. It draws...",
  "id": 61
},{
  "title": "... through an app to digitize financial transactions in cross-border trade",
  "url": "/3_Save/zam.html",
  "content": "# An app to digitize financial transactions in cross-border trade\n\n**What it does**.\n The VillageSavers app digitizes trade and financing for cross border traders who are women and young people, in their shared border towns of Livingstone (Zambia) and Victoria Falls (Zimbabwe). More specifically, the app:\n\n- Allows informal Self-help Savings Groups (SHGs) to digitize their financial transactions records (savings and loans) through an automated digital system. \n- Solves problems of poor record keeping, human error, lack of transparency, and distrust as each member has access to the information in real time.\n- Increases informal businesses' access to formal financial services as private banks have reported that the app's credit history can be used to make a case for securing financial support. Specifically, VillageSavers app creates credit scores that can be used to access financing from formal financial services providers such as banks.\n- Increases access to financial and digital literacy information by providing training on financial literacy, including financial and savings management, as well as training on how to use digital financial management tools. \n\n**Value proposition for the government/other partner**.\n By using the VillageSavers app, self-help savings groups have a comprehensive solution to the challenges faced in informal savings groups. It not only improves financial management and transparency but also opens new opportunities for digital financial inclusion and access to formal financial services.\n\nNotably, the VillageSavers app is most useful within the informal sector, catering to individuals who lack access to formal banking services. This community seeks to collectively pool their resources, thereby bolstering their borrowing and lending capabilities, leading to increased revenue for their businesses. Additionally, the app has demonstrated its value to formal financial institutions, as it helps them identify patterns of creditworthyness within the informal business sector, making it a viable tool for extending financial support to unbanked populations.\n\n**Why and when to use it**. Small scale cross border traders (SSCBTs) suffer from lack of access to pensions, as well as other financial products and services because they are unable to engage with the pension authority and banks, who view serving them as risky. Using an app such as VillageSavers will create a digital transaction history that would enable banks and the pension authority to do more accurate risk assessments.\n\nIn order for the VillageSavers app to be effective, it's important to have SMEs that have the following characteristics:\n\n- Actively trading;\n- Participating in a savings group;\n- Have access to smartphones, internet and a basic level of financial and digital literacy (or are willing to receive assistance to access phones and training).\n\n**Known issues and troubleshooting**. Key challenges are lack of digital skills, poor or limited internet connectivity, and difficulty accessing a smartphone, which can be price-prohibitive for some SMEs. SMEs might also experience difficulties using the app, for which they'd need technical and troubleshooting support.\n\n**Cost**. Approximately $100,000, with the following breakdown:\n\n- App maintenance, including trouble shooting, hosting fees etc., 35,000\n- Smart phones, 20,000\n- Meetings with beneficiaries, 10,000\n- DSA and upkeep expenses, 15,000\n- Travel expenses, 15,000\n- Miscellaneous, 5,000\n\n**People**.\n\n**Project Manager**. The project manager will develop the concept note, design the experiment, collect baseline data, build partnerships, and provide direct oversight and management of the implementation of the proof of concept.\n\n**Innovation Lead**. The innovation lead will coordinate all project activities, training, and app management.\n\n**External Consultant**. A research consultant will implement surveys, run focus group discussions, and write the report.\n\n**Software Developer**. The software developer will lead the development of the digital platform to ensure its continous operation, and to answer questions and resolve issues coming from the CBTs. \n\n**Innovator (as an implementing partner)**. The innovator implementing partner would refine the existing platform, deploy the app, carry out digital and financial skills training, and coordinate CBT (Cross Border Traders) participation, monitoring, and data sharing.\n\n**Project Analyst**. The project analyst will be responsible for data collection, analysis, and reporting.\n\n**Social Development Officer**. The social development officer will be responsible for community engagement, including hosting meetings and monitoring social change.\n\n**Focal points**. [Moses Mwansa](/Financial-inclusion-toolkit/contributors/Moses-Mwansa.html) and [Salome Nakazwe](/Financial-inclusion-toolkit/contributors/Salome-Nakazwe.html).\n\n**Country, year, and language**. Zambia, 2021-2023, English.\n\n**Resources**.\n\n - [Implementation Summary for VillageSavers App](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/331fe76f5a24abc879b6a89bae1195102c5ef263/3_Save/VillageSavers%20app%20Implementation%20Summary.pdf). Read this document to understand what steps were taken to deliver the app to Cross Border Traders in Zambia and Zimbabwe.\n - [Baseline Survey Report](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/12e13b1ad807925f800bedcd78dafe1123b662f0/3_Save/ABC_Baseline%20Report_Final.pdf). Read this report to understand the impact of COVID-19 on cross-border traders in Zambia and Zimbabwe. \n - [UNDP Exposure Report](https://undpinzambia.exposure.co/innovation-helps-zambian-women-and-youths-bounce-back-in-crossborder-trade). Read this report for a narrative account of the VillageSavers app initiative, context, and impact.\n - [Endline Report](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/ea85eca40cddb8e2df554119a6194e60ad04d3c7/3_Save/03_05_22_ENDLINE%20REPPORT_CHUNI%20PATRICK.pdf). Read this report to gain insight into the impact of the VillageSavers app.\n - [Stakeholder Co-creation Workshop Agenda](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/12e13b1ad807925f800bedcd78dafe1123b662f0/3_Save/ABC%20Stakeholder%20co-creation%20workshop.04.04.21.pdf). Use this agenda to inform stakeholder engagement and co-creation efforts.\n - [Terms of Reference](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/12e13b1ad807925f800bedcd78dafe1123b662f0/3_Save/TERMS%20OF%20REFERENCE_%20ABC%20Survey%20Coordinator_Baseline%20and%20Endline.pdf). Use this TOR as a template for hiring a consultant to conduct baseline and endline surveys and focus group discussions with cross-border traders, and to gather evidence on the impact of the VillageSavers app (or similar intervention) on the livelihood of the cross-border traders.\n - [Video tutorial on how to manage a village savings group through the VillageSavers app](https://www.youtube.com/watch?v=mhiGYj3W-ro). Watch this video to understand how an accounnt is created on the VillageSavers app.\n- [Video documentary](https://www.youtube.com/watch?v=fIkA2ePjJ1E). Watch this documentary to learn about how and why founder Moses Mwansa built VillageSavers.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "# An app to digitize financial transactions in cross-border trade **What it does**. The VillageSavers app digitizes trade and financing...",
  "id": 61
},{
  "title": "Amanuel Tadesse",
  "url": "/contributors/Amanuel-Tadesse.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Amanuel Tadesse\n            \n            UNDP Ethiopia Accelerator Labs\n            Head of Solutions Mapping\n          \n        \n        \n          Amanuel has a diverse background with experience in government, NGOs, and the private sector. Currently, he works for the UNDP. In his role as a solution mapper, he is responsible for identifying and co-designing grassroots solutions to address community challenges. Before joining UNDP, Amanuel worked on testing and revamping business models related to rural finance, specifically focusing on voucher-based agricultural input distribution systems and seed marketing. He has also provided analytical support to various programs and has experience in designing and conducting surveys. Amanuel holds a PhD in geography from the University of Leuven, with a primary focus on urbanism. His academic interests revolve around exploring the intricate interactions between space and society, particularly within urban contexts in the global south.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Amanuel Tadesse UNDP Ethiopia Accelerator Labs Head of Solutions Mapping Amanuel has a diverse background with experience in government, NGOs,...",
  "id": 61
},{
  "title": "Lorena Moscovich",
  "url": "/contributors/Lorena-Moscovich.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lorena Moscovich\n            \n            UNDP Argentina Accelerator Labs\n            Head of Experimentation\n          \n        \n        \n          I work to drive innovation for development using grassroots solutions and pilots across a range of fields, from digital inclusion to environmental citizen science, in partnership with both public and private sectors. Through knowledge management, I aim to systematize my learnings and insights to create a more impactful and sustainable impact. My approach to my work centers around inclusivity and accessibility, using narratives and facilitation strategies to ensure that everyone is included in the conversation and no one is left behind.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Lorena Moscovich UNDP Argentina Accelerator Labs Head of Experimentation I work to drive innovation for development using grassroots solutions and...",
  "id": 61
},{
  "title": "Lilian Abou Zeki",
  "url": "/contributors/Lilian-Abou-Zeki.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lilian Abou Zeki\n            \n            UNDP Lebanon Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Lilian leads on scoping user-led solutions/ grass root innovators/ positive deviants across different development areas in the country. She identifies underlying insights on behavior, trends, and systems that might make for solution learnings to experiment with inside UNDP and with partners, a role that can be likened to product management. Passionate about the way women experience work outside of the man-woman binary. Focused more on the unique nuances that make women entrepreneurs, business owners and leaders succeed, due to these nuances and not despite them.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Lilian Abou Zeki UNDP Lebanon Accelerator Lab Head of Solutions Mapping Lilian leads on scoping user-led solutions/ grass root innovators/...",
  "id": 61
},{
  "title": "Melany Anoushka Poorun-Sooprayen",
  "url": "/contributors/Melany-Poorun-Sooprayen.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Melany Anoushka Poorun-Sooprayen\n            \n            UNDP Mauritius and Seychelles Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Melany is an experienced project manager with a demonstrated history of working in the renewables and environment industry. She is a strong program and project management professional with an MBA focused on Project Management from MANCOSA, and she’s skilled in corporate social responsibility, analytical skills, system monitoring, and management.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Melany Anoushka Poorun-Sooprayen UNDP Mauritius and Seychelles Accelerator Labs Head of Exploration Melany is an experienced project manager with a...",
  "id": 61
},{
  "title": "Mariana Olcese",
  "url": "/contributors/Mariana-Olcese.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mariana Olcese\n            \n            UNDP Peru Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Mariana joined UNDP Peru in 2020 as Head of Exploration. Before that, she worked as Public Affairs and Head of Institutional Affairs for companies like WeWork and Corporacion Breca. Mariana holds an MBA from Yale and Georgetown University. Her expertise encompasses stakeholder management, social and political monitoring, and the development of strategic corporate positioning. She is adept at fostering and leading dialogues between public and private actors, facilitating cooperation and knowledge sharing.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Mariana Olcese UNDP Peru Accelerator Labs Head of Exploration Mariana joined UNDP Peru in 2020 as Head of Exploration. Before...",
  "id": 61
},{
  "title": "Ximena González",
  "url": "/contributors/Ximena-Gonzalez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ximena González\n            \n            UNDP Peru Accelerator Labs\n            Inclusive Growth Coordinator\n          \n        \n        \n          Leads Inclusive Growth team in UNDP Peru. Ximena is also a social entrepreneur, through Heroínas Peruanas, a non-profit association that promotes education and equal opportunities through educational materials about the lives of notable Peruvian women.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Ximena González UNDP Peru Accelerator Labs Inclusive Growth Coordinator Leads Inclusive Growth team in UNDP Peru. Ximena is also a...",
  "id": 61
},{
  "title": "Jacqueline Poni Aringu",
  "url": "/contributors/Jacqueline-Poni-Aringu.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jacqueline Poni Aringu\n            \n            UNDP South Sudan Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Jacqueline is passionate about R&D, and comes with a rich blend of both public and private sector experience in her experimentation role. She has worked on and coordinated various R&D projects from both the government and private sectors. Jacqueline has worked in resource-limited settings, economically empowering vulnerable communities through women’s financial inclusion initiatives. Jacqueline is a strong team player and has effectively demonstrated leadership through innovative ideas. She is a very ambitious and result-oriented human, and these attributes have helped her show the utmost professional ethics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Jacqueline Poni Aringu UNDP South Sudan Accelerator Lab Head of Experimentation Jacqueline is passionate about R&D, and comes with a...",
  "id": 61
},{
  "title": "Tong Atak",
  "url": "/contributors/Tong-Atak.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tong Atak\n            \n            UNDP South Sudan Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Eng. Tong Atak is the Head of Solutions Mapping and the Digital Advocate at UNDP South Sudan. He studied his bachelor’s degree in computer engineering at Queen Mary University of London. He is a practicing engineer and has over 5 years of experience working in telecoms with Nokia across Western Europe in Research & Development and development and technical account management. At UNDP, one of the notable projects Eng. Tong has project led was a pilot scheme to digitalize the traditional Sanduk savings scheme and migrate the analog process onto the M-Gurush platform. The success of this joint pilot with M-Gurush led to the development of a digital Sanduk called mSanduk being launched nationwide on their platform and being made available as a value-added service to their 1.7 million customer base. In addition, Eng. Tong in his capacity as the UNDP Digital Advocate works to identify and realize opportunities for digital project design and delivery in UNDP to be able to support the developmental aspirations of our lead partner the Government of South Sudan.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Tong Atak UNDP South Sudan Accelerator Lab Head of Solutions Mapping Eng. Tong Atak is the Head of Solutions Mapping...",
  "id": 61
},{
  "title": "Moses Mwansa",
  "url": "/contributors/Moses-Mwansa.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Moses Mwansa\n            \n            VillageSavers Technology Ltd.\n            CEO\n          \n        \n        \n          Moses Mwansa, holder of a Master of Science Degree in Project Management, is the proprietor of VillageSavers Technology Ltd, a fintech that promotes financial inclusion in low-income and informal business through the VillageSavers app. VillageSavers helps SMEs (Small and Medium-sized Enterprises) adopt tech-based solutions in their businesses. Moses is a 2021 Mandela Washington Fellow from the University of Nebraska, Lincoln, a YALI Regional Leadership Program alumni from the University of South Africa (2019), and a participant in the US Department of State’s Tech-Camp program in Nigeria (2019), and Ghana 2016. VillageSavers has been used successfully by Cross Border Traders through the project Digitizing Trade and Financing for Women and Youth Cross Borders Traders, which is jointly financed by the Africa Borderlands Centre and UNDP Zambia.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Moses Mwansa VillageSavers Technology Ltd. CEO Moses Mwansa, holder of a Master of Science Degree in Project Management, is the...",
  "id": 61
},{
  "title": "Sofia Silva",
  "url": "/contributors/Sofia-Silva.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sofia Silva\n            \n            UNDP Cabo Verde Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Sofia Silva is the Head of Exploration at UNDP Accelerator Lab in Cabo Verde, where she leads a portfolio of experiments that explore emerging trends, implications for systemic impacts and risks, and their potential for accelerating progress toward the Sustainable Development Goals (SDGs). She has over 16 years of experience in Information Systems and Electronic Governance in Cape Verde and Lusophone countries. With an MBA in Leadership and Innovation from Fundaçao Gertúlio Vargas - FGV, Brazil, Sofia has a solid background in working with state organizations, international NGOs, and private companies on projects that leverage technology, data, and design thinking to solve complex development challenges. She has also coordinated the software production department of NOSi, the most recognized ICT institution in Cape Verde, and worked as a consultant for projects in East Timor and Mozambique. Sofia is passionate about exploring new ways of thinking and doing that can enhance the lives and livelihoods of the poorest and most vulnerable.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Sofia Silva UNDP Cabo Verde Accelerator Lab Head of Exploration Sofia Silva is the Head of Exploration at UNDP Accelerator...",
  "id": 61
},{
  "title": "Eduardo Gustale",
  "url": "/contributors/Eduardo-Gustale.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Eduardo Gustale\n            \n            UNDP Accelerator Labs\n            Monitoring, Experimentation and Learning Specialist\n          \n        \n        \n          Experienced in Sustainable Development and Social Innovation. Worked repeatedly in academic research, survey development, and market insight. Elected Global Shaper by the World Economic Forum & Chevening Scholar for an MSc in Innovation and Entrepreneurship at the University of Warwick.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Eduardo Gustale UNDP Accelerator Labs Monitoring, Experimentation and Learning Specialist Experienced in Sustainable Development and Social Innovation. Worked repeatedly in...",
  "id": 61
},{
  "title": "Tayo Akinyemi",
  "url": "/contributors/Tayo-Akinyemi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tayo Akinyemi\n            \n            UNDP Accelerator Labs\n            Learning and Community Manager\n          \n        \n        \n          I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early-stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing the capacity of those enablers (especially early stage investors).\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Tayo Akinyemi UNDP Accelerator Labs Learning and Community Manager I have spent most of my career creating order from ambiguity,...",
  "id": 61
},{
  "title": "Alberto Cottica",
  "url": "/contributors/Alberto-Cottica.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alberto Cottica\n            \n            UNDP Accelerator Labs\n            R&D Specialist\n          \n        \n        \n          Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Alberto Cottica UNDP Accelerator Labs R&D Specialist Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography,...",
  "id": 61
},{
  "title": "Alik Mikaelian",
  "url": "/contributors/Alik-Mikaelian.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alik Mikaelian\n            \n            UNDP Egypt Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Alik is a strategic designer and researcher with a background in product and graphic design. She holds an MFA in transdisciplinary design, and a bachelor’s degree in product design.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Alik Mikaelian UNDP Egypt Accelerator Lab Head of Solutions Mapping Alik is a strategic designer and researcher with a background...",
  "id": 61
},{
  "title": "Marwa Makhlouf",
  "url": "/contributors/Marwa-Makhlouf.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marwa Makhlouf\n            \n            The American University in Cairo\n            Researcher\n          \n        \n        \n          A development researcher, Marwa holds an MSc in Development Studies from the London School of Economics and Political Science (LSE) and is a graduate from the American University in Cairo (AUC), with a B.A in economics and a minor in psychology. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Marwa Makhlouf The American University in Cairo Researcher A development researcher, Marwa holds an MSc in Development Studies from the...",
  "id": 61
},{
  "title": "Salome Nakazwe",
  "url": "/contributors/Salome-Nakazwe.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Salome Nakazwe\n            \n            UNDP Zambia Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          As Head of Solutions Mapping, Salome co-creatively supports the development of grassroots initiatives aimed at tackling broader challenges affecting our world. She has over 20 years of work experience in programme management, transformational training, and leadership development, and has earned a a Bachelor of Arts Degree in Education and a Master of Arts Degree in Communications for Development.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Salome Nakazwe UNDP Zambia Accelerator Lab Head of Solutions Mapping As Head of Solutions Mapping, Salome co-creatively supports the development...",
  "id": 61
},{
  "title": "Najoua Soudi",
  "url": "/contributors/Najoua-Soudi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Najoua Soudi\n            \n            UNDP Morocco Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Equipped by my deeply rooted moral imagination and the critical thinking that emerges from having had roles that crossed so many programs, I embarked on a learning journey with the United Nations Programme for Development using an experimental approach to development and poverty alleviation - combining research, locally grown solutions and technology with saving the world.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Najoua Soudi UNDP Morocco Accelerator Lab Head of Solutions Mapping Equipped by my deeply rooted moral imagination and the critical...",
  "id": 61
},{
  "title": "Ravi Chandra",
  "url": "/contributors/Ravi-Chandra.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ravi Chandra\n            \n            UNDP India\n            Livelihood and Value Chain Specialist\n          \n        \n        \n          Ravi has played a prominent role and is a nationally recognized expert in the farm & non-farm value chain, livelihoods promotion, entrepreneurship development and financial inclusion ecosystems. He has previously worked and co-founded non-profit and for-profit companies in agriculture, microfinance, bamboo, handloom & handicraft focusing on B2B & B2C segments. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Ravi Chandra UNDP India Livelihood and Value Chain Specialist Ravi has played a prominent role and is a nationally recognized...",
  "id": 61
},{
  "title": "Adedapo Aderemi",
  "url": "/contributors/Adedapo-Aderemi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Adedapo Aderemi\n            \n            UNDP Accelerator Labs\n            Software Developer\n          \n        \n        \n          Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Adedapo Aderemi UNDP Accelerator Labs Software Developer Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web,...",
  "id": 61
},{
  "title": "Jessica Massie",
  "url": "/contributors/Jessica-Massie.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jessica Massie\n            \n            UNCDF\n            DFL Specialist/Financial Sector Specialist\n          \n        \n        \n          Jessica Massie is a technical assistant for DFL and financial capability programmes for UNCDF based in Kigali, Rwanda. She has lived and worked in a variety of African countries for almost 20 years, and specializes in curriculum development, training, research and writing, with a focus on skill-building and behavior change.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Jessica Massie UNCDF DFL Specialist/Financial Sector Specialist Jessica Massie is a technical assistant for DFL and financial capability programmes for...",
  "id": 61
},{
  "title": "Karima Wardak",
  "url": "/contributors/Karima-Wardak.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Karima Wardak\n            \n            UNCDF\n            KM and Comms Lead for IDE\n          \n        \n        \n          Karima Wardak is the knowledge and communication manager for the inclusive digital economy team at UNCDF; she is based in Brussels, Belgium. She has worked in digital financial inclusion and microfinance for over 15 years and can provide information on a broad range of programmes in financial and digital inclusion in Africa, Asia, and the Pacific.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Karima Wardak UNCDF KM and Comms Lead for IDE Karima Wardak is the knowledge and communication manager for the inclusive...",
  "id": 61
},{
  "title": "Lina Fernandez",
  "url": "/contributors/Lina-Fernandez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lina Fernandez\n            \n            UNDP Colombia Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Lina joined the Accelerator Lab in Colombia in 2023 as Head of Exploration but has been part of UNDP for more than 12 years leading the private sector and inclusive finance agenda. She is a skilled project manager with experience in the public sector and multilateral organizations for the design and implementation of development and innovation policies and initiatives and the design of multi stakeholder strategic partnerships within the financing for development agenda.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Lina Fernandez UNDP Colombia Accelerator Lab Head of Exploration Lina joined the Accelerator Lab in Colombia in 2023 as Head...",
  "id": 61
},{
  "title": "Diana Gonzalez",
  "url": "/contributors/Diana%20Gonzalez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Diana Gonzalez\n            \n            UNDP\n            IRFF National Program Officer\n          \n        \n        \n          Political scientist with a master's in public and social policies. 11 years of professional experience in monitoring and evaluation of public policies, developing tools and methodologies for the efficient use of public resources, budget programming, private sector contribution to SDGs and working with development Banks such as IDB, Korea Eximbank and the World Bank.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Diana Gonzalez UNDP IRFF National Program Officer Political scientist with a master's in public and social policies. 11 years of...",
  "id": 61
},{
  "title": "Diana Muñoz",
  "url": "/contributors/Diana-Munoz.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Diana Muñoz\n            \n            UNDP\n            Inclusive Finance Officer\n          \n        \n        \n          Political scientist specialized in Social Policy, with over 14 years of experience in public and private sectors managing social development initiatives, leading and coordinating programs and projects focused on financial inclusion. Experience working in financial institutions and international cooperation agencies specialized in rural development, leading the design and implementation of financing tools with strategic partners aimed at serving vulnerable populations.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Diana Muñoz UNDP Inclusive Finance Officer Political scientist specialized in Social Policy, with over 14 years of experience in public...",
  "id": 61
},{
  "title": "Juan David Ordoñez",
  "url": "/contributors/Juan-David-Ordonez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Juan David Ordoñez\n            \n            UNDP\n            Innovation and Private Sector Officer\n          \n        \n        \n          Professional in Business Administration with over 12 years of experience in designing, formulating, managing, monitoring, and evaluating projects aimed at addressing economic, social, and environmental issues involving stakeholders from the private sector, government, and civil society at national and international levels. He has worked with different international cooperation agencies such as UNODC Colombia and UNDP in the Latin America and Caribbean Bureau, contributing to knowledge management and innovation. Passionate about technology and driven by curiosity. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Juan David Ordoñez UNDP Innovation and Private Sector Officer Professional in Business Administration with over 12 years of experience in...",
  "id": 61
},{
  "title": "Maria Adelaida Palacios",
  "url": "/contributors/Maria-Adelaida-Palacios.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Maria Adelaida Palacios\n            \n            UNDP\n            Gender Focal Point\n          \n        \n        \n          María Adelaida is a lawyer with 14 years of experience in women's human rights, development, and gender. Her career includes collaborations with social organizations, the State, and academia. She currently works as a gender analyst in the Colombia office, where she uses her expertise to understand and address the needs of women, proposing innovative solutions that consider gender as a central axis to promote significant changes.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Maria Adelaida Palacios UNDP Gender Focal Point María Adelaida is a lawyer with 14 years of experience in women's human...",
  "id": 61
},{
  "title": "Juan David Martin",
  "url": "/contributors/Juan-David-Martin.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Juan David Martin\n            \n            UNDP\n            Head of Experimentation\n          \n        \n        \n          Juan David joined the Accelerator Lab in 2019 as Head of Experimentation. Juan is an industrial designer with a master in strategic design and over 15 years of experience as a team leader and project manager. Driven to investigate problems, uncover opportunities and create value for end users and businesses. As a design thinker, have worked in service design, innovation management, public and social innovation, brand implementation, brand strategy and business model innovation. While helping develop businesses through a design-driven perspective, he creates strategies to sustain and share value between end users and the product service systems they use. He combines hard and soft skills to guide a structured process and create business ideas and innovative products and services that enhance user experience.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Juan David Martin UNDP Head of Experimentation Juan David joined the Accelerator Lab in 2019 as Head of Experimentation. Juan...",
  "id": 61
},{
  "title": "Richard Ndahiro",
  "url": "/contributors/Richard-Ndahiro.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Richard Ndahiro\n            \n            UNCDF\n            Digital Country Lead\n          \n        \n        \n          Richard Ndahiro works at the intersection of the digital economy and the real economy, specifically on how digital innovation can be applied to Health, Education, Agriculture, Finance, Energy sectors. His career of over 15 years spans across financial services (retail banking, microfinance, DFS), rural development/poverty reduction, and academia. Richard holds an MSc in Applied Economics, a post graduate diploma in Innovation and Design thinking, a Diploma in Professional Marketing (CIM) and is an Alumni of the Oxford University Fintech programme.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Richard Ndahiro UNCDF Digital Country Lead Richard Ndahiro works at the intersection of the digital economy and the real economy,...",
  "id": 61
},{
  "title": "Kehinde Bolaji",
  "url": "/contributors/Kehinde-Bolaji.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Kehinde Bolaji\n            \n            UNDP\n            Programme Manager/Knowledge and Innovation Advisor, Africa Borderlands Center\n          \n        \n        \n          Kehinde Bolaji is Programme Manager/ Knowledge and Innovation Advisor at the Africa Borderlands Centre. Working with all units of the Borderlands Programme, he provides substantive leadership on programme management, integrated advisory services, partnership management, research, data and knowledge support. In particular, he shapes the conceptualization and operationalization of the ABC innovation work. Bolaji most recently served as UN Peace and Development Advisor (Caribbean) where he worked with the Caribbean Community (CARICOM), its Technical Agencies and Member-States in designing strategies and in implementing programmes on community mediation, Prevention of Violent Extremism (PVE), counterterrorism, climate-related security risks mapping, as well as women and youth inclusion in peacebuilding mechanisms.  Prior to that, he served as Governance and Peacebuilding Team Leader at the United Nations Development Programme (UNDP) in Nigeria. He holds a PhD in Political Science from the University of Ibadan, Nigeria and is an alumnus of the Peace and Security in Africa Programme (PASA) at Uppsala University, Sweden.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Kehinde Bolaji UNDP Programme Manager/Knowledge and Innovation Advisor, Africa Borderlands Center Kehinde Bolaji is Programme Manager/ Knowledge and Innovation Advisor...",
  "id": 61
},{
  "title": "Lily Murei",
  "url": "/contributors/Lily-Murei.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lily Murei\n            \n            UNDP\n            Policy Research & Data Specialist, Africa Borderlands Center\n          \n        \n        \n          Dr. Lily Murei is a Policy and Research  Data Specialist at the UNDP Africa Borderlands Centre. A program management specialist, Ms. Murei has vast experience in inclusive program management, policy technical advisory, program assessments, and action research, result-based monitoring and evaluation, and project information management for evidence-based program design and reporting. Before joining the UNDP Borderlands Centre, she worked as a Technical Specialist for the UNDP REDD+ Project; before that, she coordinated the UNEP/UNOPs /UNDP Switch Africa Green project in Kenya. Ms. Murei holds a Doctor of Philosophy in Project Planning and Management, specializing in Monitoring and Evaluation, from the University of Nairobi; a master’s degree in project planning and management from the University of Nairobi; and a Bachelor of Arts (Hons) in Sociology and Geography from Egerton University.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Lily Murei UNDP Policy Research & Data Specialist, Africa Borderlands Center Dr. Lily Murei is a Policy and Research Data...",
  "id": 61
},{
  "title": "Enock Omweri",
  "url": "/contributors/Enock-Omweri.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Enock Omweri\n            \n            UNDP\n            Solutions Mapping Specialist, Africa Borderlands Center\n          \n        \n        \n          Enock Omweri is a seasoned professional at the forefront of cross-border development, digitization, and technology-driven solutions. With over a decade of experience in innovation, development, and humanitarian work, he currently serves as the Solutions Mapping Specialist at the UNDP Africa Borderlands Centre. Enock’s journey into the realm of international development began with his tenure at the United Nations Monitoring Mechanism (UNMM), where he played a pivotal role in facilitating cross-border operations across Syria, Jordan, Iraq, and Turkey. Prior to his work with the UNMM, Enock honed his skills at the World Food Programme (WFP). Before his international engagements, Enock contributed to academia as a lecturer at the University of Nairobi, where he imparted knowledge and fostered critical thinking among future leaders. \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Enock Omweri UNDP Solutions Mapping Specialist, Africa Borderlands Center Enock Omweri is a seasoned professional at the forefront of cross-border...",
  "id": 61
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