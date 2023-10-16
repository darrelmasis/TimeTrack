import { useState, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';

export const Dropdown = ({ toggleButton, isOpen, setIsOpen, children, size, position }) => {
  const sizePrefix = 'dropdown';
  const positionPrefix = 'drop';

  const sizeClasses = {
    small: `${sizePrefix}-sm`,
    medium: `${sizePrefix}-md`,
    large: `${sizePrefix}-lg`,
  };

  const positionClasses = {
    top: `${positionPrefix}-top`,
    right: `${positionPrefix}-right`,
    bottom: `${positionPrefix}-bottom`,
    left: `${positionPrefix}-left`,
  }

  const dropdownSize = sizeClasses[size] || sizeClasses['large'];
  const menuPosition = positionClasses[position] || positionClasses['bottom']

  const dropdownRef = useRef(null)
  const dropdownMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [isOpen])

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''} ${dropdownSize}`} ref={dropdownRef} >
      {toggleButton}
      <CSSTransition nodeRef={dropdownMenuRef} in={isOpen} timeout={300} classNames="open" unmountOnExit>
        <div ref={dropdownMenuRef} className={`${isOpen ? 'open' : ''} dropdown-menu rounded border z-index-2 p-3 ${menuPosition}`}>
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}
