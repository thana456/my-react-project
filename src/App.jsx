import './App.css'
import { useState, useEffect } from 'react'

const Header = () => (
  <h1>Hacker News Stories</h1>
)

const InputWithLabel = ({
  id,
  value,
  onInputChange,
  type,
  children,
}) => (
  <>
    <label htmlFor={id}>
      {children}
    </label>

    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </>
)

const Item = ({
  story,
  onRemoveItem,
}) => (
  <div>
    <h3>
      <a
        href={story.url}
        target="_blank"
        rel="noreferrer"
      >
        {story.title}
      </a>
    </h3>

    <p>Author: {story.author}</p>
    <p>Points: {story.points}</p>
    <p>Comments: {story.num_comments}</p>

    <button
      onClick={() =>
        onRemoveItem(story.objectID)
      }
    >
      Delete
    </button>
  </div>
)

const List = ({
  stories,
  onRemoveItem,
}) => (
  <div>
    {stories.map((story) => (
      <Item
        key={story.objectID}
        story={story}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </div>
)

const App = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || ''
  )

  const initialStories = [
    {
      objectID: 101,
      title: 'Introduction to React',
      url: 'https://example.com/react',
      author: 'Sarah',
      points: 120,
      num_comments: 35,
    },
    {
      objectID: 102,
      title: 'Modern JavaScript Features',
      url: 'https://example.com/javascript',
      author: 'Adam',
      points: 150,
      num_comments: 18,
    },
    {
      objectID: 103,
      title: 'Learning Node.js',
      url: 'https://example.com/nodejs',
      author: 'Lina',
      points: 140,
      num_comments: 42,
    },
  ]

  const [stories, setStories] =
    useState(initialStories)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleRemoveStory = (
    objectID
  ) => {
    const newStories =
      stories.filter(
        (story) =>
          story.objectID !== objectID
      )

    setStories(newStories)
  }

  useEffect(() => {
    localStorage.setItem(
      'search',
      searchTerm
    )
  }, [searchTerm])

  const searchedStories =
    stories.filter((story) =>
      story.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    )

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

      <List
        stories={searchedStories}
        onRemoveItem={
          handleRemoveStory
        }
      />
    </div>
  )
}

export default App
