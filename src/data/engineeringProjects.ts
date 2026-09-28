import { EngineeringProject } from '@/types';

export const engineeringProjects: EngineeringProject[] = [
  {
    id: 'esp32-synth-controller',
    title: 'Embedded Hardware Synth & Controller',
    category: 'Embedded Systems & Hardware',
    shortDescription: 'Custom ESP32-S3 microcontroller firmware featuring low-latency C++ scanning routines and hardware peripheral interfaces.',
    fullDescription: 'Architected and implemented real-time embedded firmware utilizing the ESP32-S3 microcontroller. The firmware executes low-latency hardware key scanning, state machine routines for polyphonic voice assignments, and rotary encoder handling. Optimized power profiles and timing routines for stable jitter-free execution.',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['ESP32-S3', 'C++', 'PlatformIO', 'Embedded Hardware', 'PCB'],
    technicalSpecs: [
      { label: 'Microcontroller', value: 'ESP32-S3 Dual-Core Xtensa LX7' },
      { label: 'Toolchain', value: 'PlatformIO / ESP-IDF' },
      { label: 'Scan Cycle Time', value: '< 2.5 ms debounce / polling' },
      { label: 'Bus Protocols', value: 'I2C, SPI, UART' }
    ],
    deliverables: [
      'Complete modular C++ firmware architecture',
      'State-driven menu navigation and OLED graphic interface',
      'Bench-tested schematic prototypes and signal integrity validation'
    ]
  },
  {
    id: 'mechanical-cad-assembly',
    title: 'High-Precision 3D Enclosure & Toolhead',
    category: 'Mechanical Design & CAD',
    shortDescription: 'Parametric mechanical design with thermal dissipation modeling, custom kinematics, and tight-tolerance FDM fabrication.',
    fullDescription: 'Engineered a lightweight, high-rigidity structural enclosure and toolhead assembly designed for rapid iteration 3D printing. Conducted stress and thermal finite element analyses to minimize vibrational resonance at elevated feed rates while maintaining rigid dimensional tolerances.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['SolidWorks', 'FEA', '3D Printing', 'Thermal Design', 'Prototyping'],
    technicalSpecs: [
      { label: 'Material', value: 'PETG / PA-CF composite' },
      { label: 'Tolerance Target', value: '±0.15 mm' },
      { label: 'Mass Reduction', value: '28% over stock cast bracket' }
    ],
    deliverables: [
      'Production-ready STL / STEP assemblies',
      'Thermal gradient simulation reports',
      'Field testing documentation across 200+ operating hours'
    ]
  }
];