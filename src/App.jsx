const API_ENDPOINT =
  'https://hn.algolia.com/api/v1/search?query='

const App = () => {
  const [searchTerm, setSearchTerm] =
    useState(
      localStorage.getItem('search') || ''
    )

  const [stories, setStories] =
    useState([])

  const [isLoading, setIsLoading] =
    useState(false)

  const [isError, setIsError] =
    useState(false)

  const [url, setUrl] = useState(
    `${API_ENDPOINT}react`
  )

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = () => {
    setUrl(
      `${API_ENDPOINT}${searchTerm}`
    )
  }

  useEffect(() => {
    localStorage.setItem(
      'search',
      searchTerm
    )
  }, [searchTerm])

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)

    fetch(url)
      .then((response) =>
        response.json()
      )
      .then((result) => {
        setStories(result.hits)
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
        setIsLoading(false)
      })
  }, [url])

  return (
    <div>
      <Header />

      <InputWithLabel
        id="search"
        type="text"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <button
        type="button"
        disabled={!searchTerm}
        onClick={handleSubmit}
      >
        Submit
      </button>

      {isError && (
        <p>
          Something went wrong.
        </p>
      )}

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List stories={stories} />
      )}
    </div>
  )
}