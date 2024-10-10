import { NavLink } from "react-router-dom";

import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
// eslint-disable-next-line import/no-duplicates

import { FaAngleRight } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div className="flex flex-row font-bold space-x-1">
        <div className="">Purchase And Store</div>
        <div className="">
          <FaAngleRight />
        </div>

        <div className="">Inbox</div>
      </div>

      <div className="flex flex-row font-bold tracking-wide space-x-1 my-2">
        <div className="">
          <AiOutlineLeftCircle />
        </div>
        <div>
          <NavLink>File An Indent</NavLink>
          <NavLink>| All Filed Indents</NavLink>
          <NavLink>| Saved Indents</NavLink>
          <NavLink to="/inbox">| Inbox</NavLink>
          <NavLink>| Outbox</NavLink>
          <NavLink>| Archieved Indents</NavLink>
        </div>

        <div>
          <AiOutlineRightCircle />
        </div>
      </div>
    </div>
  );
}

export default Header;
