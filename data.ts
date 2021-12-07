import { RiMap2Fill, RiComputerLine } from 'react-icons/ri'
import { BsPeople, BsHouseDoor, BsCircleFill, BsChatLeftDots } from 'react-icons/bs'
import { BiTrendingUp } from 'react-icons/bi'
import { Iproarc, IService, Iskill } from './type';


export const services: IService[] = [
    {
        Icon: RiMap2Fill,
        title: "Physical Planning",
        about: "Expertise in <b> quantitative and qualitative approaches </b> to urban planning."

    },
    {
        Icon: BiTrendingUp,
        title: "Economic Strategies",
        about: "Inspection on multiple <b>economic topics</b>, which generates solutions and proposals",
    },
    {
        Icon: BsHouseDoor,
        title: "Heritage Conservation",
        about: "Proficiency in <b>heritage impact assessment</b> and application of <b> mitigation measures</b>.",
    },
    {
        Icon: RiComputerLine,
        title: "Analytic Skills",
        about: "Mastery in analysis software to conduct <b> statistical, economic, and geospatial investigations</b>. ",
    },
    {
        Icon: BsPeople,
        title: "Stakeholder Management",
        about: "Experience in <b>coordination, negotiation, and facilitation</b> among a range of stakeholders.",
    },
    {
        Icon: BsChatLeftDots,
        title: "Communication and Collaboration",
        about: "Years of studio experience...they surely had equipped me with the capability to negotiate effectively!",
    },



]

export const Skillset: Iskill[] = [
    {
        name: 'Arcgis & Qgis',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'Adobe Suites',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'Microsoft Office Suites',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'R programming language ',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'AutoCAD',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'SketchUp',
        level: '70%',
        Icon: BsCircleFill
    },
]

export const language: Iskill[] = [
    {
        name: 'Mandarin',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'English',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'Taiwanese',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Spanish',
        level: '30%',
        Icon: BsCircleFill
    },
]

