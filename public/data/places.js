const jharkhandTouristPlaces = [
    // 1. Ranchi
    { district: "Ranchi", name: "Hundru Falls", lat: 23.3368, lon: 85.6708 , streetView: "https://www.google.com/maps/@23.450922,85.66745,3a,75y,342.14h,100.94t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDq3ICfIg!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HY1HVVsGnSC8d2Z2JLrLhjN7qMa8CvUcEa2PYYyMFZrQZiCp5lsSSwLYALQNRNuYatjzv7bsNxkB0FrqleUYzJSEEP1XUSZl4g10zYhkZPiMcy25kOcWTH0Ke3sNagLkqAMh99W%3Dw900-h600-k-no-pi-10.943388090561243-ya342.13857423827955-ro0-fo100!7i8704!8i4352?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3DD"},
    { district: "Ranchi", name: "Jagannath Mandir", lat: 23.3168, lon: 85.2815, streetView: "https://www.google.com/maps/@23.317085,85.281559,3a,75y,154.76h,120.22t/data=!3m7!1e1!3m5!1sWoTX6LSyyZsogEHDm3Yamg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-30.223421744438014%26panoid%3DWoTX6LSyyZsogEHDm3Yamg%26yaw%3D154.75966955190066!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"},
  
    // 2. Dhanbad
    { district: "Dhanbad", name: "Geological Museum", lat: 23.8133, lon: 86.54107 , streetView: "https://www.google.com/maps/@23.8142953,86.4411807,3a,75y,204.99h,89.75t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDhgIvO7wE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HbHahDsI1f0kmcsuxnH6i8rdKwby3OtcICi3OQFQQMOoQsFnpl0E-Q4P5bRe5kIgAvfQGwQYuxVaM-izKKHKC-L6VepvqfrnaWIV_3Avl9hAx6fK4BMJykVYbuJExO2iFNp2WrVrw%3Dw900-h600-k-no-pi0.2526117000718955-ya206.9910074012793-ro0-fo100!7i8000!8i4000?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"},
    { district: "Dhanbad", name: "Bhatinda Falls", lat: 23.8292, lon: 86.3725 , streetView: "https://www.google.com/maps/place/Bhatinda+water+falls/@23.7109311,86.3315242,3a,75y,340.28h,91.55t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICM5NHCSg!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HYvdC8wKUxVZQ0COnWOEB9jN0M99__SQxeasICbQPbOFXY7XhO6IL3Uj2WNxZH-wHJUgwc0md9h1g1emXTW72trisfGBZBLGemts5Hw8tjecUkJ9KMLrvXABsl1GMvmcUmK2Ws%3Dw900-h600-k-no-pi-1.5462376496936088-ya291.2761157024714-ro0-fo100!7i10240!8i5120!4m6!3m5!1s0x39f6a36a205bd02d:0x17e9b7a4a7eea95d!8m2!3d23.7107875!4d86.3317344!16s%2Fg%2F11p6qr7dj1?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"},
  
    // 3. Bokaro
    { district: "Bokaro", name: "Jawaharlal Nehru Biological Park", lat: 23.6806, lon: 86.1533 , streetView: "https://www.google.com/maps/@23.6805622,86.1533331,3a,89.6y,25.74h,101.91t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICpqdX7GQ!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HY3BOpmHzWCKp9Y00qO1AegsjUWr2MN8-El8wQvl57RLE2Xq33ZqM0gG3uUgnp8ns2zEJs6DU44mE4pS8YtCYsE4L8wH8XtIkD7snCFsvW18sznlCM5ouwdxlhanWpdQD-Fex4m%3Dw900-h600-k-no-pi-11.913656988636646-ya191.74289811052267-ro0-fo100!7i8704!8i4352?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3DD"},
    { district: "Bokaro", name: "Tenughat Dam", lat: 23.7274, lon: 85.8377, streetView: "https://www.google.com/maps/@23.7265827,85.837398,3a,75y,275.97h,97.93t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICB1OHNBg!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HY4ZOA-PiP_6wcmOvC3oiCcRqY0a68KkMwqhjvpdDH_tRoNzQSUAINYOVTtrMv915ARZYQh9AtZ5YbZ7f-ty5UCOrCVOmICq4k3YswIuJfJjddiXJ53KjcZIiAQ5jq3-nORuzxu%3Dw900-h600-k-no-pi-7.931203367936234-ya5.973676559214937-ro0-fo100!7i10240!8i5120?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"},
  
    // 4. Hazaribagh
    { district: "Hazaribagh", name: "Canary Hill", lat: 24.1142, lon: 85.3939 , streetView: "https://www.google.com/maps/place/Canary+Hill+Rd,+Hazaribagh,+Jharkhand+825301/@24.014218,85.3938317,3a,75y,263.5h,91.29t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICe-OikQA!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HZxOsRCHf1c1Pi80ucKSLsp6g9cBKQQF2UAlqsgICI8uR0pntupjLY-_e5DzFVHhO3bzDlL0bVzIE2eoZmXyR1H4n3tkHyucyGWDC1ekJw0uOpKCRtIrI9FlBmApNO_DFFuC3UW%3Dw900-h600-k-no-pi-1.287094801065649-ya263.5031523257857-ro0-fo100!7i8704!8i4352!4m6!3m5!1s0x39f49c439d549a95:0x835693a9e9f4b301!8m2!3d24.0054286!4d85.3802301!16s%2Fg%2F1tdh28p4?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"},
    { district: "Hazaribagh", name: "Barso Pani Cave", lat: 23.8395, lon: 85.1823 , streetView: "https://www.google.com/maps/@23.73935,85.1824867,3a,75y,237.33h,102.42t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDmgcOqNA!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HZ3zmR8dmNe2r2eJd3xRUJtgi0aLMGnSb4VXS2_JDwCRx9BOwj237bGyoLpYryx381CULeSB7GNvEC0jZfhS3CvC3We6T1vAyYJsEjfhyAXG-hjOajyqUewkurMwpYfoW_mwMRM%3Dw900-h600-k-no-pi-12.419039478256835-ya287.33378587856646-ro0-fo100!7i10240!8i5120?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"},
  
    // 5. Giridih
    { district: "Giridih", name: "Parasnath Hill", lat: 23.9333, lon: 86.1667 , streetView: "https://www.google.com/maps/place/02+Shree+KunthuNath+Jin+Tunk/@23.9613389,86.13655,3a,75y,78.25h,61.48t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIC_q-nltgE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6Has0AT8clGHhc6FzukJkgMccPlCMUa5qfwBgrUsayaf3thY-spaZHpmihIwMVH59rUsWhC5Mhi4MMX9o4-lkPmMkuP74cF-RPhGF4OraQ73VFcrhaVtiZiUXhvWdXgmdF-zZ0xEfg%3Dw900-h600-k-no-pi28.51605751195791-ya78.25478127863745-ro0-fo100!7i8192!8i4096!4m6!3m5!1s0x39f4050072855707:0xc14fabc744329cce!8m2!3d23.9613385!4d86.1365546!16s%2Fg%2F11md2zcv9f?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"},
    { district: "Giridih", name: "Usri Falls", lat: 24.2266, lon: 86.3064 , streetView: "https://www.google.com/maps/@24.0976204,86.3696376,3a,75y,128.67h,88.65t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDe5tbJcw!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HaqBjnzk7yt1Nolb6KhzQfcqpidi3rSDZOsQtVDsvpNoIwfncWrvDIaEs51aayA_RLmXZ0p0Z7_YoWJcdZr529EZ5jwuLSAus_-l3VAv02JC4t1iqxxLYcn14uZ0mg2c8GzEOTt%3Dw900-h600-k-no-pi1.3494887206487078-ya49.6742599539449-ro0-fo100!7i10240!8i5120?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"},
  
    // 6. Deoghar
    { district: "Deoghar", name: "Baidyanath Temple", lat: 24.4913, lon: 86.6990 , streetView: "https://www.google.com/maps/@24.4925931,86.7002826,3a,75y,229.09h,112.69t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICh4u_EWg!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6Hbx3Q98veUnRBhuP1d72_kxYjlLfXcDLf8PSNQsdO9OMsszwNtSI3KGwjJ6qEGj30qGstSaAUleUHwj9Ugz2U1DyZN4toOuDJr3d_sGY4WTyDBEI6m7Rt6j5J8WkRXVnKBbMBlk%3Dw900-h600-k-no-pi-22.693493346634796-ya6.086345361403431-ro0-fo100!7i10240!8i5120?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"},
  
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
  