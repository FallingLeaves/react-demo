import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'birthday', icon: <FaCreditCard />, url: '/birthday' },
      { label: 'tours', icon: <FaCreditCard />, url: '/tours' },
      { label: 'reviews', icon: <FaCreditCard />, url: '/reviews' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'accordion', icon: <FaBook />, url: '/accordion' },
      { label: 'menu', icon: <FaBook />, url: '/menu' },
      { label: 'tabs', icon: <FaBook />, url: '/tabs' },
      { label: 'slider', icon: <FaBook />, url: '/slider' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'lorem', icon: <FaBriefcase />, url: '/lorem' },
      { label: 'color', icon: <FaBriefcase />, url: '/color' },
    ],
  },
];

export default sublinks;
