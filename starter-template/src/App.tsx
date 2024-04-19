import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import Staff from 'pages/Staff'
import { Route, Routes, useLocation, useRoutes, useSearchParams } from 'react-router-dom'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/staff/',
      element: <Staff />,
      children: [
        {
          index: true,
          element: <StaffList />
        },
        {
          path: ':id',
          element: <StaffItem />
        },
        {
          path: 'add',
          element: <AddStaff />
        }
      ]
    },
    {
      path: '*',
      element: (
        <>
          <div>404 page</div>
        </>
      )
    }
  ])

  const location = useLocation()
  const [searchParams] = useSearchParams()
  console.log(Object.fromEntries([...searchParams]))

  return (
    <div className='App'>
      <MainLayout>
        {elements}
        {/* <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<Staff />}>
            <Route path=':id' element={<StaffItem />} />
            <Route index element={<StaffList />} />
            <Route path='add' element={<AddStaff />} />
          </Route>
          <Route
            path='*'
            element={
              <>
                <div>404 page</div>
              </>
            }
          />
        </Routes> */}
      </MainLayout>
    </div>
  )
}

export default App
