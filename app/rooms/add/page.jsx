"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Heading from "@/components/Heading";
import createRoom from "@/app/actions/createRoom";

const AddRoomPage = () => {
  const [state, formAction] = useFormState(createRoom, {});

  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Room created successfully!");
      router.push("/");
    }
  }, [state]);

  return (
    <>
      <Heading title='Add a Room' />
      <div className='bg-white shadow-lg rounded-lg p-6 w-full'>
        <form action={formAction}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 font-bold mb-2'>
              Rom Navn
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='border rounded w-full py-2 px-3'
              placeholder='Skriv navn på rom (Large Conference Room)'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-gray-700 font-bold mb-2'>
              Beskrivelse
            </label>
            <textarea
              id='description'
              name='description'
              className='border rounded w-full h-24 py-2 px-3'
              placeholder='Legg til en beskrivelse'
              required></textarea>
          </div>

          <div className='mb-4'>
            <label
              htmlFor='sqft'
              className='block text-gray-700 font-bold mb-2'>
              kvm
            </label>
            <input
              type='number'
              id='sqft'
              name='sqft'
              className='border rounded w-full py-2 px-3'
              placeholder='Størrelse på rom i kvadratmeter'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='capacity'
              className='block text-gray-700 font-bold mb-2'>
              Kapasitet
            </label>
            <input
              type='number'
              id='capacity'
              name='capacity'
              className='border rounded w-full py-2 px-3'
              placeholder='Hvor mange personer kan det være i rommet'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='price_per_hour'
              className='block text-gray-700 font-bold mb-2'>
              Pris pr time
            </label>
            <input
              type='number'
              id='price_per_hour'
              name='price_per_hour'
              className='border rounded w-full py-2 px-3'
              placeholder='Skriv inn en pris pr time'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='address'
              className='block text-gray-700 font-bold mb-2'>
              Addresse
            </label>
            <input
              type='text'
              id='address'
              name='address'
              className='border rounded w-full py-2 px-3'
              placeholder='Skriv inn full adresse'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='location'
              className='block text-gray-700 font-bold mb-2'>
              Lokasjon
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='border rounded w-full py-2 px-3'
              placeholder='Hvor i bygget er rommet?'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='availability'
              className='block text-gray-700 font-bold mb-2'>
              Tilgjengelighet
            </label>
            <input
              type='text'
              id='availability'
              name='availability'
              className='border rounded w-full py-2 px-3'
              placeholder='Tilgjengelighet: 10:00 - 12:00'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='amenities'
              className='block text-gray-700 font-bold mb-2'>
              Rommet inkluderer
            </label>
            <input
              type='text'
              id='amenities'
              name='amenities'
              className='border rounded w-full py-2 px-3'
              placeholder='Tillegg i rommet. (prosjektor, tv, lydanlegg etc)'
              required
            />
          </div>

          {/* <!-- Image Upload --> */}
          <div className='mb-8'>
            <label
              htmlFor='image'
              className='block text-gray-700 font-bold mb-2'>
              Bilde
            </label>

            <input
              type='file'
              id='image'
              name='image'
              className='border rounded w-full py-2 px-3'
            />
          </div>

          <div className='flex flex-col gap-5'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>
              Lagre
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRoomPage;
