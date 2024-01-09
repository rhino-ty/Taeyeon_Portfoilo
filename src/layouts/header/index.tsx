export default function HeaderComponent() {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='navbar-end'>
        <ul className='menu menu-horizontal hidden px-1 lg:flex'>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          <li>
            <details className='dropdown'>
              <summary>Theme</summary>
              <ul className='dropdown-content'>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='System'
                    value='default'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Light'
                    value='light'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Dark'
                    value='dark'
                  />
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-5 w-5 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
