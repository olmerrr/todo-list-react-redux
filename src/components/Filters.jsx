import {Link, useParams} from "react-router-dom";

export const Filters = () => {
  const {filter: activeFilter = "all"} = useParams();
  return <div className="filters">
    <Link
      style={{color: activeFilter === 'all' ? 'red' : 'black'}}
      to="/all"
    >
      all
    </Link>

    <Link
      style={{color: activeFilter === 'active' ? 'red' : 'black'}}
      to="/active"
    >
      active
    </Link>

    <Link
      style={{color: activeFilter === 'completed' ? 'red' : 'black'}}
      to="/completed"
    >
      completed
    </Link>
  </div>
}
