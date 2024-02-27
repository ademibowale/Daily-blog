import React from 'react'

function Search() {
    const [sidebarData, setSidebarData] = useState({
        searchTerm: '',
        sort: 'desc',
        category: 'uncategorized',
      });

      const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [showMore, setShowMore] = useState(false);
    
      const location = useLocation();
    
      const navigate = useNavigate();
      useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        const sortFromUrl = urlParams.get('sort');
        const categoryFromUrl = urlParams.get('category');
        if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
          setSidebarData({
            ...sidebarData,
            searchTerm: searchTermFromUrl,
            sort: sortFromUrl,
            category: categoryFromUrl,
          });
        }

  return (
    <div>
      
    </div>
  )
}

export default Search
