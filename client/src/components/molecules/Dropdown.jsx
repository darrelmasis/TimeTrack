import { useRef, useState, createContext, useContext } from 'react'
import classNames from 'classnames'
import { useFloating, offset, useDismiss, useInteractions, FloatingArrow, arrow, useTransitionStyles, useMergeRefs, flip, autoUpdate } from '@floating-ui/react'
import { useTheme } from '../commons/useTheme'
import { Icon } from '../commons/CustomIcons'
import { Link } from 'react-router-dom'

const DropdownContext = createContext()
const useDropdownContext = () => useContext(DropdownContext)

const Dropdown = ({ children, placement = 'bottom-end', classes }) => {
  const [isOpen, setIsOpen] = useState(false)
  const componentClasses = classNames('dropdown', classes && classes, isOpen && 'open')
  const arrowRef = useRef(null)
  const menuRef = useRef(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const { refs, floatingStyles, context } = useFloating({
    placement: placement,
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

  const contextValue = {
    toggleDropdown,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    arrowRef,
    context,
    menuRef,
  }

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className={componentClasses}>{children}</div>
    </DropdownContext.Provider>
  )
}

const DropdownTrigger = ({ children, classes }) => {
  const componentClasses = classNames('dropdown-trigger', classes && classes)
  const { refs, getReferenceProps, toggleDropdown } = useDropdownContext()

  return (
    <div className={componentClasses} onClick={toggleDropdown} ref={refs.setReference} {...getReferenceProps()}>
      {children}
    </div>
  )
}

const DropdownMenu = ({ children, classes }) => {
  const componentClasses = classNames('dropdown-menu rounded border z-index-4 p-3', classes && classes)
  const { refs, floatingStyles, arrowRef, menuRef, getFloatingProps, context } = useDropdownContext()
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
      marginTop: '-16px',
    },
    common: {
      transformOrigin: 'top',
    },
  })

  const combinedStyles = { ...styles, ...floatingStyles }
  const combinedRefs = useMergeRefs([refs.setFloating, menuRef])

  return (
    isMounted && (
      <div className={componentClasses} ref={combinedRefs} style={combinedStyles} {...getFloatingProps()}>
        <FloatingArrow ref={arrowRef} context={context} {...arrowStyles} />
        {children}
      </div>
    )
  )
}

const DropdownItem = ({ children, classes, type = 'link', icon, label, href }) => {
  const typeClasses = {
    link: 'dropdown-item',
    text: 'dropdown-item-text',
    content: 'dropdown-item dropdown-item-content',
  }
  const { toggleDropdown } = useDropdownContext()
  const componentClasses = classNames(typeClasses[type], classes && classes)
  const iconClasses = classNames('me-2')
  const labelClasses = classNames('vertical-align-middle')

  const iconComponent = icon ? <Icon icon={icon} classes={iconClasses} /> : null
  const componentLabel = <span className={labelClasses}>{label}</span>

  const dropdownItemContent = (
    <>
      {iconComponent}
      {componentLabel}
    </>
  )

  const createDropdownItem = content => (
    <div className={componentClasses} onClick={toggleDropdown}>
      {content}
    </div>
  )

  const linkType = createDropdownItem(
    <Link className="wrapper dropdown-link" to={href}>
      {dropdownItemContent}
    </Link>
  )

  const contentType = createDropdownItem(children)
  const textType = createDropdownItem(children)

  const typeOfItem = { link: linkType, content: contentType, text: textType }

  return typeOfItem[type]
}

const DropdownDivider = classes => {
  const componentClasses = classNames('dropdown-divider', classes && classes)

  return <div className={componentClasses} />
}

export { Dropdown, DropdownMenu, DropdownItem, DropdownTrigger, DropdownDivider }
