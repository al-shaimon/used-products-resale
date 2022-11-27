import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const BookingModal = ({ bookingProduct, setBookingProduct, refetch }) => {
  const { model, resalePrice } = bookingProduct;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const booking = {
      name,
      email,
      price,
      phone,
      address,
    };

    console.log(booking);
    setBookingProduct(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{model}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-5">
            {/* form er vitor e ei info gula thakbe 
            not editable:
            *user name
            *email
            *item name
            *price

            input field
            *phone number
            *meeting address
          */}

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
