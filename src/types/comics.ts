export class Comic {
  title: string;
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
    ]
  ) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.dates = dates;
  }
}
