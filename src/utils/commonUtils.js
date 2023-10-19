export const BookType = {
  Workplace: 'Workplace',
  MeetingRoom: 'MeetingRoom',
  BigHall: 'BigHall'
};
export const GetBookPrice = bookType => {
  switch (bookType) {
    case BookType.Workplace:
      return 50;

    case BookType.MeetingRoom:
      return 300;
    case BookType.BigHall:
      return 800;
    default:
      throw new Error('Not supported book type');
  }
};
