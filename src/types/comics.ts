export class Comic {
  title: string;
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: [
    {
      type: string;
      date: string;
    }
  ];

  constructor(
    title: string,
    thumbnail: {
      path: string;
      extension: string;
    },
    dates: [
      {
        type: string;
        date: string;
      }
    ],
    id: number
  ) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.dates = dates;
    this.id = id;
  }
}
