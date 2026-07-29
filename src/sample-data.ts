export interface VehicleSpec {
  make: string;
  model: string;
  year_range: string;
  pcd: string;
  center_bore: string;
  offset_range: string;
  thread_size: string;
  lug_count: number;
  notes?: string;
}

export const SAMPLE_VEHICLES: VehicleSpec[] = [
  {
    make: "Mazda",
    model: "Roadster / MX-5 Miata (NA)",
    year_range: "1989-1997",
    pcd: "4x100",
    center_bore: "54.1 mm",
    offset_range: "38-45 mm",
    thread_size: "M12 x 1.5",
    lug_count: 4,
    notes: "Classic lightweight 4-lug setup. Flush OEM fitment around ET38."
  },
  {
    make: "Mazda",
    model: "Roadster / MX-5 Miata (NB)",
    year_range: "1998-2005",
    pcd: "4x100",
    center_bore: "54.1 mm",
    offset_range: "35-42 mm",
    thread_size: "M12 x 1.5",
    lug_count: 4,
    notes: "Retained 4x100 PCD with identical center bore to NA."
  },
  {
    make: "Mazda",
    model: "Roadster / MX-5 Miata (NC)",
    year_range: "2005-2015",
    pcd: "5x114.3",
    center_bore: "67.1 mm",
    offset_range: "45-55 mm",
    thread_size: "M12 x 1.5",
    lug_count: 5,
    notes: "Only generation of Roadster to use 5-lug 5x114.3 setup due to RX-8 chassis sharing."
  },
  {
    make: "Mazda",
    model: "Roadster / MX-5 Miata (ND)",
    year_range: "2015-2026",
    pcd: "4x100",
    center_bore: "54.1 mm",
    offset_range: "35-45 mm",
    thread_size: "M12 x 1.5",
    lug_count: 4,
    notes: "Returned to lightweight 4x100 setup. Popular aftermarket fitment: 16x8 ET35."
  },
  {
    make: "Suzuki",
    model: "Jimny / Jimny Sierra (JB64/JB74)",
    year_range: "2018-2026",
    pcd: "5x139.7",
    center_bore: "108.1 mm",
    offset_range: "-5 to 22 mm",
    thread_size: "M12 x 1.25",
    lug_count: 5,
    notes: "Hardcore off-road PCD with oversized center bore. Zero or negative ET required for aggressive stances."
  },
  {
    make: "Toyota",
    model: "Raize (A200/A210)",
    year_range: "2019-2026",
    pcd: "4x100",
    center_bore: "54.1 mm",
    offset_range: "40-45 mm",
    thread_size: "M12 x 1.5",
    lug_count: 4,
    notes: "Compact SUV built on Daihatsu DNGA platform."
  },
  {
    make: "Daihatsu",
    model: "Rocky e-Smart HEV (A202S)",
    year_range: "2021-2026",
    pcd: "4x100",
    center_bore: "54.1 mm",
    offset_range: "40-45 mm",
    thread_size: "M12 x 1.5",
    lug_count: 4,
    notes: "Sister car to Toyota Raize, popular for global export and aftermarket wheel upgrades."
  },
  {
    make: "Honda",
    model: "Civic Type R (FL5)",
    year_range: "2022-2026",
    pcd: "5x120",
    center_bore: "64.1 mm",
    offset_range: "50-60 mm",
    thread_size: "M14 x 1.5",
    lug_count: 5,
    notes: "Uses high offset 5x120 PCD instead of traditional Honda 5x114.3."
  },
  {
    make: "Subaru",
    model: "WRX STI (VA)",
    year_range: "2014-2021",
    pcd: "5x114.3",
    center_bore: "56.1 mm",
    offset_range: "38-55 mm",
    thread_size: "M12 x 1.25",
    lug_count: 5,
    notes: "Standard JDM performance fitment. Watch out for Brembo caliper clearance."
  },
  {
    make: "Nissan",
    model: "GT-R (R35)",
    year_range: "2007-2026",
    pcd: "5x114.3",
    center_bore: "66.1 mm",
    offset_range: "20-45 mm",
    thread_size: "M12 x 1.25",
    lug_count: 5,
    notes: "Staggered setup: 20x9.5 ET45 front, 20x10.5 ET25 rear."
  },
  {
    make: "BMW",
    model: "3 Series / M3 (G20/G80)",
    year_range: "2018-2026",
    pcd: "5x112",
    center_bore: "66.6 mm",
    offset_range: "20-35 mm",
    thread_size: "M14 x 1.25",
    lug_count: 5,
    notes: "Modern BMW platform switched from legacy 5x120 (72.6mm CB) to 5x112 (66.6mm CB)."
  },
  {
    make: "Volkswagen",
    model: "Golf GTI / R (MK8)",
    year_range: "2020-2026",
    pcd: "5x112",
    center_bore: "57.1 mm",
    offset_range: "45-51 mm",
    thread_size: "M14 x 1.5 (Ball Seat)",
    lug_count: 5,
    notes: "Classic VAG 5x112 hub. Note: OEM wheels require R13 ball seat lug bolts."
  },
  {
    make: "Ford",
    model: "Mustang (S650)",
    year_range: "2024-2026",
    pcd: "5x114.3",
    center_bore: "70.5 mm",
    offset_range: "30-52 mm",
    thread_size: "M14 x 1.5",
    lug_count: 5,
    notes: "American muscle with standard 5x4.5 inch (114.3mm) bolt circle and large hub."
  },
  {
    make: "Tesla",
    model: "Model 3 / Model Y",
    year_range: "2017-2026",
    pcd: "5x114.3",
    center_bore: "64.1 mm",
    offset_range: "35-45 mm",
    thread_size: "M14 x 1.5",
    lug_count: 5,
    notes: "High torque EV fitment. Note the step-lip on Model 3 Performance hubs."
  },
  {
    make: "Porsche",
    model: "911 Carrera (992)",
    year_range: "2019-2026",
    pcd: "5x130",
    center_bore: "71.6 mm",
    offset_range: "45-67 mm",
    thread_size: "M14 x 1.5 (Spherical)",
    lug_count: 5,
    notes: "Wide staggered fitment or optional Centerlock hub system on GTS/GT3."
  }
];

export const B2B_UPGRADE_NOTICE = `
--------------------------------------------------------------------------------
💡 [PROMOTED NOTE FROM BOLTPATTERNHQ]
You are currently viewing data from the BoltPatternHQ public sample library.
Need the complete, verified 11,601-row automotive database (1992-2026 covering 66 global makes)?
Download the standardized B2B CSV / SQL dataset (lifetime buy-once license for $29) at:
👉 https://boltpatternhq.com/
--------------------------------------------------------------------------------
`;
