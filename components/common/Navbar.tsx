import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchJson } from "../../lib/api";

interface TUser {
  id: number | null;
  name: string | null;
};

const Navbar = () => {
  const [user, setUser] = useState<TUser>();

  const SettingUser = async () => {
    try {
      const user = await fetchJson('/api/user');
      console.log('타야해..', user)
      setUser(user);
    } catch (error) {
    }
  }

  useEffect(() => {
    SettingUser();
  }, []);

  const handleSignOut = async () => {
    await fetchJson('/api/logout');
    setUser(undefined);
  }
  return (
    <>
      <nav className="py-1 text-sm">
        <ul className="md:flex lg:flex xl:flex">
          <li className="__nav">
            <Link href="/">
              <a>메인페이지로 이동</a>
            </Link>
          </li>
          <li className="__nav">
            <Link href="/mypage">
              <a>마이페이지로 이동</a>
            </Link>
          </li>
          <li className="__nav">
            {user ? (
              <>
                <li>
                  {user.name}
                </li>
                <li>
                  <button onClick={handleSignOut}>로그아웃</button>
                </li>
              </>

            ) :
              <Link href="/sign-in">
                <a>로그인페이지 이동</a>
              </Link>}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
