import Link from 'next/link';

export default function HeaderComponent() {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        {/* <Link href={""} className='btn btn-ghost text-xl'></Link> */}
      </div>
      <div className='navbar-end'>
        <div className='hidden lg:block'>
          <Link href={''} className='btn btn-ghost rounded-btn'>
            Portfolio
          </Link>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost rounded-btn '
            >
              Theme
            </div>
            <ul
              tabIndex={0}
              className='menu dropdown-content z-[1] mt-4 w-52 rounded-box bg-base-100 p-2 shadow-lg '
            >
              <li>
                <input
                  type='radio'
                  name='theme-dropdown'
                  className='theme-controller btn btn-ghost btn-sm btn-block justify-start'
                  aria-label='System'
                  value='default'
                />
              </li>
              <li>
                <input
                  type='radio'
                  name='theme-dropdown'
                  className='theme-controller btn btn-ghost btn-sm btn-block justify-start'
                  aria-label='Light'
                  value='light'
                />
              </li>
              <li>
                <input
                  type='radio'
                  name='theme-dropdown'
                  className='theme-controller btn btn-ghost btn-sm btn-block justify-start'
                  aria-label='Dark'
                  value='dark'
                />
              </li>
            </ul>
          </div>
        </div>

        <div className='dropdown dropdown-left'>
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
            className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
          >
            <li>
              <Link href={''}>Item 1</Link>
            </li>
            <li>
              <Link href={''}>Parent</Link>
              <ul className='p-2'>
                <li>
                  <Link href={''}>Submenu 1</Link>
                </li>
                <li>
                  <Link href={''}>Submenu 2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
