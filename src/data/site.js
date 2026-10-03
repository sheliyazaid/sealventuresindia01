export const enc = (path) => encodeURI(path);

export const NAV = [
  { label: "HOME", to: "/" },
  {
    label: "ABOUT US",
    children: [
      { label: "Overview", to: "/about/overview" },
      { label: "Management Team", to: "/about/management-team" },
    ],
  },
  {
    label: "PRODUCTS",
    children: [
      {
        label: "Mechanical Seal",
        children: [
          { label: "Pusher Seal", to: "/products/pusher-seal" },
          { label: "Non Pusher Seal", to: "/products/non-pusher-seal" },
          { label: "Cartridge Seal", to: "/products/cartridge-seal" },
          { label: "Agitator Mixer & Reactor Seal", to: "/products/agitator-mixer-reactor-seal" },
          { label: "Split Seal", to: "/products/split-seal" },
          { label: "Mechanical Seal Face & Components", to: "/products/mechanical-seal-face-components" },
        ],
      },
      { label: "Rotary Union", to: "/products/rotary-union" },
      { label: "Bearing Isolator", to: "/products/bearing-isolator" },
      { label: "Supply System", to: "/products/supply-system" },
      { label: "Catalogue", href: "/assets/Sealventures/Sealventures Catalog.pdf", download: true },
    ],
  },
  { label: "CERTIFICATE", to: "/certificate" },
  { label: "CONTACT", to: "/contact" },
];

export const HERO_SLIDES = [
  {
    title: "High-Tech Sealing Solution",
    text: "SealVentures India delivers innovative mechanical seal solutions through advanced materials, precision engineering, and custom designs, ensuring superior durability, efficiency, and reliability across industries.",
  },
  {
    title: "Professional Expertise",
    text: "SealVentures India demonstrates professional expertise in mechanical seal manufacturing through precision engineering, advanced technology integration, and unwavering commitment to global quality standards.",
  },
  {
    title: "Strong After-Sales Support",
    text: "We ensure strong after-sales support by providing timely technical assistance, genuine spare parts, performance monitoring, and dedicated customer service to enhance the reliability and longevity of our mechanical seals.",
  },
  {
    title: "Wide Range of Products/Services",
    text: "We offer a wide range of precision-engineered mechanical seals and related sealing solutions, designed to meet diverse industrial applications with superior quality and reliability.",
  },
];

export const WHY_ITEMS = [
  { id: "item1", num: "01", title: "High-Tech Sealing System", text: "Sealventures leads industrial innovation with High-Tech sealing System, producing high-performance precision mechanical seals, elastomers, and polymers." },
  { id: "item2", num: "02", title: "Preeminence Manufacturing", text: "Sealventures India is a leading provider of high-quality sealing systems, characterized by exceptionally high precision, done strictly in accordance with global standards like API, ANSI, ASME, and DIN." },
  { id: "item3", num: "03", title: "Global Standards", text: "Sealventures India strictly maintains the highest quality global standards of mechanical engineering through the sourcing of all the required raw materials." },
  { id: "item4", num: "04", title: "Customized Solutions", text: "We committed to delivering customized solutions according to the distinct operational demands of different industries." },
  { id: "item5", num: "05", title: "Constant Development", text: "Sealventures continues to be committed to its vision of Constant development and has honed its technological expertise and procedures in order to satisfy the increasing demands of its industry." },
  { id: "item6", num: "06", title: "Worldwide Sales and Services", text: "We boast an excellent worldwide sales and service network that makes its state-of-the-art industrial sealing solutions readily accessible in every major region of the globe." },
  { id: "item7", num: "07", title: "Establishments Heritage", text: "Since its establishment, the Sealventures brand has upheld an excellent record of technical mastery and inventiveness in the field of industrial sealing technologies." },
  { id: "item8", num: "08", title: "Proficient Workforce", text: "At Sealventures, our staff's expertise and commitment are the key to our success. Our skilled engineers, technicians, and quality specialists." },
];