export const proarc: Iproarc[] = [
    {
        id: 1,
        name: "Pasir Panjang",
        description: "This is the first article on <b>Medium</b> that marks the commencement of my urban exploration in Singapore. <br/><br/>Starting from 2020, during which the pandemic had created turbulence in our lives, I, on one day, told myself to record what I have observed and experienced in this country so that it would help sort out my conflicted sentiment of Singapore.<br/><br/>In addition, the articles are shared with my Taiwanese friends to depict Singapore in different narratives and insights. Thus, to them, Singapore is not only the superficial impression such as Marina Bay Sands, Sentosa, or whatnot. This beautiful island, sometimes mysterious to outsiders, deserves people to understand its uniqueness. ",
        image_path: "/images/1.png",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/1-pasir-panjang-797c44386192",
        category: ["Articles"],
        key_techs: ["Singapore", "West", "Urban Exploration"],
    },
    {
        id: 2,
        name: "Orchard Road",
        description: "Rather than the nowadays high-end boutique shopping street, Orchard Road was once a large parcel of agricultural land. <br/><br/>Throughout the development timeline, more and more shopping malls have occupied both sides of the avenue, which turned into a well-known tourist attraction and formed a fantasy bubble.<br/><br/>I would say it is a parallel universe compared to the rest of Singapore as people here will indulge themselves in the world built by consumerism. This characteristic also reflects on the interaction of architectural elements.",
        image_path: "/images/2.png",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/2-orchard-road-1f60bce4e9b7",
        category: ["Articles"],
        key_techs: ["Singapore", "Central", "Urban Exploration"],
    },
    {
        id: 3,
        name: "Golden Mile Tower & Complex",
        description: "Gazetted as a conserved building in October 2021, Golden Mile Complex is free from being demolished. The conservation news has also inspired a series of discussions on 'What kind of building should we conserve in Singapore?'<br/><br/> To avoid overemphasis on colonial-era architecture, the government and scholars have worked together to promote the conservation of Modernist Architecture erected since Singapore's independence. The retaining of the Golden Mile Complex marks the starting point for the movement, and in the future, more and more Modernist buildings that represent Singapore's story can be conserved.<br/><br/>The article also illustrates the vigorous activities within this architecture, particularly depicting a rich blend of Thai workers' lifestyles.",
        image_path: "/images/3.png",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/3-golden-mile-tower-complex-3f2053715430",
        category: ["Articles"],
        key_techs: ["Singapore", "Central", "Urban Exploration"],
    },
    {
        id: 4,
        name: "Kampong Lorong Buangkok",
        description: "The last kampong in Singapore.<br/><br/> <b>Kampong</b> means village in Malay, and it was the primary format of living before the establishment of the Housing Development Board (HDB). Residents in kampongs were often seen as squatters which the authority was wary of creating a bad image of Singapore.  Ergo, the villages had been gradually demolished, and people were asked to reside in HDB flats. The organic lifestyles cultivated in this particular setting started to disappear.<br/><br/> Weirdly, lots of plans and designs are now aiming to gain back 'kampong spirit' in the communities...",
        image_path: "/images/4.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/4-kampong-lorong-buangkok-7f99438388f6",
        category: ["Articles"],
        key_techs: ["Singapore", "North-East", "Urban Exploration"],
    },
    {
        id: 5,
        name: "Siam Diu in SG",
        description: "A profound memory of my 23rd Birthday. <br/><br/> My Singaporean friend invited me to Siam Diu (Thailand Disco). All the feelings and experiences are fresh and exciting, my weak alcohol tolerance notwithstanding. I was completely exposed to a different culture that is under the surface of Singapore's society.",
        image_path: "/images/5.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/5-siam-diu-in-sg-8fd50b8de01f",
        category: ["Articles"],
        key_techs: ["Singapore", "Night Life", "Urban Exploration"],
    },
    {
        id: 6,
        name: "Holland Village",
        description: "Yes, I am trying to visit Holland Village not only for drinks but also for different exploration!<br/><br/>When it comes to the name, people often picture a windmill in Holland Village, or the village comprises mainly of the Dutch population.<br/><br/>Well... it is not. And interestingly, it is said to be relevant to architecture!",
        image_path: "/images/6.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/6-holland-village-c4d8472960cf",
        category: ["Articles"],
        key_techs: ["Singapore", "Night Life", "Central", "Urban Exploration"],
    },
    {
        id: 7,
        name: "Tiong Bahru",
        description: "Growing up in Taipei where people can be easily exposed to lots of art and cultural events. That is why I found it frustrating at first in Singapore since I struggled to engage in similar activities. Luckily, Tiong Bahru catches my eye. <br/><br/>Some people criticize Singapore as the desert of culture and arts, and I might disagree to a certain extent, for Tiong Bahru is one of the districts with abundant activities going on. It is a must-go place for not only heritage building lovers but also artsy fans.",
        image_path: "/images/7-1.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/7-tiong-bahru-bb1856774073",
        category: ["Articles"],
        key_techs: ["Singapore", "Central", "Urban Exploration"],
    },
    {
        id: 8,
        name: "Haw Par Villa",
        description: "The most bizarre (though the cutest in my view) amusement park in Singapore. Full of scary sculptures, the park intended to encourage people to do good deeds to avoid karma. Well...you see, they are perfect for memes.<br/><br/>Enough for jokes; now comes the difficulties. Painting and sculpting are professional technics. However, the artisans are facing a crisis as fewer people are willing to inherit the skills. Another dilemma lies in the sustainable operation of the park, as the number of visitors has been stagnant. ",
        image_path: "/images/8.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/haw-par-villa-933ceb6d5df9",
        category: ["Articles"],
        key_techs: ["Singapore", "West", "Urban Exploration"],
    },
    {
        id: 9,
        name: "Geylang",
        description: "A district with full of wonderful surprises.<br/><br/>While walking along a row of shophouses, you might wonder what activities are happening inside the building. Then, you find yourself distracted because of the smell from the local delicacy shop. You might devour the frog porridge, followed by durians, and after that, you feel a need to take a walk after making a loud burp.<br/><br/>How is this district stigmatized? After witnessing the most lively lifestyle here, the question may haunt you for a while.",
        image_path: "/images/9.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/9-geylang-2e5b80dcaeab",
        category: ["Articles"],
        key_techs: ["Singapore", "Central", "Urban Exploration"],
    },
    {
        id: 10,
        name: "Istana Woodnuek",
        description: "A wild adventure in the abandoned palace.<br/><br/> Knowing this place from a friend who loves doing ruins photography, I was so exhilarated that I planned a trip right away. Sitting beside the downtown where lots of skyscrapers and HDB dominate the land, Istana Woddnuek seemed to freeze the time and take us back to the good old days...",
        image_path: "/images/10.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/10-istana-woodnuek-eaf0da6e0d19",
        category: ["Articles"],
        key_techs: ["Singapore", "Central", "Urban Exploration"],
    },
    {
        id: 11,
        name: "Thomson Nature Park",
        description: "The first nature park that combines ecology and heritage conservation.<br/><br/> Though there is 'nature' in the name, the park is more than that. Along the journey, one can discover some ruins of the previous villages and picture how idyllic life was in the past.<br/><br/> Fun fact: one of the roads was once the racetrack for car racing and motorbike racing. But yeah, it is still different from the nowadays racetrack at Marina Bay for Singapore Grand Prix.",
        image_path: "/images/11.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/11-thomson-nature-park-3a7bede5b3dc",
        category: ["Articles"],
        key_techs: ["Singapore", "North", "Urban Exploration"],
    },
    {
        id: 12,
        name: "Southern Islands",
        description: "During the period when job hunting and the pandemic put turmoil in my life, I had been trying different ways to calm myself down. <br/><br/>Then...Boom! These islands in the south of Singapore look therapeutic and tranquil, which seemed the best place to relax. What was more, I could do an island hopping tour with one cruise ticket! The cruise sailed, and our stress had faded out for a while.<br/><br/>And I found it very weirdly amusing to see the sign written 'this island was once a quarantine island.'",
        image_path: "/images/12.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/12-southern-islands-37576505e8c7",
        category: ["Articles"],
        key_techs: ["Singapore", "South", "Urban Exploration"],
    },
    {
        id: 13,
        name: "Old Railways in Singapore",
        description: "Not a railfan, but always a yes when it comes to a rail hike.<br/><br/> Besides the on-site exploration, after the rail ceased operation, the story is even more dramatic, which involved Malaysia and Singapore's government fighting over the land. The conflict even became a lawsuit case that was later submitted to International Criminal Court.",
        image_path: "/images/13.jpeg",
        deployed_url: "https://medium.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%99%83%E6%82%A0%E6%89%8B%E6%9C%AD/13-old-railways-in-singapore-2e2668f7743e",
        category: ["Articles"],
        key_techs: ["Singapore", "Urban Exploration"],
    },
    {
        id: 14,
        name: "Bintain Island in Indonesia",
        description: "Economically collaborating with Indonesia's government, developers have built multiple resorts in the north of Bintan Island. Advertised as Singapore's backyard, the island promotes trips that enable tourists to experience more of the isle.<br/><br/>Based on my observation, most of the people rather stayed in the resort paradise. However, we were too curious about what was outside, so we decided to book an island tour. The minivan started to drive on the bumpy road...",
        image_path: "/images/14.jpeg",
        deployed_url: "https://yunann0803.medium.com/14-bintan-happy-new-year-63e5dc9609d2",
        category: ["Articles"],
        key_techs: ["Indonesia", "Urban Exploration"],
    },
    {
        id: 15,
        name: "Sentosa & Fort Serapong",
        description: "The island had a dark side of the story before Sentosa Resort came in, involving several massacres and a nearly extinct tribe.<br/><br/>This time we hopped on the hill and explored the abandoned fortress.",
        image_path: "/images/15.jpeg",
        deployed_url: "https://yunann0803.medium.com/15-sentosa-fort-serapong-36d0e7feca32",
        category: ["Articles"],
        key_techs: ["Singapore", "South", "Urban Exploration"],
    },
    {
        id: 16,
        name: "Paya Lebar Air Base Project",
        description: "(To be added)",
        image_path: "/images/16.jpg",
        deployed_url: "",
        category: ["Work Projects"],
        key_techs: ["Singapore", "Urban Design", "Urban Planning", "Heritage Study"],
    },
    {
        id: 17,
        name: "Bukit Timah Turf Club Project",
        description: "(To be added)",
        image_path: "/images/17.jpg",
        deployed_url: "",
        category: ["Work Projects"],
        key_techs: ["Singapore", "Architectural Study", "Heritage Conservation"],
    },
    {
        id: 18,
        name: "Dadaocheng Historical Special-use Zone Master Plan Review",
        description: "",
        image_path: "/images/18.jpg",
        deployed_url: "",
        category: ["Work Projects"],
        key_techs: ["Taiwan", "Master Plan Review", "Transfer of Development Rights", "Historic District Management"],
    },
    {
        id: 19,
        name: "INDUS++ in Paya Lebar Air Base",
        description: "(Aug.2019 - Apr.2020) <br/><br/>This project aimed to seek out the plan that brings in a new identity after the relocation of the air force. <br/><br/>Proposed the site to build up and upgrade the advantage of existing industries. By importing more diverse activities into the mixed-use districts, the notorious, polluted image of the industrial town would turn into a vibrant scene.<br/><br/>Hence, the plan will transform into a community that people and industries co-exist.",
        image_path: "/images/23.png",
        deployed_url: "https://drive.google.com/file/d/1CWBRlZqUdlZHWN1OVEYQysFWearv1pug/view?usp=sharing",
        category: ["Student Projects"],
        key_techs: ["Singapore", "Urban Planning", "Urban Design"],
    },
    {
        id: 20,
        name: "Greater One North Master Plan",
        description: "(Jan.2019 - May.2019)<br/><br/>Collaborated with JTC Corporation and International Forum on Urbanism (IFOU). This project aimed to generate an innovation cluster in one-north district, Singapore.<br/><br/>Through profoundly investigating the industrial chain, analyzing user groups and spatial relationships, a holistic plan was developed that integrates green and blue network systems with industrial development.",
        image_path: "/images/22.jpg",
        deployed_url: "",
        category: ["Student Projects"],
        key_techs: ["Singapore", "Urban Planning", "Urban Design"],
    },
    {
        id: 21,
        name: "Aljunied Master Plan Review",
        description: "(Mar.2019 - May.2019) <br/><br/>This project firstly conducted a thorough analysis which included land utilization, mobility, etc, and some issues were later identified and resolved. <br/><br/> Since Geylang is distinctive of its neighborhood activities and and particular community texture, many efforts were spent to discover its unique urban context and local lifestyles. <br/><br/> The final urban plan and design followed the analysis to preserve the essence and bring in new characteristics.",
        image_path: "/images/21.jpg",
        deployed_url: "https://drive.google.com/file/d/1GsMzlHNDmPnwt-OesGnmDXflzg-DMhwQ/view?usp=sharing",
        category: ["Student Projects"],
        key_techs: ["Singapore", "Master Plan Review", "Urban Planning", "Urban Design"],
    },
    {
        id: 22,
        name: "Light Up Shisizhang Development Plan",
        description: "(Sep.2015 - May.2016)<br/><br/>Proposed urban plans and targets for the greenfield development, and transformed the district into a resilient and vigorous neighbourhood.<br/><br/>The project focused on the infrastructural establishment and cultural conservation, both of which brighten up the district by importing new activities and industries, and at the same time retaining original lifestyles.",
        image_path: "/images/24.png",
        deployed_url: "https://drive.google.com/file/d/1w-41c-raL8GfApMUOMzPJEYp3sgndWe7/view?usp=sharing",
        category: ["Student Projects"],
        key_techs: ["Taiwan", "Urban Planning", "Development Plan"],
    },
    {
        id: 23,
        name: "The Master Plan Review of Former Military Maintenance Plant Area",
        description: "(Sep.2014 - May.2015) <br/><br/>The project carried out spatial and socio-economic analysis for the former military base, followed by utilizing statistical data to identify the issues and predict population and economic trends.<br/><br/>Land use and zoning plans were developed to convert the former base into a vibrant precinct accommodating diverse user groups in Taipei City.",
        image_path: "/images/23.jpg",
        deployed_url: "https://drive.google.com/file/d/1gmoQnIM192VoDxKcT6GhnV2WT7Tco4Fw/view?usp=sharing",
        category: ["Student Projects"],
        key_techs: ["Taiwan", "Master Plan Review", "Zoning Plan"],
    },

]