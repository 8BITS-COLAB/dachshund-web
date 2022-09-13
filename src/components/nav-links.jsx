import React from 'react'
// import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  {
    name: 'Docs',
    to: 'https://documenter.getpostman.com/view/13846559/2s7YYu4hk3',
  },
]
export function NavLinks({ className }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="ml-4">
          <a href={link.to} className="border-b text-white">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
