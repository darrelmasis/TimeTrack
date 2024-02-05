import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import { useFloating, offset, useDismiss, useInteractions, FloatingArrow, arrow, useTransitionStyles, useMergeRefs, flip, autoUpdate } from '@floating-ui/react'
import { useTheme } from '../commons/useTheme'

const Dropdown = ({ children, classes }) => {
  const [isOpen, setIsOpen] = useState(false)
  const componentClasses = classNames('dropdown', classes && classes, isOpen && 'open')
  const arrowRef = useRef(null)
  const menuRef = useRef(null)

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-end',
    strategy: 'absolute',
    middleware: [
      offset(7),
      arrow({
        element: arrowRef,
      }),
      flip(),
    ],
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
  })

  const dismiss = useDismiss(context, { ancestorScroll: true })

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss])

  const handleIsOpen = () => setIsOpen(!isOpen)

  const childrenWithProps = React.Children.map(children, child =>
    React.isValidElement(child)
      ? React.cloneElement(child, {
          floatingRefs: refs,
          floatingStyles: floatingStyles,
          isOpen: isOpen,
          handleIsOpen: handleIsOpen,
          getReferenceProps: getReferenceProps,
          getFloatingProps: getFloatingProps,
          arrowRef: arrowRef,
          context: context,
          menuRef: menuRef,
        })
      : child
  )

  return <div className={componentClasses}>{childrenWithProps}</div>
}

const DropdownTrigger = ({ floatingRefs, children, classes, handleIsOpen, getReferenceProps }) => {
  const componentClasses = classNames('dropdown-trigger', classes && classes)

  const handleClick = () => handleIsOpen()

  return (
    <div className={componentClasses} onClick={handleClick} ref={floatingRefs.setReference} {...getReferenceProps()}>
      {children}
    </div>
  )
}

const DropdownMenu = ({ floatingStyles, floatingRefs, children, classes, getFloatingProps, arrowRef, context, menuRef }) => {
  const componentClasses = classNames('dropdown-menu rounded border z-index-4 p-3', classes && classes)
  const { isDarkMode } = useTheme()
  const arrowStyles = {
    fill: isDarkMode ? '#242526' : '#fff',
    stroke: isDarkMode ? '#373839' : '#dadcdf',
    strokeWidth: 1,
    tipRadius: 2,
  }
  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
      marginTop: '-15px',
    },
    common: {
      transformOrigin: 'top',
    },
  })

  const combinedStyles = { ...styles, ...floatingStyles }
  const combinedRefs = useMergeRefs([floatingRefs.setFloating, menuRef])

  return (
    isMounted && (
      <div className={componentClasses} ref={combinedRefs} style={combinedStyles} {...getFloatingProps()}>
        <FloatingArrow ref={arrowRef} context={context} {...arrowStyles} />
        {children}
      </div>
    )
  )
}

const DropdownItem = ({ children, classes }) => {
  const componentClasses = classNames('dropdown-item', classes && classes)

  return <div className={componentClasses}>{children}</div>
}

const DropdownItemText = ({ children, classes }) => {
  const componentClasses = classNames('dropdown-item-text mb-3', classes && classes)

  return <div className={componentClasses}>{children}</div>
}

const DropdownDivider = classes => {
  const componentClasses = classNames('dropdown-divider', classes && classes)

  return <div className={componentClasses} />
}

export { Dropdown, DropdownMenu, DropdownItem, DropdownItemText, DropdownTrigger, DropdownDivider }
