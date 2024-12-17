import { NavLink } from "react-router"

const Header = () => {
  return (
    <header>

      <div>
        <div className=''>
          <div className='flex bg-black h-[50px] w-full text-white sticky justify-between'>
            <div>
              <h1 className='flex text-2xl ml-5 p-2 sticky'>Demo</h1>
            </div>
            <div className='flex justify-between '>
              <nav>
                <NavLink to={'/about'} className='p-2 mr-3 '>About</NavLink>
                <NavLink className='p-2 mr-7 '>Contact</NavLink>
              </nav>
            </div>

          </div>

          <nav>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink>Contact</NavLink>

          </nav>

        </header>
        )
}
        export default Header