var map = L.map('map', {
    center: [20, 0],
    zoom: 2,
    maxBounds: [[-90, -180], [90, 180]],
    maxBoundsViscosity: 1.0,
    worldCopyJump: true
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: ' © OpenStreetMap'
}).addTo(map);

function addPin(lat, long, person) {
    var marker = L.marker([lat, long]).addTo(map);
    marker.on('mouseover', function (e) {
        this.bindTooltip(person.name, { direction: 'right'}).openTooltip();
    });
    marker.on('mouseout', function (e) {
        this.unbindTooltip();
    });
    marker.on('click', function () {
        updateProfileCard(person);
        toggleProfileCard(true);
    });
}

function updateProfileCard(person) {
    var profileCard = document.querySelector('.profile-card');
    profileCard.innerHTML = `<h2 class="profile-name">${person.name}</h2>
                              <img src="${person.image}" alt="Profile Picture" class="profile-picture">
                              <div class="profile-info">
                                <p>${person.fullText}</p>
                                <div class="close-btn" onclick="toggleProfileCard(false)">Close</div>
                              </div>`;
}

function toggleProfileCard(show) {
    var profileCard = document.querySelector('.profile-card');
    if (show) {
        profileCard.classList.add('active');
        document.getElementById('map-container').style.width = '50%';
    } else {
        profileCard.classList.remove('active');
        document.getElementById('map-container').style.width = '100%';
    }
}

