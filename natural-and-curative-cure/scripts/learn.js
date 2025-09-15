// learn.js - Dynamic rendering for Learn page herbs
// Style and format matches store.js and site theme

document.addEventListener('DOMContentLoaded', () => {
  // helper: create a URL-friendly slug from a name (used for linking to shop anchors)
  function slugify(text) {
    return text.toString().toLowerCase()
      .trim()
      .replace(/[\s\_]+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  }

  const herbs = [
    {
      name: "Irish Moss (Chondrus crispus)",
  image: "imgs/irish-moss-2.webp",
      bio: "Irish moss is a mineral-rich red seaweed that supports mucosal and immune health, with antiviral, anti-inflammatory and prebiotic properties used to support herpes, autoimmune inflammation (e.g., lupus), diabetes-related metabolic balance and skin health.",
      uses: [
        "Supports thyroid & mineral balance",
        "Strengthens immune and antiviral response",
        "Aids gut health and digestion (prebiotic)",
        "Helps manage blood sugar and cholesterol",
        "Soothes skin and supports healing"
      ],
      benefit: "immunity",
      caution: "High in iodine — avoid excess use if pregnant or on thyroid medication."
    },
    {
      name: "Sutherlandia (Cancer Bush)",
  image: "imgs/Lessertia_frutescens_1.webp",
      bio: "Sutherlandia is a South African tonic herb used traditionally during chronic illness — known for immune-modulating and anti-inflammatory properties to support energy, recovery and infection resistance.",
      uses: [
        "Modulates immune response (support for chronic illness)",
        "Calms inflammation and oxidative stress",
        "May aid blood sugar balance",
        "Supports appetite and energy during recovery",
        "Shows antiviral/antimicrobial activity in lab studies"
      ],
      benefit: "immunity",
      caution: "Contains L-canavanine — avoid if you have lupus/autoimmune conditions or during pregnancy; consult before using with ARVs."
    },
    {
      name: "Moringa oleifera (Miracle Tree)",
  image: "imgs/moringa-870x455.webp",
      bio: "Moringa is nutrient-dense and antioxidant-rich; used to boost immunity, regulate blood sugar, reduce inflammation and improve recovery and skin health.",
      uses: [
        "Helps regulate blood sugar (diabetes support)",
        "Reduces inflammation and oxidative stress",
        "Boosts immunity and energy",
        "Supports heart and cholesterol health",
        "Promotes wound healing and skin care"
      ],
      benefit: "metabolic health",
      caution: "Can lower blood sugar and blood pressure; monitor if on medication and avoid high doses in pregnancy."
    },
    {
      name: "Nigella sativa (Black Seed)",
  image: "imgs/Nigella_ sativa.webp",
      bio: "Black Seed (Nigella) is a traditional immune and metabolic tonic rich in thymoquinone, used for antiviral support, inflammation control and blood sugar balance.",
      uses: [
        "Boosts immunity and antiviral response",
        "Helps regulate blood sugar (diabetes support)",
        "Reduces inflammation and autoimmune flare-ups",
        "Supports respiratory health (asthma/allergies)",
        "Promotes liver and heart protection"
      ],
      benefit: "immunity",
      caution: "May lower blood sugar and blood pressure; avoid high doses during pregnancy."
    },
    {
      name: "Artemisia annua (Sweet Wormwood)",
  image: "imgs/sweet-wormwood-artemisia-annua-primary-v2.webp",
      bio: "Artemisia annua is the natural source of artemisinin (antimalarial); traditionally used for fevers and infections and studied for antiviral and anti-inflammatory activity.",
      uses: [
        "Powerful antimalarial support (artemisinin source)",
        "Shows antiviral activity in studies",
        "Reduces inflammation and oxidative stress",
        "Traditionally used for fevers and infections",
        "Investigated for anticancer potential in labs"
      ],
      benefit: "immunity",
      caution: "Not a replacement for prescribed malaria/HIV drugs; avoid during pregnancy and high doses due to possible liver toxicity."
    },
    {
      name: "Artemisia afra (African Wormwood)",
  image: "imgs/Artemisia afra (African Wormwood).avif",
      bio: "African Wormwood (Umhlonyane) is a trusted African herb for respiratory support, infections and immune boosting with antimicrobial and anti-inflammatory properties.",
      uses: [
        "Fights viral and bacterial respiratory infections",
        "Boosts immunity and reduces inflammation",
        "Relieves coughs, asthma and chest congestion",
        "Supports digestion and helps fight parasites",
        "Provides antioxidant protection"
      ],
      benefit: "immunity",
      caution: "Potent herb — avoid prolonged/high use in pregnancy."
    },
    {
      name: "Hypoxis hemerocallidea (African Potato)",
  image: "imgs/Hypoxis hemerocallidea (African Potato).webp",
      bio: "African Potato is a South African medicinal plant valued as an immune tonic with anti-inflammatory and antioxidant activity, traditionally used in HIV, cancer support and metabolic health.",
      uses: [
        "Strengthens immune system in chronic illness",
        "Reduces inflammation and joint pain",
        "Supports healthy blood sugar",
        "Provides antioxidant cell protection",
        "May support prostate and urinary health"
      ],
      benefit: "immunity",
      caution: "May interact with some medications; consult before use."
    },
    {
      name: "Turmeric (Curcuma longa)",
  image: "imgs/Curcuma_longa_roots.webp",
      bio: "Turmeric is a well-studied anti-inflammatory spice (curcumin) used to reduce inflammation, support metabolic health and protect cells.",
      uses: [
        "Reduces inflammation (autoimmune support)",
        "Supports metabolic & liver health",
        "Provides antioxidant protection",
        "May support joint and skin health",
        "Studied for anticancer effects"
      ],
      benefit: "inflammation",
      caution: "High doses may upset stomach or interact with blood thinners."
    },
    {
      name: "Neem Leaves (Azadirachta indica)",
  image: "imgs/Neem_tree_leaves.webp",
      bio: "Neem leaf is a traditional antimicrobial and immune-support herb used for infections, skin issues and metabolic support.",
      uses: [
        "Antibacterial and antifungal action",
        "Supports blood sugar control",
        "Immune-support for chronic infections",
        "Promotes skin health and wound care",
        "Supports liver detoxification"
      ],
      benefit: "immunity",
      caution: "Not recommended in pregnancy; consult on dosing if on medication."
    },
    {
      name: "Phyllanthus niruri (Stonebreaker)",
  image: "imgs/mediumPhyllanthus niruri (Stonebreaker).webp",
      bio: "Phyllanthus is a traditional herb for liver and kidney health with antiviral activity in lab studies (hepatitis, herpes) and supportive metabolic effects.",
      uses: [
        "Supports liver health and hepatitis care",
        "Shows antiviral activity (hepatic viruses, herpes in labs)",
        "Helps dissolve kidney stones historically",
        "Supports blood sugar balance",
        "Provides antioxidant and anti-inflammatory action"
      ],
      benefit: "liver/antiviral",
      caution: "Avoid during pregnancy; check interactions with medications."
    },
    {
      name: "Peppermint",
  image: "imgs/Pfefferminze_natur_peppermint3.webp",
      bio: "Peppermint soothes digestion, clears sinuses and eases headaches — a gentle supportive herb for symptom relief.",
      uses: [
        "Soothes digestion and reduces bloating",
        "Relieves headaches and tension",
        "Clears sinuses and eases congestion",
        "Calms nausea",
        "Topical relief for itch or mild skin irritation"
      ],
      benefit: "digestion",
      caution: "May trigger acid reflux in sensitive individuals."
    }
    // ... add more herbs as needed ...
  ];

  const container = document.getElementById('herbsContainer');
  const searchInput = document.getElementById('fruit-search');

  // render function (adds an id so Shop can target this herb via hash)
  function renderHerbs(list) {
    container.innerHTML = "";
    if (list.length === 0) {
      container.innerHTML = "<p>Seems the herbs not on the list, contact us and we'll get it to you!.</p>";
      return;
    }

    list.forEach(herb => {
      const slug = slugify(herb.name);
      const card = document.createElement('div');
      card.className = 'herb-card';
      card.id = `herb-${slug}`;
      card.innerHTML = `
        <img src="${herb.image}" alt="${herb.name}" class="herb-image" />
        <div class="herb-info">
          <h2>${herb.name}</h2>
          <p>${herb.bio}</p>
          <ul class="herb-uses">
            ${herb.uses.map(use => `<li>${use}</li>`).join('')}
          </ul>
          <div class="herb-buttons">
            <a class="btn-interested" href="shop.html#herb-${slug}">I'm Interested</a>
          </div>
          <div class="herb-caution">
            ⚠️ <small>${herb.caution}</small>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function filterHerbs() {
    const searchTerm = (searchInput && searchInput.value) ? searchInput.value.toLowerCase() : '';
    const filtered = herbs.filter(herb => {
      return (
        herb.name.toLowerCase().includes(searchTerm) ||
        herb.bio.toLowerCase().includes(searchTerm) ||
        herb.uses.some(use => use.toLowerCase().includes(searchTerm))
      );
    });
    renderHerbs(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterHerbs);

  // initial render
  renderHerbs(herbs);
});
