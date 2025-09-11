const jharkhandTouristPlaces = [
    // 1. Ranchi
    { district: "Ranchi", name: "Dassam Falls", lat: 23.3456, lon: 85.5616 , streetView: "https://www.google.com/maps/place/Dassam+Falls/@23.1459675,85.4671825,3a,75y,4.38h,97.18t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDe28HY3QE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HYJEExnXMXQoPELsy10l-X29VmOpiAOqtPBweUad1UX6D66L9Y0UJBS2xEvroDIu3VOBbn6UtKxP-Ity5vWHy-TeQVex3LyUK98ua3OJCpXDZur9WjSGLcALqRxFnww79p-cp9C%3Dw900-h600-k-no-pi-7.18133999515554-ya30.378683385239697-ro0-fo100!7i4608!8i2304!4m6!3m5!1s0x39f5056e67b9e4a3:0x25570e4d2a5836ee!8m2!3d23.1462515!4d85.4672203!16s%2Fm%2F0bmcq4x?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"},
    { district: "Ranchi", name: "Rock Garden", lat: 23.4121, lon: 85.2960 , streetView: "https://www.google.com/maps/place/Rock+Garden,+Gandhi+Nagar,+Ranchi,+Jharkhand+834008/@23.4044991,85.3114608,3a,75y,187.48h,80.44t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICG0qLMDA!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HZ6VbyilZLJMu3SFt3C6dpxAwHb8Hw8kVkvQtM7NxVzUbcD3ae8r6cMHDuIxqcE5Ve3UPJaZtj2Kv9btiQtR8f2d9CgQU_J0-saN6qQNkM43_LgE7_vIroC0AMwCukD7vEos_Q%3Dw900-h600-k-no-pi9.559247838951748-ya293.4810150232191-ro0-fo100!7i7680!8i3840!4m7!3m6!1s0x39f4e0d59a64e2f3:0x47cadca06e0502ee!8m2!3d23.4038472!4d85.3129755!10e5!16s%2Fg%2F1jkxylhfv?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"},
  
    // 2. Dhanbad
    { district: "Dhanbad", name: "Maithon Dam", lat: 23.8140, lon: 86.7915 , streetView: "google.com/maps/@23.783095,86.813821,3a,75y,307.89h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDeqeWZoAE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HboktGYCoR31-D9A3dKpz8Pd6RscvgSmYUgKlgxXk3iPsEBUjPJcNv-B87kU5B24uDsBpyXD8WEwu7BKHvQkkusq-POeuY_GlWssKsTFxioMxS-pC_aLjUC_VuE5Os7qJYSYfts%3Dw900-h600-k-no-pi0-ya265.88858512057135-ro0-fo100!7i8704!8i4352?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"},
    { district: "Dhanbad", name: "Bhatinda Falls", lat: 23.8292, lon: 86.3725 , streetView: ""},
  
    // 3. Bokaro
    { district: "Bokaro", name: "Garga Dam", lat: 23.6597, lon: 86.1511 , streetView: ""},
    { district: "Bokaro", name: "City Park", lat: 23.6665, lon: 86.1638 , streetView: ""},
  
    // 4. Hazaribagh
    { district: "Hazaribagh", name: "Hazaribagh National Park", lat: 23.9987, lon: 85.3623 , streetView: ""},
    { district: "Hazaribagh", name: "Canary Hill", lat: 23.9837, lon: 85.3518 , streetView: ""},
  
    // 5. Giridih
    { district: "Giridih", name: "Parasnath Hill", lat: 23.9333, lon: 86.1667 , streetView: ""},
    { district: "Giridih", name: "Usri Falls", lat: 24.2266, lon: 86.3064 , streetView: ""},
  
    // 6. Deoghar
    { district: "Deoghar", name: "Baidyanath Temple", lat: 24.4913, lon: 86.6990 , streetView: ""},
    { district: "Deoghar", name: "Tapovan Hills", lat: 24.4701, lon: 86.7303 , streetView: ""},
  
    // 7. Dumka
    { district: "Dumka", name: "Masanjore Dam", lat: 24.3533, lon: 87.4550 , streetView: ""},
    { district: "Dumka", name: "Maluti Temples", lat: 24.2564, lon: 87.7170 , streetView: ""},
  
    // 8. Pakur
    { district: "Pakur", name: "Rajmahal Hills", lat: 25.0538, lon: 87.8493 , streetView: ""},
    { district: "Pakur", name: "Devinagar Ruins", lat: 24.6333, lon: 87.8167 , streetView: ""},
  
    // 9. Sahebganj
    { district: "Sahebganj", name: "Moti Jharna", lat: 25.2391, lon: 87.6396 , streetView: ""},
    { district: "Sahebganj", name: "Rajmahal Fossil Park", lat: 25.0450, lon: 87.8320 , streetView: ""},
  
    // 10. Godda
    { district: "Godda", name: "Sundar Dam", lat: 24.9052, lon: 87.1595 , streetView: ""},
    { district: "Godda", name: "Harna Dam", lat: 24.8541, lon: 87.2407 , streetView: ""},
  
    // 11. Jamtara
    { district: "Jamtara", name: "Karamdaha Temple", lat: 24.0372, lon: 86.8064 , streetView: ""},
    { district: "Jamtara", name: "Miclai Ghat", lat: 24.0952, lon: 87.2563 , streetView: ""},
  
    // 12. Chatra
    { district: "Chatra", name: "Kunda Cave", lat: 24.2154, lon: 84.8562 , streetView: ""},
    { district: "Chatra", name: "Bhairavi Temple", lat: 24.2431, lon: 85.2962 , streetView: ""},
  
    // 13. Palamu
    { district: "Palamu", name: "Palamu Fort", lat: 23.9028, lon: 84.0951 , streetView: ""},
    { district: "Palamu", name: "Betla National Park", lat: 23.8333, lon: 84.2167 , streetView: ""},
  
    // 14. Latehar
    { district: "Latehar", name: "Lodh Falls", lat: 23.6377, lon: 84.5065 , streetView: ""},
    { district: "Latehar", name: "Netarhat Hills", lat: 23.4750, lon: 84.2700 , streetView: ""},
  
    // 15. Gumla
    { district: "Gumla", name: "Nagpheni Hill", lat: 23.0383, lon: 84.5431, streetView: ""},
    { district: "Gumla", name: "Anjan Dham", lat: 23.1102, lon: 84.5528, streetView: ""},
  
    // 16. Simdega
    { district: "Simdega", name: "Kelaghagh Dam", lat: 22.6150, lon: 84.5039, streetView: ""},
    { district: "Simdega", name: "Ramrekha Dham", lat: 22.6475, lon: 84.5505, streetView: ""},
  
    // 17. Lohardaga
    { district: "Lohardaga", name: "Ajnakhal Hill", lat: 23.4443, lon: 84.6698, streetView: "" },
    { district: "Lohardaga", name: "Pahari Mandir", lat: 23.4301, lon: 84.6844, streetView: "" },
  
    // 18. Khunti
    { district: "Khunti", name: "Angrabari Temple", lat: 23.0775, lon: 85.2798, streetView: "" },
    { district: "Khunti", name: "Panchghagh Falls", lat: 23.0135, lon: 85.2390, streetView: "" },
  
    // 19. West Singhbhum
    { district: "West Singhbhum", name: "Hirni Falls", lat: 22.7130, lon: 85.2812, streetView: "" },
    { district: "West Singhbhum", name: "Seraikela Palace", lat: 22.6983, lon: 85.9313, streetView: "" },
  
    // 20. East Singhbhum
    { district: "East Singhbhum", name: "Dimna Lake", lat: 22.8516, lon: 86.2626, streetView: "" },
    { district: "East Singhbhum", name: "Dalma Wildlife Sanctuary", lat: 22.9516, lon: 86.1216, streetView: "" },
  
    // 21. Saraikela-Kharsawan
    { district: "Saraikela-Kharsawan", name: "Chandil Dam", lat: 22.9607, lon: 85.9970, streetView: "" },
    { district: "Saraikela-Kharsawan", name: "Kharsawan Palace", lat: 22.7857, lon: 85.8205, streetView: "" },
  
    // 22. Koderma
    { district: "Koderma", name: "Tilaiya Dam", lat: 24.4701, lon: 85.6150, streetView: "" },
    { district: "Koderma", name: "Satgawan Wildlife Sanctuary", lat: 24.5900, lon: 85.5330, streetView: "" },
  
    // 23. Ramgarh
    { district: "Ramgarh", name: "Rajrappa Temple", lat: 23.6330, lon: 85.5211, streetView: "" },
    { district: "Ramgarh", name: "Patratu Valliey", lat: 23.6854, lon: 85.2964, streetView: "" },
  
    // 24. Garhwa
    { district: "Garhwa", name: "Sukhaldari Falls", lat: 24.1480, lon: 83.7885, streetView: "" },
    { district: "Garhwa", name: "Nagaruntari Temple", lat: 24.3032, lon: 83.6534, streetView: "" },
  ];
  
  export default jharkhandTouristPlaces;
  