export const FEATURED_PRODUCTS = [
  { to: "/products/pusher-seal#SV-MS31DT", img: "/img/products/pusher-seal/SV-MS31DT.png", name: "SV-MS31DT" },
  { to: "/products/bearing-isolator#SV-BI24", img: "/img/products/Bearing Isolator/SV-RJ-751.png", name: "SV-BI24" },
  { to: "/products/non-pusher-seal#SV-TB71-R", img: "/img/products/non-pusher-seal/SV-TB71-R.png", name: "SV-TB71-R" },
  { to: "/products/rotary-union#SV-RJD-751", img: "/img/products/Rotary Unioun/SV-RJD-751.png", name: "SV-RJD-751" },
  { to: "/products/non-pusher-seal#SV-RBRT-51D", img: "/img/products/non-pusher-seal/SV-RBRT-51D.png", name: "SV-RBRT-51D" },
  { to: "/products/agitator-mixer-reactor-seal#SV-AG225", img: "/img/products/AGITATOR, MIXER & REACTOR SEALS/SV-AG225.png", name: "SV-AG225" },
  { to: "/products/non-pusher-seal#SV-MB62-G", img: "/img/products/non-pusher-seal/SV-MB61-G.png", name: "SV-MB62-G" },
  { to: "/products/supply-system#SV-TS780", img: "/img/FEATURES PRODUCT/Features Products.png", name: "SV-TS780" },
];

export const INDUSTRIES = [
  { title: "Chemical", image: "/img/INDUSTRIES WE SERVE/CHEMICAL.jpg", text: "Mechanical seals prevent hazardous and corrosive fluid leaks in chemical equipment, with materials selected to withstand demanding pressures, temperatures, and chemical exposure." },
  { title: "Pharmaceutical & Biotechnology", image: "/img/INDUSTRIES WE SERVE/PHARMACEUTIcAL & BIOTECHNOLOGY.jpg", text: "Purpose-designed seals help pumps and mixers maintain sterile conditions and prevent product contamination across pharmaceutical and biotechnology processes." },
  { title: "Fertilizer", image: "/img/INDUSTRIES WE SERVE/FERTILIZER.jpg", text: "Seals for fertilizer production stand up to corrosive and abrasive materials such as phosphoric acid and ammonia in pumps and mixers." },
  { title: "Food & Beverage", image: "/img/INDUSTRIES WE SERVE/FOOD & BEVERAGES.jpg", text: "Hygienic mechanical seals prevent leakage and contamination in food and beverage pumps and mixers." },
  { title: "Mining & Minerals", image: "/img/INDUSTRIES WE SERVE/MINING & MINERALS.jpg", text: "Durable seals help control leakage in equipment handling abrasive slurries and corrosive materials in mining and mineral processing." },
  { title: "Power Plants", image: "/img/INDUSTRIES WE SERVE/POWER PLANT.jpg", text: "Power plant seals protect pumps, turbines, and compressors against leakage under high-pressure and high-temperature conditions." },
  { title: "Textile", image: "/img/INDUSTRIES WE SERVE/TEXTILE.jpg", text: "Textile equipment seals help manage hot fluids and aggressive chemicals in dyeing, washing, and finishing processes." },
  { title: "Pulp & Paper", image: "/img/INDUSTRIES WE SERVE/PULP & PAPER.jpeg", text: "Seals for pulp and paper equipment withstand harsh process chemicals and abrasive pulp slurry in pumps and agitators." },
  { title: "Water & Water Treatment", image: "/img/INDUSTRIES WE SERVE/WATER & WATER TREATMENT.jpg", text: "Reliable seals help prevent leaks in water and wastewater treatment equipment, with materials suited to varied water conditions." },
  { title: "Steel Plants", image: "/img/INDUSTRIES WE SERVE/STEEL PLANTS.jpg", text: "Mechanical seals protect steel plant pumps and mixers handling hot, abrasive, and corrosive process fluids." },
  { title: "Oil & Gas", image: "/img/INDUSTRIES WE SERVE/OIL & GAS.jpg", text: "High-performance seals help prevent leaks in oil and gas pumps, compressors, and agitators operating under demanding conditions." },
  { title: "Marine", image: "/img/INDUSTRIES WE SERVE/MARINE.jpg", text: "Marine seals support leak-free operation in vessel and offshore platform pumps and stern tubes." },
];

