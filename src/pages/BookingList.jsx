import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary
import "./booking-list.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

const BookingList = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const db = getFirestore();
      const bookingsCollection = collection(db, "bookings");

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userId = user.uid;
          const q = query(
            bookingsCollection,
            where("userId", "==", userId),
            limit(2)
          );
          const bookingSnapshot = await getDocs(q);
          const bookingList = bookingSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setBookings(bookingList);
        }
      });
    };

    fetchBookings();
  }, []);

  const cancelBooking = async (id) => {
    const db = getFirestore();
    const bookingref = doc(db, "bookings", id);

    try {
      await updateDoc(bookingref, { isActive: false, cancelDate: new Date() });
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === id
            ? { ...booking, isActive: false, cancelDate: new DataView() }
            : booking
        )
      );
    } catch (error) {
      console.log("Error Handling booking", error);
    }
  };

  return (
    <div className="booking-list">
      <h2>Booking List</h2>
      <table>
        <thead>
          <tr>
            <th>No Of People</th>
            <th>Tour Start Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.numberOfPeople}</td>
              <td>{booking.startDate}</td>
              <td>
                <button
                  onClick={() => cancelBooking(booking.id)}
                  className="action-button"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
