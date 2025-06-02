export type DestinationModel = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export type RouteModel = {
  name: string;
  number: string;
  bgImg: string;
};
