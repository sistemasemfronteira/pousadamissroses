import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
// scroll top component
import ScrollToTop from '../components/ScrollToTop';
// context
import { RoomContext } from '../context/RoomContext';
// icons
import { FaCheck } from 'react-icons/fa';

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  // destructure room
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/70'></div>
        {/* title */}
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
          {name} Detalhes
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          {/* left */}
          <div className='w-full h-full lg:w-[60%] px-6'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt='' />
            {/* facilities */}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Itens do Quarto</h3>
              <p className='mb-12'>
              Nossas acomodações são modernas e bem equipadas. Os quartos conta com uma cama king-size, uma televisão de tela plana, e acesso ao wifi gratuito. O banheiro tem um chuveiro, vaso sanitário, pia e armários. Além disso, você também encontrará um forno elétrico, microondas, e um frigobar. Nossas acomodações são quarto conjugado com sala, cozinha e banheiro. Nossas acomodações são perfeitas para descansar e relaxar.
              </p>
              {/* grid */}
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index) => {
                  // destructure item
                  const { name, icon } = item;
                  return (
                    <div
                      className='flex items-center gap-x-3 flex-1'
                      key={index}
                    >
                      <div className='text-3xl text-accent'>{icon}</div>
                      <div className='text-base'>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className='w-full h-full lg:w-[40%]'>
            {/* reservation */}
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Entre em contato e faça sua reserva</h3>
              </div>
              <button className='btn btn-lg btn-primary w-full'>
                Entre em contato!
              </button>
            </div>
            {/* rules */}
            <div>
              <h3 className='h3'>Regras da Pousada</h3>
              <p className='mb-6'>
              A Pousada Miss Rose é um local que tem como objetivo oferecer aos hóspedes a melhor experiência possível. Por isso, é necessário que todos os visitantes cumpram as regras estabelecidas. 
              </p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-in: 15:00 Hrs/PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-out: 12:00 Hrs/PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Não são permitidos animais de estimação.
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Fumar é estritamente proibido.
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Qualquer barulho excessivo é proibido.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
