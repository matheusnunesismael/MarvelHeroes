export class Comic {
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  constructor(
    title: string,
    thumbnail: {
      path: string;
      extension: string;
    }
  ) {
    this.title = title;
    this.thumbnail = thumbnail;
  }
}
