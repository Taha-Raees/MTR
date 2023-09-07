"use client"
import React from 'react';
import './/Notification.scss';
import { motion } from 'framer-motion';

const Notification= () => {
  return (
    <div className="Notification">
      <motion.div
      className='notificationBar'
      initial={{ opacity: 1, x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    >
      Website is still under Construction. Some pages may not load properly on mobile devices. Sorry for any inconvenience.
    </motion.div>
    </div>
  );
};
export default Notification;

