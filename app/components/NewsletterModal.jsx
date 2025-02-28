"use client"

import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { motion } from 'framer-motion'

const NewsletterModal = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    console.log(email)
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }
    
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Subscribed successfully!');
        setEmail('');
        setTimeout(() => {
          closeModal(false)
        }, 300)
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Failed to submit email.');
    } finally {
      setLoading(false);
    }
  };

  const screenClicked = (e) => {
    if (e.target.id === 'modalParent') {
      closeModal(false)
    }
  }

  return (
    <div id='modalParent' onClick={(e) => screenClicked(e)} className='w-screen h-screen z-[222] bg-transparent flex justify-center items-center fixed p-5'>
      <motion.div id="modal" initial={{ translateY: 50 }} animate={{ translateY: 0 }} transition={{ type: "tween", stiffness: 200, damping: 100 }}
        style={{ boxShadow: "10px 14px 0px #000" }}
        className='md:w-[500px] md:h-[300px] w-[380px] h-fit md:scale-100 scale-50 bg-white rounded-[20px] border-2 border-black'>
        
        <span className='p-3 w-full h-10 flex items-start justify-end border-b-2 border-black'>
          <GrClose onClick={() => closeModal(false)} className='cursor-pointer' />
        </span>

        <h1 className='font-theovandoesburg font-bold md:text-6xl sm:text-[2.5rem] text-3xl px-4 pt-4 pb-3 text-center tracking-widest'>
          SUBSCRIBE
        </h1>

        <p className='px-4 pb-1 text-lg'>Join the 404Club crew today - we've got tons of creative perks waiting for you!</p>

        <span className='p-4 flex flex-col w-full items-center justify-end'>
          <input
            type="email"
            placeholder='Email*'
            className='w-full border-2 border-black px-1.5 py-1 font-medium text-lg'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className='w-fit flex ml-auto border-2 border-black px-6 py-1 my-2 text-sm font-extrabold active:bg-black active:text-white'
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'SUBSCRIBE'}
          </button>

          {message && <p className="text-sm text-center mt-2">{message}</p>}
        </span>
      </motion.div>
    </div>
  );
};

export default NewsletterModal;
