const CROP_CONFIG = {
    argan: {
        name: "Argan",
        display: "Arganier",
        terroir: "Fruits de l'Arganier",
        production: "Fruits de l'Arganier",
        botanical: "Argania spinosa",
        icon: "🌳",
        id: "argan",
        score: 67,
        reference: {
            ref: "TN/ARG-2024/789654-V.A",
            client: "Coopérative Souss-Massa",
            ia_model: "TERRANOVA-DeepArgan v1.2",
            module: "HARMONIA-Argan v4.1"
        }
    },
    majhoul: {
        name: "Dattes Majhoul",
        display: "Palmier dattier",
        terroir: "Production de dattes Majhoul",
        production: "Production de dattes Majhoul",
        botanical: "Phoenix dactylifera",
        icon: "🌴",
        id: "majhoul",
        score: 71,
        reference: {
            ref: "TN/MAJ-2024/991234-V.M",
            client: "Domaine Majhoul Erfoud",
            ia_model: "TERRANOVA-DeepPalm v3.1",
            module: "HARMONIA-Dates v2.1"
        }
    }
};

const TERMINOLOGY_MAP = {
    argan: {
        "Argan": "Argan",
        "Arganier": "Arganier",
        "Arganeraie": "Arganeraie",
        "Production d'Argan": "Production d'Argan"
    },
    majhoul: {
        "Argan": "Dattes Majhoul",
        "Arganier": "Palmier dattier",
        "Arganeraie": "Production de dattes Majhoul",
        "Production d'Argan": "Production de dattes Majhoul"
    }
};

function getSelectedCrop() {
    const urlParams = new URLSearchParams(window.location.search);
    let crop = urlParams.get('crop');
    
    if (crop) {
        // Standardize IDs
        if (crop === 'arganier') crop = 'argan';
        localStorage.setItem('selectedCrop', crop);
        return crop;
    }
    
    return localStorage.getItem('selectedCrop') || 'argan';
}

function setSelectedCrop(cropId) {
    if (cropId === 'arganier') cropId = 'argan';
    localStorage.setItem('selectedCrop', cropId);
}
