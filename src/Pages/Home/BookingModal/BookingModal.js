import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bookingProduct, setBookingProduct, refetch }) => {
  const { model, resalePrice } = bookingProduct;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const model = form.model.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const booking = {
      model,
      name,
      email,
      price,
      phone,
      address,
    };

    // fetch('http://localhost:5000/bookings', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(booking),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBookingProduct(null);
    //     toast.success('Booking Successful');
    //   });

    axios.post('http://localhost:5000/bookings', booking).then((data) => {
      if (data.data.acknowledged) {
        setBookingProduct(null);
        toast.success('Booking Successful');
      }
    });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-5">
            <input
              name="model"
              type="text"
              defaultValue={model}
              placeholder="Product Name"
              className="input input-bordered w-full"
              disabled
            />
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your name"
              className="input input-bordered w-full"
              disabled
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input input-bordered w-full"
              disabled
            />
            <input
              name="price"
              type="text"
              value={resalePrice}
              className="input input-bordered w-full"
              disabled
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              name="address"
              type="text"
              placeholder="Meeting Address"
              className="input input-bordered w-full"
            />

            <br />
            <input className="w-full max-w-sm btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
