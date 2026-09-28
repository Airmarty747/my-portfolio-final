export interface BaseProject {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
  links?: { label: string; url: string }[];
}

export interface EngineeringProject extends BaseProject {
  images: string[]; // Carousel images
  technicalSpecs?: { label: string; value: string }[];
}

export interface ManagementProject extends BaseProject {
  coverImage: string; // Single featured image
  challenge: string;
  methodology: string;
  results: string;
}