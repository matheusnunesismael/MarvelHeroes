export class Hero {
  id: number;
  name: string;
  thumbnail: { path: string; extension: string };
  description: string;
  comics: {
    available: number;
  };
  constructor(
    id: number,
    name: string,
    thumbnail: { path: string; extension: string },
    description: string,
    comics: {
      available: number;
    }
  ) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.description = description;
    this.comics = comics;
  }
}
