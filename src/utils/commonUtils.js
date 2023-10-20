export const BookType = {
  Workplace: 'Workplace',
  MeetingRoom: 'MeetingRoom',
  BigHall: 'BigHall'
};
export const GetBookingInfo = bookType => {
  switch (bookType) {
    case BookType.Workplace:
      return {
        price: 50,
        title: 'Book a workplace'
      };

    case BookType.MeetingRoom:
      return {
        price: 300,
        title: 'Book a meeting room'
      };
    case BookType.BigHall:
      return {
        price: 800,
        title: 'Book a big hall'
      };
    default:
      throw new Error('Not supported book type');
  }
};