export const REVIEWS = [
  { name: "Rajesh Patel", role: "Plant Manager, Gujarat", text: "We have been using Sealventures Cartridge Seals in our chemical plant for over a year now. Earlier we faced frequent leakage issues with local brands, but since switching to them, we have seen zero leakage and the installation was very quick. The technical team is knowledgeable and guided us well on the face material selection. Highly recommended for durable seals." },
  { name: "Srinivas Reddy", role: "Maintenance Engineer, Hyderabad", text: "Excellent service! We had a breakdown in our boiler feed pump, and buying a new imported seal was too costly and time-consuming. I contacted Sealventures, and they collected, lapped, and repaired the seal within 48 hours. The pump is running smooth now, and they really saved our production downtime with their quick response." },
  { name: "Vikram Malhotra", role: "Textile Unit Owner, Ludhiana", text: "I purchased Bearing Isolators from Sealventures to solve oil leakage issues in our electric motors. Since installation, the area is completely dry, and our bearing life has increased significantly. It is a one-time investment but totally worth it compared to standard lip seals. Good engineering by the team." },
  { name: "Amit Kumar Singh", role: "Procurement Manager, Noida", text: "We are regular buyers of mechanical seals for water pumps from Sealventures. Being an OEM, we need consistent quality, and they have never disappointed us. Their pricing is much better than big MNC brands, yet the finishing and packing are top-class. If you want a hassle-free supply, go for them." },
  { name: "Aftab Shaikh", role: "Industrial Supplier, Mumbai", text: "I ordered Tungsten Carbide (TC) and Silicon Carbide seal faces from them, and the quality is genuine. The surface finish and flatness meet international standards, which is hard to find in the local market. They maintain good stock for spare parts, making them a reliable partner for heavy-duty applications." },
  { name: "Shahid Chowdhury", role: "Workshop Owner, Kolkata", text: "A very professional company. I needed a specific component seal for an old pump which was not available anywhere, and Sealventures provided the exact match. The rubber bellows and springs used are of high quality, and it has been 6 months with no complaints. Thanks to the team for the quick support." },
];

export const CERTIFICATES = [
  { title: "ISO 9001:2015", img: "/img/certificate/ISO 9001-2015.jpg" },
  { title: "INCORPORATION", img: "/img/certificate/INCORPORATION.jpg" },
  { title: "IMPORTER-EXPORTER CODE", img: "/img/certificate/IMPORTET-EXPORTER CODE.jpg" },
  { title: "QUALITY POLICY", img: "/img/certificate/QUALITY POLICY.png" },
  { title: "GST", img: "/img/certificate/GST.jpg" },
  { title: "GST", img: "/img/certificate/GST 2.jpg" },
  { title: "PTRC", img: "/img/certificate/PRTC.jpg" },
  { title: "ESIC", img: "/img/certificate/ESIC.jpg" },
];

