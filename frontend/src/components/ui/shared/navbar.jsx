import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { Button } from '../button'
import { useDispatch, useSelector } from 'react-redux'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/slice'
import { toast } from 'sonner'
import axios from 'axios'

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  };

  const navLinks = user && user.role === 'recruiter' ? (
    <>
      <li><Link className="nav-link" to='/admin/companies'>Companies</Link></li>
      <li><Link className="nav-link" to='/admin/jobs'>Jobs</Link></li>
    </>
  ) : (
    <>
      <li><Link className="nav-link" to='/'>Home</Link></li>
      <li><Link className="nav-link" to='/jobs'>Jobs</Link></li>
      <li><Link className="nav-link" to='/browse'>Browse</Link></li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-white/80 via-purple-100/70 to-white/80 shadow-md transition-all">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 h-16">
        <Link to="/">
          <h1 className="text-2xl font-bold cursor-pointer text-gray-900">
            Job<span >Sphere</span>
          </h1>
        </Link>

        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-6 text-gray-800 font-medium">
            {navLinks}
          </ul>

          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer w-10 h-10 rounded-full overflow-hidden">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="avatar" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white shadow-lg rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 rounded-full overflow-hidden">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="avatar" />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{user?.fullname}</h4>
                    <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2 text-gray-700">
                  {user?.role === 'student' && (
                    <div className="flex items-center gap-2">
                      <User2 size={18} />
                      <Button variant="link"><Link to='/profile'>View Profile</Link></Button>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <LogOut size={18} />
                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>

      <style jsx="true">{`
        .nav-link {
          position: relative;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #6A38C2;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(to right, #6A38C2, #F83002);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
