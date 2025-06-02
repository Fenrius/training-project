export interface Place {
  id: number;
  image: Image;
  title: string;
  categories: string[];
  description: string;
  location: Location;
  favorite: boolean;
}

export interface Image {
  url: string;
  alt: string;
}

export interface Location {
  text: string;
  lat?: number;
  lng?: number;
}
