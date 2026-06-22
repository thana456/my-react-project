import './App.css'

const stories = [
  {
    objectID: 101,
    title: "Introduction to React",
    url: "https://example.com/react",
    author: "Sarah",
    points: 120,
    num_comments: 35
  },
  {
    objectID: 102,
    title: "Modern JavaScript Features",
    url: "https://example.com/javascript",
    author: "Adam",
    points: 150,
    num_comments: 18
  },
  {
    objectID: 103,
    title: "Learning Node.js",
    url: "https://example.com/nodejs",
    author: "Lina",
    points: 140,
    num_comments: 42
  }
]

function Header() {
  return (
    <h1>Hacker News Stories</h1>
  )
}

function Search() {
  return (
    <div>
      <label htmlFor="search">
        Search:
      </label>

      <input
        type="text"
        id="search"
      />
    </div>
  )
}

function List() {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.objectID}>
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
      ))}
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  )
}

export default App

