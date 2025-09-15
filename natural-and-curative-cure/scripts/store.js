// store.js: Dynamic herb listing, search, and filter for Store page

document.addEventListener('DOMContentLoaded', function() {
  const fruitContainer = document.getElementById('fruit-container');
  const searchInput = document.getElementById('fruit-search');
  const benefitFilter = document.getElementById('benefit-filter');

  // === HERBS ONLY (replaces fruits). Uses original 'fruits' variable name so your code works ===
  const fruits = [
    {
      id: 1,
      name: "Vernonia amygdalina (Bitter Leaf)",
      image: "imgs/Ha2XcQG3RDu5mXpqJgq4gn-1600-80.webp",
      description: "Bitter Leaf is a West African staple herb with evidence for antidiabetic, antimicrobial and anti-inflammatory effects.",
      benefits: ["Blood Sugar (Diabetes)", "Antimicrobial/Antimalarial", "Anti-inflammatory (Lupus)"],
      nutrients: { form: "Fresh leaves/decoction", dose: "Tea/decoction daily", safety: "Bitter; consult if on meds" },
      season: "Year-round",
    },
    {
      id: 2,
      name: "Irish Moss (Chondrus crispus)",
      image: "imgs/irish-moss-2.webp",
      description: "Mineral-rich red seaweed supporting mucosal immunity, antiviral defense, and metabolic balance.",
      benefits: ["Immunity/Antiviral (Herpes/HIV)", "Anti-inflammatory", "Gut & Metabolic Support"],
      nutrients: { form: "Dried gel/powder", dose: "1–2 tsp/day", safety: "High iodine; caution in thyroid issues" },
      season: "Year-round",
    },
    {
      id: 3,
      name: "Sutherlandia (Cancer Bush)",
      image: "imgs/Lessertia_frutescens_1.webp",
      description: "South African tonic with immune-modulating and anti-inflammatory properties used during chronic illness.",
      benefits: ["Immune Modulation", "Anti-inflammatory", "Energy/Appetite Support"],
      nutrients: { form: "Leaf capsules/tea", dose: "As directed", safety: "Avoid in pregnancy; autoimmune caution" },
      season: "Year-round",
    },
    {
      id: 4,
      name: "Neem Leaves (Azadirachta indica)",
      image: "imgs/Neem_tree_leaves.webp",
      description: "Traditional antimicrobial/antiviral leaf used for infections, skin, and metabolic support.",
      benefits: ["Antiviral (Herpes Support)", "Blood Sugar", "Skin & Detox"],
      nutrients: { form: "Tea/leaves", dose: "Short courses", safety: "Avoid in pregnancy" },
      season: "Year-round",
    },
    {
      id: 5,
      name: "Moringa oleifera (Miracle Tree)",
      image: "imgs/moringa-870x455.webp",
      description: "Nutrient-dense antioxidant herb for immunity, inflammation, and blood sugar control.",
      benefits: ["Blood Sugar (Diabetes)", "Anti-inflammatory", "Immunity/Energy"],
      nutrients: { form: "Leaf powder/capsules", dose: "1–2 tsp/day", safety: "May lower BP/BS; monitor meds" },
      season: "Year-round",
    },
    {
      id: 6,
      name: "Artemisia afra (African Wormwood)",
      image: "imgs/Artemisia afra (African Wormwood).avif",
      description: "Trusted African herb for respiratory infections and immune support.",
      benefits: ["Antimicrobial/Respiratory", "Immunity", "Anti-inflammatory"],
      nutrients: { form: "Tea/decoction", dose: "Short courses", safety: "Avoid prolonged high use in pregnancy" },
      season: "Year-round",
    },
    {
      id: 7,
      name: "Artemisia annua (Sweet Wormwood)",
      image: "imgs/sweet-wormwood-artemisia-annua-primary-v2.webp",
      description: "Source of artemisinin; traditionally for fevers/infections; researched for antiviral and anti-inflammatory actions.",
      benefits: ["Antiviral Support", "Anti-inflammatory", "Fever/Infection Support"],
      nutrients: { form: "Tea/extract", dose: "As directed", safety: "Not a drug substitute; pregnancy caution" },
      season: "Year-round",
    },
    {
      id: 8,
      name: "Hypoxis hemerocallidea (African Potato)",
      image: "imgs/Hypoxis hemerocallidea (African Potato).webp",
      description: "Immune tonic with anti-inflammatory and antioxidant activity; used in chronic illness support.",
      benefits: ["Immune Support", "Anti-inflammatory", "Blood Sugar Support"],
      nutrients: { form: "Root extract", dose: "As directed", safety: "Possible interactions; consult" },
      season: "Year-round",
    },
    {
      id: 9,
      name: "Phyllanthus niruri (Stonebreaker)",
      image: "imgs/mediumPhyllanthus niruri (Stonebreaker).webp",
      description: "Traditional liver/kidney herb with antiviral signals in lab studies and metabolic support.",
      benefits: ["Liver Support", "Antiviral Signals", "Blood Sugar Support"],
      nutrients: { form: "Tea/extract", dose: "Cycles", safety: "Avoid in pregnancy" },
      season: "Year-round",
    },
    {
      id: 10,
      name: "Nigella sativa (Black Seed)",
      image: "imgs/Nigella_ sativa.webp",
      description: "Thymoquinone-rich immune/metabolic tonic used for antiviral support and inflammation control.",
      benefits: ["Immunity/Antiviral", "Blood Sugar", "Anti-inflammatory"],
      nutrients: { form: "Oil/capsules", dose: "½–1 tsp/day", safety: "May lower BP/BS" },
      season: "Year-round",
    },
    {
      id: 11,
      name: "Turmeric (Curcuma longa)",
      image: "imgs/Curcuma_longa_roots.webp",
      description: "Curcumin-rich spice for inflammation reduction, metabolic and liver support.",
      benefits: ["Anti-inflammatory (Lupus/Joint)", "Metabolic/Liver", "Antioxidant"],
      nutrients: { form: "Powder/extract", dose: "With pepper/fat", safety: "Anticoagulant interaction" },
      season: "Year-round",
    },
    {
      id: 12,
      name: "Peppermint",
      image: "imgs/Pfefferminze_natur_peppermint3.webp",
      description: "Gentle digestive and sinus-clearing support; useful for symptom relief.",
      benefits: ["Digestion", "Sinus/Respiratory", "Headache Relief"],
      nutrients: { form: "Tea/oil (diluted)", dose: "As needed", safety: "May trigger reflux in some" },
      season: "Year-round",
    },
    {
      id: 13,
      name: "Prunus africana (African Cherry)",
      image: "imgs/prunierdafrique.webp",
      description: "Traditional bark remedy for prostate/urinary health with anti-inflammatory effects.",
      benefits: ["Prostate/Urinary", "Anti-inflammatory", "Antioxidant"],
      nutrients: { form: "Standardized extract", dose: "As directed", safety: "Source sustainably" },
      season: "Year-round",
    },
    {
      id: 14,
      name: "Catharanthus roseus (Madagascar Periwinkle)",
      image: "imgs/vecteezy_catharanthus-roseus-flower_40151788.webp",
      description: "Potent alkaloid-containing plant; traditional use for infections/metabolic issues; pharmaceutical anticancer source.",
      benefits: ["Antimicrobial Signals", "Metabolic Support", "Caution: Potent"],
      nutrients: { form: "Not for self-medication", dose: "—", safety: "Clinical guidance only" },
      season: "Year-round",
    },
    {
      id: 15,
      name: "Kigelia africana (Sausage Tree)",
      image: "imgs/Kigelia_africana_compose.webp",
      description: "Topical favorite for skin infections and wound care; antimicrobial and anti-inflammatory activity.",
      benefits: ["Skin/Wound", "Antimicrobial", "Anti-inflammatory"],
      nutrients: { form: "Topical extract", dose: "Apply as directed", safety: "Internal use needs guidance" },
      season: "Year-round",
    },
    {
      id: 16,
      name: "Annona muricata (Soursop / Graviola)",
      image: "imgs/Soursop,_Annona_muricata.webp",
      description: "Traditionally used against tumors/infections; contains acetogenins (lab cytotoxicity).",
      benefits: ["Antioxidant", "Inflammation Relief", "Digestive Support"],
      nutrients: { form: "Leaf/fruit tea", dose: "Short courses", safety: "Avoid chronic high doses" },
      season: "Year-round",
    },
    {
      id: 17,
      name: "Garcinia kola (Bitter Kola)",
      image: "imgs/Petits_colas_exposés_au_marché_Dantokpa_Bénin.webp",
      description: "West African seed used as antioxidant tonic with respiratory and metabolic benefits.",
      benefits: ["Antioxidant/Liver", "Respiratory", "Blood Sugar"],
      nutrients: { form: "Chewed/ground", dose: "Small amounts", safety: "Monitor with diabetes meds" },
      season: "Year-round",
    },
    {
      id: 18,
      name: "Ocimum sanctum (Holy Basil / Tulsi)",
      image: "imgs/Holy-Basil-Tulsi-1245095474-770x533-1_jpg.avif",
      description: "Adaptogen for stress resilience, immune and antiviral support, and blood sugar balance.",
      benefits: ["Adaptogen/Immunity", "Antiviral", "Blood Sugar"],
      nutrients: { form: "Tea/extract", dose: "Daily", safety: "Pregnancy caution; may lower BS" },
      season: "Year-round",
    },
    {
      id: 19,
      name: "Bidens pilosa",
      image: "imgs/Starr_080601-5248_Bidens_alba_var._radiata.webp",
      description: "Common tropical herb studied for glucose control and anti-inflammatory effects.",
      benefits: ["Blood Sugar (Diabetes)", "Anti-inflammatory", "Wound Healing"],
      nutrients: { form: "Tea/leaf", dose: "Daily or cycles", safety: "Possible anticoagulant interaction" },
      season: "Year-round",
    },
    {
      id: 20,
      name: "Boswellia spp. (Frankincense)",
      image: "imgs/Boswellia spp. (Frankincense).webp",
      description: "Resin with boswellic acids that strongly reduce inflammation; popular for joints/autoimmunity.",
      benefits: ["Anti-inflammatory (Lupus/Arthritis)", "Joint Mobility", "Respiratory Support"],
      nutrients: { form: "Resin extract", dose: "Standardized caps", safety: "Check interactions" },
      season: "Year-round",
    },
    {
      id: 21,
      name: "Sclerocarya birrea (Marula)",
      image: "imgs/Sclerocarya birrea (Marula).webp",
      description: "Antioxidant-rich African tree; used for metabolic health, wound healing and immunity.",
      benefits: ["Antioxidant", "Blood Sugar/Lipids", "Skin Repair"],
      nutrients: { form: "Leaf/bark extract", dose: "As directed", safety: "Allergy possible" },
      season: "Year-round",
    },
    {
      id: 22,
      name: "Harpagophytum procumbens (Devil's Claw)",
      image: "imgs/Harpagophytum_procumbens_MHNT.BOT.2005.0.1243.webp",
      description: "Root used to relieve joint/back pain with proven anti-inflammatory/analgesic actions.",
      benefits: ["Pain Relief", "Anti-inflammatory", "Mobility"],
      nutrients: { form: "Root extract", dose: "Standardized caps", safety: "Diabetes/anticoagulant interactions" },
      season: "Year-round",
    },
    {
      id: 23,
      name: "Glycyrrhiza glabra (Licorice)",
      image: "imgs/Glycyrrhiza glabra (Licorice).webp",
      description: "Soothing antiviral root for mucous membranes, liver and respiratory support.",
      benefits: ["Antiviral (Herpes Support)", "Mucosal Soothing", "Liver Support"],
      nutrients: { form: "Tea/extract (DGL alt.)", dose: "Cycles", safety: "May raise BP; use DGL if needed" },
      season: "Year-round",
    },
    {
      id: 24,
      name: "Tetrapleura tetraptera (Aridan)",
      image: "imgs/Tetrapleura_tetraptera_MHNT.BOT.2017.10.22.webp",
      description: "West African spice for arthritis, asthma and metabolic complaints; anti-inflammatory and glucose-lowering activity.",
      benefits: ["Anti-inflammatory", "Blood Sugar", "Respiratory Support"],
      nutrients: { form: "Pods/spice tea", dose: "Culinary/tea", safety: "Moderation; consult if pregnant" },
      season: "Year-round",
    }
  ];

  // initial render
  displayFruits(fruits);

  // search
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const filteredFruits = fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(searchTerm) ||
        fruit.description.toLowerCase().includes(searchTerm)
      );
      displayFruits(filteredFruits);
    });
  }

  // benefit filter (guarded — in case the select is commented out in HTML)
  if (benefitFilter) {
    benefitFilter.addEventListener('change', function() {
      const selectedBenefit = this.value;
      if (!selectedBenefit) {
        displayFruits(fruits);
        return;
      }
      const filteredFruits = fruits.filter(fruit =>
        fruit.benefits.some(benefit =>
          benefit.toLowerCase().includes(selectedBenefit.toLowerCase()))
      );
      displayFruits(filteredFruits);
    });
  }

  // render
  function displayFruits(fruitsToDisplay) {
    fruitContainer.innerHTML = '';

    if (fruitsToDisplay.length === 0) {
      fruitContainer.innerHTML = "<p>Seems the herbs not on the list, contact us and we'll get it to you!.</p>";
      return;
    }

    fruitsToDisplay.forEach(fruit => {
      const fruitElement = document.createElement('div');
      fruitElement.className = 'fruit-item';
      fruitElement.innerHTML = `
        <img src="${fruit.image}" alt="${fruit.name}" loading="lazy">
        <div class="fruit-info">
          <h3>${fruit.name}</h3>
          <p>${fruit.description}</p>
          <div class="benefits">
            ${fruit.benefits.map(benefit => `<span class="benefit-tag">${benefit}</span>`).join('')}
          </div>
          <div class="fruit-buttons">
            <!-- Commented out original buttons (kept for easy restore) -->
            <!-- <button class="view-details" data-id="${fruit.id}">View Details</button> -->
            <!-- <button class="add-to-cart" data-id="${fruit.id}">Add to Cart <i class="fas fa-cart-plus"></i></button> -->

            <!-- New WhatsApp "Get Now!" button -->
            <a class="get-now" href="https://wa.me/2348163807836?text=${encodeURIComponent('Hi! I want to order ' + fruit.name)}" target="_blank" rel="noopener noreferrer">
              Get Now!
            </a>
          </div>
          <p class="response-text">We respond immediately</p>
          
        </div>
      `;
      fruitContainer.appendChild(fruitElement);
    });

    // keep existing functionality for details/cart (still works if you uncomment buttons)
    document.querySelectorAll('.view-details').forEach(button => {
      button.addEventListener('click', function() {
        const fruitId = parseInt(this.getAttribute('data-id'));
        const selectedFruit = fruits.find(fruit => fruit.id === fruitId);
        showFruitDetails(selectedFruit);
      });
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        const fruitId = parseInt(this.getAttribute('data-id'));
        const selectedFruit = fruits.find(fruit => fruit.id === fruitId);
        addToCart(selectedFruit);
      });
    });
  }

  // details popup
  function showFruitDetails(fruit) {
    const formattedNutrients = Object.entries(fruit.nutrients)
      .map(([nutrient, value]) => `• ${nutrient}: ${value}`)
      .join('\n');

    alert(`Detailed view for ${fruit.name}\n\n` +
          `Benefits: ${fruit.benefits.join(', ')}\n\n` +
          `Details:\n${formattedNutrients}`);
  }

  // Add to Cart (placeholder)
  function addToCart(item) {
    console.log(`Added to cart: ${item.name}`);
    alert(`${item.name} added to cart!`);
  }
});
