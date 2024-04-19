import StaffList from 'components/StaffList'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff'
              end
              className={({ isActive }) => {
                const activeClass = isActive ? 'border-blue-600 text-blue-600' : ''
                return `${activeClass} active inline-block rounded-t-lg border-b-2 p-4`
              }}
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              end
              className={({ isActive }) => {
                const activeClass = isActive ? 'border-blue-600 text-blue-600' : ''
                return `${activeClass} active inline-block rounded-t-lg border-b-2 p-4`
              }}
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
      {/* <StaffList /> */}
      {/* <AddStaff /> */}
    </div>
  )
}
