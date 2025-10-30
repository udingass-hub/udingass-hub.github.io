import toolsImage from "@/assets/category-tools.jpg";
import paintImage from "@/assets/category-paint.jpg";
import buildingImage from "@/assets/category-building.jpg";
import gardenImage from "@/assets/category-garden.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Professional Power Drill",
    category: "Tools",
    price: 129.99,
    image: toolsImage,
    badge: "Bestseller",
    description: "Bor listrik profesional dengan daya tinggi 750W, sempurna untuk proyek konstruksi dan perbaikan rumah. Dilengkapi dengan kecepatan variabel dan reverse function untuk berbagai aplikasi pengeboran.",
    features: [
      "Motor 750W dengan daya tinggi",
      "Kecepatan variabel 0-3000 RPM",
      "Chuck 13mm untuk berbagai mata bor",
      "Fungsi reverse untuk melepas sekrup",
      "Grip ergonomis anti-slip",
      "LED light untuk area gelap"
    ],
    specifications: [
      { label: "Daya", value: "750W" },
      { label: "Kecepatan", value: "0-3000 RPM" },
      { label: "Kapasitas Chuck", value: "13mm" },
      { label: "Berat", value: "1.8 kg" },
      { label: "Garansi", value: "2 tahun" }
    ],
    stock: 25
  },
  {
    id: 2,
    name: "Premium Paint Set",
    category: "Paint",
    price: 89.99,
    image: paintImage,
    badge: "New",
    description: "Set cat premium berkualitas tinggi untuk interior dan eksterior. Formula low-VOC yang ramah lingkungan dengan hasil akhir yang halus dan tahan lama. Tersedia dalam berbagai warna.",
    features: [
      "Formula low-VOC ramah lingkungan",
      "Cepat kering dalam 2 jam",
      "Tahan lama hingga 10 tahun",
      "Anti jamur dan anti lumut",
      "Mudah dibersihkan",
      "Hasil akhir matte/glossy"
    ],
    specifications: [
      { label: "Volume", value: "5 Liter" },
      { label: "Coverage", value: "50-60 m² per 5L" },
      { label: "Waktu Kering", value: "2 jam" },
      { label: "Jenis", value: "Interior & Eksterior" },
      { label: "Finish", value: "Matte/Glossy" }
    ],
    stock: 40
  },
  {
    id: 3,
    name: "Quality Lumber Pack",
    category: "Building",
    price: 199.99,
    image: buildingImage,
    description: "Paket kayu berkualitas tinggi yang telah dikeringkan dengan sempurna. Ideal untuk konstruksi, furniture, dan berbagai proyek woodworking. Kayu pilihan tanpa cacat struktural.",
    features: [
      "Kayu kering oven (moisture <12%)",
      "Bebas dari cacat struktural",
      "Dipotong presisi",
      "Cocok untuk konstruksi dan furniture",
      "Sustainable forestry certified",
      "Mudah dikerjakan"
    ],
    specifications: [
      { label: "Jenis Kayu", value: "Pine/Oak" },
      { label: "Dimensi", value: "2x4 inch" },
      { label: "Panjang", value: "8 feet" },
      { label: "Moisture Content", value: "<12%" },
      { label: "Jumlah", value: "20 pieces" }
    ],
    stock: 15
  },
  {
    id: 4,
    name: "Garden Tool Kit",
    category: "Garden",
    price: 79.99,
    image: gardenImage,
    badge: "Sale",
    description: "Set lengkap peralatan berkebun dengan kualitas profesional. Termasuk sekop, garpu, garu, dan alat pemangkas. Sempurna untuk pemula maupun tukang kebun berpengalaman.",
    features: [
      "Set 8 alat berkebun lengkap",
      "Material stainless steel anti karat",
      "Handle kayu ergonomis",
      "Tas penyimpanan included",
      "Cocok untuk semua jenis tanah",
      "Lifetime warranty"
    ],
    specifications: [
      { label: "Jumlah Item", value: "8 pieces" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Handle", value: "Hardwood" },
      { label: "Berat Set", value: "3.5 kg" },
      { label: "Garansi", value: "Lifetime" }
    ],
    stock: 30
  },
  {
    id: 5,
    name: "Cordless Drill Set",
    category: "Tools",
    price: 159.99,
    image: toolsImage,
    description: "Bor cordless dengan baterai lithium-ion 20V. Ringan, powerful, dan portabel. Dilengkapi dengan 2 baterai, charger, dan 50+ accessories untuk berbagai keperluan.",
    features: [
      "Baterai 20V 2.0Ah Lithium-Ion",
      "2 baterai included",
      "Fast charger 1 jam",
      "50+ drill & driver bits",
      "Torque settings 21+1",
      "LED work light"
    ],
    specifications: [
      { label: "Voltase", value: "20V" },
      { label: "Kapasitas Baterai", value: "2.0Ah" },
      { label: "Chuck Size", value: "10mm" },
      { label: "Max Torque", value: "30 Nm" },
      { label: "Accessories", value: "50+ pieces" }
    ],
    stock: 18
  },
  {
    id: 6,
    name: "Interior Paint Combo",
    category: "Paint",
    price: 119.99,
    image: paintImage,
    badge: "Popular",
    description: "Paket cat interior premium dengan primer dan finish coat. Hasil akhir sempurna dengan ketahanan warna superior. Ideal untuk ruang tamu, kamar tidur, dan area interior lainnya.",
    features: [
      "Primer + finish coat combo",
      "One-coat coverage excellent",
      "Stain resistant formula",
      "Scrub resistant up to 10,000x",
      "Zero odor technology",
      "Mildew resistant"
    ],
    specifications: [
      { label: "Total Volume", value: "7.5 Liter" },
      { label: "Coverage", value: "75-90 m²" },
      { label: "Coats Required", value: "1-2" },
      { label: "Dry Time", value: "1 jam" },
      { label: "VOC Level", value: "Ultra Low" }
    ],
    stock: 35
  },
  {
    id: 7,
    name: "Construction Materials",
    category: "Building",
    price: 249.99,
    image: buildingImage,
    description: "Paket material konstruksi lengkap untuk proyek renovasi atau pembangunan baru. Termasuk semen, pasir, dan agregat berkualitas tinggi dengan proporsi yang tepat.",
    features: [
      "Semen Portland berkualitas tinggi",
      "Pasir halus bersih",
      "Agregat grade A",
      "Proporsi siap pakai",
      "Tested quality control",
      "Free delivery"
    ],
    specifications: [
      { label: "Semen", value: "5 bags (50kg each)" },
      { label: "Pasir", value: "1 m³" },
      { label: "Agregat", value: "0.5 m³" },
      { label: "Berat Total", value: "~2 ton" },
      { label: "Coverage", value: "~15-20 m²" }
    ],
    stock: 12
  },
  {
    id: 8,
    name: "Professional Garden Set",
    category: "Garden",
    price: 149.99,
    image: gardenImage,
    description: "Set peralatan berkebun profesional dengan teknologi modern. Termasuk trimmer elektrik, pruning shears, dan watering system. Sempurna untuk taman berukuran sedang hingga besar.",
    features: [
      "Electric hedge trimmer 400W",
      "Professional pruning shears",
      "Automatic watering timer",
      "Garden hose 30m",
      "Sprinkler system",
      "Tool organizer bag"
    ],
    specifications: [
      { label: "Trimmer Power", value: "400W" },
      { label: "Hose Length", value: "30 meters" },
      { label: "Timer Type", value: "Digital" },
      { label: "Total Items", value: "12 pieces" },
      { label: "Garansi", value: "3 tahun" }
    ],
    stock: 20
  }
];
