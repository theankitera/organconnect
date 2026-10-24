const fallbackOrgans = [
  {
    _id: "oc-fallback-heart",
    pName: "Human Heart",
    pImage: "/organs/heart.svg",
    pPrice: "400211",
    pDescription:
      "Donor heart, blood group O+, cold ischaemia under 4 hours. Full cross-match report attached, echocardiogram on file. Ready for immediate transfer to a verified transplant centre.",
    pBlood: ["O+", "O-", "A+", "B+"],
    pCondition: "Beating donor · IVF assessed",
    pCity: "Metro Care Hub",
  },
  {
    _id: "oc-fallback-kidney",
    pName: "Human Kidney (Paired)",
    pImage: "/organs/kidney.svg",
    pPrice: "560013",
    pDescription:
      "Live-donor paired kidney, left-right combo available. Creatinine normal, Doppler clear. Compatible with multiple blood groups via panel reactive antibody screening.",
    pBlood: ["A+", "A-", "B+", "AB+"],
    pCondition: "Live donor · Pre-op cleared",
    pCity: "LifeFirst Institute",
  },
  {
    _id: "oc-fallback-liver",
    pName: "Human Liver Lobe",
    pImage: "/organs/liver.svg",
    pPrice: "411002",
    pDescription:
      "Right lobe graft, donor age 34, split-able for adult-to-adult or adult-to-child transplant. Liver function tests and CT volumetry included in the dossier.",
    pBlood: ["O+", "A+", "AB-", "B-"],
    pCondition: "Split graft · CT volumetry done",
    pCity: "Sunrise Transplant Inst.",
  },
  {
    _id: "oc-fallback-lungs",
    pName: "Human Lungs (Double)",
    pImage: "/organs/lungs.svg",
    pPrice: "440071",
    pDescription:
      "Double lung bundle, ventilated until procurement. PFT and bronchoscopy clean. Preferred for pulmonary fibrosis or cystic fibrosis recipients on the urgent list.",
    pBlood: ["O+", "O-", "AB+", "A-"],
    pCondition: "Ventilated donor · PFT clear",
    pCity: "Airway Care Center",
  },
  {
    _id: "oc-fallback-cornea",
    pName: "Cornea (Screened)",
    pImage: "/organs/cornea.svg",
    pPrice: "110005",
    pDescription:
      "Optical-grade cornea pair, endothelial cell count above threshold, serology negative. Suitable for penetrating or lamellar keratoplasty.",
    pBlood: ["Any"],
    pCondition: "Serology negative · Count OK",
    pCity: "Vision Bank",
  },
  {
    _id: "oc-fallback-pancreas",
    pName: "Human Pancreas",
    pImage: "/organs/pancreas.svg",
    pPrice: "330019",
    pDescription:
      "Islet-rich pancreas for simultaneous pancreas-kidney or transplant-alone candidates. HbA1c and islet yield data available on request.",
    pBlood: ["A+", "O+", "B-", "AB-"],
    pCondition: "Islet-rich · SPK suitable",
    pCity: "Endo Transplant Unit",
  },
  {
    _id: "oc-fallback-marrow",
    pName: "Bone Marrow Graft",
    pImage: "/organs/bone-marrow.svg",
    pPrice: "220084",
    pDescription:
      "HLA-matched stem cell graft, cryopreserved and viability-tested. Registry typed at high resolution, ready for conditioning-phase recipients.",
    pBlood: ["A+", "B+", "AB+", "O-"],
    pCondition: "Cryopreserved · HLA matched",
    pCity: "Stem Cell Registry",
  },
  {
    _id: "oc-fallback-valve",
    pName: "Heart Valve",
    pImage: "/organs/valve.svg",
    pPrice: "150067",
    pDescription:
      "Sterilized tissue heart valve, cryopreserved with full sterility panel. Ideal for aortic or mitral replacement in pediatric and adult programs.",
    pBlood: ["Any"],
    pCondition: "Sterilized · Tissue bank",
    pCity: "Cardio Tissue Bank",
  },
];

export const getFallbackOrgan = (id) =>
  fallbackOrgans.find((o) => o._id === id) || null;

export const toFallbackProduct = (organ) => ({
  _id: organ._id,
  pName: organ.pName,
  pImages: [organ.pImage.replace(/^\//, "")],
  pImage: organ.pImage,
  pPrice: organ.pPrice,
  isFallback: true,
});

export default fallbackOrgans;