export const OVERVIEW_FEATURES = [
  { id: "item1", num: "01", title: "High-Tech Sealing System", img: "/img/overview/1.png", paras: ["Sealventures leads industrial innovation with High-Tech Sealing System, producing high-performance precision mechanical seals, elastomers, and polymers. With strong expertise in materials technology and rigorous quality control, the company delivers reliable fluid sealing solutions that protect equipment and enhance operational efficiency.", "Backed by years of engineering experience and R&D, Sealventures designs intelligent, wear-resistant, and chemically compatible solutions for demanding industries such as petrochemicals, pharmaceuticals, aerospace, and heavy machinery."] },
  { id: "item2", num: "02", title: "Preeminence manufacturing process", img: "/img/overview/2.jpg", paras: ["Sealventures India is a leading provider of high-quality sealing systems, characterized by exceptionally high precision, done strictly in accordance with global standards like API, ANSI, ASME, and DIN.", "The inspection process is comprehensive, using sophisticated equipment capable of detecting deviations as low as 2 microns. Cleaning is performed in sterile conditions, ensuring seal face accuracy within 1–2 helium-light bands."] },
  { id: "item3", num: "03", title: "Global Standards", img: "/img/overview/3.png", paras: ["We committed to delivering customized solutions according to the distinct operational demands of different industries. When cutting-edge sealing solutions meet exclusive knowledge of different industries, it leads to bespoke solutions at Sealventures India.", "With its emphasis on both innovation and quality, Sealventures India is able to modify and develop its solutions to suit the demands of emerging industrial challenges."] },
  { id: "item4", num: "04", title: "Customized Solutions", img: "/img/overview/4.png", paras: ["We committed to delivering customized solutions according to the distinct operational demands of different industries, increasing efficiency, longevity, and safety.", "Its emphasis on personalization and quality makes this firm stand out as a reliable provider in its field."] },
  { id: "item5", num: "05", title: "Constant Development", img: "/img/overview/5.png", paras: ["Sealventures continues to be committed to its vision of Constant development and has honed its technological expertise and procedures in order to satisfy the increasing demands of its industry.", "Involving investments in innovative research projects, adopting the latest trends in the manufacturing process, and establishing partnerships, Sealventures improves the innovation process."] },
  { id: "item6", num: "06", title: "Worldwide Sales and Services", img: "/img/overview/6.png", paras: ["We boast an excellent worldwide sales and service network that makes its state-of-the-art industrial sealing solutions readily accessible in every major region of the globe through offices and distribution channels across major regions."] },
  { id: "item7", num: "07", title: "Establishments Heritage", img: "/img/overview/7.png", paras: ["Since its establishment, the Sealventures brand has upheld an excellent record of technical mastery and inventiveness in the field of industrial sealing technologies.", "Through constant innovation and advancements in material science, Sealventures has expanded its technical expertise over time."] },
  { id: "item8", num: "08", title: "Proficient Workforce", img: "/img/overview/8.png", paras: ["At Sealventures, our staff's expertise and commitment are the key to our success. Our skilled engineers, technicians, and quality specialists are in charge of making sure that every mechanical seal and component is designed and manufactured with the utmost precision and quality."] },
  { id: "item9", num: "09", title: "A Focus On Sustainability", img: "/img/overview/9.png", paras: ["Sealventures is totally dedicated to embracing all facets of sustainability as we assist our clients in discovering sustainable solutions. By reducing environmental impact through creative materials, energy-efficient manufacturing, and stringent lifecycle management, we integrate sustainability into every aspect of our business."] },
  { id: "item10", num: "10", title: "Our Strategy", img: "/img/overview/10.png", paras: ["Our aim is to lead the world in mechanical and technical engineering and be known for our superior control, efficiency, and planning. Our goal is to provide creative, dependable sealing solutions that promote operational excellence while putting sustainability, safety, and environmental stewardship first."] },
  { id: "item11", num: "11", title: "Operating approach", img: "/img/overview/11.jpg", paras: ["Working responsibility matters greatly to us at Sealventures India. Our operating approach is defined by an unwavering commitment to responsibility, integrity, and excellence in every aspect of our work.", "Protecting the communities in which we operate remains central to our mission, guided by transparency and accountability."] },
  { id: "item12", num: "12", title: "Our People", img: "/img/overview/12.png", paras: ["The key to our success at Sealventures is our workforce, which is diverse and has expertise in engineering, project management, and leadership.", "We foster a culture of cooperation, flexibility, and ongoing development under the direction of an innovative leadership group."] },
];
