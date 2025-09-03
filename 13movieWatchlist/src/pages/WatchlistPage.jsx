import { NavLink } from "react-router-dom";

function WatchlistPage() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Watchlist
        </NavLink>
      </nav>
      <h1 className="text-3xl text-center">This is watch list page</h1>
    </div>
  );
}

export default WatchlistPage;
