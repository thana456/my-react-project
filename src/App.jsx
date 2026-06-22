import './App.css'
import { useState } from 'react'

const Header = () => (
  <h1>Hacker News Stories</h1>
)

const Search = ({ onSearch }) => {
  console.log('Search rendered')

  return (
    <div>
      <label htmlFor="search">
        Search:
      </label>

      <input
        type="text"
        id="search"
        onChange={onSearch}
      />
    </div>
  )
}

const Item = ({ story }) => (
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
    <span>Points: {story.points}</span>
    <p>Comments: {story.num_comments}</p>
  </div>
)

const List = ({ stories }) => {
  console.log('List rendered')

  return (
    <div>
      {stories.map((story) => (
        <Item
          key={story.objectID}
          story={story}
        />
      ))}
    </div>
  )
}

const App = () => {
  console.log('App rendered')

  const [searchTerm, setSearchTerm] = useState('')

  const stories = [
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter((story) =>
    story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Header />

      <Search onSearch={handleSearch} />

      <List stories={searchedStories} />
    </div>
  )
}

export default App