var people = [
    {
        name: "Ada Lovelace",
        summary: "Considered the first computer programmer.",
        fullText: "Ada Lovelace, often regarded as the world's first computer programmer, left an indelible mark on the history of computing despite living in the 19th century. Born in 1815, Lovelace possessed a keen intellect and a passion for mathematics, which she inherited from her mother, Lady Byron. Her collaboration with Charles Babbage, the inventor of the Analytical Engine, led to her groundbreaking work on the machine's potential capabilities, where she wrote the first algorithm intended to be processed by a machine. This visionary insight earned her the title of the Prophet of the computer age.<br><br>Lovelace's contributions extended beyond her seminal work on the Analytical Engine. She recognized the machine's potential applications beyond mere calculation, envisioning its ability to manipulate symbols and create music, graphics, and even produce complex scientific computations. Her foresight laid the foundation for modern computing and inspired subsequent generations of programmers and innovators. Despite the societal constraints placed on women in her time, Lovelace's intellect and curiosity propelled her to defy convention and explore the frontiers of technology.<br><br>Although her achievements were not fully recognized until long after her death, Lovelace's legacy looms large in the world of computing. The programming language Ada, named in her honor, pays homage to her pioneering work and serves as a fitting tribute to her contributions to the field. Ada Lovelace's story serves as a testament to the power of imagination and intellect to transcend the limitations of one's era and shape the course of history. Her visionary insights continue to inspire and inform the ongoing evolution of technology, reminding us of the debt we owe to those who dare to dream beyond the confines of convention.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fMYVa_ec740UfR4q6tUi5wHaHa%26pid%3DApi&f=1&ipt=9d9cd54a7aecf6348f0be4571de4542cca3433670139d50f5062a8e0d48f2a19&ipo=images",
        lat: 51.5074,
        long: -0.1278
    },
    {
        name: "Marie Curie",
        summary: "First woman to win a Nobel Prize.",
        fullText: "Marie Curie, a trailblazing physicist and chemist, made groundbreaking discoveries in the field of radioactivity, pioneering research that laid the foundation for modern atomic physics and chemistry. Born in 1867 in Poland, Curie's relentless pursuit of knowledge led to her discovery of the elements polonium and radium, as well as her development of the theory of radioactivity. Her pioneering work earned her two Nobel Prizes, making her the first woman to win Nobel Prizes in two different fields—Physics and Chemistry. Curie's contributions to science continue to inspire scientists around the world, and her legacy serves as a testament to the power of curiosity, perseverance, and dedication in the pursuit of scientific understanding.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.assets.pressassociation.io%2F2017%2F11%2F07085248%2Fb2a8cb37-2791-43a4-ad92-839d590181be.jpg&f=1&nofb=1&ipt=7f68f62c8f998ab07634995bd78d7f2e479476ffc76bdccaf187bbe7d1ae1f0d&ipo=images",
        lat: 48.8566,
        long: 21.0122
    },
    {
        name: "Rachel Carson",
        summary: "Evironmental Scientist.",
        fullText: "Rachel Carson, a pioneering marine biologist and environmentalist, played a seminal role in raising awareness about the dangers of chemical pesticides and advocating for environmental conservation. Born in 1907, Carson's groundbreaking book 'Silent Spring' ignited a global environmental movement by exposing the harmful effects of pesticides, particularly DDT, on ecosystems and human health. Her work led to increased public scrutiny of pesticide use and ultimately contributed to the establishment of environmental protection agencies and regulations worldwide. Carson's legacy as a scientist and writer continues to inspire generations of environmentalists to protect and preserve the natural world for future generations.",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Frachel-carson-1.png&f=1&nofb=1&ipt=48f5816733f2d222dd81e7d80fba1d14f27889ee60dcef6b0c8ea62f424595a8&ipo=images",
        lat: 40.2732,
        long: -76.8867
    },
    {
        name: "Katherine Johnson",
        summary: "Evironmental Scientist.",
        fullText: "Katherine Johnson, a pioneering mathematician, played a pivotal role in the success of NASA's early space missions. Born in 1918, she faced significant racial and gender barriers throughout her career but overcame them with her exceptional talent. Johnson's groundbreaking work involved calculating trajectories, launch windows, and emergency return paths for numerous missions, including the historic Apollo 11 moon landing in 1969. Her precise calculations were instrumental in ensuring the safety and success of astronauts like John Glenn, making her an unsung hero of the Space Race.<br><br>Johnson's contributions extended beyond her crucial calculations. She provided invaluable insights into orbital mechanics, helping to refine NASA's understanding of spaceflight dynamics. Despite the discrimination she faced as an African American woman in a predominantly white, male field, Johnson's dedication and expertise earned her the respect of her colleagues and paved the way for future generations of women in STEM. Her legacy continues to inspire aspiring scientists and mathematicians worldwide, highlighting the importance of perseverance and excellence in the face of adversity.<br><br>In 2015, Johnson's achievements received long-overdue recognition when President Barack Obama awarded her the Presidential Medal of Freedom. This prestigious honor underscored her immense contributions to space exploration and her role in advancing the frontiers of human knowledge. Katherine Johnson's story serves as a reminder of the importance of diversity and inclusion in scientific endeavors and stands as a testament to the power of determination and intellect to break down barriers and reach for the stars.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmediad.publicbroadcasting.net%2Fp%2Fshared%2Fpmp%2Fstyles%2Fx_large%2Fpmpshared%2F202002%2F3d4e85b8-4629-463a-aa17-c914e86a770f.jpg&f=1&nofb=1&ipt=8b722f7f82d5e372f8f0ec692387bc2226fdef8541857d52851d5df7b75b3106&ipo=images",
        lat: 38.59762620,
        long: -80.45490260
    },
    {
        name: "Radia Perlman",
        summary: "Evironmental Scientist.",
        fullText: "Radia Perlman, often dubbed the -Mother of the Internet-, revolutionized computer networking with her invention of the spanning-tree protocol (STP). Born in 1951, Perlman's brilliance in mathematics and computer science propelled her to a series of groundbreaking innovations that laid the groundwork for modern networking technologies. Her STP algorithm enabled the creation of robust and scalable Ethernet networks, ensuring efficient data transmission and preventing network loops—a problem that had plagued early network architectures.<br><br>Perlman's contributions to computer networking extended far beyond the STP algorithm. She played a key role in the development of the Internet's architecture, contributing to the design of key protocols and standards that underpin its functionality today. Her work on secure and efficient routing protocols has had a profound impact on the reliability and security of networked systems, shaping the way we communicate, collaborate, and share information in the digital age.<br><br>Despite operating in a male-dominated field, Perlman's expertise and innovation earned her widespread recognition and respect. She has received numerous awards and honors for her contributions to computer science, including inductions into the National Inventors Hall of Fame and the Internet Hall of Fame. Perlman's legacy as a trailblazing engineer and inventor continues to inspire generations of technologists, highlighting the transformative power of perseverance, creativity, and intellect in shaping the future of technology. Her pioneering work remains foundational to the functioning of the modern Internet, ensuring its reliability, scalability, and security for billions of users worldwide.",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.engineering.ucl.ac.uk%2Fwp-content%2Fuploads%2F2012%2F12%2FRadiaedit.jpg&f=1&nofb=1&ipt=30cd449efdb95df7ab044396f39118b92ef535a2c43e19dbf8756e6fe6b14cd6&ipo=images",
        lat: 37.926868,
        long: -78.024902
    },
    {
        name: "Joan Clarke",
        summary: "Evironmental Scientist.",
        fullText: `<p>Joan Clarke, a remarkable mathematician and cryptanalyst, emerged as a key figure in the history of codebreaking during World War II. Born in 1917, Clarke's mathematical talent was evident from an early age, leading her to pursue studies in mathematics at Cambridge University. Despite facing gender discrimination in the male-dominated field of cryptography, Clarke's intellect and problem-solving skills soon earned her a position at Bletchley Park, the top-secret British codebreaking center. There, she became a <strong>vital member of the team working to decrypt German Enigma machine codes</strong>, collaborating closely with renowned codebreaker Alan Turing.</p>


<p>Clarke's sustainable approach to code was characterized by her innovative techniques and collaborative spirit. Recognizing the urgency and complexity of their task, Clarke and her colleagues devised ingenious methods for deciphering the seemingly unbreakable Enigma codes. Her mathematical prowess and keen analytical skills were instrumental in uncovering crucial intelligence that played a significant role in Allied victories during the war. Despite the challenges and pressures of wartime secrecy, <strong>Clarke's dedication to her work remained unwavering</strong>, setting a standard for excellence in cryptography that continues to inspire generations of codebreakers and computer scientists.</p>


<p>After the war, Clarke's contributions to codebreaking remained largely unrecognized until decades later, reflecting the broader societal barriers faced by women in STEM fields. However, her legacy has since been rightfully acknowledged, with historians and scholars highlighting her invaluable role in the Allied victory and her pioneering contributions to the field of computer science. Clarke's sustainable code not only facilitated the decryption efforts during World War II but also laid the groundwork for modern encryption techniques and computer systems. Her story serves as a powerful reminder of the importance of diversity and inclusion in the pursuit of technological innovation and underscores the enduring impact of women in STEM.</p>`


,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falchetron.com%2Fcdn%2Fjoan-clarke-92b64d6b-2f25-45c9-ae14-fd055e5ee47-resize-750.jpeg&f=1&nofb=1&ipt=edf5b796632ea0aa88f9e9eb1d6cc8d83aeb8fb51bb38f222c946988325973cc&ipo=images",
        lat: 48.8566,
        long: 2.3522
    },
    {
        name: "Roberta Bondar",
        summary: "Evironmental Scientist.",
        fullText: "Roberta Bondar, a Canadian astronaut, neurologist, and researcher, made history in 1992 as the first Canadian woman to fly in space aboard the Space Shuttle Discovery. Born in 1945, Bondar's journey to space was the culmination of years of dedication to both science and adventure. During her mission, she conducted numerous experiments focusing on the effects of space travel on the human body and on Earth's environment. Bondar's groundbreaking achievements have inspired countless individuals, particularly women, to pursue careers in science and exploration. Beyond her astronautical endeavors, Bondar is an accomplished photographer and author, capturing the beauty of Earth from space and sharing her insights on the interconnectedness of life on our planet.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcmnnews.ca%2Fwp-content%2Fuploads%2F2017%2F03%2FPhoto-Dr.-Roberta-Bondar-NASA-1992-Portrait-1068x1267.jpg&f=1&nofb=1&ipt=daf51810a72ca578ecc50831b6a6ba9dd4780c2bef7f8e99d7ab0f622ab44d47&ipo=images",
        lat: 42.9849,
        long: -81.2453
    },
    {
        name: "Chien-Shiung Wu",
        summary: "Evironmental Scientist.",
        fullText: "Chien-Shiung Wu, a groundbreaking Chinese-American physicist, made significant contributions to the fields of nuclear physics and experimental science. Born in 1912, Wu's research on beta decay and parity violation in weak interactions played a pivotal role in shaping our understanding of fundamental particles and symmetries in the universe. Her experiments, including the famous 'Wu Experiment,' provided experimental evidence that contradicted theoretical predictions, challenging prevailing assumptions in the physics community and paving the way for future discoveries. Despite facing discrimination as a woman and as an immigrant, Wu's intellect, perseverance, and dedication to science earned her numerous accolades and recognition, including the National Medal of Science in 1975. Her legacy continues to inspire generations of scientists, particularly women and minorities, to pursue careers in STEM fields and push the boundaries of human knowledge.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F56%2F21456-050-E0F6BDA6%2FChien-Shiung-Wu-1957.jpg&f=1&nofb=1&ipt=d1e1421a5a9d73428731f9acd9060ef14fa3230e8c2d05a59b6555f4c9a3fd00&ipo=images",
        lat: 48.8566,
        long: 118.7969
    },
    {
        name: "Janaki Ammal",
        summary: "Evironmental Scientist.",
        fullText: "Janaki Ammal, a pioneering Indian botanist and cytogeneticist, made significant contributions to the fields of plant taxonomy and genetics. Born in 1897, Ammal's research focused on the cytogenetics of sugarcane and other important crop plants, shedding light on their genetic diversity and breeding potential. Her work on the origin and evolution of species enriched our understanding of plant biodiversity and paved the way for improved agricultural practices. Ammal's scientific achievements were complemented by her advocacy for conservation and the protection of indigenous plant species. Her legacy continues to inspire future generations of botanists and environmentalists in India and beyond, highlighting the importance of biodiversity conservation and sustainable agriculture.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kaFsOthgkmXYDwXiVjHWEQHaKR%26pid%3DApi&f=1&ipt=b6b6dab9c6841191e2f288d25273d584c4ae77cd36bc11d77f20c77947bd2071&ipo=images",
        lat: 11.7480,
        long: 75.4890
    },
   
];


people.forEach(person => addPin(person.lat, person.long, person));