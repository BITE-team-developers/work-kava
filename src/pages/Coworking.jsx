import { useState } from 'react';
import { CoworkingPlase } from 'components/Coworking/CoworkingPlase';
import { Hero } from 'components/Hero/Hero';
import { BookType } from 'utils/commonUtils';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { BookForm } from 'components/BookForm/BookForm';

const coworkings = [
  {
    id: '01',
    title: 'Workplace',
    description:
      'Convenience, comfort and delicious coffee, what else is needed for productive work? Work with the feeling that you are at home.',
    bookType: BookType.Workplace
  },
  {
    id: '02',
    title: 'Meeting room',
    description:
      'For business meetings, we suggest using a soundproofed room, which is equipped with everything you need.',
    bookType: BookType.MeetingRoom
  },
  {
    id: '03',
    title: 'Hall for master classes',
    description:
      'Convenience, comfort and delicious coffee, what else is needed for productive work? Work with the feeling that you are at home.',
    bookType: BookType.BigHall
  }
];

const Coworking = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [selectedBookType, setSelectedBookType] = useState('');

  const showBookForm = bookType => {
    setSelectedBookType(bookType);
    openModal();
  };

  return (
    <>
      <Hero page="coworking" />
      {coworkings.map((coworking, index) => (
        <CoworkingPlase
          title={coworking.title}
          description={coworking.description}
          key={coworking.id}
          id={coworking.id}
          styles={index % 2 !== 0 ? 'dark' : 'light'}
          bookType={coworking.bookType}
          showBookForm={showBookForm}
        />
      ))}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <BookForm action={closeModal} bookType={selectedBookType} />
        </Modal>
      )}
    </>
  );
};

export default Coworking;
